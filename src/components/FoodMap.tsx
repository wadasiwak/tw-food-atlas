import { useEffect, useRef } from 'react'
import maplibregl from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'
import type { Restaurant } from '../data/types'
import { CUISINE_META, PRICE_META } from '../labels'
import { hasWebGL } from '../lib/webgl'

const MAP_STYLE = 'https://tiles.openfreemap.org/styles/dark'

function markerEl(r: Restaurant, onClick: (id: string) => void): HTMLElement {
  const el = document.createElement('div')
  el.textContent = CUISINE_META[r.cuisine].emoji
  el.title = r.name
  Object.assign(el.style, {
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    background: 'var(--panel, #241d17)',
    fontSize: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '2px solid #e8944c',
    boxShadow: '0 1px 6px rgba(0,0,0,0.5)',
    cursor: 'pointer',
  })
  el.addEventListener('click', (e) => {
    e.stopPropagation()
    onClick(r.id)
  })
  return el
}

/** 篩選結果地圖：每家店一個菜系 emoji pin，點 pin 開店家詳情。 */
export default function FoodMap({
  restaurants,
  onOpen,
}: {
  restaurants: Restaurant[]
  onOpen: (id: string) => void
}) {
  const boxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const box = boxRef.current
    if (!box || restaurants.length === 0 || !hasWebGL()) return

    const bounds = new maplibregl.LngLatBounds()
    for (const r of restaurants) bounds.extend([r.center.lng, r.center.lat])

    const map = new maplibregl.Map({
      container: box,
      style: MAP_STYLE,
      bounds,
      fitBoundsOptions: { padding: 48, maxZoom: 15 },
      attributionControl: { compact: true },
    })
    map.addControl(new maplibregl.NavigationControl({ showCompass: false }))

    const markers = restaurants.map((r) =>
      new maplibregl.Marker({ element: markerEl(r, onOpen) })
        .setLngLat([r.center.lng, r.center.lat])
        .setPopup(
          new maplibregl.Popup({ closeButton: false, offset: 18 }).setText(
            `${r.name} · ${PRICE_META[r.priceBand].sign}`,
          ),
        )
        .addTo(map),
    )

    return () => {
      for (const m of markers) m.remove()
      map.remove()
    }
  }, [restaurants, onOpen])

  if (!restaurants.length) return null
  return <div className="map-box" ref={boxRef} />
}
