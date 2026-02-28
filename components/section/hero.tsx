"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { AnimatePresence } from "@/components/ui/motion";
import Link from "next/link";
import { motion, easings } from "@/components/ui/motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import Typewriter from "@/components/ui/typewriter";

const paragraphs = [
  "+4 years in operations taught me where processes break and where better decisions start",
  "I learned to build the tools to fix what I used to solve by hand",
  "Fluent in 4 languages, thanks to years working internationally",
];

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const [titleDone, setTitleDone] = useState(false);
  const [paragraphsDone, setParagraphsDone] = useState(0);
  const [borderDone, setBorderDone] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const [buttonSize, setButtonSize] = useState({ w: 0, h: 0 });
  const [skipTypewriter] = useState(() => {
    if (typeof window === "undefined") return false;
    const isMobile = window.innerWidth < 640;
    const hasVisited = sessionStorage.getItem("hero-animated");
    if (!hasVisited) {
      sessionStorage.setItem("hero-animated", "true");
    }
    return isMobile || !!hasVisited;
  });

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

  // Build the counter-clockwise path starting from bottom-right
  const r = 4;
  const w = buttonSize.w;
  const h = buttonSize.h;
  // Start at bottom-right (before the corner radius), go left along bottom,
  // up along left, right along top, down along right, back to start
  const borderPath =
    w > 0 && h > 0
      ? [
          `M ${w - r} ${h}`,
          `L ${r} ${h}`,
          `Q 0 ${h} 0 ${h - r}`,
          `L 0 ${r}`,
          `Q 0 0 ${r} 0`,
          `L ${w - r} 0`,
          `Q ${w} 0 ${w} ${r}`,
          `L ${w} ${h - r}`,
          `Q ${w} ${h} ${w - r} ${h}`,
        ].join(" ")
      : "";

  return (
    <section
      className="min-h-auto sm:min-h-[calc(100vh-88px)] flex items-start sm:items-center px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-12 sm:py-16 md:py-20 bg-primary"
      role="region"
      aria-labelledby="hero-title"
    >
      <div className="max-w-7xl mx-auto w-full">
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
            className={`relative font-caption text-sm sm:text-base md:text-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-foreground rounded inline-block group transition-colors duration-500 ${
              borderDone
                ? "bg-primary-foreground"
                : "bg-transparent hover:bg-primary-foreground"
            }`}
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
              className={`relative z-10 flex items-center gap-1.5 px-4 py-2 sm:px-5 sm:py-2.5 transition-colors duration-500 ${
                borderDone
                  ? "text-primary"
                  : "text-primary-foreground group-hover:text-primary"
              }`}
            >
              <AnimatePresence>
                {isHovered && (
                  <motion.span
                    key="chevron"
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 0.6, width: "auto" }}
                    exit={{ opacity: 0, width: 0 }}
                    transition={{ duration: 0.25, ease: easings.smooth }}
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
