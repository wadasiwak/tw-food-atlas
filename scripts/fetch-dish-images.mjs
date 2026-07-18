// 圖片管線 B 段：菜色示意圖池抓取。
// 用法：node scripts/fetch-dish-images.mjs            — 逐條抓池內候選
//       node scripts/fetch-dish-images.mjs --coverage — 列出還沒被任何 keyword
//         覆蓋的 mustOrder 詞與菜系（把池收斂到全覆蓋用）
// 池定義：scripts/dish-pool.json（committed，手工維護）：
//   [{ "slug": "beef-noodles", "matchKeywords": ["牛肉麵"], "query": "台灣 牛肉麵" }, …]
//   兜底條目 slug 格式 "cuisine-<cuisine>"，matchKeywords 留空。
// 候選 → scratch/dish-image-candidates.json；縮圖 → scratch/thumbs-dishes/
// 覆核後選定寫 scratch/dish-image-picks.json：{ "<slug>": <index> }
import { existsSync, mkdirSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import {
  root, readJson, sleep, searchWithRetry, loadRestaurants, downloadThumb,
} from './lib/commons.mjs'

const scratch = join(root, 'scratch')
const thumbsDir = join(scratch, 'thumbs-dishes')
mkdirSync(thumbsDir, { recursive: true })
const poolPath = join(root, 'scripts', 'dish-pool.json')
const candidatesPath = join(scratch, 'dish-image-candidates.json')

const pool = readJson(poolPath, null)
if (!pool) {
  console.error(`❌ 找不到 ${poolPath}`)
  process.exit(1)
}

if (process.argv.includes('--coverage')) {
  const { ALL } = await loadRestaurants()
  const kws = pool.flatMap((d) => d.matchKeywords ?? [])
  const cuisineSlugs = new Set(pool.map((d) => d.slug))
  const unmatched = new Map() // mustOrder 詞 → 出現次數（只列沒被池覆蓋且菜系也沒兜底的店）
  let uncovered = 0
  for (const r of ALL) {
    const hit = r.mustOrder.some((m) => kws.some((k) => m.includes(k)))
    if (hit) continue
    if (!cuisineSlugs.has(`cuisine-${r.cuisine}`)) {
      uncovered++
      for (const m of r.mustOrder) unmatched.set(m, (unmatched.get(m) ?? 0) + 1)
    }
  }
  const missingCuisines = new Set(
    ALL.map((r) => r.cuisine).filter((c) => !cuisineSlugs.has(`cuisine-${c}`)),
  )
  console.log(`池 ${pool.length} 條｜keyword 未命中且無菜系兜底的店 ${uncovered} 家`)
  if (missingCuisines.size) console.log(`缺兜底菜系: ${[...missingCuisines].join(', ')}`)
  const top = [...unmatched].sort((a, b) => b[1] - a[1]).slice(0, 40)
  for (const [m, n] of top) console.log(`  ${m} ×${n}`)
  process.exit(0)
}

const candidates = readJson(candidatesPath, {})
let done = 0
for (const d of pool) {
  if (d.slug in candidates) continue
  const result = await searchWithRetry(d.query)
  if (result !== undefined) {
    candidates[d.slug] = result.length ? result : null
    for (const [i, c] of result.entries()) {
      const p = join(thumbsDir, `${d.slug}-${i}.jpg`)
      if (!existsSync(p)) {
        await downloadThumb(c.src, p)
        await sleep(300)
      }
    }
    console.log(`${d.slug}: ${result.length ? `${result.length} 張候選` : '無合適圖'}`)
  }
  writeFileSync(candidatesPath, JSON.stringify(candidates, null, 1))
  done++
  await sleep(400)
}

const stats = Object.values(candidates)
console.log(
  `\n完成 ${done} 條新查詢｜累計 ${stats.length}/${pool.length}｜有候選 ${stats.filter((v) => Array.isArray(v) && v.length).length}｜無圖 ${stats.filter((v) => v === null).length}`,
)
console.log(`覆核縮圖：${thumbsDir}\n選定寫進 scratch/dish-image-picks.json（{ "<slug>": <index> }）`)
