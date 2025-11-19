"use client";

import Link from "next/link";
import { X } from "lucide-react";
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
      <span>
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

  const isActive = (href: string) => {
    return pathname === href || pathname.startsWith(href + "/");
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay backdrop */}
      <div
        className="fixed inset-0 bg-black/30 z-40 animate-in fade-in duration-300"
        onClick={onClose}
        aria-label="Close menu"
      />

      {/* Mobile menu content */}
      <div className="fixed inset-0 bg-primary z-50 flex flex-col items-center justify-center animate-in fade-in duration-300 md:hidden">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-background hover:opacity-70 transition-opacity"
          aria-label="Close menu"
        >
          <X size={32} />
        </button>

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
