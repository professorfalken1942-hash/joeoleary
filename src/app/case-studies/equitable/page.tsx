"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function EquitableCaseStudy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
        <nav className="max-w-6xl mx-auto px-8 py-6 flex items-center justify-between">
          <Link href="/" className="text-sm font-medium">
            Joseph O'Leary
          </Link>
          <Link href="/#work" className="text-sm text-gray-600 hover:text-black transition">
            Back to work
          </Link>
        </nav>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-16 px-8 max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <p className="text-sm text-gray-500 mb-4">Case Study</p>
          <h1 className="text-5xl font-serif font-light mb-6 leading-tight">
            Equitable Account Summary<br />
            <em className="font-normal">Redesigning financial clarity</em>
          </h1>
          <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-gray-200">
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
        </motion.div>
      </section>

      {/* Challenge Section */}
      <section className="py-16 px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <h2 className="text-2xl font-serif font-light mb-6">The Challenge</h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              Equitable's account summary dashboard was dense and difficult to navigate. Users struggled to find critical information—account values weren't prominent, the "My financial professional" contact wasn't obvious, and the overall layout felt rigid and cluttered. Account ownership details were missing entirely, which undermined user confidence.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              The existing design used sharp corners, inconsistent spacing, and poor typographic hierarchy, making it feel dated and impersonal. Critical financial information was buried, and users had no clear visual path through their accounts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <h2 className="text-2xl font-serif font-light mb-6">The Solution</h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-8">
              I redesigned the account summary with three core principles: clarity, hierarchy, and human-centered design.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-600 mb-3">1. Visual Hierarchy & Typography</h3>
                <p className="text-base leading-relaxed text-gray-700">
                  Introduced a deliberate mix of font sizes and weights. Account values are now prominently displayed at the top of each card. Section headers use consistent sizing to guide users through the interface naturally. This creates clear entry points and reduces cognitive load.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-600 mb-3">2. Card-Based Layout & Spacing</h3>
                <p className="text-base leading-relaxed text-gray-700">
                  Replaced rigid rows with modern card components featuring rounded corners. Increased whitespace throughout to reduce visual clutter and create breathing room. Each card is now a self-contained unit, making the interface feel spacious and inviting rather than cramped.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-600 mb-3">3. Structural Information & Trust</h3>
                <p className="text-base leading-relaxed text-gray-700">
                  Added critical details to every account: open date, registration information, and address. Highlighted "My financial professional" as a key action item—users now know exactly where to seek support. This transparency builds confidence and ensures users understand account ownership.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-600 mb-3">4. Closed Account Handling</h3>
                <p className="text-base leading-relaxed text-gray-700">
                  Closed accounts are now deprioritized—displayed in gray at the bottom of listings. Active accounts remain prominent at the top, keeping user focus on what matters most.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Visual Showcase */}
      <section className="py-16 px-8 max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          <h2 className="text-2xl font-serif font-light mb-12">Before & After</h2>
          
          {/* Before */}
          <div className="mb-16">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-600 mb-6">Before: Cluttered & Unclear</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="overflow-hidden rounded-lg border border-gray-200 bg-gray-50">
                <img src="/case-studies/equitable/before-1.jpg" alt="Original account summary - cluttered layout" className="w-full h-auto" />
              </div>
              <div className="overflow-hidden rounded-lg border border-gray-200 bg-gray-50">
                <img src="/case-studies/equitable/before-2.jpg" alt="Original account details - poor hierarchy" className="w-full h-auto" />
              </div>
              <div className="overflow-hidden rounded-lg border border-gray-200 bg-gray-50">
                <img src="/case-studies/equitable/before-3.png" alt="Original design mockup" className="w-full h-auto" />
              </div>
            </div>
          </div>

          {/* After */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-600 mb-6">After: Clear & Confident</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="overflow-hidden rounded-lg border border-gray-200 shadow-sm">
                <img src="/case-studies/equitable/after-1.jpg" alt="Redesigned account summary - clean view" className="w-full h-auto" />
              </div>
              <div className="overflow-hidden rounded-lg border border-gray-200 shadow-sm">
                <img src="/case-studies/equitable/after-2.jpg" alt="Redesigned account details with financial professional" className="w-full h-auto" />
              </div>
              <div className="overflow-hidden rounded-lg border border-gray-200 shadow-sm">
                <img src="/case-studies/equitable/after-3.jpg" alt="Redesigned account value hierarchy" className="w-full h-auto" />
              </div>
              <div className="overflow-hidden rounded-lg border border-gray-200 shadow-sm">
                <img src="/case-studies/equitable/after-4.jpg" alt="Redesigned card-based layout with proper spacing" className="w-full h-auto" />
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Impact Section */}
      <section className="py-16 px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <h2 className="text-2xl font-serif font-light mb-6">Outcome</h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-8">
              The redesigned interface delivers measurable improvements:
            </p>

            <div className="grid grid-cols-2 gap-8 mb-8">
              <div className="border-l-2 border-black pl-6">
                <p className="text-2xl font-serif font-light mb-2">Clearer hierarchy</p>
                <p className="text-sm text-gray-600">Users can now instantly locate account values and their financial professional—no more searching.</p>
              </div>
              <div className="border-l-2 border-black pl-6">
                <p className="text-2xl font-serif font-light mb-2">Improved confidence</p>
                <p className="text-sm text-gray-600">Registration and address details give users immediate proof of account ownership and legitimacy.</p>
              </div>
              <div className="border-l-2 border-black pl-6">
                <p className="text-2xl font-serif font-light mb-2">Modern aesthetic</p>
                <p className="text-sm text-gray-600">Rounded corners, generous spacing, and refined typography create an inviting, contemporary feel.</p>
              </div>
              <div className="border-l-2 border-black pl-6">
                <p className="text-2xl font-serif font-light mb-2">Reduced friction</p>
                <p className="text-sm text-gray-600">Consistent card layouts and clear visual separation guide users through their accounts with ease.</p>
              </div>
            </div>

            <div className="bg-white p-8 border border-gray-200 rounded-lg">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-600 mb-4">Future Opportunities</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li>• Enhanced error messaging: Replace "Some accounts not updated" with actionable, contextual guidance.</li>
                <li>• Contextual help: Add tooltips for terms like "My financial professional" and "Account information" for new users.</li>
                <li>• Proactive support: Surface relevant help content based on account status and user behavior.</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 px-8 max-w-4xl mx-auto text-center border-t border-gray-200 mt-8">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          <p className="text-gray-600 mb-6">Interested in working together?</p>
          <a href="/#contact" className="inline-block px-8 py-3 bg-black text-white text-sm font-medium hover:bg-gray-800 transition">
            Get in touch
          </a>
        </motion.div>
      </section>
    </div>
  );
}
