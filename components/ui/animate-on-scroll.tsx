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

  // Curtains start fully clipped (clip-path: inset(0 0 100%)), and Chrome
  // factors CSS clipping into IntersectionObserver: a fully-clipped element
  // never intersects, so observing it directly deadlocks. For curtains we
  // observe an unclipped outer wrapper and clip/reveal an inner element.
  const isCurtain = variant === "curtain" && !stagger;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const revealTarget = isCurtain
      ? ((el.firstElementChild ?? el) as HTMLElement)
      : el;

    if (stagger) {
      Array.from(el.children).forEach((child, i) => {
        const htmlChild = child as HTMLElement;
        htmlChild.classList.add("reveal");
        htmlChild.style.transitionDelay = `${delay + i * stagger}ms`;
      });
    } else if (delay > 0) {
      revealTarget.style.transitionDelay = `${delay}ms`;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          revealTarget.classList.add("revealed");
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
  }, [stagger, delay, threshold, once, isCurtain]);

  // With stagger the wrapper stays neutral and only its children animate;
  // otherwise the wrapper itself carries the reveal animation (the curtain
  // variant carries it on the inner wrapper, see above).
  const base = stagger || isCurtain ? "" : "reveal";
  const cls = `${base} ${className}`.trim();

  if (as === "ul") {
    return (
      <ul ref={ref as RefObject<HTMLUListElement>} className={cls}>
        {children}
      </ul>
    );
  }

  if (isCurtain) {
    return (
      <div ref={ref as RefObject<HTMLDivElement>} className={cls}>
        <div className="curtain relative w-full h-full">{children}</div>
      </div>
    );
  }

  return (
    <div ref={ref as RefObject<HTMLDivElement>} className={cls}>
      {children}
    </div>
  );
}
