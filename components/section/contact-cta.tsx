import Link from "next/link";
import AnimateOnScroll from "@/components/ui/animate-on-scroll";

/* Pre-footer call-to-action band: static orange mesh (CSS only) so the page
   closes on the same visual note it opened with. */
export default function ContactCta() {
  return (
    <section
      className="relative overflow-hidden bg-primary"
      role="region"
      aria-labelledby="contact-cta-title"
    >
      <div className="absolute inset-0 mesh-orange" aria-hidden="true">
        <div className="absolute inset-0 mesh-grain" />
      </div>
      <div className="relative z-10 section-x py-16 md:py-24">
        <div className="section-container flex flex-col md:flex-row md:items-end md:justify-between gap-6 sm:gap-8">
          <AnimateOnScroll>
            <h2
              id="contact-cta-title"
              className="font-title text-2xl sm:text-3xl md:text-4xl text-primary-foreground text-balance"
            >
              Have a project or a role in mind
              <span aria-hidden="true">_</span>
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={100}>
            <Link
              href="/contact"
              className="animated-underline font-caption text-sm sm:text-base md:text-lg text-primary-foreground inline-flex items-center gap-1.5 whitespace-nowrap"
            >
              <span aria-hidden="true" className="opacity-60 arrow-lift">
                &raquo;
              </span>
              get in touch
            </Link>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
