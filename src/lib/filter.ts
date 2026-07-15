import type { Restaurant, Cuisine, PriceBand, Tag } from '../data/types'

export interface Filters {
  city: string
  cuisine: Cuisine | ''
  price: PriceBand | 0
  tag: Tag | ''
  query: string
}

/** 探索列表與 🎲 隨機抽共用的篩選：條件全空時回傳全部。 */
export function filterRestaurants(all: Restaurant[], f: Filters): Restaurant[] {
  const q = f.query.trim().toLowerCase()
  return all.filter(
    (r) =>
      (!f.city || r.city === f.city) &&
      (!f.cuisine || r.cuisine === f.cuisine) &&
      (!f.price || r.priceBand === f.price) &&
      (!f.tag || r.tags.includes(f.tag)) &&
      (!q ||
        r.name.toLowerCase().includes(q) ||
        r.area.toLowerCase().includes(q) ||
        r.mustOrder.some((m) => m.toLowerCase().includes(q)) ||
        r.blurb.toLowerCase().includes(q)),
  )
}

/** 在篩選結果裡隨機抽一家（排除 excludeId，池子只剩它時仍回傳它）。 */
export function rollRandom(
  all: Restaurant[],
  f: Filters,
  excludeId?: string,
): Restaurant | null {
  const pool = filterRestaurants(all, f)
  const candidates = pool.filter((r) => r.id !== excludeId)
  const pick = candidates.length ? candidates : pool
  if (!pick.length) return null
  return pick[Math.floor(Math.random() * pick.length)]
}
