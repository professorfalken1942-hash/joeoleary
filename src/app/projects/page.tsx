import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Work",
  description: "Enterprise financial-services UX, design and engineering work, and independent products designed and built by Joseph O'Leary.",
  alternates: {
    canonical: "/projects",
  },
};

const enterpriseProjects: Project[] = [
  {
    id: "01",
    title: "Account Summary and Client Account Experiences",
    category: "Enterprise Product UX",
    year: "2019-Present",
    context: "Authenticated financial-product experiences for clients, advisors, and internal teams.",
    role: "Senior UX/UI designer and front-end collaborator.",
    constraint: "Screens, product logic, and implementation details are protected.",
    contribution: "Improved information hierarchy, account-detail patterns, support visibility, closed-account handling, and accessibility.",
    outcome: "[Add verified outcome]",
    href: "/case-studies/equitable",
    protected: true,
  },
  {
    id: "02",
    title: "Authorized-User Invitation and Identity Verification",
    category: "Enterprise Workflow UX",
    year: "2019-Present",
    context: "Invitation and verification flows where trust and clarity matter.",
    role: "UX strategy, interaction design, and implementation support.",
    constraint: "Requires reviewed screens and confirmed scope before publishing.",
    contribution: "Made expectations, next steps, and error states easier to understand.",
    outcome: "[Confirm project scope]",
    href: "/contact?re=portfolio-access",
    protected: true,
  },
  {
    id: "03",
    title: "Digital Delivery Enrollment",
    category: "Enterprise Product UX",
    year: "2019-Present",
    context: "Digital-adoption work connected to client communications and paper reduction.",
    role: "UX strategy, interaction design, accessibility, and product-engineering collaboration.",
    constraint: "Operational details are confidential and need content review.",
    contribution: "Clarified decision points and helped the experience move cleanly into production.",
    outcome: "[Add verified outcome]",
    href: "/contact?re=portfolio-access",
    protected: true,
  },
];

const engineeringProjects: Project[] = [
  {
    id: "04",
    title: "Retirement Planning Calculator",
    category: "Enterprise Product UX · Live",
    year: "2026",
    context: "A public retirement calculator on equitable.com that replaced a madlib-style form with poor usage and a high bounce rate.",
    role: "Designer and front-end developer.",
    constraint: "Process details are shared on request; the calculator itself is live.",
    contribution: "Designed and built a four-step guided flow, inline IRS-limit guardrails, and an interactive results planner.",
    outcome: "Designed, built, and launched on equitable.com.",
    href: "/case-studies/equitable-retirement-calculator",
    liveHref: "https://equitable.com/individuals/retirement-savings-plans/retirement-planning-calculator",
    protected: true,
  },
  {
    id: "05",
    title: "Design Systems and Reusable Interaction Patterns",
    category: "Design Systems",
    year: "2019-Present",
    context: "Reusable patterns for complex financial-product interfaces.",
    role: "Pattern definition, accessibility review, and front-end collaboration.",
    constraint: "Internal standards and product details are not public.",
    contribution: "Turned recurring interface decisions into reusable patterns.",
    outcome: "[Add verified outcome]",
    href: "/contact?re=portfolio-access",
    protected: true,
  },
];

const independentProjects: Project[] = [
  {
    id: "06",
    title: "Enough",
    category: "Independent Product · Live",
    year: "2026",
    context: "A privacy-first retirement calculator built around one plain-language question.",
    role: "Product designer and front-end engineer.",
    constraint: "Independent product, not client or employer work.",
    contribution: "Designed the calculator flow, product copy, interface, and client-side implementation.",
    outcome: "Designed, built, and launched.",
    href: "/case-studies/enough",
  },
  {
    id: "07",
    title: "UIpen",
    category: "Independent Product · Live MVP",
    year: "2026",
    context: "A design-debt review tool that scans public websites and reports visual and design-system inconsistency.",
    role: "Product designer and UX engineer.",
    constraint: "Independent product, not client or employer work.",
    contribution: "Designed the scan-and-review flow, interface system, and production implementation.",
    outcome: "Designed, built, and launched.",
    href: "/case-studies/uipen",
    liveHref: "https://design-debt.vercel.app",
  },
  {
    id: "08",
    title: "Trootone",
    category: "Independent Product · Live",
    year: "2026",
    context: "A free and functional guitar tuner that runs in the browser.",
    role: "Product designer and developer.",
    constraint: "Independent product, not client or employer work.",
    contribution: "Designed the one-tap tuning flow and analog-style meter, and built in-browser pitch detection with the Web Audio API.",
    outcome: "Designed, built, and launched.",
    href: "/case-studies/trootone",
    liveHref: "https://trootone.vercel.app",
  },
];

