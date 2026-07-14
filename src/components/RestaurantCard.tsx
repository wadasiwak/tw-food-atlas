import type { ReactNode } from 'react'
import type { Restaurant } from '../data/types'
import { CUISINE_META, PRICE_META } from '../labels'
import { cityById } from '../data'
import { useUiStore } from '../ui'

export function scoreColor(score: number): string {
  if (score >= 9) return '#4fd08a'
  if (score >= 7) return '#a3d06a'
  if (score >= 5) return '#e8b64c'
  if (score >= 3) return '#e8944c'
  return '#ff7a7a'
}

/** 店家卡：探索/推薦/我的清單共用。actions 塞各 tab 自己的按鈕列。 */
export function RestaurantCard({
  restaurant: r,
  badge,
  children,
}: {
  restaurant: Restaurant
  badge?: ReactNode
  children?: ReactNode
}) {
  const openDetail = useUiStore((s) => s.openDetail)
  const city = cityById.get(r.city)
  return (
    <div className="card">
      <button className="card-main" onClick={() => openDetail(r.id)}>
        <div className="card-head">
          <span className="card-emoji">{CUISINE_META[r.cuisine].emoji}</span>
          <span className="card-title">{r.name}</span>
          <span className="card-price">{PRICE_META[r.priceBand].sign}</span>
          {badge}
        </div>
        <div className="card-sub">
          {city?.emoji} {city?.name} · {r.area}
        </div>
        <div className="card-must">
          {r.mustOrder.map((m) => (
            <span className="must-chip" key={m}>
              {m}
            </span>
          ))}
        </div>
        <p className="card-blurb">{r.blurb}</p>
      </button>
      {children}
    </div>
  )
}
