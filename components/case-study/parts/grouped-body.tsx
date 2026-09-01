import ChapterSection from "@/components/case-study/parts/chapter-section";
import MetaSidebar from "@/components/case-study/parts/meta-sidebar";
import ProjectLinks from "@/components/case-study/parts/project-links";
import WalkthroughBand from "@/components/case-study/parts/walkthrough-band";
import { splitAtBand } from "@/components/case-study/layout";
import type { Chapter, Project } from "@/data/projects";

interface GroupedBodyProps {
  project: Project;
  /** Passing the chapters adds a scroll-spy index above the sidebar facts. */
  sidebarChapters?: Chapter[];
}

/* The grouped body: content column plus sticky sidebar, one beige walkthrough
   band at the first anchor, then the remaining chapters. Shared by the
   classic and dossier variants, which differ only in what sits above it. */
export default function GroupedBody({
  project,
  sidebarChapters,
}: GroupedBodyProps) {
  const showcase = project.showcase ?? [];
  const { before, after } = splitAtBand(project.chapters, showcase);
  const hasOutro = after.length > 0;

  return (
    <>
      <section
        className="section-y section-x"
        role="region"
        aria-label="Project details"
      >
        <div className="section-container">
          {/* Content left, metadata right */}
          <div className="flex flex-col md:flex-row md:justify-between gap-6 sm:gap-8">
            <div className="reading-col order-2 md:order-1">
              {before.map((chapter) => (
                <ChapterSection key={chapter.id} chapter={chapter} />
              ))}
              {/* The links close the case study, so they wait for the outro
                  when one exists. */}
              {!hasOutro && <ProjectLinks project={project} />}
            </div>

            <MetaSidebar project={project} chapters={sidebarChapters} />
          </div>
        </div>
      </section>

      {showcase.length > 0 && (
        <WalkthroughBand
          items={showcase}
          projectName={project.projectName}
          id="showcase-heading"
        />
      )}

      {hasOutro && (
        <section
          className="section-y section-x"
          role="region"
          aria-label="Case study, continued"
        >
          <div className="section-container">
            {/* Same two-column shape as the opening group: the facts column
                resumes after the walkthrough band, so the metadata follows
                the whole read. Hidden on mobile, where the facts already
                appeared once at the top. */}
            <div className="flex flex-col md:flex-row md:justify-between gap-6 sm:gap-8">
              <div className="reading-col order-2 md:order-1">
                {after.map((chapter) => (
                  <ChapterSection key={chapter.id} chapter={chapter} />
                ))}
                <ProjectLinks project={project} />
              </div>

              <MetaSidebar
                project={project}
                chapters={sidebarChapters}
                className="hidden md:block"
              />
            </div>
          </div>
        </section>
      )}
    </>
  );
}
