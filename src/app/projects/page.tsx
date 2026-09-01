import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected UX, design systems, accessibility, and independent product work by Joseph O'Leary.",
  alternates: {
    canonical: "/projects",
  },
};

const enterpriseProjects = [
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
  {
    id: "04",
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

const independentProjects = [
  {
    id: "05",
    title: "Enough",
    category: "Independent Product",
    year: "2026",
    context: "A privacy-first retirement calculator built around one plain-language question.",
    role: "Product designer and front-end engineer.",
    constraint: "Independent product, not client or employer work.",
    contribution: "Designed the calculator flow, product copy, interface, and client-side implementation.",
    outcome: "Designed, built, and launched.",
    href: "/case-studies/enough",
  },
  {
    id: "06",
    title: "UIpen",
    category: "Independent Product",
    year: "2026",
    context: "A design-debt review tool for teams trying to keep product interfaces clear and consistent.",
    role: "Product designer and UX engineer.",
    constraint: "Independent product, not client or employer work.",
    contribution: "Designed the scan-and-review flow, interface system, and production implementation.",
    outcome: "Designed, built, and launched.",
    href: "https://design-debt.vercel.app",
    external: true,
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
        {project.external ? (
          <a className="button button-secondary" href={project.href} target="_blank" rel="noopener noreferrer">
            Visit live site <span className="sr-only">(opens in a new tab)</span>
          </a>
        ) : (
          <Link className="button button-secondary" href={project.href}>
            {project.protected ? "Request details" : "Read case study"}
          </Link>
        )}
      </div>
    </article>
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
            Some work is shown as short summaries because the full product details are private. Reach out if you would like to see more.
          </p>
        </div>
      </section>

      <section className="access-panel">
        <div className="content-wrap cta-row">
          <Link className="button button-primary" href="/contact?re=portfolio-access">
            Request Access
          </Link>
          <Link className="button button-secondary" href="/case-studies/equitable">
            Enter Password
          </Link>
        </div>
      </section>

      <section aria-labelledby="enterprise-heading">
        <div className="page-section" style={{ paddingBottom: 0 }}>
          <div className="content-wrap section-heading">
            <p className="eyebrow">Enterprise Product Work</p>
            <h2 id="enterprise-heading">Selected financial-product and design-systems work.</h2>
          </div>
        </div>
        {enterpriseProjects.map((project) => (
          <ProjectSummary key={project.id} project={project} />
        ))}
      </section>

      <section aria-labelledby="independent-heading">
        <div className="page-section" style={{ paddingBottom: 0 }}>
          <div className="content-wrap section-heading">
            <p className="eyebrow">Independent Products</p>
            <h2 id="independent-heading">Independent products I designed and built.</h2>
          </div>
        </div>
        {independentProjects.map((project) => (
          <ProjectSummary key={project.id} project={project} />
        ))}
      </section>
    </>
  );
}
