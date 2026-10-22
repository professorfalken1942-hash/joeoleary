import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "Joseph O'Leary — Product Designer & UX Engineer",
    template: "%s — Joseph O'Leary",
  },
  description: "Product designer with 20+ years in design and more than a decade in enterprise financial services. UX strategy, systems thinking, accessibility, and hands-on front-end engineering.",
  metadataBase: new URL("https://joeoleary.me"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Joseph O'Leary — Product Designer & UX Engineer",
    description: "I make complex things feel simple. Enterprise financial-services UX, design systems, accessibility, and products I design and build myself.",
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
