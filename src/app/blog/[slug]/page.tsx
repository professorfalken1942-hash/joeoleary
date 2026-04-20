import type { Metadata } from "next";
import Link from "next/link";

const OPENCLAW_CONTENT = `How do you run a premium digital studio as a single person without burning out?

For the last month, I've been experimenting with OpenClaw — a personal infrastructure layer that sits between me and the actual work. The idea is simple: eliminate friction from the repetitive parts so I can focus on the craft.

This essay outlines how we architected the studio, what tools power it, and what I've learned about scaling expertise without scaling headcount.

## The Problem: Scaling Without Chaos

When you're a solo operator, you face a paradox:
- You need to be available for client work (design, engineering, strategy)
- You also need systems to run the business (email, deployments, invoicing)
- You have a finite amount of energy each day

Most solo practitioners solve this by burning out or staying small.

I chose a different path: automation through infrastructure.

## The Stack

The studio runs on a few core pieces:

**Vercel + Next.js**: Every site lives on Vercel with auto-deployments from git. That means I build once, commit, and it ships. No manual deployment ceremony. This saves 10+ minutes per site per week.

**Sanity CMS**: For sites that need content management, I use Sanity. One configuration, all sites inherit it. The user-facing interface is clean, the backend is powerful.

**OpenClaw + Personal Agent**: This is the secret sauce. OpenClaw gives me a personal AI agent running on my infrastructure. It handles deployments, monitoring, GitHub management, and third-party integrations. The agent is like having a junior developer who never sleeps. It doesn't replace me—it replaces context-switching.

**AI-Assisted Copywriting**: For bulk content, I use local Ollama inference plus optional Haiku API polish. This dropped content creation costs from $0.15 per post to $0.01. Speed increased 3x.

## The Projects

We've built four live properties:

1. **joeoleary.me** — Portfolio. 3 case studies, password-protected, updated weekly. This is the engine for getting hired.

2. **oapostrophe.com** — The studio brand. Services, pricing, and a full case study. This is the sales funnel.

3. **pastel-navy.vercel.app** — Wedding makeup artist portfolio with HoneyBook integration. Her primary lead source now.

4. **lumolearning-app.vercel.app** — Educational game platform for kids. 6 games, progress tracking, dashboard.

Each site is independent but shares infrastructure, design systems, and CI/CD.

## Operational Insights

After a month, here's what I've learned:

**Build Locally, Test Locally, Deploy Confidently**

Always run npm run build locally first. Catch 90% of errors before production.

**Design Systems are Force Multipliers**

All our sites use 8pt grid, 48px touch targets, semantic HTML, BEM naming. New sites launch in days, not weeks.

**Boring Infrastructure is Good Infrastructure**

No serverless databases. No event streaming. Just Next.js, Vercel, Sanity, and git. Boring means reliable.

**AI Automation Has Limits**

The agent is great at deployment and orchestration. It's terrible at design and strategy. The split is clear.

## The Numbers

After one month:
- 4 live sites
- 12 deployments
- 0 manual failures
- 3 case studies written
- 40+ hours saved on deployment alone

Cost per month:
- Vercel: 25
- Sanity: 20
- Domains: 15
- OpenClaw: 50
- API calls: 30
Total: 140 per month

That's cheaper than a junior developer salary for a week.

## What's Next

The infrastructure is automated. Next layer is growth: more case studies, testimonials, hiring if demand justifies it.

## The Real Lesson

The biggest mistake solo practitioners make is treating their business like a freelance job. Automate the admin so you have 40 hours for what only you can do—the creative work.

Tools like OpenClaw, Vercel, and AI make this possible. You don't need to be technical to run a modern studio. Just be intentional about what you automate.

That's the experiment. Three months in, it's working.`;

