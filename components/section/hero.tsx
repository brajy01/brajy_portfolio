import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="min-h-auto sm:min-h-[calc(100vh-80px)] flex items-start sm:items-center px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20 bg-primary"
      role="region"
      aria-labelledby="hero-title"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="max-w-4xl">
          <h1
            id="hero-title"
            className="font-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-6 sm:mb-8 md:mb-10 leading-tight text-primary-foreground"
          >
            Welcome_
          </h1>
          <p className="font-text text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-primary-foreground mb-8 sm:mb-10 md:mb-12 text-justify">
            I spent 4 years managing agricultural operations and realized that most problems aren&apos;t solved by better processes—they need better data systems. Now I&apos;m learning Python, SQL, and analytics to bridge that gap. Multilingual (FR/EN/PT/ES), based between Europe and Brazil, focused on turning operational challenges into data-driven solutions.
          </p>
          <div className="flex justify-end">
            <Link
              href="/about"
              className="font-caption text-sm sm:text-base md:text-lg underline hover:opacity-75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-foreground rounded px-1 transition-opacity text-primary-foreground inline-block"
              aria-label="Learn more about Jeremy Brajon"
            >
              » learn more about me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

