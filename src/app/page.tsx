import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { DEFAULT_DESCRIPTION, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({ description: DEFAULT_DESCRIPTION, path: "/" });

const evidence = [
  "20+ years in design",
  "12 years in financial services at AXA and Equitable",
  "WCAG 2.1 AA accessibility practice",
  "A designer who ships production code",
];

const trootoneFeatures = [
  { title: "One tap to start", body: "No sign-up, no download, no settings to work through." },
  { title: "Automatic string detection", body: "Play any string. Nothing to tap between strings." },
  { title: "Analog-style needle", body: "Spring physics settle the reading instead of flickering." },
  { title: "Plain-language direction", body: "\u201cTune up \u00b7 14\u00a2 flat,\u201d then a chime when it\u2019s in tune." },
  { title: "Five tunings", body: "Standard, Half Step Down, Drop D, Open G, and DADGAD." },
  { title: "Private and offline", body: "Audio never leaves the phone. Installs to the home screen." },
];

const trootoneShots = [
  { src: "/case-studies/trootone/splash.jpg", alt: "Trootone splash screen: the glowing neon Trootone wordmark above a small tuning needle" },
  { src: "/case-studies/trootone/intune.jpg", alt: "Trootone with the A string in tune: the needle is centered and green" },
];

const dashboardFeatures = [
  { title: "Chores that age", body: "Each chore has an interval, and its bar drifts from green to red as it goes stale." },
  { title: "Tap to finish, tap to undo", body: "One tap logs it. A mis-tap on the wall costs nothing." },
  { title: "Family calendar", body: "Fills itself from a shared Google Calendar feed." },
  { title: "Groceries and lists", body: "Check items off, then clear the cart in one tap." },
  { title: "Weather and a news brief", body: "Open-Meteo and RSS feeds. No paid APIs." },
  { title: "Built for the wall", body: "One household passcode keeps a tablet signed in for a year. Works on phones too." },
];

type TrackLink = { label: string; href: string; external?: boolean };

const tracks: { number: string; label: string; summary: string; links: TrackLink[] }[] = [
  {
    number: "01",
    label: "Solving complexity",
    summary: "A decade of authenticated financial-services experiences at AXA and Equitable. Most of it is confidential, so I share it responsibly.",
    links: [
      { label: "Enterprise work", href: "/projects#enterprise" },
      { label: "Request a walkthrough", href: "/contact?re=portfolio-access" },
    ],
  },
  {
    number: "02",
    label: "Connecting design and engineering",
    summary: "I designed and built the front end of Equitable's public retirement calculator, replacing a form people abandoned.",
    links: [
      { label: "Try the live calculator", href: "https://equitable.com/individuals/retirement-savings-plans/retirement-planning-calculator", external: true },
      { label: "Case study (password)", href: "/case-studies/equitable-retirement-calculator" },
    ],
  },
  {
    number: "03",
    label: "Building what I believe in",
    summary: "Products I noticed a need for, then designed, built, and shipped on my own.",
    links: [
      { label: "Enough", href: "/case-studies/enough" },
      { label: "UIpen", href: "/case-studies/uipen" },
      { label: "Trootone", href: "/case-studies/trootone" },
      { label: "Altamere Agent Gateway", href: "/case-studies/altamere" },
    ],
  },
];

export default function Home() {
  return (
    <>
      <section className="home-hero page-section">
        <div className="content-wrap">
          <p className="eyebrow">Joe O&apos;Leary · Product Designer</p>
          <h1 className="hero-title">
            I understand problems, question complexity, and build better ways forward.
          </h1>
          <div className="hero-copy">
            <p>
              I don&apos;t just design interfaces. I combine UX strategy, systems thinking, and hands-on engineering to turn complicated problems into experiences that make sense.
            </p>
            <div className="cta-row" aria-label="Primary actions">
              <Link className="button button-primary" href="#selected-work">
                View Selected Work
              </Link>
              <Link className="button button-secondary" href="/about">
                About Joe
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="evidence-strip" aria-label="Experience at a glance">
        <div className="content-wrap evidence-grid">
          {evidence.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </section>

      <section className="page-section featured" aria-labelledby="featured-heading">
        <div className="content-wrap featured-grid">
          <div>
            <p className="eyebrow">Featured Project</p>
            <h2 id="featured-heading" className="featured-title">Trootone</h2>
            <p className="featured-lede">
              A free guitar tuner that runs in your phone&apos;s browser. I designed and built all of it, from the interaction model to the pitch detection, to get ads, settings, and jittery readouts out of the way.
            </p>
            <ul className="feature-list">
              {trootoneFeatures.map((feature) => (
                <li key={feature.title}>
                  <h3>{feature.title}</h3>
                  <p>{feature.body}</p>
                </li>
              ))}
            </ul>
            <div className="cta-row">
              <Link className="button button-primary" href="/case-studies/trootone">
                Read the Case Study
              </Link>
              <a className="button button-secondary" href="https://trootone.vercel.app" target="_blank" rel="noopener noreferrer">
                Try Trootone <span className="sr-only">(opens in a new tab)</span>
              </a>
            </div>
          </div>
          <div className="featured-shots">
            {trootoneShots.map((shot) => (
              <div key={shot.src} className="featured-phone">
                <Image src={shot.src} alt={shot.alt} fill sizes="(max-width: 620px) 45vw, 240px" className="object-cover object-top" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section featured featured-alt" aria-labelledby="dashboard-heading">
        <div className="content-wrap featured-grid featured-reverse">
          <div className="dashboard-shots">
            <div className="dashboard-tablet">
              <Image src="/case-studies/home-dashboard/tablet-home.jpg" alt="Home dashboard on a wall tablet: clock, chores that need doing with colored freshness bars, weather forecast, grocery count, and upcoming events (demo data)" fill sizes="(max-width: 900px) 100vw, 560px" className="object-cover object-top" />
            </div>
            <div className="dashboard-phone">
              <Image src="/case-studies/home-dashboard/phone-home.jpg" alt="The same dashboard on a phone, with chores stacked and a bottom tab bar (demo data)" fill sizes="160px" className="object-cover object-top" />
            </div>
          </div>
          <div>
            <p className="eyebrow">Featured Project</p>
            <h2 id="dashboard-heading" className="featured-title">Home Dashboard</h2>
            <p className="featured-lede">
              A touchscreen display for the wall at home: chores, the family calendar, groceries, weather, and a short news brief, readable at a glance. I designed and built it with Next.js and Postgres.
            </p>
            <ul className="feature-list">
              {dashboardFeatures.map((feature) => (
                <li key={feature.title}>
                  <h3>{feature.title}</h3>
                  <p>{feature.body}</p>
                </li>
              ))}
            </ul>
            <div className="cta-row">
              <Link className="button button-secondary" href="/contact">
                Ask for a Walkthrough
              </Link>
              <p className="muted-copy">It runs our household, so it&apos;s passcode-protected. Screenshots use demo data.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="selected-work" className="page-section" aria-labelledby="selected-work-heading">
        <div className="content-wrap">
          <h2 id="selected-work-heading" className="eyebrow">Selected Work</h2>
          <div className="track-grid">
            {tracks.map((track) => (
              <article key={track.number} className="track">
                <p className="eyebrow"><span className="track-number">{track.number}</span> {track.label}</p>
                <p className="track-summary">{track.summary}</p>
                <ul className="track-links">
                  {track.links.map((link) => (
                    <li key={link.label}>
                      {link.external ? (
                        <a href={link.href} target="_blank" rel="noopener noreferrer">
                          {link.label} <span className="sr-only">(opens in a new tab)</span>
                        </a>
                      ) : (
                        <Link href={link.href}>{link.label}</Link>
                      )}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
