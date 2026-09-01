export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{
      borderTop: "1px solid var(--border)",
      padding: "2rem",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      fontSize: "0.75rem",
      color: "var(--mid)",
      fontFamily: "var(--font-sans)",
    }}>
      <span>© {year} Joseph O&apos;Leary</span>
      <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
        <a href="https://www.linkedin.com/in/joseph-o-leary-976a945/" target="_blank" rel="noopener noreferrer" style={{ color: "var(--mid)", textDecoration: "none" }}>
          LinkedIn <span className="sr-only">(opens in a new tab)</span>
        </a>
        <a href="/resume.html" target="_blank" rel="noopener noreferrer" style={{ color: "var(--mid)", textDecoration: "none" }}>
          Resume <span className="sr-only">(opens in a new tab)</span>
        </a>
        <a href="/contact" style={{ color: "var(--mid)", textDecoration: "none" }}>Contact</a>
      </div>
    </footer>
  );
}
