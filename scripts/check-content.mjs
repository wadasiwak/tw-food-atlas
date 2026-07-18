// 內容驗證器：把 src/data bundle 成臨時 ESM 後載入，逐店檢查。
// 內容批次（subagent 產的分片）合入前必跑。
//
// 單檔模式：`node scripts/check-content.mjs src/data/cities/chiayi.ts`
// 只驗那一個城市檔（exports { restaurants }），給內容產生 agent 自驗用。
//
// 英文包模式：`node scripts/check-content.mjs src/data/en/chiayi.ts`
// 驗 en 檔（exports { en }）並對照同名 zh 城市檔逐 id 比對（對齊/字數/tips 有無）。
//
// 全量模式另驗：英譯覆蓋率（--require-full-en 時缺譯=error）、
// STORE_IMAGES 圖片資料完整性（授權白名單/署名四欄/kind）。
import { execFileSync } from "node:child_process";
import { mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, dirname, basename } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const tmp = mkdtempSync(join(tmpdir(), "twfood-check-"));
const entry = join(tmp, "entry.ts");
const bundle = join(tmp, "data.mjs");

const requireFullEn = process.argv.includes("--require-full-en");
const singleFile = process.argv.slice(2).find((a) => !a.startsWith("--"));
const isEnFile = !!singleFile && /src\/data\/en\//.test(singleFile);
const dataEntry = singleFile ? join(root, singleFile) : join(root, "src/data/index.ts");

const entryLines = [
  `export { CITIES, TAIWAN_BBOX } from ${JSON.stringify(join(root, "src/data/cities.ts"))};`,
  `export { TAGS } from ${JSON.stringify(join(root, "src/data/types.ts"))};`,
];
if (isEnFile) {
  // en 檔對照同名 zh 城市檔
  const zhPath = join(root, "src/data/cities", basename(singleFile));
  entryLines.push(`export { en as EN_PACK } from ${JSON.stringify(dataEntry)};`);
  entryLines.push(`export { restaurants as ALL } from ${JSON.stringify(zhPath)};`);
} else if (singleFile) {
  entryLines.push(`export { restaurants as ALL } from ${JSON.stringify(dataEntry)};`);
} else {
  entryLines.push(`export { ALL_RESTAURANTS as ALL } from ${JSON.stringify(dataEntry)};`);
  entryLines.push(`export { EN_ALL } from ${JSON.stringify(join(root, "src/data/en/index.ts"))};`);
  entryLines.push(
    `export { STORE_IMAGES } from ${JSON.stringify(join(root, "src/data/extras/images.ts"))};`,
  );
}
writeFileSync(entry, entryLines.join("\n"));

try {
  execFileSync(
    join(root, "node_modules/.bin/rolldown"),
    [entry, "--format", "esm", "--platform", "node", "--file", bundle],
    { stdio: ["ignore", "ignore", "inherit"] },
  );
} catch {
  rmSync(tmp, { recursive: true, force: true });
  console.error("❌ bundle 失敗（通常是資料檔語法錯誤），中止。");
  process.exit(1);
}

const mod = await import(pathToFileURL(bundle).href);
rmSync(tmp, { recursive: true, force: true });

const { CITIES, TAIWAN_BBOX, TAGS, ALL, EN_PACK, EN_ALL, STORE_IMAGES } = mod;

const errors = [];
const warn = [];
const err = (msg) => errors.push(msg);

// 字數用 code point 數（CJK 一字一格）
const len = (s) => [...(s ?? "")].length;

