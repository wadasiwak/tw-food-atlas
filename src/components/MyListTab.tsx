import { useMemo, useRef, useState } from 'react'
import type { Restaurant } from '../data/types'
import { restaurantById } from '../data'
import { useRatingStore } from '../store'
import { topRated, buildShareUrl } from '../share'
import { tasteProfile } from '../recommend'
import { useT, useLang, fmt } from '../i18n'
import { useLocalizer } from '../lib/localize'
import { cityLabel } from '../labels'
import { RestaurantCard, scoreColor } from './RestaurantCard'
import { RateActions } from './RateActions'
import { cityById } from '../data'

export function MyListTab({ all: _all }: { all: Restaurant[] }) {
  const { ratings, skipped, watchlist, rate, removeRating, unmarkSkipped, importAll } =
    useRatingStore()
  const t = useT()
  const lang = useLang()
  const loc = useLocalizer()
  const [notice, setNotice] = useState('')
  const fileRef = useRef<HTMLInputElement>(null)

  const taste = useMemo(
    () => tasteProfile(restaurantById, ratings, lang),
    [ratings, lang],
  )

  const ratedRows = Object.entries(ratings)
    .map(([id, r]) => ({ restaurant: restaurantById.get(id), ...r, id }))
    .filter((x): x is typeof x & { restaurant: Restaurant } => !!x.restaurant)
    .sort((a, b) => b.score - a.score || b.ratedAt - a.ratedAt)

  const wlRows = Object.keys(watchlist)
    .map((id) => restaurantById.get(id))
    .filter((r): r is Restaurant => !!r)

  const skippedRows = Object.keys(skipped)
    .map((id) => restaurantById.get(id))
    .filter((r): r is Restaurant => !!r)

  const share = () => {
    const entries = topRated(ratings)
    if (!entries.length) {
      setNotice(t('needRatings'))
      return
    }
    navigator.clipboard
      .writeText(buildShareUrl(entries, lang))
      .then(() => setNotice(t('shareCopied')))
  }

  const doExport = () => {
    const blob = new Blob([JSON.stringify({ ratings, skipped, watchlist }, null, 2)], {
      type: 'application/json',
    })
    const a = document.createElement('a')
    a.href = URL.createObjectURL(blob)
    a.download = 'tw-food-atlas-backup.json'
    a.click()
    URL.revokeObjectURL(a.href)
  }

  const doImport = (file: File) => {
    file.text().then((text) => {
      try {
        const data = JSON.parse(text)
        if (typeof data !== 'object' || data === null || typeof data.ratings !== 'object')
          throw new Error('bad')
        importAll(data)
        setNotice(t('importOk'))
      } catch {
        setNotice(t('importBad'))
      }
    })
  }

  return (
    <div>
      <div className="mylist-toolbar">
        <button className="share-btn" onClick={share}>
          📤 {t('shareBtn')}
        </button>
        <button onClick={doExport}>{t('exportBtn')}</button>
        <button onClick={() => fileRef.current?.click()}>{t('importBtn')}</button>
        <input
          ref={fileRef}
          type="file"
          accept="application/json"
          hidden
          onChange={(e) => {
            const f = e.target.files?.[0]
            if (f) doImport(f)
            e.target.value = ''
          }}
        />
      </div>
      {notice && <div className="notice">{notice}</div>}

      {taste.length > 0 && (
        <div className="taste-box" data-testid="taste">
          <h3>{t('tasteTitle')}</h3>
          <div className="taste-chips">
            {taste.map(({ key, label, weight }) => (
              <span className="chip taste-chip" key={key} style={{ opacity: 0.45 + weight * 0.55 }}>
                {label}
              </span>
            ))}
          </div>
          <p className="data-note">{t('tasteHint')}</p>
        </div>
      )}

      {ratedRows.length + wlRows.length + skippedRows.length === 0 && (
        <div className="empty-hint">{t('emptyList')}</div>
      )}

      {wlRows.length > 0 && (
        <>
          <h3>{fmt(t('myWatchlist'), wlRows.length)}</h3>
          <div className="grid">
            {wlRows.map((r) => (
              <RestaurantCard key={r.id} restaurant={r}>
                <RateActions id={r.id} />
              </RestaurantCard>
            ))}
          </div>
        </>
      )}

      {ratedRows.length > 0 && (
        <>
          <h3>{fmt(t('myRated'), ratedRows.length)}</h3>
          <div className="my-list">
            {ratedRows.map(({ restaurant: r, score, id }) => (
              <div className="list-row" key={id}>
                <select
                  className="score-pill score-edit"
                  title={t('editScore')}
                  aria-label={t('editScore')}
                  value={score}
                  style={{ '--score-color': scoreColor(score) } as React.CSSProperties}
                  onChange={(e) => rate(id, Number(e.target.value))}
                >
                  {Array.from({ length: 10 }, (_, i) => 10 - i).map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
                <div className="titles">
                  <div className="t1">{loc(r).name}</div>
                  <div className="t2">
                    {cityLabel(cityById.get(r.city), lang)} · {loc(r).area}
                  </div>
                </div>
                <button className="danger" onClick={() => removeRating(id)}>
                  {t('removeBtn')}
                </button>
              </div>
            ))}
          </div>
        </>
      )}

      {skippedRows.length > 0 && (
        <>
          <h3>{fmt(t('mySkipped'), skippedRows.length)}</h3>
          <div className="my-list">
            {skippedRows.map((r) => (
              <div className="list-row" key={r.id}>
                <div className="titles">
                  <div className="t1">{loc(r).name}</div>
                  <div className="t2">{cityLabel(cityById.get(r.city), lang)}</div>
                </div>
                <button onClick={() => unmarkSkipped(r.id)}>{t('restoreBtn')}</button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
