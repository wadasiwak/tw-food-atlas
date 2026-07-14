import { useMemo } from 'react'
import type { Restaurant } from '../data/types'
import type { ShareEntry } from '../share'
import { restaurantById, cityById } from '../data'
import { CUISINE_META } from '../labels'
import { useRatingStore } from '../store'
import { useT, fmt } from '../i18n'
import { scoreColor } from './RestaurantCard'

// 別人打開分享連結時看到的榜單頁；如果自己也有評分，順便做口味比對
export function SharedView({ entries, onClose }: { entries: ShareEntry[]; onClose: () => void }) {
  const myRatings = useRatingStore((s) => s.ratings)
  const t = useT()

  const items = entries
    .map(([id, score]) => ({ restaurant: restaurantById.get(id), score }))
    .filter((x): x is { restaurant: Restaurant; score: number } => !!x.restaurant)

  const compare = useMemo(() => {
    const common = items.filter(({ restaurant }) => myRatings[restaurant.id])
    if (Object.keys(myRatings).length === 0 || common.length === 0) return null
    const avgDiff =
      common.reduce(
        (s, { restaurant, score }) => s + Math.abs(myRatings[restaurant.id].score - score),
        0,
      ) / common.length
    return { count: common.length, affinity: Math.round((1 - avgDiff / 9) * 100) }
  }, [items, myRatings])

  return (
    <div>
      <div className="shared-head">
        <h2>{fmt(t('sharedTitle'), items.length)}</h2>
        {compare ? (
          <p className="compare-note">
            {t('compareNoteA')}
            <b>{compare.count}</b>
            {t('compareNoteB')}
            <b>{compare.affinity}%</b>
            {t('compareNoteC')}
          </p>
        ) : (
          <p>{t('noCompareNote')}</p>
        )}
        <button onClick={onClose}>{t('startMine')}</button>
      </div>
      <div className="my-list">
        {items.map(({ restaurant: r, score }, i) => {
          const mine = myRatings[r.id]?.score
          return (
            <div className="list-row" key={r.id}>
              <span className="shared-rank">#{i + 1}</span>
              <span className="card-emoji">{CUISINE_META[r.cuisine].emoji}</span>
              <div className="titles">
                <div className="t1">{r.name}</div>
                <div className="t2">
                  {cityById.get(r.city)?.name} · {r.area}
                </div>
              </div>
              {mine != null && (
                <span
                  className="mine-pill"
                  style={{ '--score-color': scoreColor(mine) } as React.CSSProperties}
                >
                  {fmt(t('minePill'), mine)}
                </span>
              )}
              <span
                className="score-pill"
                style={{ '--score-color': scoreColor(score) } as React.CSSProperties}
              >
                {fmt(t('scorePill'), score)}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
