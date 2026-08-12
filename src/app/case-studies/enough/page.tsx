"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function EnoughCaseStudy() {
  return (
    <div className="case-study-shell min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
        <nav className="max-w-6xl mx-auto px-8 py-6 flex items-center justify-between">
          <Link href="/" className="text-sm font-medium">
            Joseph O'Leary
          </Link>
          <Link href="/projects" className="text-sm text-gray-600 hover:text-black transition">
            Back to work
          </Link>
        </nav>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-16 px-8 max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <p className="text-sm text-gray-500 mb-4">Product Design & Development</p>
          <h1 className="text-5xl font-serif font-light mb-6 leading-tight">
            Enough<br />
            <em className="font-normal">Retirement calculator that cuts through the noise</em>
          </h1>
          <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-gray-200">
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">Role</p>
              <p className="text-sm font-medium">Full-Stack Designer & Engineer</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">Focus</p>
              <p className="text-sm font-medium">Financial Clarity, UX, Web App</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">Year</p>
              <p className="text-sm font-medium">2026</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Problem */}
      <section className="px-8 py-20 max-w-4xl mx-auto border-t border-gray-200">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
          <h2 className="text-3xl font-serif font-light mb-6">The Problem</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Retirement planning is broken. People use spreadsheets, talk to advisors, read conflicting advice online. 
            No one has a clear answer to the simple question: <strong>How much do I actually need?</strong>
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Enough strips away the complexity. Input your numbers. Get your number. Know when you can retire.
          </p>
        </motion.div>
      </section>

      {/* Solution */}
      <section className="px-8 py-20 max-w-4xl mx-auto border-t border-gray-200">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
          <h2 className="text-3xl font-serif font-light mb-6">The Solution</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-medium mb-2">Dark, Calm Interface</h3>
              <p className="text-gray-700">
                A dark theme keeps the focus on financial clarity, not flashy design. Every element serves the calculation.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Real-Time Calculator</h3>
              <p className="text-gray-700">
                Adjust savings, expenses, investment returns on the fly. Watch your retirement number and timeline update instantly. 
                No waiting, no hidden complexity.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">4% Rule Math</h3>
              <p className="text-gray-700">
                Built on proven financial principles. Current savings are projected forward using compound growth. 
                Your retirement number is expenses divided by 0.04 (the safe withdrawal rate).
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">No Signup, No Tracking</h3>
              <p className="text-gray-700">
                Pure calculation. No email capture, no ads, no data collection. Your financial privacy is respected.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Result */}
      <section className="px-8 py-20 max-w-4xl mx-auto border-t border-gray-200">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
          <h2 className="text-3xl font-serif font-light mb-6">The Result</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            A focused, fast calculator that answers one question well: <strong>What's your number?</strong>
          </p>
          <div className="bg-gray-50 p-8 rounded-lg mb-6">
            <p className="text-sm text-gray-600 mb-4">Live at:</p>
            <a 
              href="https://whatsyourenough.info/calculator" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-lg font-medium text-blue-600 hover:text-blue-800 transition"
            >
              whatsyourenough.info/calculator →
            </a>
          </div>
          <p className="text-gray-700">
            Future phases will add scenario comparison, progress tracking, and export features. 
            But Phase 1 proves the core concept: clarity beats complexity.
          </p>
        </motion.div>
      </section>

      {/* Footer */}
      <section className="px-8 py-20 max-w-4xl mx-auto border-t border-gray-200 text-center">
        <p className="text-sm text-gray-600 mb-6">Next</p>
        <Link href="/projects" className="text-lg font-medium hover:text-gray-600 transition">
          Back to work
        </Link>
      </section>
    </div>
  );
}
