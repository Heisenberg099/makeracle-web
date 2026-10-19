import type { MetadataRoute } from "next";
import { courses } from "@/content/website/en";
import { site } from "@/content/website/site";

const pages = ["", "/for-schools", "/programmes", "/workshops", "/teachers", "/parents", "/about", "/safety", "/contact", "/privacy"];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...pages.map((p) => ({ url: `${site.url}${p}`, changeFrequency: "monthly" as const, priority: p === "" ? 1 : p === "/for-schools" || p === "/workshops" ? 0.9 : 0.7 })),
    ...courses.map((c) => ({ url: `${site.url}/programmes/${c.slug}`, changeFrequency: "monthly" as const, priority: 0.6 })),
  ];
}
