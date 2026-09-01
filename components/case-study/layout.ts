import type { Chapter, ShowcaseItem } from "@/data/projects";

/* Placement helpers shared by the case-study variants.

   A project declares its walkthrough steps once, each pointing at the chapter
   it follows (`ShowcaseItem.after`). The variants read that single field two
   different ways: the grouped layouts collect every step into one beige band
   at the first anchor, the interleaved layout emits one band per anchor. */

/** Walkthrough steps grouped by the chapter id they follow. */
export function bandsByChapter(
  showcase: ShowcaseItem[],
): Map<string, ShowcaseItem[]> {
  const bands = new Map<string, ShowcaseItem[]>();
  for (const item of showcase) {
    if (!item.after) continue;
    const existing = bands.get(item.after);
    if (existing) existing.push(item);
    else bands.set(item.after, [item]);
  }
  return bands;
}

/** Steps with no anchor: they close the case study, after the last chapter. */
export function trailingSteps(showcase: ShowcaseItem[]): ShowcaseItem[] {
  return showcase.filter((item) => !item.after);
}

/** Split the chapters around the single grouped band, which sits at the first
    anchor. An unanchored walkthrough leaves every chapter before it. */
export function splitAtBand(
  chapters: Chapter[],
  showcase: ShowcaseItem[],
): { before: Chapter[]; after: Chapter[] } {
  const anchor = showcase.find((item) => item.after)?.after;
  const index = anchor ? chapters.findIndex((c) => c.id === anchor) : -1;
  if (index === -1) return { before: chapters, after: [] };
  return {
    before: chapters.slice(0, index + 1),
    after: chapters.slice(index + 1),
  };
}
