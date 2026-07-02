import Image from "next/image";
import { cn } from "@/lib/utils";
import AnimateOnScroll from "@/components/ui/animate-on-scroll";
import BrowserFrame from "@/components/ui/browser-frame";
import type { ShowcaseItem } from "@/data/projects";

interface ProjectShowcaseProps {
  items: ShowcaseItem[];
  projectName: string;
}

/* Project walkthrough: alternating rows of sticky text + browser-framed
   screenshot. Rows without an image render as text alone — a screenshot is
   only shown when it genuinely helps explain the step. */
export default function ProjectShowcase({
  items,
  projectName,
}: ProjectShowcaseProps) {
  return (
    <section
      className="py-12 sm:py-16 md:py-24 section-x"
      role="region"
      aria-labelledby="showcase-heading"
    >
      <div className="section-container">
        <h2 id="showcase-heading" className="sr-only">
          {projectName} walkthrough
        </h2>
        <div className="space-y-16 md:space-y-24">
          {items.map((item, index) => {
            const number = `_${String(index + 1).padStart(2, "0")}`;
            // Alternate sides based on image-bearing rows only, so a
            // text-only step does not leave two screenshots on the same side.
            const imageOrdinal = items
              .slice(0, index)
              .filter((i) => i.image).length;
            const reversed = imageOrdinal % 2 === 1;

            const textBlock = (
              <AnimateOnScroll>
                <p className="font-caption text-xs sm:text-sm text-primary mb-2">
                  {number} <span aria-hidden="true">&raquo;</span> {item.label}
                </p>
                <h3 className="font-title text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4 text-foreground">
                  {item.title}
                </h3>
                <p className="font-text text-sm sm:text-base md:text-lg leading-relaxed text-foreground text-pretty">
                  {item.body}
                </p>
              </AnimateOnScroll>
            );

            if (!item.image) {
              return (
                <div key={item.title} className="max-w-2xl">
                  {textBlock}
                </div>
              );
            }

            return (
              <div
                key={item.title}
                className={cn(
                  "flex flex-col gap-6 sm:gap-8 md:flex-row md:justify-between md:gap-10",
                  reversed && "md:flex-row-reverse",
                )}
              >
                <div className="md:w-[300px] lg:w-[360px] shrink-0 md:sticky md:top-24 md:self-start">
                  {textBlock}
                </div>
                <AnimateOnScroll variant="curtain" className="flex-1 min-w-0">
                  <figure>
                    <BrowserFrame url={item.url}>
                      <Image
                        src={item.image}
                        alt={item.imageAlt ?? `${projectName} - ${item.title}`}
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 768px) 100vw, min(70vw, 1000px)"
                      />
                    </BrowserFrame>
                    <figcaption className="sr-only">{item.title}</figcaption>
                  </figure>
                </AnimateOnScroll>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
