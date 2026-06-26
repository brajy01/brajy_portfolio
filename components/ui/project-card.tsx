import Link from "next/link";
import type { Project } from "@/data/projects";
import ProjectImage from "@/components/ui/project-image";
import AnimateOnScroll from "@/components/ui/animate-on-scroll";

interface ProjectCardProps {
  project: Project;
}

// Card title: animated wrap-aware underline + hover/focus color, driven by the
// parent `group/card`. Shared by the mobile and desktop title spans.
const TITLE_CLASS =
  "font-text text-lg animated-underline-wrap inline transition-colors duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/card:text-primary group-focus-visible/card:text-primary";

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
      className="group/card relative grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-8 items-start border border-border hover:border-foreground/30 rounded-[12px] p-4 md:p-5 cursor-pointer transition-[border-color,transform,box-shadow] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-lg motion-safe:focus-visible:-translate-y-1 motion-safe:focus-visible:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
    >
      {/* Project Title - Mobile only, shown at top */}
      <div className="md:hidden">
        <span className={TITLE_CLASS}>{project.title}</span>
      </div>

      {/* Image - Left side */}
      {/* Nested border-radius rule: inner = outer - padding → 12px - 16px ≈ clamp to ~4px for visual harmony */}
      {/* Curtain reveal (A3) wipes the image in on scroll; subtle zoom on hover. */}
      <AnimateOnScroll
        variant="curtain"
        className="md:col-span-4 relative w-full h-64 sm:h-80 md:h-[440px] lg:h-[520px] overflow-hidden rounded-[8px]"
      >
        <div className="relative w-full h-full ease-[cubic-bezier(0.16,1,0.3,1)] motion-safe:transition-transform motion-safe:duration-700 motion-safe:group-hover/card:scale-[1.04] motion-safe:group-focus-visible/card:scale-[1.04]">
          <ProjectImage
            src={project.image}
            overlayImage={project.overlayImage}
            alt=""
            sizes="(max-width: 768px) 100vw, 80vw"
          />
        </div>
      </AnimateOnScroll>

      {/* Right side content */}
      <div className="flex flex-col justify-between h-full">
        {/* Top labels - Right aligned, sorted longest→shortest */}
        <div className="text-left md:text-right space-y-1 text-foreground font-caption">
          {labels.map((label) => (
            <p key={label}>{label}</p>
          ))}
        </div>

        {/* Bottom tags - Right aligned, sorted shortest→longest */}
        <div className="text-right space-y-1">
          {sortedTags.map((tag) => (
            <p key={tag} className="font-caption text-primary">
              {tag}
            </p>
          ))}
        </div>
      </div>

      {/* Project Title - Desktop only, shown below image */}
      <div className="hidden md:block md:col-span-2 mt-3 md:mt-4 self-end">
        <span className={`${TITLE_CLASS} md:text-xl`}>{project.title}</span>
      </div>
    </Link>
  );
}
