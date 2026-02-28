import type { Metadata } from "next";
import { projects } from "@/data/projects";
import AnimateOnScroll from "@/components/ui/animate-on-scroll";
import ProjectCard from "@/components/ui/project-card";
import Typewriter from "@/components/ui/typewriter";

export const metadata: Metadata = {
  title: "Projects",
};

export default function Projects() {
  return (
    <section className="py-20 md:py-28 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
      <div className="max-w-[1400px] mx-auto">
        <AnimateOnScroll>
          <h1 className="font-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight text-foreground">
            All Projects_
          </h1>
          <div className="flex justify-between items-end mt-1 mb-4 md:mb-8 pb-4 md:pb-8 border-b border-border">
            <p className="font-caption text-xs sm:text-sm md:text-2xl text-primary">
              A selection of recent work
            </p>
            <Typewriter
              text={`_${new Date().getFullYear()}`}
              speed={60}
              delay={300}
              as="p"
              className="font-caption text-xs md:text-sm text-primary"
              showCursorAfter={false}
            />
          </div>
        </AnimateOnScroll>

        {/* Projects Grid */}
        <div className="space-y-6 md:space-y-16 pt-4 md:pt-8">
          {projects.map((project, index) => (
            <AnimateOnScroll key={project.id} delay={index * 100}>
              <ProjectCard project={project} />
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
