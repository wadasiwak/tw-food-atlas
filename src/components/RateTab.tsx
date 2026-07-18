import { useEffect, useMemo, useState } from 'react'
import type { Restaurant } from '../data/types'
import { CITIES, cityById } from '../data'
import { CUISINE_META, PRICE_META, cityLabel } from '../labels'
import { useRatingStore } from '../store'
import { useT, useLang, fmt } from '../i18n'
import { useLocalizer } from '../lib/localize'
import { scoreColor } from './RestaurantCard'

// 一次一張卡快速評分。順序做輕度洗牌（同城市內分散菜系），
// 城市可鎖定（只評自己去過的城市才有意義）。
export function RateTab({ all }: { all: Restaurant[] }) {
  const { ratings, skipped, rate, markSkipped, watchlist, toggleWatchlist } = useRatingStore()
  const t = useT()
  const lang = useLang()
  const loc = useLocalizer()
  const [scopeCity, setScopeCity] = useState('')
  const [cursor, setCursor] = useState(0)

  const pool = useMemo(() => {
    const cands = all.filter(
      (r) => !(r.id in ratings) && !(r.id in skipped) && (!scopeCity || r.city === scopeCity),
    )
    // 菜系 round-robin：避免連續十張都是同菜系
    const buckets = new Map<string, Restaurant[]>()
    for (const r of cands) {
      const list = buckets.get(r.cuisine) ?? []
      list.push(r)
      buckets.set(r.cuisine, list)
    }
    const out: Restaurant[] = []
    let added = true
    while (added) {
      added = false
      for (const list of buckets.values()) {
        const item = list.shift()
        if (item) {
          out.push(item)
          added = true
        }
      }
    }
    return out
  }, [all, ratings, skipped, scopeCity])

  const current = pool[Math.min(cursor, pool.length - 1)]
  const cur = current ? loc(current) : undefined

  useEffect(() => {
    if (cursor >= pool.length) setCursor(0)
  }, [pool.length, cursor])

  useEffect(() => {
    if (!current) return
    const onKey = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLElement && /INPUT|SELECT|TEXTAREA/.test(e.target.tagName)) return
      if (e.key >= '1' && e.key <= '9') rate(current.id, Number(e.key))
      else if (e.key === '0') rate(current.id, 10)
      else if (e.key === 'ArrowRight') setCursor((c) => c + 1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [current, rate])

  const ratedCount = Object.keys(ratings).length

  return (
    <div className="rate-tab">
      <div className="rate-scope">
        <select value={scopeCity} onChange={(e) => { setScopeCity(e.target.value); setCursor(0) }}>
          <option value="">{t('allCities')}</option>
          {CITIES.map((c) => (
            <option key={c.id} value={c.id}>
              {c.emoji} {cityLabel(c, lang)}
            </option>
          ))}
        </select>
        <span className="kbd-hint">{t('kbdHint')}</span>
      </div>

      {!cur ? (
        <div className="empty-hint">{fmt(t('ratedAll'), ratedCount)}</div>
      ) : (
        <div className="rate-card" data-id={cur.id}>
          <div className="rate-emoji">{CUISINE_META[cur.cuisine].emoji}</div>
          <h2>{cur.name}</h2>
          <div className="card-sub">
            {cityById.get(cur.city)?.emoji} {cityLabel(cityById.get(cur.city), lang)} ·{' '}
            {cur.area} · {PRICE_META[cur.priceBand].sign}
          </div>
          <div className="card-must">
            {cur.mustOrder.map((m) => (
              <span className="must-chip" key={m}>
                {m}
              </span>
            ))}
          </div>
          <p className="card-blurb">{cur.blurb}</p>
          <div className="score-buttons">
            {Array.from({ length: 10 }, (_, i) => i + 1).map((s) => (
              <button
                key={s}
                style={{ '--score-color': scoreColor(s) } as React.CSSProperties}
                onClick={() => rate(cur.id, s)}
              >
                {s}
              </button>
            ))}
          </div>
          <div className="rate-actions">
            <button
              className={cur.id in watchlist ? 'wl-btn on' : 'wl-btn'}
              onClick={() => toggleWatchlist(cur.id)}
            >
              {cur.id in watchlist ? t('inWatchlist') : t('addWatchlist')}
            </button>
            <button onClick={() => setCursor((c) => c + 1)}>{t('skipNext')}</button>
            <button className="danger" onClick={() => markSkipped(cur.id)}>
              {t('notEaten')}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
