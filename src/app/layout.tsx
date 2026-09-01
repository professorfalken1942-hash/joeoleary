import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "Joseph O'Leary — Senior UX Designer & Engineer",
    template: "%s — Joseph O'Leary",
  },
  description: "Senior UX designer and engineer working on financial products, design systems, accessibility, and front-end implementation.",
  metadataBase: new URL("https://joeoleary.me"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Joseph O'Leary — Senior UX Designer & Engineer",
    description: "Financial-product UX, design systems, accessibility, and front-end implementation by Joseph O'Leary.",
    url: "https://joeoleary.me",
    siteName: "Joseph O'Leary",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">Skip to main content</a>
        <Nav />
        <main id="main-content">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
