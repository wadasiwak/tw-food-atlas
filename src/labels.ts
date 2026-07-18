import type { Cuisine, PriceBand, Tag, CityDef } from './data/types'
import type { Lang } from './i18n'

export const cityLabel = (c: CityDef | undefined, lang: Lang): string =>
  c ? (lang === 'en' ? c.nameEn : c.name) : ''

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
  'drinks': { zh: '茶飲', en: 'Drinks', emoji: '🧋' },
  'cafe': { zh: '咖啡店', en: 'Cafe', emoji: '☕' },
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

// tag 只做渲染時翻譯；filter/儲存/向量 key 一律用中文原字串，嚴禁拿這裡的輸出當 key
export const TAG_META: Record<Tag, string> = {
  夜市: 'Night market',
  老店: 'Long-standing',
  創始店: 'The original',
  米其林必比登: 'Bib Gourmand',
  米其林星級: 'Michelin-starred',
  排隊名店: 'Worth the queue',
  在地人愛: 'Local favorite',
  觀光客必訪: 'Tourist must-visit',
  宵夜: 'Late-night',
  市場美食: 'Market eats',
  伴手禮: 'Gift-worthy',
  路邊攤: 'Street stall',
  冷氣內用: 'A/C seating',
  適合聚餐: 'Group-friendly',
  素食友善: 'Veggie-friendly',
}

export const tagLabel = (tag: Tag, lang: Lang): string =>
  lang === 'en' ? (TAG_META[tag] ?? tag) : tag

export function gmapsUrl(query: string): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`
}
