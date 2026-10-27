import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
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



3. **pastel-navy.vercel.app** — Wedding makeup artist portfolio with HoneyBook integration. Her primary lead source now.

4. **LumoLearning** — Educational game platform for kids. 6 games, progress tracking, dashboard. (Dev: 20% — not yet public)

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

const AGENT_CONTENT = `Ask an AI assistant to update your address with your insurance company, and today it has exactly one way to do it: pretend to be you.

It signs in with your password, finds the profile screen, and types in the new address. To the insurer, that looks like you signing in and changing your address. It also looks exactly like someone who stole your password doing the same thing, which is the uncomfortable part.

Personal AI agents are getting good enough that people will hand them these chores. I spent a few weeks thinking through what a better arrangement would look like for a financial company, and then built a working prototype to find out where the design gets hard.

## The problem with pretending

When an agent drives a website on your behalf, everyone loses something.

- **The company can't tell you from the agent.** It can't apply different rules, and it can't spot an agent that's been compromised.
- **You can't limit what the agent does.** Once it's signed in as you, it can do anything you can.
- **The fine print gets skipped.** Surrender charges, tax warnings and lapse risks scroll past a script that only wants the Submit button.
- **A stolen session looks identical.** The signals fraud teams rely on start to look normal.

## Three ways an agent could reach a company

1. **The agent drives the website.** It works today, it breaks whenever the site changes, and it's the "before" picture.
2. **A delegated API.** You grant a scoped permission, the way open banking works, and the agent calls fixed endpoints. Safer, but every new request type needs new engineering.
3. **Agent to agent.** The company publishes an agent of its own that describes what it can do. Your agent asks in plain language and carries your permission. The company's side applies its own rules, disclosures and checks.

The third model is the interesting one for design, because it reduces to one sentence: **you delegate, the agent asks, and the company decides.**

## Five requests, ranked by risk

I worked through five things a customer might ask an agent to do with a life insurance and annuity company: pay a premium, change an address, start required distributions from an IRA, take a policy loan, and make a withdrawal.

Every one of them moves through the same seven stages: intent, identify, authorize, clarify and disclose, confirm, execute, and notify. What changes is how much friction each stage adds.

- **Premium payment: low risk.** Money is coming in from a bank account the company already verified. The agent can just do it, within a monthly cap you set.
- **Loan request: elevated.** Money goes out, but to your own bank, and it can be repaid. You still sign the loan agreement yourself.
- **Address change: high.** More on this one below.
- **Disbursement: high.** Recurring money out with tax consequences. You choose the tax withholding.
- **Withdrawal: high.** Hard to reverse, with possible surrender charges, taxes and a smaller guaranteed benefit. You see the real net amount before anything moves.

## The surprising one: changing your address

I expected withdrawals to be the hardest case. The address change turned out to be the most interesting.

It looks like housekeeping. But changing the mailing address is a common first step in an account takeover: mail stops reaching the real owner, and then the money moves. So in the model, an address change always needs the owner's approval on their own device, a notice goes to the old address, and money out is paused for 10 days.

That one rule catches the pattern that matters most. In the prototype, an agent that changes the address and then immediately asks for a withdrawal gets the withdrawal held for review, and is told plainly that nothing it does will speed that up.

## The principles I landed on

- **Delegate, don't impersonate.** The agent acts as itself, carrying a mandate you granted, never your password.
- **Confirm on the owner's device.** Risky steps are approved with a passkey or Face ID in the company's app. Typing "yes" to the agent isn't consent.
- **The company speaks for itself.** Disclosures travel word for word. The agent can explain them, but it can't paraphrase them away.
- **Simple requests can hide risk.** Friction should match the actual risk, not how complicated the request looks.
- **Always tell the owner.** Every action is reported through the company's own channels, whoever started it.
- **Easy to see, easy to stop.** One screen shows everything your agent did, and one tap revokes its access.

## Building it to find out

Maps and principles are cheap. I wanted to know what breaks, so I built a working prototype for a fictional insurer called Altamere Life. It has a rules engine, a phone app where the owner approves requests, and a connection that lets an AI agent like Claude act on the owner's behalf using a mandate token instead of a password.

Three things only became obvious once it was running.

**The agent is a user too.** When a request is held or waiting for approval, the gateway tells the agent what's happening and what it can and can't do next. Writing those messages turned out to be UX writing for a non-human reader. Get it wrong and the agent keeps retrying, or tells the customer something misleading.

**Approval has to be checked twice.** Things change between the moment an agent asks and the moment a person taps Approve. If the address changed in between, a withdrawal that looked fine a minute ago shouldn't go through. The rules run again at the moment of approval.

**Disclosures are a design problem, not a legal attachment.** When the agent is the one talking, the company's exact words have to reach the person intact, at the moment they're deciding. That means they're part of the conversation design, not a link at the bottom of a form.

## What's still open

The prototype simulates the hard infrastructure: real passkeys, verifying which agent is actually calling, and signed, tamper-proof mandates. Payments are starting to get standards for agents. Servicing requests like these, at insurers, banks and brokerages, mostly haven't been addressed yet.

## Why this matters to designers

For most of my career, the interface has been a screen. In an agent-to-agent world, a lot of the experience happens in a conversation between two pieces of software, and the design work moves to the moments where a person has to step in: what they see, when they see it, and what they're being asked to decide.

The best interface may be no interface at all, right up until the moment it matters most. Those moments deserve the most design attention.

You can see the experience map, screenshots and how it was built in the [Altamere Agent Gateway case study](/case-studies/altamere).

*Altamere Life and everything in the prototype are fictional.*`;

