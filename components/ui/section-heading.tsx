import { cn } from "@/lib/utils";
import Typewriter from "@/components/ui/typewriter";

interface SectionHeadingProps {
  title: string;
  /** Typewriter text on the divider's right (include the leading underscore). */
  rightText: string;
  /** When set, renders the page-hero shape: large h1 above a subtitle row. */
  subtitle?: string;
  headingId?: string;
  /** Overrides the divider row's spacing (margins/padding). */
  className?: string;
  /** Extends/overrides the sub-section h2 defaults (size + foreground colour
      below); pass e.g. `text-primary` to recolour without losing the scale. */
  headingClassName?: string;
}

export default function SectionHeading({
  title,
  rightText,
  subtitle,
  headingId,
  className,
  headingClassName,
}: SectionHeadingProps) {
  const typewriter = (
    <Typewriter
      text={rightText}
      speed={60}
      delay={300}
      as="p"
      className="font-caption text-xs md:text-sm text-primary"
      showCursorAfter={false}
    />
  );

  // Page-hero shape: large h1 above the divider, subtitle on the divider's left.
  if (subtitle) {
    return (
      <>
        <h1
          id={headingId}
          className="font-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight text-foreground text-balance"
        >
          {title}
          <span aria-hidden="true">_</span>
        </h1>
        <div
          className={cn(
            "flex justify-between items-end mt-1 mb-8 pb-8 border-b border-border",
            className,
          )}
        >
          <p className="font-caption text-xs sm:text-sm md:text-2xl text-primary">
            {subtitle}
          </p>
          {typewriter}
        </div>
      </>
    );
  }

  // Sub-section shape: h2 inline on the divider's left.
  return (
    <div
      className={cn(
        "flex justify-between items-end pb-8 border-b border-border text-primary",
        className,
      )}
    >
      <h2
        id={headingId}
        className={cn(
          "font-title text-4xl md:text-5xl text-foreground",
          headingClassName,
        )}
      >
        {title}
        <span aria-hidden="true">_</span>
      </h2>
      {typewriter}
    </div>
  );
}
