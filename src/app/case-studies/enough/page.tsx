import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Enough Case Study",
  description: "Enough is a focused retirement calculator designed and built by Joseph O'Leary.",
  alternates: {
    canonical: "/case-studies/enough",
  },
};

const metadataItems = [
  { label: "Role", value: "Product design, UX engineering, front-end implementation" },
  { label: "Type", value: "Independent financial product" },
  { label: "Year", value: "2026" },
  { label: "Stack", value: "Next.js, React, TypeScript, Tailwind CSS" },
];

const decisions = [
  {
    title: "One question first",
    body: "The interface centers the experience around a single decision: how much money would make retirement possible? Everything else supports that answer.",
  },
  {
    title: "Private by default",
    body: "The calculator runs client-side and does not require an account, email capture, or stored financial profile.",
  },
  {
    title: "Visible assumptions",
    body: "Inputs such as savings, expenses, and return assumptions stay close to the output so users can see how the answer changes.",
  },
  {
    title: "Calm interaction model",
    body: "The product avoids a busy financial-dashboard feel. The calculation is the product, so the UI stays direct and restrained.",
  },
];

export default function EnoughCaseStudy() {
  return (
    <>
      <section className="page-header">
        <div className="content-wrap">
          <Link href="/projects" style={{ color: "var(--accent-tertiary)", fontSize: "0.86rem", fontWeight: 500 }}>
            Back to work
          </Link>
          <p className="eyebrow" style={{ marginTop: "2rem" }}>Independent Product</p>
          <h1 className="page-heading" style={{ maxWidth: "760px" }}>
            Enough
          </h1>
          <p style={{ maxWidth: "760px", marginTop: "1.5rem", color: "var(--mid)", fontSize: "1.18rem", lineHeight: 1.75, fontWeight: 300 }}>
            A focused retirement calculator for one practical question: what is enough?
          </p>
          <div className="cta-row" style={{ marginTop: "2rem" }}>
            <a className="button button-primary" href="https://whatsyourenough.info/calculator" target="_blank" rel="noopener noreferrer">
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
            <p className="eyebrow">Overview</p>
            <h2 style={{ fontSize: "2.4rem", fontWeight: 300, lineHeight: 1.15, marginBottom: "1.5rem" }}>
              A small product built for clarity.
            </h2>
          </div>
          <div className="text-stack">
            <p>
              Retirement tools often ask people to build a complete financial model before they can get a useful starting point. Enough keeps the experience narrow: a few understandable inputs, immediate math, and a result that is easy to inspect.
            </p>
            <p>
              I handled the full loop: framing the problem, designing the interaction model, writing the product copy, building the calculator, and launching the product.
            </p>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="content-wrap">
          <div className="section-heading">
            <p className="eyebrow">Key Decisions</p>
            <h2>Narrow, transparent, and usable without an account.</h2>
          </div>
          <div className="enterprise-list">
            {decisions.map((decision) => (
              <article key={decision.title} className="enterprise-preview">
                <h3>{decision.title}</h3>
                <p style={{ color: "var(--mid)", lineHeight: 1.65, fontWeight: 300 }}>{decision.body}</p>
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
              Designed and shipped as a working calculator.
            </h2>
          </div>
          <div className="text-stack">
            <p>
              The core calculator projects savings forward and compares that projection against a retirement target based on annual expenses and a withdrawal-rate assumption.
            </p>
            <p>
              The stack is intentionally simple: Next.js, React, TypeScript, and a compact interface system.
            </p>
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
            Enough is live as a usable product, not a static concept. Future work could add scenario comparison, saved assumptions, and export options. The first version focuses on making the retirement number understandable quickly.
          </p>
          <div className="cta-row">
            <a className="button button-primary" href="https://whatsyourenough.info/calculator" target="_blank" rel="noopener noreferrer">
              Open Enough <span className="sr-only">(opens in a new tab)</span>
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
