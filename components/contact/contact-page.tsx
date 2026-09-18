"use client";

import { FormEvent, useState } from "react";

const requestTypes = [
  "Publish an application",
  "Discuss a publishing partnership",
  "Ask about the platform",
  "Other",
];

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="bg-[#070707] text-[#f4f2ed]">
      <section className="relative overflow-hidden border-b border-white/[0.07] pt-36 pb-24 lg:pt-44 lg:pb-32">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute -right-40 top-16 h-[560px] w-[560px] rounded-full bg-[#ff5a1f]/10 blur-[130px]" />
        <div className="absolute left-[-180px] bottom-[-260px] h-[520px] w-[520px] rounded-full bg-[#ff5a1f]/[0.06] blur-[130px]" />

        <div className="relative mx-auto grid max-w-[1400px] gap-16 px-6 lg:grid-cols-[1fr_.8fr] lg:items-center lg:px-10">
          <div>
            <p className="reveal-up mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-[#ff5a1f]">
              Contact Fonitas
            </p>
            <h1 className="reveal-up reveal-delay-1 font-display max-w-4xl text-5xl font-semibold leading-[.98] sm:text-6xl lg:text-8xl">
              Bring your application to market.
            </h1>
            <p className="reveal-up reveal-delay-2 mt-7 max-w-xl text-base leading-7 text-white/45 sm:text-lg">
              Tell us what you are building, where you want to publish it, and
              where you need support. We can start with publishing and expand
              into the wider operating workflow.
            </p>

            <div className="reveal-up reveal-delay-3 mt-10 flex flex-wrap gap-3">
              <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-white/55">
                Application publishing
              </span>
              <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-white/55">
                QA & compliance
              </span>
              <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-white/55">
                Revenue & settlement
              </span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[520px]">
            <div className="absolute inset-8 rounded-full bg-[#ff5a1f]/10 blur-[90px]" />
            <div className="relative min-h-[390px] overflow-hidden border border-white/10 bg-white/[0.025] p-6 sm:p-8">
              <div className="absolute right-0 top-0 h-32 w-32 rounded-full border border-[#ff5a1f]/20" />
              <div className="absolute right-8 top-8 h-16 w-16 rounded-full border border-[#ff5a1f]/30" />

              <div className="relative flex h-full min-h-[325px] flex-col justify-between">
                <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.24em] text-white/30">
                  <span>Open channel</span>
                  <span className="flex items-center gap-2 text-[#ff7a3d]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#ff5a1f]" />
                    Available
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="ml-auto max-w-[80%] border border-white/10 bg-white/[0.04] p-4">
                    <p className="text-[10px] uppercase tracking-[0.18em] text-white/25">You</p>
                    <p className="mt-2 text-sm leading-6 text-white/70">
                      We have an application ready for publishing.
                    </p>
                  </div>
                  <div className="max-w-[85%] border border-[#ff5a1f]/20 bg-[#ff5a1f]/[0.07] p-4">
                    <p className="text-[10px] uppercase tracking-[0.18em] text-[#ff7a3d]">Fonitas</p>
                    <p className="mt-2 text-sm leading-6 text-white/70">
                      Let&apos;s map the release, QA, store and settlement path.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {["Application", "Target stores", "Markets", "Revenue model"].map((item) => (
                    <div key={item} className="border border-white/[0.07] px-3 py-2.5 text-[11px] text-white/40">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1400px] gap-16 px-6 py-24 lg:grid-cols-[.65fr_1fr] lg:px-10 lg:py-32">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#ff5a1f]">
            Start a conversation
          </p>
          <h2 className="font-display mt-5 max-w-md text-4xl font-semibold leading-tight sm:text-5xl">
            Tell us what needs to move forward.
          </h2>
          <p className="mt-6 max-w-md text-sm leading-7 text-white/40">
            The more context you share, the easier it is to understand the
            publishing path, operational requirements, and next steps.
          </p>

          <div className="mt-12 space-y-4">
            {[
              ["01", "Application publishing", "Prepare, review, QA and publish."],
              ["02", "Publishing partnership", "Discuss a collaboration around your release workflow."],
              ["03", "Platform conversation", "Explore the wider Fonitas operating model."],
            ].map(([number, title, text]) => (
              <div key={number} className="border-t border-white/[0.08] pt-5">
                <div className="flex gap-5">
                  <span className="text-xs text-[#ff5a1f]">{number}</span>
                  <div>
                    <h3 className="text-sm font-medium text-white/80">{title}</h3>
                    <p className="mt-1 text-xs leading-5 text-white/35">{text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 border-t border-white/[0.08] pt-5">
            <p className="text-xs uppercase tracking-[0.18em] text-white/25">Direct email</p>
            <a href="mailto:hello@fonitas.com" className="mt-2 inline-block text-sm text-white/65 transition hover:text-[#ff7a3d]">
              hello@fonitas.com
            </a>
          </div>
        </div>

        <div className="border border-white/10 bg-white/[0.02] p-6 sm:p-8 lg:p-10">
          {submitted ? (
            <div className="flex min-h-[500px] flex-col items-center justify-center text-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full border border-[#ff5a1f]/30 bg-[#ff5a1f]/10 text-xl text-[#ff7a3d]">
                ✓
              </span>
              <h2 className="font-display mt-6 text-3xl font-semibold">Request received.</h2>
              <p className="mt-4 max-w-sm text-sm leading-6 text-white/40">
                This form is currently a front-end prototype. No request has
                been sent to a backend yet.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-7 rounded-full border border-white/10 px-5 py-2.5 text-sm text-white/65 transition hover:border-white/20 hover:text-white"
              >
                Send another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <label className="block text-sm text-white/65">
                  Your name
                  <input name="name" required className="mt-2 w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-white/20 focus:border-[#ff5a1f]/60" placeholder="Your name" />
                </label>
                <label className="block text-sm text-white/65">
                  Work email
                  <input name="email" type="email" required className="mt-2 w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-white/20 focus:border-[#ff5a1f]/60" placeholder="you@company.com" />
                </label>
              </div>

              <label className="block text-sm text-white/65">
                Request type
                <select name="requestType" required defaultValue="" className="mt-2 w-full rounded-2xl border border-white/10 bg-[#101010] px-4 py-3.5 text-sm text-white outline-none transition focus:border-[#ff5a1f]/60">
                  <option value="" disabled>Select a request</option>
                  {requestTypes.map((type) => <option key={type}>{type}</option>)}
                </select>
              </label>

              <div className="grid gap-6 sm:grid-cols-2">
                <label className="block text-sm text-white/65">
                  Application name
                  <input name="application" className="mt-2 w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-white/20 focus:border-[#ff5a1f]/60" placeholder="Application name" />
                </label>
                <label className="block text-sm text-white/65">
                  Organization
                  <input name="organization" className="mt-2 w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-white/20 focus:border-[#ff5a1f]/60" placeholder="Company or team" />
                </label>
              </div>

              <label className="block text-sm text-white/65">
                Tell us about the application
                <textarea name="message" rows={7} required className="mt-2 w-full resize-none rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-sm leading-6 text-white outline-none transition placeholder:text-white/20 focus:border-[#ff5a1f]/60" placeholder="What are you building, where do you want to publish it, and what support do you need?" />
              </label>

              <button type="submit" className="w-full rounded-full bg-[#ff5a1f] px-5 py-4 text-sm font-semibold text-black transition hover:bg-[#ff7a3d]">
                Send request ↗
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}
