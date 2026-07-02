import type { Metadata } from "next";
import { projects } from "@/data/projects";
import AnimateOnScroll from "@/components/ui/animate-on-scroll";
import ProjectCard from "@/components/ui/project-card";
import SectionHeading from "@/components/ui/section-heading";

const DESCRIPTION =
  "Selected work by Jeremy Brajon: data tools and web projects where operations meets data and code.";

export const metadata: Metadata = {
  title: "Projects",
  description: DESCRIPTION,
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Projects | Brajy",
    description: DESCRIPTION,
    url: "/projects",
  },
};

export default function Projects() {
  return (
    <section className="py-20 md:py-28 section-x">
      <div className="section-container">
        <AnimateOnScroll>
          <SectionHeading
            title="All Projects"
            subtitle="A selection of recent work"
            rightText={`_${new Date().getFullYear()}`}
            className="mb-4 md:mb-8 pb-4 md:pb-8"
          />
        </AnimateOnScroll>

        {/* Projects Grid */}
        <div className="space-y-6 md:space-y-16 pt-4 md:pt-8">
          {projects.map((project, index) => (
            <AnimateOnScroll key={project.id} delay={index * 100}>
              <ProjectCard project={project} index={index} />
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
