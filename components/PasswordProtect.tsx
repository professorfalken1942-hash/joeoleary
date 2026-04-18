"use client";

import { useEffect, useState } from "react";

export default function PasswordProtect({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Check if password is already stored in sessionStorage
    const storedAuth = sessionStorage.getItem("joeoleary_auth");
    if (storedAuth === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "goforit") {
      setIsAuthenticated(true);
      sessionStorage.setItem("joeoleary_auth", "true");
      setError("");
    } else {
      setError("Incorrect password");
      setPassword("");
    }
  };

  if (!isMounted) {
    return null;
  }

  if (!isAuthenticated) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "var(--bg)",
          color: "var(--text)",
          padding: "2rem",
        }}
      >
        <div style={{ maxWidth: "320px", width: "100%" }}>
          <h1
            style={{
              fontSize: "2rem",
              marginBottom: "1rem",
              textAlign: "center",
              fontFamily: "var(--font-serif)",
              fontWeight: 400,
              letterSpacing: "-0.02em",
            }}
          >
            joeoleary.me
          </h1>
          <p
            style={{
              fontSize: "0.9rem",
              marginBottom: "2rem",
              textAlign: "center",
              color: "var(--mid)",
              lineHeight: 1.6,
            }}
          >
            Password protected. Please enter the password to continue.
          </p>

          <form onSubmit={handleSubmit}>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: "100%",
                padding: "0.75rem",
                marginBottom: "1rem",
                border: "1px solid var(--border)",
                background: "var(--bg)",
                color: "var(--text)",
                fontSize: "0.95rem",
                boxSizing: "border-box",
              }}
              autoFocus
            />

            {error && (
              <p
                style={{
                  color: "#dc2626",
                  fontSize: "0.85rem",
                  marginBottom: "1rem",
                  textAlign: "center",
                }}
              >
                {error}
              </p>
            )}

            <button
              type="submit"
              style={{
                width: "100%",
                padding: "0.75rem",
                background: "var(--text)",
                color: "var(--bg)",
                border: "none",
                fontSize: "0.9rem",
                fontWeight: 500,
                cursor: "pointer",
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              Unlock
            </button>
          </form>

          <p
            style={{
              fontSize: "0.75rem",
              marginTop: "2rem",
              textAlign: "center",
              color: "var(--mid)",
            }}
          >
            This site is private.
          </p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
