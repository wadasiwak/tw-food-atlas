// 店家配圖 map（Commons 熱連結）走 dynamic import，不進主 chunk。
// App mount 時 fire-and-forget 載入；載到之前卡片先渲染 emoji 版面。
import { create } from 'zustand'
import type { StoreImage } from '../data/types'

const useImagesStore = create<{ images: Record<string, StoreImage> | null }>(() => ({
  images: null,
}))

let loading = false
export function ensureImagesLoaded() {
  if (loading) return
  loading = true
  void import('../data/extras/images').then((m) => {
    useImagesStore.setState({ images: m.STORE_IMAGES })
  })
}

export const useStoreImage = (id: string): StoreImage | undefined =>
  useImagesStore((s) => s.images?.[id])
