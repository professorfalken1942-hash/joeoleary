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
      <span>© {year} Joseph O'Leary</span>
      <div style={{ display: "flex", gap: "1.5rem" }}>
        <a href="https://linkedin.com/in/joeoleary" target="_blank" rel="noopener noreferrer" style={{ color: "var(--mid)", textDecoration: "none" }}>LinkedIn</a>
        <a href="/contact" style={{ color: "var(--mid)", textDecoration: "none" }}>Contact</a>
      </div>
    </footer>
  );
}
