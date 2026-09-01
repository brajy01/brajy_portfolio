import Image from "next/image";
import { cn } from "@/lib/utils";
import AnimateOnScroll from "@/components/ui/animate-on-scroll";
import BrowserFrame from "@/components/ui/browser-frame";
import Lightbox from "@/components/ui/lightbox";
import type { ShowcaseItem } from "@/data/projects";

interface WalkthroughBandProps {
  items: ShowcaseItem[];
  projectName: string;
  /** Unique per band: a page can carry several of them. */
  id: string;
  /** The interleaved variant drops the counter, since chapters already number. */
  numbered?: boolean;
  /** Keeps numbering continuous when a walkthrough is split across bands. */
  startNumber?: number;
  /** Keeps the left/right zig-zag continuous across bands. */
  alternateFrom?: number;
}

/* Project walkthrough: alternating rows of sticky text + browser-framed
   screenshot on the beige band. Rows without an image render as text alone: a
   screenshot is only shown when it genuinely helps explain the step. */
export default function WalkthroughBand({
  items,
  projectName,
  id,
  numbered = true,
  startNumber = 1,
  alternateFrom = 0,
}: WalkthroughBandProps) {
  return (
    <section
      className="bg-secondary section-y section-x"
      role="region"
      aria-labelledby={id}
    >
      <div className="section-container">
        <h2 id={id} className="sr-only">
          {projectName} walkthrough
        </h2>
        <div className="space-y-16 md:space-y-24">
          {items.map((item, index) => {
            const number = `_${String(startNumber + index).padStart(2, "0")}`;
            // Alternate sides based on image-bearing rows only, so a
            // text-only step does not leave two screenshots on the same side.
            const imageOrdinal =
              alternateFrom +
              items.slice(0, index).filter((i) => i.image).length;
            const reversed = imageOrdinal % 2 === 1;

            const kickerAndTitle = (
              <>
                {/* Kicker in secondary-foreground: brand orange on beige fails
                    contrast. */}
                <p className="font-caption text-xs sm:text-sm text-secondary-foreground mb-2">
                  {numbered && `${number} `}
                  <span aria-hidden="true">&raquo;</span> {item.label}
                </p>
                <h3 className="font-title text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4 text-secondary-foreground">
                  {item.title}
                </h3>
              </>
            );

            const body = (
              <p className="font-text text-sm sm:text-base md:text-lg leading-relaxed text-secondary-foreground text-pretty">
                {item.body}
              </p>
            );

            if (!item.image) {
              // Text-only step: same two-column geometry as the image rows
              // (title in the text column, body where the screenshot would
              // sit), so the step stays in the band's grid instead of
              // floating alone in the beige.
              return (
                <div
                  key={item.title}
                  className="flex flex-col md:flex-row md:justify-between gap-4 sm:gap-6 md:gap-10"
                >
                  <div className="md:w-[300px] lg:w-[360px] shrink-0">
                    <AnimateOnScroll>{kickerAndTitle}</AnimateOnScroll>
                  </div>
                  <div className="flex-1 min-w-0 md:max-w-2xl">
                    <AnimateOnScroll>{body}</AnimateOnScroll>
                  </div>
                </div>
              );
            }

            const textBlock = (
              <AnimateOnScroll>
                {kickerAndTitle}
                {body}
              </AnimateOnScroll>
            );

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
                      <Lightbox
                        src={item.image}
                        alt={item.imageAlt ?? `${projectName} - ${item.title}`}
                      >
                        <Image
                          src={item.image}
                          alt=""
                          fill
                          className="object-cover object-top"
                          sizes="(max-width: 768px) 100vw, min(70vw, 1000px)"
                        />
                      </Lightbox>
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
