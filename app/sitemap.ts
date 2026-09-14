import type { MetadataRoute } from "next";
import { templates } from "@/lib/templates";

export default function sitemap(): MetadataRoute.Sitemap {
  const templatePages = templates.map((t) => ({
    url: `https://scribed.eu/templates/${t.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: "https://scribed.eu",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://scribed.eu/templates",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://scribed.eu/services",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://scribed.eu/about",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    ...templatePages,
  ];
}
