"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import PasswordProtect from "@/components/PasswordProtect";

export default function EquitableCaseStudy() {
  return (
    <PasswordProtect>
    <div className="case-study-shell min-h-screen bg-white">
      {/* Hero */}
      <section className="px-6 md:px-12 pt-36 md:pt-48 pb-20 md:pb-28">
        <motion.div className="max-w-6xl mx-auto" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="grid md:grid-cols-12 gap-8 md:gap-12">
            <p className="md:col-span-2 text-xs text-gray-500 uppercase tracking-[0.22em] pt-3">Case Study / 01</p>
            <div className="md:col-span-10">
              <h1 className="text-5xl md:text-7xl font-serif font-light mb-8 leading-[1.02] max-w-5xl">
                Equitable Account Summary
                <span className="block mt-3 text-3xl md:text-5xl"><em>Redesigning financial clarity</em></span>
              </h1>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-6 mt-14 pt-8 border-t border-gray-200">
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">Client</p>
                  <p className="text-sm font-medium">Equitable Financial</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">Focus</p>
                  <p className="text-sm font-medium">UX/UI Design, Usability</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">Year</p>
                  <p className="text-sm font-medium">2026</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Challenge Section */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-gray-50 border-y border-gray-200">
        <div className="max-w-6xl mx-auto">
          <motion.div className="grid md:grid-cols-12 gap-8 md:gap-12" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <div className="md:col-span-3">
              <p className="text-xs text-gray-500 uppercase tracking-[0.22em] mb-4">01 / Context</p>
              <h2 className="text-3xl md:text-4xl font-serif font-light">The Challenge</h2>
            </div>
            <div className="md:col-span-8 md:col-start-5 max-w-3xl">
              <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-6">
              Equitable's account summary dashboard was dense and difficult to navigate. Users struggled to find critical information—account values weren't prominent, the "My financial professional" contact wasn't obvious, and the overall layout felt rigid and cluttered. Account ownership details were missing entirely, which undermined user confidence.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-gray-700">
              The existing design used sharp corners, inconsistent spacing, and poor typographic hierarchy, making it feel dated and impersonal. Critical financial information was buried, and users had no clear visual path through their accounts.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <motion.div className="grid md:grid-cols-12 gap-8 md:gap-12" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <div className="md:col-span-3">
              <p className="text-xs text-gray-500 uppercase tracking-[0.22em] mb-4">02 / Design</p>
              <h2 className="text-3xl md:text-4xl font-serif font-light">The Solution</h2>
            </div>
            <div className="md:col-span-8 md:col-start-5">
              <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-14 max-w-3xl">
                I redesigned the account summary around three principles: clarity, hierarchy, and a more human sense of trust.
              </p>
              <div className="grid md:grid-cols-2 gap-x-12 gap-y-12">
                <div className="border-t border-gray-300 pt-5">
                  <p className="text-xs text-gray-500 mb-4">01</p>
                  <h3 className="text-xl font-serif mb-3">A clearer hierarchy</h3>
                  <p className="text-base leading-relaxed text-gray-700">
                  Introduced a deliberate mix of font sizes and weights. Account values are now prominently displayed at the top of each card. Section headers use consistent sizing to guide users through the interface naturally. This creates clear entry points and reduces cognitive load.
                  </p>
                </div>
                <div className="border-t border-gray-300 pt-5">
                  <p className="text-xs text-gray-500 mb-4">02</p>
                  <h3 className="text-xl font-serif mb-3">Space to scan</h3>
                  <p className="text-base leading-relaxed text-gray-700">
                  Replaced rigid rows with modern card components featuring rounded corners. Increased whitespace throughout to reduce visual clutter and create breathing room. Each card is now a self-contained unit, making the interface feel spacious and inviting rather than cramped.
                  </p>
                </div>
                <div className="border-t border-gray-300 pt-5">
                  <p className="text-xs text-gray-500 mb-4">03</p>
                  <h3 className="text-xl font-serif mb-3">Details that build trust</h3>
                  <p className="text-base leading-relaxed text-gray-700">
                  Added critical details to every account: open date, registration information, and address. Highlighted "My financial professional" as a key action item—users now know exactly where to seek support. This transparency builds confidence and ensures users understand account ownership.
                  </p>
                </div>
                <div className="border-t border-gray-300 pt-5">
                  <p className="text-xs text-gray-500 mb-4">04</p>
                  <h3 className="text-xl font-serif mb-3">Active first</h3>
                  <p className="text-base leading-relaxed text-gray-700">
                  Closed accounts are now deprioritized—displayed in gray at the bottom of listings. Active accounts remain prominent at the top, keeping user focus on what matters most.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Visual Showcase */}
      <section className="py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-[0.22em] mb-4">03 / The Work</p>
              <h2 className="text-4xl md:text-5xl font-serif font-light">Before &amp; After</h2>
            </div>
            <p className="text-sm text-gray-600 max-w-sm leading-relaxed">A closer look at the shift from crowded account listings to a calmer, more legible experience.</p>
          </div>
          
          {/* Before */}
          <div className="mb-20 md:mb-28">
            <h3 className="text-xs font-medium uppercase tracking-[0.18em] text-gray-600 mb-7">Before / Cluttered &amp; unclear</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-7">
              <div className="relative h-[420px] overflow-hidden border border-gray-200 bg-gray-50 p-3 md:p-4">
                <Image src="/case-studies/equitable/before-1.jpg" alt="Original account summary - cluttered layout" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-contain p-3 md:p-4" />
              </div>
              <div className="relative h-[420px] overflow-hidden border border-gray-200 bg-gray-50 p-3 md:p-4">
                <Image src="/case-studies/equitable/before-2.jpg" alt="Original account details - poor hierarchy" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-contain p-3 md:p-4" />
              </div>
              <div className="relative h-[420px] overflow-hidden border border-gray-200 bg-gray-50 p-3 md:p-4">
                <Image src="/case-studies/equitable/before-3.png" alt="Original design mockup" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-contain p-3 md:p-4" />
              </div>
            </div>
          </div>

          {/* After */}
          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.18em] text-gray-600 mb-7">After / Clear &amp; confident</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-7">
              <div className="relative h-[420px] overflow-hidden border border-gray-200 bg-gray-50 p-3 md:p-4">
                <Image src="/case-studies/equitable/after-1.jpg" alt="Redesigned account summary - clean view" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-contain p-3 md:p-4" />
              </div>
              <div className="relative h-[420px] overflow-hidden border border-gray-200 bg-gray-50 p-3 md:p-4">
                <Image src="/case-studies/equitable/after-2.jpg" alt="Redesigned account details with financial professional" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-contain p-3 md:p-4" />
              </div>
              <div className="relative h-[420px] overflow-hidden border border-gray-200 bg-gray-50 p-3 md:p-4">
                <Image src="/case-studies/equitable/after-3.jpg" alt="Redesigned account value hierarchy" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-contain p-3 md:p-4" />
              </div>
              <div className="relative h-[420px] overflow-hidden border border-gray-200 bg-gray-50 p-3 md:p-4">
                <Image src="/case-studies/equitable/after-4.jpg" alt="Redesigned card-based layout with proper spacing" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-contain p-3 md:p-4" />
              </div>
            </div>
          </div>
        </motion.div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-gray-50 border-y border-gray-200">
        <div className="max-w-6xl mx-auto">
          <motion.div className="grid md:grid-cols-12 gap-8 md:gap-12" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <div className="md:col-span-3">
              <p className="text-xs text-gray-500 uppercase tracking-[0.22em] mb-4">04 / Outcome</p>
              <h2 className="text-3xl md:text-4xl font-serif font-light">A clearer picture</h2>
            </div>
            <div className="md:col-span-8 md:col-start-5">
              <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-12 max-w-3xl">
              The redesigned direction focuses on clearer, more trustworthy account review patterns:
              </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 mb-16">
              <div className="border-t border-gray-300 pt-5">
                <p className="text-2xl font-serif font-light mb-3">Clearer hierarchy</p>
                <p className="text-sm text-gray-600">Users can now instantly locate account values and their financial professional—no more searching.</p>
              </div>
              <div className="border-t border-gray-300 pt-5">
                <p className="text-2xl font-serif font-light mb-3">Improved confidence</p>
                <p className="text-sm text-gray-600">Registration and address details give users immediate proof of account ownership and legitimacy.</p>
              </div>
              <div className="border-t border-gray-300 pt-5">
                <p className="text-2xl font-serif font-light mb-3">Modern aesthetic</p>
                <p className="text-sm text-gray-600">Rounded corners, generous spacing, and refined typography create an inviting, contemporary feel.</p>
              </div>
              <div className="border-t border-gray-300 pt-5">
                <p className="text-2xl font-serif font-light mb-3">Reduced friction</p>
                <p className="text-sm text-gray-600">Consistent card layouts and clear visual separation guide users through their accounts with ease.</p>
              </div>
            </div>

            <div className="border-t border-gray-300 pt-8 grid md:grid-cols-3 gap-6">
              <h3 className="text-xs font-semibold uppercase tracking-wide text-gray-600">Future Opportunities</h3>
              <ul className="md:col-span-2 space-y-4 text-sm text-gray-700">
                <li><span className="text-gray-500">01 /</span> Replace generic update alerts with actionable, contextual guidance.</li>
                <li><span className="text-gray-500">02 /</span> Add tooltips for terms like "My financial professional" and "Account information".</li>
                <li><span className="text-gray-500">03 /</span> Surface relevant help based on account status and user behavior.</li>
              </ul>
            </div>
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