type Project = {
  id: string;
  title: string;
  category: string;
  year: string;
  context: string;
  role: string;
  constraint: string;
  contribution: string;
  outcome: string;
  href: string;
  liveHref?: string;
  protected?: boolean;
  external?: boolean;
};

function ProjectSummary({ project }: { project: Project }) {
  return (
    <article className="project-summary">
      <span className="meta-label" aria-hidden="true">{project.id}</span>
      <div>
        <p className="eyebrow">{project.category}</p>
        <h2>{project.title}</h2>
        <p>{project.context}</p>
        <dl>
          <div>
            <dt>Role</dt>
            <dd>{project.role}</dd>
          </div>
          <div>
            <dt>Contribution</dt>
            <dd>{project.contribution}</dd>
          </div>
        </dl>
      </div>
      <div>
        <p style={{ marginBottom: "1rem" }}>{project.year}</p>
        <div className="cta-row">
        {project.external ? (
          <a className="button button-secondary" href={project.href} target="_blank" rel="noopener noreferrer">
            Visit live site <span className="sr-only">(opens in a new tab)</span>
          </a>
        ) : (
          <Link className="button button-secondary" href={project.href}>
            {project.protected ? "Request details" : "Read case study"}
            <span className="sr-only"> for {project.title}</span>
          </Link>
        )}
        {project.liveHref ? (
          <a href={project.liveHref} target="_blank" rel="noopener noreferrer" style={{ fontSize: "0.82rem", fontWeight: 500, color: "var(--accent-tertiary)" }}>
            Visit live site <span className="sr-only">for {project.title} (opens in a new tab)</span>
          </a>
        ) : null}
        </div>
      </div>
    </article>
  );
}

function SectionIntro({ id, eyebrow, heading, children }: { id: string; eyebrow: string; heading: string; children?: React.ReactNode }) {
  return (
    <div className="page-section" style={{ paddingBottom: 0 }}>
      <div className="content-wrap section-heading">
        <p className="eyebrow">{eyebrow}</p>
        <h2 id={id}>{heading}</h2>
        {children}
      </div>
    </div>
  );
}

export default function WorkPage() {
  return (
    <>
      <section className="page-header">
        <div className="content-wrap">
          <p className="eyebrow">Selected Work</p>
          <h1 className="page-heading">Work</h1>
          <p style={{ maxWidth: "680px", marginTop: "1.5rem", color: "var(--mid)", lineHeight: 1.75, fontWeight: 300 }}>
            My work falls into three overlapping kinds of problems: making complex enterprise products understandable, connecting design decisions to how software is actually built, and shipping products of my own.
          </p>
        </div>
      </section>

      <section className="access-panel" aria-label="Private case study access">
        <div className="content-wrap cta-row">
          <Link className="button button-primary" href="/contact?re=portfolio-access">
            Request Access
          </Link>
          <Link className="button button-secondary" href="/case-studies/equitable">
            Enter Password
          </Link>
        </div>
      </section>

      <section id="enterprise" aria-labelledby="enterprise-heading">
        <SectionIntro id="enterprise-heading" eyebrow="01 · Solving complexity" heading="Enterprise experience, responsibly shared.">
          <p className="confidential-note" style={{ marginTop: "1.5rem" }}>
            Most of my enterprise work involves authenticated customer accounts and internal systems, so I don&apos;t publish screens, workflows, or product details. These summaries describe the kind of problem and my role. Deeper walkthroughs are available privately.
          </p>
        </SectionIntro>
        {enterpriseProjects.map((project) => (
          <ProjectSummary key={project.id} project={project} />
        ))}
      </section>

      <section id="design-engineering" aria-labelledby="engineering-heading">
        <SectionIntro id="engineering-heading" eyebrow="02 · Connecting design and engineering" heading="Designed and built, not just specified." />
        {engineeringProjects.map((project) => (
          <ProjectSummary key={project.id} project={project} />
        ))}
      </section>

      <section id="independent" aria-labelledby="independent-heading">
        <SectionIntro id="independent-heading" eyebrow="03 · Building what I believe in" heading="Products I noticed a need for, then designed, built, and shipped." />
        {independentProjects.map((project) => (
          <ProjectSummary key={project.id} project={project} />
        ))}
      </section>
    </>
  );
}
