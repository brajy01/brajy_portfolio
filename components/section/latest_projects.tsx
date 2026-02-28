import { projects } from "@/data/projects";
import AnimateOnScroll from "@/components/ui/animate-on-scroll";
import ProjectCard from "@/components/ui/project-card";
import Typewriter from "@/components/ui/typewriter";

export default function LatestProjects() {
  // Get the 3 latest projects (last 3 from the array)
  const latestProjects = projects.slice(-3);

  return (
    <section className="py-20 md:py-28 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
      <div className="max-w-[1400px] mx-auto">
        <AnimateOnScroll>
          <div className="flex justify-between items-end mb-8 pb-8 border-b border-border text-primary">
            <h2 className="font-title text-4xl md:text-5xl">Latest Projects_</h2>
            <Typewriter
              text={`_${new Date().getFullYear()}`}
              speed={60}
              delay={300}
              as="p"
              className="font-caption text-xs md:text-sm"
              showCursorAfter={false}
            />
          </div>
        </AnimateOnScroll>

        {/* Projects Grid */}
        <div className="space-y-12 md:space-y-16 pt-8">
          {latestProjects.map((project, index) => (
            <AnimateOnScroll key={project.id} delay={index * 100}>
              <ProjectCard project={project} />
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
