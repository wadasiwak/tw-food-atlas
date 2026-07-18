// Wikimedia Commons 共用 helper（圖片管線四支腳本共用）。
// 授權白名單：CC0 / Public domain / Attribution / CC BY* / CC BY-SA*（排除 NC/ND）。
import { execFileSync } from 'node:child_process'
import { mkdtempSync, readFileSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join, dirname } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

export const root = join(dirname(fileURLToPath(import.meta.url)), '..', '..')

export const UA =
  'tw-food-atlas/1.0 (https://github.com/wadasiwak/tw-food-atlas; contact via GitHub)'

export const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

export const readJson = (p, fallback) => {
  try {
    return JSON.parse(readFileSync(p, 'utf8'))
  } catch {
    return fallback
  }
}

export const isLicenseOk = (short) => {
  if (!short) return false
  const s = short.trim().toLowerCase()
  if (s.includes('nc') || s.includes('nd')) return false
  return (
    s === 'cc0' ||
    s === 'attribution' ||
    s.includes('public domain') ||
    s === 'pd' ||
    s.startsWith('cc by')
  )
}

export const stripHtml = (s) => String(s ?? '').replace(/<[^>]*>/g, '').trim()

/** 搜 Commons File namespace，回傳過了授權/格式關的候選（含 960px 縮圖 URL）。 */
export async function searchCommons(query, limit = 5) {
  const url =
    'https://commons.wikimedia.org/w/api.php?action=query&format=json&origin=*' +
    '&generator=search&gsrnamespace=6&gsrlimit=10' +
    `&gsrsearch=${encodeURIComponent(query)}` +
    '&prop=imageinfo&iiprop=url|extmetadata|mime&iiurlwidth=960'
  const res = await fetch(url, { headers: { 'User-Agent': UA } })
  if (res.status === 429 || res.status >= 500) {
    const wait = Number(res.headers.get('retry-after') ?? 3) * 1000 + 1000
    throw Object.assign(new Error(`HTTP ${res.status}`), { retriable: true, wait })
  }
  if (!res.ok) throw new Error(`HTTP ${res.status}`)
  let data
  try {
    data = await res.json()
  } catch {
    throw Object.assign(new Error('非 JSON 回應'), { retriable: true, wait: 3000 })
  }
  const pages = Object.values(data.query?.pages ?? {})
  const out = []
  for (const p of pages) {
    const info = p.imageinfo?.[0]
    if (!info || !/^image\/(jpeg|png)$/.test(info.mime ?? '')) continue
    const meta = info.extmetadata ?? {}
    const license = stripHtml(meta.LicenseShortName?.value)
    if (!isLicenseOk(license)) continue
    out.push({
      title: p.title,
      desc: stripHtml(meta.ImageDescription?.value).slice(0, 120),
      src: info.thumburl ?? info.url,
      author: stripHtml(meta.Artist?.value).slice(0, 80) || 'unknown',
      license,
      licenseUrl: meta.LicenseUrl?.value ?? 'https://commons.wikimedia.org/wiki/Commons:Licensing',
      sourceUrl: info.descriptionurl,
    })
    if (out.length >= limit) break
  }
  return out
}

/** 帶重試的查詢；回 undefined = 這輪失敗留待下輪（斷點續跑三態的「鍵不存在」）。 */
export async function searchWithRetry(query, log = console.log) {
  for (let attempt = 0; attempt < 4; attempt++) {
    try {
      return await searchCommons(query)
    } catch (e) {
      if (e.retriable && attempt < 3) {
        log(`  ${query}: ${e.message}，${e.wait}ms 後重試`)
        await sleep(e.wait)
      } else {
        log(`  ${query}: 查詢失敗（${e.message}），留待下輪`)
        return undefined
      }
    }
  }
}

/** rolldown bundle 後載入全站資料（與 check-content 同招）。 */
export async function loadRestaurants() {
  const tmp = mkdtempSync(join(tmpdir(), 'twfood-img-'))
  const bundle = join(tmp, 'data.mjs')
  execFileSync(
    join(root, 'node_modules/.bin/rolldown'),
    [join(root, 'src/data/index.ts'), '--format', 'esm', '--platform', 'node', '--file', bundle],
    { stdio: ['ignore', 'ignore', 'inherit'] },
  )
  const mod = await import(pathToFileURL(bundle).href)
  rmSync(tmp, { recursive: true, force: true })
  return { ALL: mod.ALL_RESTAURANTS, CITIES: mod.CITIES }
}

/** 下載覆核縮圖。直接抓 API 給的 960px thumb（WMF 2025 起縮圖寬度有白名單，
 *  隨便換 320px 會 400——不要用字串替換降階）。 */
export async function downloadThumb(src, destPath) {
  try {
    const res = await fetch(src, { headers: { 'User-Agent': UA } })
    if (res.ok) {
      const { writeFileSync } = await import('node:fs')
      writeFileSync(destPath, Buffer.from(await res.arrayBuffer()))
      return true
    }
  } catch {
    /* 縮圖失敗不擋流程 */
  }
  return false
}
