import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface Rating {
  score: number // 1-10
  ratedAt: number
}

interface RatingState {
  ratings: Record<string, Rating>
  skipped: Record<string, true> // 沒吃過/沒興趣，不再出現在評分池與推薦
  watchlist: Record<string, true> // 口袋名單（想去吃）
  rate: (id: string, score: number) => void
  removeRating: (id: string) => void
  markSkipped: (id: string) => void
  unmarkSkipped: (id: string) => void
  toggleWatchlist: (id: string) => void
  importAll: (data: {
    ratings: Record<string, Rating>
    skipped: Record<string, true>
    watchlist?: Record<string, true>
  }) => void
}

export const useRatingStore = create<RatingState>()(
  persist(
    (set) => ({
      ratings: {},
      skipped: {},
      watchlist: {},
      rate: (id, score) =>
        set((s) => ({
          ratings: { ...s.ratings, [id]: { score, ratedAt: Date.now() } },
          skipped: omit(s.skipped, id),
        })),
      removeRating: (id) => set((s) => ({ ratings: omit(s.ratings, id) })),
      markSkipped: (id) =>
        set((s) => ({
          skipped: { ...s.skipped, [id]: true },
          ratings: omit(s.ratings, id),
          watchlist: omit(s.watchlist, id),
        })),
      unmarkSkipped: (id) => set((s) => ({ skipped: omit(s.skipped, id) })),
      toggleWatchlist: (id) =>
        set((s) =>
          id in s.watchlist
            ? { watchlist: omit(s.watchlist, id) }
            : { watchlist: { ...s.watchlist, [id]: true }, skipped: omit(s.skipped, id) },
        ),
      importAll: (data) =>
        set({
          ratings: data.ratings ?? {},
          skipped: data.skipped ?? {},
          watchlist: data.watchlist ?? {},
        }),
    }),
    { name: 'twfood-ratings-v1' },
  ),
)

function omit<T extends Record<string, unknown>>(obj: T, id: string): T {
  if (!(id in obj)) return obj
  const copy = { ...obj }
  delete copy[id]
  return copy
}
