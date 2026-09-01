import CaseStudyHero from "@/components/case-study/parts/case-study-hero";
import CaseStudyMedia from "@/components/case-study/parts/case-study-media";
import ChapterSection from "@/components/case-study/parts/chapter-section";
import MetaStrip from "@/components/case-study/parts/meta-strip";
import ProjectLinks from "@/components/case-study/parts/project-links";
import ProjectGallery from "@/components/case-study/parts/project-gallery";
import WalkthroughBand from "@/components/case-study/parts/walkthrough-band";
import { bandsByChapter, trailingSteps } from "@/components/case-study/layout";
import type { Chapter, Project, ShowcaseItem } from "@/data/projects";

type Segment =
  | { kind: "chapters"; key: string; run: { chapter: Chapter; number: number }[] }
  | {
      kind: "band";
      key: string;
      items: ShowcaseItem[];
      startNumber: number;
      alternateFrom: number;
    };

/* Chapters: no sidebar. The project facts sit in a strip under the hero, the
   chapters run against a numbered left rail, and the beige walkthrough bands
   are interleaved between them, so the page alternates white and beige rather
   than carrying one block of visuals.

   A project with no screenshots still gets the rhythm, but from the colour
   break alone. That is how this variant degrades. */
export default function ChaptersCaseStudy({ project }: { project: Project }) {
  const showcase = project.showcase ?? [];
  const bands = bandsByChapter(showcase);
  const trailing = trailingSteps(showcase);

  // Walk the chapters once, cutting a new segment wherever a band is anchored.
  // Step numbering and the left/right zig-zag are threaded across the bands so
  // a split walkthrough still reads as one sequence.
  const segments: Segment[] = [];
  let run: { chapter: Chapter; number: number }[] = [];
  let stepCount = 0;
  let imageCount = 0;

  project.chapters.forEach((chapter, index) => {
    run.push({ chapter, number: index + 1 });
    const items = bands.get(chapter.id);
    if (!items) return;

    segments.push({ kind: "chapters", key: `run-${chapter.id}`, run });
    run = [];
    segments.push({
      kind: "band",
      key: `band-${chapter.id}`,
      items,
      startNumber: stepCount + 1,
      alternateFrom: imageCount,
    });
    stepCount += items.length;
    imageCount += items.filter((item) => item.image).length;
  });

  if (run.length > 0) {
    segments.push({ kind: "chapters", key: "run-tail", run });
  }

  return (
    <>
      <CaseStudyHero project={project} />
      <MetaStrip project={project} />
      <CaseStudyMedia project={project} />

      {segments.map((segment) =>
        segment.kind === "chapters" ? (
          <section
            key={segment.key}
            className="section-y section-x"
            role="region"
            aria-label="Case study"
          >
            <div className="section-container space-y-12 sm:space-y-16 md:space-y-20">
              {segment.run.map(({ chapter, number }) => (
                <ChapterSection
                  key={chapter.id}
                  chapter={chapter}
                  number={number}
                />
              ))}
            </div>
          </section>
        ) : (
          <WalkthroughBand
            key={segment.key}
            items={segment.items}
            projectName={project.projectName}
            id={segment.key}
            // The chapters already carry the counter; a second one competes.
            numbered={false}
            startNumber={segment.startNumber}
            alternateFrom={segment.alternateFrom}
          />
        ),
      )}

      {trailing.length > 0 && (
        <WalkthroughBand
          items={trailing}
          projectName={project.projectName}
          id="showcase-trailing"
          numbered={false}
          startNumber={stepCount + 1}
          alternateFrom={imageCount}
        />
      )}

      <section className="section-y section-x">
        <div className="section-container">
          <div className="md:pl-[calc(80px+2rem)]">
            <ProjectLinks project={project} />
          </div>
        </div>
      </section>

      <ProjectGallery project={project} />
    </>
  );
}
