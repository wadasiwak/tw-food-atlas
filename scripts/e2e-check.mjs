// 端到端測試：探索篩選 → 詳情 → 評分 → 推薦 → 換一批 → 分享 → 隱私。
// 需先 npm run build；本腳本自行啟動 vite preview (port 5281)。
import { spawn } from 'node:child_process'
import { chromium } from 'playwright'

const PORT = 5281
const BASE_URL = `http://localhost:${PORT}/`

const server = spawn('npx', ['vite', 'preview', '--port', String(PORT), '--strictPort'], {
  cwd: new URL('..', import.meta.url).pathname,
  stdio: 'ignore',
})

const fail = (msg) => {
  console.error(`FAIL: ${msg}`)
  server.kill()
  process.exit(1)
}

try {
  for (let i = 0; i < 30; i++) {
    try {
      await fetch(BASE_URL)
      break
    } catch {
      await new Promise((r) => setTimeout(r, 300))
      if (i === 29) fail('preview server 沒起來')
    }
  }

  const browser = await chromium.launch()
  const context = await browser.newContext({ permissions: ['clipboard-read', 'clipboard-write'] })
  const page = await context.newPage()
  await page.goto(BASE_URL)
  await page.waitForSelector('.grid .card', { timeout: 8000 })

  // 0. 資料量下限
  const count = await page.evaluate(() => window.__twfood.count)
  if (count < 12) fail(`資料量過低 (${count})，內容還沒掛上？`)

  // 1. 篩選：台南 + street-food → 結果全部 city=tainan（資料未含台南時跳過）
  const hasTainan = await page.evaluate(() =>
    window.__twfood.restaurants().some((r) => r.city === 'tainan' && r.cuisine === 'street-food'),
  )
  if (hasTainan) {
    await page.selectOption('.filter-bar select >> nth=0', 'tainan')
    await page.selectOption('.filter-bar select >> nth=1', 'street-food')
    await page.waitForSelector('.grid .card')
    const [shown, expected] = await page.evaluate(() => [
      document.querySelectorAll('.grid .card').length,
      window.__twfood
        .restaurants()
        .filter((r) => r.city === 'tainan' && r.cuisine === 'street-food').length,
    ])
    if (shown !== expected) fail(`台南+street-food 篩選應 ${expected} 家，實得 ${shown}`)
    await page.selectOption('.filter-bar select >> nth=0', '')
    await page.selectOption('.filter-bar select >> nth=1', '')
  } else {
    console.log('（台南資料未掛，跳過篩選斷言）')
  }

  // 2. 詳情 overlay：點卡片 → 開啟，GMaps 按鈕格式正確
  await page.click('.grid .card .card-main >> nth=0')
  await page.waitForSelector('[data-testid="detail"]', { timeout: 3000 })
  const href = await page.getAttribute('[data-testid="detail"] .gmaps-btn', 'href')
  if (!href?.startsWith('https://www.google.com/maps/search/?api=1&query='))
    fail(`GMaps 連結格式錯: ${href}`)
  const target = await page.getAttribute('[data-testid="detail"] .gmaps-btn', 'target')
  const rel = await page.getAttribute('[data-testid="detail"] .gmaps-btn', 'rel')
  if (target !== '_blank' || !rel?.includes('noopener')) fail('GMaps 連結需 _blank + noopener')

  // 3. #r/<id> 直開詳情
  const someId = await page.evaluate(() => window.__twfood.restaurants()[0].id)
  const page2 = await context.newPage()
  await page2.goto(`${BASE_URL}#r/${someId}`)
  await page2.waitForSelector('[data-testid="detail"]', { timeout: 5000 })
  await page2.close()

  // 4. 評分 5 家 → 推薦 tab 有結果且含理由 chips
  await page.evaluate(() => {
    const rs = window.__twfood.restaurants().slice(0, 6)
    rs.forEach((r, i) => window.__twfood.rate(r.id, 6 + (i % 5)))
  })
  await page.evaluate(() => window.__twfood.setTab('recommend'))
  await page.waitForSelector('[data-testid="rec-grid"] .card', { timeout: 5000 })
  const reasonCount = await page.locator('[data-testid="rec-grid"] .reasons .chip').count()
  if (reasonCount === 0) fail('推薦卡應含理由 chips')

  // 5. 換一批：第一名要變
  const first = await page.textContent('[data-testid="rec-grid"] .card .card-title >> nth=0')
  await page.click('.rec-controls button')
  await page.waitForTimeout(300)
  const firstAfter = await page.textContent('[data-testid="rec-grid"] .card .card-title >> nth=0')
  if (first === firstAfter) fail('換一批後第一名應該要變')

  // 6. 分享：我的 tab 複製連結 → 無痕開啟顯示榜單，垃圾 hash 不炸
  await page.evaluate(() => window.__twfood.setTab('list'))
  await page.click('.share-btn')
  const copied = await page.evaluate(() => navigator.clipboard.readText())
  const hash = copied.slice(copied.indexOf('#'))
  if (!hash.startsWith('#share=')) fail(`分享連結格式錯: ${copied}`)
  const page3 = await context.newPage()
  await page3.goto(`${BASE_URL}${hash}`)
  await page3.waitForSelector('.shared-head', { timeout: 5000 })
  const rows = await page3.locator('.my-list .list-row').count()
  if (rows === 0) fail('分享頁應顯示榜單')
  await page3.close()
  const page4 = await context.newPage()
  await page4.goto(`${BASE_URL}#share=!!!garbage***`)
  await page4.waitForSelector('.grid .card', { timeout: 5000 }) // 不炸，落回正常首頁
  await page4.close()

  // 7. 評分持久化：重整後 ratings 還在
  await page.reload()
  await page.waitForSelector('.grid .card', { timeout: 5000 })
  const persisted = await page.evaluate(() => Object.keys(window.__twfood.ratings()).length)
  if (persisted < 6) fail(`重整後評分應保留，實得 ${persisted}`)

  // 8. 隱私：goatcounter path 絕不可含 hash/query（此時網址可能帶 #r/...）
  await page.evaluate(() => window.__twfood.openDetail(window.__twfood.restaurants()[0].id))
  const gcPath = await page.evaluate(() => window.goatcounter.path())
  if (gcPath.includes('#') || gcPath.includes('?') || gcPath.includes('share'))
    fail(`goatcounter path 不可含 hash/query，實得: ${gcPath}`)

  // 9. 搜尋：輸入第一家店名 → 結果含該店且數量縮小
  await page.evaluate(() => window.__twfood.setTab('browse'))
  const targetName = await page.evaluate(() => window.__twfood.restaurants()[0].name)
  await page.fill('.search-input', targetName)
  await page.waitForTimeout(300)
  const searchCount = await page.locator('.grid .card').count()
  const total = await page.evaluate(() => window.__twfood.count)
  if (searchCount === 0 || searchCount >= total) fail(`搜尋「${targetName}」結果不合理 (${searchCount}/${total})`)
  await page.fill('.search-input', '')

  // 10. 🎲 今晚吃什麼：點了要開詳情，且詳情內可「再抽一家」換店
  await page.click('.dice-btn')
  await page.waitForSelector('[data-testid="detail"]', { timeout: 3000 })
  const diceFirst = await page.textContent('[data-testid="detail"] h2')
  let changed = false
  for (let i = 0; i < 5 && !changed; i++) {
    await page.click('.dice-next-btn')
    await page.waitForTimeout(200)
    changed = (await page.textContent('[data-testid="detail"] h2')) !== diceFirst
  }
  if (!changed) fail('🎲 再抽一家 連抽 5 次店名都沒變')
  await page.keyboard.press('Escape')

  // 11. 口味輪廓：已有評分時「我的」tab 要顯示
  await page.evaluate(() => window.__twfood.setTab('list'))
  await page.waitForSelector('[data-testid="taste"] .taste-chip', { timeout: 3000 })

  // 12. 地圖模式：WebGL 環境開地圖容器；無 WebGL 顯示降級提示（兩者擇一，不可白屏）
  await page.evaluate(() => window.__twfood.setTab('browse'))
  await page.click('.view-toggle button >> nth=1')
  await page.waitForTimeout(1500)
  const hasMap = await page.$('.map-box')
  const hasFallback = await page.$('.empty-hint')
  if (!hasMap && !hasFallback) fail('地圖模式應顯示地圖或降級提示，不可空白')

  await browser.close()
  console.log('e2e OK：篩選、詳情、#r 直開、推薦+理由、換一批、分享+垃圾hash、持久化、隱私、搜尋、隨機抽、口味輪廓、地圖降級全部通過')
} finally {
  server.kill()
}
