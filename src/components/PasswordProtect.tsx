"use client";

import Link from "next/link";
import { useEffect, useId, useState } from "react";

export default function PasswordProtect({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  const passwordId = useId();
  const instructionsId = useId();
  const statusId = useId();

  useEffect(() => {
    const storedAuth = sessionStorage.getItem("joeoleary_auth");
    if (storedAuth === "true") {
      queueMicrotask(() => setIsAuthenticated(true));
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (password === "goforit") {
      setIsAuthenticated(true);
      sessionStorage.setItem("joeoleary_auth", "true");
      setStatus("Access granted.");
      setPassword("");
      return;
    }

    setStatus("That password did not work. Check the password you were given or request access.");
    setPassword("");
  };

  if (isAuthenticated) {
    return <>{children}</>;
  }

  return (
    <section className="page-section" style={{ minHeight: "100vh", display: "grid", placeItems: "center", paddingTop: "calc(56px + 4rem)" }}>
      <div style={{ width: "min(100%, 440px)" }}>
        <p className="eyebrow">Protected Case Study</p>
        <h1 className="page-heading" style={{ fontSize: "3rem", marginBottom: "1rem" }}>
          Portfolio access
        </h1>
        <p id={instructionsId} style={{ color: "var(--mid)", lineHeight: 1.7, fontWeight: 300, marginBottom: "2rem" }}>
          Some product details are private. Enter the password if you already have it, or reach out for access.
        </p>

        <form onSubmit={handleSubmit} noValidate style={{ display: "grid", gap: "1rem" }}>
          <div>
            <label htmlFor={passwordId} style={{ display: "block", fontSize: "0.78rem", fontWeight: 600, marginBottom: "0.5rem" }}>
              Portfolio password
            </label>
            <input
              id={passwordId}
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                if (status) setStatus("");
              }}
              aria-describedby={`${instructionsId} ${statusId}`}
              aria-invalid={status.startsWith("That") ? "true" : undefined}
              autoComplete="current-password"
              style={{
                width: "100%",
                minHeight: "48px",
                padding: "0.75rem 0.9rem",
                border: "1px solid var(--border)",
                background: "var(--white)",
                color: "var(--black)",
              }}
              autoFocus
            />
          </div>

          <button className="button button-primary" type="submit">
            Unlock Case Study
          </button>

          <p
            id={statusId}
            role="status"
            aria-live="polite"
            className={status.startsWith("That") ? "form-status status-error" : "form-status"}
            style={{ display: status ? "block" : "none" }}
          >
            {status}
          </p>
        </form>

        <div className="cta-row" style={{ marginTop: "1.5rem" }}>
          <Link className="button button-secondary" href="/contact?re=portfolio-access">
            Request Access
          </Link>
          <Link href="/projects" style={{ fontSize: "0.86rem", color: "var(--accent-tertiary)" }}>
            Back to work
          </Link>
        </div>
      </div>
    </section>
  );
}
