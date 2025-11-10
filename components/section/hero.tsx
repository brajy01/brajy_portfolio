import Link from "next/link";

export default function Hero() {
  return (
    <div className="bg-secondary">
      <h1 className="text-4xl font-title">Welcome_</h1>
      <p className="text-3xl font-title">
        I am Brajy, a passionate web developer crafting modern, user-friendly
        websites. I turn ideas into seamless digital experiences with clean code
        and innovative design.
      </p>
      <Link href="/about" className="font-caption hover:underline">
        _learn more about me
      </Link>
    </div>
  );
}
