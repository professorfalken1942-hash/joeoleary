import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";

const canonicalRoutes: Record<string, string> = {
  "01": "/case-studies/equitable",
  "02": "/case-studies/pastel",
  "03": "/case-studies/enough",
  "04": "/case-studies/map-my-swing",
};

const caseStudies: Record<string, any> = {
  "01": {
    link: "https://equitable.com",
    title: "Equitable — Account Summary Redesign",
    category: "UX/UI Design",
    year: "2026",
    role: "UX Designer",
    challenge: "The existing account summary lacked structure and transparency. Account values weren't prominent, financial professional information was missing, and closed accounts cluttered the view alongside active ones. Users had to navigate externally to find basic details like registration info and addresses.",
    solution: "A comprehensive usability and design overhaul focused on clarity, hierarchy, and confidence. Added open date, registration info, and address directly into the account view. Surfaced the 'My financial professional' field prominently. Elevated account values to a primary visual element. Deprioritized closed accounts (grayed out, pushed to bottom).",
    details: [
      "Visual hierarchy: Updated typography with mixed sizes and weights",
      "Modern design language: Rounded cards, generous whitespace, standardized layouts",
      "Consistency: Standardized account layouts across all products",
      "Reduced clutter: Better spacing and visual separation",
      "Accessibility: WCAG 2.1 AA compliance",
      "Proposed actionable error messaging and help tooltips",
    ],
    outcome: "The redesigned account summary delivers a cleaner, more transparent experience. Updated typography creates clear information hierarchy. Rounded content cards and generous whitespace create a spacious, approachable interface. Better spacing reduces noise and guides focus to what matters.",
  },
  "02": {
    title: "Pastel — Beauty Brand Portfolio",
    category: "Web Design & UX",
    year: "2026",
    role: "UX Designer + Front-End Engineer",
    link: "https://www.pastelmakeupandstyle.com",
    challenge: "The Pastel Beauty brand, a renowned luxury wedding makeup artist, approached us with a need to establish an online presence that would showcase their exquisite services and reflect their distinctive Scandinavian aesthetic. The portfolio site was intended to be a digital haven for brides-to-be seeking high-quality, personalized wedding makeup solutions. To further enhance the user experience, the site needed to integrate seamlessly with HoneyBook, a popular booking platform for creative professionals.",
    solution: "To tackle this challenge, we employed a mobile-first design approach, ensuring that Pastel Beauty's captivating portfolio would be accessible and enjoyable on various devices. We leveraged Next.js, a robust React framework, to build the site, ensuring optimal performance and scalability. To maintain a consistent and refined visual language across the platform, we incorporated Tailwind CSS, a utility-first CSS framework. To emphasize Pastel Beauty's unique identity, we selected a bright pink color (rgb(255, 174, 215)) as an accent hue throughout the site, complementing the Scandinavian aesthetic. This choice of color also served to immediately distinguish Pastel Beauty from competitors and create a memorable brand impression.",
    details: [
      "Next.js 16 + React 19 for fast, production-grade performance",
      "Tailwind v4 + custom CSS variables for consistent design tokens",
      "HoneyBook iframe integration (no X-Frame-Options blocking)",
      "Pink accent palette throughout (buttons, labels, CTAs)",
      "Mobile-first responsive design (48px touch targets)",
      "Sanity CMS ready for future blog content",
      "Deployed on Vercel for instant CI/CD",
    ],
    outcome: "The resulting Pastel Beauty portfolio site is a shining example of successful UX design. It has effectively captured the essence of the luxury wedding makeup artist's services, offering an intuitive and visually striking user experience. The integration with HoneyBook has streamlined the booking process, making it effortless for clients to secure appointments.",
  },
  "03": {
    title: "Equitable — Account Summary Redesign",
    category: "UX/UI Design",
    year: "2026",
    role: "UX/UI Designer",
    challenge: "The existing account summary lacked structure and transparency. Account values weren't prominent, financial professional information was missing, and closed accounts cluttered the view alongside active ones. Users had to navigate externally to find basic details like registration info and addresses. The interface felt outdated and didn't inspire confidence in users managing significant financial holdings.",
    solution: "A comprehensive usability and design overhaul focused on clarity, hierarchy, and confidence. We restructured the account details to include open date, registration info, and address directly in the account view. We surfaced the 'My financial professional' field prominently—a critical touchpoint that was previously invisible. We elevated account values from buried data to a primary visual element. We deprioritized closed accounts by graying them out and pushing them to the bottom of the list, keeping focus on active holdings.",
    details: [
      "Visual hierarchy: Updated typography with mixed sizes and weights for clear information flow",
      "Modern design language: Rounded content cards, generous whitespace, and standardized layouts",
      "Consistency: Standardized account presentation across all product types and categories",
      "Reduced cognitive load: Better spacing, visual separation, and smart prioritization",
      "Accessibility: WCAG 2.1 AA compliance throughout",
      "Proposed actionable error messaging with context-specific guidance",
      "Help tooltips for unfamiliar fields to reduce support friction",
    ],
    outcome: "The redesigned account summary delivers a cleaner, more transparent user experience. Updated typography creates clear information hierarchy and improved readability. Rounded cards and generous whitespace create a spacious, approachable interface that reduces visual clutter. Users now have confidence in their account overview, with critical information immediately accessible and properly prioritized.",
  },
  "04": {
    title: "Swing Coach — Golf Swing Analyzer",
    category: "Product Design & Engineering",
    year: "2026",
    role: "Product Designer + Full-Stack Engineer",
    link: "https://swing-coach.vercel.app",
    challenge: "Golfers have limited access to affordable swing analysis. Professional tools like TrackMan cost $15,000–$25,000. Free alternatives like asking Gemini to analyze a video offer one-shot feedback with no memory of past sessions. The opportunity: a mobile-first web app that records or uploads swing video, analyzes it with real pose detection, and tracks improvement over time — with nothing to install.",
    solution: "Built Swing Coach from zero to production in under a week. The core insight was that browser APIs (getUserMedia, MediaPipe) have matured enough to do real computer vision client-side — no backend required for MVP. Designed a focused 3-screen flow: record or upload, see pose overlay + metrics, review history. Every design decision referenced a build system specification (UX_RULES.md, DESIGN.md, FEEDBACK_ENGINE.md) to maintain consistency across the entire product.",
    details: [
      "Real-time MediaPipe PoseLandmarker — gold skeleton overlay on playback video, 33 body landmarks at 60fps",
      "Hip rotation and shoulder rotation calculated live from landmark coordinates",
      "Rule-based feedback engine — max 2 insights per session, plain English, action-oriented",
      "Swing history with localStorage persistence — auto-saves every session",
      "Progress charts (Recharts) — hip, shoulder, tempo tracked over time with trend indicators",
      "Live recording via getUserMedia + MediaRecorder API, or upload from camera roll",
      "Full mobile polish — 48px tap targets, full-height camera view, responsive single-column layout",
      "Consistent design system — green gradient header, gold accents, dark theme throughout",
      "Next.js 16 + React 19 + TypeScript, deployed on Vercel",
    ],
    outcome: "A fully functional golf swing analyzer live at swing-coach.vercel.app. Where Gemini gives you a one-shot opinion, Swing Coach remembers every swing and shows your progression. The real differentiator is persistence — golfers can track hip rotation improving from 28° to 44° over two weeks of practice. Built spec-first with a complete build system (7 documentation files), which allowed rapid iteration without losing design coherence.",
  },
};

export function generateStaticParams() {
  return [
    { id: "01" },
    { id: "02" },
    { id: "03" },
    { id: "04" },
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

  if (canonicalRoutes[id]) {
    redirect(canonicalRoutes[id]);
  }

  if (!study) {
    return (
      <section style={{ paddingTop: "calc(56px + 4rem)", paddingBottom: "4rem", paddingLeft: "2rem", paddingRight: "2rem" }}>
        <h1>Case Study Not Found</h1>
        <p>
          <Link href="/projects">← Back to Projects</Link>
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
            <Link href="/projects" style={{ color: "var(--black)", textDecoration: "none", borderBottom: "1px solid var(--black)", paddingBottom: "1px" }}>
              ← Back to Projects
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
