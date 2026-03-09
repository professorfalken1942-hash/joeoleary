import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Joseph O'Leary — UX Designer & Engineer",
  description: "10+ years senior UX/UI designer and engineer. WCAG 2.1 AA accessibility specialist. Currently at Equitable, open to Principal UX roles.",
  metadataBase: new URL("https://joeoleary.me"),
  openGraph: {
    title: "Joseph O'Leary — UX Designer & Engineer",
    description: "10+ years senior UX/UI designer and engineer. WCAG 2.1 AA accessibility specialist. Open to Principal UX roles.",
    url: "https://joeoleary.me",
    siteName: "Joseph O'Leary",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
