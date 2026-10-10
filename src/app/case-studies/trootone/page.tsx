import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Trootone Case Study",
  description: "Trootone is a browser-based guitar tuner designed and built by Joseph O'Leary.",
  alternates: {
    canonical: "/case-studies/trootone",
  },
};

const LIVE_URL = "https://trootone.vercel.app";

const decisions = [
  {
    title: "One button to start",
    body: "The first screen is a single Start Tuning button. There's no sign-up, no settings to work through and no download. Press it, allow the microphone and play a string.",
  },
  {
    title: "Hands stay on the guitar",
    body: "Auto-detect works out which string is ringing, so there's nothing to tap between strings. A short chime plays once a string holds in tune, so you don't have to keep watching the screen.",
  },
  {
    title: "A meter that reads like hardware",
    body: "The needle moves on spring physics. It overshoots a little and settles, like an analog tuner, so small changes are easy to follow instead of flickering.",
  },
  {
    title: "Plain-language direction",
    body: "Beneath the meter, the readout says what to do: “Tune up · 14¢ flat”, or a green “In tune”. You get an instruction, not just a number.",
  },
];

const shots = [
  { src: "/case-studies/trootone/idle.jpg", label: "01 / Ready", alt: "Trootone before tuning: the Start Tuning button, a tuning selector, six string buttons and an idle meter" },
  { src: "/case-studies/trootone/flat.jpg", label: "02 / Flat", alt: "Trootone hearing the A string 14 cents flat: the needle sits left of center and the readout says Tune up" },
  { src: "/case-studies/trootone/intune.jpg", label: "03 / In tune", alt: "Trootone with the A string in tune: the needle is centered and green and the readout says In tune" },
];

