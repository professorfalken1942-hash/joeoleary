import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Pastel Case Study",
  description: "A portfolio and booking site for a wedding makeup artist, with a CMS-driven portfolio and HoneyBook booking. Designed and built by Joseph O'Leary.",
  path: "/case-studies/pastel",
});

export default function PastelLayout({ children }: { children: React.ReactNode }) {
  return children;
}
