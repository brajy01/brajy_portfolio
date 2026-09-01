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
    <section className="section-y section-x">
      <div className="section-container">
        <AnimateOnScroll>
          <SectionHeading
            title="All Projects"
            subtitle="A selection of recent work"
            rightText={`_${new Date().getFullYear()}`}
            className="mb-4 md:mb-8 pb-4 md:pb-8"
          />
        </AnimateOnScroll>

        {/* Projects Grid — same rhythm as the home list */}
        <div className="space-y-8 md:space-y-12 pt-4 md:pt-8">
          {projects.map((project, index) => (
            <AnimateOnScroll key={project.id} delay={index * 100}>
              {/* h2: the cards sit directly under the page h1 here */}
              <ProjectCard project={project} headingLevel="h2" />
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