export default function TrootoneCaseStudy() {
  return (
    <div className="case-study-shell min-h-screen bg-white">
      {/* Hero */}
      <section className="px-6 md:px-12 pt-36 md:pt-48 pb-20 md:pb-28">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-12 gap-8 md:gap-12">
            <p className="md:col-span-2 text-xs text-gray-500 uppercase tracking-[0.22em] pt-3">Independent Product</p>
            <div className="md:col-span-10">
              <h1 className="text-5xl md:text-7xl font-serif font-light mb-8 leading-[1.02] max-w-5xl">
                Trootone
                <span className="block mt-3 text-3xl md:text-5xl"><em>A guitar tuner that stays out of the way</em></span>
              </h1>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-6 mt-14 pt-8 border-t border-gray-200">
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">Type</p>
                  <p className="text-sm font-medium">Independent product</p>
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
                  <a className="text-sm font-medium underline underline-offset-4" href={LIVE_URL} target="_blank" rel="noopener noreferrer">
                    Live on the web <span className="sr-only">(opens in a new tab)</span>
                  </a>
                </div>
              </div>
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
                Tuning is something guitarists do with their hands full. Many tuner apps put ads, upsells and settings ahead of the one thing you opened them for. Their readouts also jitter, which makes it hard to tell whether a string is actually getting closer.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-gray-700">
                I wanted a tuner that opens instantly in a phone browser, reads accurately from the phone&rsquo;s own microphone, and lets you tune without taking your eyes off the guitar for long.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-12 gap-8 md:gap-12">
            <div className="md:col-span-3">
              <p className="text-xs text-gray-500 uppercase tracking-[0.22em] mb-4">02 / Design &amp; Build</p>
              <h2 className="text-3xl md:text-4xl font-serif font-light">The Approach</h2>
            </div>
            <div className="md:col-span-8 md:col-start-5">
              <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-14 max-w-3xl">
                Every decision came back to one question: what does someone holding a guitar need to see right now?
              </p>
              <div className="grid md:grid-cols-2 gap-x-12 gap-y-12">
                {decisions.map((d, i) => (
                  <div key={d.title} className="border-t border-gray-300 pt-5">
                    <p className="text-xs text-gray-500 mb-4">{String(i + 1).padStart(2, "0")}</p>
                    <h3 className="text-xl font-serif mb-3">{d.title}</h3>
                    <p className="text-base leading-relaxed text-gray-700">{d.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The work */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-gray-50 border-y border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-[0.22em] mb-4">03 / The Work</p>
              <h2 className="text-4xl md:text-5xl font-serif font-light">From flat to in tune</h2>
            </div>
            <p className="text-sm text-gray-600 max-w-sm leading-relaxed">
              Trootone running in a phone browser while the A string is brought up to pitch.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-10">
            {shots.map((s) => (
              <figure key={s.src}>
                <div className="relative aspect-[1170/2532] max-w-[300px] mx-auto overflow-hidden rounded-[28px] border border-gray-300 bg-[#1e1b3a] shadow-sm">
                  <Image src={s.src} alt={s.alt} fill sizes="(max-width: 640px) 100vw, 300px" className="object-cover object-top" />
                </div>
                <figcaption className="text-xs uppercase tracking-[0.18em] text-gray-600 mt-4 text-center">{s.label}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Under the hood */}
      <section className="py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-12 gap-8 md:gap-12">
            <div className="md:col-span-3">
              <p className="text-xs text-gray-500 uppercase tracking-[0.22em] mb-4">04 / Implementation</p>
              <h2 className="text-3xl md:text-4xl font-serif font-light">Under the hood</h2>
            </div>
            <div className="md:col-span-8 md:col-start-5 max-w-3xl">
              <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-6">
                Pitch detection runs entirely in the browser using the Web Audio API. I implemented a McLeod-style autocorrelation that picks the first strong peak instead of the loudest one. That avoids the octave errors that make cheap tuners jump around on low strings. The audio never leaves the device.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-6">
                It supports five tunings: Standard, Half Step Down, Drop D, Open G and DADGAD. Each string has a reference tone you can play by ear. The screen stays awake while tuning, and the app installs to a phone&rsquo;s home screen and works offline.
              </p>
              <p className="text-base leading-relaxed text-gray-600">
                Next.js, React, TypeScript, Tailwind CSS and the Web Audio API, deployed on Vercel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Outcome */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-gray-50 border-y border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-12 gap-8 md:gap-12">
            <div className="md:col-span-3">
              <p className="text-xs text-gray-500 uppercase tracking-[0.22em] mb-4">05 / Outcome</p>
              <h2 className="text-3xl md:text-4xl font-serif font-light">Designed, built and shipped</h2>
            </div>
            <div className="md:col-span-8 md:col-start-5">
              <p className="text-lg leading-relaxed text-gray-700 mb-10 max-w-3xl">
                Trootone is live and used for real tuning, not a concept. I handled the whole product: the interaction design, the identity and neon wordmark, the signal processing, and the launch.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8 mb-12">
                <div className="border-t border-gray-300 pt-5">
                  <p className="text-2xl font-serif font-light mb-3">Instant start</p>
                  <p className="text-sm text-gray-600">One tap from opening the page to reading a string.</p>
                </div>
                <div className="border-t border-gray-300 pt-5">
                  <p className="text-2xl font-serif font-light mb-3">Hands-free flow</p>
                  <p className="text-sm text-gray-600">Auto string detection and an in-tune chime.</p>
                </div>
                <div className="border-t border-gray-300 pt-5">
                  <p className="text-2xl font-serif font-light mb-3">Steady readings</p>
                  <p className="text-sm text-gray-600">Octave-safe detection and a damped analog-style needle.</p>
                </div>
                <div className="border-t border-gray-300 pt-5">
                  <p className="text-2xl font-serif font-light mb-3">Private by design</p>
                  <p className="text-sm text-gray-600">No account, and audio is processed only on the device.</p>
                </div>
              </div>
              <a className="case-study-cta inline-flex w-fit items-center gap-3 px-8 py-4 text-xs uppercase tracking-[0.16em] font-medium" href={LIVE_URL} target="_blank" rel="noopener noreferrer">
                Try Trootone <span aria-hidden="true">↗</span>
                <span className="sr-only">(opens in a new tab)</span>
              </a>
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
