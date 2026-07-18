import { useState, type ReactNode } from 'react'
import type { Restaurant } from '../data/types'
import { CUISINE_META, PRICE_META, cityLabel } from '../labels'
import { cityById } from '../data'
import { useUiStore } from '../ui'
import { useT, useLang } from '../i18n'
import { useLocalizer } from '../lib/localize'
import { useStoreImage } from '../lib/images'

export function scoreColor(score: number): string {
  if (score >= 9) return '#4fd08a'
  if (score >= 7) return '#a3d06a'
  if (score >= 5) return '#e8b64c'
  if (score >= 3) return '#e8944c'
  return '#ff7a7a'
}

/** 店家卡：探索/推薦/我的清單共用。actions 塞各 tab 自己的按鈕列。 */
export function RestaurantCard({
  restaurant,
  badge,
  children,
}: {
  restaurant: Restaurant
  badge?: ReactNode
  children?: ReactNode
}) {
  const openDetail = useUiStore((s) => s.openDetail)
  const t = useT()
  const lang = useLang()
  const loc = useLocalizer()
  const r = loc(restaurant)
  const img = useStoreImage(restaurant.id)
  // Commons 熱連結會失效：載圖失敗就退回純 emoji 版面，不能留破圖
  const [imgFailed, setImgFailed] = useState(false)
  const city = cityById.get(r.city)
  return (
    <div className="card">
      <button className="card-main" onClick={() => openDetail(restaurant.id)}>
        {img && !imgFailed && (
          <div className="card-img-wrap">
            <img
              className="card-img"
              src={img.src}
              alt={r.name}
              loading="lazy"
              onError={() => setImgFailed(true)}
            />
            {img.kind === 'dish' && <span className="img-badge">{t('illustrativeBadge')}</span>}
          </div>
        )}
        <div className="card-head">
          <span className="card-emoji">{CUISINE_META[r.cuisine].emoji}</span>
          <span className="card-title">{r.name}</span>
          <span className="card-price">{PRICE_META[r.priceBand].sign}</span>
          {badge}
        </div>
        <div className="card-sub">
          {city?.emoji} {cityLabel(city, lang)} · {r.area}
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
