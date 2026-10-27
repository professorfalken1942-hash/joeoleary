import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Swing Coach Case Study",
  description: "Swing Coach is a golf swing analysis app built from zero to production, with computer vision and mobile UX. Designed and built by Joseph O'Leary.",
  path: "/case-studies/map-my-swing",
});

export default function SwingCoachLayout({ children }: { children: React.ReactNode }) {
  return children;
}
