import { projects } from "@/data/projects";
import AnimateOnScroll from "@/components/ui/animate-on-scroll";
import ProjectCard from "@/components/ui/project-card";
import SectionHeading from "@/components/ui/section-heading";

export default function LatestProjects() {
  // Show the 3 most recent projects (first 3 from the array)
  const latestProjects = projects.slice(0, 3);

  return (
    <section
      className="py-16 md:py-24 section-x"
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
            headingClassName="text-4xl md:text-5xl text-foreground"
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
      </div>
    </section>
  );
}
