import type { Rating } from './store'

// 分享連結一律指向公開站，朋友才打得開
export const PUBLIC_BASE = 'https://wadasiwak.github.io/tw-food-atlas/'

export type ShareEntry = [string, number] // [restaurantId, score]

const ID_RE = /^[a-z0-9]+(-[a-z0-9]+)*$/

export function topRated(ratings: Record<string, Rating>, n = 10): ShareEntry[] {
  return Object.entries(ratings)
    .sort((a, b) => b[1].score - a[1].score || b[1].ratedAt - a[1].ratedAt)
    .slice(0, n)
    .map(([id, r]) => [id, r.score])
}

export function buildShareUrl(entries: ShareEntry[]): string {
  const raw = btoa(JSON.stringify(entries)).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
  return `${PUBLIC_BASE}#share=${raw}`
}

export function parseShareHash(hash: string = location.hash): ShareEntry[] | null {
  const m = hash.match(/#share=([A-Za-z0-9_-]+)/)
  if (!m) return null
  try {
    const json = atob(m[1].replace(/-/g, '+').replace(/_/g, '/'))
    const arr: unknown = JSON.parse(json)
    if (
      Array.isArray(arr) &&
      arr.length > 0 &&
      arr.every(
        (e) =>
          Array.isArray(e) &&
          typeof e[0] === 'string' &&
          ID_RE.test(e[0]) &&
          Number.isInteger(e[1]) &&
          e[1] >= 1 &&
          e[1] <= 10,
      )
    ) {
      return (arr as ShareEntry[]).slice(0, 20)
    }
  } catch {
    // 壞掉的連結就當沒有
  }
  return null
}
