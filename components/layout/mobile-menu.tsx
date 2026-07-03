"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, easings } from "@/components/ui/motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { isActivePath } from "@/lib/utils";
import NavLink from "./nav-link";
import { NAV_ITEMS } from "./nav-items";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();
  const menuRef = useRef<HTMLDivElement>(null);

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

  // Curtain wipe in, quick fade out; near-instant fades under reduced motion.
  const panelVariants = prefersReducedMotion
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.01 } },
        exit: { opacity: 0, transition: { duration: 0.01 } },
      }
    : {
        hidden: { clipPath: "inset(0 0 100% 0)" },
        visible: {
          clipPath: "inset(0 0 0% 0)",
          transition: { duration: 0.6, ease: easings.smooth },
        },
        exit: { opacity: 0, transition: { duration: 0.25 } },
      };

  const itemVariants = prefersReducedMotion
    ? { hidden: { opacity: 1 }, visible: { opacity: 1 } }
    : {
        hidden: { y: "110%" },
        visible: {
          y: "0%",
          transition: { duration: 0.5, ease: easings.smooth },
        },
      };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay backdrop */}
          <motion.div
            key="backdrop"
            className="fixed inset-0 bg-foreground/30 z-30 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Mobile menu content */}
          <motion.div
            key="panel"
            ref={menuRef}
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            className="fixed inset-0 bg-primary z-40 flex flex-col items-center justify-center md:hidden"
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Navigation links: each slides up out of an overflow mask */}
            <motion.nav
              className="flex flex-col space-y-8 text-center"
              variants={{
                visible: {
                  transition: { staggerChildren: 0.07, delayChildren: 0.2 },
                },
              }}
            >
              {NAV_ITEMS.map((link) => (
                <span key={link.href} className="block overflow-hidden">
                  <motion.span className="block" variants={itemVariants}>
                    <NavLink
                      href={link.href}
                      label={link.label}
                      isActive={isActivePath(pathname, link.href)}
                      onClose={onClose}
                      className="relative inline-block text-4xl font-title text-background"
                    />
                  </motion.span>
                </span>
              ))}
            </motion.nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
