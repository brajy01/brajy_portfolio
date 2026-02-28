import Link from "next/link";
import type { Project } from "@/data/projects";
import ProjectImage from "@/components/ui/project-image";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  // Sort captions: black labels longest→shortest, orange tags shortest→longest
  const labels = [
    `_${project.role.toLowerCase()}`,
    `_${project.month} ${project.year}`,
    `_${project.category.toLowerCase()}`,
  ].sort((a, b) => b.length - a.length);

  const sortedTags = [...project.tags].sort((a, b) => a.length - b.length);

  return (
    <Link
      href={`/projects/${project.slug}`}
      aria-label={project.title}
      className="group/card relative grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-8 items-start border border-border hover:border-foreground/30 rounded-[12px] p-4 md:p-5 transition-colors duration-500 cursor-pointer"
    >
      {/* Project Title - Mobile only, shown at top */}
      <div className="md:hidden">
        <span className="font-text text-lg underline underline-offset-4 decoration-1 inline-block">
          {project.title}
        </span>
      </div>

      {/* Image - Left side */}
      {/* Nested border-radius rule: inner = outer - padding → 12px - 16px ≈ clamp to ~4px for visual harmony */}
      <div className="md:col-span-4 relative w-full h-64 sm:h-80 md:h-[500px] lg:h-[600px] overflow-hidden rounded-[4px]">
        <div className="relative w-full h-full transition-transform duration-500 ease-out group-hover/card:scale-105">
          <ProjectImage
            src={project.image}
            overlayImage={project.overlayImage}
            alt={project.title}
            sizes="(max-width: 768px) 100vw, 80vw"
          />
        </div>
        <div className="absolute inset-0 bg-foreground/0 group-hover/card:bg-foreground/10 transition-colors duration-500 pointer-events-none" />
      </div>

      {/* Right side content */}
      <div className="flex flex-col justify-between h-full">
        {/* Top labels - Right aligned, sorted longest→shortest */}
        <div className="text-left md:text-right space-y-1 text-foreground font-caption transition-transform duration-500 group-hover/card:md:-translate-x-1">
          {labels.map((label) => (
            <p key={label}>{label}</p>
          ))}
        </div>

        {/* Bottom tags - Right aligned, sorted shortest→longest */}
        <div className="text-right space-y-1 transition-transform duration-500 group-hover/card:md:-translate-x-1">
          {sortedTags.map((tag) => (
            <p key={tag} className="font-caption text-primary">
              {tag}
            </p>
          ))}
        </div>
      </div>

      {/* Project Title - Desktop only, shown below image */}
      <div className="hidden md:block md:col-span-2 mt-2 md:mt-3">
        <span className="font-text text-lg md:text-xl animated-underline inline-block transition-transform duration-500 group-hover/card:translate-x-1">
          {project.title}
        </span>
      </div>
    </Link>
  );
}
