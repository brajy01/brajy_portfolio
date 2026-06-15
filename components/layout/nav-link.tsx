"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  href: string;
  label: string;
  isActive: boolean;
  onClose?: () => void;
  /** Extra classes on the link (e.g. mobile sizing). */
  className?: string;
}

export default function NavLink({
  href,
  label,
  isActive,
  onClose,
  className,
}: NavLinkProps) {
  return (
    <Link href={href} onClick={onClose} className={cn("group", className)}>
      <span className="relative inline-block">
        {label}
        <span
          className={cn(
            "absolute bottom-0 left-0 right-0 h-0.5 bg-background transition-transform duration-300 origin-center",
            isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
          )}
        />
      </span>
    </Link>
  );
}
