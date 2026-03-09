import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — Joseph O'Leary",
  description: "10+ years senior UX/UI designer and engineer. WCAG 2.1 AA accessibility specialist. Currently at Equitable, open to Principal UX roles.",
};

const experience = [
  {
    role: "UX Professional, Sr. Manager",
    company: "Equitable",
    period: "Jan 2019 – Present",
    duration: "7+ yrs",
    location: "Syracuse, NY",
  },
  {
    role: "Senior UX/UI Designer",
    company: "AXA US",
    period: "Jan 2014 – Jan 2019",
    duration: "5 yrs",
    location: "Syracuse, NY",
  },
  {
    role: "Senior Web Designer / Consultant",
    company: "Diversant, LLC",
    period: "Sep 2013 – Dec 2013",
    duration: "4 mos",
    location: "",
  },
];

const skills = [
  "UX Design", "UX Engineering", "Front-End Development",
  "Design Systems", "WCAG 2.1 AA", "Accessibility",
  "UX Strategy", "Prototyping", "User Research",
  "Wireframing", "Interaction Design", "Mentoring",
  "Figma", "React",
];

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
        borderBottom: "1px solid var(--border)",
      }} className="col-2">
        {/* Bio */}
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
          <p style={{
            fontFamily: "var(--font-sans)",
            fontSize: "1rem",
            fontWeight: 300,
            lineHeight: 1.8,
            color: "var(--black)",
            marginBottom: "1.5rem",
          }}>
            I'm a UX Designer and Engineer with 10+ years of senior experience creating engaging, accessible digital experiences. I specialize in WCAG 2.1 AA accessibility, design systems, and bridging the gap between design and front-end engineering.
          </p>
          <p style={{
            fontFamily: "var(--font-sans)",
            fontSize: "1rem",
            fontWeight: 300,
            lineHeight: 1.8,
            color: "var(--mid)",
            marginBottom: "1.5rem",
          }}>
            Currently a Sr. Manager UX Professional at Equitable, I lead UX strategy, mentor teams, and build accessible, scalable design solutions for enterprise-scale financial products.
          </p>
          <p style={{
            fontFamily: "var(--font-sans)",
            fontSize: "1rem",
            fontWeight: 300,
            lineHeight: 1.8,
            color: "var(--mid)",
          }}>
            I'm open to Principal UX roles where I can drive design leadership and build great products.
          </p>
        </div>

        {/* Experience */}
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
          {experience.map((item, i) => (
            <div key={i} style={{
              paddingBottom: "1.75rem",
              marginBottom: "1.75rem",
              borderBottom: i < experience.length - 1 ? "1px solid var(--border)" : undefined,
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "0.25rem" }}>
                <span style={{ fontSize: "0.95rem", fontWeight: 500, letterSpacing: "-0.01em" }}>{item.role}</span>
                <span style={{ fontSize: "0.72rem", color: "var(--mid)", whiteSpace: "nowrap", marginLeft: "1rem" }}>{item.duration}</span>
              </div>
              <span style={{ fontSize: "0.82rem", color: "var(--mid)" }}>{item.company}</span>
              {item.location && <span style={{ fontSize: "0.75rem", color: "var(--border)", margin: "0 0.5rem" }}>·</span>}
              {item.location && <span style={{ fontSize: "0.75rem", color: "var(--mid)" }}>{item.location}</span>}
              <p style={{ fontSize: "0.72rem", color: "var(--mid)", marginTop: "0.25rem" }}>{item.period}</p>
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
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
          {skills.map((skill) => (
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

      {/* CTA */}
      <section style={{
        padding: "4rem 2rem",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "2rem",
        borderBottom: "1px solid var(--border)",
      }} className="col-2">
        <div>
          <p style={{ fontSize: "0.75rem", color: "var(--mid)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "1rem" }}>
            Hiring
          </p>
          <p style={{ fontSize: "0.9rem", fontWeight: 300, lineHeight: 1.7, color: "var(--mid)", marginBottom: "1.5rem" }}>
            Looking for a Principal UX or senior design leader? Let's talk.
          </p>
          <Link href="/contact?re=hiring" style={{
            fontFamily: "var(--font-sans)",
            fontSize: "0.8rem",
            fontWeight: 500,
            color: "var(--white)",
            backgroundColor: "var(--black)",
            padding: "0.75rem 1.5rem",
            textDecoration: "none",
          }}>
            Hire Joe
          </Link>
        </div>
        <div style={{ borderLeft: "1px solid var(--border)", paddingLeft: "2rem" }}>
          <p style={{ fontSize: "0.75rem", color: "var(--mid)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "1rem" }}>
            Freelance
          </p>
          <p style={{ fontSize: "0.9rem", fontWeight: 300, lineHeight: 1.7, color: "var(--mid)", marginBottom: "1.5rem" }}>
            Need UX strategy, design systems, or accessibility consulting?
          </p>
          <Link href="/contact?re=freelance" style={{
            fontFamily: "var(--font-sans)",
            fontSize: "0.8rem",
            fontWeight: 400,
            color: "var(--black)",
            border: "1px solid var(--border)",
            padding: "0.75rem 1.5rem",
            textDecoration: "none",
          }}>
            Work with Joe
          </Link>
        </div>
      </section>
    </>
  );
}
