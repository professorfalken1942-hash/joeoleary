import Link from "next/link";

const evidence = [
  "12+ years in UX",
  "Financial-services product experience",
  "WCAG 2.1 AA accessibility",
  "Design systems and front-end craft",
];

const enterpriseWork = [
  {
    title: "Client Account Experiences",
    context: "Authenticated financial-product experiences for clients, advisors, and internal teams.",
    role: "Senior UX/UI design and front-end partner.",
    constraint: "Confidential product details and screens require portfolio access.",
    contribution: "Improved hierarchy, account details, support touchpoints, and accessibility across complex account views.",
    outcome: "[Add verified outcome]",
  },
  {
    title: "Digital Delivery Enrollment",
    context: "Enrollment flows tied to digital adoption and paper reduction.",
    role: "UX strategy, interaction design, and implementation support.",
    constraint: "Enterprise financial workflows with sensitive operational context.",
    contribution: "Clarified decision points, reduced ambiguity, and helped the experience move cleanly into production.",
    outcome: "[Confirm project scope]",
  },
  {
    title: "Design Systems and Reusable Patterns",
    context: "Reusable patterns for financial-service product teams.",
    role: "Pattern definition, accessibility guidance, and front-end translation.",
    constraint: "Internal standards and implementation details are not public.",
    contribution: "Turned repeated interface decisions into patterns teams could reuse.",
    outcome: "[Add verified outcome]",
  },
];

type IndependentWork = {
  title: string;
  type: string;
  href?: string;
  externalHref: string;
  problem: string;
  decision: string;
  role: string;
  outcome: string;
  stack: string;
};

const independentWork: IndependentWork[] = [
  {
    title: "Enough",
    type: "Independent product",
    href: "/case-studies/enough",
    externalHref: "https://whatsyourenough.info",
    problem: "Retirement tools often bury the first question people are trying to answer: how much is enough?",
    decision: "Built a focused calculator with visible math, private inputs, and no account funnel.",
    role: "Product design, front-end engineering, content, and launch.",
    outcome: "Designed, built, and launched.",
    stack: "Next.js, React, TypeScript, Tailwind CSS",
  },
  {
    title: "UIpen",
    type: "Independent product",
    externalHref: "https://design-debt.vercel.app",
    problem: "Product teams need a faster way to spot design debt before it slows down everyday product work.",
    decision: "Kept the product centered on scan, review, and act instead of turning it into another dashboard.",
    role: "Product design, UX engineering, front-end implementation, and launch.",
    outcome: "Designed, built, and launched.",
    stack: "Angular, TypeScript, Node.js, Prisma, Vercel",
  },
];

export default function Home() {
  return (
    <>
      <section className="home-hero page-section">
        <div className="content-wrap hero-grid">
          <div>
            <p className="eyebrow">UX Strategy · Product Design · Engineering</p>
            <h1 className="hero-title">
              Product design leadership, from strategy to shipped experience.
            </h1>
          </div>
          <div className="hero-copy">
            <p>
              I&apos;m Joe O&apos;Leary, a senior UX designer and engineer in Syracuse, NY. I work across product strategy, design systems, accessibility, and front-end implementation, mostly for complex financial experiences.
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

      <section className="evidence-strip" aria-label="Professional evidence">
        <div className="content-wrap evidence-grid">
          {evidence.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </section>

      <section id="selected-work" className="page-section selected-work">
        <div className="content-wrap">
          <div className="section-heading">
            <p className="eyebrow">Selected Work</p>
            <h2>Selected product work, from financial platforms to independent tools.</h2>
          </div>

          <div className="work-block">
            <div className="work-block-heading">
              <p className="eyebrow">Enterprise Product Work</p>
              <p>
                A few examples from financial-product work. Full case studies are available by request.
              </p>
            </div>
            <div className="enterprise-list">
              {enterpriseWork.map((project) => (
                <article key={project.title} className="enterprise-preview">
                  <h3>{project.title}</h3>
                  <dl>
                    <div>
                      <dt>Context</dt>
                      <dd>{project.context}</dd>
                    </div>
                    <div>
                      <dt>Role</dt>
                      <dd>{project.role}</dd>
                    </div>
                    <div>
                      <dt>Contribution</dt>
                      <dd>{project.contribution}</dd>
                    </div>
                  </dl>
                </article>
              ))}
            </div>
            <div className="cta-row">
              <Link className="button button-primary" href="/projects">
                View Work
              </Link>
              <Link className="button button-secondary" href="/contact?re=portfolio-access">
                Request Access
              </Link>
            </div>
          </div>

          <div className="work-block independent-block">
            <div className="work-block-heading">
              <p className="eyebrow">Independent Products</p>
              <p>
                My latest independent projects.
              </p>
            </div>
            <div className="independent-list">
              {independentWork.map((project) => (
                <article key={project.title} className="independent-preview">
                  <div>
                    <p className="project-type">{project.type}</p>
                    <h3>{project.title}</h3>
                  </div>
                  <p><strong>Problem:</strong> {project.problem}</p>
                  <p><strong>Design decision:</strong> {project.decision}</p>
                  <p><strong>Role:</strong> {project.role}</p>
                  <p className="muted-copy">Stack: {project.stack}</p>
                  <div className="link-row">
                    {project.href ? <Link href={project.href}>Read case study</Link> : null}
                    <a href={project.externalHref} target="_blank" rel="noopener noreferrer">
                      Visit live site <span className="sr-only">(opens in a new tab)</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
