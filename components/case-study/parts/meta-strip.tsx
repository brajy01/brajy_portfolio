import AnimateOnScroll from "@/components/ui/animate-on-scroll";
import type { Project } from "@/data/projects";

/* The project facts as one horizontal band under the hero, for the layout
   that has no sidebar. Wraps to a two-column block on small screens. */
export default function MetaStrip({ project }: { project: Project }) {
  const { client, industry, work, date } = project.projectDetails;

  const facts = [
    { label: "_client", value: client },
    { label: "_industry", value: industry },
    { label: "_work", value: work.join(", ") },
    { label: "_date", value: date },
  ];

  return (
    <section className="section-x" role="region" aria-label="Project details">
      <div className="section-container">
        <AnimateOnScroll>
          <dl className="flex flex-wrap gap-x-8 gap-y-4 sm:gap-x-12 border-t border-b border-border py-4 sm:py-5">
            {facts.map((fact) => (
              <div key={fact.label} className="min-w-[8rem] flex-1">
                <dt className="font-caption text-xs sm:text-sm text-primary mb-1">
                  {fact.label}
                </dt>
                <dd className="font-caption text-sm sm:text-base text-foreground text-pretty">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
