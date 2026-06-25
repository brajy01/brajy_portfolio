"use client";

import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, easings } from "@/components/ui/motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

/**
 * Page-transition veil (A5). `template.tsx` remounts on every navigation, so the
 * keyed panel replays its reveal each time: an orange band covers the viewport
 * then lifts away to uncover the new page. Skipped under reduced motion AND on
 * the very first load, so a fresh visit doesn't open with the veil sweeping
 * down — it only plays on client-side navigation between pages.
 */

// Module-level flag: persists across client-side navigations within a page
// session but resets on a full reload, so it is false only for the initial load.
// Never mutated on the server, so SSR always renders without the veil and the
// first client render matches it (no hydration mismatch).
let hasNavigated = false;

export default function Template({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();
  // Snapshot taken at mount: true only for the first Template of a fresh load.
  const [isFirstLoad] = useState(() => !hasNavigated);

  useEffect(() => {
    hasNavigated = true;
  }, []);

  return (
    <>
      {!prefersReducedMotion && !isFirstLoad && (
        <motion.div
          key={pathname}
          aria-hidden="true"
          className="fixed inset-0 z-[100] origin-top bg-primary pointer-events-none"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          transition={{ duration: 0.6, ease: easings.smooth }}
        />
      )}
      {children}
    </>
  );
}
