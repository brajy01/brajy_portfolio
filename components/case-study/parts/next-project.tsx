import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import AnimateOnScroll from "@/components/ui/animate-on-scroll";
import { projects, type Project } from "@/data/projects";

/* Way out of a case study: the next project in the catalogue, so the read
   never dead-ends into the footer. Circular over the projects array; renders
   nothing when there is no other project to point to. */
export default function NextProject({ project }: { project: Project }) {
  const index = projects.findIndex((p) => p.slug === project.slug);
  if (index === -1 || projects.length < 2) return null;
  const next = projects[(index + 1) % projects.length];

  return (
    // Beige on purpose: the block cuts away from the white body so the exit
    // reads as its own moment. Kicker in secondary-foreground, like every
    // caption on the beige band (orange fails contrast there).
    <section
      className="bg-secondary section-x section-y"
      role="region"
      aria-labelledby="next-project-heading"
    >
      <div className="section-container">
        <AnimateOnScroll>
          <p
            id="next-project-heading"
            className="font-caption text-xs sm:text-sm text-secondary-foreground mb-3 sm:mb-4"
          >
            _next project
          </p>
          <h2 className="font-title text-2xl sm:text-3xl md:text-4xl leading-tight">
            <Link
              href={`/projects/${next.slug}`}
              className="animated-underline inline-flex items-center gap-2 text-secondary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-sm"
            >
              {next.title}
              <ArrowUpRight
                aria-hidden="true"
                className="arrow-lift size-6 sm:size-7 md:size-8 text-primary shrink-0"
              />
            </Link>
          </h2>
          <p className="font-text text-sm sm:text-base leading-relaxed text-secondary-foreground/70 mt-2 sm:mt-3 max-w-2xl text-pretty">
            {next.description}
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
