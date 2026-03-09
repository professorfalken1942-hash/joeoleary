import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Joseph O'Leary",
  description: "Get in touch with Joseph O'Leary.",
};

export default function ContactPage() {
  return (
    <>
      <section style={{
        paddingTop: "calc(56px + 4rem)",
        paddingBottom: "4rem",
        paddingLeft: "2rem",
        paddingRight: "2rem",
        borderBottom: "1px solid var(--border)",
      }}>
        <p style={{
          fontSize: "0.75rem",
          color: "var(--mid)",
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          marginBottom: "1rem",
        }}>
          Contact
        </p>
        <h1 style={{
          fontFamily: "var(--font-sans)",
          fontSize: "clamp(2rem, 5vw, 4rem)",
          fontWeight: 300,
          letterSpacing: "-0.02em",
          lineHeight: 1.05,
        }}>
          Get in Touch
        </h1>
      </section>

      <section style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        maxWidth: "1200px",
      }} className="col-2">
        {/* Form */}
        <div style={{ padding: "4rem 2rem", borderRight: "1px solid var(--border)" }}>
          <form style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
              <div>
                <label style={labelStyle}>First Name</label>
                <input type="text" style={inputStyle} required />
              </div>
              <div>
                <label style={labelStyle}>Last Name</label>
                <input type="text" style={inputStyle} required />
              </div>
            </div>
            <div>
              <label style={labelStyle}>Email</label>
              <input type="email" style={inputStyle} required />
            </div>
            <div>
              <label style={labelStyle}>Message</label>
              <textarea style={{ ...inputStyle, minHeight: "120px", resize: "vertical" }} required />
            </div>
            <button type="submit" style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.8rem",
              fontWeight: 500,
              color: "var(--white)",
              backgroundColor: "var(--black)",
              border: "none",
              padding: "0.75rem 1.5rem",
              cursor: "pointer",
              alignSelf: "flex-start",
            }}>
              Send Message
            </button>
          </form>
        </div>

        {/* Info */}
        <div style={{ padding: "4rem 2rem", display: "flex", flexDirection: "column", gap: "2.5rem" }}>
          {[
            { label: "Email", value: "joe@joeoleary.me" },
            { label: "LinkedIn", value: "linkedin.com/in/joeoleary" },
            { label: "Based", value: "— —" },
          ].map((item) => (
            <div key={item.label} style={{ borderBottom: "1px solid var(--border)", paddingBottom: "1.5rem" }}>
              <p style={{
                fontSize: "0.7rem",
                color: "var(--mid)",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                marginBottom: "0.5rem",
              }}>
                {item.label}
              </p>
              <p style={{ fontSize: "0.9rem", fontWeight: 400 }}>{item.value}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

const labelStyle: React.CSSProperties = {
  display: "block",
  fontFamily: "var(--font-sans)",
  fontSize: "0.7rem",
  textTransform: "uppercase",
  letterSpacing: "0.08em",
  color: "var(--mid)",
  marginBottom: "0.5rem",
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  fontFamily: "var(--font-sans)",
  fontSize: "0.9rem",
  fontWeight: 300,
  color: "var(--black)",
  backgroundColor: "transparent",
  border: "none",
  borderBottom: "1px solid var(--border)",
  padding: "0.5rem 0",
  outline: "none",
};
