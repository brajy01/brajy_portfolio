import AnimateOnScroll from "@/components/ui/animate-on-scroll";
import type { Project } from "@/data/projects";

/* Headline figures as mono tiles, directly under the hero.

   Renders nothing when a project has no measured figures. That is deliberate:
   an empty tile, or a number invented to fill the row, would be worse than no
   block at all. */
export default function AtAGlance({ project }: { project: Project }) {
  const metrics = project.metrics ?? [];
  if (metrics.length === 0) return null;

  return (
    <section
      className="section-x pb-12 sm:pb-16 md:pb-20"
      role="region"
      aria-labelledby="glance-heading"
    >
      <div className="section-container">
        <AnimateOnScroll>
          {/* A real heading, so aria-labelledby points at something that also
              exists in the document outline. */}
          <h2
            id="glance-heading"
            className="font-caption font-normal text-xs sm:text-sm text-primary mb-3 sm:mb-4"
          >
            _at a glance
          </h2>
          <dl className="flex flex-wrap gap-3 sm:gap-4">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="flex-1 min-w-[7.5rem] border border-border rounded-sm p-4 sm:p-5"
              >
                <dt className="sr-only">{metric.label.replace(/^_/, "")}</dt>
                <dd>
                  <span className="block font-title text-2xl sm:text-3xl md:text-4xl leading-tight text-foreground">
                    {metric.value}
                  </span>
                  <span
                    aria-hidden="true"
                    className="block font-caption text-xs text-primary mt-1"
                  >
                    {metric.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
