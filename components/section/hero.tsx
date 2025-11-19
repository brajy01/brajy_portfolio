import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="min-h-auto sm:min-h-[calc(100vh-80px)] flex items-start sm:items-center px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20 bg-primary"
      role="region"
      aria-labelledby="hero-title"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 sm:gap-6 md:gap-8">
          <div className="md:col-span-4">
            <h1
              id="hero-title"
              className="font-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-2 sm:mb-3 md:mb-4 leading-tight text-primary-foreground"
            >
              Welcome_
            </h1>
            <p className="font-caption text-xs sm:text-sm md:text-base text-primary-foreground/80 mb-6 sm:mb-8 md:mb-10">
              _business operations → data analytics
            </p>
            <p className="font-text text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-primary-foreground mb-6 sm:mb-8">
              I transform operational data into actionable business insights. With 4+ years managing €2M operations and 50+ person teams, I discovered that data systems solve what processes alone cannot.
            </p>
            <p className="font-text text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-primary-foreground">
              Now combining deep business acumen with Python, SQL, and analytics to drive smarter decisions. Multilingual (FR/EN/PT/ES) with international experience bridging EU and emerging markets.
            </p>
          </div>
          <div className="hidden md:block md:col-span-1" />
          <div className="md:col-span-1 flex flex-col justify-end mt-6 md:mt-0">
            <div className="space-y-3 md:text-right mb-6 md:mb-8">
              <p className="font-caption text-xs sm:text-sm text-primary-foreground/80">
                _featured project
              </p>
              <p className="font-caption text-sm sm:text-base text-primary-foreground font-semibold">
                Agricultural Analytics
              </p>
              <p className="font-caption text-xs sm:text-sm text-primary-foreground/80">
                _python, sql, data analysis
              </p>
            </div>
            <Link
              href="/about"
              className="font-caption text-xs sm:text-sm md:text-base underline hover:opacity-75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-foreground rounded px-1 transition-opacity md:text-right block text-primary-foreground"
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

