// 圖片管線對映段：印出「每店 → 菜色圖 slug」的 dry-run 對照表，供人工掃荒謬配對。
// 對映規則：店有 store-pick 實拍 → 跳過；否則取第一個 mustOrder keyword 命中的
// dish slug；都沒中 → 兜底 cuisine-<cuisine>。
// 覆寫：scratch/dish-map-overrides.json { "<id>": "<slug>" }
// 用法：node scripts/map-dish-images.mjs [--full]（預設只印每 slug 前 3 家示例）
import { join } from 'node:path'
import { root, readJson, loadRestaurants } from './lib/commons.mjs'

const scratch = join(root, 'scratch')
const pool = readJson(join(root, 'scripts', 'dish-pool.json'), [])
const storePicks = readJson(join(scratch, 'store-image-picks.json'), {})
const overrides = readJson(join(scratch, 'dish-map-overrides.json'), {})
const dishCandidates = readJson(join(scratch, 'dish-image-candidates.json'), {})
const dishPicks = readJson(join(scratch, 'dish-image-picks.json'), {})

const { ALL } = await loadRestaurants()

export function dishSlugFor(r) {
  if (overrides[r.id]) return overrides[r.id]
  for (const m of r.mustOrder)
    for (const d of pool)
      if ((d.matchKeywords ?? []).some((k) => m.includes(k))) return d.slug
  return `cuisine-${r.cuisine}`
}

const bySlug = new Map()
let photoCount = 0
const unmapped = []
for (const r of ALL) {
  if (Number.isInteger(storePicks[r.id])) {
    photoCount++
    continue
  }
  const slug = dishSlugFor(r)
  const usable = Array.isArray(dishCandidates[slug]) && dishPicks[slug] !== undefined
  if (!usable) unmapped.push({ id: r.id, slug })
  if (!bySlug.has(slug)) bySlug.set(slug, [])
  bySlug.get(slug).push(r)
}

const full = process.argv.includes('--full')
console.log(`實拍 ${photoCount} 家｜菜色圖 ${ALL.length - photoCount} 家（${bySlug.size} 個 slug）\n`)
for (const [slug, list] of [...bySlug].sort((a, b) => b[1].length - a[1].length)) {
  const sample = (full ? list : list.slice(0, 3))
    .map((r) => `${r.name}(${r.mustOrder[0]})`)
    .join('、')
  console.log(`${slug} ×${list.length}: ${sample}${!full && list.length > 3 ? ' …' : ''}`)
}
if (unmapped.length) {
  console.log(`\n⚠️ ${unmapped.length} 家對到「沒有候選/沒有 pick」的 slug（需補池或補 pick）：`)
  const bad = new Map()
  for (const u of unmapped) bad.set(u.slug, (bad.get(u.slug) ?? 0) + 1)
  for (const [s, n] of bad) console.log(`  ${s} ×${n}`)
}
console.log('\n荒謬配對用 scratch/dish-map-overrides.json 覆寫後重跑；確認 OK 再跑 build-image-data.mjs')