const WCAG_CONTENT = `Most accessibility audits I've seen follow the same pattern: someone runs an automated tool, flags a handful of color contrast issues, and calls it done. That's not accessibility. That's checkbox theater.

Real WCAG 2.1 AA compliance is about designing for the full range of human ability — low vision, motor impairment, cognitive differences, screen reader users. It's one of the most under-invested areas in product design, and also one of the highest-leverage places a senior designer can add value.

After ten years building financial products, healthcare platforms, and consumer apps, here's the checklist I actually use.

## 1. Perceivable

Users must be able to perceive all content. Nothing should be invisible to their senses.

**Color Contrast**
- Body text: minimum 4.5:1 contrast ratio against background
- Large text (18px bold or 24px regular): minimum 3:1
- UI components (buttons, inputs, focus indicators): minimum 3:1
- Never use color alone to convey information

**Images and Media**
- Every meaningful image has descriptive alt text
- Decorative images use alt="" (empty, not missing)
- Complex images (charts, diagrams) have extended descriptions
- Videos have captions; audio has transcripts

**Text and Sizing**
- Text can be resized up to 200% without loss of content or functionality
- No text is baked into images (unless it's a logo)
- Line height is at least 1.5x font size; paragraph spacing at least 2x font size

## 2. Operable

Users must be able to operate the interface — keyboard, voice, switch access, whatever they use.

**Keyboard Navigation**
- Every interactive element is reachable by Tab key
- Focus order follows logical reading order
- No keyboard traps (user can always Tab out)
- Skip navigation link at the top of every page

**Focus Indicators**
- Every focused element has a visible focus ring
- Focus ring meets 3:1 contrast against adjacent colors
- Never use outline: none without a replacement style
- Focus indicators are at least 2px thick

**Timing**
- No content auto-advances without warning
- Users can pause, stop, or hide any moving content
- Session timeouts give at least 20 seconds warning with option to extend

**Touch and Pointer**
- Touch targets are at least 44x44px (I use 48px minimum)
- Sufficient spacing between adjacent targets
- No functionality requires complex gestures without a simpler alternative

## 3. Understandable

Interfaces need to make sense. Predictability and error prevention matter enormously.

**Language and Reading Level**
- Page language is declared in the HTML lang attribute
- Unusual words or jargon are defined or explained
- Abbreviations are expanded on first use

**Predictable Behavior**
- Navigation is consistent across pages
- Components behave the same way in the same contexts
- No unexpected context changes on focus or input

**Error Handling**
- Errors are identified in text, not just color
- Error messages describe what went wrong and how to fix it
- For important submissions (payments, account changes), users can review before confirming
- Auto-complete is enabled on standard form fields (name, email, address)

**Forms**
- Every input has a visible, persistent label (not just placeholder text)
- Labels are programmatically associated via for/id or aria-labelledby
- Required fields are marked — both visually and programmatically
- Instructions appear before the field, not after

## 4. Robust

Content must work reliably across different browsers, devices, and assistive technologies.

**Semantic HTML**
- Use native elements where possible: button, nav, main, header, footer, article
- Headings follow logical hierarchy: one h1, h2s for sections, h3s for subsections
- Lists use ul/ol/li, not divs styled to look like lists
- Tables use th, caption, and scope attributes

**ARIA When Necessary**
- ARIA roles supplement — never replace — semantic HTML
- aria-label and aria-labelledby are used on elements with no visible text
- aria-live regions announce dynamic content changes
- aria-expanded, aria-selected, aria-checked reflect current component state

**Interactive Components**
- Custom components (dropdowns, modals, tabs) implement full keyboard patterns
- Modal dialogs trap focus while open and return focus on close
- Comboboxes follow ARIA Authoring Practices patterns

## 5. Common Patterns Worth Getting Right

**Images of Text**: If you're rendering text as an SVG or image for visual reasons, provide a text alternative. Exception: logos.

**Link Text**: "Click here" and "read more" are meaningless out of context. Describe where the link goes. "Read the WCAG 2.1 guidelines" is correct. "Click here" is not.

**Icon Buttons**: A button that's just an icon needs aria-label. A magnifying glass icon button should have aria-label="Search", not nothing.

**Placeholder Text**: Placeholder disappears on input. It's not a label. Use both a visible label and placeholder if needed.

**Disabled States**: Disabled elements are typically excluded from the accessibility tree. If users need to understand why something is disabled, consider using aria-disabled instead, which keeps the element in focus order.

**Motion**: Respect prefers-reduced-motion. Any animation should pause or simplify when that media query is true.

## 6. Testing Stack

Automated tools catch about 30% of issues. The rest requires human judgment.

- **axe DevTools** — Browser extension, catches the mechanical stuff
- **NVDA + Chrome** (Windows) or **VoiceOver + Safari** (Mac/iOS) — Real screen reader testing
- **Color Contrast Analyzer** — Desktop tool for spot-checking
- **Keyboard-only navigation** — Unplug the mouse and try to complete core tasks
- **200% zoom** — Resize the browser and check for overflow or broken layouts

## The Honest Take

Accessibility isn't a sprint at the end of a project. It's a design constraint that shapes decisions from the start — color palette, type scale, interaction patterns, component architecture.

When I'm starting a new project, I establish contrast ratios before I pick brand colors. I define focus styles before I write component CSS. That's the only way to make it stick.

The spec is dense. But in practice, 80% of issues come from five things: missing alt text, poor color contrast, unlabeled form inputs, no keyboard focus styles, and inaccessible custom components.

Get those right and you're most of the way there.`;