type Post = {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  content: string;
};

const posts: Record<string, Post> = {
  "when-your-ai-agent-calls-your-insurer": {
    excerpt: "What should happen when your AI agent asks your insurance company to change your address or move money? A design model for agent-to-agent requests, and what I learned building it.",
    title: "When Your AI Agent Calls Your Insurer",
    date: "October 26, 2026",
    category: "Product Thinking",
    readTime: "6 min read",
    content: AGENT_CONTENT,
  },
  "openclaw-digital-studio": {
    excerpt: "How I think about infrastructure, automation, and the parts of studio work that should stay human.",
    title: "Building a One-Person Digital Studio with OpenClaw",
    date: "April 14, 2026",
    category: "Studio & Process",
    readTime: "15 min read",
    content: OPENCLAW_CONTENT,
  },
  "wcag-accessibility-checklist": {
    excerpt: "A practical checklist for product teams designing and building toward WCAG 2.1 AA.",
    title: "WCAG 2.1 AA Accessibility Checklist",
    date: "April 12, 2026",
    category: "Accessibility",
    readTime: "8 min read",
    content: WCAG_CONTENT,
  },
};

/** Line-based Markdown subset: ## headings, - and 1. lists, **bold**, [links](url), paragraphs. */
function renderPost(content: string) {
  const inline = (text: string) =>
    text
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.+?)\*/g, "<em>$1</em>")
      .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_m, label: string, href: string) =>
        href.startsWith("/")
          ? `<a href="${href}" style="color: var(--accent-tertiary)">${label}</a>`
          : `<a href="${href}" target="_blank" rel="noopener noreferrer" style="color: var(--accent-tertiary)">${label}<span class="sr-only"> (opens in a new tab)</span></a>`
      );
  const html: string[] = [];
  let list: "ul" | "ol" | null = null;
  const closeList = () => {
    if (list) html.push(`</${list}>`);
    list = null;
  };
  for (const raw of content.trim().split("\n")) {
    const line = raw.trim();
    const bullet = line.match(/^- (.*)/);
    const numbered = line.match(/^\d+\. (.*)/);
    if (bullet || numbered) {
      const kind = bullet ? "ul" : "ol";
      if (list !== kind) {
        closeList();
        html.push(`<${kind} style="margin: 0 0 1.25rem 1.5rem; list-style: ${kind === "ul" ? "disc" : "decimal"}">`);
        list = kind;
      }
      html.push(`<li style="margin-bottom: 0.5rem">${inline((bullet ?? numbered)![1])}</li>`);
      continue;
    }
    closeList();
    if (line === "") continue;
    if (line.startsWith("## ")) {
      html.push(`<h2 style="font-size: 1.4rem; font-family: var(--font-sans); font-weight: 500; margin: 2.25rem 0 1rem; color: var(--text)">${inline(line.slice(3))}</h2>`);
    } else {
      html.push(`<p style="margin-bottom: 1.1rem">${inline(line)}</p>`);
    }
  }
  closeList();
  return html.join("");
}

export async function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) return { title: "Post not found", robots: { index: false } };
  return pageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${slug}`,
    type: "article",
    publishedTime: new Date(post.date).toISOString(),
  });
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
          <h1 style={{ fontFamily: "var(--font-sans)", fontSize: "3.5rem", fontWeight: 300, lineHeight: 1.05, marginBottom: "2rem" }}>{post.title}</h1>
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
              dangerouslySetInnerHTML={{ __html: renderPost(post.content) }}
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
