import Link from "next/link";
import { cn } from "@/lib/utils";
import { CASE_STUDY_VARIANTS } from "@/components/case-study/case-study";
import { projects } from "@/data/projects";

const PILL =
  "px-2 py-0.5 rounded-full transition-colors duration-300 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary";

/* Compare bar for the preview route. Not part of the site: it disappears with
   the app/lab folder once a layout is chosen. */
export default function LabSwitcher({
  variant,
  slug,
}: {
  variant: string;
  slug: string;
}) {
  return (
    <nav
      aria-label="Layout preview switcher"
      className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex flex-wrap items-center justify-center gap-x-1 gap-y-1 rounded-full border border-border bg-background/95 px-3 py-2 shadow-lg font-caption text-xs max-w-[calc(100vw-2rem)]"
    >
      <span className="text-primary px-1">_lab</span>

      {CASE_STUDY_VARIANTS.map((name) => (
        <Link
          key={name}
          href={`/lab/${name}/${slug}`}
          aria-current={name === variant ? "page" : undefined}
          className={cn(
            PILL,
            name === variant
              ? "text-primary-foreground bg-primary"
              : "text-foreground",
          )}
        >
          {name}
        </Link>
      ))}

      <span aria-hidden="true" className="text-border px-1">
        |
      </span>

      {projects.map((project) => (
        <Link
          key={project.slug}
          href={`/lab/${variant}/${project.slug}`}
          aria-current={project.slug === slug ? "page" : undefined}
          className={cn(
            PILL,
            project.slug === slug
              ? "text-primary-foreground bg-primary"
              : "text-foreground",
          )}
        >
          {project.slug.split("-")[0]}
        </Link>
      ))}

      <span aria-hidden="true" className="text-border px-1">
        |
      </span>

      <Link href={`/projects/${slug}`} className={cn(PILL, "text-foreground")}>
        live
      </Link>
    </nav>
  );
}
