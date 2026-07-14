/** WebGL 能力檢查——不支援時地圖模式降級成列表。
 * 獨立小檔：BrowseTab 需要它決定降級，但不能為此把 maplibre 拉進首屏 bundle。 */
export function hasWebGL(): boolean {
  try {
    const canvas = document.createElement('canvas')
    return !!(canvas.getContext('webgl2') || canvas.getContext('webgl'))
  } catch {
    return false
  }
}
