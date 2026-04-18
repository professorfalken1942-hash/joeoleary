"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

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
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "var(--bg)",
          color: "var(--text)",
          padding: "2rem",
        }}
      >
        <motion.div
          style={{ maxWidth: "400px", width: "100%", textAlign: "center" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Heading */}
          <motion.h1
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
              marginBottom: "0.5rem",
              fontFamily: "var(--font-serif)",
              fontWeight: 400,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
            }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <strong>Joe</strong> O'Leary
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            style={{
              fontSize: "0.9rem",
              marginBottom: "3rem",
              color: "var(--mid)",
              lineHeight: 1.6,
            }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            UX Designer & Engineer. Portfolio access requires a password.
          </motion.p>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: "100%",
                padding: "12px 16px",
                marginBottom: "1rem",
                border: "1px solid var(--border)",
                background: "var(--bg)",
                color: "var(--text)",
                fontSize: "0.95rem",
                boxSizing: "border-box",
                minHeight: "48px",
              }}
              autoFocus
            />

            {error && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={{
                  color: "#dc2626",
                  fontSize: "0.85rem",
                  marginBottom: "1rem",
                  textAlign: "center",
                }}
              >
                {error}
              </motion.p>
            )}

            <button
              type="submit"
              style={{
                width: "100%",
                padding: "12px 16px",
                background: "var(--text)",
                color: "var(--bg)",
                border: "none",
                fontSize: "0.9rem",
                fontWeight: 500,
                cursor: "pointer",
                transition: "opacity 0.2s",
                minHeight: "48px",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              Unlock
            </button>
          </motion.form>

          {/* Footer note */}
          <motion.p
            style={{
              fontSize: "0.75rem",
              marginTop: "3rem",
              color: "var(--mid)",
              lineHeight: 1.6,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            This portfolio is private. Access restricted.
          </motion.p>
        </motion.div>
      </div>
    );
  }

  return <>{children}</>;
}
