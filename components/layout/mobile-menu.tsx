"use client";

import { useState, useEffect, useCallback } from "react";
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

  const isActive = (href: string) => {
    return pathname === href || pathname.startsWith(href + "/");
  };

  useEffect(() => {
    if (isOpen) {
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
        aria-label="Close menu"
      />

      {/* Mobile menu content */}
      <div
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
