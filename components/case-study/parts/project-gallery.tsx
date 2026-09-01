import AnimateOnScroll from "@/components/ui/animate-on-scroll";
import ProjectImage from "@/components/ui/project-image";
import type { Project } from "@/data/projects";

/* Stacked full-bleed gallery. Renders nothing when a project has no images,
   which is the current state of both case studies. */
export default function ProjectGallery({ project }: { project: Project }) {
  if (project.projectImages.length === 0) return null;

  return (
    <section
      className="space-y-0"
      role="region"
      aria-labelledby="gallery-heading"
    >
      <h2 id="gallery-heading" className="sr-only">
        Project Gallery
      </h2>
      {project.projectImages.map((image, index) => (
        <figure key={index} className="relative w-full">
          <AnimateOnScroll
            variant="curtain"
            className="relative w-full h-64 sm:h-80 md:h-[500px] lg:h-[600px]"
          >
            <ProjectImage
              src={image}
              overlayMesh={project.projectOverlayMeshes?.[index]}
              alt={`${project.projectName} - Gallery image ${index + 1}`}
              loading={index === 0 ? "eager" : "lazy"}
              sizes="100vw"
            />
          </AnimateOnScroll>
          <figcaption className="sr-only">
            Gallery image {index + 1} of {project.projectImages.length}
          </figcaption>
        </figure>
      ))}
    </section>
  );
}
