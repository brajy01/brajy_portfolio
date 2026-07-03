"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, easings } from "@/components/ui/motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/utils";

const REVEAL_DURATION = 360; // ms
const REVEAL_TICK = 30; // ms

/* Typewriter reveal: fires once per `trigger` bump. `target` ends with a "_"
   cursor; its letters type out one at a time (left to right) while the cursor
   follows the frontier and settles at the end. Returns the frame to display,
   or null when settled / not running. */
function useRevealFrame(target: string, trigger: number) {
  const [frame, setFrame] = useState<string | null>(null);

  useEffect(() => {
    if (trigger === 0) return; // no reveal on mount, only on hover/focus

    const letters = target.slice(0, -1); // drop the trailing "_" cursor
    const start = performance.now();
    const run = () => {
      const progress = (performance.now() - start) / REVEAL_DURATION;
      if (progress >= 1) {
        window.clearInterval(interval);
        setFrame(null);
        return;
      }
      const shown = Math.floor(progress * letters.length);
      setFrame(`${letters.slice(0, shown)}_`); // typed letters + moving cursor
    };
    run();
    const interval = window.setInterval(run, REVEAL_TICK);
    return () => window.clearInterval(interval);
  }, [trigger, target]);

  return frame;
}

interface DesktopNavLinkProps {
  href: string;
  label: string;
  /* the shared cream pill currently sits on this link */
  hasPill: boolean;
  onPillTarget: () => void;
  onPillRelease: () => void;
}

/* Desktop-only nav link: the cream pill (same tokens as the hero pills) glides
   between links via layoutId — on route change and on hover/focus alike. */
export default function DesktopNavLink({
  href,
  label,
  hasPill,
  onPillTarget,
  onPillRelease,
}: DesktopNavLinkProps) {
  const prefersReducedMotion = useReducedMotion();
  const [revealTick, setRevealTick] = useState(0);
  const monoLabel = `${label.toLowerCase()}_`;
  const revealFrame = useRevealFrame(monoLabel, revealTick);
  const shown = hasPill ? (revealFrame ?? monoLabel) : label;

  // Reveal only when the pill is *arriving* via hover/focus — not when this
  // link is already pilled (e.g. clicking the link the pill is already on).
  const armPill = () => {
    if (!hasPill && !prefersReducedMotion) {
      setRevealTick((tick) => tick + 1);
    }
    onPillTarget();
  };

  return (
    <Link
      href={href}
      onMouseEnter={armPill}
      onFocus={armPill}
      onBlur={onPillRelease}
      className={cn(
        "relative rounded-full px-4 py-1.5 transition-colors duration-300",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background focus-visible:ring-offset-2 focus-visible:ring-offset-primary",
        hasPill ? "text-foreground" : "text-background",
      )}
    >
      {hasPill && (
        <motion.span
          layoutId="nav-active-pill"
          aria-hidden="true"
          className="absolute inset-0 rounded-full bg-primary-foreground"
          transition={
            prefersReducedMotion
              ? { duration: 0 }
              : { duration: 0.45, ease: easings.smooth }
          }
        />
      )}
      {/* Stacked grid cell: the two invisible spans reserve the widest of the
          title/mono renderings so the font swap never shifts the layout. */}
      <span className="relative z-10 grid text-center">
        <span
          aria-hidden="true"
          className="invisible font-title col-start-1 row-start-1"
        >
          {label}
        </span>
        <span
          aria-hidden="true"
          className="invisible font-caption col-start-1 row-start-1"
        >
          {monoLabel}
        </span>
        <span
          className={cn(
            "col-start-1 row-start-1 whitespace-nowrap",
            hasPill ? "font-caption" : "font-title",
          )}
        >
          {shown}
        </span>
      </span>
    </Link>
  );
}
