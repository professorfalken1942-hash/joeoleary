import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="home-hero" style={{
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
            color: "var(--accent-tertiary)",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            marginBottom: "1.5rem",
          }}>
            UX Designer & Engineer
          </p>
          <h1 style={{
            marginBottom: "2rem",
          }}>
            <strong style={{ color: "var(--accent-tertiary)" }}>Joe</strong> O'Leary
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
            Creating engaging, accessible digital experiences. 15+ years of senior UX/UI design and strategy.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="/projects" style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.8rem",
              fontWeight: 500,
              color: "var(--white)",
              backgroundColor: "var(--accent-tertiary)",
              padding: "0.75rem 1.5rem",
              textDecoration: "none",
            }}>
              View Projects
            </Link>
            <Link href="/contact" style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.8rem",
              fontWeight: 400,
              color: "var(--black)",
              border: "1px solid var(--accent)",
              padding: "0.75rem 1.5rem",
              textDecoration: "none",
            }}>
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="work" className="portfolio-section" style={{
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
            Featured Work
          </p>
          <h2 style={{
            fontFamily: "var(--font-sans)",
            fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
            fontWeight: 300,
            lineHeight: 1.2,
            letterSpacing: "-0.01em",
            marginBottom: "3rem",
          }}>
            Recent Projects
          </h2>

          {/* Enough Project Card */}
          <div style={{
            marginBottom: "3rem",
            paddingBottom: "3rem",
            borderBottom: "1px solid var(--border)",
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.5rem" }}>
              <div>
                <a className="accent-link" href="https://whatsyourenough.info" target="_blank" rel="noopener noreferrer" style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "1.25rem",
                  fontWeight: 400,
                  letterSpacing: "-0.01em",
                  textDecoration: "none",
                }}>
                  Enough
                </a>
                <p style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.85rem",
                  color: "var(--mid)",
                  marginTop: "0.25rem",
                }}>
                  Retirement Calculator
                </p>
              </div>
              <span style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.75rem",
                color: "var(--mid)",
              }}>
                2026
              </span>
            </div>
            <p style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.95rem",
              fontWeight: 300,
              lineHeight: 1.7,
              color: "var(--black)",
              maxWidth: "700px",
              marginBottom: "2rem",
            }}>
              A focused retirement planning tool that answers one question: <strong>How much do I need?</strong> Users input current savings, annual expenses, and expected returns. The calculator projects retirement date using the 4% rule in real-time. Privacy-first design (client-side only, no data collection).
            </p>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "1.5rem",
            }}>
              {[
                { label: "Challenge", value: "Simplify complex financial calculations for non-experts" },
                { label: "Solution", value: "Interactive calculator with instant feedback and projections" },
                { label: "Tech", value: "Next.js, React, TypeScript, Tailwind CSS" },
                { label: "Outcome", value: "Live at whatsyourenough.info with zero tracking" },
              ].map((item) => (
                <div key={item.label}>
                  <p className="accent-chip" style={{
                    display: "inline-block",
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.7rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    marginBottom: "0.5rem",
                    fontWeight: 500,
                    border: "1px solid var(--border)",
                    padding: "0.2rem 0.5rem",
                  }}>
                    {item.label}
                  </p>
                  <p style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.9rem",
                    fontWeight: 300,
                    lineHeight: 1.6,
                  }}>
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Pastel Project Card */}
          <div style={{
            marginBottom: "3rem",
            paddingBottom: "3rem",
            borderBottom: "1px solid var(--border)",
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.5rem" }}>
              <div>
                <a className="accent-link" href="https://www.pastelmakeupandstyle.com" target="_blank" rel="noopener noreferrer" style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "1.25rem",
                  fontWeight: 400,
                  letterSpacing: "-0.01em",
                  textDecoration: "none",
                }}>
                  Pastel
                </a>
                <p style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.85rem",
                  color: "var(--mid)",
                  marginTop: "0.25rem",
                }}>
                  Wedding Makeup Artist Portfolio
                </p>
              </div>
              <span style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.75rem",
                color: "var(--mid)",
              }}>
                2025–2026
              </span>
            </div>
            <p style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.95rem",
              fontWeight: 300,
              lineHeight: 1.7,
              color: "var(--black)",
              maxWidth: "700px",
              marginBottom: "2rem",
            }}>
              A luxury wedding makeup artist's full-stack digital presence. Designed and built the brand site, gallery showcase, integrated HoneyBook booking widget, and set up transactional email (SendGrid). Optimized for bride discovery and instant booking conversions. Custom domain with SEO schema markup.
            </p>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "1.5rem",
            }}>
              {[
                { label: "Challenge", value: "Build trust and drive bookings for boutique service" },
                { label: "Solution", value: "Portfolio-first design with integrated booking system" },
                { label: "Tech", value: "Next.js, React, TypeScript, Tailwind, Vercel" },
                { label: "Outcome", value: "Live at www.pastelmakeupandstyle.com with booking integration" },
              ].map((item) => (
                <div key={item.label}>
                  <p className="accent-chip" style={{
                    display: "inline-block",
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.7rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    marginBottom: "0.5rem",
                    fontWeight: 500,
                    border: "1px solid var(--border)",
                    padding: "0.2rem 0.5rem",
                  }}>
                    {item.label}
                  </p>
                  <p style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.9rem",
                    fontWeight: 300,
                    lineHeight: 1.6,
                  }}>
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="stats-strip" style={{
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
