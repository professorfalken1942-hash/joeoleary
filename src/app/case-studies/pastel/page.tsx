"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function PastelCaseStudy() {
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
            Pastel Makeup Studio<br />
            <em className="font-normal">Luxury booking platform for wedding makeup</em>
          </h1>
          <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-gray-200">
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">Client</p>
              <p className="text-sm font-medium">Julianna / Pastel Studio</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">Focus</p>
              <p className="text-sm font-medium">Web Design, CMS, Booking Integration</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">Year</p>
              <p className="text-sm font-medium">2025–2026</p>
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
              Pastel, a luxury wedding makeup studio, had outgrown its original portfolio site. Julianna needed a platform that did more than showcase her work—she needed to convert browsers into clients. The old site lacked professional booking integration, had limited portfolio flexibility, and didn't communicate the premium nature of her services.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              She needed a site that could manage client inquiries, display her evolving portfolio with featured collections, and integrate seamlessly with her booking workflow. The aesthetic had to feel luxury—refined, minimal, and inviting—while functionality had to be frictionless.
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
              A complete platform redesign built on Next.js with Sanity CMS backend. The focus: turn every interaction into a conversion opportunity.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-600 mb-3">1. Luxury Aesthetic & Brand Presence</h3>
                <p className="text-base leading-relaxed text-gray-700">
                  Designed a Scandinavian-minimal interface with a sophisticated color palette (cream canvas, deep forest green, refined pink accent). High-quality imagery dominates the homepage—Julianna's work is the hero. Every element reinforces the premium positioning: generous whitespace, careful typography, and intentional use of color.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-600 mb-3">2. Frictionless Booking Integration</h3>
                <p className="text-base leading-relaxed text-gray-700">
                  Integrated HoneyBook as the booking engine. Clients can now view availability, book consultations, and secure deposits without leaving the site. A dedicated /book page makes the CTA obvious. The integration is invisible to users—they simply experience a seamless flow from portfolio to booking.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-600 mb-3">3. Dynamic Portfolio with Sanity CMS</h3>
                <p className="text-base leading-relaxed text-gray-700">
                  Built a backend CMS that lets Julianna manage her portfolio independently. She can add new lookbooks, organize by style or season, and feature client testimonials—all without touching code. The portfolio is now a living, growing part of the business.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-600 mb-3">4. Mobile-First Responsiveness</h3>
                <p className="text-base leading-relaxed text-gray-700">
                  Brides research makeup on their phones. The site was built mobile-first: fast loading, beautiful on all devices, with touch-friendly booking buttons. No friction, no friction—just conversion.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <h2 className="text-2xl font-serif font-light mb-6">Outcome</h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-8">
              The new Pastel platform transformed how Julianna connects with clients:
            </p>

            <div className="grid grid-cols-2 gap-8 mb-8">
              <div className="border-l-2 border-black pl-6">
                <p className="text-2xl font-serif font-light mb-2">Booking integration</p>
                <p className="text-sm text-gray-600">HoneyBook now handles all inquiry-to-booking workflow. Zero manual back-and-forth.</p>
              </div>
              <div className="border-l-2 border-black pl-6">
                <p className="text-2xl font-serif font-light mb-2">Brand elevation</p>
                <p className="text-sm text-gray-600">The refined aesthetic immediately communicates luxury and professionalism to potential clients.</p>
              </div>
              <div className="border-l-2 border-black pl-6">
                <p className="text-2xl font-serif font-light mb-2">Self-service portfolio</p>
                <p className="text-sm text-gray-600">Julianna now owns her portfolio updates. New looks, testimonials, and collections go live instantly.</p>
              </div>
              <div className="border-l-2 border-black pl-6">
                <p className="text-2xl font-serif font-light mb-2">Mobile conversion</p>
                <p className="text-sm text-gray-600">Fast, beautiful site that turns phone browsers into booked clients. Every interaction counts.</p>
              </div>
            </div>

            <div className="bg-white p-8 border border-gray-200 rounded-lg">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-600 mb-4">Impact</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                The platform has become Julianna's primary lead source. Client inquiries route directly through the site, booking conflicts are eliminated by HoneyBook automation, and her portfolio now showcases her evolving aesthetic—keeping the site fresh and driving repeat traffic from past clients and referrals.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 px-8 max-w-4xl mx-auto text-center border-t border-gray-200 mt-8">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          <p className="text-gray-600 mb-6">Interested in working together?</p>
          <a href="/contact" className="inline-block px-8 py-3 bg-black text-white text-sm font-medium hover:bg-gray-800 transition">
            Get in touch
          </a>
        </motion.div>
      </section>
    </div>
  );
}
