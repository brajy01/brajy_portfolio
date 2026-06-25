"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { usePathname } from "next/navigation";
import NavLink from "./nav-link";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);
  const [isAnimatingIn, setIsAnimatingIn] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const isActive = (href: string) => {
    return pathname === href || pathname.startsWith(href + "/");
  };

  useEffect(() => {
    if (isOpen) {
      // Mount first so the enter animation runs from a fresh node; the double
      // rAF below flips to the visible state on the next frame. Intentional.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsMounted(true);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsAnimatingIn(true);
        });
      });
    } else if (isMounted) {
      setIsAnimatingIn(false);
    }
  }, [isOpen, isMounted]);

  // While open: lock body scroll, close on Escape, trap Tab focus inside the
  // menu, move focus in on open and restore it to the trigger on close.
  useEffect(() => {
    if (!isOpen) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const getFocusable = () =>
      Array.from(
        menuRef.current?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ) ?? [],
      );

    getFocusable()[0]?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
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
  }, [isOpen, onClose]);

  const handleTransitionEnd = useCallback(() => {
    if (!isOpen && !isAnimatingIn) {
      setIsMounted(false);
    }
  }, [isOpen, isAnimatingIn]);

  if (!isMounted) return null;

  return (
    <>
      {/* Overlay backdrop */}
      <div
        className={`fixed inset-0 bg-foreground/30 z-30 transition-opacity duration-300 ${
          isAnimatingIn ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
        onTransitionEnd={handleTransitionEnd}
        aria-hidden="true"
      />

      {/* Mobile menu content */}
      <div
        ref={menuRef}
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        className={`fixed inset-0 bg-primary z-40 flex flex-col items-center justify-center md:hidden transition-opacity duration-300 ${
          isAnimatingIn ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Navigation links */}
        <nav className="flex flex-col space-y-8 text-center">
          {[
            { href: "/about", label: "About" },
            { href: "/projects", label: "Projects" },
            { href: "/contact", label: "Contact" },
          ].map((link) => (
            <NavLink
              key={link.href}
              href={link.href}
              label={link.label}
              isActive={isActive(link.href)}
              onClose={onClose}
              className="relative inline-block text-4xl font-title text-background"
            />
          ))}
        </nav>
      </div>
    </>
  );
}
