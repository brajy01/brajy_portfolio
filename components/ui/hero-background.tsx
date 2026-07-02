"use client";

import { useEffect, useRef } from "react";

/**
 * Living hero background: a CSS mesh gradient from the Brajy palette (no image
 * asset). Each coloured blob drifts continuously on its own slow orbit
 * (lava-lamp feel), and a soft warm highlight (b5) trails the pointer with a
 * long lag so the surface feels alive and organic rather than sliding as one
 * block. Decorative only.
 *
 * Gated by `prefers-reduced-motion`: when reduced motion is on, the blobs and
 * the follower sit at their base positions and nothing animates.
 */

// Each blob: base position (%), orbit radius (%), orbit speed, phase offset,
// and how strongly it reacts to the pointer.
const BLOBS = [
  { bx: 16, by: 20, rx: 6, ry: 5, speed: 0.11, phase: 0.0, pull: 0.9 },
  { bx: 84, by: 14, rx: 5, ry: 6, speed: 0.09, phase: 1.7, pull: 0.6 },
  { bx: 80, by: 82, rx: 7, ry: 5, speed: 0.13, phase: 3.2, pull: 0.7 },
  { bx: 20, by: 86, rx: 5, ry: 7, speed: 0.08, phase: 4.6, pull: 0.5 },
  { bx: 52, by: 50, rx: 8, ry: 6, speed: 0.15, phase: 2.3, pull: 1.1 },
];

export default function HeroBackground() {
  const meshRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mesh = meshRef.current;
    if (!mesh) return;

    const host = mesh.parentElement; // the hero-bg-fade box (covers the hero)
    if (!host) return;

    // Pointer offset in -0.5 → 0.5, eased toward each frame (gentle blob pull).
    let pointerX = 0;
    let pointerY = 0;
    let curPX = 0;
    let curPY = 0;
    const PULL_RANGE = 7; // max % a blob is nudged by the pointer

    // Follower highlight (b5): trails the actual pointer position (in mesh %)
    // with a long lag. Starts centred so there's no jump before the first move.
    let targetX = 50;
    let targetY = 50;
    let followX = 50;
    let followY = 50;
    const FOLLOW_EASE = 0.018; // small = long, organic delay

    // Cache the host rect so mapping the pointer into the hero box costs no
    // layout read per mousemove; refresh it on scroll/resize.
    let rect = host.getBoundingClientRect();
    const updateRect = () => {
      rect = host.getBoundingClientRect();
    };

    const onMove = (e: MouseEvent) => {
      pointerX = e.clientX / window.innerWidth - 0.5;
      pointerY = e.clientY / window.innerHeight - 0.5;
      targetX = ((e.clientX - rect.left) / rect.width) * 100;
      targetY = ((e.clientY - rect.top) / rect.height) * 100;
    };

    let raf = 0;
    let t = 0;
    const loop = () => {
      t += 0.016;
      curPX += (pointerX - curPX) * 0.05;
      curPY += (pointerY - curPY) * 0.05;

      for (let i = 0; i < BLOBS.length; i++) {
        const b = BLOBS[i];
        // Autonomous elliptical orbit + gentle pointer pull.
        const x =
          b.bx +
          Math.cos(t * b.speed + b.phase) * b.rx +
          curPX * PULL_RANGE * b.pull;
        const y =
          b.by +
          Math.sin(t * b.speed * 1.3 + b.phase) * b.ry +
          curPY * PULL_RANGE * b.pull;
        mesh.style.setProperty(`--b${i}x`, `${x}%`);
        mesh.style.setProperty(`--b${i}y`, `${y}%`);
      }

      // Long-lagged follower + a slow wobble so it stays alive when the pointer
      // is still (or absent, e.g. touch devices).
      followX += (targetX - followX) * FOLLOW_EASE;
      followY += (targetY - followY) * FOLLOW_EASE;
      mesh.style.setProperty("--b5x", `${followX + Math.cos(t * 0.6) * 2.5}%`);
      mesh.style.setProperty("--b5y", `${followY + Math.sin(t * 0.5) * 2.5}%`);

      raf = requestAnimationFrame(loop);
    };

    // Honour prefers-reduced-motion live, not just at mount: stop the loop and
    // drop the inline vars (CSS base positions take over) when it turns on.
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    let running = false;
    const start = () => {
      if (running) return;
      running = true;
      raf = requestAnimationFrame(loop);
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
      for (let i = 0; i <= 5; i++) {
        mesh.style.removeProperty(`--b${i}x`);
        mesh.style.removeProperty(`--b${i}y`);
      }
    };
    const onPrefChange = () => (mql.matches ? stop() : start());
    mql.addEventListener("change", onPrefChange);

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("scroll", updateRect, { passive: true });
    window.addEventListener("resize", updateRect);
    if (!mql.matches) start();
    return () => {
      mql.removeEventListener("change", onPrefChange);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("scroll", updateRect);
      window.removeEventListener("resize", updateRect);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      className="hero-bg-fade absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {/* Mesh gradient: blob positions driven by CSS vars set in JS above. */}
      <div ref={meshRef} className="hero-mesh absolute -inset-24" />

      {/* Animated grain: shimmers over the mesh */}
      <div className="hero-grain absolute inset-0" />
    </div>
  );
}
