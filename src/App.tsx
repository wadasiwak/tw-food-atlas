import { useEffect, useState } from 'react'
import { ALL_RESTAURANTS, restaurantById } from './data'
import { useRatingStore } from './store'
import { useUiStore } from './ui'
import { BrowseTab } from './components/BrowseTab'
import { RateTab } from './components/RateTab'
import { RecommendTab } from './components/RecommendTab'
import { MyListTab } from './components/MyListTab'
import { SharedView } from './components/SharedView'
import { DetailOverlay } from './components/DetailOverlay'
import { parseShareHash, type ShareEntry } from './share'
import { useT, useLangStore } from './i18n'
import { ensureImagesLoaded } from './lib/images'

export default function App() {
  const tab = useUiStore((s) => s.tab)
  const setTab = useUiStore((s) => s.setTab)
  const goBrowse = useUiStore((s) => s.goBrowse)
  const setBrowseView = useUiStore((s) => s.setBrowseView)
  const detailId = useUiStore((s) => s.detailId)
  const openDetail = useUiStore((s) => s.openDetail)
  const [shared, setShared] = useState<ShareEntry[] | null>(() => parseShareHash())
  const [showTop, setShowTop] = useState(false)
  const ratedCount = useRatingStore((s) => Object.keys(s.ratings).length)
  const t = useT()
  const { lang, setLang } = useLangStore()

  useEffect(() => {
    // 導流 widget 跟隨 <html lang>，開站就要把儲存偏好寫回
    document.documentElement.lang = lang === 'zh' ? 'zh-Hant-TW' : 'en'
  }, [lang])

  // 店家配圖 map 是 lazy chunk，開站背景載入；載到前卡片先走 emoji 版面
  useEffect(() => {
    ensureImagesLoaded()
  }, [])

  // 長列表滑超過一屏才浮現回頂鈕
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > window.innerHeight)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // #r/<id> 直達店家詳情
  useEffect(() => {
    const m = location.hash.match(/^#r\/([a-z0-9-]+)$/)
    if (m && restaurantById.has(m[1])) openDetail(m[1])
  }, [openDetail])

  const detail = detailId ? restaurantById.get(detailId) : undefined

  return (
    <div className="app">
      <header className="app-header">
        <h1
          className="app-title"
          title={lang === 'zh' ? '回首頁（清除所有篩選）' : 'Home (clear all filters)'}
          onClick={() => {
            // 站名＝回首頁：清空全部篩選、關閉詳情/分享、回列表模式
            goBrowse({})
            setBrowseView('list')
            if (shared) {
              history.replaceState(null, '', location.pathname + location.search)
              setShared(null)
            }
            window.scrollTo(0, 0)
          }}
        >
          🍜 {t('appTitle')}
        </h1>
        <nav className="tabs">
          <button className={tab === 'browse' ? 'active' : ''} onClick={() => setTab('browse')}>
            {t('tabBrowse')}
          </button>
          <button className={tab === 'rate' ? 'active' : ''} onClick={() => setTab('rate')}>
            {t('tabRate')}
          </button>
          <button
            className={tab === 'recommend' ? 'active' : ''}
            onClick={() => setTab('recommend')}
          >
            {t('tabRecommend')}
          </button>
          <button className={tab === 'list' ? 'active' : ''} onClick={() => setTab('list')}>
            {t('tabList')}
            <span className="badge">{ratedCount}</span>
          </button>
          <button
            className="lang-toggle"
            title={lang === 'zh' ? 'Switch to English' : '切換成中文'}
            onClick={() => setLang(lang === 'zh' ? 'en' : 'zh')}
          >
            {lang === 'zh' ? 'EN' : '中'}
          </button>
        </nav>
      </header>

      {shared ? (
        <SharedView
          entries={shared}
          onClose={() => {
            // 保留 ?lang=en 等 query，只清 hash
            history.replaceState(null, '', location.pathname + location.search)
            setShared(null)
          }}
        />
      ) : (
        <>
          {tab === 'browse' && <BrowseTab all={ALL_RESTAURANTS} />}
          {tab === 'rate' && <RateTab all={ALL_RESTAURANTS} />}
          {tab === 'recommend' && <RecommendTab all={ALL_RESTAURANTS} />}
          {tab === 'list' && <MyListTab all={ALL_RESTAURANTS} />}
        </>
      )}

      {detail && <DetailOverlay all={ALL_RESTAURANTS} restaurant={detail} />}

      <button
        className={`back-to-top${showTop ? ' show' : ''}`}
        aria-label={t('backToTop')}
        title={t('backToTop')}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        ↑
      </button>

      <footer className="data-credit">{t('footerCredit')}</footer>
    </div>
  )
}
