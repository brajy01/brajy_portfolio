import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="bg-secondary grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 p-6 md:p-8 lg:p-12"
      role="region"
      aria-labelledby="hero-title"
    >
      <div className="md:col-span-2">
        <h1
          id="hero-title"
          className="text-3xl md:text-4xl font-title pb-2 md:pb-4"
        >
          Welcome_
        </h1>
        <p
          className="text-lg md:text-3xl font-title leading-relaxed"
          role="doc-introduction"
        >
          I am Brajy, a passionate web developer crafting modern, user-friendly
          websites. I turn ideas into seamless digital experiences with clean
          code and innovative design.
        </p>
      </div>
      <div className="flex flex-col justify-end mt-4 md:mt-0">
        <Link
          href="/about"
          className="font-caption text-sm md:text-base underline hover:opacity-75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 rounded px-1 transition-opacity"
          aria-label="Learn more about Jeremy Brajon"
        >
          _learn more about me
        </Link>
      </div>
    </section>
  );
}
