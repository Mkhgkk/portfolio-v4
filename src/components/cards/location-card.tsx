'use client'

import { useEffect, useRef } from 'react'
import type { COBEOptions } from 'cobe'
import createGlobe from 'cobe'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/cn'

export function LocationCard({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    // Canvas is 200×200 CSS px (400×400 internal at 2× DPR).
    // Globe radius = 200 internal px = 100 CSS px.
    // Positioned `bottom-0 translate-y-1/2` so globe centre aligns with card
    // bottom — only the upper hemisphere shows inside the card.
    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 400,   // 200 CSS px × 2
      height: 400,  // 200 CSS px × 2
      phi: 2.2,
      theta: 0.35,
      dark: 1,
      diffuse: 2.0,
      mapSamples: 16000,
      mapBrightness: 12,
      baseColor: [0.25, 0.25, 0.25],
      markerColor: [1, 0.22, 0.22],
      glowColor: [0.7, 0.7, 0.7],
      markers: [{ location: [37.5665, 126.978], size: 0.06 }],
      markerElevation: 0,
    } satisfies COBEOptions)

    const CENTRE    = 2.2
    const AMPLITUDE = 1.5   // rad — marker reaches near globe limb (~86°)
    const SWING_MS  = 7200  // ms to cross from one edge to the other
    const PAUSE_MS  = 600   // ms to dwell at each edge before returning
    const HALF_MS   = SWING_MS + PAUSE_MS   // one full half-cycle
    const FULL_MS   = HALF_MS * 2

    // Quadratic ease-in-out: 0→1
    const eio = (t: number) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t

    let frameId: number
    const startTime = Date.now()

    const animate = () => {
      const elapsed = (Date.now() - startTime) % FULL_MS

      let normalized: number          // -1 = left edge, +1 = right edge
      if (elapsed < SWING_MS) {
        // swing  left → right
        normalized = eio(elapsed / SWING_MS) * 2 - 1
      } else if (elapsed < HALF_MS) {
        // pause at right edge
        normalized = 1
      } else if (elapsed < HALF_MS + SWING_MS) {
        // swing  right → left
        normalized = 1 - eio((elapsed - HALF_MS) / SWING_MS) * 2
      } else {
        // pause at left edge
        normalized = -1
      }

      globe.update({ phi: CENTRE + AMPLITUDE * normalized })
      frameId = requestAnimationFrame(animate)
    }
    frameId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(frameId)
      globe.destroy()
    }
  }, [])

  return (
    <Card className={cn('overflow-hidden !p-0 relative !bg-[#111] !border-neutral-800', className)}>
      {/* Seoul label */}
      <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5">
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.55)" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
        <span className="text-xs font-medium text-white/60">Seoul</span>
      </div>

      {/* Globe canvas
          200×200 CSS px, centered horizontally.
          translate-y-1/2 shifts it down by 100 px so the globe centre
          aligns with the card bottom — only the upper hemisphere shows. */}
      <canvas
        ref={canvasRef}
        style={{ width: 200, height: 200 }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 opacity-95"
      />
    </Card>
  )
}