// --- 英譯規則（en 單檔模式與全量模式共用） ---
function checkEnEntry(id, e, zh) {
  const tag = `en:${id}`;
  if (!zh) {
    err(`${tag}: id 不存在於中文資料（孤兒英譯）`);
    return;
  }
  if (!e.name || len(e.name) < 2 || len(e.name) > 60) err(`${tag}: name 需 2–60 字`);
  if (!e.area) err(`${tag}: 缺 area`);
  const bl = len(e.blurb);
  if (bl < 80 || bl > 400) err(`${tag}: blurb ${bl} 字元（需 120–330，硬限 80–400）`);
  else if (bl < 120 || bl > 330) warn.push(`${tag}: blurb ${bl} 字元，偏離 120–330`);
  if (zh.tips && !e.tips) warn.push(`${tag}: 中文有 tips 但英譯缺（會回退中文，混排難看）`);
  if (!zh.tips && e.tips) err(`${tag}: 中文沒有 tips，英譯不得有`);
  if (e.tips && len(e.tips) > 120) err(`${tag}: tips 過長 (${len(e.tips)})`);
  if (!Array.isArray(e.mustOrder) || e.mustOrder.length !== zh.mustOrder.length)
    err(`${tag}: mustOrder 需與中文等長（${zh.mustOrder.length} 樣）逐索引對應`);
  else
    for (const m of e.mustOrder)
      if (!m || len(m) > 30) err(`${tag}: mustOrder「${m}」需為 1–30 字`);
  // 全形中文殘留 = 忘了翻（店名內的中文原名不算，name 不檢）
  for (const f of ["area", "blurb", "tips"])
    if (/[一-鿿]/.test(e[f] ?? ""))
      warn.push(`${tag}: ${f} 含中文字元，確認是否漏翻`);
}

if (isEnFile) {
  const zhById = new Map(ALL.map((r) => [r.id, r]));
  const entries = Object.entries(EN_PACK ?? {});
  if (!entries.length) err("en 檔是空的");
  for (const [id, e] of entries) checkEnEntry(id, e, zhById.get(id));
  const missing = ALL.filter((r) => !EN_PACK?.[r.id]);
  if (missing.length)
    warn.push(`尚有 ${missing.length} 家未翻: ${missing.slice(0, 5).map((r) => r.id).join(", ")}${missing.length > 5 ? " …" : ""}`);
  console.log(`📊 en 對照 ${basename(singleFile)}：中文 ${ALL.length} 家 / 英譯 ${entries.length} 筆`);
  for (const w of warn) console.log(`⚠️  ${w}`);
  if (errors.length) {
    console.error(`\n❌ ${errors.length} 個錯誤:`);
    for (const e of errors) console.error(`  - ${e}`);
    process.exit(1);
  }
  console.log(`\n✅ 英譯驗證通過${warn.length ? `（${warn.length} 個警告）` : ""}`);
  process.exit(0);
}

const inBox = (c, b) =>
  c && c.lat >= b.minLat && c.lat <= b.maxLat && c.lng >= b.minLng && c.lng <= b.maxLng;

const CUISINES = new Set([
  "taiwanese", "street-food", "noodles", "breakfast", "seafood", "hotpot",
  "bbq-fried", "japanese", "chinese", "western", "asian", "dessert",
  "drinks", "cafe", "bakery", "vegetarian",
]);
const TAG_SET = new Set(TAGS);
// 模板句黑名單：抓空泛行銷腔（WARN，人工複查）
const CLICHES = ["必吃", "CP值", "銅板美食", "老饕", "饕客", "隱藏版", "秒殺"];
const ID_RE = /^[a-z0-9]+(-[a-z0-9]+)*$/;

const cityById = new Map(CITIES.map((c) => [c.id, c]));
for (const c of CITIES) {
  if (!c.name || !c.emoji || !c.region) err(`city ${c.id}: 缺 name/emoji/region`);
  const b = c.bbox;
  if (!b || b.minLat >= b.maxLat || b.minLng >= b.maxLng) err(`city ${c.id}: bbox 不合法`);
  if (!inBox({ lat: b.minLat, lng: b.minLng }, TAIWAN_BBOX) || !inBox({ lat: b.maxLat, lng: b.maxLng }, TAIWAN_BBOX))
    err(`city ${c.id}: bbox 超出台灣範圍`);
}

const haversineM = (a, b) => {
  const R = 6371000, rad = (d) => (d * Math.PI) / 180;
  const dLat = rad(b.lat - a.lat), dLng = rad(b.lng - a.lng);
  const h =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(rad(a.lat)) * Math.cos(rad(b.lat)) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
};
// 店名相似（近距離重複收錄偵測用）：共享 ≥2 個相同字
const nameOverlap = (a, b) => {
  const set = new Set([...a]);
  let n = 0;
  for (const ch of new Set([...b])) if (set.has(ch)) n++;
  return n >= 2;
};

