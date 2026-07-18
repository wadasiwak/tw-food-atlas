// 圖片管線 A 段：逐店搜 Commons 找「該店實拍」候選。
// 用法：node scripts/fetch-store-images.mjs
//  - 查詢詞 = 店名 + 城市中文名（可被 scratch/store-image-overrides.json 覆寫）
//  - 相關性過濾：檔名/描述必須含店名核心字串（店名搜尋雜訊多，寧缺勿濫——
//    落選的店由菜色示意圖 B 段兜底）
//  - 斷點續跑三態同 recipes：鍵不存在=沒查過/失敗、null=確定沒有、陣列=候選
//  - 縮圖下載到 scratch/thumbs-stores/<id>-<n>.jpg 供親眼覆核
//  - 覆核後把選定寫進 scratch/store-image-picks.json：{ "<id>": <index|null> }
import { existsSync, mkdirSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import {
  root, readJson, sleep, searchWithRetry, loadRestaurants, downloadThumb,
} from './lib/commons.mjs'

const scratch = join(root, 'scratch')
const thumbsDir = join(scratch, 'thumbs-stores')
mkdirSync(thumbsDir, { recursive: true })
const candidatesPath = join(scratch, 'store-image-candidates.json')
const overridesPath = join(scratch, 'store-image-overrides.json')

const { ALL, CITIES } = await loadRestaurants()
const cityName = new Map(CITIES.map((c) => [c.id, c.name]))
const overrides = readJson(overridesPath, {})
const candidates = readJson(candidatesPath, {})

// 店名核心：去掉常見綴詞後的主體（相關性過濾用）
const coreOf = (name) =>
  name.replace(/(餐廳|飯店|食堂|小吃店|專賣店|創始店|總店|本店|老店)$/u, '')

const isRelevant = (cand, r) => {
  const hay = `${cand.title} ${cand.desc}`
  const core = coreOf(r.name)
  if (core.length >= 2 && hay.includes(core)) return true
  // 店名前 3 字（漢字店名的主體幾乎都在前段）
  const head = [...r.name].slice(0, 3).join('')
  return head.length >= 2 && hay.includes(head)
}

let done = 0
for (const r of ALL) {
  if (r.id in candidates) continue
  const query = overrides[r.id] ?? `${r.name} ${cityName.get(r.city) ?? ''}`.trim()
  const result = await searchWithRetry(query)
  if (result !== undefined) {
    const relevant = result.filter((c) => isRelevant(c, r))
    candidates[r.id] = relevant.length ? relevant : null
    for (const [i, c] of relevant.entries()) {
      const p = join(thumbsDir, `${r.id}-${i}.jpg`)
      if (!existsSync(p)) {
        await downloadThumb(c.src, p)
        await sleep(300)
      }
    }
    console.log(`${r.id}: ${relevant.length ? `${relevant.length} 張候選` : '無合適實拍'}`)
  }
  writeFileSync(candidatesPath, JSON.stringify(candidates, null, 1))
  done++
  await sleep(400)
}

const stats = Object.values(candidates)
console.log(
  `\n完成 ${done} 家新查詢｜累計 ${stats.length}/${ALL.length}｜有候選 ${stats.filter((v) => Array.isArray(v) && v.length).length}｜確定無圖 ${stats.filter((v) => v === null).length}`,
)
console.log(`覆核縮圖：${thumbsDir}\n選定寫進 scratch/store-image-picks.json 後跑 build-image-data.mjs`)
