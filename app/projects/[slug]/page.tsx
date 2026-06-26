import type { Metadata } from "next";
import { projects } from "@/data/projects";
import ProjectDetail from "@/components/section/project-detail";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project" };

  return {
    title: project.projectName,
    description: project.description,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      type: "article",
      title: `${project.projectName} | Brajy`,
      description: project.description,
      url: `/projects/${project.slug}`,
      images: [{ url: project.heroImage, alt: project.projectName }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.projectName} | Brajy`,
      description: project.description,
      images: [project.heroImage],
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <ProjectDetail slug={slug} />;
}
