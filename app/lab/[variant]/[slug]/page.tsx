import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CaseStudy, {
  CASE_STUDY_VARIANTS,
  isCaseStudyVariant,
} from "@/components/case-study/case-study";
import { projects } from "@/data/projects";
import LabSwitcher from "./switcher";

/* Preview route for comparing case-study layouts on the real content.

   Kept out of search and linked from nowhere: it exists to pick a layout, and
   the whole app/lab folder is deleted once one is chosen. */
export const metadata: Metadata = {
  title: "Case study lab",
  robots: { index: false, follow: false },
};

export function generateStaticParams() {
  return CASE_STUDY_VARIANTS.flatMap((variant) =>
    projects.map((project) => ({ variant, slug: project.slug })),
  );
}

export default async function LabPage({
  params,
}: {
  params: Promise<{ variant: string; slug: string }>;
}) {
  const { variant, slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project || !isCaseStudyVariant(variant)) notFound();

  return (
    <>
      <CaseStudy project={project} variant={variant} />
      <LabSwitcher variant={variant} slug={slug} />
    </>
  );
}
