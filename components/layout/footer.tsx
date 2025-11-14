import Link from "next/link";
import { CornerDownRight } from "lucide-react";

const socialLinks = [
  {
    name: "instagram",
    href: "https://instagram.com/username",
    label: "Visit Instagram profile",
  },
  {
    name: "linkedin",
    href: "https://linkedin.com/in/username",
    label: "Visit LinkedIn profile",
  },
  {
    name: "dribbble",
    href: "https://dribbble.com/username",
    label: "Visit Dribbble portfolio",
  },
  {
    name: "contact",
    href: "mailto:contact@brajy.com",
    label: "Send an email",
  },
];

export default function Footer() {
  return (
    <footer className="bg-background text-foreground py-8 md:py-16 px-6 md:px-8 lg:px-12 mt-12">
      <h2
        id="footer-title"
        className="font-title text-2xl md:text-3xl text-foreground mb-8 md:mb-12"
      >
        Get in touch_
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        {/* Left Column - Social Links */}
        <nav aria-labelledby="footer-title">
          <ul className="space-y-3">
            {socialLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="font-caption text-sm md:text-base underline hover:opacity-75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 rounded px-1 transition-opacity flex items-center gap-2"
                  aria-label={link.label}
                >
                  <span aria-hidden="true">
                    <CornerDownRight height={15} width={15} />
                  </span>
                  <span>{link.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Center Column - Contact Info */}
        <div
          className="font-caption text-sm md:text-base space-y-2"
          role="contentinfo"
        >
          <p>Jeremy Brajon</p>
          <p>Full-stack developer</p>
          <p>
            <Link
              href="mailto:contact@brajy.com"
              className="underline hover:opacity-75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 rounded px-1 transition-opacity"
            >
              contact@brajy.com
            </Link>
          </p>
        </div>

        {/* Right Column - Copyright */}
        <div className="font-caption text-sm md:text-base space-y-2 md:text-right">
          <p className="underline">all rights reserved</p>
          <p className="underline">2025 ©</p>
          <p className="underline">Jeremy Brajon</p>
        </div>
      </div>
    </footer>
  );
}
