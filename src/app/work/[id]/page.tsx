import type { Metadata } from "next";
import Link from "next/link";

const caseStudies: Record<string, any> = {
  "01": {
    title: "Pastel — Beauty Brand Portfolio",
    category: "Web Design & UX",
    year: "2026",
    role: "UX Designer + Front-End Engineer",
    link: "https://pastelstyle.art",
    challenge: "A luxury wedding makeup artist needed a portfolio site that showcased her work, built trust with brides, and integrated a frictionless booking experience. The design needed to reflect elegance, luxury, and Scandinavian minimalism.",
    solution: "Created a clean, mobile-first portfolio with a Scandinavian aesthetic. Integrated HoneyBook booking portal seamlessly, chose a bright pink accent color (rgb(255, 174, 215)) for brand differentiation, and implemented micro-interactions for delightful UX.",
    details: [
      "Next.js 16 + React 19 for fast, production-grade performance",
      "Tailwind v4 + custom CSS variables for consistent design tokens",
      "HoneyBook iframe integration (no X-Frame-Options blocking)",
      "Pink accent palette throughout (buttons, labels, CTAs)",
      "Mobile-first responsive design (48px touch targets)",
      "Sanity CMS ready for future blog content",
      "Deployed on Vercel for instant CI/CD",
    ],
    outcome: "Live portfolio with fully functional booking. Clean, luxury aesthetic that builds trust. Ready for client testimonials and gallery expansion.",
  },
  "02": {
    title: "O'Apostrophe — Digital Studio Brand",
    category: "Design Systems & Web",
    year: "2026",
    role: "Design System Architect + Lead Developer",
    link: "https://oapostrophe.com",
    challenge: "A boutique web development studio needed a brand site that reflected their premium positioning, showcased their craft, and established a reusable design system for future client work.",
    solution: "Built a comprehensive design system with 8pt grid foundation, 48px touch targets, and sharp corners (0px radius) for premium feel. Created feature-style Services cards and editorial Pricing tiers. Implemented baseline grid typography for visual harmony.",
    details: [
      "Design System: 8pt spacing scale, 4pt baseline grid, 48px touch targets",
      "Components: Nav, Hero, Services (feature cards), Pricing (editorial rows), Footer",
      "Semantic BEM naming for maintainability",
      "Tailwind v4 + custom CSS variables (globals.css)",
      "1280px max content width with responsive padding",
      "WCAG 2.1 AA accessibility built-in",
      "Sanity CMS integration for dynamic content",
    ],
    outcome: "Production-grade design system with reusable components. Services section redesigned with number + title + description + tags. Pricing tier structure clear and scannable. Foundation for scaling to multiple client sites.",
  },
  "03": {
    title: "Adkman — Heritage Apparel Brand",
    category: "Brand Design & Editorial",
    year: "2026",
    role: "Brand Designer + UX Architect",
    link: "https://adkman.com",
    challenge: "Launch Phase 1 of an elevated Adirondacks apparel brand with editorial focus. Goal: Build audience before Phase 2 ecommerce. Design needed to evoke vintage heritage, Lake Placid Olympics nostalgia, and premium outdoorsman aesthetic.",
    solution: "Created editorial brand site with forest green + iron + canvas color palette. Canvas-to-forest gradient hero (top to bottom). Sharp corners throughout. 8pt grid system matching the design system standards. Sanity-powered journal for future content.",
    details: [
      "Design System: Forest green (#1a2e1a) primary, iron (#2c2c2c) nav, canvas beige (#f0ebe0) background",
      "Canvas-to-forest gradient hero for depth and visual interest",
      "Iron nav (not green) for contrast and readability",
      "Restrained oxblood accents (#5c2020) — whisper, not shout",
      "8pt grid + 48px touch targets",
      "About strip with 5/7 column split for hierarchy",
      "Journal preview section (Sanity CMS ready)",
      "Email capture for newsletter",
      "DNS: IONOS nameservers → Vercel",
    ],
    outcome: "Phase 1 editorial site live. Heritage aesthetic established. Foundation for Phase 2 ecommerce launch. Audience building begins with journal content.",
  },
};

