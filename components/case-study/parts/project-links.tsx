import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import AnimateOnScroll from "@/components/ui/animate-on-scroll";
import type { Project } from "@/data/projects";

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

/* GitHub / live-site links, which close the case study. */
export default function ProjectLinks({ project }: { project: Project }) {
  const { githubUrl, liveUrl } = project.projectDetails;
  if (!githubUrl && !liveUrl) return null;

  return (
    <>
      {githubUrl && (
        <ExternalLinkBlock
          label="_github"
          href={githubUrl}
          text="See project's repository"
        />
      )}
      {liveUrl && (
        <ExternalLinkBlock
          label="_live site"
          href={liveUrl}
          text="Visit the website"
          className="mt-4"
        />
      )}
    </>
  );
}
