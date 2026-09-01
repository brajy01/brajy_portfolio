import CaseStudy from "@/components/case-study/case-study";
import { projects } from "@/data/projects";

interface ProjectDetailProps {
  slug: string;
}

/* Thin wrapper kept for the /projects route: the layout itself lives in
   components/case-study, where the variants are composed. */
export default function ProjectDetail({ slug }: ProjectDetailProps) {
  const project = projects.find((p) => p.slug === slug);

  // Unknown slugs 404 at the route level (app/projects/[slug]/page.tsx).
  if (!project) return null;

  return <CaseStudy project={project} />;
}
