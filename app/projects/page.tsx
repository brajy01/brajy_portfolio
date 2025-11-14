import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section className="py-16 px-6 md:px-8 lg:px-12">
      <div className="flex justify-between items-end mb-8 pb-8 border-b border-gray-200 text-primary">
        <h1 className="font-title text-4xl md:text-5xl">All Projects_</h1>
        <p className="font-caption text-xs md:text-sm">
          _{new Date().getFullYear()}
        </p>
      </div>

      {/* Projects Grid */}
      <div className="space-y-24 pt-8">
        {projects.map((project) => (
          <article
            key={project.id}
            className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-8 items-start pb-12 border-b border-gray-200"
          >
            {/* Image - Left side */}
            <div className="md:col-span-4 relative w-full h-64 sm:h-80 md:h-[500px] lg:h-[600px]">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Right side content */}
            <div className="flex flex-col justify-between h-full">
              {/* Top labels - Right aligned */}
              <div className="text-left md:text-right space-y-1 text-foreground font-caption">
                <p>_project of the month</p>
                <p>
                  _{project.month} {project.year}
                </p>
                <p>_{project.category.toLowerCase()}</p>
              </div>

              {/* Bottom tags - Right aligned */}
              <div className="text-right space-y-1">
                {project.tags.map((tag) => (
                  <p key={tag} className="font-caption text-primary">
                    {tag}
                  </p>
                ))}
              </div>
            </div>

            {/* Project Title - Full width below image */}
            <div className="md:col-span-2 mt-2 md:mt-3">
              <Link
                href={`/projects/${project.slug}`}
                className="font-text text-lg md:text-xl underline hover:opacity-75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 rounded px-1 transition-opacity inline-block"
                aria-label={project.title}
              >
                {project.title}
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
