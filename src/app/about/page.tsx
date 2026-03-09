import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — Joseph O'Leary",
  description: "Joseph O'Leary is a UX and design professional.",
};

export default function AboutPage() {
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
          About
        </p>
        <h1 style={{
          fontFamily: "var(--font-sans)",
          fontSize: "clamp(2rem, 5vw, 4rem)",
          fontWeight: 300,
          letterSpacing: "-0.02em",
          lineHeight: 1.05,
        }}>
          Joseph O'Leary
        </h1>
      </section>

      <section style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        maxWidth: "1200px",
        borderBottom: "1px solid var(--border)",
      }} className="col-2">
        <div style={{ padding: "4rem 2rem", borderRight: "1px solid var(--border)" }}>
          <p style={{
            fontSize: "0.75rem",
            color: "var(--mid)",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            marginBottom: "2rem",
          }}>
            Bio
          </p>
          {/* Placeholder — update with real bio */}
          <p style={{
            fontFamily: "var(--font-sans)",
            fontSize: "1rem",
            fontWeight: 300,
            lineHeight: 1.8,
            color: "var(--black)",
            marginBottom: "1.5rem",
          }}>
            Joseph O'Leary is a UX and design professional with a focus on creating clear, useful, and considered digital experiences.
          </p>
          <p style={{
            fontFamily: "var(--font-sans)",
            fontSize: "1rem",
            fontWeight: 300,
            lineHeight: 1.8,
            color: "var(--mid)",
          }}>
            {/* Placeholder — add more bio from LinkedIn */}
            Background, experience, and philosophy to be added.
          </p>
        </div>

        <div style={{ padding: "4rem 2rem" }}>
          <p style={{
            fontSize: "0.75rem",
            color: "var(--mid)",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            marginBottom: "2rem",
          }}>
            Experience
          </p>
          {/* Placeholder — will populate from LinkedIn */}
          {[
            { role: "— —", company: "— —", period: "— —" },
            { role: "— —", company: "— —", period: "— —" },
            { role: "— —", company: "— —", period: "— —" },
          ].map((item, i) => (
            <div key={i} style={{
              paddingBottom: "1.5rem",
              marginBottom: "1.5rem",
              borderBottom: "1px solid var(--border)",
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.25rem" }}>
                <span style={{ fontSize: "0.9rem", fontWeight: 400 }}>{item.role}</span>
                <span style={{ fontSize: "0.75rem", color: "var(--mid)" }}>{item.period}</span>
              </div>
              <span style={{ fontSize: "0.8rem", color: "var(--mid)" }}>{item.company}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section style={{ padding: "4rem 2rem", borderBottom: "1px solid var(--border)" }}>
        <p style={{
          fontSize: "0.75rem",
          color: "var(--mid)",
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          marginBottom: "2rem",
        }}>
          Skills & Tools
        </p>
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "0.5rem",
        }}>
          {["UX Design", "Product Design", "Design Systems", "Figma", "Prototyping", "User Research", "Wireframing", "Interaction Design"].map((skill) => (
            <span key={skill} style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.8rem",
              fontWeight: 400,
              color: "var(--black)",
              border: "1px solid var(--border)",
              padding: "0.4rem 0.9rem",
            }}>
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section style={{ padding: "4rem 2rem" }}>
        <Link href="/contact" style={{
          fontFamily: "var(--font-sans)",
          fontSize: "0.8rem",
          fontWeight: 500,
          color: "var(--white)",
          backgroundColor: "var(--black)",
          padding: "0.75rem 1.5rem",
          textDecoration: "none",
        }}>
          Get in Touch
        </Link>
      </section>
    </>
  );
}
