import Link from "next/link";

// Placeholder work items — will be filled with real case studies
const work = [
  { id: "01", title: "Case Study One", category: "UX Design", year: "2025" },
  { id: "02", title: "Case Study Two", category: "Product Design", year: "2024" },
  { id: "03", title: "Case Study Three", category: "Design Systems", year: "2024" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section style={{
        paddingTop: "calc(56px + 6rem)",
        paddingBottom: "6rem",
        paddingLeft: "2rem",
        paddingRight: "2rem",
        borderBottom: "1px solid var(--border)",
      }}>
        <div style={{ maxWidth: "900px" }}>
          <p style={{
            fontFamily: "var(--font-sans)",
            fontSize: "0.75rem",
            fontWeight: 400,
            color: "var(--mid)",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            marginBottom: "1.5rem",
          }}>
            UX & Design
          </p>
          <h1 style={{
            fontFamily: "var(--font-sans)",
            fontSize: "clamp(2.5rem, 6vw, 5rem)",
            fontWeight: 300,
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            color: "var(--black)",
            marginBottom: "2rem",
          }}>
            Joseph O'Leary
          </h1>
          <p style={{
            fontFamily: "var(--font-sans)",
            fontSize: "1.1rem",
            fontWeight: 300,
            lineHeight: 1.7,
            color: "var(--mid)",
            maxWidth: "560px",
            marginBottom: "3rem",
          }}>
            UX and design professional. I design products and experiences that are clear, useful, and considered.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="/work" style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.8rem",
              fontWeight: 500,
              color: "var(--white)",
              backgroundColor: "var(--black)",
              padding: "0.75rem 1.5rem",
              textDecoration: "none",
            }}>
              View Work
            </Link>
            <Link href="/about" style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.8rem",
              fontWeight: 400,
              color: "var(--black)",
              border: "1px solid var(--border)",
              padding: "0.75rem 1.5rem",
              textDecoration: "none",
            }}>
              About
            </Link>
          </div>
        </div>
      </section>

      {/* Work index */}
      <section style={{ paddingLeft: "2rem", paddingRight: "2rem" }}>
        {work.map((item, i) => (
          <Link key={item.id} href={`/work/${item.id}`} style={{
            display: "grid",
            gridTemplateColumns: "3rem 1fr auto",
            gap: "2rem",
            padding: "2rem 0",
            borderBottom: "1px solid var(--border)",
            textDecoration: "none",
            color: "inherit",
            alignItems: "center",
          }}>
            <span style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.75rem",
              color: "var(--mid)",
              fontWeight: 400,
            }}>
              {item.id}
            </span>
            <div>
              <h2 style={{
                fontFamily: "var(--font-sans)",
                fontSize: "1.1rem",
                fontWeight: 400,
                letterSpacing: "-0.01em",
                marginBottom: "0.25rem",
              }}>
                {item.title}
              </h2>
              <p style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.8rem",
                color: "var(--mid)",
                fontWeight: 300,
              }}>
                {item.category}
              </p>
            </div>
            <span style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.75rem",
              color: "var(--mid)",
            }}>
              {item.year}
            </span>
          </Link>
        ))}
      </section>

      {/* Swiss grid accent strip */}
      <section style={{
        marginTop: "6rem",
        borderTop: "1px solid var(--border)",
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
      }}>
        {[
          { label: "Discipline", value: "UX & Product Design" },
          { label: "Location", value: "— —" },
          { label: "Status", value: "Available" },
        ].map((item, i) => (
          <div key={item.label} style={{
            padding: "2rem",
            borderRight: i < 2 ? "1px solid var(--border)" : undefined,
          }}>
            <p style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.7rem",
              color: "var(--mid)",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              marginBottom: "0.5rem",
            }}>
              {item.label}
            </p>
            <p style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.95rem",
              fontWeight: 400,
              letterSpacing: "-0.01em",
            }}>
              {item.value}
            </p>
          </div>
        ))}
      </section>
    </>
  );
}
