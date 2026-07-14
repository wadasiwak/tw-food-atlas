// 產生 og-image.png (2400×1260) 與 apple-touch-icon.png (180×180)：
// 用 playwright 對內嵌 HTML 截圖，風格對齊站內深色主題。
import { chromium } from 'playwright'
import { writeFileSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')

const OG_HTML = `<!doctype html><html><head><meta charset="utf-8"><style>
  body { margin:0; width:2400px; height:1260px; display:flex; flex-direction:column;
    align-items:center; justify-content:center; gap:36px;
    font-family:'PingFang TC','Noto Sans TC',sans-serif; color:#e4dcea;
    background: radial-gradient(1400px 700px at 85% -10%, rgba(232,148,76,.14), transparent 60%),
                radial-gradient(1100px 700px at 0% 110%, rgba(165,104,58,.16), transparent 60%), #131017; }
  .emoji { font-size: 200px; }
  h1 { font-size: 128px; margin: 0; color: #e8944c; letter-spacing: 8px; }
  p { font-size: 56px; margin: 0; color: #948aa5; letter-spacing: 4px; }
  .chips { display:flex; gap:24px; margin-top:16px; }
  .chip { border:3px solid #453a52; border-radius:999px; padding:14px 40px; font-size:44px; color:#e4dcea; background:#1e1822; }
</style></head><body>
  <div class="emoji">🍜</div>
  <h1>台灣美食圖鑑</h1>
  <p>地圖找店 × 菜系價位篩選 × 口味評分推薦</p>
  <div class="chips"><span class="chip">🗺️ 13 城市</span><span class="chip">🥢 精選名店</span><span class="chip">📤 分享 Top 10</span></div>
</body></html>`

const ICON_HTML = `<!doctype html><html><head><meta charset="utf-8"><style>
  body { margin:0; width:180px; height:180px; display:flex; align-items:center; justify-content:center;
    background:#131017; border-radius: 0; }
  .emoji { font-size: 110px; }
</style></head><body><div class="emoji">🍜</div></body></html>`

const browser = await chromium.launch()
for (const [html, size, out] of [
  [OG_HTML, { width: 2400, height: 1260 }, 'public/og-image.png'],
  [ICON_HTML, { width: 180, height: 180 }, 'public/apple-touch-icon.png'],
]) {
  const page = await browser.newPage({ viewport: size, deviceScaleFactor: 1 })
  await page.setContent(html)
  await page.waitForTimeout(400)
  const buf = await page.screenshot({ type: 'png' })
  writeFileSync(join(root, out), buf)
  console.log(`✓ ${out}`)
  await page.close()
}
await browser.close()
