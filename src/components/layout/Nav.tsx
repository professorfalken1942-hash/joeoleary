"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <style>{`
        .nav-desktop { display: flex; gap: 2rem; align-items: center; }
        .nav-hamburger { display: none; flex-direction: column; gap: 5px; background: none; border: none; cursor: pointer; padding: 0.25rem; }
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
      `}</style>

      <header style={{
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 50,
        height: "56px",
        padding: "0 2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "var(--white)",
        borderBottom: "1px solid var(--border)",
      }}>
        <Link href="/" onClick={() => setOpen(false)} style={{
          fontFamily: "var(--font-sans)",
          fontSize: "0.875rem",
          fontWeight: 500,
          letterSpacing: "-0.01em",
          color: "var(--black)",
          textDecoration: "none",
        }}>
          Joseph O'Leary
        </Link>

        <nav className="nav-desktop">
          {links.map((link) => (
            <Link key={link.href} href={link.href} style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.8rem",
              fontWeight: 400,
              color: "var(--mid)",
              textDecoration: "none",
              transition: "color 0.15s",
            }}>
              {link.label}
            </Link>
          ))}
        </nav>

        <button className="nav-hamburger" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <span style={{ display: "block", width: "20px", height: "1px", backgroundColor: "var(--black)", transition: "transform 0.2s", transform: open ? "rotate(45deg) translate(4px, 4px)" : "none" }} />
          <span style={{ display: "block", width: "20px", height: "1px", backgroundColor: "var(--black)", opacity: open ? 0 : 1, transition: "opacity 0.2s" }} />
          <span style={{ display: "block", width: "20px", height: "1px", backgroundColor: "var(--black)", transition: "transform 0.2s", transform: open ? "rotate(-45deg) translate(4px, -4px)" : "none" }} />
        </button>
      </header>

      {/* Mobile overlay */}
      <div style={{
        position: "fixed",
        inset: 0,
        zIndex: 40,
        backgroundColor: "var(--white)",
        display: "flex",
        flexDirection: "column",
        padding: "5rem 2rem 3rem",
        gap: "0",
        opacity: open ? 1 : 0,
        visibility: open ? "visible" : "hidden",
        transition: "opacity 0.2s, visibility 0.2s",
      }}>
        {links.map((link, i) => (
          <Link key={link.href} href={link.href} onClick={() => setOpen(false)} style={{
            fontFamily: "var(--font-sans)",
            fontSize: "2.5rem",
            fontWeight: 300,
            color: "var(--black)",
            textDecoration: "none",
            padding: "1rem 0",
            borderBottom: "1px solid var(--border)",
          }}>
            <span style={{ color: "var(--mid)", fontSize: "0.75rem", marginRight: "1rem" }}>0{i + 1}</span>
            {link.label}
          </Link>
        ))}
      </div>
    </>
  );
}
