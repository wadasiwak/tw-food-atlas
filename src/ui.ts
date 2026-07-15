import { create } from 'zustand'
import type { Cuisine, PriceBand, Tag } from './data/types'

export type Tab = 'browse' | 'rate' | 'recommend' | 'list'

interface BrowseFilter {
  city: string // '' = 全台
  cuisine: Cuisine | ''
  price: PriceBand | 0
  tag: Tag | ''
  query: string // 店名/招牌菜/商圈全文搜尋
}

interface UiState extends BrowseFilter {
  tab: Tab
  browseView: 'list' | 'map'
  detailId: string | null // 非 null 時顯示店家詳情 overlay（與 #r/<id> hash 同步）
  diceMode: boolean // 由 🎲 抽開的詳情顯示「再抽一家」
  setTab: (tab: Tab) => void
  setFilter: (f: Partial<BrowseFilter>) => void
  setBrowseView: (v: 'list' | 'map') => void
  // 從任何地方點 chip 跳到探索：未指定的篩選會被清空
  goBrowse: (f: Partial<BrowseFilter>) => void
  openDetail: (id: string, opts?: { dice?: boolean }) => void
  closeDetail: () => void
}

export const useUiStore = create<UiState>()((set) => ({
  tab: 'browse',
  browseView: 'list',
  city: '',
  cuisine: '',
  price: 0,
  tag: '',
  query: '',
  detailId: null,
  diceMode: false,
  setTab: (tab) => set({ tab, detailId: null }),
  setFilter: (f) => set(f),
  setBrowseView: (browseView) => set({ browseView }),
  goBrowse: (f) =>
    set({
      tab: 'browse',
      detailId: null,
      city: f.city ?? '',
      cuisine: f.cuisine ?? '',
      price: f.price ?? 0,
      tag: f.tag ?? '',
      query: f.query ?? '',
    }),
  openDetail: (id, opts) => {
    history.replaceState(null, '', `#r/${id}`)
    set({ detailId: id, diceMode: opts?.dice ?? false })
  },
  closeDetail: () => {
    history.replaceState(null, '', location.pathname + location.search)
    set({ detailId: null, diceMode: false })
  },
}))
