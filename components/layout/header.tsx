"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useHideOnScroll } from "@/hooks/useHideOnScroll";
import DesktopNav from "./desktop-nav";
import HeaderLogo from "./header-logo";
import MobileMenu from "./mobile-menu";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isVisible: isHeaderVisible, isAtTop } = useHideOnScroll();

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 bg-primary flex items-center justify-between section-x py-4 z-50 transition-transform duration-300",
          isHeaderVisible ? "translate-y-0" : "-translate-y-full",
        )}
      >
        <Link
          href="/"
          onClick={() => setIsMenuOpen(false)}
          aria-label="Brajy — home"
          className="flex items-center h-14 z-[60] rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
        >
          <HeaderLogo collapsed={!isAtTop} />
        </Link>

        {/* Desktop navigation */}
        <DesktopNav />

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="relative md:hidden flex items-center justify-center size-12 text-background hover:text-background/70 z-[60] rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          <span className="flex flex-col items-center justify-center gap-[6px]">
            <span
              className={cn(
                "block h-[2.5px] w-7 rounded-full bg-current transition-all duration-300 ease-in-out origin-center",
                isMenuOpen && "translate-y-[8.5px] rotate-45",
              )}
            />
            <span
              className={cn(
                "block h-[2.5px] w-7 rounded-full bg-current transition-all duration-300 ease-in-out origin-center",
                isMenuOpen ? "opacity-0 scale-x-0" : "opacity-100 scale-x-100",
              )}
            />
            <span
              className={cn(
                "block h-[2.5px] w-7 rounded-full bg-current transition-all duration-300 ease-in-out origin-center",
                isMenuOpen && "-translate-y-[8.5px] -rotate-45",
              )}
            />
          </span>
        </button>
      </header>

      {/* Mobile menu */}
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
