import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: "About Joseph O'Leary, a senior UX designer and engineer working across product strategy, accessibility, design systems, and front-end implementation.",
  alternates: {
    canonical: "/about",
  },
};

const experience = [
  {
    role: "UX Professional, Sr. Manager",
    company: "Equitable",
    period: "Jan 2019 - Present",
    duration: "7 yrs 3 mos",
    location: "Syracuse, NY",
    desc: "Leads UX strategy, shapes major product work, builds reusable patterns, mentors designers, and partners with product and engineering on client, agent, and broker applications.",
  },
  {
    role: "Senior UX/UI Designer",
    company: "AXA US",
    period: "Jan 2014 - Jan 2019",
    duration: "5 yrs 1 mo",
    location: "Syracuse, NY",
    desc: "Designed and developed marketing sites and enterprise digital products.",
  },
  {
    role: "Senior Web Designer / Consultant",
    company: "Diversant, LLC",
    period: "Sep 2013 - Dec 2013",
    duration: "4 mos",
    location: "Greater Syracuse-Auburn Area",
    desc: "",
  },
];

const skillGroups = [
  {
    title: "Product and UX Strategy",
    skills: ["Problem framing", "Product discovery support", "Journey and flow definition", "Information hierarchy"],
  },
  {
    title: "Interaction and Interface Design",
    skills: ["Complex workflows", "Financial-product UX", "Wireframes and prototypes", "Responsive product UI"],
  },
  {
    title: "Design Systems",
    skills: ["Reusable patterns", "Component behavior", "Design tokens", "Documentation"],
  },
  {
    title: "Accessibility",
    skills: ["WCAG 2.1 AA", "Keyboard interaction", "Form semantics", "Contrast and reflow review"],
  },
  {
    title: "UX Engineering",
    skills: ["React and Next.js", "TypeScript", "Front-end architecture", "Design-to-code translation"],
  },
  {
    title: "Leadership and Collaboration",
    skills: ["Mentoring", "Cross-functional facilitation", "Design critique", "Product-engineering partnership"],
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="col-2" style={{ borderBottom: "1px solid var(--border)", paddingTop: "calc(56px + 4rem)" }}>
        <div style={{ padding: "4rem 2rem", borderRight: "1px solid var(--border)" }}>
          <p className="eyebrow">Bio</p>
          <div className="text-stack">
            <p>
              I&apos;m a senior UX designer and engineer working across product strategy, interaction design, design systems, accessibility, and front-end implementation. Over the past 12+ years, I&apos;ve helped shape financial experiences used by clients, advisors, and internal teams.
            </p>
            <p>
              At Equitable, I lead UX strategy, shape major product work, build reusable patterns, mentor designers, and work closely with product and engineering.
            </p>
            <p>
              I&apos;m interested in Principal, Staff, and Lead roles where I can improve both individual products and the systems teams use to build them.
            </p>
          </div>
        </div>

        <div style={{ padding: "4rem 2rem" }}>
          <p className="eyebrow">Experience</p>
          {experience.map((item) => (
            <article key={`${item.company}-${item.period}`} className="experience-item">
              <div className="experience-top">
                <h3>{item.role}</h3>
                <span className="experience-meta">{item.duration}</span>
              </div>
              <p className="experience-meta">
                {item.company}
                {item.location ? ` · ${item.location}` : ""}
              </p>
              <p className="experience-meta">{item.period}</p>
              {item.desc ? <p style={{ marginTop: "0.75rem" }}>{item.desc}</p> : null}
            </article>
          ))}
        </div>
      </section>

      <section className="page-section">
        <div className="content-wrap">
          <div className="section-heading">
            <p className="eyebrow">Capabilities</p>
            <h2>Strategy, systems, and shipped interfaces.</h2>
          </div>
          <div className="skills-grid">
            {skillGroups.map((group) => (
              <section key={group.title} className="skill-group" aria-labelledby={`skill-${group.title.replaceAll(" ", "-").toLowerCase()}`}>
                <h3 id={`skill-${group.title.replaceAll(" ", "-").toLowerCase()}`}>{group.title}</h3>
                <ul>
                  {group.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="content-wrap col-2" style={{ gap: "2rem" }}>
          <div>
            <p className="eyebrow">Resume</p>
            <p style={{ color: "var(--mid)", lineHeight: 1.7, fontWeight: 300, marginBottom: "1.25rem" }}>
              My resume is available as an HTML page with a PDF export option.
            </p>
            <a className="button button-secondary" href="/resume.html" target="_blank" rel="noopener noreferrer">
              View Resume <span className="sr-only">(opens in a new tab)</span>
            </a>
          </div>
          <div>
            <p className="eyebrow">Hiring</p>
            <p style={{ color: "var(--mid)", lineHeight: 1.7, fontWeight: 300, marginBottom: "1.25rem" }}>
              I&apos;m focused on Principal, Staff, Lead, and comparable senior UX/product-design roles.
            </p>
            <Link className="button button-primary" href="/contact?re=hiring">
              Contact Joe
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
