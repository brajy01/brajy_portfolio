import Link from "next/link";

const socialLinks = [
  { name: "instagram", href: "https://instagram.com/username" },
  { name: "linkedin", href: "https://linkedin.com/in/username" },
  { name: "dribbble", href: "https://dribbble.com/username" },
  { name: "contact", href: "mailto:brajy@gmail.com" },
];

export default function Footer() {
  return (
    <footer className="bg-white text-foreground py-16 px-8">
      <h2 className="font-title text-2xl text-black mb-12">Get in touch_</h2>

      <div className="grid grid-cols-3 gap-12">
        {/* Left Column */}
        <div>
          <ul className="space-y-3">
            {socialLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="font-caption text-sm underline hover:opacity-60 transition-opacity flex items-center gap-2"
                >
                  <span>↳</span>
                  <span>{link.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Center Column */}
        <div className="font-caption text-sm space-y-2">
          <p>Jeremy Brajon</p>
          <p>Full-stack developer</p>
          <p>brajy@gmail.com</p>
        </div>

        {/* Right Column */}
        <div className="font-caption text-sm space-y-2 text-right">
          <p className="underline">all rights reserved</p>
          <p className="underline">2025 ©</p>
          <p className="underline">Jeremy Brajon</p>
        </div>
      </div>
    </footer>
  );
}
