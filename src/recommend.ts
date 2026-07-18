import type { Restaurant } from './data/types'
import type { Rating } from './store'
import { CUISINE_META, tagLabel } from './labels'
import { tOf, type Lang } from './i18n'
import type { Tag } from './data/types'

// 內容式推薦：菜系/tag/招牌菜/價位帶/城市 建特徵向量，
// 使用者輪廓 = Σ (評分-5.5) × 向量，再用 cosine 相似度排序未評分店家。
// 招牌菜（m:）是本站最有趣的訊號——愛牛肉麵的人會被跨城市推牛肉麵。

type Vec = Map<string, number>

const vecCache = new Map<string, Vec>()

function vectorOf(r: Restaurant): Vec {
  const cached = vecCache.get(r.id)
  if (cached) return cached
  const v: Vec = new Map()
  v.set(`c:${r.cuisine}`, 1)
  for (const t of r.tags) v.set(`t:${t}`, 0.6)
  for (const m of r.mustOrder) v.set(`m:${m}`, 0.5)
  v.set(`p:${r.priceBand}`, 0.4)
  // 地理權重壓低：偏好是口味不是地理，地理交給城市 scope 篩選
  v.set(`city:${r.city}`, 0.15)
  vecCache.set(r.id, v)
  return v
}

function norm(v: Vec): number {
  let s = 0
  for (const x of v.values()) s += x * x
  return Math.sqrt(s)
}

const cosVec = (a: Vec, b: Vec): number => {
  let dot = 0
  const [small, large] = a.size < b.size ? [a, b] : [b, a]
  for (const [k, x] of small) dot += (large.get(k) ?? 0) * x
  return dot / (norm(a) * norm(b) || 1)
}

// 同商圈（city+area 相同）視為同系列：MMR 之外的硬上限，
// 避免推薦整排都是同一個夜市
const areaKey = (r: Restaurant) => `${r.city}|${r.area}`

function pickWithAreaCap<T>(items: T[], keyOf: (t: T) => string, limit: number, cap = 2): T[] {
  const picked: T[] = []
  const counts = new Map<string, number>()
  for (const it of items) {
    if (picked.length >= limit) break
    const k = keyOf(it)
    const n = counts.get(k) ?? 0
    if (n >= cap) continue
    counts.set(k, n + 1)
    picked.push(it)
  }
  return picked
}

// 為你推薦的多樣性重排（MMR）：推薦是探索入口，不宜整排同味——
// 逐一挑「相符度 λ − 與已選最大相似度 ×(1−λ)」最高者；同商圈硬上限 2 家
function diversifyPick<T extends { final: number }>(
  scored: T[],
  vecOfT: (t: T) => Vec,
  keyOf: (t: T) => string,
  limit: number,
  lambda = 0.72,
): T[] {
  const pool = scored.slice(0, Math.max(limit * 5, 60))
  const picked: T[] = []
  const pickedVecs: Vec[] = []
  const areaCounts = new Map<string, number>()
  while (picked.length < limit && pool.length > 0) {
    let best = -1
    let bestScore = -Infinity
    for (let i = 0; i < pool.length; i++) {
      const c = pool[i]
      if ((areaCounts.get(keyOf(c)) ?? 0) >= 2) continue
      let maxSim = 0
      const v = vecOfT(c)
      for (const pv of pickedVecs) {
        const s = cosVec(v, pv)
        if (s > maxSim) maxSim = s
      }
      const s = lambda * c.final - (1 - lambda) * maxSim
      if (s > bestScore) {
        bestScore = s
        best = i
      }
    }
    if (best < 0) break
    const chosen = pool[best]
    picked.push(chosen)
    pickedVecs.push(vecOfT(chosen))
    areaCounts.set(keyOf(chosen), (areaCounts.get(keyOf(chosen)) ?? 0) + 1)
    pool.splice(best, 1)
  }
  return picked
}

const featureLabel = (key: string, lang: Lang): string => {
  const val = key.slice(key.indexOf(':') + 1)
  if (key.startsWith('c:')) {
    const meta = CUISINE_META[val as keyof typeof CUISINE_META]
    return meta ? `${meta.emoji} ${meta[lang]}` : val
  }
  if (key.startsWith('t:')) return tagLabel(val as Tag, lang)
  return val // m: 是中文菜名（招牌菜向量 key），英文模式暫維持中文——已知限制
}

// 「你可能也愛」：純 item-to-item cosine，同商圈最多 2 家
export function similarTo(
  all: Restaurant[],
  target: Restaurant,
  limit = 8,
): { restaurant: Restaurant; match: number }[] {
  const tv = vectorOf(target)
  const tn = norm(tv)
  if (tn === 0) return []
  const scored = all
    .filter((r) => r.id !== target.id)
    .map((restaurant) => ({ restaurant, match: cosVec(tv, vectorOf(restaurant)) }))
    .sort((a, b) => b.match - a.match)
  return pickWithAreaCap(scored, (s) => areaKey(s.restaurant), limit).map(
    ({ restaurant, match }) => ({
      restaurant,
      match: Math.round(Math.max(0, Math.min(1, match)) * 100),
    }),
  )
}

