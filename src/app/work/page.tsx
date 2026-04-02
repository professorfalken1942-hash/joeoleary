import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Work — Joseph O'Leary",
  description: "UX and design case studies by Joseph O'Leary.",
};

const projects = [
  { 
    id: "01", 
    title: "Pastel — Beauty Brand Portfolio", 
    category: "Web Design", 
    year: "2026", 
    desc: "Clean, Scandinavian-inspired portfolio for a makeup artist. Integrated booking system with HoneyBook, pink accent color, and micro-interactions.",
    link: "https://pastelstyle.art"
  },
  { 
    id: "02", 
    title: "O'Apostrophe — Digital Studio Brand", 
    category: "Design Systems & Web", 
    year: "2026", 
    desc: "Editorial brand site for a boutique web development studio. 8pt grid system, 48px touch targets, WCAG-compliant components, and Sanity CMS integration.",
    link: "https://oapostrophe.com"
  },
  { 
    id: "03", 
    title: "Adkman — Heritage Apparel Brand", 
    category: "Brand Design & Editorial", 
    year: "2026", 
    desc: "Vintage Adirondacks heritage brand Phase 1: Editorial site with forest green aesthetic, canvas-to-forest gradient hero, and Sanity-powered journal.", 
    link: "https://adkman.com"
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
        {projects.map((project, i) => (
          <div key={project.id} style={{
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
              {(project as any).link ? (
                <a href={(project as any).link} target="_blank" rel="noopener noreferrer" style={{
                  fontSize: "0.75rem",
                  fontWeight: 500,
                  color: "var(--black)",
                  textDecoration: "none",
                  borderBottom: "1px solid var(--black)",
                  paddingBottom: "1px",
                }}>
                  View →
                </a>
              ) : (
                <Link href={`/work/${project.id}`} style={{
                  fontSize: "0.75rem",
                  fontWeight: 500,
                  color: "var(--black)",
                  textDecoration: "none",
                  borderBottom: "1px solid var(--black)",
                  paddingBottom: "1px",
                }}>
                  View →
                </Link>
              )}
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
