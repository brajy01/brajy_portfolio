import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import AnimateOnScroll from "@/components/ui/animate-on-scroll";
import ProjectCard from "@/components/ui/project-card";
import SectionHeading from "@/components/ui/section-heading";

export default function LatestProjects() {
  // Show the 3 most recent projects (first 3 from the array)
  const latestProjects = projects.slice(0, 3);

  return (
    <section
      className="section-y section-x"
      role="region"
      aria-labelledby="latest-projects-title"
    >
      <div className="section-container">
        <AnimateOnScroll>
          <SectionHeading
            title="Latest Projects"
            rightText={`_${new Date().getFullYear()}`}
            headingId="latest-projects-title"
            className="mb-0 pb-4 md:pb-6"
          />
        </AnimateOnScroll>

        {/* Projects Grid */}
        <div className="space-y-8 md:space-y-12 pt-4 md:pt-8">
          {latestProjects.map((project, index) => (
            <AnimateOnScroll key={project.id} delay={index * 100}>
              <ProjectCard project={project} />
            </AnimateOnScroll>
          ))}
        </div>

        {/* Way into the full catalogue, so the section doesn't end at the
            footer. */}
        <AnimateOnScroll>
          <div className="pt-8 md:pt-12">
            <Link
              href="/projects"
              className="animated-underline-orange font-caption text-sm sm:text-base inline-flex items-center gap-1.5 text-foreground"
            >
              all projects
              <ArrowUpRight
                aria-hidden="true"
                className="arrow-lift size-4 text-primary shrink-0"
              />
            </Link>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
