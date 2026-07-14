import type { Cuisine, PriceBand } from './data/types'
import type { Lang } from './i18n'

export const CUISINE_META: Record<Cuisine, { zh: string; en: string; emoji: string }> = {
  'taiwanese': { zh: '台菜熱炒', en: 'Taiwanese', emoji: '🍲' },
  'street-food': { zh: '小吃', en: 'Street food', emoji: '🥢' },
  'noodles': { zh: '麵食', en: 'Noodles', emoji: '🍜' },
  'breakfast': { zh: '早餐', en: 'Breakfast', emoji: '🍳' },
  'seafood': { zh: '海鮮', en: 'Seafood', emoji: '🦐' },
  'hotpot': { zh: '鍋物', en: 'Hot pot', emoji: '🫕' },
  'bbq-fried': { zh: '燒烤炸物', en: 'BBQ & fried', emoji: '🍗' },
  'japanese': { zh: '日式', en: 'Japanese', emoji: '🍣' },
  'chinese': { zh: '中式外省', en: 'Chinese', emoji: '🥟' },
  'western': { zh: '西式', en: 'Western', emoji: '🍝' },
  'asian': { zh: '亞洲風味', en: 'Pan-Asian', emoji: '🍛' },
  'dessert': { zh: '甜點冰品', en: 'Dessert', emoji: '🍧' },
  'drinks': { zh: '茶飲咖啡', en: 'Drinks', emoji: '🧋' },
  'bakery': { zh: '糕餅伴手禮', en: 'Bakery', emoji: '🥮' },
  'vegetarian': { zh: '素食', en: 'Vegetarian', emoji: '🥬' },
}

export const CUISINES = Object.keys(CUISINE_META) as Cuisine[]

export const cuisineLabel = (c: Cuisine, lang: Lang) =>
  `${CUISINE_META[c].emoji} ${CUISINE_META[c][lang]}`

export const PRICE_META: Record<PriceBand, { sign: string; zh: string; en: string }> = {
  1: { sign: '$', zh: '~150 銅板', en: 'under NT$150' },
  2: { sign: '$$', zh: '150–400', en: 'NT$150–400' },
  3: { sign: '$$$', zh: '400–1000', en: 'NT$400–1000' },
  4: { sign: '$$$$', zh: '1000+', en: 'NT$1000+' },
}

export const priceLabel = (p: PriceBand, lang: Lang) =>
  `${PRICE_META[p].sign} ${PRICE_META[p][lang]}`

export function gmapsUrl(query: string): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`
}
