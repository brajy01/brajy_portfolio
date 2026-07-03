"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { isActivePath } from "@/lib/utils";
import DesktopNavLink from "./desktop-nav-link";
import { NAV_ITEMS } from "./nav-items";

/* Owns the "magnetic pill" state: the cream pill sits on the active link and
   glides to whichever link is hovered or focused, then settles back when the
   pointer leaves the nav. */
export default function DesktopNav() {
  const pathname = usePathname();
  const [hoveredHref, setHoveredHref] = useState<string | null>(null);

  const activeHref =
    NAV_ITEMS.find((item) => isActivePath(pathname, item.href))?.href ?? null;
  const pillHref = hoveredHref ?? activeHref;

  return (
    <nav
      className="hidden md:flex items-center gap-2 font-title"
      onMouseLeave={() => setHoveredHref(null)}
    >
      {NAV_ITEMS.map((item) => (
        <DesktopNavLink
          key={item.href}
          href={item.href}
          label={item.label}
          hasPill={pillHref === item.href}
          onPillTarget={() => setHoveredHref(item.href)}
          onPillRelease={() => setHoveredHref(null)}
        />
      ))}
    </nav>
  );
}
