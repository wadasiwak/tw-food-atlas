import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type Lang = 'zh' | 'en'

interface LangState {
  lang: Lang
  setLang: (lang: Lang) => void
}

// 語言偏好：key 與 recommender 姊妹站共用，切一站全家族跟著切
export const useLangStore = create<LangState>()(
  persist((set) => ({ lang: 'zh', setLang: (lang) => set({ lang }) }), {
    name: 'recs-lang-v1',
  }),
)

// {0}/{1} 佔位替換
export const fmt = (s: string, ...args: (string | number)[]) =>
  s.replace(/\{(\d+)\}/g, (_, i) => String(args[Number(i)] ?? ''))

const STR = {
  zh: {
    appTitle: '台灣美食圖鑑',
    tabBrowse: '探索',
    tabRate: '評分',
    tabRecommend: '為你推薦',
    tabList: '我的',
    // Browse
    allCities: '全台',
    allCuisines: '全部菜系',
    allPrices: '全部價位',
    allTags: '全部標籤',
    listView: '列表',
    mapView: '地圖',
    resultCount: '共 {0} 家',
    noResult: '沒有符合的店，放寬一點條件試試',
    mapFallback: '這個裝置不支援地圖（WebGL），以下用列表顯示：',
    // Rate
    ratedAll: '這個範圍的店都評完了！你已經評了 {0} 家 🎉',
    kbdHint: '鍵盤：1–9 評分 · 0 = 10 分 · → 略過',
    skipNext: '略過（下一家）',
    notEaten: '沒吃過，別再出現',
    inWatchlist: '✓ 已在口袋名單',
    addWatchlist: '＋ 口袋名單',
    myScore: '我的評分：{0} 分',
    ratePrompt: '吃過了？評個分…',
    scoreOpt: '{0} 分',
    skipOpt: '沒興趣，別再推薦',
    // Recommend
    coldStartNote: '目前只評了 {0} 家，先到「評分」評 5 家以上，推薦會開始跟著你的口味走。以下先列出各地代表名店：',
    matchPct: '{0}% 對味',
    hotPick: '各地代表名店',
    overallSimilar: '整體口味接近',
    reshuffle: '換一批',
    scopeAll: '全台推薦',
    scopeCity: '只看這裡：',
    becauseYouLike: '因為你喜歡',
    // Detail
    openGmaps: '在 Google Maps 查營業時間與評論 ↗',
    mustOrder: '必點',
    sinceLabel: '創業約 {0} 年',
    similarTitle: '你可能也愛',
    close: '關閉',
    dataNote: '資料為人工整理的靜態快照，出發前請以 Google Maps 營業資訊為準。',
    // My list
    myRated: '已評分（{0}）',
    myWatchlist: '口袋名單（{0}）',
    mySkipped: '已略過（{0}）',
    exportBtn: '匯出 JSON',
    importBtn: '匯入 JSON',
    importOk: '匯入完成！',
    importBad: '檔案格式不對，沒有匯入。',
    emptyList: '還沒有東西。去「探索」或「評分」逛逛吧。',
    shareBtn: '分享我的美食 Top 10',
    shareCopied: '分享連結已複製！傳給朋友看你的口味吧。',
    needRatings: '先評幾家店才有 Top 10 可以分享。',
    removeBtn: '移除',
    restoreBtn: '恢復',
    // SharedView
    sharedTitle: '朋友的美食 Top {0}',
    compareNoteA: '你們有 ',
    compareNoteB: ' 家都吃過，口味相合度 ',
    compareNoteC: '',
    noCompareNote: '你還沒評分，評幾家就能看你們口味多合。',
    startMine: '建立我自己的圖鑑',
    minePill: '我 {0} 分',
    scorePill: '{0} 分',
    // Footer
    footerCredit: '內容為原創整理 · © 2026 wadasiwak · 未經授權禁止轉載',
  },
  en: {
    appTitle: 'Taiwan Food Atlas',
    tabBrowse: 'Explore',
    tabRate: 'Rate',
    tabRecommend: 'For You',
    tabList: 'My List',
    allCities: 'All Taiwan',
    allCuisines: 'All cuisines',
    allPrices: 'All prices',
    allTags: 'All tags',
    listView: 'List',
    mapView: 'Map',
    resultCount: '{0} places',
    noResult: 'No match — try loosening the filters',
    mapFallback: 'Map (WebGL) not supported on this device; showing a list instead:',
    ratedAll: 'All rated in this scope! You have rated {0} places 🎉',
    kbdHint: 'Keys: 1–9 rate · 0 = 10 · → skip',
    skipNext: 'Skip (next)',
    notEaten: "Haven't eaten, hide it",
    inWatchlist: '✓ In my list',
    addWatchlist: '＋ Want to go',
    myScore: 'My score: {0}',
    ratePrompt: 'Been there? Rate it…',
    scoreOpt: '{0} pts',
    skipOpt: 'Not interested',
    coldStartNote: 'Only {0} rated so far — rate 5+ places and recommendations will follow your taste. Meanwhile, signature places around Taiwan:',
    matchPct: '{0}% match',
    hotPick: 'Signature places',
    overallSimilar: 'Similar overall taste',
    reshuffle: 'Shuffle',
    scopeAll: 'All Taiwan',
    scopeCity: 'Only: ',
    becauseYouLike: 'Because you like',
    openGmaps: 'Hours & reviews on Google Maps ↗',
    mustOrder: 'Must order',
    sinceLabel: 'Since ~{0}',
    similarTitle: 'You may also love',
    close: 'Close',
    dataNote: 'Hand-curated static snapshot — check Google Maps for current hours before you go.',
    myRated: 'Rated ({0})',
    myWatchlist: 'Want to go ({0})',
    mySkipped: 'Skipped ({0})',
    exportBtn: 'Export JSON',
    importBtn: 'Import JSON',
    importOk: 'Imported!',
    importBad: 'Bad file format; nothing imported.',
    emptyList: 'Nothing yet. Explore or rate some places first.',
    shareBtn: 'Share my food Top 10',
    shareCopied: 'Share link copied! Send it to a friend.',
    needRatings: 'Rate a few places first to build a Top 10.',
    removeBtn: 'Remove',
    restoreBtn: 'Restore',
    sharedTitle: "A friend's food Top {0}",
    compareNoteA: 'You both ate at ',
    compareNoteB: ' places — taste affinity ',
    compareNoteC: '',
    noCompareNote: 'Rate some places to see how your tastes match.',
    startMine: 'Build my own atlas',
    minePill: 'Me: {0}',
    scorePill: '{0} pts',
    footerCredit: 'Original curated content · © 2026 wadasiwak · All rights reserved',
  },
} satisfies Record<Lang, Record<string, string>>

export type StrKey = keyof (typeof STR)['zh']

export const tOf = (lang: Lang) => (key: StrKey) => STR[lang][key]

export function useT() {
  const lang = useLangStore((s) => s.lang)
  return tOf(lang)
}

export function useLang(): Lang {
  return useLangStore((s) => s.lang)
}
