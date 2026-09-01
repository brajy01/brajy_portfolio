"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { X } from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface LightboxProps {
  src: string;
  alt: string;
  /** The thumbnail rendering; becomes the click trigger. */
  children: React.ReactNode;
}

/* Click a thumbnail to view the image large in a modal overlay. Not truly
   "download-proof" (the file is public and can be screenshotted or pulled from
   the network tab) — it just removes the obvious download affordances. */
export default function Lightbox({ src, alt, children }: LightboxProps) {
  const prefersReducedMotion = useReducedMotion();
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isAnimatingIn, setIsAnimatingIn] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);

  const close = useCallback(() => setIsOpen(false), []);

  // Mount, then flip to visible on the next frame so the fade-in runs from a
  // fresh node (mirrors mobile-menu.tsx). Reduced motion skips the fade.
  useEffect(() => {
    if (isOpen) {
      // Mount + reveal are the intended enter sequence; setState here is the
      // hydration-safe pattern (mirrors mobile-menu.tsx).
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsMounted(true);
      if (prefersReducedMotion) {
        setIsAnimatingIn(true);
        return;
      }
      requestAnimationFrame(() =>
        requestAnimationFrame(() => setIsAnimatingIn(true)),
      );
    } else if (isMounted) {
      setIsAnimatingIn(false);
      if (prefersReducedMotion) setIsMounted(false);
    }
  }, [isOpen, isMounted, prefersReducedMotion]);

  // While open AND mounted (the dialog node exists): lock body scroll, close on
  // Escape, trap Tab focus, move focus into the dialog and restore it to the
  // trigger on close. Gating on isMounted ensures the effect re-runs once the
  // dialog is actually in the DOM, so the focus move lands.
  useEffect(() => {
    if (!isOpen || !isMounted) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const getFocusable = () =>
      Array.from(
        dialogRef.current?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ) ?? [],
      );

    getFocusable()[0]?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        close();
        return;
      }
      if (e.key !== "Tab") return;
      const items = getFocusable();
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus();
    };
  }, [isOpen, isMounted, close]);

  const handleTransitionEnd = useCallback(() => {
    if (!isOpen && !isAnimatingIn) setIsMounted(false);
  }, [isOpen, isAnimatingIn]);

  const preventContext = useCallback(
    (e: React.MouseEvent) => e.preventDefault(),
    [],
  );

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label={`View larger: ${alt}`}
        aria-haspopup="dialog"
        className="absolute inset-0 block cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset"
      >
        {children}
      </button>

      {/* Portal to <body>: the trigger sits inside the curtain-reveal wrapper,
          whose clip-path establishes a containing block that would trap and
          clip a `position: fixed` overlay. Rendering into body escapes it. */}
      {isMounted &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-label={alt}
            onClick={close}
            onContextMenu={preventContext}
            onTransitionEnd={handleTransitionEnd}
            className={`fixed inset-0 z-60 flex items-center justify-center bg-foreground/80 p-4 sm:p-8 ${
              prefersReducedMotion
                ? ""
                : "transition-opacity duration-300 ease-smooth"
            } ${isAnimatingIn ? "opacity-100" : "opacity-0"}`}
          >
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full text-background/80 hover:text-background focus:outline-none focus-visible:ring-2 focus-visible:ring-background"
          >
            <X className="h-6 w-6" aria-hidden="true" />
          </button>

          {/* Stop backdrop click from closing when clicking the image itself. */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-[92vw] h-[88vh] select-none"
          >
            <Image
              src={src}
              alt={alt}
              fill
              draggable={false}
              onContextMenu={preventContext}
              sizes="92vw"
              className="object-contain pointer-events-none"
            />
          </div>
        </div>,
          document.body,
        )}
    </>
  );
}
