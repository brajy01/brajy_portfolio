import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <header className="bg-primary justify-center items-center">
        <Image
          src="/logohero/white.svg"
          alt="logohero white"
          width={120}
          height={500}
        />
        <nav className="font-caption text-background">
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
