import Link from "next/link";

export default function NotFound() {
  return (
    <section className="page-section" style={{ minHeight: "70vh", paddingTop: "calc(56px + 5rem)" }}>
      <div className="content-wrap">
        <p className="eyebrow">404</p>
        <h1 className="page-heading" style={{ marginBottom: "1.25rem" }}>Page not found</h1>
        <p style={{ maxWidth: "560px", color: "var(--mid)", lineHeight: 1.7, fontWeight: 300, marginBottom: "1.5rem" }}>
          This page may have moved. Try the Work page.
        </p>
        <div className="cta-row">
          <Link className="button button-primary" href="/projects">View Work</Link>
          <Link className="button button-secondary" href="/contact">Contact Joe</Link>
        </div>
      </div>
    </section>
  );
}
