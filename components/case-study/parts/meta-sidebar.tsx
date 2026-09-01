import { cn } from "@/lib/utils";
import AnimateOnScroll from "@/components/ui/animate-on-scroll";
import ChapterIndex from "@/components/case-study/parts/chapter-index";
import MetaList from "@/components/case-study/parts/meta-list";
import type { Chapter, Project } from "@/data/projects";

interface MetaSidebarProps {
  project: Project;
  /** When given, a scroll-spy chapter index sits above the project facts. */
  chapters?: Chapter[];
  /** Extra classes on the column (e.g. `hidden md:block` for the outro copy). */
  className?: string;
}

/* Sticky right-hand column: optional chapter index, then the project facts. */
export default function MetaSidebar({
  project,
  chapters,
  className,
}: MetaSidebarProps) {
  return (
    <div
      className={cn(
        "md:w-[280px] lg:w-[320px] shrink-0 mb-8 md:mt-0 order-1 md:order-2 md:sticky md:top-24 md:self-start",
        className,
      )}
    >
      <AnimateOnScroll>
        {chapters && chapters.length > 0 && (
          <div className="hidden md:block">
            <ChapterIndex chapters={chapters} />
          </div>
        )}
        <MetaList project={project} />
      </AnimateOnScroll>
    </div>
  );
}
