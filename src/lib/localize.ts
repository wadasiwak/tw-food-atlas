// 店家內容在地化：英譯包（src/data/en/）lazy-load 後在渲染層 merge。
// 推薦引擎恆吃中文原物件（feature key 跨語言穩定），只有顯示才 localize。
import { useCallback } from 'react'
import { create } from 'zustand'
import type { Restaurant, EnRestaurantText } from '../data/types'
import { useLangStore, type Lang } from '../i18n'

let EN_PACK: Record<string, EnRestaurantText> | null = null

const useEnPackStore = create<{ ready: boolean }>(() => ({ ready: false }))

let loading = false
export function loadEnPack() {
  if (loading) return
  loading = true
  void import('../data/en').then((m) => {
    EN_PACK = m.EN_ALL
    useEnPackStore.setState({ ready: true })
  })
}

/** 依語言回傳顯示用店家；英譯包還沒載或缺該筆時回中文原文。id 等內部欄位不變。 */
export function localizeRestaurant(r: Restaurant, lang: Lang): Restaurant {
  if (lang !== 'en') return r
  const e = EN_PACK?.[r.id]
  if (!e) return r
  return {
    ...r,
    name: e.name,
    area: e.area,
    blurb: e.blurb,
    tips: r.tips ? (e.tips ?? r.tips) : undefined,
    mustOrder: e.mustOrder.length === r.mustOrder.length ? e.mustOrder : r.mustOrder,
  }
}

/**
 * 渲染用 hook：lang=en 且包未載時自動觸發載入，載完 re-render。
 * 用法：const loc = useLocalizer(); const r = loc(restaurant)
 */
export function useLocalizer(): (r: Restaurant) => Restaurant {
  const lang = useLangStore((s) => s.lang)
  const ready = useEnPackStore((s) => s.ready)
  if (lang === 'en' && !ready) loadEnPack()
  return useCallback((r: Restaurant) => localizeRestaurant(r, lang), [lang, ready])
}
