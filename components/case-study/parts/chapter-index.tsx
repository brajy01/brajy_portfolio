"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import type { Chapter } from "@/data/projects";

/* Sticky chapter index with scroll-spy. The chapter whose heading sits highest
   in the reading zone is marked current. Anchors work without JavaScript; the
   highlight is the only thing that needs it. */
export default function ChapterIndex({ chapters }: { chapters: Chapter[] }) {
  const [activeId, setActiveId] = useState<string>("");

  // Depend on the id list rather than the array identity, so a sliced
  // chapters array does not re-run the effect on every render.
  const idsKey = chapters.map((chapter) => chapter.id).join("|");

  useEffect(() => {
    const elements = idsKey
      .split("|")
      .filter(Boolean)
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length === 0) return;
        const topmost = visible.reduce((a, b) =>
          a.boundingClientRect.top <= b.boundingClientRect.top ? a : b,
        );
        setActiveId(topmost.target.id);
      },
      // Top offset mirrors --header-height (globals.css) to clear the sticky
      // header; the bottom cut keeps the current chapter from flipping to the
      // next one too early.
      { rootMargin: "-88px 0px -55% 0px", threshold: 0 },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [idsKey]);

  if (chapters.length === 0) return null;

  return (
    <nav aria-label="Case study chapters" className="mb-8 md:text-right">
      <p className="font-caption text-xs sm:text-sm text-primary mb-2">
        _chapters
      </p>
      <ol className="space-y-1">
        {chapters.map((chapter, index) => {
          const isActive = activeId === chapter.id;
          return (
            <li key={chapter.id}>
              <a
                href={`#${chapter.id}`}
                aria-current={isActive ? "true" : undefined}
                className={cn(
                  "font-caption text-xs sm:text-sm transition-colors duration-300 ease-smooth hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
                  isActive ? "text-primary" : "text-foreground",
                )}
              >
                _{String(index + 1).padStart(2, "0")} {chapter.heading}
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
