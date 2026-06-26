import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";

const SITE_URL = "https://brajy.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const entry = (
    path: string,
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"],
    priority: number,
  ): MetadataRoute.Sitemap[number] => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  });

  return [
    entry("/", "monthly", 1),
    entry("/about", "monthly", 0.8),
    entry("/projects", "monthly", 0.8),
    entry("/contact", "yearly", 0.5),
    ...projects.map((project) =>
      entry(`/projects/${project.slug}`, "monthly", 0.6),
    ),
  ];
}
