import Link from "next/link";
import { Share2, Briefcase, Code2, Mail } from "lucide-react";

const socialLinks = [
  {
    name: "instagram",
    href: "https://instagram.com/username",
    label: "Visit Instagram profile",
    icon: Share2,
  },
  {
    name: "linkedin",
    href: "https://linkedin.com/in/username",
    label: "Visit LinkedIn profile",
    icon: Briefcase,
  },
  {
    name: "github",
    href: "https://github.com/username",
    label: "Visit GitHub profile",
    icon: Code2,
  },
  {
    name: "contact",
    href: "mailto:contact@brajy.com",
    label: "Send an email",
    icon: Mail,
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-background text-foreground py-12 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12"
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <h2
            id="footer-title"
            className="font-title text-2xl sm:text-3xl md:text-4xl text-foreground mb-3"
          >
            Get in touch_
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12 md:mb-16">
          {/* Social Links */}
          <nav aria-labelledby="footer-title">
            <ul className="space-y-2">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      aria-label={link.label}
                      className="font-caption text-sm md:text-base text-foreground hover:opacity-70 transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary rounded px-1 flex items-center gap-2"
                    >
                      <Icon className="h-4 w-4" />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Contact Info */}
          <div role="contentinfo" className="space-y-2">
            <p className="font-title text-sm md:text-base text-foreground">
              Jeremy Brajon
            </p>
            <p className="font-caption text-xs md:text-sm text-foreground/70">
              Full-stack developer
            </p>
            <Link
              href="mailto:contact@brajy.com"
              className="font-caption text-sm md:text-base underline hover:opacity-70 transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary rounded px-1 block text-foreground"
            >
              contact@brajy.com
            </Link>
          </div>

          {/* Copyright */}
          <div className="space-y-2">
            <p className="font-caption text-xs md:text-sm text-foreground/70">
              © {currentYear} Jeremy Brajon
            </p>
            <p className="font-caption text-xs md:text-sm text-foreground/70">
              all rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
