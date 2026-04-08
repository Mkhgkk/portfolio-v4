"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import type { COBEOptions } from "cobe";
import createGlobe from "cobe";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/cn";

// COBE internal 3D convention (from source: U([lat, lng])):
//   a = lng * π/180 - π
//   x = -cos(lat) * cos(a)  →  cos(lat) * cos(lng_r)
//   y =  sin(lat)
//   z =  cos(lat) * sin(a)  → -cos(lat) * sin(lng_r)
// Scaled by COBE sphere radius (0.8).
const LAT_R = (37.5665 * Math.PI) / 180;
const LNG_R = (126.978 * Math.PI) / 180;
const SPHERE_R = 0.8;
const SX = Math.cos(LAT_R) * Math.cos(LNG_R) * SPHERE_R;
const SY = Math.sin(LAT_R) * SPHERE_R;
const SZ = -Math.cos(LAT_R) * Math.sin(LNG_R) * SPHERE_R;

const GLOBE_THETA = 0.35;
const CT = Math.cos(GLOBE_THETA);
const ST = Math.sin(GLOBE_THETA);

/**
 * Projects Seoul onto the 200×200 CSS-px canvas for a given phi.
 * Uses the exact rotation from COBE's JS/GLSL source:
 *   c  = cos(φ)·x + sin(φ)·z
 *   s  = sin(φ)·sin(θ)·x + cos(θ)·y − cos(φ)·sin(θ)·z
 *   dz = −sin(φ)·cos(θ)·x + sin(θ)·y + cos(φ)·cos(θ)·z
 * screen: cx = (1+c)/2·W,  cy = (1−s)/2·H
 */
function projectSeoul(phi: number): { cx: number; cy: number; z: number } {
  const cp = Math.cos(phi),
    sp = Math.sin(phi);
  const c = cp * SX + sp * SZ;
  const s = sp * ST * SX + CT * SY - cp * ST * SZ;
  const z = -sp * CT * SX + ST * SY + cp * CT * SZ;
  return { cx: ((1 + c) / 2) * 200, cy: ((1 - s) / 2) * 200, z };
}

export function LocationCard({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useTheme();
  // resolvedTheme is undefined until next-themes hydrates — treat that as "not ready"
  const isDark = resolvedTheme === undefined ? null : resolvedTheme !== "light";

  useEffect(() => {
    if (!canvasRef.current || isDark === null) return;

    // Canvas is 200×200 CSS px (400×400 internal at 2× DPR).
    // Globe radius = 200 internal px = 100 CSS px.
    // Positioned `bottom-0 translate-y-1/2` so globe centre aligns with card
    // bottom — only the upper hemisphere shows inside the card.
    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 400, // 200 CSS px × 2
      height: 400, // 200 CSS px × 2
      phi: 2.2,
      theta: GLOBE_THETA,
      dark: isDark ? 1 : 0,
      diffuse: isDark ? 2.0 : 1.8,
      mapSamples: 16000,
      mapBrightness: isDark ? 12 : 9,
      baseColor: isDark ? [0.25, 0.25, 0.25] : [0.85, 0.85, 0.85],
      markerColor: [1, 0.22, 0.22],
      glowColor: isDark ? [0.7, 0.7, 0.7] : [0.15, 0.15, 0.15],
      // Small crisp dot — CSS overlay provides the glow
      markers: [{ location: [37.5665, 126.978], size: 0.04 }],
      markerElevation: 0,
    } satisfies COBEOptions);

    const CENTRE = 2.2;
    const AMPLITUDE = 1.5; // rad — marker reaches near globe limb (~86°)
    const SWING_MS = 7200; // ms to cross from one edge to the other
    const PAUSE_MS = 600; // ms to dwell at each edge before returning
    const HALF_MS = SWING_MS + PAUSE_MS;
    const FULL_MS = HALF_MS * 2;

    const eio = (t: number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

    let frameId: number;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = (Date.now() - startTime) % FULL_MS;

      let normalized: number;
      if (elapsed < SWING_MS) {
        normalized = eio(elapsed / SWING_MS) * 2 - 1;
      } else if (elapsed < HALF_MS) {
        normalized = 1;
      } else if (elapsed < HALF_MS + SWING_MS) {
        normalized = 1 - eio((elapsed - HALF_MS) / SWING_MS) * 2;
      } else {
        normalized = -1;
      }

      const phi = CENTRE + AMPLITUDE * normalized;
      globe.update({ phi });

      if (glowRef.current) {
        const { cx, cy, z } = projectSeoul(phi);
        glowRef.current.style.opacity = String(
          Math.max(0, Math.min(1, z * 1.4)),
        );
        glowRef.current.style.left = `${cx}px`;
        glowRef.current.style.top = `${cy}px`;
      }

      frameId = requestAnimationFrame(animate);
    };
    frameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frameId);
      globe.destroy();
    };
  }, [isDark]);

  return (
    <Card
      className={cn(
        "overflow-hidden !p-0 relative dark:!bg-[#111] dark:!border-neutral-800",
        className,
      )}
    >
      {/* Seoul label */}
      <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5">
        <svg
          width="11"
          height="11"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-neutral-500 dark:text-white/55"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
        <span className="text-xs font-medium text-neutral-500 dark:text-white/60">
          Seoul
        </span>
      </div>

      {/* Canvas + glow share the same 200×200 coordinate space */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2"
        style={{ width: 200, height: 200 }}
      >
        <canvas
          ref={canvasRef}
          style={{ width: 200, height: 200 }}
          className="opacity-95"
        />

        {/* CSS glow overlay — tracked to Seoul each frame */}
        <div
          ref={glowRef}
          style={{
            position: "absolute",
            width: 32,
            height: 32,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(255,40,40,0.9) 0%, rgba(255,20,20,0.5) 28%, rgba(200,0,0,0.12) 62%, transparent 80%)",
            filter: "blur(7px)",
            transform: "translate(-50%, -50%)",
            pointerEvents: "none",
          }}
        />
      </div>
    </Card>
  );
}
