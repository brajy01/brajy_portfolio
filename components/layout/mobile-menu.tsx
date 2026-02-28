"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileNavLink = ({
  href,
  label,
  isActive,
  onClose,
}: {
  href: string;
  label: string;
  isActive: boolean;
  onClose: () => void;
}) => {
  return (
    <Link
      href={href}
      onClick={onClose}
      className="group relative inline-block text-4xl font-title text-background"
    >
      <span className="relative inline-block">
        {label}
        <span
          className={`absolute bottom-0 left-0 right-0 h-0.5 bg-background transition-transform duration-300 origin-center ${
            isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
          }`}
        />
      </span>
    </Link>
  );
};

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
          <MobileNavLink
            href="/about"
            label="About"
            isActive={isActive("/about")}
            onClose={onClose}
          />
          <MobileNavLink
            href="/projects"
            label="Projects"
            isActive={isActive("/projects")}
            onClose={onClose}
          />
          <MobileNavLink
            href="/contact"
            label="Contact"
            isActive={isActive("/contact")}
            onClose={onClose}
          />
        </nav>
      </div>
    </>
  );
}
