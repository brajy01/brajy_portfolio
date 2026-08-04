"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, easings } from "@/components/ui/motion";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import HeroBackground from "@/components/ui/hero-background";

const HEADLINE_LINES = [
  "I ran operations for four years.",
  "Now I build the tools I used to need",
];

const PILLS = [
  "operations & business analyst",
  "process improvement",
  "SQL & Python",
  "4 languages",
];

// Counter-clockwise rounded-rect path from the bottom-right corner, drives the
// button's animated border draw.
function roundedRectPath(w: number, h: number, r = 4) {
  if (w <= 0 || h <= 0) return "";
  return [
    `M ${w - r} ${h}`,
    `L ${r} ${h}`,
    `Q 0 ${h} 0 ${h - r}`,
    `L 0 ${r}`,
    `Q 0 0 ${r} 0`,
    `L ${w - r} 0`,
    `Q ${w} 0 ${w} ${r}`,
    `L ${w} ${h - r}`,
    `Q ${w} ${h} ${w - r} ${h}`,
  ].join(" ");
}

/* Slides its content up out of an overflow-hidden mask. The text is real DOM
   at SSR (only transformed), so the hero copy is in the first HTML payload.
   Use as="span" inside heading/paragraph elements to stay valid HTML. */
function MaskedReveal({
  children,
  delay = 0,
  className,
  as = "div",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "span";
}) {
  const prefersReducedMotion = useReducedMotion();
  const Mask = as === "span" ? "span" : "div";
  const MotionInner = as === "span" ? motion.span : motion.div;
  return (
    <Mask className={cn("block overflow-hidden", className)}>
      <MotionInner
        className="block"
        initial={prefersReducedMotion ? false : { y: "110%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, ease: easings.smooth, delay }}
      >
        {children}
      </MotionInner>
    </Mask>
  );
}

function HeroCta() {
  const prefersReducedMotion = useReducedMotion();
  const [borderDone, setBorderDone] = useState(false);
  // First client render must match the SSR HTML (which can't know the user's
  // reduced-motion preference); the filled state may only flip after mount,
  // otherwise React never patches the mismatched className during hydration.
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    // Post-mount flip is the intended hydration-safe pattern (see the old
    // hero's skipTypewriter): the value can only be known on the client.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const [buttonSize, setButtonSize] = useState({ w: 0, h: 0 });

  // Measure button size for the SVG border path
  useEffect(() => {
    if (!buttonRef.current) return;
    const measure = () => {
      const rect = buttonRef.current?.getBoundingClientRect();
      if (rect) setButtonSize({ w: rect.width, h: rect.height });
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const { w, h } = buttonSize;
  const borderPath = roundedRectPath(w, h);
  const filled = borderDone || (mounted && prefersReducedMotion);

  return (
    <Link
      ref={buttonRef}
      href="/about"
      className={cn(
        "relative font-caption text-sm sm:text-base md:text-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-foreground rounded inline-block group transition-colors duration-500",
        filled ? "bg-primary-foreground" : "bg-transparent hover:bg-primary-foreground",
      )}
      aria-label="Discover my path"
    >
      <motion.span
        initial={prefersReducedMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: easings.smooth, delay: 0.55 }}
        className={cn(
          "relative z-10 flex items-center gap-1.5 px-4 py-2 sm:px-5 sm:py-2.5 transition-colors duration-500",
          filled ? "text-primary" : "text-primary-foreground group-hover:text-primary",
        )}
      >
        discover my path
        <ArrowUpRight
          aria-hidden="true"
          className="arrow-lift size-4 shrink-0"
        />
      </motion.span>
      {borderPath && (
        <svg
          className="absolute inset-0 w-full h-full overflow-visible"
          aria-hidden="true"
          viewBox={`0 0 ${w} ${h}`}
          preserveAspectRatio="none"
        >
          <motion.path
            d={borderPath}
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-primary-foreground"
            initial={
              prefersReducedMotion
                ? { pathLength: 1, opacity: 1 }
                : { pathLength: 0, opacity: 0 }
            }
            animate={{ pathLength: 1, opacity: 1 }}
            transition={
              prefersReducedMotion
                ? { duration: 0 }
                : {
                    pathLength: { duration: 0.8, ease: easings.smooth, delay: 0.55 },
                    opacity: { duration: 0.01, delay: 0.55 },
                  }
            }
            onAnimationComplete={() => setBorderDone(true)}
          />
        </svg>
      )}
    </Link>
  );
}

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      className="relative overflow-hidden min-h-auto sm:min-h-[calc(100dvh-var(--header-height))] flex section-x py-12 sm:py-16 md:py-20 bg-primary"
      role="region"
      aria-labelledby="hero-title"
    >
      <HeroBackground />
      <div className="relative z-10 section-container flex flex-col justify-between gap-10 sm:gap-12">
        {/* Group 1: kicker + headline */}
        <div>
          <MaskedReveal>
            <p className="font-caption text-sm sm:text-base text-primary-foreground">
              _hello world, I&apos;m Jeremy
            </p>
          </MaskedReveal>

          <h1
            id="hero-title"
            className="font-title text-[clamp(2.25rem,4.5vw,6rem)] leading-[1.08] tracking-tight text-primary-foreground mt-4 sm:mt-6"
          >
            <MaskedReveal as="span" delay={0.1}>
              {HEADLINE_LINES[0]}
            </MaskedReveal>
            <MaskedReveal as="span" delay={0.2}>
              {HEADLINE_LINES[1]}
              <span aria-hidden="true" className="blink-cursor">
                _
              </span>
            </MaskedReveal>
          </h1>
        </div>

        {/* Group 2: tagline + profile pills */}
        <div>
          <MaskedReveal delay={0.3} className="text-center">
            <p className="font-caption text-sm sm:text-base md:text-lg text-primary-foreground">
              Operations &times; Data &times; Systems
            </p>
          </MaskedReveal>

          <motion.ul
            className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-6 sm:mt-8"
            aria-label="Profile highlights"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: easings.smooth, delay: 0.4 }}
          >
            {PILLS.map((pill) => (
              <li
                key={pill}
                className="font-caption text-xs sm:text-sm px-3 sm:px-4 py-1 sm:py-1.5 bg-primary-foreground text-foreground rounded-full"
              >
                {pill}
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Group 3: CTA */}
        <div className="flex justify-center sm:justify-end">
          <HeroCta />
        </div>
      </div>
    </section>
  );
}
