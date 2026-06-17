"use client"

import { useEffect, useRef } from "react"
import "leaflet/dist/leaflet.css"

export default function ServiceAreaMap() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    let mapInstance: import("leaflet").Map | null = null
    let cancelled = false

    ;(async () => {
      const L = (await import("leaflet")).default
      if (cancelled || !containerRef.current) return

      mapInstance = L.map(containerRef.current, { scrollWheelZoom: false })

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19,
      }).addTo(mapInstance)

      const res = await fetch("/boundaries.json")
      if (cancelled) return
      const geojson = await res.json()
      if (cancelled || !mapInstance) return

      const dataLayer = L.geoJSON(geojson, {
        style: {
          color: "#2B5EA7",
          weight: 2,
          fillColor: "#2B5EA7",
          fillOpacity: 0.15,
        },
        onEachFeature(feature, lyr) {
          if (feature.properties?.name) {
            lyr.bindPopup(`<strong>${feature.properties.name}</strong>`)
          }
        },
      }).addTo(mapInstance)

      mapInstance.fitBounds(dataLayer.getBounds(), { padding: [24, 24] })
    })()

    return () => {
      cancelled = true
      mapInstance?.remove()
    }
  }, [])

  return <div ref={containerRef} className="h-[400px] w-full" />
}
