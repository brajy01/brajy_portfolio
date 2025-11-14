"use client";

import Image from "next/image";
import { projects } from "@/data/projects";
import { useParams } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function ProjectDetail() {
  const params = useParams();
  const slug = params.slug as string;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto w-full">
          <h1 className="font-title text-2xl sm:text-3xl md:text-4xl text-foreground">
            Project not found
          </h1>
          <p className="font-text text-base sm:text-lg mt-4 text-gray-600">
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
        className="min-h-auto sm:min-h-[calc(100vh-80px)] flex items-start sm:items-center px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20"
        role="region"
        aria-labelledby="project-title"
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 sm:gap-6 md:gap-8">
            <div className="md:col-span-4">
              <h1
                id="project-title"
                className="font-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-2 sm:mb-3 md:mb-4 leading-tight"
              >
                {project.projectName}
              </h1>
              <p className="font-caption text-xs sm:text-sm md:text-base text-primary mb-3 sm:mb-4 md:mb-5">
                {project.role}
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8 md:mb-10">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="font-caption text-xs px-2 sm:px-3 py-1 border border-primary text-primary rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <p className="font-text text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-foreground">
                {project.heroDescription}
              </p>
            </div>
            <div className="flex flex-col justify-end mt-6 sm:mt-0">
              <p
                className="font-caption text-xs sm:text-sm md:text-base text-right text-primary"
                aria-hidden="true"
              >
                » scroll to see more
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
        className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-8 lg:px-12"
        role="region"
        aria-labelledby="project-details-heading"
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4 sm:gap-6 md:gap-8">
            {/* Content - Left side (3.5 cols) */}
            <div className="md:col-span-4 order-2 md:order-1">
              {/* Overview Section */}
              <div className="mb-8 sm:mb-10 md:mb-12">
                <h3 className="font-title text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4 text-foreground">
                  Overview
                </h3>
                <p className="font-text text-sm sm:text-base md:text-lg leading-relaxed text-gray-700">
                  {project.overview}
                </p>
              </div>

              {/* Problem & Approach Section */}
              <div className="mb-8 sm:mb-10 md:mb-12">
                <h3 className="font-title text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4 text-foreground">
                  Problem & Approach
                </h3>
                <ul className="space-y-2 sm:space-y-3">
                  {project.problemApproach.map((item, index) => (
                    <li
                      key={index}
                      className="font-text text-sm sm:text-base md:text-lg leading-relaxed text-gray-700 flex gap-3"
                    >
                      <span className="text-primary flex-shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Impact Section */}
              <div className="mb-8 sm:mb-10 md:mb-12">
                <h3 className="font-title text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4 text-foreground">
                  Impact
                </h3>
                <ul className="space-y-2 sm:space-y-3">
                  {project.impact.map((item, index) => (
                    <li
                      key={index}
                      className="font-text text-sm sm:text-base md:text-lg leading-relaxed text-gray-700 flex gap-3"
                    >
                      <span className="text-primary flex-shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Lessons Learned Section */}
              <div>
                <h3 className="font-title text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4 text-foreground">
                  Lessons Learned
                </h3>
                <p className="font-text text-sm sm:text-base md:text-lg leading-relaxed text-gray-700">
                  {project.lessonsLearned}
                </p>
              </div>
            </div>

            {/* Project Details - Right side (2 cols) */}
            <div className="md:col-span-2 mb-8 md:mt-0 md:pl-4 order-1 md:order-2">
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

                {/* Date */}
                <div className="md:text-right md:order-3">
                  <p className="font-caption text-xs sm:text-sm text-primary mb-1">
                    _date
                  </p>
                  <p className="font-caption text-sm sm:text-base text-foreground">
                    {project.projectDetails.date}
                  </p>
                </div>

                {/* GitHub */}
                {project.projectDetails.githubUrl && (
                  <div className="md:text-right md:order-4">
                    <p className="font-caption text-xs sm:text-sm text-primary mb-1">
                      _github
                    </p>
                    <Link
                      href={project.projectDetails.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-caption text-sm sm:text-base hover:text-foreground underline transition-colors inline-flex items-center gap-1"
                    >
                      See project
                      <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4" />
                    </Link>
                  </div>
                )}

                {/* Work */}
                <div className="md:text-right md:order-5">
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
              </div>
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
