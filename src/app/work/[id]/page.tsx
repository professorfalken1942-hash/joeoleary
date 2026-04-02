import type { Metadata } from "next";
import Link from "next/link";

const caseStudies: Record<string, any> = {
  "01": {
    title: "Pastel — Beauty Brand Portfolio",
    category: "Web Design & UX",
    year: "2026",
    role: "UX Designer + Front-End Engineer",
    link: "https://pastelstyle.art",
    challenge: "The Pastel Beauty brand, a renowned luxury wedding makeup artist, approached us with a need to establish an online presence that would showcase their exquisite services and reflect their distinctive Scandinavian aesthetic. The portfolio site was intended to be a digital haven for brides-to-be seeking high-quality, personalized wedding makeup solutions. To further enhance the user experience, the site needed to integrate seamlessly with HoneyBook, a popular booking platform for creative professionals.",
    solution: "To tackle this challenge, we employed a mobile-first design approach, ensuring that Pastel Beauty's captivating portfolio would be accessible and enjoyable on various devices. We leveraged Next.js, a robust React framework, to build the site, ensuring optimal performance and scalability. To maintain a consistent and refined visual language across the platform, we incorporated Tailwind CSS, a utility-first CSS framework. To emphasize Pastel Beauty's unique identity, we selected a bright pink color (rgb(255, 174, 215)) as an accent hue throughout the site, complementing the Scandinavian aesthetic. This choice of color also served to immediately distinguish Pastel Beauty from competitors and create a memorable brand impression.",
    details: [
      "Next.js 16 + React 19 for fast, production-grade performance",
      "Tailwind v4 + custom CSS variables for consistent design tokens",
      "HoneyBook iframe integration (no X-Frame-Options blocking)",
      "Pink accent palette throughout (buttons, labels, CTAs)",
      "Mobile-first responsive design (48px touch targets)",
      "Sanity CMS ready for future blog content",
      "Deployed on Vercel for instant CI/CD",
    ],
    outcome: "The resulting Pastel Beauty portfolio site is a shining example of successful UX design. It has effectively captured the essence of the luxury wedding makeup artist's services, offering an intuitive and visually striking user experience. The integration with HoneyBook has streamlined the booking process, making it effortless for clients to secure appointments.",
  },
  "02": {
    title: "O'Apostrophe — Digital Studio Brand",
    category: "Design Systems & Web",
    year: "2026",
    role: "Design System Architect + Lead Developer",
    link: "https://oapostrophe.com",
    challenge: "In the dynamic world of web development, standing out as a boutique studio in a sea of competitors requires a unique and compelling digital presence. O'Apostrophe, a creative force in the industry, sought to establish an exceptional brand portfolio that not only showcased their diverse skillset but also resonated with potential clients seeking high-quality, innovative solutions. The challenge was to create a visually captivating and user-friendly website that embodied O'Apostrophe's editorial aesthetic, while ensuring seamless navigation and smooth performance through the implementation of modern technologies.",
    solution: "To address this challenge, our design team leveraged cutting-edge tools such as Next.js 16 and React 19 to ensure a robust, scalable foundation for O'Apostrophe's brand portfolio site. We adopted an 8pt grid system, ensuring optimal readability and alignment across various devices while maintaining a cohesive visual identity. To enhance usability, we adhered to touch targets of 48px, making the site easily navigable on both desktop and mobile platforms. To maintain consistency and promote efficiency in our coding practices, we employed sharp corners (0px radius) and a semantic BEM naming convention for our components. This approach enabled us to create reusable UI elements that could be easily customized or modified without compromising the overall design integrity. To highlight O'Apostrophe's diverse services, we designed Services cards that presented each offering with a number, title, description, and tags. Additionally, we implemented Pricing tier rows, providing a clear overview of O'Apostrophe's offerings and their associated costs.",
    details: [
      "Design System: 8pt spacing scale, 4pt baseline grid, 48px touch targets",
      "Components: Nav, Hero, Services (feature cards), Pricing (editorial rows), Footer",
      "Semantic BEM naming for maintainability",
      "Tailwind v4 + custom CSS variables (globals.css)",
      "1280px max content width with responsive padding",
      "WCAG 2.1 AA accessibility built-in",
      "Sanity CMS integration for dynamic content",
    ],
    outcome: "The successful implementation of our design solutions resulted in a visually striking and highly functional brand portfolio site for O'Apostrophe. The website showcases the studio's exceptional work while providing potential clients with an intuitive, user-friendly experience that underscores their commitment to innovation and quality. Through the adoption of modern technologies and thoughtful design choices, we have helped O'Apostrophe stand out in a crowded marketplace and establish a strong digital presence.",
  },
  "03": {
    title: "Adkman — Heritage Apparel Brand",
    category: "Brand Design & Editorial",
    year: "2026",
    role: "Brand Designer + UX Architect",
    link: "https://adkman.com",
    challenge: "Adkman, a vintage Adirondacks apparel brand, approached us with a unique challenge: to create an engaging editorial site that would establish a strong online presence and foster a community around its heritage-inspired products. The task was twofold: first, to design a visually appealing website that resonated with the brand's target audience; second, to implement a strategy that would gradually build an audience base in preparation for the forthcoming ecommerce phase (Phase 2).",
    solution: "To meet these challenges, we crafted a comprehensive solution utilizing modern web technologies. The website was built on Next.js 16 and React 19, ensuring smooth performance and scalability as the brand grows. We employed Tailwind v4 for efficient styling, maintaining consistency across the site while adhering to the chosen color palette: a canvas-to-forest gradient hero, forest green (#1a2e1a), iron (#2c2c2c), and canvas beige (#f0ebe0). To foster engagement, we designed an 8pt grid system with sharp corners that exuded an air of sophistication. A journal section was added to the site, providing a platform for storytelling about Adkman's heritage, values, and upcoming product launches. To further engage visitors and nurture potential customers, we implemented an email capture feature, enabling Adkman to build its audience list in preparation for Phase 2.",
    details: [
      "Design System: Forest green (#1a2e1a) primary, iron (#2c2c2c) nav, canvas beige (#f0ebe0) background",
      "Canvas-to-forest gradient hero for depth and visual interest",
      "Iron nav (not green) for contrast and readability",
      "Restrained oxblood accents (#5c2020) — whisper, not shout",
      "8pt grid + 48px touch targets",
      "About strip with 5/7 column split for hierarchy",
      "Journal preview section (Sanity CMS ready)",
      "Email capture for newsletter",
      "DNS: IONOS nameservers → Vercel",
    ],
    outcome: "The outcome of our work was a polished, user-friendly editorial site that seamlessly showcased Adkman's vintage Adirondacks apparel and the brand's rich heritage. By focusing on storytelling and audience engagement through the journal section and email capture feature, we helped establish a strong online presence for Adkman ahead of its ecommerce launch. This Phase 1 strategy not only prepared the groundwork for increased sales but also set the stage for a cohesive brand experience.",
  },
};

