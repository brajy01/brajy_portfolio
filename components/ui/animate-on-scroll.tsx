"use client";

import { useEffect, useRef, type ReactNode } from "react";

interface AnimateOnScrollProps {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
  threshold?: number;
  once?: boolean;
}

export default function AnimateOnScroll({
  children,
  className = "",
  stagger,
  delay = 0,
  threshold = 0.1,
  once = true,
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);

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
          if (once) observer.unobserve(el);
        }
      },
      { threshold, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [stagger, delay, threshold, once]);

  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
}
