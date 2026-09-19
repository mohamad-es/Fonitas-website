"use client";

import { FormEvent, useState } from "react";

const requestTypes = [
  "Publish an application",
  "Discuss a publishing partnership",
  "Ask about the platform",
  "Other",
];

const routes = [
  ["01", "Application publishing", "Prepare, review, QA and publish."],
  ["02", "Publishing partnership", "Shape a release workflow around your application."],
  ["03", "Platform conversation", "Explore the wider Fonitas operating model."],
] as const;

const briefItems = [
  ["Application", "Your product or release"],
  ["Target stores", "Where it needs to ship"],
  ["Markets", "Where users will access it"],
  ["Revenue model", "How the application earns"],
] as const;

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="bg-[#070707] text-[#f4f2ed]">
      <section className="relative overflow-hidden border-b border-white/[0.07] pt-36 pb-24 lg:pt-44 lg:pb-32">
        <div className="absolute inset-0 grid-bg opacity-25" />
        <div className="absolute -right-56 top-8 h-[620px] w-[620px] rounded-full bg-[#ff5a1f]/10 blur-[140px]" />
        <div className="absolute -left-48 bottom-[-280px] h-[520px] w-[520px] rounded-full bg-[#ff5a1f]/[0.05] blur-[130px]" />

        <div className="relative mx-auto grid max-w-[1400px] gap-16 px-6 lg:grid-cols-[1.05fr_.75fr] lg:items-end lg:px-10">
          <div>
            <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] text-white/25">
              <span className="text-[#ff5a1f]">Contact</span>
              <span className="h-px w-10 bg-white/10" />
              <span>Open channel</span>
            </div>
            <h1 className="reveal-up reveal-delay-1 font-display mt-7 max-w-5xl text-5xl font-semibold leading-[.94] sm:text-7xl lg:text-[8rem]">
              Bring your<br /><span className="text-white/35">application</span> to market.
            </h1>
            <p className="reveal-up reveal-delay-2 mt-8 max-w-2xl text-base leading-7 text-white/45 sm:text-lg">
              Tell us what you are building, where you want to publish it, and where you need support. We can start with publishing and expand into the wider operating workflow.
            </p>
            <div className="mt-10 flex items-center gap-3 text-xs text-white/35">
              <span className="flex h-2 w-2 rounded-full bg-[#ff5a1f] shadow-[0_0_16px_rgba(255,90,31,.8)]" />
              Available for publishing conversations
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-8 rounded-full bg-[#ff5a1f]/10 blur-[90px]" />
            <div className="relative border border-white/10 bg-white/[0.025] p-6 sm:p-8">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 text-[10px] uppercase tracking-[0.22em]">
                <span className="text-white/25">Communication system</span>
                <span className="text-[#ff7a3d]">01 / 01</span>
              </div>
              <div className="py-10">
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center border border-white/10 bg-white/[0.035] text-xs text-white/60">YOU</div>
                  <div className="h-px flex-1 bg-gradient-to-r from-white/15 via-[#ff5a1f]/70 to-white/10" />
                  <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-[#ff5a1f]/40 bg-[#ff5a1f]/10 text-[11px] font-semibold tracking-[0.16em] text-[#ff7a3d] shadow-[0_0_50px_rgba(255,90,31,.15)]">FONITAS</div>
                </div>
                <div className="mt-10 border-l border-[#ff5a1f]/30 pl-5">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#ff7a3d]">First signal</p>
                  <p className="mt-3 text-sm leading-6 text-white/60">Application → QA → Publishing → Settlement</p>
                </div>
              </div>
              <div className="grid grid-cols-2 border-t border-white/[0.08]">
                {["Application", "Target stores", "Markets", "Revenue model"].map((item, index) => (
                  <div key={item} className={`border-white/[0.08] px-3 py-3 text-[10px] uppercase tracking-[0.14em] text-white/30 ${index % 2 === 0 ? "border-r" : ""} ${index < 2 ? "border-b" : ""}`}>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-16 lg:grid-cols-[.55fr_1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#ff5a1f]">Choose a route</p>
            <h2 className="font-display mt-5 max-w-md text-4xl font-semibold leading-tight sm:text-5xl">Start with the conversation that fits.</h2>
            <p className="mt-6 max-w-md text-sm leading-7 text-white/40">Give us enough context to understand the release, the operating requirements, and the path ahead.</p>
          </div>
          <div className="border-t border-white/[0.08]">
            {routes.map(([number, title, text]) => (
              <div key={number} className="group grid gap-5 border-b border-white/[0.08] py-7 sm:grid-cols-[60px_1fr_auto] sm:items-center">
                <span className="text-xs text-[#ff5a1f]">{number}</span>
                <div>
                  <h3 className="text-base font-medium text-white/80 transition group-hover:text-white">{title}</h3>
                  <p className="mt-1 text-sm leading-6 text-white/35">{text}</p>
                </div>
                <span className="text-lg text-white/20 transition group-hover:translate-x-1 group-hover:text-[#ff7a3d]">↗</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/[0.07] bg-white/[0.012]">
        <div className="mx-auto grid max-w-[1400px] gap-14 px-6 py-24 lg:grid-cols-[.62fr_1fr] lg:px-10 lg:py-32">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#ff5a1f]">Request brief</p>
            <h2 className="font-display mt-5 max-w-md text-4xl font-semibold leading-tight sm:text-5xl">A little context goes a long way.</h2>
            <p className="mt-6 max-w-md text-sm leading-7 text-white/40">These are the signals that help map your application to the publishing workflow.</p>
            <div className="mt-10 space-y-0 border-t border-white/[0.08]">
              {briefItems.map(([label, detail]) => (
                <div key={label} className="flex items-center justify-between gap-5 border-b border-white/[0.08] py-4">
                  <span className="text-xs text-white/65">{label}</span>
                  <span className="text-right text-[11px] text-white/25">{detail}</span>
                </div>
              ))}
            </div>
            <div className="mt-10 border-t border-white/[0.08] pt-5">
              <p className="text-[10px] uppercase tracking-[0.18em] text-white/25">Direct channel</p>
              <a href="mailto:hello@fonitas.com" className="mt-2 inline-block text-sm text-white/65 transition hover:text-[#ff7a3d]">hello@fonitas.com</a>
            </div>
          </div>

          <div className="border border-white/10 bg-[#0b0b0b] p-6 sm:p-8 lg:p-10">
            {submitted ? (
              <div className="flex min-h-[520px] flex-col items-center justify-center text-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full border border-[#ff5a1f]/30 bg-[#ff5a1f]/10 text-xl text-[#ff7a3d]">✓</span>
                <p className="mt-6 text-[10px] uppercase tracking-[0.24em] text-[#ff7a3d]">Signal received</p>
                <h2 className="font-display mt-4 text-3xl font-semibold">Request received.</h2>
                <p className="mt-4 max-w-sm text-sm leading-6 text-white/40">This form is currently a front-end prototype. No request has been sent to a backend yet.</p>
                <button type="button" onClick={() => setSubmitted(false)} className="mt-7 rounded-full border border-white/10 px-5 py-2.5 text-sm text-white/65 transition hover:border-white/20 hover:text-white">Send another</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-5">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.22em] text-white/25">Contact form</p>
                    <p className="mt-1 text-sm text-white/55">Start the release conversation.</p>
                  </div>
                  <span className="text-[10px] text-white/20">FORM / 01</span>
                </div>
                <div className="grid gap-6 sm:grid-cols-2">
                  <label className="block text-sm text-white/65">Your name<input name="name" required className="mt-2 w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-white/20 focus:border-[#ff5a1f]/60" placeholder="Your name" /></label>
                  <label className="block text-sm text-white/65">Work email<input name="email" type="email" required className="mt-2 w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-white/20 focus:border-[#ff5a1f]/60" placeholder="you@company.com" /></label>
                </div>
                <label className="block text-sm text-white/65">Request type<select name="requestType" required defaultValue="" className="mt-2 w-full rounded-2xl border border-white/10 bg-[#101010] px-4 py-3.5 text-sm text-white outline-none transition focus:border-[#ff5a1f]/60"><option value="" disabled>Select a request</option>{requestTypes.map((type) => <option key={type}>{type}</option>)}</select></label>
                <div className="grid gap-6 sm:grid-cols-2">
                  <label className="block text-sm text-white/65">Application name<input name="application" className="mt-2 w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-white/20 focus:border-[#ff5a1f]/60" placeholder="Application name" /></label>
                  <label className="block text-sm text-white/65">Organization<input name="organization" className="mt-2 w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-white/20 focus:border-[#ff5a1f]/60" placeholder="Company or team" /></label>
                </div>
                <label className="block text-sm text-white/65">Publishing needs<textarea name="message" rows={7} required className="mt-2 w-full resize-none rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-sm leading-6 text-white outline-none transition placeholder:text-white/20 focus:border-[#ff5a1f]/60" placeholder="What are you building, where do you want to publish it, and what support do you need?" /></label>
                <button type="submit" className="w-full rounded-full bg-[#ff5a1f] px-5 py-4 text-sm font-semibold text-black transition hover:bg-[#ff7a3d]">Send request ↗</button>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-20 lg:px-10 lg:py-24">
        <div className="flex flex-col justify-between gap-8 border-t border-white/[0.08] pt-8 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-white/25">Final channel</p>
            <h2 className="font-display mt-3 text-3xl font-semibold sm:text-4xl">Start with the release.</h2>
          </div>
          <a href="mailto:hello@fonitas.com" className="group inline-flex items-center gap-3 text-sm text-white/60 transition hover:text-white">
            hello@fonitas.com
            <span className="text-[#ff5a1f] transition group-hover:translate-x-1">↗</span>
          </a>
        </div>
      </section>
    </main>
  );
}
