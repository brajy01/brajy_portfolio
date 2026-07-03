"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, easings } from "@/components/ui/motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/utils";

const SCRAMBLE_CHARS = "abcdefghijklmnopqrstuvwxyz<>/*-_";
const SCRAMBLE_DURATION = 360; // ms
const SCRAMBLE_TICK = 30; // ms

/* Decoder effect: fires once per `trigger` bump. The characters shuffle
   (left to right) before settling on `target`; the trailing "_" cursor stays
   put. Returns the frame to display, or null when settled / not running. */
function useScrambleFrame(target: string, trigger: number) {
  const [frame, setFrame] = useState<string | null>(null);

  useEffect(() => {
    if (trigger === 0) return; // no scramble on mount, only on hover/focus

    const start = performance.now();
    const run = () => {
      const progress = (performance.now() - start) / SCRAMBLE_DURATION;
      if (progress >= 1) {
        window.clearInterval(interval);
        setFrame(null);
        return;
      }
      setFrame(
        target
          .split("")
          .map((char, i) =>
            // keep the trailing "_" cursor stable; decode letters in order
            i === target.length - 1 || progress > (i + 1) / target.length
              ? char
              : SCRAMBLE_CHARS[
                  Math.floor(Math.random() * SCRAMBLE_CHARS.length)
                ],
          )
          .join(""),
      );
    };
    run();
    const interval = window.setInterval(run, SCRAMBLE_TICK);
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
  const [scrambleTick, setScrambleTick] = useState(0);
  const monoLabel = `${label.toLowerCase()}_`;
  const scrambleFrame = useScrambleFrame(monoLabel, scrambleTick);
  const shown = hasPill ? (scrambleFrame ?? monoLabel) : label;

  // Scramble only when the pill is *arriving* via hover/focus — not when this
  // link is already pilled (e.g. clicking the link the pill is already on).
  const armPill = () => {
    if (!hasPill && !prefersReducedMotion) {
      setScrambleTick((tick) => tick + 1);
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