export function generateStaticParams() {
  return [
    { id: "01" },
    { id: "02" },
    { id: "03" },
  ];
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const study = caseStudies[id];
  return {
    title: `${study?.title || "Case Study"} — Joseph O'Leary`,
    description: study?.challenge || "Case study by Joseph O'Leary",
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const study = caseStudies[id];

  if (!study) {
    return (
      <section style={{ paddingTop: "calc(56px + 4rem)", paddingBottom: "4rem", paddingLeft: "2rem", paddingRight: "2rem" }}>
        <h1>Case Study Not Found</h1>
        <p>
          <Link href="/work">← Back to Work</Link>
        </p>
      </section>
    );
  }

  return (
    <>
      {/* Header */}
      <section style={{
        paddingTop: "calc(56px + 4rem)",
        paddingBottom: "4rem",
        paddingLeft: "2rem",
        paddingRight: "2rem",
        borderBottom: "1px solid var(--border)",
      }}>
        <div style={{ maxWidth: "900px" }}>
          <p style={{
            fontSize: "0.75rem",
            color: "var(--mid)",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            marginBottom: "1rem",
          }}>
            Case Study
          </p>
          <h1 style={{
            fontFamily: "var(--font-sans)",
            fontSize: "clamp(2rem, 5vw, 4rem)",
            fontWeight: 300,
            letterSpacing: "-0.02em",
            lineHeight: 1.05,
            marginBottom: "2rem",
          }}>
            {study.title}
          </h1>
          <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
            <div>
              <p style={{ fontSize: "0.7rem", color: "var(--mid)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.3rem" }}>
                Category
              </p>
              <p style={{ fontSize: "0.9rem" }}>{study.category}</p>
            </div>
            <div>
              <p style={{ fontSize: "0.7rem", color: "var(--mid)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.3rem" }}>
                Year
              </p>
              <p style={{ fontSize: "0.9rem" }}>{study.year}</p>
            </div>
            <div>
              <p style={{ fontSize: "0.7rem", color: "var(--mid)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.3rem" }}>
                Role
              </p>
              <p style={{ fontSize: "0.9rem" }}>{study.role}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section style={{ paddingLeft: "2rem", paddingRight: "2rem", maxWidth: "900px" }}>
        {/* Challenge */}
        <div style={{ padding: "4rem 0", borderBottom: "1px solid var(--border)" }}>
          <p style={{
            fontSize: "0.75rem",
            color: "var(--mid)",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            marginBottom: "1.5rem",
          }}>
            Challenge
          </p>
          <p style={{
            fontFamily: "var(--font-sans)",
            fontSize: "1.1rem",
            fontWeight: 300,
            lineHeight: 1.8,
            color: "var(--black)",
          }}>
            {study.challenge}
          </p>
        </div>

        {/* Solution */}
        <div style={{ padding: "4rem 0", borderBottom: "1px solid var(--border)" }}>
          <p style={{
            fontSize: "0.75rem",
            color: "var(--mid)",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            marginBottom: "1.5rem",
          }}>
            Solution
          </p>
          <p style={{
            fontFamily: "var(--font-sans)",
            fontSize: "1.1rem",
            fontWeight: 300,
            lineHeight: 1.8,
            color: "var(--black)",
            marginBottom: "2rem",
          }}>
            {study.solution}
          </p>
          <ul style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}>
            {study.details.map((detail: string, i: number) => (
              <li key={i} style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.95rem",
                fontWeight: 300,
                lineHeight: 1.6,
                color: "var(--mid)",
                paddingLeft: "1.5rem",
                position: "relative",
              }}>
                <span style={{
                  position: "absolute",
                  left: 0,
                  color: "var(--border)",
                }}>
                  ▪
                </span>
                {detail}
              </li>
            ))}
          </ul>
        </div>

        {/* Outcome */}
        <div style={{ padding: "4rem 0", borderBottom: "1px solid var(--border)" }}>
          <p style={{
            fontSize: "0.75rem",
            color: "var(--mid)",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            marginBottom: "1.5rem",
          }}>
            Outcome
          </p>
          <p style={{
            fontFamily: "var(--font-sans)",
            fontSize: "1.1rem",
            fontWeight: 300,
            lineHeight: 1.8,
            color: "var(--black)",
          }}>
            {study.outcome}
          </p>
        </div>

        {/* CTA */}
        <div style={{ padding: "4rem 0" }}>
          <a href={study.link} target="_blank" rel="noopener noreferrer" style={{
            fontFamily: "var(--font-sans)",
            fontSize: "0.8rem",
            fontWeight: 500,
            color: "var(--white)",
            backgroundColor: "var(--black)",
            padding: "0.75rem 1.5rem",
            textDecoration: "none",
            display: "inline-block",
            marginBottom: "2rem",
          }}>
            View Live Site →
          </a>
          <p style={{ fontSize: "0.75rem", color: "var(--mid)", lineHeight: 1.6 }}>
            <Link href="/work" style={{ color: "var(--black)", textDecoration: "none", borderBottom: "1px solid var(--black)", paddingBottom: "1px" }}>
              ← Back to Work
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
