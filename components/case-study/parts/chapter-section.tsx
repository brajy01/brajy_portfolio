import AnimateOnScroll from "@/components/ui/animate-on-scroll";
import ChapterBody from "@/components/case-study/parts/chapter-body";
import type { Chapter } from "@/data/projects";

interface ChapterSectionProps {
  chapter: Chapter;
  /** When given, the chapter is rendered against a numbered left rail. */
  number?: number;
}

/* One chapter of the case study. The id is the scroll anchor the chapter
   index links to, so it lives on the outer element in both shapes. */
export default function ChapterSection({
  chapter,
  number,
}: ChapterSectionProps) {
  // h2: chapters are the case study's top-level sections under the page h1.
  const heading = (
    <h2 className="font-title text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4 text-foreground">
      {chapter.heading}
    </h2>
  );

  if (number === undefined) {
    return (
      <div id={chapter.id} className="scroll-mt-24">
        <AnimateOnScroll>
          <div className="mb-8 sm:mb-10 md:mb-12">
            {heading}
            <ChapterBody blocks={chapter.blocks} />
          </div>
        </AnimateOnScroll>
      </div>
    );
  }

  return (
    <div id={chapter.id} className="scroll-mt-24">
      <AnimateOnScroll>
        <div className="flex flex-col md:flex-row gap-1 md:gap-8">
          <p
            aria-hidden="true"
            className="font-caption text-xl sm:text-2xl text-primary md:w-[80px] shrink-0 md:text-right"
          >
            {String(number).padStart(2, "0")}
          </p>
          <div className="max-w-3xl">
            {heading}
            <ChapterBody blocks={chapter.blocks} />
          </div>
        </div>
      </AnimateOnScroll>
    </div>
  );
}
