"use client";

import type { ReactNode } from "react";
import { projects } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import AnimateOnScroll from "@/components/ui/animate-on-scroll";
import BulletList from "@/components/ui/bullet-list";
import ProjectImage from "@/components/ui/project-image";
import ProjectShowcase from "@/components/section/project-showcase";
import { cn } from "@/lib/utils";

interface ProjectDetailProps {
  slug: string;
}

function DetailSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <AnimateOnScroll>
      <div className="mb-8 sm:mb-10 md:mb-12">
        <h3 className="font-title text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4 text-foreground">
          {title}
        </h3>
        {children}
      </div>
    </AnimateOnScroll>
  );
}

function BodyText({ children }: { children: ReactNode }) {
  return (
    <p className="font-text text-sm sm:text-base md:text-lg leading-relaxed text-foreground text-pretty">
      {children}
    </p>
  );
}

function ExternalLinkBlock({
  label,
  href,
  text,
  className,
}: {
  label: string;
  href: string;
  text: string;
  className?: string;
}) {
  return (
    <AnimateOnScroll>
      <div className={className}>
        <p className="font-caption text-xs sm:text-sm text-primary mb-1">
          {label}
        </p>
        <Link
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="font-caption text-sm sm:text-base animated-underline transition-colors inline-flex items-center gap-1"
        >
          {text}
          <ArrowUpRight
            aria-hidden="true"
            className="arrow-lift w-3 h-3 sm:w-4 sm:h-4"
          />
        </Link>
      </div>
    </AnimateOnScroll>
  );
}

