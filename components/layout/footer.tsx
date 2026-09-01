import Link from "next/link";
import {
  Briefcase,
  Code2,
  ArrowUpRight,
  MessageCircle,
  FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimateOnScroll from "@/components/ui/animate-on-scroll";
import FooterLogotype from "./footer-logotype";
import { NAV_ITEMS } from "./nav-items";

const socialLinks = [
  {
    name: "linkedin",
    href: "https://www.linkedin.com/in/jbrajon/",
    label: "Visit LinkedIn profile",
    icon: Briefcase,
  },
  {
    name: "github",
    href: "https://github.com/brajy01",
    label: "Visit GitHub profile",
    icon: Code2,
  },
  {
    name: "whatsapp",
    href: "https://wa.me/33699148863",
    label: "Message on WhatsApp",
    icon: MessageCircle,
  },
  {
    name: "cv",
    href: "/cv/jeremy-brajon-cv.pdf",
    label: "Download CV (PDF)",
    icon: FileText,
  },
];

const quickLinks = [
  { href: "/", label: "home" },
  ...NAV_ITEMS.map((item) => ({
    href: item.href,
    label: item.label.toLowerCase(),
  })),
];

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <li>
      <Link
        href={href}
        className="font-caption text-sm md:text-base text-background animated-underline-orange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary rounded inline-flex items-center gap-1.5 h-6"
      >
        <span className="text-primary">&raquo;</span>
        {label}
      </Link>
    </li>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-foreground text-background py-12 md:py-20 section-x"
      role="contentinfo"
    >
      <div className="section-container">
        <AnimateOnScroll>
          {/* Header */}
          <div className="mb-12 md:mb-16">
            <h2
              id="footer-title"
              className="font-title text-2xl sm:text-3xl md:text-4xl text-background mb-3"
            >
              Get in touch_
            </h2>
          </div>

          {/* Main Content Grid */}
          <div className="mb-12 md:mb-16">
            {/* Mobile: Side by side Connect & Quick Links, Desktop: 3 columns */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 mb-8">
              {/* Quick Links */}
              <nav
                aria-label="Footer navigation"
                className="text-center md:text-left"
              >
                <h3 className="font-title text-sm md:text-base text-secondary mb-4">
                  Quick links
                </h3>
                <ul className="space-y-2 inline-block text-left">
                  {quickLinks.map((link) => (
                    <FooterLink key={link.href} {...link} />
                  ))}
                </ul>
              </nav>

              {/* Social Links */}
              <nav
                aria-label="Social links"
                className="text-center md:text-left"
              >
                <h3 className="font-title text-sm md:text-base text-secondary mb-4">
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
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-caption text-sm md:text-base text-background animated-underline-orange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary rounded inline-flex items-center gap-2 h-6"
                        >
                          <Icon className="h-4 w-4 text-primary" />
                          <span>{link.name}</span>
                          {/* every social link opens in a new tab */}
                          <ArrowUpRight
                            aria-hidden="true"
                            className="arrow-lift h-3.5 w-3.5 text-primary"
                          />
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>

              {/* Contact info & CTA: one responsive block — full width and
                  centered under the nav columns on mobile, third column on
                  desktop. */}
              <div className="col-span-2 md:col-span-1 text-center md:text-left space-y-2">
                <FooterLogotype className="mx-auto md:mx-0 block" />
                <p className="font-caption text-xs md:text-sm text-background/50">
                  Operations &times; Data &times; Systems
                </p>
                <Link
                  href="mailto:contact@brajy.com"
                  className="font-caption text-sm md:text-base animated-underline-orange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary rounded inline-block text-background"
                >
                  contact@brajy.com
                </Link>
                <div className="pt-2 md:pt-4">
                  <Button
                    variant="outline"
                    className="border-background/30 text-background hover:bg-primary hover:border-primary hover:text-primary-foreground"
                    asChild
                  >
                    <Link href="/contact">Get in touch</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Separator */}
          <div className="border-t border-background/20 pt-8">
            {/* Copyright - Centered */}
            <div className="text-center space-y-1">
              <p className="font-caption text-xs md:text-sm text-background/50">
                &copy; {currentYear} Brajy
              </p>
              <p className="font-caption text-xs md:text-sm text-background/50">
                all rights reserved
              </p>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </footer>
  );
}
