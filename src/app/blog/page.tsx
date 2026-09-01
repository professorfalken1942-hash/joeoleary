import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Writing",
  description: "Notes on accessibility, design systems, product decisions, and the space between design and engineering.",
  alternates: {
    canonical: "/blog",
  },
};

const posts = [
  {
    slug: "openclaw-digital-studio",
    title: "Building a One-Person Digital Studio with OpenClaw",
    excerpt: "How I think about infrastructure, automation, and the parts of studio work that should stay human.",
    date: "April 14, 2026",
    category: "Studio & Process",
    readTime: "15 min read",
  },
  {
    slug: "wcag-accessibility-checklist",
    title: "WCAG 2.1 AA Accessibility Checklist",
    excerpt: "A practical checklist for product teams designing and building toward WCAG 2.1 AA.",
    date: "April 12, 2026",
    category: "Accessibility",
    readTime: "8 min read",
  },
];

export default function BlogPage() {
  return (
    <>
      <section className="page-header">
        <div className="content-wrap">
          <p className="eyebrow">Writing</p>
          <h1 className="page-heading">Notes on design and engineering.</h1>
          <p style={{ maxWidth: "640px", marginTop: "1.5rem", color: "var(--mid)", lineHeight: 1.75, fontWeight: 300 }}>
            Notes on accessibility, design systems, product decisions, and the space between design and engineering.
          </p>
        </div>
      </section>

      <section style={{ padding: "0 2rem 3rem" }}>
        <div className="content-wrap">
          {posts.map((post, i) => (
            <article
              key={post.slug}
              style={{
                padding: "3rem 0",
                borderBottom: i < posts.length - 1 ? "1px solid var(--border)" : undefined,
              }}
            >
              <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) auto", gap: "2rem", alignItems: "start" }}>
                <div>
                  <p className="eyebrow">{post.category}</p>
                  <h2 style={{ fontSize: "1.8rem", fontWeight: 400, lineHeight: 1.2, marginBottom: "0.75rem" }}>
                    <Link href={`/blog/${post.slug}`} style={{ textDecoration: "none" }}>
                      {post.title}
                    </Link>
                  </h2>
                </div>
                <p style={{ fontSize: "0.78rem", color: "var(--mid)", whiteSpace: "nowrap" }}>
                  <time>{post.date}</time> · {post.readTime}
                </p>
              </div>
              <p style={{ maxWidth: "720px", fontSize: "0.98rem", lineHeight: 1.7, color: "var(--mid)", fontWeight: 300, marginBottom: "1.25rem" }}>
                {post.excerpt}
              </p>
              <Link href={`/blog/${post.slug}`} style={{ color: "var(--accent-tertiary)", fontSize: "0.86rem", fontWeight: 500 }}>
                Read {post.title}
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
