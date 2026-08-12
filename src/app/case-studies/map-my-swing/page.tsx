"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function MapMySwingCaseStudy() {
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
          <p className="text-sm text-gray-500 mb-4">Case Study</p>
          <h1 className="text-5xl font-serif font-light mb-6 leading-tight">
            Swing Coach<br />
            <em className="font-normal">Golf swing analysis from zero to production</em>
          </h1>
          <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-gray-200">
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">Type</p>
              <p className="text-sm font-medium">Product Design &amp; Engineering</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">Focus</p>
              <p className="text-sm font-medium">Computer Vision, Mobile UX, Real-Time Data</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">Year</p>
              <p className="text-sm font-medium">2026</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Live link banner */}
      <section className="px-8 max-w-4xl mx-auto mb-16">
        <a
          href="https://swing-coach.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="block border border-black px-6 py-4 text-sm font-medium hover:bg-black hover:text-white transition"
        >
          View live site → swing-coach.vercel.app
        </a>
      </section>

      {/* Overview */}
      <section className="px-8 max-w-4xl mx-auto mb-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
          <h2 className="text-xs text-gray-500 uppercase tracking-wide mb-8">Overview</h2>
          <p className="text-2xl font-serif font-light leading-relaxed mb-8">
            Golfers with access to professional swing analysis improve faster. Tools like TrackMan cost $15,000–$25,000. One-shot AI feedback has no memory. I built Swing Coach to bridge the gap — browser-native computer vision, persistent history, and zero installation.
          </p>
          <p className="text-base text-gray-600 leading-relaxed">
            The project went from concept to production in under a week. Everything runs client-side using MediaPipe's PoseLandmarker — no backend, no data storage costs, no app store dependency. The result is a tool that works on any modern phone or laptop, remembers every session, and shows progress over time.
          </p>
        </motion.div>
      </section>

      {/* Problem */}
      <section className="px-8 max-w-4xl mx-auto mb-24 pt-16 border-t border-gray-100">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
          <h2 className="text-xs text-gray-500 uppercase tracking-wide mb-8">The Problem</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-lg font-medium mb-4">Access gap in swing analysis</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Professional-grade tools are priced for tour players and coaches. Free alternatives — asking a friend, posting to Reddit, or getting a one-shot AI opinion — don't retain context. Every session starts from scratch. There's no way to see if you've actually gotten better.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">The memory problem</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Even if you get useful feedback once, you can't track change over time. Hip rotation at 32° in week one, 38° in week three — that data doesn't exist anywhere unless someone built a system to capture it. That's what was missing.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Approach */}
      <section className="bg-gray-50 py-24 px-8 mb-24">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
            <h2 className="text-xs text-gray-500 uppercase tracking-wide mb-8">Design Approach</h2>
            <p className="text-xl font-serif font-light leading-relaxed mb-12">
              Spec-first. Before writing a line of code, I wrote the product — seven documentation files defining the UX rules, design system, feedback engine logic, data model, component specs, engineering constraints, and phased task list.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "3-screen focus", desc: "Record or upload → analyze with pose overlay and metrics → review session history. No feature creep. Every screen has a single job." },
                { title: "Client-side everything", desc: "MediaPipe runs in the browser. No backend means no latency, no server costs, no data privacy concerns. The model downloads once, runs locally forever." },
                { title: "Persistent by default", desc: "Every session auto-saves to localStorage. Users don't opt in to tracking — tracking is the product. History is the differentiator." },
              ].map((item) => (
                <div key={item.title} className="border-t border-gray-300 pt-6">
                  <h3 className="text-sm font-medium mb-3">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technical detail */}
      <section className="px-8 max-w-4xl mx-auto mb-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }}>
          <h2 className="text-xs text-gray-500 uppercase tracking-wide mb-8">What Was Built</h2>
          <div className="space-y-6">
            {[
              { label: "Pose Detection", detail: "MediaPipe PoseLandmarker with 33 body landmarks tracked at 60fps. Gold skeleton overlay drawn on a canvas element layered over the playback video." },
              { label: "Swing Metrics", detail: "Hip rotation and shoulder rotation calculated live from landmark coordinates. Tempo ratio derived from frame timing. All values update in real time during playback." },
              { label: "Feedback Engine", detail: "Rule-based system with configurable thresholds. Maximum 2 insights per session. Plain English, action-oriented. No jargon, no scores — just what to work on." },
              { label: "Session History", detail: "Auto-saves every completed analysis to localStorage. Progress charts (Recharts) show hip rotation, shoulder rotation, and tempo over time with trend indicators." },
              { label: "Mobile Polish", detail: "48px minimum tap targets throughout. Full-height camera view with floating record button. Single-column stacked layout on mobile, 2-column on desktop. getUserMedia + MediaRecorder for live recording." },
            ].map((item) => (
              <div key={item.label} className="grid grid-cols-4 gap-8 py-6 border-t border-gray-100">
                <div className="col-span-1">
                  <p className="text-sm font-medium">{item.label}</p>
                </div>
                <div className="col-span-3">
                  <p className="text-sm text-gray-600 leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Outcome */}
      <section className="px-8 max-w-4xl mx-auto mb-24 pt-16 border-t border-gray-100">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}>
          <h2 className="text-xs text-gray-500 uppercase tracking-wide mb-8">Outcome</h2>
          <p className="text-2xl font-serif font-light leading-relaxed mb-8">
            A fully functional golf swing analyzer live at swing-coach.vercel.app. Where a one-shot AI gives you an opinion, Map My Swing remembers every swing and shows your progression.
          </p>
          <p className="text-base text-gray-600 leading-relaxed mb-12">
            The spec-first approach paid off. Seven documentation files meant every component had a clear contract before it was built. When something needed changing, it changed in one place. No drift, no inconsistency, no debugging design decisions mid-build.
          </p>
          <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
            {[
              { stat: "&lt; 1 week", label: "Concept to production" },
              { stat: "0", label: "Backend infrastructure" },
              { stat: "7", label: "Spec documents written before code" },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-3xl font-serif font-light mb-2" dangerouslySetInnerHTML={{ __html: item.stat }} />
                <p className="text-xs text-gray-500 uppercase tracking-wide">{item.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Nav */}
      <section className="px-8 max-w-4xl mx-auto pb-24 pt-8 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <Link href="/case-studies/pastel" className="text-sm hover:underline">
            ← Pastel Makeup Studio
          </Link>
          <Link href="/case-studies/equitable" className="text-sm hover:underline">
            Equitable →
          </Link>
        </div>
      </section>
    </div>
  );
}
