import { Suspense, lazy, useMemo, useState } from 'react'
import type { Restaurant, Cuisine, PriceBand, Tag, LatLng } from '../data/types'
import { CITIES } from '../data'
import { TAGS } from '../data/types'
import { CUISINES, cuisineLabel, PRICE_META } from '../labels'
import { useUiStore } from '../ui'
import { useRatingStore } from '../store'
import { useT, useLang, fmt } from '../i18n'
import { RestaurantCard, scoreColor } from './RestaurantCard'
import { hasWebGL } from '../lib/webgl'
import { haversineKm } from '../lib/geo'
import { RateActions } from './RateActions'

// maplibre 很肥，切到地圖模式才載
const FoodMap = lazy(() => import('./FoodMap'))

const fmtKm = (km: number) => (km < 1 ? `${Math.round(km * 1000)}m` : `${km.toFixed(1)}km`)

export function BrowseTab({ all }: { all: Restaurant[] }) {
  const { city, cuisine, price, tag, query, browseView, setFilter, setBrowseView, openDetail } =
    useUiStore()
  const ratings = useRatingStore((s) => s.ratings)
  const t = useT()
  const lang = useLang()
  // 📍 離我最近：拿到定位前是 null；'denied' 顯示提示
  const [myPos, setMyPos] = useState<LatLng | 'denied' | null>(null)
  const [locating, setLocating] = useState(false)

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    const base = all.filter(
      (r) =>
        (!city || r.city === city) &&
        (!cuisine || r.cuisine === cuisine) &&
        (!price || r.priceBand === price) &&
        (!tag || r.tags.includes(tag)) &&
        (!q ||
          r.name.toLowerCase().includes(q) ||
          r.area.toLowerCase().includes(q) ||
          r.mustOrder.some((m) => m.toLowerCase().includes(q)) ||
          r.blurb.toLowerCase().includes(q)),
    )
    if (myPos && myPos !== 'denied') {
      return [...base].sort(
        (a, b) => haversineKm(myPos, a.center) - haversineKm(myPos, b.center),
      )
    }
    return base
  }, [all, city, cuisine, price, tag, query, myPos])

  const locate = () => {
    if (myPos && myPos !== 'denied') {
      setMyPos(null) // 再點一次取消距離排序
      return
    }
    setLocating(true)
    navigator.geolocation.getCurrentPosition(
      (p) => {
        setMyPos({ lat: p.coords.latitude, lng: p.coords.longitude })
        setLocating(false)
      },
      () => {
        setMyPos('denied')
        setLocating(false)
      },
      { timeout: 8000 },
    )
  }

  const rollDice = () => {
    if (!filtered.length) return
    const pick = filtered[Math.floor(Math.random() * filtered.length)]
    openDetail(pick.id)
  }

  const webgl = hasWebGL()
  const mapMode = browseView === 'map'
  const pos = myPos !== 'denied' ? myPos : null
  const nearMode = pos != null

  return (
    <div>
      <div className="filter-bar">
        <input
          className="search-input"
          type="search"
          placeholder={t('searchPlaceholder')}
          value={query}
          onChange={(e) => setFilter({ query: e.target.value })}
        />
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
        <button className={nearMode ? 'near-btn on' : 'near-btn'} onClick={locate}>
          {locating ? '📍…' : nearMode ? t('nearOn') : t('nearBtn')}
        </button>
        <button className="dice-btn" onClick={rollDice} title={t('diceTitle')}>
          🎲 {t('diceBtn')}
        </button>
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

      {myPos === 'denied' && <div className="notice">{t('geoDenied')}</div>}
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
                    <>
                      {pos && (
                        <span className="dist-pill">
                          📍 {fmtKm(haversineKm(pos, r.center))}
                        </span>
                      )}
                      {mine != null && (
                        <span
                          className="mine-pill"
                          style={{ '--score-color': scoreColor(mine) } as React.CSSProperties}
                        >
                          {fmt(t('myScore'), mine)}
                        </span>
                      )}
                    </>
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
