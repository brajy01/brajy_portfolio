"use client";

import Link from "next/link";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section
      className="min-h-[60dvh] flex items-center section-x py-12 sm:py-16"
      role="region"
      aria-labelledby="error-title"
    >
      <div className="section-container">
        <p className="font-caption text-sm sm:text-base text-primary">
          _error: something broke
        </p>
        <h1
          id="error-title"
          className="font-title text-3xl sm:text-4xl md:text-5xl leading-tight text-foreground mt-2"
        >
          Something went wrong
          <span aria-hidden="true">_</span>
        </h1>
        <p className="font-text text-base sm:text-lg leading-relaxed text-foreground mt-4 max-w-2xl text-pretty">
          An unexpected error occurred. You can try again, or head back home.
        </p>
        <div className="flex flex-wrap gap-x-8 gap-y-3 mt-8">
          <button
            type="button"
            onClick={reset}
            className="animated-underline font-caption text-sm sm:text-base text-foreground inline-flex items-center gap-1.5 cursor-pointer"
          >
            <span aria-hidden="true" className="text-primary arrow-lift">
              &raquo;
            </span>
            try again
          </button>
          <Link
            href="/"
            className="animated-underline font-caption text-sm sm:text-base text-foreground inline-flex items-center gap-1.5"
          >
            <span aria-hidden="true" className="text-primary arrow-lift">
              &raquo;
            </span>
            back home
          </Link>
        </div>
      </div>
    </section>
  );
}
