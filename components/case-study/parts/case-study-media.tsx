import AnimateOnScroll from "@/components/ui/animate-on-scroll";
import ProjectImage from "@/components/ui/project-image";
import type { Project } from "@/data/projects";

/* Full-bleed hero image, curtain-revealed. Falls back to an honest mesh
   placeholder when the project has no real screenshot yet. */
export default function CaseStudyMedia({ project }: { project: Project }) {
  return (
    <section className="relative w-full">
      <AnimateOnScroll
        variant="curtain"
        className="relative w-full h-64 sm:h-80 md:h-[500px] lg:h-[600px]"
      >
        <ProjectImage
          src={project.heroImage}
          mesh={project.heroMesh}
          meshCaption={project.heroMesh ? "_screenshots coming soon" : undefined}
          overlayMesh={project.heroOverlayMesh}
          alt={`${project.projectName} - Main project image`}
          priority
          sizes="100vw"
        />
      </AnimateOnScroll>
    </section>
  );
}
