import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <header className="bg-primary flex flex-col items-center p-4 md:flex-row md:justify-between md:items-center">
        <Link href="/">
          <Image
            src="/logomark/white.svg"
            alt="logomark white"
            width={70}
            height={70}
          />
        </Link>

        <nav className="mt-4 flex space-x-6 font-text text-background md:mt-0">
          <Link href="/about" className="hover:underline">
            About
          </Link>
          <Link href="/project" className="hover:underline">
            Projects
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
        </nav>
      </header>
    </>
  );
}
