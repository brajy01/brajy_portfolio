import type { Metadata } from "next";
import { notFound } from "next/navigation";
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
      // Without a real hero image, point explicitly at the generated brand
      // OG route (defining openGraph here suppresses automatic inheritance).
      images: [
        project.heroImage
          ? { url: project.heroImage, alt: project.projectName }
          : { url: "/opengraph-image", alt: "Brajy - Operations x Data x Code" },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.projectName} | Brajy`,
      description: project.description,
      images: [project.heroImage ?? "/twitter-image"],
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!projects.some((p) => p.slug === slug)) notFound();
  return <ProjectDetail slug={slug} />;
}
