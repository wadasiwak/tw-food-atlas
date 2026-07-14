import { useRatingStore } from '../store'
import { useT, fmt } from '../i18n'

/** 卡片底部的評分/口袋名單列（探索與推薦共用）。 */
export function RateActions({ id }: { id: string }) {
  const { ratings, rate, markSkipped, watchlist, toggleWatchlist } = useRatingStore()
  const t = useT()
  const inWl = id in watchlist
  return (
    <div className="mini-rate">
      <button className={inWl ? 'wl-btn on' : 'wl-btn'} onClick={() => toggleWatchlist(id)}>
        {inWl ? t('inWatchlist') : t('addWatchlist')}
      </button>
      <select
        value={ratings[id]?.score ?? ''}
        onChange={(e) => {
          const v = e.target.value
          if (v === 'skip') markSkipped(id)
          else if (v) rate(id, Number(v))
        }}
      >
        <option value="">{t('ratePrompt')}</option>
        {Array.from({ length: 10 }, (_, i) => 10 - i).map((s) => (
          <option key={s} value={s}>
            {fmt(t('scoreOpt'), s)}
          </option>
        ))}
        <option value="skip">{t('skipOpt')}</option>
      </select>
    </div>
  )
}
