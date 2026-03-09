import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Joseph O'Leary — UX & Design",
  description: "Joseph O'Leary is a UX and design professional.",
  metadataBase: new URL("https://joeoleary.me"),
  openGraph: {
    title: "Joseph O'Leary — UX & Design",
    description: "Joseph O'Leary is a UX and design professional.",
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
