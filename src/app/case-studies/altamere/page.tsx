import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Altamere Agent Gateway Case Study",
  description: "A working prototype of how a personal AI agent could service an insurance account without a password, designed and built by Joseph O'Leary.",
  alternates: {
    canonical: "/case-studies/altamere",
  },
};

// Set once the prototype is deployed.
const LIVE_URL: string | null = null;

const questioned = [
  {
    assumption: "An agent should use the website like a person.",
    decision: "An agent that signs in as you is indistinguishable from someone who stole your session. Here the agent acts as itself, carrying a mandate you granted, never your password.",
  },
  {
    assumption: "Simple requests are safe requests.",
    decision: "An address change looks like housekeeping, but it's often the first step of an account takeover. It gets more friction than a premium payment, and it pauses money out for 10 days.",
  },
  {
    assumption: "Saying yes in the chat is consent.",
    decision: "Anything risky is confirmed by the owner on their own device, in the company's app. The agent can ask. It can't approve its own requests.",
  },
  {
    assumption: "The agent can summarize the fine print.",
    decision: "Disclosures travel from the company word for word, and the owner sees them again before approving. The agent can explain them, but it can't paraphrase them away.",
  },
];

const tiers = [
  { request: "Premium payment", risk: "Low", handling: "Completes on its own, within the mandate's monthly cap" },
  { request: "Loan request", risk: "Elevated", handling: "Quote freely; the owner e-signs the loan agreement" },
  { request: "Address change", risk: "High", handling: "Owner approves; notice to the old address; 10-day pause on money out" },
  { request: "Disbursement", risk: "High", handling: "Owner approves and chooses tax withholding" },
  { request: "Withdrawal", risk: "High", handling: "Owner sees the net amount, charges and rider effect; call-back over $25,000" },
];

