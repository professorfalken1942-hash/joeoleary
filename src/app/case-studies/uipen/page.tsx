import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";

export const metadata: Metadata = pageMetadata({
  title: "UIpen Case Study",
  description: "UIpen scans public websites for visual and design-system inconsistency and proposes a cleaner token system. Designed and built by Joseph O'Leary.",
  path: "/case-studies/uipen",
});

const LIVE_URL = "https://design-debt.vercel.app";

const metadataItems = [
  { label: "Role", value: "Product design, UX engineering, front-end and API implementation" },
  { label: "Type", value: "Independent product (MVP)" },
  { label: "Year", value: "2026" },
  { label: "Stack", value: "Angular, TypeScript, Express, Prisma, PostgreSQL, Playwright" },
];

const questioned = [
  {
    assumption: "Design debt is a matter of taste.",
    decision: "Treat it as evidence. UIpen crawls real pages, inventories the interface, and points to specific inconsistencies instead of offering opinions.",
  },
  {
    assumption: "Teams need another dashboard.",
    decision: "Center the product on scan, review, and act. Findings lead to token proposals and backlog suggestions, not just charts.",
  },
  {
    assumption: "A design system has to be planned before it can be measured.",
    decision: "Infer one from what already ships. UIpen proposes a cleaner token set from the scan data and exports it as CSS variables or JSON.",
  },
];

const shipped = [
  "Scans of public websites with Playwright-based crawling",
  "Findings, scoring, and inventories of visual and design-system inconsistency",
  "Token review with export to CSS variables or JSON",
  "Backlog suggestions, screenshots, and reports",
  "Accounts, guest trials, workspaces, and scan history",
];

const next = [
  "Move scan execution from the API process onto a dedicated worker queue",
];

export default function UIpenCaseStudy() {
  return (
    <>
      <section className="page-header">
        <div className="content-wrap">
          <Link href="/projects" style={{ color: "var(--accent-tertiary)", fontSize: "0.86rem", fontWeight: 500 }}>
            Back to work
          </Link>
          <p className="eyebrow" style={{ marginTop: "2rem" }}>Independent Product</p>
          <h1 className="page-heading" style={{ maxWidth: "760px" }}>
            UIpen
          </h1>
          <p style={{ maxWidth: "760px", marginTop: "1.5rem", color: "var(--mid)", fontSize: "1.18rem", lineHeight: 1.75, fontWeight: 300 }}>
            A tool that makes design debt visible: scan a live site, see where the interface has drifted, and get a cleaner token system back.
          </p>
          <div className="cta-row" style={{ marginTop: "2rem" }}>
            <a className="button button-primary" href={LIVE_URL} target="_blank" rel="noopener noreferrer">
              View Live Product <span className="sr-only">(opens in a new tab)</span>
            </a>
            <Link className="button button-secondary" href="/projects">
              View More Work
            </Link>
          </div>
        </div>
      </section>

      <section className="evidence-strip" aria-label="Project metadata">
        <div className="content-wrap evidence-grid">
          {metadataItems.map((item) => (
            <div key={item.label} style={{ padding: "1.25rem 1.5rem", borderLeft: "1px solid var(--border)", minHeight: "104px" }}>
              <p className="meta-label">{item.label}</p>
              <p style={{ fontSize: "0.92rem", lineHeight: 1.5 }}>{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="page-section">
        <div className="content-wrap col-2" style={{ gap: "4rem" }}>
          <div>
            <p className="eyebrow">The Problem</p>
            <h2 style={{ fontSize: "2.4rem", fontWeight: 300, lineHeight: 1.15, marginBottom: "1.5rem" }}>
              Easy to feel, hard to point at.
            </h2>
          </div>
          <div className="text-stack">
            <p>
              Every product team knows the feeling: five slightly different blues, buttons that almost match, spacing that drifts from page to page. Design debt slows everyday product work, but it rarely shows up as a ticket anyone can prioritize.
            </p>
            <p>
              I wanted a way to turn that feeling into evidence a team could act on, without asking them to stop and run a full design-system audit first.
            </p>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="content-wrap">
          <div className="section-heading">
            <p className="eyebrow">What I Questioned</p>
            <h2>Evidence over opinion, action over dashboards.</h2>
          </div>
          <div className="enterprise-list">
            {questioned.map((item) => (
              <article key={item.assumption} className="enterprise-preview">
                <p className="meta-label">Assumption</p>
                <h3>{item.assumption}</h3>
                <p className="meta-label">What I did instead</p>
                <p>{item.decision}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="content-wrap col-2" style={{ gap: "4rem" }}>
          <div>
            <p className="eyebrow">Implementation</p>
            <h2 style={{ fontSize: "2.4rem", fontWeight: 300, lineHeight: 1.15, marginBottom: "1.5rem" }}>
              Built with production boundaries.
            </h2>
          </div>
          <div className="text-stack">
            <p>
              UIpen is a TypeScript monorepo: an Angular web app, an Express API with a Prisma schema on PostgreSQL, a Playwright-based scanner, and a separate analysis package that normalizes what it finds, builds inventories, scores findings, and generates token proposals.
            </p>
            <p>
              The tradeoff I made was to ship as an MVP while keeping those seams clean. Scans run inside the API process today, behind a service interface, so they can move to a worker queue later without reworking the product.
            </p>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="content-wrap col-2" style={{ gap: "4rem" }}>
          <div>
            <p className="eyebrow">Shipped</p>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 400, lineHeight: 1.25, marginBottom: "1.25rem" }}>
              Live today
            </h2>
            <ul className="text-stack" style={{ paddingLeft: "1.1rem", listStyle: "disc" }}>
              {shipped.map((item) => (
                <li key={item} style={{ lineHeight: 1.7, fontWeight: 300 }}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow">Next</p>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 400, lineHeight: 1.25, marginBottom: "1.25rem" }}>
              Planned, not yet built
            </h2>
            <ul className="text-stack" style={{ paddingLeft: "1.1rem", listStyle: "disc" }}>
              {next.map((item) => (
                <li key={item} style={{ lineHeight: 1.7, fontWeight: 300 }}>{item}</li>
              ))}
            </ul>
            {/* EDITORIAL: Add what you learned from building UIpen, or what early users told you, once confirmed. */}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="content-wrap" style={{ maxWidth: "820px" }}>
          <p className="eyebrow">Outcome</p>
          <h2 style={{ fontSize: "2.4rem", fontWeight: 300, lineHeight: 1.15, marginBottom: "1.5rem" }}>
            Designed, built, and launched.
          </h2>
          <p style={{ color: "var(--mid)", lineHeight: 1.75, fontWeight: 300, marginBottom: "2rem" }}>
            UIpen is live as a working MVP. I handled the whole product: the problem framing, the scan-review-act flow, the interface system, and the engineering behind it.
          </p>
          <div className="cta-row">
            <a className="button button-primary" href={LIVE_URL} target="_blank" rel="noopener noreferrer">
              Open UIpen <span className="sr-only">(opens in a new tab)</span>
            </a>
            <Link className="button button-secondary" href="/projects">
              Back to Work
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
