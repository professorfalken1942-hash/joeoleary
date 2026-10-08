import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/case-studies/equitable", "/case-studies/equitable-retirement-calculator"],
    },
    sitemap: "https://joeoleary.me/sitemap.xml",
  };
}