// 口味輪廓：profile 裡正權重最大的菜系/tag/招牌菜，正規化到 0-1
export function tasteProfile(
  byId: Map<string, Restaurant>,
  ratings: Record<string, Rating>,
  lang: Lang,
  top = 8,
): { key: string; label: string; weight: number }[] {
  const profile: Vec = new Map()
  for (const [id, r] of Object.entries(ratings)) {
    const rest = byId.get(id)
    if (!rest) continue
    const w = r.score - 5.5
    for (const [k, x] of vectorOf(rest)) profile.set(k, (profile.get(k) ?? 0) + w * x)
  }
  const rows = [...profile.entries()]
    .filter(([k, v]) => v > 0 && /^[ctm]:/.test(k))
    .sort((a, b) => b[1] - a[1])
    .slice(0, top)
  const max = rows[0]?.[1] ?? 1
  return rows.map(([key, v]) => ({ key, label: featureLabel(key, lang), weight: v / max }))
}

export interface Recommendation {
  restaurant: Restaurant
  match: number // 0-100 顯示用相符度
  reasons: { key: string; label: string }[] // 理由 chips；key 空字串表示不可點
}

export function recommend(
  all: Restaurant[],
  ratings: Record<string, Rating>,
  skipped: Record<string, true>,
  lang: Lang,
  opts: { cityScope?: string; excludeIds?: Set<string>; limit?: number } = {},
): { recs: Recommendation[]; coldStart: boolean } {
  const t = tOf(lang)
  const { cityScope, excludeIds, limit = 24 } = opts
  const byId = new Map(all.map((r) => [r.id, r]))

  const rated = Object.entries(ratings)
    .map(([id, r]) => ({ restaurant: byId.get(id), score: r.score }))
    .filter((x): x is { restaurant: Restaurant; score: number } => !!x.restaurant)

  let candidates = all.filter(
    (r) => !(r.id in ratings) && !(r.id in skipped) && !excludeIds?.has(r.id),
  )
  if (cityScope) candidates = candidates.filter((r) => r.city === cityScope)
  // 「換一批」把池子換乾了就放回被排除的（評過/略過的仍然不出現）
  if (candidates.length < 8 && excludeIds?.size) {
    candidates = all.filter((r) => !(r.id in ratings) && !(r.id in skipped))
    if (cityScope) candidates = candidates.filter((r) => r.city === cityScope)
  }

  if (rated.length < 5) {
    // 冷啟動：有「老店/排隊名店/必比登」等口碑 tag 的優先，商圈分散
    const signature = new Set(['老店', '創始店', '排隊名店', '米其林必比登', '米其林星級', '在地人愛'])
    const sorted = [...candidates].sort(
      (a, b) =>
        b.tags.filter((t2) => signature.has(t2)).length -
        a.tags.filter((t2) => signature.has(t2)).length,
    )
    const recs = pickWithAreaCap(sorted, areaKey, limit).map((restaurant) => ({
      restaurant,
      match: 0,
      reasons: [{ key: '', label: t('hotPick') }],
    }))
    return { recs, coldStart: true }
  }

  // 使用者輪廓
  const profile: Vec = new Map()
  for (const { restaurant, score } of rated) {
    const w = score - 5.5
    for (const [k, x] of vectorOf(restaurant)) profile.set(k, (profile.get(k) ?? 0) + w * x)
  }
  const pNorm = norm(profile)
  if (pNorm === 0) return { recs: [], coldStart: true }

  const scored = candidates.map((restaurant) => {
    const v = vectorOf(restaurant)
    let dot = 0
    for (const [k, x] of v) dot += (profile.get(k) ?? 0) * x
    const cos = dot / (pNorm * norm(v) || 1)
    return { restaurant, cos, final: (cos + 1) / 2 }
  })

  scored.sort((a, b) => b.final - a.final)

  const recs = diversifyPick(
    scored,
    (s) => vectorOf(s.restaurant),
    (s) => areaKey(s.restaurant),
    limit,
  ).map(({ restaurant, cos }) => {
    const contribs: { key: string; c: number }[] = []
    for (const [k, x] of vectorOf(restaurant)) {
      const p = profile.get(k) ?? 0
      if (p > 0 && /^[ctm]:/.test(k)) contribs.push({ key: k, c: p * x })
    }
    contribs.sort((a, b) => b.c - a.c)
    const reasons = contribs
      .slice(0, 3)
      .map(({ key }) => ({ key, label: featureLabel(key, lang) }))
    return {
      restaurant,
      match: Math.round(Math.max(0, Math.min(1, cos)) * 100),
      reasons: reasons.length ? reasons : [{ key: '', label: t('overallSimilar') }],
    }
  })

  return { recs, coldStart: false }
}
