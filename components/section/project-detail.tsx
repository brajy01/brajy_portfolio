"use client";

import Image from "next/image";
import { projects } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import AnimateOnScroll from "@/components/ui/animate-on-scroll";

interface ProjectDetailProps {
  slug: string;
}

export default function ProjectDetail({ slug }: ProjectDetailProps) {
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <section className="py-12 sm:py-16 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="max-w-7xl mx-auto w-full">
          <h1 className="font-title text-2xl sm:text-3xl md:text-4xl text-foreground">
            Project not found
          </h1>
          <p className="font-text text-base sm:text-lg mt-4 text-foreground">
            Sorry, the project you&apos;re looking for doesn&apos;t exist.
          </p>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Hero Section - Title and Description */}
      <section
        className="min-h-auto sm:min-h-[calc(100vh-88px)] flex flex-col items-start sm:items-start justify-start sm:justify-center px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-12 sm:py-16 md:py-20"
        role="region"
        aria-labelledby="project-title"
      >
        <div className="max-w-[1400px] mx-auto w-full">
          {/* Title - Full width */}
          <h1
            id="project-title"
            className="page-enter opacity-0 [animation-fill-mode:forwards] font-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight w-full"
          >
            {project.projectName}
          </h1>

          {/* Role - tight under title */}
          <p className="page-enter opacity-0 [animation-fill-mode:forwards] [animation-delay:120ms] font-caption text-xs sm:text-sm md:text-2xl text-primary mt-1">
            {project.role}
          </p>

          {/* Content: description left, scroll hint right */}
          <div className="page-enter opacity-0 [animation-fill-mode:forwards] [animation-delay:120ms] flex flex-col md:flex-row md:justify-between gap-6 sm:gap-8 mt-6 sm:mt-8 md:mt-10">
            <div className="md:max-w-[65%]">
              <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8 md:mb-10">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="font-caption text-xs px-2 sm:px-3 py-1 border border-primary text-primary rounded-full transition-colors duration-200 hover:bg-primary hover:text-primary-foreground cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <p className="font-text text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-foreground text-justify">
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
                  className="shrink-0 animate-[bounce_2s_ease-in-out_infinite]"
                  style={{ animationDuration: "1s" }}
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
        <div className="relative w-full h-64 sm:h-80 md:h-[500px] lg:h-[600px]">
          <Image
            src={project.heroImage}
            alt={`${project.projectName} - Main project image`}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
      </section>

      {/* Detail Content with Project Details */}
      <section
        className="py-12 sm:py-16 md:py-24 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20"
        role="region"
        aria-labelledby="project-details-heading"
      >
        <div className="max-w-[1400px] mx-auto w-full">
          {/* Content left, metadata right */}
          <div className="flex flex-col md:flex-row md:justify-between gap-6 sm:gap-8">
            {/* Content - Left side */}
            <div className="md:max-w-[65%] order-2 md:order-1">
              {/* Overview Section */}
              <AnimateOnScroll>
                <div className="mb-8 sm:mb-10 md:mb-12">
                  <h3 className="font-title text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4 text-foreground">
                    Overview
                  </h3>
                  <p className="font-text text-sm sm:text-base md:text-lg leading-relaxed text-foreground text-justify">
                    {project.overview}
                  </p>
                </div>
              </AnimateOnScroll>

              {/* Problem & Approach Section */}
              <AnimateOnScroll>
                <div className="mb-8 sm:mb-10 md:mb-12">
                  <h3 className="font-title text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4 text-foreground">
                    Problem & Approach
                  </h3>
                  <ul className="space-y-2 sm:space-y-3">
                    {project.problemApproach.map((item, index) => (
                      <li
                        key={index}
                        className="font-text text-sm sm:text-base md:text-lg leading-relaxed text-foreground flex gap-3 text-justify"
                      >
                        <span className="text-primary shrink-0">&bull;</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimateOnScroll>

              {/* Impact Section */}
              <AnimateOnScroll>
                <div className="mb-8 sm:mb-10 md:mb-12">
                  <h3 className="font-title text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4 text-foreground">
                    Impact
                  </h3>
                  <ul className="space-y-2 sm:space-y-3">
                    {project.impact.map((item, index) => (
                      <li
                        key={index}
                        className="font-text text-sm sm:text-base md:text-lg leading-relaxed text-foreground flex gap-3 text-justify"
                      >
                        <span className="text-primary shrink-0">&bull;</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimateOnScroll>

              {/* Lessons Learned Section */}
              <AnimateOnScroll>
                <div className="mb-8 sm:mb-10 md:mb-12">
                  <h3 className="font-title text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4 text-foreground">
                    Lessons Learned
                  </h3>
                  <p className="font-text text-sm sm:text-base md:text-lg leading-relaxed text-foreground text-justify">
                    {project.lessonsLearned}
                  </p>
                </div>
              </AnimateOnScroll>

              {/* GitHub Section */}
              {project.projectDetails.githubUrl && (
                <AnimateOnScroll>
                  <div>
                    <p className="font-caption text-xs sm:text-sm text-primary mb-1">
                      _github
                    </p>
                    <Link
                      href={project.projectDetails.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-caption text-sm sm:text-base animated-underline transition-colors inline-flex items-center gap-1"
                    >
                      See project&apos;s repository
                      <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4" />
                    </Link>
                  </div>
                </AnimateOnScroll>
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
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* Project Images Gallery */}
      {project.projectImages.length > 0 && (
        <section
          className="space-y-0"
          role="region"
          aria-labelledby="gallery-heading"
          aria-label="Project image gallery"
        >
          <h2 id="gallery-heading" className="sr-only">
            Project Gallery
          </h2>
          {project.projectImages.map((image, index) => (
            <figure key={index} className="relative w-full">
              <div className="relative w-full h-64 sm:h-80 md:h-[500px] lg:h-[600px]">
                <Image
                  src={image}
                  alt={`${project.projectName} - Gallery image ${index + 1}`}
                  fill
                  className="object-cover"
                  loading={index === 0 ? "eager" : "lazy"}
                  sizes="100vw"
                />
              </div>
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
