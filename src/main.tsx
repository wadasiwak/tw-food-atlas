import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { ALL_RESTAURANTS } from './data'
import { useRatingStore } from './store'
import { useUiStore } from './ui'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// e2e test hook（scripts/e2e-check.mjs 用）
declare global {
  interface Window {
    __twfood: {
      count: number
      rate: (id: string, score: number) => void
      ratings: () => Record<string, { score: number }>
      openDetail: (id: string) => void
      setTab: (tab: 'browse' | 'rate' | 'recommend' | 'list') => void
      restaurants: () => { id: string; city: string; cuisine: string }[]
    }
  }
}
window.__twfood = {
  count: ALL_RESTAURANTS.length,
  rate: (id, score) => useRatingStore.getState().rate(id, score),
  ratings: () => useRatingStore.getState().ratings,
  openDetail: (id) => useUiStore.getState().openDetail(id),
  setTab: (tab) => useUiStore.getState().setTab(tab),
  restaurants: () => ALL_RESTAURANTS.map(({ id, city, cuisine }) => ({ id, city, cuisine })),
}
