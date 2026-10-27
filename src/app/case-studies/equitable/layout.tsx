import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

// Private case study: kept out of search results.
export const metadata: Metadata = pageMetadata({
  title: "Equitable Account Summary (Private)",
  description: "A password-protected case study. Request access from Joseph O'Leary.",
  path: "/case-studies/equitable",
  noindex: true,
});

export default function PrivateCaseStudyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
