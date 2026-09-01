"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/projects", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Writing" },
  { href: "/contact", label: "Contact" },
  { href: "https://studio.joeoleary.me", label: "Studio", external: true },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <style>{`
        .site-header {
          position: fixed;
          top: 0;
          width: 100%;
          z-index: 50;
          min-height: 56px;
          padding: 0 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background-color: rgba(255, 255, 255, 0.96);
          border-bottom: 1px solid var(--border);
          backdrop-filter: blur(10px);
        }
        .wordmark {
          font-family: var(--font-ultra);
          font-size: 1.18rem;
          color: var(--black);
          text-decoration: none;
        }
        .wordmark-o { color: var(--accent-tertiary); }
        .nav-desktop { display: flex; gap: 1.65rem; align-items: center; }
        .nav-link {
          position: relative;
          min-height: 44px;
          display: inline-flex;
          align-items: center;
          font-size: 0.8rem;
          font-weight: 500;
          color: var(--mid);
          text-decoration: none;
        }
        .nav-link[aria-current="page"] { color: var(--black); }
        .nav-link[aria-current="page"]::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0.7rem;
          height: 2px;
          background: var(--accent-tertiary);
        }
        .nav-link-secondary { opacity: 0.72; }
        .nav-hamburger {
          display: none;
          flex-direction: column;
          justify-content: center;
          gap: 5px;
          width: 44px;
          height: 44px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
        }
        .mobile-menu {
          position: fixed;
          inset: 0;
          z-index: 40;
          background-color: var(--white);
          display: flex;
          flex-direction: column;
          padding: 5rem 2rem 3rem;
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.2s, visibility 0.2s;
        }
        .mobile-menu[data-open="true"] {
          opacity: 1;
          visibility: visible;
        }
        .mobile-link {
          font-size: 2.8rem;
          font-weight: 300;
          color: var(--black);
          text-decoration: none;
          padding: 1rem 0;
          border-bottom: 1px solid var(--border);
        }
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
        @media (max-width: 620px) {
          .site-header { padding: 0 1.25rem; }
          .mobile-link { font-size: 2.2rem; }
        }
      `}</style>

      <header className="site-header">
        <Link className="wordmark" href="/" onClick={() => setOpen(false)} aria-label="Joseph O'Leary home">
          <span>J</span><span className="wordmark-o">o</span><span>e</span>
        </Link>

        <nav className="nav-desktop" aria-label="Primary navigation">
          {links.map((link) => {
            const active = !link.external && (pathname === link.href || pathname.startsWith(`${link.href}/`));
            return link.external ? (
              <a key={link.href} className="nav-link nav-link-secondary" href={link.href} target="_blank" rel="noopener noreferrer">
                {link.label}
              </a>
            ) : (
              <Link key={link.href} className="nav-link" href={link.href} aria-current={active ? "page" : undefined}>
                {link.label}
              </Link>
            );
          })}
        </nav>

        <button
          className="nav-hamburger"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <span style={{ display: "block", width: "22px", height: "1px", backgroundColor: "var(--black)", transition: "transform 0.2s", transform: open ? "rotate(45deg) translate(4px, 4px)" : "none" }} />
          <span style={{ display: "block", width: "22px", height: "1px", backgroundColor: "var(--black)", opacity: open ? 0 : 1, transition: "opacity 0.2s" }} />
          <span style={{ display: "block", width: "22px", height: "1px", backgroundColor: "var(--black)", transition: "transform 0.2s", transform: open ? "rotate(-45deg) translate(4px, -4px)" : "none" }} />
        </button>
      </header>

      <nav id="mobile-menu" className="mobile-menu" data-open={open} aria-label="Mobile navigation">
        {links.map((link, i) => (
          link.external ? (
            <a key={link.href} className="mobile-link" href={link.href} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>
              <span style={{ color: "var(--mid)", fontSize: "0.75rem", marginRight: "1rem" }}>0{i + 1}</span>
              {link.label}
            </a>
          ) : (
            <Link key={link.href} className="mobile-link" href={link.href} onClick={() => setOpen(false)}>
              <span style={{ color: "var(--mid)", fontSize: "0.75rem", marginRight: "1rem" }}>0{i + 1}</span>
              {link.label}
            </Link>
          )
        ))}
      </nav>
    </>
  );
}
