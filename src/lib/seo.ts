import type { Metadata } from "next";

export const SITE_URL = "https://www.joeoleary.me";
export const SITE_NAME = "Joseph O'Leary";
export const DEFAULT_TITLE = "Joseph O'Leary — Product Designer & UX Engineer";
export const DEFAULT_DESCRIPTION =
  "Product designer with 20+ years in design and more than a decade in enterprise financial services. UX strategy, systems thinking, accessibility, and hands-on front-end engineering.";

type PageMeta = {
  /** Page title without the site name; the root layout's template adds it. Omit for the homepage. */
  title?: string;
  description: string;
  /** Path from the site root, such as "/about". Becomes the canonical URL. */
  path: string;
  /** Share image path. Defaults to the generated site card. */
  image?: { url: string; width: number; height: number; alt: string };
  type?: "website" | "article";
  publishedTime?: string;
  noindex?: boolean;
};

const DEFAULT_IMAGE = { url: "/opengraph-image", width: 1200, height: 630, alt: "Joseph O'Leary, product designer" };

/** Title, description, canonical URL and link-preview tags for one page. */
export function pageMetadata({ title, description, path, image = DEFAULT_IMAGE, type = "website", publishedTime, noindex }: PageMeta): Metadata {
  const fullTitle = title ? `${title} — ${SITE_NAME}` : DEFAULT_TITLE;
  return {
    ...(title ? { title } : { title: { absolute: DEFAULT_TITLE } }),
    description,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      siteName: SITE_NAME,
      type,
      ...(publishedTime ? { publishedTime } : {}),
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image.url],
    },
    ...(noindex ? { robots: { index: false, follow: false } } : {}),
  };
}
