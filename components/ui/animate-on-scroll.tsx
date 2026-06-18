"use client";

import { useEffect, useRef, type ReactNode, type RefObject } from "react";

interface AnimateOnScrollProps {
  children: ReactNode;
  className?: string;
  /** When set, direct children are revealed one after another, delay = i * stagger (ms). */
  stagger?: number;
  delay?: number;
  threshold?: number;
  once?: boolean;
  /** "fade" = opacity + translateY (default). "curtain" = clip-path wipe from top. */
  variant?: "fade" | "curtain";
  /** Element to render. Use "ul" so staggered children can be semantic <li>. */
  as?: "div" | "ul";
}

export default function AnimateOnScroll({
  children,
  className = "",
  stagger,
  delay = 0,
  threshold = 0.1,
  once = true,
  variant = "fade",
  as = "div",
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (stagger) {
      Array.from(el.children).forEach((child, i) => {
        const htmlChild = child as HTMLElement;
        htmlChild.classList.add("reveal");
        htmlChild.style.transitionDelay = `${delay + i * stagger}ms`;
      });
    } else if (delay > 0) {
      el.style.transitionDelay = `${delay}ms`;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("revealed");
          if (stagger) {
            Array.from(el.children).forEach((child) => {
              (child as HTMLElement).classList.add("revealed");
            });
          }
          // Reveal any nested reveal/curtain elements too (e.g. a staggered
          // list or curtain image inside a fading section), so descendants are
          // never stranded hidden when an ancestor's observer fires first.
          el.querySelectorAll(
            ".reveal:not(.revealed), .curtain:not(.revealed)",
          ).forEach((n) => n.classList.add("revealed"));
          if (once) observer.unobserve(el);
        }
      },
      { threshold, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [stagger, delay, threshold, once]);

  // With stagger the wrapper stays neutral and only its children animate;
  // otherwise the wrapper itself carries the reveal/curtain animation.
  const base = stagger ? "" : variant === "curtain" ? "curtain" : "reveal";
  const cls = `${base} ${className}`.trim();

  if (as === "ul") {
    return (
      <ul ref={ref as RefObject<HTMLUListElement>} className={cls}>
        {children}
      </ul>
    );
  }

  return (
    <div ref={ref as RefObject<HTMLDivElement>} className={cls}>
      {children}
    </div>
  );
}
