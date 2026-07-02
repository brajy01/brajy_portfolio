import Link from "next/link";
import AnimateOnScroll from "@/components/ui/animate-on-scroll";

// The three intro lines that used to live in the hero: relocated here so the
// hero can lead with the headline while nothing is lost.
const paragraphs = [
  "+4 years running operations showed me where processes break, and where better decisions start",
  "So I learned to build the tools to fix what I used to solve by hand",
  "Across four languages, from years working internationally",
];

export default function ProfileStrip() {
  return (
    <section
      className="py-16 md:py-24 section-x"
      role="region"
      aria-label="Profile"
    >
      <div className="section-container">
        <AnimateOnScroll stagger={100} className="max-w-4xl space-y-4 sm:space-y-5">
          {paragraphs.map((text) => (
            <p
              key={text}
              className="font-text text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-foreground flex items-start gap-2 text-pretty"
            >
              <span
                className="font-caption text-primary shrink-0 leading-relaxed"
                aria-hidden="true"
              >
                &raquo;
              </span>
              {text}
            </p>
          ))}
        </AnimateOnScroll>
        <AnimateOnScroll delay={200}>
          <div className="flex justify-end mt-8 sm:mt-10">
            <Link
              href="/about"
              className="animated-underline-orange font-caption text-sm sm:text-base inline-flex items-center gap-1.5 text-foreground"
            >
              <span aria-hidden="true" className="text-primary arrow-lift">
                &raquo;
              </span>
              learn more about my path
            </Link>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
