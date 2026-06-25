"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface TypewriterProps {
  text: string;
  speed?: number;
  delay?: number;
  onComplete?: () => void;
  className?: string;
  as?: "h1" | "h2" | "h3" | "span" | "p";
  cursorChar?: string;
  showCursorAfter?: boolean;
  id?: string;
  skipAnimation?: boolean;
}

export default function Typewriter({
  text,
  speed = 80,
  delay = 0,
  onComplete,
  className,
  as: Tag = "span",
  cursorChar = "_",
  showCursorAfter = true,
  id,
  skipAnimation = false,
}: TypewriterProps) {
  const prefersReducedMotion = useReducedMotion();
  const shouldSkip = prefersReducedMotion || skipAnimation;
  const [displayedCount, setDisplayedCount] = useState(0);
  const [started, setStarted] = useState(false);

  const baseText = text.endsWith(cursorChar)
    ? text.slice(0, -cursorChar.length)
    : text;
  const hasTrailingCursor = text.endsWith(cursorChar);

  // Completion is derived, not stored: either we skipped, or typing reached the end.
  const isComplete = shouldSkip || (started && displayedCount >= baseText.length);

  useEffect(() => {
    if (shouldSkip) return;
    const timer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timer);
  }, [delay, shouldSkip]);

  // Advance one character at a time. The state update lives inside the timeout
  // (async), so it never runs synchronously in the effect body.
  useEffect(() => {
    if (!started || shouldSkip) return;
    if (displayedCount >= baseText.length) return;

    const timer = setTimeout(() => {
      setDisplayedCount((prev) => prev + 1);
    }, speed);

    return () => clearTimeout(timer);
  }, [started, displayedCount, baseText.length, speed, shouldSkip]);

  // Fire onComplete once, when the title finishes (or immediately when skipped).
  useEffect(() => {
    if (isComplete) onComplete?.();
  }, [isComplete, onComplete]);

  const displayedBase = baseText.slice(0, displayedCount);
  const showCursor =
    (hasTrailingCursor && isComplete && showCursorAfter) ||
    (started && !isComplete);

  if (shouldSkip) {
    return (
      <Tag className={className} aria-label={text} id={id}>
        <motion.span
          aria-hidden="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {baseText}
          {hasTrailingCursor && showCursorAfter && (
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            >
              {cursorChar}
            </motion.span>
          )}
        </motion.span>
      </Tag>
    );
  }

  return (
    <Tag className={className} aria-label={text} id={id}>
      <span aria-hidden="true">
        {displayedBase}
        {showCursor && (
          <motion.span
            animate={
              isComplete ? { opacity: [1, 0] } : { opacity: 1 }
            }
            transition={
              isComplete
                ? {
                    duration: 0.8,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  }
                : undefined
            }
          >
            {cursorChar}
          </motion.span>
        )}
      </span>
    </Tag>
  );
}
