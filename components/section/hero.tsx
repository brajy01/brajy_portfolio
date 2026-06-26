"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, easings, AnimatePresence } from "@/components/ui/motion";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import Typewriter from "@/components/ui/typewriter";
import HeroBackground from "@/components/ui/hero-background";

const paragraphs = [
  "+4 years running operations showed me where processes break, and where better decisions start",
  "So I learned to build the tools to fix what I used to solve by hand",
  "Across four languages, from years working internationally",
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

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const [titleDone, setTitleDone] = useState(false);
  const [paragraphsDone, setParagraphsDone] = useState(0);
  const [borderDone, setBorderDone] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const [buttonSize, setButtonSize] = useState({ w: 0, h: 0 });
  // Decide whether to skip the typewriter only after mount, so SSR and the
  // first client render produce identical HTML (no hydration mismatch).
  const [skipTypewriter, setSkipTypewriter] = useState(false);
  useEffect(() => {
    const isMobile = window.innerWidth < 640;
    const hasVisited = sessionStorage.getItem("hero-animated");
    if (!hasVisited) {
      sessionStorage.setItem("hero-animated", "true");
    }
    // window/sessionStorage are client-only, so the decision can only be made
    // after mount. Setting state here is the intended hydration-safe pattern.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (isMobile || hasVisited) setSkipTypewriter(true);
  }, []);

  const handleTitleComplete = useCallback(() => {
    setTitleDone(true);
  }, []);

  const handleParagraphComplete = useCallback(() => {
    setParagraphsDone((prev) => prev + 1);
  }, []);

  const allParagraphsDone = paragraphsDone >= paragraphs.length;

  // Measure button size for SVG path
  useEffect(() => {
    if (!buttonRef.current) return;
    const measure = () => {
      const rect = buttonRef.current?.getBoundingClientRect();
      if (rect) setButtonSize({ w: rect.width, h: rect.height });
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [allParagraphsDone]);

  const w = buttonSize.w;
  const h = buttonSize.h;
  const borderPath = roundedRectPath(w, h);

  return (
    <section
      className="relative overflow-hidden min-h-auto sm:min-h-[calc(100dvh-88px)] flex items-start sm:items-center section-x py-12 sm:py-16 md:py-20 bg-primary"
      role="region"
      aria-labelledby="hero-title"
    >
      <HeroBackground />
      <div className="relative z-10 section-container">
        <div className="max-w-4xl">
          <Typewriter
            text="Welcome_"
            speed={80}
            delay={100}
            onComplete={handleTitleComplete}
            as="h1"
            id="hero-title"
            className="font-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-6 sm:mb-8 md:mb-10 leading-tight text-primary-foreground"
            showCursorAfter
            skipAnimation={skipTypewriter}
          />

          <div className="space-y-4 sm:space-y-5">
            {paragraphs.map((text, i) => {
              // Each paragraph starts only when the previous one is done
              const canStart =
                prefersReducedMotion ||
                skipTypewriter ||
                (titleDone && (i === 0 || paragraphsDone > i - 1));
              const isVisible = canStart;

              return (
                <div
                  key={i}
                  className="font-text text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-primary-foreground flex items-start gap-2"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transition: "opacity 0.15s ease",
                  }}
                >
                  <span className="font-caption opacity-60 shrink-0 leading-relaxed">
                    &raquo;
                  </span>
                  {canStart ? (
                    <Typewriter
                      text={text}
                      speed={20}
                      delay={i === 0 ? 300 : 200}
                      onComplete={handleParagraphComplete}
                      as="span"
                      showCursorAfter={false}
                      cursorChar="_"
                      skipAnimation={skipTypewriter}
                    />
                  ) : (
                    <span>&nbsp;</span>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex justify-end mt-8 sm:mt-10 md:mt-12">
          <Link
            ref={buttonRef}
            href="/about"
            className={cn(
              "relative font-caption text-sm sm:text-base md:text-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-foreground rounded inline-block group transition-colors duration-500",
              borderDone
                ? "bg-primary-foreground"
                : "bg-transparent hover:bg-primary-foreground",
            )}
            aria-label="Learn more about Brajy"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={
                allParagraphsDone || prefersReducedMotion
                  ? { opacity: 1 }
                  : { opacity: 0 }
              }
              transition={{
                duration: 0.5,
                ease: easings.smooth,
                delay: allParagraphsDone && !prefersReducedMotion ? 0.3 : 0,
              }}
              className={cn(
                "relative z-10 flex items-center gap-1.5 px-4 py-2 sm:px-5 sm:py-2.5 transition-colors duration-500",
                borderDone
                  ? "text-primary"
                  : "text-primary-foreground group-hover:text-primary",
              )}
            >
              <AnimatePresence>
                {isHovered && (
                  <motion.span
                    key="chevron"
                    initial={
                      prefersReducedMotion ? false : { opacity: 0, width: 0 }
                    }
                    animate={{ opacity: 0.6, width: "auto" }}
                    exit={
                      prefersReducedMotion
                        ? { opacity: 0 }
                        : { opacity: 0, width: 0 }
                    }
                    transition={{
                      duration: prefersReducedMotion ? 0 : 0.25,
                      ease: easings.smooth,
                    }}
                    className="font-caption shrink-0 overflow-hidden"
                  >
                    &raquo;
                  </motion.span>
                )}
              </AnimatePresence>
              learn more about my path
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
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={
                    allParagraphsDone || prefersReducedMotion
                      ? { pathLength: 1, opacity: 1 }
                      : { pathLength: 0, opacity: 0 }
                  }
                  transition={{
                    pathLength: {
                      duration: 0.8,
                      ease: easings.smooth,
                      delay:
                        allParagraphsDone && !prefersReducedMotion ? 0.3 : 0,
                    },
                    opacity: {
                      duration: 0.01,
                      delay:
                        allParagraphsDone && !prefersReducedMotion ? 0.3 : 0,
                    },
                  }}
                  onAnimationComplete={() => {
                    if (allParagraphsDone) setBorderDone(true);
                  }}
                />
              </svg>
            )}
          </Link>
        </div>
      </div>
    </section>
  );
}