export default function AltamereCaseStudy() {
  return (
    <div className="case-study-shell min-h-screen bg-white">
      {/* Hero */}
      <section className="px-6 md:px-12 pt-36 md:pt-48 pb-20 md:pb-28">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-12 gap-8 md:gap-12">
            <p className="md:col-span-2 text-xs text-gray-500 uppercase tracking-[0.22em] pt-3">Independent Concept</p>
            <div className="md:col-span-10">
              <h1 className="text-5xl md:text-7xl font-serif font-light mb-8 leading-[1.02] max-w-5xl">
                Altamere Agent Gateway
                <span className="block mt-3 text-3xl md:text-5xl"><em>When your AI agent calls your insurer</em></span>
              </h1>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-6 mt-14 pt-8 border-t border-gray-200">
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">Type</p>
                  <p className="text-sm font-medium">Independent concept</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">Role</p>
                  <p className="text-sm font-medium">Designer &amp; developer</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">Year</p>
                  <p className="text-sm font-medium">2026</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">Status</p>
                  {LIVE_URL ? (
                    <a className="text-sm font-medium underline underline-offset-4" href={LIVE_URL} target="_blank" rel="noopener noreferrer">
                      Live prototype <span className="sr-only">(opens in a new tab)</span>
                    </a>
                  ) : (
                    <p className="text-sm font-medium">Working prototype</p>
                  )}
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-8 max-w-2xl">
                Altamere Life, its customer, and every account, rate and disclosure shown here are fictional.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-gray-50 border-y border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-12 gap-8 md:gap-12">
            <div className="md:col-span-3">
              <p className="text-xs text-gray-500 uppercase tracking-[0.22em] mb-4">01 / Context</p>
              <h2 className="text-3xl md:text-4xl font-serif font-light">The Challenge</h2>
            </div>
            <div className="md:col-span-8 md:col-start-5 max-w-3xl">
              <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-6">
                Personal AI agents are starting to act for people. But if you ask one to update your address or move money at a financial company today, its only option is to sign in as you and click through the website.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-gray-700">
                That&rsquo;s bad for everyone. The company can&rsquo;t tell you from the agent, you can&rsquo;t limit what it does, and a stolen session looks exactly the same. I wanted to design a better arrangement for a fictional life insurance and annuity company, across five real requests: a premium payment, an address change, a disbursement, a loan and a withdrawal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Questioned */}
      <section className="py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-12 gap-8 md:gap-12">
            <div className="md:col-span-3">
              <p className="text-xs text-gray-500 uppercase tracking-[0.22em] mb-4">02 / Judgment</p>
              <h2 className="text-3xl md:text-4xl font-serif font-light">What I questioned</h2>
            </div>
            <div className="md:col-span-8 md:col-start-5">
              <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-14 max-w-3xl">
                The model I landed on fits in one line: you delegate, the agent asks, and the company decides.
              </p>
              <div className="grid md:grid-cols-2 gap-x-12 gap-y-12">
                {questioned.map((q) => (
                  <div key={q.assumption} className="border-t border-gray-300 pt-5">
                    <p className="text-xs text-gray-500 uppercase tracking-wide mb-3">Assumption</p>
                    <h3 className="text-xl font-serif mb-3">{q.assumption}</h3>
                    <p className="text-base leading-relaxed text-gray-700">{q.decision}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-gray-50 border-y border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-12 gap-8 md:gap-12 mb-14">
            <div className="md:col-span-3">
              <p className="text-xs text-gray-500 uppercase tracking-[0.22em] mb-4">03 / Experience map</p>
              <h2 className="text-3xl md:text-4xl font-serif font-light">Five requests, one journey</h2>
            </div>
            <div className="md:col-span-8 md:col-start-5 max-w-3xl min-w-0">
              <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-6">
                I started with a map rather than screens. Every request moves through the same seven stages: intent, identify, authorize, clarify and disclose, confirm, execute, and notify. What changes is how much friction each stage adds, and that depends on risk.
              </p>
              <div className="border-t border-gray-300 text-sm">
                <div className="hidden md:grid md:grid-cols-[10rem_6rem_minmax(0,1fr)] gap-4 py-3 text-xs text-gray-500 uppercase tracking-wide" aria-hidden="true">
                  <span>Request</span>
                  <span>Risk</span>
                  <span>How it&rsquo;s handled</span>
                </div>
                <ul>
                  {tiers.map((t) => (
                    <li key={t.request} className="grid grid-cols-[minmax(0,1fr)_auto] md:grid-cols-[10rem_6rem_minmax(0,1fr)] gap-x-4 gap-y-1 py-3 border-t border-gray-200">
                      <span className="font-medium">{t.request}</span>
                      <span className="text-gray-700 text-right md:text-left">
                        <span className="sr-only">Risk: </span>{t.risk}
                      </span>
                      <span className="col-span-2 md:col-span-1 text-gray-700">{t.handling}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <figure>
            <div className="relative aspect-[2240/1890] overflow-hidden border border-gray-200 bg-white">
              <Image src="/case-studies/altamere/map-address.jpg" alt="Experience map for an address change: a high-risk tag, the seven-stage journey with the authorize, confirm and notify stages highlighted, a sample exchange between owner, agent and Altamere, and the controls Altamere applies" fill sizes="(max-width: 1200px) 100vw, 1150px" className="object-contain" />
            </div>
            <figcaption className="text-xs uppercase tracking-[0.18em] text-gray-600 mt-4">The address change, mapped. Highlighted stages are where friction is added on purpose.</figcaption>
          </figure>
        </div>
      </section>

      {/* The work */}
      <section className="py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-[0.22em] mb-4">04 / The Work</p>
              <h2 className="text-4xl md:text-5xl font-serif font-light">A gateway, a phone, and an agent</h2>
            </div>
            <p className="text-sm text-gray-600 max-w-sm leading-relaxed">
              The agent&rsquo;s calls and the gateway&rsquo;s decisions on the left. The owner&rsquo;s phone on the right.
            </p>
          </div>

          <figure className="mb-16 md:mb-20">
            <div className="relative aspect-[1280/900] overflow-hidden border border-gray-200 bg-gray-50">
              <Image src="/case-studies/altamere/console-pending.jpg" alt="Gateway log showing a balance read, an allowed premium payment, and an address change that needs the owner; the phone shows the address change waiting for approval" fill sizes="(max-width: 1200px) 100vw, 1150px" className="object-contain" />
            </div>
            <figcaption className="text-xs uppercase tracking-[0.18em] text-gray-600 mt-4">01 / The payment goes through. The address change waits for the owner.</figcaption>
          </figure>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-16 mb-16 md:mb-20 max-w-3xl mx-auto">
            <figure>
              <div className="relative aspect-[780/1570] max-w-[320px] mx-auto overflow-hidden">
                <Image src="/case-studies/altamere/phone-address.jpg" alt="Owner's phone: approve the address change, from 88 Westcott St to 14 Linden St on all three contracts, with Altamere's security disclosure and an Approve with Face ID button" fill sizes="(max-width: 640px) 100vw, 320px" className="object-contain" />
              </div>
              <figcaption className="text-xs uppercase tracking-[0.18em] text-gray-600 mt-4 text-center">02 / Approved on the owner&rsquo;s device</figcaption>
            </figure>
            <figure>
              <div className="relative aspect-[780/1570] max-w-[320px] mx-auto overflow-hidden">
                <Image src="/case-studies/altamere/phone-withdrawal.jpg" alt="Owner's phone: a $20,000 withdrawal showing the free portion, a $228 surrender charge, $2,000 withholding, $17,772 received, and the reduced income rider base, followed by the disclosures" fill sizes="(max-width: 640px) 100vw, 320px" className="object-contain" />
              </div>
              <figcaption className="text-xs uppercase tracking-[0.18em] text-gray-600 mt-4 text-center">03 / The real cost before money moves</figcaption>
            </figure>
          </div>

          <figure>
            <div className="relative aspect-[1280/900] overflow-hidden border border-gray-200 bg-gray-50">
              <Image src="/case-studies/altamere/console-held.jpg" alt="Gateway log showing a withdrawal held because the address changed recently; the phone shows money out paused for 10 days" fill sizes="(max-width: 1200px) 100vw, 1150px" className="object-contain" />
            </div>
            <figcaption className="text-xs uppercase tracking-[0.18em] text-gray-600 mt-4">04 / A withdrawal right after the move is held. That&rsquo;s the takeover pattern, caught.</figcaption>
          </figure>
        </div>
      </section>

      {/* Under the hood */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-gray-50 border-y border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-12 gap-8 md:gap-12">
            <div className="md:col-span-3">
              <p className="text-xs text-gray-500 uppercase tracking-[0.22em] mb-4">05 / Implementation</p>
              <h2 className="text-3xl md:text-4xl font-serif font-light">Under the hood</h2>
            </div>
            <div className="md:col-span-8 md:col-start-5 max-w-3xl">
              <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-6">
                The rules engine is a pure function. It reads the account and the mandate and returns one of four outcomes: complete it, send it to the owner, hold it for review, or refuse it, always with a reason. Approvals are checked again at the moment the owner taps, because things can change after the agent asks.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-6">
                Agents connect through the Model Context Protocol. Claude, or any MCP client, gets nine tools for reading accounts, getting quotes and making requests, authorized by a mandate token. Every visitor gets their own sandbox and token, so a recruiter can connect an agent and try it without touching anyone else&rsquo;s demo.
              </p>
              <p className="text-base leading-relaxed text-gray-600">
                Next.js, React, TypeScript, Postgres and the MCP TypeScript SDK, with tests covering each rule, including the takeover pattern and sandbox isolation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Outcome */}
      <section className="py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-12 gap-8 md:gap-12">
            <div className="md:col-span-3">
              <p className="text-xs text-gray-500 uppercase tracking-[0.22em] mb-4">06 / Outcome</p>
              <h2 className="text-3xl md:text-4xl font-serif font-light">What&rsquo;s real, and what&rsquo;s next</h2>
            </div>
            <div className="md:col-span-8 md:col-start-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8 mb-12">
                <div className="border-t border-gray-300 pt-5">
                  <p className="text-2xl font-serif font-light mb-3">Working</p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>All five requests, end to end</li>
                    <li>Mandates, risk rules and holds</li>
                    <li>Owner approvals with disclosures word for word</li>
                    <li>An activity log and one-tap revoke</li>
                    <li>A real MCP connection for AI agents</li>
                  </ul>
                </div>
                <div className="border-t border-gray-300 pt-5">
                  <p className="text-2xl font-serif font-light mb-3">Simulated or not built</p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>Passkeys and Face ID (simulated)</li>
                    <li>Verifying which agent is calling</li>
                    <li>Signed mandates</li>
                    <li>New bank accounts and beneficiary changes</li>
                  </ul>
                </div>
              </div>
              {LIVE_URL ? (
                <a className="case-study-cta inline-flex w-fit items-center gap-3 px-8 py-4 text-xs uppercase tracking-[0.16em] font-medium" href={LIVE_URL} target="_blank" rel="noopener noreferrer">
                  Try the prototype <span aria-hidden="true">↗</span>
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              ) : (
                <Link className="case-study-cta inline-flex w-fit items-center gap-3 px-8 py-4 text-xs uppercase tracking-[0.16em] font-medium" href="/contact">
                  Ask for a walkthrough <span aria-hidden="true">→</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-6xl mx-auto border-t border-gray-200 pt-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-[0.22em] mb-3">More work</p>
            <p className="text-2xl font-serif">See other products I&rsquo;ve designed and built.</p>
          </div>
          <Link href="/projects" className="case-study-cta inline-flex w-fit items-center gap-3 px-8 py-4 text-xs uppercase tracking-[0.16em] font-medium">
            Back to work <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