export default function ProjectDetail({ slug }: ProjectDetailProps) {
  const project = projects.find((p) => p.slug === slug);

  // Unknown slugs 404 at the route level (app/projects/[slug]/page.tsx).
  if (!project) return null;

  const showcase = project.showcase ?? [];
  const hasShowcase = showcase.length > 0;
  const story = project.story ?? [];
  const hasStory = story.length > 0;

  return (
    <>
      {/* Hero Section - Title and Description */}
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
            <div className="md:max-w-[65%]">
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

      {/* Project Image - Full width */}
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

      {/* Detail Content with Project Details */}
      <section
        className="py-12 sm:py-16 md:py-24 section-x"
        role="region"
        aria-label="Project details"
      >
        <div className="section-container">
          {/* Content left, metadata right */}
          <div className="flex flex-col md:flex-row md:justify-between gap-6 sm:gap-8">
            {/* Content - Left side */}
            <div className="md:max-w-[65%] order-2 md:order-1">
              {/* Long-form case study: the story sections replace the
                  standard Challenge/Approach/Deliverables/Impact template. */}
              {hasStory ? (
                story.map((section) => (
                  <div
                    key={section.id}
                    id={section.id}
                    className="scroll-mt-24"
                  >
                    <DetailSection title={section.heading}>
                      <div className="space-y-4">
                        {section.blocks.map((block, blockIdx) => (
                          <BodyText key={blockIdx}>
                            {block.lead && (
                              <>
                                <strong className="font-semibold">
                                  {block.lead}
                                </strong>{" "}
                              </>
                            )}
                            {block.text}
                          </BodyText>
                        ))}
                      </div>
                    </DetailSection>
                  </div>
                ))
              ) : (
                <>
                  <DetailSection title="The Challenge">
                    <div className="space-y-4">
                      <BodyText>{project.overview}</BodyText>
                      <BodyText>{project.problem}</BodyText>
                    </div>
                  </DetailSection>

                  {/* When a project has a visual walkthrough (below), the
                      showcase carries the "how" — skip the Approach/
                      Deliverables bullets so the same story isn't told twice. */}
                  {!hasShowcase && (
                    <>
                      <DetailSection title="The Approach">
                        <BulletList items={project.approach} />
                      </DetailSection>

                      <DetailSection title="Deliverables">
                        <BulletList items={project.deliverables} />
                      </DetailSection>
                    </>
                  )}

                  <DetailSection title="The Impact">
                    <BulletList items={project.impact} />
                  </DetailSection>

                  <DetailSection title="Lessons Learned">
                    <BodyText>{project.lessonsLearned}</BodyText>
                  </DetailSection>
                </>
              )}

              {/* GitHub Section */}
              {project.projectDetails.githubUrl && (
                <ExternalLinkBlock
                  label="_github"
                  href={project.projectDetails.githubUrl}
                  text="See project's repository"
                />
              )}

              {/* Live Site Section */}
              {project.projectDetails.liveUrl && (
                <ExternalLinkBlock
                  label="_live site"
                  href={project.projectDetails.liveUrl}
                  text="Visit the website"
                  className="mt-4"
                />
              )}
            </div>

            {/* Project Details - Right side (sticky on desktop) */}
            <div className="md:w-[280px] lg:w-[320px] shrink-0 mb-8 md:mt-0 order-1 md:order-2 md:sticky md:top-24 md:self-start">
              <AnimateOnScroll>
                <div className="grid grid-cols-2 gap-4 md:flex md:flex-col md:space-y-6 md:gap-0 sm:gap-6">
                  {/* Client */}
                  <div className="md:text-right">
                    <p className="font-caption text-xs sm:text-sm text-primary mb-1">
                      _client
                    </p>
                    <p className="font-caption text-sm sm:text-base text-foreground">
                      {project.projectDetails.client}
                    </p>
                  </div>

                  {/* Industry */}
                  <div className="md:text-right">
                    <p className="font-caption text-xs sm:text-sm text-primary mb-1">
                      _industry
                    </p>
                    <p className="font-caption text-sm sm:text-base text-foreground">
                      {project.projectDetails.industry}
                    </p>
                  </div>

                  {/* Work */}
                  <div className="md:text-right">
                    <p className="font-caption text-xs sm:text-sm text-primary mb-2">
                      _work
                    </p>
                    <div className="space-y-1">
                      {project.projectDetails.work.map((work) => (
                        <p
                          key={work}
                          className="font-caption text-sm sm:text-base text-foreground"
                        >
                          {work}
                        </p>
                      ))}
                    </div>
                  </div>

                  {/* Date */}
                  <div className="md:text-right">
                    <p className="font-caption text-xs sm:text-sm text-primary mb-1">
                      _date
                    </p>
                    <p className="font-caption text-sm sm:text-base text-foreground">
                      {project.projectDetails.date}
                    </p>
                  </div>

                  {/* Status */}
                  {project.projectDetails.status && (
                    <div className="md:text-right">
                      <p className="font-caption text-xs sm:text-sm text-primary mb-1">
                        _status
                      </p>
                      <p className="font-caption text-sm sm:text-base text-foreground">
                        {project.projectDetails.status}
                      </p>
                    </div>
                  )}

                  {/* Contents nav for long-form case studies. Key sections
                      (the ones a skimming reader should hit) are orange. */}
                  {hasStory && (
                    <nav
                      aria-label="Case study contents"
                      className="col-span-2 md:col-span-1 md:text-right"
                    >
                      <p className="font-caption text-xs sm:text-sm text-primary mb-2">
                        _contents
                      </p>
                      <ul className="space-y-1">
                        {story.map((section) => (
                          <li key={section.id}>
                            <a
                              href={`#${section.id}`}
                              className={cn(
                                "font-caption text-xs sm:text-sm animated-underline-orange",
                                section.key
                                  ? "text-primary"
                                  : "text-foreground",
                              )}
                            >
                              {section.heading.toLowerCase()}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </nav>
                  )}
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* Walkthrough: sticky text + framed screenshots, alternating sides.
          Sits on the beige band and stands in for Approach/Deliverables. */}
      {hasShowcase && (
        <ProjectShowcase items={showcase} projectName={project.projectName} />
      )}

      {/* Project Images Gallery */}
      {project.projectImages.length > 0 && (
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
      )}
    </>
  );
}
