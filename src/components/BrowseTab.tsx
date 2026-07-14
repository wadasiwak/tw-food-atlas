import { Suspense, lazy, useMemo } from 'react'
import type { Restaurant, Cuisine, PriceBand, Tag } from '../data/types'
import { CITIES } from '../data'
import { TAGS } from '../data/types'
import { CUISINES, cuisineLabel, PRICE_META } from '../labels'
import { useUiStore } from '../ui'
import { useRatingStore } from '../store'
import { useT, useLang, fmt } from '../i18n'
import { RestaurantCard, scoreColor } from './RestaurantCard'
import { hasWebGL } from '../lib/webgl'
import { RateActions } from './RateActions'

// maplibre 很肥，切到地圖模式才載
const FoodMap = lazy(() => import('./FoodMap'))

export function BrowseTab({ all }: { all: Restaurant[] }) {
  const { city, cuisine, price, tag, browseView, setFilter, setBrowseView, openDetail } =
    useUiStore()
  const ratings = useRatingStore((s) => s.ratings)
  const t = useT()
  const lang = useLang()

  const filtered = useMemo(
    () =>
      all.filter(
        (r) =>
          (!city || r.city === city) &&
          (!cuisine || r.cuisine === cuisine) &&
          (!price || r.priceBand === price) &&
          (!tag || r.tags.includes(tag)),
      ),
    [all, city, cuisine, price, tag],
  )

  const webgl = hasWebGL()
  const mapMode = browseView === 'map'

  return (
    <div>
      <div className="filter-bar">
        <select value={city} onChange={(e) => setFilter({ city: e.target.value })}>
          <option value="">{t('allCities')}</option>
          {CITIES.map((c) => (
            <option key={c.id} value={c.id}>
              {c.emoji} {c.name}
            </option>
          ))}
        </select>
        <select
          value={cuisine}
          onChange={(e) => setFilter({ cuisine: e.target.value as Cuisine | '' })}
        >
          <option value="">{t('allCuisines')}</option>
          {CUISINES.map((c) => (
            <option key={c} value={c}>
              {cuisineLabel(c, lang)}
            </option>
          ))}
        </select>
        <select
          value={price}
          onChange={(e) => setFilter({ price: Number(e.target.value) as PriceBand | 0 })}
        >
          <option value={0}>{t('allPrices')}</option>
          {([1, 2, 3, 4] as const).map((p) => (
            <option key={p} value={p}>
              {PRICE_META[p].sign} {PRICE_META[p][lang]}
            </option>
          ))}
        </select>
        <select value={tag} onChange={(e) => setFilter({ tag: e.target.value as Tag | '' })}>
          <option value="">{t('allTags')}</option>
          {TAGS.map((tg) => (
            <option key={tg} value={tg}>
              {tg}
            </option>
          ))}
        </select>
        <div className="view-toggle">
          <button className={mapMode ? '' : 'active'} onClick={() => setBrowseView('list')}>
            {t('listView')}
          </button>
          <button className={mapMode ? 'active' : ''} onClick={() => setBrowseView('map')}>
            {t('mapView')}
          </button>
        </div>
        <span className="result-count">{fmt(t('resultCount'), filtered.length)}</span>
      </div>

      {filtered.length === 0 && <div className="empty-hint">{t('noResult')}</div>}

      {mapMode && !webgl && filtered.length > 0 && (
        <div className="empty-hint">{t('mapFallback')}</div>
      )}

      {mapMode && webgl && filtered.length > 0 ? (
        <Suspense fallback={<div className="loading">🗺️ …</div>}>
          <FoodMap restaurants={filtered} onOpen={openDetail} />
        </Suspense>
      ) : (
        filtered.length > 0 && (
          <div className="grid">
            {filtered.map((r) => {
              const mine = ratings[r.id]?.score
              return (
                <RestaurantCard
                  key={r.id}
                  restaurant={r}
                  badge={
                    mine != null ? (
                      <span
                        className="mine-pill"
                        style={{ '--score-color': scoreColor(mine) } as React.CSSProperties}
                      >
                        {fmt(t('myScore'), mine)}
                      </span>
                    ) : undefined
                  }
                >
                  <RateActions id={r.id} />
                </RestaurantCard>
              )
            })}
          </div>
        )
      )}
    </div>
  )
}
