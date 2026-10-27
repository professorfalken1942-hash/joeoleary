import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import { DEFAULT_DESCRIPTION, DEFAULT_TITLE, SITE_NAME, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: "%s — Joseph O'Leary",
  },
  description: DEFAULT_DESCRIPTION,
  openGraph: {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    url: "/",
    siteName: SITE_NAME,
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  robots: {
    index: true,
    follow: true,
  },
};

// Tells search engines who this site is about, so searches for the name find it.
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Joseph O'Leary",
  alternateName: "Joe O'Leary",
  url: SITE_URL,
  jobTitle: "Product Designer",
  description: DEFAULT_DESCRIPTION,
  address: { "@type": "PostalAddress", addressLocality: "Syracuse", addressRegion: "NY", addressCountry: "US" },
  alumniOf: { "@type": "CollegeOrUniversity", name: "Nazareth University" },
  knowsAbout: ["Product design", "UX strategy", "Design systems", "Accessibility", "Front-end engineering", "Financial services"],
  sameAs: ["https://www.linkedin.com/in/joseph-o-leary-976a945/"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c") }}
        />
        <a className="skip-link" href="#main-content">Skip to main content</a>
        <Nav />
        <main id="main-content">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
