import NextProject from "@/components/case-study/parts/next-project";
import ChaptersCaseStudy from "@/components/case-study/variants/chapters";
import ClassicCaseStudy from "@/components/case-study/variants/classic";
import DossierCaseStudy from "@/components/case-study/variants/dossier";
import type { Project } from "@/data/projects";

export const CASE_STUDY_VARIANTS = ["classic", "chapters", "dossier"] as const;

export type CaseStudyVariant = (typeof CASE_STUDY_VARIANTS)[number];

export function isCaseStudyVariant(value: string): value is CaseStudyVariant {
  return (CASE_STUDY_VARIANTS as readonly string[]).includes(value);
}

/* What /projects renders. Switching the live site to another layout is this
   one line. */
export const DEFAULT_VARIANT: CaseStudyVariant = "classic";

interface CaseStudyProps {
  project: Project;
  variant?: CaseStudyVariant;
}

/* Every variant composes the same parts from the same project data: they
   differ in arrangement, never in what they are allowed to say. The next
   project block closes every variant so the read never dead-ends. */
export default function CaseStudy({
  project,
  variant = DEFAULT_VARIANT,
}: CaseStudyProps) {
  const Variant =
    variant === "chapters"
      ? ChaptersCaseStudy
      : variant === "dossier"
        ? DossierCaseStudy
        : ClassicCaseStudy;

  return (
    <>
      <Variant project={project} />
      <NextProject project={project} />
    </>
  );
}
