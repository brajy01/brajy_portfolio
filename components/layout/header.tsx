"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
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
        className={`fixed top-0 left-0 right-0 bg-primary flex items-center justify-between p-4 z-50 transition-transform duration-300 ${
          isHeaderVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <Link href="/">
          <Image
            src="/logomark/white.svg"
            alt="logomark white"
            width={70}
            height={70}
          />
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex space-x-6 font-title text-background">
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
          onClick={() => setIsMenuOpen(true)}
          className="md:hidden p-2 text-background hover:opacity-70 transition-opacity"
          aria-label="Open menu"
          aria-expanded={isMenuOpen}
        >
          <Menu size={32} />
        </button>
      </header>

      {/* Mobile menu */}
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