export function generateStaticParams() {
  return [
    { id: "01" },
    { id: "02" },
    { id: "03" },
  ];
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const study = caseStudies[id];
  return {
    title: `${study?.title || "Case Study"} — Joseph O'Leary`,
    description: study?.challenge || "Case study by Joseph O'Leary",
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const study = caseStudies[id];

  if (!study) {
    return (
      <section style={{ paddingTop: "calc(56px + 4rem)", paddingBottom: "4rem", paddingLeft: "2rem", paddingRight: "2rem" }}>
        <h1>Case Study Not Found</h1>
        <p>
          <Link href="/work">← Back to Work</Link>
        </p>
      </section>
    );
  }

  return (
    <>
      {/* Header */}
      <section style={{
        paddingTop: "calc(56px + 4rem)",
        paddingBottom: "4rem",
        paddingLeft: "2rem",
        paddingRight: "2rem",
        borderBottom: "1px solid var(--border)",
      }}>
        <div style={{ maxWidth: "900px" }}>
          <p style={{
            fontSize: "0.75rem",
            color: "var(--mid)",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            marginBottom: "1rem",
          }}>
            Case Study
          </p>
          <h1 style={{
            fontFamily: "var(--font-sans)",
            fontSize: "clamp(2rem, 5vw, 4rem)",
            fontWeight: 300,
            letterSpacing: "-0.02em",
            lineHeight: 1.05,
            marginBottom: "2rem",
          }}>
            {study.title}
          </h1>
          <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
            <div>
              <p style={{ fontSize: "0.7rem", color: "var(--mid)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.3rem" }}>
                Category
              </p>
              <p style={{ fontSize: "0.9rem" }}>{study.category}</p>
            </div>
            <div>
              <p style={{ fontSize: "0.7rem", color: "var(--mid)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.3rem" }}>
                Year
              </p>
              <p style={{ fontSize: "0.9rem" }}>{study.year}</p>
            </div>
            <div>
              <p style={{ fontSize: "0.7rem", color: "var(--mid)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.3rem" }}>
                Role
              </p>
              <p style={{ fontSize: "0.9rem" }}>{study.role}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section style={{ paddingLeft: "2rem", paddingRight: "2rem", maxWidth: "900px" }}>
        {/* Challenge */}
        <div style={{ padding: "4rem 0", borderBottom: "1px solid var(--border)" }}>
          <p style={{
            fontSize: "0.75rem",
            color: "var(--mid)",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            marginBottom: "1.5rem",
          }}>
            Challenge
          </p>
          <p style={{
            fontFamily: "var(--font-sans)",
            fontSize: "1.1rem",
            fontWeight: 300,
            lineHeight: 1.8,
            color: "var(--black)",
          }}>
            {study.challenge}
          </p>
        </div>

        {/* Solution */}
        <div style={{ padding: "4rem 0", borderBottom: "1px solid var(--border)" }}>
          <p style={{
            fontSize: "0.75rem",
            color: "var(--mid)",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            marginBottom: "1.5rem",
          }}>
            Solution
          </p>
          <p style={{
            fontFamily: "var(--font-sans)",
            fontSize: "1.1rem",
            fontWeight: 300,
            lineHeight: 1.8,
            color: "var(--black)",
            marginBottom: "2rem",
          }}>
            {study.solution}
          </p>
          <ul style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}>
            {study.details.map((detail: string, i: number) => (
              <li key={i} style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.95rem",
                fontWeight: 300,
                lineHeight: 1.6,
                color: "var(--mid)",
                paddingLeft: "1.5rem",
                position: "relative",
              }}>
                <span style={{
                  position: "absolute",
                  left: 0,
                  color: "var(--border)",
                }}>
                  ▪
                </span>
                {detail}
              </li>
            ))}
          </ul>
        </div>

        {/* Outcome */}
        <div style={{ padding: "4rem 0", borderBottom: "1px solid var(--border)" }}>
          <p style={{
            fontSize: "0.75rem",
            color: "var(--mid)",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            marginBottom: "1.5rem",
          }}>
            Outcome
          </p>
          <p style={{
            fontFamily: "var(--font-sans)",
            fontSize: "1.1rem",
            fontWeight: 300,
            lineHeight: 1.8,
            color: "var(--black)",
          }}>
            {study.outcome}
          </p>
        </div>

        {/* CTA */}
        <div style={{ padding: "4rem 0" }}>
          <a href={study.link} target="_blank" rel="noopener noreferrer" style={{
            fontFamily: "var(--font-sans)",
            fontSize: "0.8rem",
            fontWeight: 500,
            color: "var(--white)",
            backgroundColor: "var(--black)",
            padding: "0.75rem 1.5rem",
            textDecoration: "none",
            display: "inline-block",
            marginBottom: "2rem",
          }}>
            View Live Site →
          </a>
          <p style={{ fontSize: "0.75rem", color: "var(--mid)", lineHeight: 1.6 }}>
            <Link href="/work" style={{ color: "var(--black)", textDecoration: "none", borderBottom: "1px solid var(--black)", paddingBottom: "1px" }}>
              ← Back to Work
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
