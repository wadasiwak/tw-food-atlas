// 驗收截圖：列表/地圖/詳情/分享四張，輸出到 scratch/（gitignore）。
import { spawn } from 'node:child_process'
import { mkdirSync } from 'node:fs'
import { chromium } from 'playwright'

const PORT = 5282
const BASE_URL = `http://localhost:${PORT}/`
mkdirSync(new URL('../scratch', import.meta.url).pathname, { recursive: true })
const out = (n) => new URL(`../scratch/${n}.png`, import.meta.url).pathname

const server = spawn('npx', ['vite', 'preview', '--port', String(PORT), '--strictPort'], {
  cwd: new URL('..', import.meta.url).pathname,
  stdio: 'ignore',
})

try {
  for (let i = 0; i < 30; i++) {
    try { await fetch(BASE_URL); break } catch { await new Promise((r) => setTimeout(r, 300)) }
  }
  const browser = await chromium.launch({ args: ['--use-gl=angle'] })
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } })

  await page.goto(BASE_URL)
  await page.waitForSelector('.grid .card')
  await page.screenshot({ path: out('1-browse-list') })

  await page.click('.view-toggle button >> nth=1')
  await page.waitForTimeout(4000) // 等 tile 載入
  await page.screenshot({ path: out('2-browse-map') })

  await page.click('.view-toggle button >> nth=0')
  await page.click('.grid .card .card-main >> nth=0')
  await page.waitForSelector('[data-testid="detail"]')
  await page.screenshot({ path: out('3-detail') })

  // 評幾家 → 分享頁
  await page.evaluate(() => {
    window.__twfood.restaurants().slice(0, 10).forEach((r, i) => window.__twfood.rate(r.id, 10 - (i % 4)))
  })
  const entries = await page.evaluate(() => Object.entries(window.__twfood.ratings()).map(([id, r]) => [id, r.score]))
  const hash = Buffer.from(JSON.stringify(entries.slice(0, 10))).toString('base64url')
  const page2 = await browser.newPage({ viewport: { width: 1280, height: 900 } })
  await page2.goto(`${BASE_URL}#share=${hash}`)
  await page2.waitForSelector('.shared-head')
  await page2.screenshot({ path: out('4-shared') })

  await browser.close()
  console.log('✓ 4 screenshots in scratch/')
} finally {
  server.kill()
}
