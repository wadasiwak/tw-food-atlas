import { useMemo, useState } from 'react'
import type { Restaurant } from '../data/types'
import { CITIES } from '../data'
import { cityLabel } from '../labels'
import { useRatingStore } from '../store'
import { recommend } from '../recommend'
import { useT, useLang, fmt } from '../i18n'
import { RestaurantCard } from './RestaurantCard'
import { RateActions } from './RateActions'
import { useUiStore } from '../ui'

export function RecommendTab({ all }: { all: Restaurant[] }) {
  const { ratings, skipped } = useRatingStore()
  const goBrowse = useUiStore((s) => s.goBrowse)
  const t = useT()
  const lang = useLang()
  const [cityScope, setCityScope] = useState('')
  // 「換一批」：把這批推薦排掉重算；換城市時歸零
  const [excluded, setExcluded] = useState<Set<string>>(new Set())

  const { recs, coldStart } = useMemo(
    () => recommend(all, ratings, skipped, lang, { cityScope, excludeIds: excluded }),
    [all, ratings, skipped, lang, cityScope, excluded],
  )

  const ratedCount = Object.keys(ratings).length

  return (
    <div>
      <div className="rec-controls">
        <select
          value={cityScope}
          onChange={(e) => {
            setCityScope(e.target.value)
            setExcluded(new Set())
          }}
        >
          <option value="">{t('scopeAll')}</option>
          {CITIES.map((c) => (
            <option key={c.id} value={c.id}>
              {t('scopeCity')}
              {c.emoji} {cityLabel(c, lang)}
            </option>
          ))}
        </select>
        <button
          onClick={() =>
            setExcluded((prev) => {
              const next = new Set(prev)
              for (const { restaurant } of recs) next.add(restaurant.id)
              return next
            })
          }
        >
          🎲 {t('reshuffle')}
        </button>
      </div>

      {coldStart && <div className="cold-start-note">{fmt(t('coldStartNote'), ratedCount)}</div>}

      <div className="grid" data-testid="rec-grid">
        {recs.map(({ restaurant, match, reasons }) => (
          <RestaurantCard
            key={restaurant.id}
            restaurant={restaurant}
            badge={!coldStart ? <span className="match">{fmt(t('matchPct'), match)}</span> : undefined}
          >
            <div className="reasons">
              {!coldStart && <span className="reasons-label">{t('becauseYouLike')}</span>}
              {reasons.map((r) =>
                r.key ? (
                  <button
                    key={r.key}
                    className="chip"
                    onClick={() => {
                      if (r.key.startsWith('c:'))
                        goBrowse({ cuisine: r.key.slice(2) as Restaurant['cuisine'] })
                    }}
                  >
                    {r.label}
                  </button>
                ) : (
                  <span key={r.label} className="chip">
                    {r.label}
                  </span>
                ),
              )}
            </div>
            <RateActions id={restaurant.id} />
          </RestaurantCard>
        ))}
      </div>
    </div>
  )
}