const ids = new Set();
for (const r of ALL) {
  const tag = `${r.id ?? "(缺 id)"}`;
  if (!r.id || !ID_RE.test(r.id)) err(`${tag}: id 需為 kebab-case`);
  if (ids.has(r.id)) err(`${tag}: 重複 id`);
  ids.add(r.id);

  const city = cityById.get(r.city);
  if (!city) {
    err(`${tag}: city "${r.city}" 不存在`);
    continue;
  }
  if (!r.id.startsWith(`${r.city}-`)) err(`${tag}: id 需以 "${r.city}-" 開頭`);
  if (!r.name) err(`${tag}: 缺 name`);
  if (!r.area) err(`${tag}: 缺 area`);

  if (!inBox(r.center, TAIWAN_BBOX))
    err(`${tag}: 座標不在台灣 (${r.center?.lat}, ${r.center?.lng})`);
  else if (!inBox(r.center, city.bbox))
    err(`${tag}: 座標超出 ${r.city} bbox (${r.center.lat}, ${r.center.lng})`);

  if (!CUISINES.has(r.cuisine)) err(`${tag}: cuisine 不合法 "${r.cuisine}"`);
  if (![1, 2, 3, 4].includes(r.priceBand)) err(`${tag}: priceBand 需為 1–4`);

  if (!Array.isArray(r.tags) || r.tags.length < 2 || r.tags.length > 6)
    err(`${tag}: tags 需為 2–6 個`);
  else {
    for (const t of r.tags) if (!TAG_SET.has(t)) err(`${tag}: tag "${t}" 不在白名單`);
    if (new Set(r.tags).size !== r.tags.length) err(`${tag}: tags 重複`);
  }

  if (!Array.isArray(r.mustOrder) || r.mustOrder.length < 1 || r.mustOrder.length > 3)
    err(`${tag}: mustOrder 需為 1–3 樣`);
  else
    for (const m of r.mustOrder)
      if (!m || len(m) > 10) err(`${tag}: mustOrder「${m}」需為 1–10 字`);

  const bl = len(r.blurb);
  if (bl < 45 || bl > 150) err(`${tag}: blurb ${bl} 字（需 60–120，硬限 45–150）`);
  else if (bl < 60 || bl > 130) warn.push(`${tag}: blurb ${bl} 字，偏離 60–120`);

  if (r.tips !== undefined) {
    if (len(r.tips) > 90) err(`${tag}: tips ${len(r.tips)} 字（≤60，硬限 90）`);
    else if (len(r.tips) > 60) warn.push(`${tag}: tips 偏長 (${len(r.tips)} 字)`);
  }

  if (r.since !== undefined && !(r.since >= 1600 && r.since <= 2026))
    err(`${tag}: since 不合理 (${r.since})`);

  if (!r.gmapsQuery) err(`${tag}: 缺 gmapsQuery`);
  else {
    if (/https?:|[/?#&]/.test(r.gmapsQuery)) err(`${tag}: gmapsQuery 是 query 不是 URL`);
    if (r.name && !r.gmapsQuery.includes(r.name))
      warn.push(`${tag}: gmapsQuery 未含完整店名「${r.name}」，確認能搜到`);
  }

  for (const field of ["blurb", "tips"]) {
    const text = r[field] ?? "";
    for (const c of CLICHES)
      if (text.includes(c)) warn.push(`${tag}: ${field} 含模板句「${c}」`);
  }
}

// --- 同城近距離同名嫌疑（<30m 且店名共享 ≥2 字 = 重複收錄嫌疑） ---
const byCity = new Map();
for (const r of ALL) {
  if (!byCity.has(r.city)) byCity.set(r.city, []);
  byCity.get(r.city).push(r);
}
for (const [, list] of byCity) {
  for (let i = 0; i < list.length; i++)
    for (let j = i + 1; j < list.length; j++) {
      const [a, b] = [list[i], list[j]];
      if (a.center && b.center && haversineM(a.center, b.center) < 30 && nameOverlap(a.name, b.name))
        warn.push(`${a.id} / ${b.id}: 距離 <30m 且店名相近，重複收錄嫌疑`);
    }
}

// --- 每城下限與城×菜系矩陣 ---
if (!singleFile) {
  for (const c of CITIES) {
    const list = byCity.get(c.id) ?? [];
    if (list.length === 0) warn.push(`city ${c.id}: 還沒有內容`);
    else {
      if (list.length < 12) warn.push(`city ${c.id}: 只有 ${list.length} 家（下限 12）`);
      const sf = list.filter((r) => r.cuisine === "street-food").length;
      if (sf < 3) warn.push(`city ${c.id}: street-food 只有 ${sf} 家（下限 3）`);
    }
  }
}

// --- 同 area 上限（推薦引擎 city|area 硬上限 2 家，area 過肥 = 曝光被吃掉） ---
for (const [cid, list] of byCity) {
  const areaCount = new Map();
  for (const r of list) areaCount.set(r.area, (areaCount.get(r.area) ?? 0) + 1);
  for (const [a, n] of areaCount)
    if (n > 6) warn.push(`city ${cid}: area「${a}」有 ${n} 家（上限 6，MMR 只會露出 2 家）`);
}

// --- 全量模式：英譯覆蓋率 + 圖片資料 ---
if (!singleFile) {
  const zhById = new Map(ALL.map((r) => [r.id, r]));

  for (const [id, e] of Object.entries(EN_ALL ?? {})) checkEnEntry(id, e, zhById.get(id));
  const missingEn = ALL.filter((r) => !EN_ALL?.[r.id]);
  const covered = ALL.length - missingEn.length;
  console.log(`🌐 英譯覆蓋 ${covered}/${ALL.length}`);
  if (missingEn.length) {
    const byCityMiss = new Map();
    for (const r of missingEn) byCityMiss.set(r.city, (byCityMiss.get(r.city) ?? 0) + 1);
    const msg = `英譯缺 ${missingEn.length} 家: ${[...byCityMiss].map(([c, n]) => `${c} ${n}`).join(" / ")}`;
    if (requireFullEn) err(msg);
    else warn.push(msg);
  }

  // 圖片：授權白名單（拒 NC/ND）、署名四欄、kind、src 域名
  const LICENSE_OK = /^(cc0|public domain|attribution$|cc[ -]by(?![a-z-]*(nc|nd)))/i;
  for (const [id, img] of Object.entries(STORE_IMAGES ?? {})) {
    const tag = `img:${id}`;
    if (!zhById.has(id)) err(`${tag}: id 不存在於資料（孤兒圖片）`);
    if (!img.src?.startsWith("https://upload.wikimedia.org/")) err(`${tag}: src 需為 upload.wikimedia.org`);
    for (const f of ["author", "license", "licenseUrl", "sourceUrl"])
      if (!img[f]) err(`${tag}: 缺 ${f}（CC 署名必要欄位）`);
    if (img.kind !== "photo" && img.kind !== "dish") err(`${tag}: kind 需為 photo|dish`);
    if (img.license && !LICENSE_OK.test(img.license) )
      err(`${tag}: 授權「${img.license}」不在白名單（CC0/PD/CC BY/CC BY-SA/Attribution）`);
    if (/n[cd]/i.test(img.license ?? "") && /nc|nd/i.test(img.license ?? ""))
      err(`${tag}: 授權含 NC/ND，不可商用/改作，禁用`);
  }
  const imgCount = Object.keys(STORE_IMAGES ?? {}).length;
  console.log(`🖼️  圖片覆蓋 ${imgCount}/${ALL.length}`);
}

// --- 統計 ---
console.log("📊 內容統計（城 × 菜系）");
const cuisineList = [...CUISINES];
for (const c of singleFile ? [...new Set(ALL.map((r) => r.city))] : CITIES.map((x) => x.id)) {
  const list = (byCity.get(c) ?? []);
  if (!list.length) continue;
  const parts = cuisineList
    .map((cu) => [cu, list.filter((r) => r.cuisine === cu).length])
    .filter(([, n]) => n > 0)
    .map(([cu, n]) => `${cu} ${n}`);
  console.log(`  ${c} (${list.length}): ${parts.join(" / ")}`);
}
console.log(`  合計 ${ALL.length} 家`);

for (const w of warn) console.log(`⚠️  ${w}`);
if (errors.length) {
  console.error(`\n❌ ${errors.length} 個錯誤:`);
  for (const e of errors) console.error(`  - ${e}`);
  process.exit(1);
}
console.log(`\n✅ 內容驗證通過${warn.length ? `（${warn.length} 個警告）` : ""}`);
