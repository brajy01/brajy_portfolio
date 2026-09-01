import CaseStudyHero from "@/components/case-study/parts/case-study-hero";
import CaseStudyMedia from "@/components/case-study/parts/case-study-media";
import GroupedBody from "@/components/case-study/parts/grouped-body";
import ProjectGallery from "@/components/case-study/parts/project-gallery";
import type { Project } from "@/data/projects";

/* Classic: the layout the site already shipped, rebuilt on the unified
   chapter model. It is the default, so /projects keeps its current shape
   while the other two variants are being compared. No AtAGlance here: the
   metric tiles read as filler on this layout (owner's call) — the figures
   live in the hero copy and the meta sidebar instead. */
export default function ClassicCaseStudy({ project }: { project: Project }) {
  return (
    <>
      <CaseStudyHero project={project} />
      <CaseStudyMedia project={project} />
      <GroupedBody project={project} />
      <ProjectGallery project={project} />
    </>
  );
}
