"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useHideOnScroll } from "@/hooks/useHideOnScroll";
import MobileMenu from "./mobile-menu";

const NavLink = ({
  href,
  label,
  isActive,
}: {
  href: string;
  label: string;
  isActive: boolean;
}) => {
  return (
    <Link href={href} className="group">
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

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHeaderVisible = useHideOnScroll();

  const isActive = (href: string) => {
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 bg-primary flex items-center justify-between px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-4 z-50 transition-transform duration-300 ${
          isHeaderVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <Link href="/" onClick={() => setIsMenuOpen(false)} className="z-[60]">
          <Image
            src="/logomark/white.svg"
            alt="Brajy"
            width={56}
            height={56}
          />
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-6 font-title text-background">
          <NavLink href="/about" label="About" isActive={isActive("/about")} />
          <NavLink
            href="/projects"
            label="Projects"
            isActive={isActive("/projects")}
          />
          <NavLink
            href="/contact"
            label="Contact"
            isActive={isActive("/contact")}
          />
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="relative md:hidden flex items-center justify-center size-12 text-background hover:text-background/70 z-[60]"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          <span className="flex flex-col items-center justify-center gap-[6px]">
            <span
              className={`block h-[2.5px] w-7 rounded-full bg-current transition-all duration-300 ease-in-out origin-center ${
                isMenuOpen
                  ? "translate-y-[8.5px] rotate-45"
                  : ""
              }`}
            />
            <span
              className={`block h-[2.5px] w-7 rounded-full bg-current transition-all duration-300 ease-in-out origin-center ${
                isMenuOpen ? "opacity-0 scale-x-0" : "opacity-100 scale-x-100"
              }`}
            />
            <span
              className={`block h-[2.5px] w-7 rounded-full bg-current transition-all duration-300 ease-in-out origin-center ${
                isMenuOpen
                  ? "-translate-y-[8.5px] -rotate-45"
                  : ""
              }`}
            />
          </span>
        </button>
      </header>

      {/* Mobile menu */}
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
