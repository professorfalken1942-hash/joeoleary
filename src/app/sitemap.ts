import type { MetadataRoute } from "next";

const baseUrl = "https://joeoleary.me";

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
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));
}
