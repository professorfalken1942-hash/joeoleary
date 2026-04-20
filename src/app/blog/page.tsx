import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog — Joseph O'Leary",
  description: "Thoughts on UX design, accessibility, and digital product strategy.",
};

const posts = [
  {
    slug: "openclaw-digital-studio",
    title: "Building a One-Person Digital Studio with OpenClaw",
    excerpt: "How we architected a modern web development studio using Next.js, AI automation, and personal infrastructure. From strategy to deployment.",
    date: "April 14, 2026",
    category: "Studio & Process",
    readTime: "15 min read",
  },
  {
    slug: "wcag-accessibility-checklist",
    title: "WCAG 2.1 AA Accessibility Checklist",
    excerpt: "A practical guide to implementing WCAG 2.1 AA compliance in your digital products. Cover the essentials and avoid common pitfalls.",
    date: "April 12, 2026",
    category: "Accessibility",
    readTime: "8 min read",
  },

];

export default function BlogPage() {
  return (
    <>
      {/* Header */}
      <section
        style={{
          paddingTop: "calc(56px + 4rem)",
          paddingBottom: "4rem",
          paddingLeft: "2rem",
          paddingRight: "2rem",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div style={{ maxWidth: "900px" }}>
          <p
            style={{
              fontSize: "0.75rem",
              color: "var(--mid)",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              marginBottom: "1rem",
            }}
          >
            Blog
          </p>
          <h1
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2rem, 5vw, 4rem)",
              fontWeight: 300,
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
              marginBottom: "2rem",
            }}
          >
            Thoughts on Design & UX
          </h1>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: "var(--text-muted)",
              maxWidth: "600px",
            }}
          >
            Essays on accessibility, design systems, product strategy, and the craft of digital design. Updated regularly.
          </p>
        </div>
      </section>

      {/* Posts Grid */}
      <section style={{ paddingLeft: "2rem", paddingRight: "2rem" }}>
        <div style={{ maxWidth: "900px" }}>
          {posts.map((post, i) => (
            <article
              key={post.slug}
              style={{
                padding: "3rem 0",
                borderBottom: i < posts.length - 1 ? "1px solid var(--border)" : "none",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: "1rem" }}>
                <div>
                  <p
                    style={{
                      fontSize: "0.7rem",
                      color: "var(--mid)",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {post.category}
                  </p>
                  <h2
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "1.8rem",
                      fontWeight: 400,
                      lineHeight: 1.2,
                      marginBottom: "0.5rem",
                      color: "var(--text)",
                    }}
                  >
                    <Link
                      href={`/blog/${post.slug}`}
                      style={{ color: "inherit", textDecoration: "none" }}
                    >
                      {post.title}
                    </Link>
                  </h2>
                </div>
                <p
                  style={{
                    fontSize: "0.75rem",
                    color: "var(--mid)",
                    textAlign: "right",
                    whiteSpace: "nowrap",
                  }}
                >
                  {post.date}
                </p>
              </div>

              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: 1.7,
                  color: "var(--text-muted)",
                  marginBottom: "1.5rem",
                }}
              >
                {post.excerpt}
              </p>

              <Link
                href={`/blog/${post.slug}`}
                style={{
                  fontSize: "0.85rem",
                  fontWeight: 500,
                  color: "var(--text)",
                  textDecoration: "none",
                  borderBottom: "1px solid var(--text)",
                  paddingBottom: "1px",
                }}
              >
                Read article → {post.readTime}
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
