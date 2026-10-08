"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import PasswordProtect from "@/components/PasswordProtect";

const LIVE_URL = "https://equitable.com/individuals/retirement-savings-plans/retirement-planning-calculator";

const steps = [
  { src: "/case-studies/equitable-calculator/1-age.jpg", label: "01 / Age", alt: "Step 1 of the calculator asking for current age, with a four-step progress tracker" },
  { src: "/case-studies/equitable-calculator/2-income.jpg", label: "02 / Income", alt: "Step 2 asking for annual salary" },
  { src: "/case-studies/equitable-calculator/3-savings.jpg", label: "03 / Savings", alt: "Step 3 asking how much has been saved for retirement" },
  { src: "/case-studies/equitable-calculator/4-contributions.jpg", label: "04 / Contributions", alt: "Step 4 asking for contribution amount and frequency" },
];

export default function EquitableRetirementCalculatorCaseStudy() {
  return (
    <PasswordProtect>
      <div className="case-study-shell min-h-screen bg-white">
        {/* Hero */}
        <section className="px-6 md:px-12 pt-36 md:pt-48 pb-20 md:pb-28">
          <motion.div className="max-w-6xl mx-auto" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="grid md:grid-cols-12 gap-8 md:gap-12">
              <p className="md:col-span-2 text-xs text-gray-500 uppercase tracking-[0.22em] pt-3">Case Study / 02</p>
              <div className="md:col-span-10">
                <h1 className="text-5xl md:text-7xl font-serif font-light mb-8 leading-[1.02] max-w-5xl">
                  Equitable Retirement Calculator
                  <span className="block mt-3 text-3xl md:text-5xl"><em>From a fill-in-the-blanks form to a guided plan</em></span>
                </h1>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-6 mt-14 pt-8 border-t border-gray-200">
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">Client</p>
                    <p className="text-sm font-medium">Equitable</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">Role</p>
                    <p className="text-sm font-medium">Designer &amp; front-end developer</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">Year</p>
                    <p className="text-sm font-medium">2026</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">Status</p>
                    <a className="text-sm font-medium underline underline-offset-4" href={LIVE_URL} target="_blank" rel="noopener noreferrer">
                      Live on equitable.com <span className="sr-only">(opens in a new tab)</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Challenge */}
        <section className="py-20 md:py-28 px-6 md:px-12 bg-gray-50 border-y border-gray-200">
          <div className="max-w-6xl mx-auto">
            <motion.div className="grid md:grid-cols-12 gap-8 md:gap-12" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
              <div className="md:col-span-3">
                <p className="text-xs text-gray-500 uppercase tracking-[0.22em] mb-4">01 / Context</p>
                <h2 className="text-3xl md:text-4xl font-serif font-light">The Challenge</h2>
              </div>
              <div className="md:col-span-8 md:col-start-5 max-w-3xl">
                <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-6">
                  The previous calculator opened with a madlib-style form: a paragraph of sentence fragments with blanks to fill in. It got very little use and had a high bounce rate. Many visitors left before ever seeing a result.
                </p>
                <p className="text-lg md:text-xl leading-relaxed text-gray-700">
                  A sentence full of blanks asks for everything at once. People had to read the whole thing, work out what each blank wanted, and supply personal financial details before the page gave them anything back. For a tool meant to build confidence about retirement, the first thing people saw was the hardest part.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Approach */}
        <section className="py-20 md:py-28 px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            <motion.div className="grid md:grid-cols-12 gap-8 md:gap-12" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
              <div className="md:col-span-3">
                <p className="text-xs text-gray-500 uppercase tracking-[0.22em] mb-4">02 / Design &amp; Build</p>
                <h2 className="text-3xl md:text-4xl font-serif font-light">The Approach</h2>
              </div>
              <div className="md:col-span-8 md:col-start-5">
                <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-14 max-w-3xl">
                  I designed and built a replacement that asks for less at once, explains why it is asking, and gets people to a useful answer quickly.
                </p>
                <div className="grid md:grid-cols-2 gap-x-12 gap-y-12">
                  <div className="border-t border-gray-300 pt-5">
                    <p className="text-xs text-gray-500 mb-4">01</p>
                    <h3 className="text-xl font-serif mb-3">One question at a time</h3>
                    <p className="text-base leading-relaxed text-gray-700">
                      The madlib became four short steps: age, income, savings and contributions. Each screen holds a single plain-language question, so there is only ever one thing to answer.
                    </p>
                  </div>
                  <div className="border-t border-gray-300 pt-5">
                    <p className="text-xs text-gray-500 mb-4">02</p>
                    <h3 className="text-xl font-serif mb-3">Visible progress</h3>
                    <p className="text-base leading-relaxed text-gray-700">
                      A numbered tracker shows how far along people are and how little is left. &ldquo;A few minutes&rdquo; is a promise the layout keeps.
                    </p>
                  </div>
                  <div className="border-t border-gray-300 pt-5">
                    <p className="text-xs text-gray-500 mb-4">03</p>
                    <h3 className="text-xl font-serif mb-3">Explain the why</h3>
                    <p className="text-base leading-relaxed text-gray-700">
                      Every question has a one-line reason, such as &ldquo;Your age determines how many years you have to grow your savings.&rdquo; Under the form, &ldquo;We do not share your data&rdquo; answers the worry people have before typing in a salary.
                    </p>
                  </div>
                  <div className="border-t border-gray-300 pt-5">
                    <p className="text-xs text-gray-500 mb-4">04</p>
                    <h3 className="text-xl font-serif mb-3">Guardrails, not dead ends</h3>
                    <p className="text-base leading-relaxed text-gray-700">
                      If a contribution would exceed the annual IRS limit for someone&rsquo;s age, the calculator says so right away and links to the current limits. The person learns something instead of hitting an error.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* The flow */}
        <section className="py-20 md:py-28 px-6 md:px-12 bg-gray-50 border-y border-gray-200">
          <div className="max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-[0.22em] mb-4">03 / The Work</p>
                  <h2 className="text-4xl md:text-5xl font-serif font-light">Four short steps</h2>
                </div>
                <p className="text-sm text-gray-600 max-w-sm leading-relaxed">Each step asks a single question and explains why it matters.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-7">
                {steps.map((s) => (
                  <figure key={s.src}>
                    <div className="relative aspect-[1600/1344] overflow-hidden border border-gray-200 bg-[#002677]">
                      <Image src={s.src} alt={s.alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-contain object-top" />
                    </div>
                    <figcaption className="text-xs uppercase tracking-[0.18em] text-gray-600 mt-3">{s.label}</figcaption>
                  </figure>
                ))}
              </div>

              <div className="grid md:grid-cols-12 gap-8 md:gap-12 mt-20 md:mt-28 items-center">
                <div className="md:col-span-4">
                  <h3 className="text-xs font-medium uppercase tracking-[0.18em] text-gray-600 mb-4">Inline guardrail</h3>
                  <p className="text-base leading-relaxed text-gray-700">
                    The calculator checks contributions against the annual IRS limit for the person&rsquo;s age as they type, and points to the current limits and catch-up rules.
                  </p>
                </div>
                <div className="md:col-span-8 relative aspect-[1600/1111] overflow-hidden border border-gray-200 bg-white">
                  <Image src="/case-studies/equitable-calculator/4b-limit-warning.jpg" alt="Contribution step showing a warning that the amount exceeds the annual IRS contribution limit" fill sizes="(max-width: 768px) 100vw, 66vw" className="object-cover object-top" />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Results */}
        <section className="py-20 md:py-28 px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
              <div className="grid md:grid-cols-12 gap-8 md:gap-12 mb-14">
                <div className="md:col-span-3">
                  <p className="text-xs text-gray-500 uppercase tracking-[0.22em] mb-4">04 / Results</p>
                  <h2 className="text-3xl md:text-4xl font-serif font-light">An answer you can work with</h2>
                </div>
                <div className="md:col-span-8 md:col-start-5 max-w-3xl">
                  <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-6">
                    The four answers lead into a retirement goal planner instead of a static number. Projected monthly income sits next to what someone may need. A gauge shows any shortfall at a glance, broken out by savings, Social Security and pension.
                  </p>
                  <p className="text-lg md:text-xl leading-relaxed text-gray-700">
                    Sliders for retirement age and monthly contribution update the projection live, so people can try out &ldquo;what if I work two more years?&rdquo; or &ldquo;what if I save $100 more a month?&rdquo; without starting over. A monthly/annual toggle, a &ldquo;How was this calculated?&rdquo; explainer and next-step resources round it out.
                  </p>
                </div>
              </div>
              <div className="relative aspect-[1600/1452] overflow-hidden border border-gray-200 bg-gray-50">
                <Image src="/case-studies/equitable-calculator/5-results.jpg" alt="Results page: retirement goal planner with sliders on the left, projected retirement income gauge showing a shortfall on the right" fill sizes="(max-width: 1200px) 100vw, 1150px" className="object-contain" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Mobile + outcome */}
        <section className="py-20 md:py-28 px-6 md:px-12 bg-gray-50 border-y border-gray-200">
          <div className="max-w-6xl mx-auto">
            <motion.div className="grid md:grid-cols-12 gap-8 md:gap-12" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
              <div className="md:col-span-4">
                <div className="relative aspect-[900/1947] max-w-[300px] mx-auto overflow-hidden rounded-[28px] border border-gray-300 bg-white shadow-sm">
                  <Image src="/case-studies/equitable-calculator/mobile.jpg" alt="The calculator's first step on a phone" fill sizes="300px" className="object-cover object-top" />
                </div>
              </div>
              <div className="md:col-span-7 md:col-start-6">
                <p className="text-xs text-gray-500 uppercase tracking-[0.22em] mb-4">05 / Outcome</p>
                <h2 className="text-3xl md:text-4xl font-serif font-light mb-8">Designed, built and shipped</h2>
                <p className="text-lg leading-relaxed text-gray-700 mb-10">
                  I owned the work from design through front-end build, and the calculator is live on equitable.com. One-question steps also suit small screens, so the same flow works on a phone without a separate design.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8 mb-12">
                  <div className="border-t border-gray-300 pt-5">
                    <p className="text-2xl font-serif font-light mb-3">Lower first ask</p>
                    <p className="text-sm text-gray-600">The entry point is one question instead of a paragraph of blanks.</p>
                  </div>
                  <div className="border-t border-gray-300 pt-5">
                    <p className="text-2xl font-serif font-light mb-3">Clear payoff</p>
                    <p className="text-sm text-gray-600">Four answers lead straight to a personal projection people can adjust.</p>
                  </div>
                  <div className="border-t border-gray-300 pt-5">
                    <p className="text-2xl font-serif font-light mb-3">Trust built in</p>
                    <p className="text-sm text-gray-600">Plain-language reasons, a privacy note and a visible method for the math.</p>
                  </div>
                  <div className="border-t border-gray-300 pt-5">
                    <p className="text-2xl font-serif font-light mb-3">Fewer dead ends</p>
                    <p className="text-sm text-gray-600">IRS-limit checks guide people instead of rejecting their input.</p>
                  </div>
                </div>
                <a className="case-study-cta inline-flex w-fit items-center gap-3 px-8 py-4 text-xs uppercase tracking-[0.16em] font-medium" href={LIVE_URL} target="_blank" rel="noopener noreferrer">
                  Try the live calculator <span aria-hidden="true">↗</span>
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="py-20 md:py-28 px-6 md:px-12">
          <motion.div className="max-w-6xl mx-auto border-t border-gray-200 pt-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-[0.22em] mb-3">Next step</p>
              <p className="text-2xl font-serif">Interested in working together?</p>
            </div>
            <a href="/contact" className="case-study-cta inline-flex w-fit items-center gap-3 px-8 py-4 text-xs uppercase tracking-[0.16em] font-medium">
              Get in touch <span aria-hidden="true">↗</span>
            </a>
          </motion.div>
        </section>
      </div>
    </PasswordProtect>
  );
}
