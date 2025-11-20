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
        <div className="mb-12 md:mb-16">
          {/* Mobile: Side by side Connect & Quick Links, Desktop: 3 columns */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 mb-8">
            {/* Social Links */}
            <nav
              aria-labelledby="footer-title"
              className="text-center md:text-left"
            >
              <h3 className="font-title text-primary text-sm md:text-base text-foreground mb-4">
                Connect
              </h3>
              <ul className="space-y-2 inline-block text-left">
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

            {/* Quick Links */}
            <nav
              aria-label="Footer navigation"
              className="text-center md:text-left"
            >
              <h3 className="font-title text-primary text-sm md:text-base text-foreground mb-4">
                Quick links
              </h3>
              <ul className="space-y-2 inline-block text-left">
                <li>
                  <Link
                    href="/"
                    className="font-caption text-sm md:text-base text-foreground hover:opacity-70 transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary rounded px-1 inline-block"
                  >
                    home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="font-caption text-sm md:text-base text-foreground hover:opacity-70 transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary rounded px-1 inline-block"
                  >
                    about
                  </Link>
                </li>
                <li>
                  <Link
                    href="/projects"
                    className="font-caption text-sm md:text-base text-foreground hover:opacity-70 transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary rounded px-1 inline-block"
                  >
                    projects
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="font-caption text-sm md:text-base text-foreground hover:opacity-70 transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary rounded px-1 inline-block"
                  >
                    contact
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Contact Info - Hidden on mobile, shown in 3rd column on desktop */}
            <div role="contentinfo" className="hidden md:block space-y-2">
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
          </div>

          {/* Contact Info & CTA - Centered on mobile, hidden on desktop */}
          <div className="md:hidden text-center space-y-4">
            <div className="space-y-2">
              <p className="font-title text-sm text-foreground">
                Jeremy Brajon
              </p>
              <p className="font-caption text-xs text-foreground/70">
                Full-stack developer
              </p>
              <Link
                href="mailto:contact@brajy.com"
                className="font-caption text-sm underline hover:opacity-70 transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary rounded px-1 inline-block text-foreground"
              >
                contact@brajy.com
              </Link>
            </div>

            {/* CTA */}
            <div className="pt-2">
              <Link
                href="/contact"
                className="font-caption text-sm border border-primary text-primary px-4 py-2 rounded hover:bg-primary hover:text-white transition-colors inline-block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              >
                Let&apos;s work together
              </Link>
            </div>
          </div>

          {/* CTA - Desktop only (in 3rd column position) */}
          <div className="hidden md:block md:absolute md:top-[180px] md:right-0">
            <Link
              href="/contact"
              className="font-caption text-sm md:text-base border border-primary text-primary px-4 py-2 rounded hover:bg-primary hover:text-white transition-colors inline-block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Let&apos;s work together
            </Link>
          </div>
        </div>

        {/* Separator */}
        <div className="border-t border-gray-200 pt-8">
          {/* Legal Links - Centered */}
          <div className="text-center mb-4">
            <nav
              aria-label="Legal links"
              className="flex flex-wrap justify-center gap-4 md:gap-6"
            >
              <Link
                href="/privacy"
                className="font-caption text-xs md:text-sm text-foreground/70 hover:text-foreground transition-colors underline"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="font-caption text-xs md:text-sm text-foreground/70 hover:text-foreground transition-colors underline"
              >
                Terms of Service
              </Link>
              <Link
                href="/cookies"
                className="font-caption text-xs md:text-sm text-foreground/70 hover:text-foreground transition-colors underline"
              >
                Cookie Policy
              </Link>
            </nav>
          </div>

          {/* Copyright - Centered */}
          <div className="text-center space-y-1">
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
