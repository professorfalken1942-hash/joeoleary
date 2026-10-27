import type { MetadataRoute } from "next";
import { SITE_URL as baseUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "",
    "/projects",
    "/about",
    "/blog",
    "/contact",
    "/case-studies/enough",
    "/case-studies/pastel",
    "/case-studies/map-my-swing",
    "/case-studies/trootone",
    "/case-studies/uipen",
    "/case-studies/altamere",
    "/blog/when-your-ai-agent-calls-your-insurer",
    "/blog/openclaw-digital-studio",
    "/blog/wcag-accessibility-checklist",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));
}
