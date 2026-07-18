import { useEffect, useState } from 'react'
import type { Restaurant } from '../data/types'
import { cityById } from '../data'
import { CUISINE_META, priceLabel, gmapsUrl, tagLabel, cityLabel } from '../labels'
import { similarTo } from '../recommend'
import { rollRandom } from '../lib/filter'
import { useT, useLang, fmt } from '../i18n'
import { useLocalizer } from '../lib/localize'
import { useStoreImage } from '../lib/images'
import { useUiStore } from '../ui'
import { RateActions } from './RateActions'

/** 店家詳情（#r/<id> 直達）。 */
export function DetailOverlay({ all, restaurant }: { all: Restaurant[]; restaurant: Restaurant }) {
  const closeDetail = useUiStore((s) => s.closeDetail)
  const openDetail = useUiStore((s) => s.openDetail)
  const diceMode = useUiStore((s) => s.diceMode)
  const { city: fCity, cuisine: fCuisine, price: fPrice, tag: fTag, query: fQuery } = useUiStore()
  const t = useT()
  const lang = useLang()
  const loc = useLocalizer()
  const r = loc(restaurant)
  const img = useStoreImage(restaurant.id)
  const [imgFailed, setImgFailed] = useState(false)
  const city = cityById.get(r.city)
  const similar = similarTo(all, restaurant)

  const rollNext = () => {
    // 用 localize 後的清單抽，英文搜尋條件下才篩得中
    const pick = rollRandom(
      all.map(loc),
      { city: fCity, cuisine: fCuisine, price: fPrice, tag: fTag, query: fQuery },
      restaurant.id,
    )
    if (pick) openDetail(pick.id, { dice: true })
  }

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeDetail()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [closeDetail])

  return (
    <div className="overlay" onClick={closeDetail}>
      <div className="overlay-panel" data-testid="detail" onClick={(e) => e.stopPropagation()}>
        <button className="overlay-close" onClick={closeDetail} aria-label={t('close')}>
          ✕
        </button>
        {img && !imgFailed && (
          <div className="detail-img-wrap">
            <img
              className="detail-img"
              src={img.src}
              alt={r.name}
              onError={() => setImgFailed(true)}
            />
            {img.kind === 'dish' && <span className="img-badge">{t('illustrativeBadge')}</span>}
          </div>
        )}
        <div className="detail-head">
          <span className="rate-emoji">{CUISINE_META[r.cuisine].emoji}</span>
          <div>
            <h2>{r.name}</h2>
            {lang === 'en' && r.name !== restaurant.name && (
              <div className="orig-name">{restaurant.name}</div>
            )}
            <div className="card-sub">
              {city?.emoji} {cityLabel(city, lang)} · {r.area} · {priceLabel(r.priceBand, lang)}
              {r.since ? ` · ${fmt(t('sinceLabel'), r.since)}` : ''}
            </div>
          </div>
        </div>
        <div className="card-must">
          <span className="reasons-label">{t('mustOrder')}</span>
          {r.mustOrder.map((m) => (
            <span className="must-chip" key={m}>
              {m}
            </span>
          ))}
        </div>
        <p className="card-blurb">{r.blurb}</p>
        {r.tips && <p className="detail-tips">💡 {r.tips}</p>}
        <div className="detail-tags">
          {r.tags.map((tg) => (
            <span className="chip" key={tg}>
              {tagLabel(tg, lang)}
            </span>
          ))}
        </div>
        {diceMode && (
          <button className="dice-next-btn" onClick={rollNext}>
            🎲 {t('diceNext')}
          </button>
        )}
        <a
          className="gmaps-btn"
          href={gmapsUrl(r.gmapsQuery)}
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('openGmaps')}
        </a>
        {img && !imgFailed && (
          <p className="credit">
            {t('photoCredit')}: {img.author}｜
            <a href={img.licenseUrl} target="_blank" rel="noopener noreferrer">
              {img.license}
            </a>
            ｜
            <a href={img.sourceUrl} target="_blank" rel="noopener noreferrer">
              Wikimedia Commons ↗
            </a>
          </p>
        )}
        <p className="data-note">{t('dataNote')}</p>
        <RateActions id={restaurant.id} />

        {similar.length > 0 && (
          <>
            <h3>{t('similarTitle')}</h3>
            <div className="similar-row">
              {similar.map(({ restaurant: s, match }) => (
                <button className="similar-item" key={s.id} onClick={() => openDetail(s.id)}>
                  <span>{CUISINE_META[s.cuisine].emoji}</span>
                  <span className="similar-name">{loc(s).name}</span>
                  <span className="similar-sub">
                    {cityLabel(cityById.get(s.city), lang)} · {match}%
                  </span>
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
