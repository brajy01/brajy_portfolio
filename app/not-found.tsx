import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import HeroBackground from "@/components/ui/hero-background";

export const metadata: Metadata = {
  title: "404",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <section
      className="relative overflow-hidden min-h-[calc(100dvh-var(--header-height))] flex items-center section-x py-12 sm:py-16 bg-primary"
      role="region"
      aria-labelledby="notfound-title"
    >
      <HeroBackground />
      <Image
        src="/logomark/beige.svg"
        alt=""
        aria-hidden="true"
        width={280}
        height={280}
        className="hidden md:block absolute right-[8%] top-1/2 -translate-y-1/2 w-[clamp(180px,22vw,300px)] h-auto opacity-90 pointer-events-none select-none z-0"
      />
      <div className="relative z-10 section-container">
        <p className="font-caption text-sm sm:text-base text-primary-foreground/80">
          _error: route not found
        </p>
        <h1
          id="notfound-title"
          className="font-title text-[clamp(4rem,14vw,11rem)] leading-[0.95] tracking-tight text-primary-foreground mt-2"
        >
          404
          <span aria-hidden="true" className="blink-cursor">
            _
          </span>
        </h1>
        <p className="font-text text-base sm:text-lg md:text-xl leading-relaxed text-primary-foreground mt-6 max-w-2xl text-pretty">
          The page you are looking for does not exist, or it moved somewhere
          else.
        </p>
        <div className="flex flex-wrap gap-x-8 gap-y-3 mt-8 sm:mt-10">
          <Link
            href="/"
            className="animated-underline font-caption text-sm sm:text-base text-primary-foreground inline-flex items-center gap-1.5"
          >
            <span aria-hidden="true" className="opacity-60 arrow-lift">
              &raquo;
            </span>
            back home
          </Link>
          <Link
            href="/projects"
            className="animated-underline font-caption text-sm sm:text-base text-primary-foreground inline-flex items-center gap-1.5"
          >
            <span aria-hidden="true" className="opacity-60 arrow-lift">
              &raquo;
            </span>
            see projects
          </Link>
        </div>
      </div>
    </section>
  );
}
