import type { Project } from "@/data/projects";

/* Case-study hero: title, role, tech pills, lead paragraph, and the desktop
   scroll hint. Shared unchanged by all three variants. */
export default function CaseStudyHero({ project }: { project: Project }) {
  return (
    <section
      className="min-h-auto sm:min-h-[calc(100dvh-var(--header-height))] flex flex-col items-start sm:items-start justify-start sm:justify-center section-x py-12 sm:py-16 md:py-20"
      role="region"
      aria-labelledby="project-title"
    >
      <div className="section-container">
        {/* Title - Full width */}
        <h1
          id="project-title"
          className="page-enter opacity-0 [animation-fill-mode:forwards] font-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight w-full"
        >
          {project.projectName}
        </h1>

        {/* Role - tight under title, capped at 18px (C5) */}
        <p className="page-enter opacity-0 [animation-fill-mode:forwards] [animation-delay:120ms] font-caption text-sm md:text-lg text-primary mt-1">
          {project.role}
        </p>

        {/* Content: description left, scroll hint right */}
        <div className="page-enter opacity-0 [animation-fill-mode:forwards] [animation-delay:120ms] flex flex-col md:flex-row md:justify-between gap-6 sm:gap-8 mt-6 sm:mt-8 md:mt-10">
          <div className="reading-col">
            <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8 md:mb-10">
              {project.technologies.map((tech, index) => (
                <span key={index} className="tag-pill">
                  {tech}
                </span>
              ))}
            </div>
            <p className="font-text text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-foreground text-pretty">
              {project.heroDescription}
            </p>
          </div>
          <div className="hidden md:flex flex-col justify-end items-end shrink-0 gap-2">
            <p className="font-caption text-xs sm:text-sm md:text-base text-right text-primary flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="shrink-0 scroll-hint"
                aria-hidden="true"
              >
                <path d="m6 7 6 6 6-6" />
                <path d="m6 13 6 6 6-6" />
              </svg>
              scroll to see details
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
