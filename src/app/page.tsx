import Link from "next/link";

const work = [
  { id: "01", title: "Enough", category: "Retirement Calculator", year: "2026", href: "/case-studies/enough" },
  { id: "02", title: "Pastel", category: "Wedding Makeup Studio", year: "2025–2026", href: "/case-studies/pastel" },
  { id: "03", title: "Map My Swing", category: "Golf Analytics", year: "2026", href: "/case-studies/map-my-swing" },
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
            UX Designer & Engineer
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
            <strong>Joe</strong> O'Leary
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
            Creating engaging, accessible digital experiences. 10+ years of senior UX/UI design and strategy.
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
            <Link href="/contact" style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.8rem",
              fontWeight: 400,
              color: "var(--black)",
              border: "1px solid var(--border)",
              padding: "0.75rem 1.5rem",
              textDecoration: "none",
            }}>
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section style={{
        paddingLeft: "2rem",
        paddingRight: "2rem",
        paddingTop: "6rem",
        paddingBottom: "6rem",
        borderTop: "1px solid var(--border)",
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
            Featured Projects
          </p>
          <h2 style={{
            fontFamily: "var(--font-sans)",
            fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
            fontWeight: 300,
            lineHeight: 1.2,
            letterSpacing: "-0.01em",
            marginBottom: "3rem",
          }}>
            Tools I've Built
          </h2>

          {/* Enough Project */}
          <div style={{
            marginBottom: "4rem",
            paddingBottom: "4rem",
            borderBottom: "1px solid var(--border)",
          }}>
            <div style={{ marginBottom: "2rem" }}>
              <a href="https://whatsyourenough.info" target="_blank" rel="noopener noreferrer" style={{
                fontFamily: "var(--font-sans)",
                fontSize: "1.3rem",
                fontWeight: 400,
                letterSpacing: "-0.01em",
                color: "var(--black)",
                textDecoration: "none",
                marginRight: "1rem",
              }}>
                Enough →
              </a>
              <span style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.9rem",
                color: "var(--mid)",
              }}>
                Retirement Calculator
              </span>
            </div>
            <p style={{
              fontFamily: "var(--font-sans)",
              fontSize: "1rem",
              fontWeight: 300,
              lineHeight: 1.8,
              color: "var(--black)",
              maxWidth: "700px",
              marginBottom: "1.5rem",
            }}>
              Stop guessing about retirement. Enough is a focused calculator that answers the fundamental question: 
              <strong> How much do I actually need?</strong> Input your savings, expenses, and investment returns. Get your number. 
              Know when you can retire.
            </p>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "2rem",
              marginTop: "2rem",
            }}>
              {[
                { label: "Purpose", value: "Financial clarity without complexity" },
                { label: "Tech", value: "Next.js, React, TypeScript, Tailwind" },
                { label: "Key Feature", value: "Real-time 4% rule calculations" },
                { label: "Privacy", value: "Client-side only, no tracking" },
              ].map((item) => (
                <div key={item.label}>
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
                    fontWeight: 300,
                  }}>
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Work Index */}
      <section style={{
        paddingLeft: "2rem",
        paddingRight: "2rem",
        paddingTop: "6rem",
        paddingBottom: "6rem",
      }}>
        <div style={{ maxWidth: "900px", marginBottom: "3rem" }}>
          <p style={{
            fontFamily: "var(--font-sans)",
            fontSize: "0.75rem",
            fontWeight: 400,
            color: "var(--mid)",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            marginBottom: "1.5rem",
          }}>
            Client Work
          </p>
        </div>
        {work.filter(item => item.id !== "01").map((item) => (
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
            <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", color: "var(--mid)" }}>
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
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.8rem", color: "var(--mid)", fontWeight: 300 }}>
                {item.category}
              </p>
            </div>
            <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", color: "var(--mid)" }}>
              {item.year}
            </span>
          </Link>
        ))}
      </section>

      {/* Stats strip */}
      <section style={{
        marginTop: "6rem",
        borderTop: "1px solid var(--border)",
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
      }}>
        {[
          { label: "Approach", value: "Design Strategist & Builder" },
          { label: "Focus", value: "Strategy + Execution" },
          { label: "Role", value: "Design Leadership & Product" },
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