const posts: Record<string, any> = {
  "openclaw-digital-studio": {
    title: "Building a One-Person Digital Studio with OpenClaw",
    date: "April 14, 2026",
    category: "Studio & Process",
    readTime: "15 min read",
    content: OPENCLAW_CONTENT,
  },
  "wcag-accessibility-checklist": {
    title: "WCAG 2.1 AA Accessibility Checklist",
    date: "April 12, 2026",
    category: "Accessibility",
    readTime: "8 min read",
    content: WCAG_CONTENT,
  },
  "design-systems-scale": {
    title: "Building Design Systems That Scale",
    date: "April 5, 2026",
    category: "Design Systems",
    readTime: "12 min read",
  },
  "ux-financial-products": {
    title: "UX Principles for Financial Products",
    date: "March 28, 2026",
    category: "UX Strategy",
    readTime: "10 min read",
  },
};

export async function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = posts[slug];
  return {
    title: `${post?.title || "Post"} — Joseph O'Leary`,
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts[slug];

  if (!post) {
    return (
      <section style={{ paddingTop: "calc(56px + 4rem)", paddingBottom: "4rem", paddingLeft: "2rem", paddingRight: "2rem" }}>
        <h1>Post Not Found</h1>
        <Link href="/blog">Back to Blog</Link>
      </section>
    );
  }

  return (
    <>
      <section style={{ paddingTop: "calc(56px + 4rem)", paddingBottom: "4rem", paddingLeft: "2rem", paddingRight: "2rem", borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: "800px" }}>
          <p style={{ fontSize: "0.75rem", color: "var(--mid)", textTransform: "uppercase", marginBottom: "1rem" }}>{post.category}</p>
          <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2rem, 5vw, 4rem)", fontWeight: 300, lineHeight: 1.05, marginBottom: "2rem" }}>{post.title}</h1>
          <div style={{ display: "flex", gap: "2rem" }}>
            <p style={{ fontSize: "0.75rem", color: "var(--mid)" }}>{post.date}</p>
            <p style={{ fontSize: "0.75rem", color: "var(--mid)" }}>{post.readTime}</p>
          </div>
        </div>
      </section>

      <section style={{ paddingLeft: "2rem", paddingRight: "2rem", paddingBottom: "4rem" }}>
        <div style={{ maxWidth: "800px", fontSize: "1rem", lineHeight: 1.8, color: "var(--text)" }}>
          {post.content ? (
            <div
              dangerouslySetInnerHTML={{
                __html: post.content
                  .trim()
                  .split("\n")
                  .map((line: string) => {
                    if (line.startsWith("##")) {
                      return `<h2 style="font-size: 1.4rem; font-family: var(--font-serif); font-weight: 400; margin: 2rem 0 1rem; color: var(--text)">${line.replace("## ", "")}</h2>`;
                    }
                    if (line.startsWith("- ")) {
                      return `<li style="margin-left: 1.5rem; margin-bottom: 0.5rem">${line.replace("- ", "")}</li>`;
                    }
                    if (line.trim() === "") {
                      return "<br />";
                    }
                    return `<p style="margin-bottom: 1rem">${line}</p>`;
                  })
                  .join(""),
              }}
            />
          ) : (
            <p style={{ marginBottom: "2rem" }}>Full article coming soon.</p>
          )}
          <Link href="/blog" style={{ borderBottom: "1px solid var(--text)", color: "var(--text)", textDecoration: "none" }}>Back to Blog</Link>
        </div>
      </section>
    </>
  );
}
