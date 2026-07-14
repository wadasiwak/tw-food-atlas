import { useEffect } from 'react'
import type { Restaurant } from '../data/types'
import { cityById } from '../data'
import { CUISINE_META, priceLabel, gmapsUrl } from '../labels'
import { similarTo } from '../recommend'
import { useT, useLang, fmt } from '../i18n'
import { useUiStore } from '../ui'
import { RateActions } from './RateActions'

/** 店家詳情（#r/<id> 直達）。 */
export function DetailOverlay({ all, restaurant: r }: { all: Restaurant[]; restaurant: Restaurant }) {
  const closeDetail = useUiStore((s) => s.closeDetail)
  const openDetail = useUiStore((s) => s.openDetail)
  const t = useT()
  const lang = useLang()
  const city = cityById.get(r.city)
  const similar = similarTo(all, r)

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
        <div className="detail-head">
          <span className="rate-emoji">{CUISINE_META[r.cuisine].emoji}</span>
          <div>
            <h2>{r.name}</h2>
            <div className="card-sub">
              {city?.emoji} {city?.name} · {r.area} · {priceLabel(r.priceBand, lang)}
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
              {tg}
            </span>
          ))}
        </div>
        <a
          className="gmaps-btn"
          href={gmapsUrl(r.gmapsQuery)}
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('openGmaps')}
        </a>
        <p className="data-note">{t('dataNote')}</p>
        <RateActions id={r.id} />

        {similar.length > 0 && (
          <>
            <h3>{t('similarTitle')}</h3>
            <div className="similar-row">
              {similar.map(({ restaurant: s, match }) => (
                <button className="similar-item" key={s.id} onClick={() => openDetail(s.id)}>
                  <span>{CUISINE_META[s.cuisine].emoji}</span>
                  <span className="similar-name">{s.name}</span>
                  <span className="similar-sub">
                    {cityById.get(s.city)?.name} · {match}%
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
