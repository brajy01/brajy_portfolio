import AtAGlance from "@/components/case-study/parts/at-a-glance";
import CaseStudyHero from "@/components/case-study/parts/case-study-hero";
import CaseStudyMedia from "@/components/case-study/parts/case-study-media";
import GroupedBody from "@/components/case-study/parts/grouped-body";
import ProjectGallery from "@/components/case-study/parts/project-gallery";
import type { Project } from "@/data/projects";

/* Dossier: the case study read as a document. Headline figures sit under the
   hero as front matter, and the sidebar carries a scroll-spy chapter index
   above the project facts.

   A project with no measured figures simply has no "at a glance" block, so
   this variant degrades toward the classic one rather than showing empty
   tiles. That is the intended behaviour, not a gap. */
export default function DossierCaseStudy({ project }: { project: Project }) {
  return (
    <>
      <CaseStudyHero project={project} />
      <AtAGlance project={project} />
      <CaseStudyMedia project={project} />
      <GroupedBody project={project} sidebarChapters={project.chapters} />
      <ProjectGallery project={project} />
    </>
  );
}
