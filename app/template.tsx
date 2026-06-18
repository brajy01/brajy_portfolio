"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { motion, easings } from "@/components/ui/motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

/**
 * Page-transition veil (A5). `template.tsx` remounts on every navigation, so the
 * keyed panel replays its reveal each time: an orange band covers the viewport
 * then lifts away to uncover the new page. Skipped entirely under reduced motion.
 */
export default function Template({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();

  return (
    <>
      {!prefersReducedMotion && (
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
