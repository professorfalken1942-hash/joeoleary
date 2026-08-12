import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Work — Joseph O'Leary",
  description: "UX and design case studies by Joseph O'Leary.",
};

const projects = [
  { 
    id: "01", 
    title: "Equitable — Account Summary Redesign", 
    category: "UX/UI Design", 
    year: "2026", 
    desc: "Redesigned a complex financial dashboard for Equitable Financial. Improved visual hierarchy, added structured account details, and modernized the interface with card-based layouts and refined typography.",
    href: "/case-studies/equitable",
  },
  { 
    id: "02", 
    title: "Pastel — Beauty Brand Portfolio", 
    category: "Web Design", 
    year: "2026", 
    desc: "Clean, Scandinavian-inspired portfolio for a makeup artist. Integrated booking system with HoneyBook, pink accent color, and micro-interactions.",
    href: "/case-studies/pastel",
  },
  { 
    id: "03", 
    title: "Enough — Retirement Calculator", 
    category: "Product Design & Engineering", 
    year: "2026", 
    desc: "A focused retirement planning calculator that answers one critical question: How much do I need? Real-time projections using the 4% rule, privacy-first (client-side only), and zero data collection.",
    href: "/case-studies/enough",
  },
  {
    id: "04",
    title: "Swing Coach — Golf Swing Analyzer",
    category: "Product Design & Engineering",
    year: "2026",
    desc: "A browser-native golf swing analysis product with MediaPipe pose detection, persistent session history, and mobile-first recording. Built spec-first from concept to production in under a week.",
    href: "/case-studies/map-my-swing",
  },
];

export default function WorkPage() {
  return (
    <>
      <section style={{
        paddingTop: "calc(56px + 4rem)",
        paddingBottom: "4rem",
        paddingLeft: "2rem",
        paddingRight: "2rem",
        borderBottom: "1px solid var(--border)",
      }}>
        <p style={{
          fontSize: "0.75rem",
          color: "var(--mid)",
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          marginBottom: "1rem",
        }}>
          Selected Work
        </p>
        <h1 style={{
          fontFamily: "var(--font-sans)",
          fontSize: "clamp(2rem, 5vw, 4rem)",
          fontWeight: 300,
          letterSpacing: "-0.02em",
          lineHeight: 1.05,
        }}>
          Work
        </h1>
      </section>

      <section>
        <style>{`
          @media (max-width: 768px) {
            .work-item {
              display: flex !important;
              flex-direction: column !important;
              grid-template-columns: unset !important;
            }
            .work-item span {
              order: 1;
            }
            .work-item > div:first-of-type {
              order: 2;
            }
            .work-item > div:last-of-type {
              order: 3;
            }
          }
        `}</style>
        {projects.map((project) => (
          <div key={project.id} className="work-item" style={{
            display: "grid",
            gridTemplateColumns: "3rem 1fr 12rem",
            gap: "2rem",
            padding: "3rem 2rem",
            borderBottom: "1px solid var(--border)",
            alignItems: "start",
          }}>
            <span style={{ fontSize: "0.75rem", color: "var(--mid)", paddingTop: "0.2rem" }}>
              {project.id}
            </span>
            <div>
              <h2 style={{
                fontFamily: "var(--font-sans)",
                fontSize: "1.3rem",
                fontWeight: 400,
                letterSpacing: "-0.01em",
                marginBottom: "0.5rem",
              }}>
                {project.title}
              </h2>
              <p style={{
                fontSize: "0.8rem",
                color: "var(--mid)",
                marginBottom: "1rem",
                fontWeight: 300,
                lineHeight: 1.7,
              }}>
                {project.desc}
              </p>
              <span style={{
                display: "inline-block",
                fontSize: "0.7rem",
                color: "var(--mid)",
                border: "1px solid var(--border)",
                padding: "0.3rem 0.7rem",
              }}>
                {project.category}
              </span>
            </div>
            <div style={{ textAlign: "right" }}>
              <p style={{ fontSize: "0.75rem", color: "var(--mid)", marginBottom: "1rem" }}>{project.year}</p>
              <Link href={project.href} style={{
                fontSize: "0.75rem",
                fontWeight: 500,
                color: "var(--accent-tertiary)",
                textDecoration: "none",
                borderBottom: "1px solid var(--accent-tertiary)",
                paddingBottom: "1px",
              }}>
                View Case Study →
              </Link>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
