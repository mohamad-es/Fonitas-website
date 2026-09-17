"use client";

import { FormEvent, useState } from "react";

const requestTypes = [
  "Publish an application",
  "Discuss a publishing partnership",
  "Ask about the platform",
  "Other",
];

const routes = [
  ["01", "Application publishing", "Move an application through evaluation, contract, QA and store publishing."],
  ["02", "Publishing partnership", "Discuss responsibilities, publishing models and the operating path around a release."],
  ["03", "Platform conversation", "Explore the wider Fonitas platform and the services that sit around publishing."],
];

const signals = ["Application status", "Target stores", "Markets", "Revenue model", "Publishing needs"];

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="overflow-hidden pt-20">
      {/* HERO */}
      <section className="relative min-h-[720px] border-b border-white/[0.08]">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-[#ff5a1f]/10 blur-[150px]" />
        <div className="absolute right-[-180px] top-[-120px] h-[620px] w-[620px] rounded-full bg-[#ff5a1f]/8 blur-[150px]" />

        <div className="relative mx-auto grid min-h-[720px] max-w-[1400px] items-center gap-16 px-6 py-24 lg:grid-cols-[1.05fr_.95fr] lg:px-10 lg:py-28">
          <div>
            <p className="reveal-up mb-7 text-xs font-semibold uppercase tracking-[.28em] text-[#ff5a1f]">Contact Fonitas</p>
            <h1 className="font-display reveal-up reveal-delay-1 max-w-4xl text-[clamp(4.2rem,8.8vw,9rem)] font-semibold leading-[.79]">
              Start the<br />conversation.<br /><span className="text-white/20">Move forward.</span>
            </h1>
            <p className="reveal-up reveal-delay-2 mt-10 max-w-xl text-base leading-7 text-white/45 sm:text-lg">
              Tell us what you are building, where it is in the lifecycle and what you need next. We will use that context to understand the right publishing path.
            </p>
            <div className="reveal-up reveal-delay-3 mt-10 flex flex-wrap gap-2">
              <span className="rounded-full border border-white/10 px-4 py-2 text-[10px] uppercase tracking-[.18em] text-white/45">Application first</span>
              <span className="rounded-full border border-[#ff5a1f]/25 bg-[#ff5a1f]/5 px-4 py-2 text-[10px] uppercase tracking-[.18em] text-[#ff6a2a]">Explicit workflow</span>
            </div>
          </div>

          {/* Contact conversation visual */}
          <div className="relative mx-auto h-[500px] w-full max-w-[540px]">
            <div className="absolute inset-0 rounded-[2rem] border border-white/[0.07] bg-white/[0.015]" />
            <div className="absolute left-8 right-8 top-8 flex items-center justify-between border-b border-white/10 pb-5">
              <span className="font-mono text-[9px] uppercase tracking-[.2em] text-white/25">Conversation / 01</span>
              <span className="flex items-center gap-2 text-[9px] uppercase tracking-[.18em] text-[#ff6a2a]"><i className="h-1.5 w-1.5 rounded-full bg-[#ff5a1f] shadow-[0_0_12px_rgba(255,90,31,.8)]" /> Open channel</span>
            </div>

            <div className="absolute left-8 top-[105px] max-w-[230px] rounded-2xl rounded-tl-sm border border-white/10 bg-[#111111] p-5 shadow-2xl">
              <p className="text-[9px] uppercase tracking-[.18em] text-white/25">You</p>
              <p className="mt-3 text-sm leading-6 text-white/65">We have an application ready for publishing.</p>
              <span className="mt-4 block text-[9px] text-white/20">12:41 PM</span>
            </div>

            <div className="absolute right-8 top-[225px] max-w-[255px] rounded-2xl rounded-tr-sm border border-[#ff5a1f]/20 bg-[#ff5a1f]/[0.08] p-5 shadow-[0_20px_80px_rgba(255,90,31,.08)]">
              <p className="text-[9px] uppercase tracking-[.18em] text-[#ff6a2a]/60">Fonitas</p>
              <p className="mt-3 text-sm leading-6 text-white/70">Let&apos;s map the publishing path around it.</p>
              <span className="mt-4 block text-[9px] text-white/20">12:42 PM</span>
            </div>

            <div className="absolute bottom-8 left-8 right-8 rounded-xl border border-white/10 bg-[#0c0c0c] p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#ff5a1f]/10 text-[#ff6a2a]">
                  <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true"><path d="M4 6.5 12 12l8-5.5M5.5 18h13A1.5 1.5 0 0 0 20 16.5v-9A1.5 1.5 0 0 0 18.5 6h-13A1.5 1.5 0 0 0 4 7.5v9A1.5 1.5 0 0 0 5.5 18Z" stroke="currentColor" strokeWidth="1.4" /></svg>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[9px] uppercase tracking-[.18em] text-white/25">Your request</p>
                  <p className="mt-1 truncate text-xs text-white/50">Application publishing · ready to review</p>
                </div>
                <span className="rounded-full border border-white/10 px-3 py-1.5 text-[8px] uppercase tracking-[.15em] text-white/25">Send</span>
              </div>
            </div>

            <div className="absolute left-1/2 top-1/2 h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#ff5a1f]/[0.07]" />
            <div className="absolute right-[12%] top-[18%] h-1.5 w-1.5 rounded-full bg-[#ff5a1f] shadow-[0_0_18px_rgba(255,90,31,.8)]" />
            <div className="absolute bottom-[28%] left-[14%] h-1 w-1 rounded-full bg-white/30" />
          </div>
        </div>
      </section>

      {/* ROUTES */}
      <section className="border-b border-white/[0.08] bg-[#0a0a0a]">
        <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-32">
          <div className="grid gap-14 lg:grid-cols-[.62fr_1.38fr]">
            <div>
              <p className="mb-5 text-xs uppercase tracking-[.25em] text-[#ff5a1f]">Choose your route</p>
              <h2 className="font-display max-w-md text-5xl font-semibold leading-[.88] sm:text-6xl">One conversation. A clear next step.</h2>
              <p className="mt-7 max-w-sm text-sm leading-6 text-white/35">Start with the part of the Fonitas lifecycle that is most relevant to your application or organization.</p>
            </div>

            <div className="border-t border-white/10">
              {routes.map(([number, title, description]) => (
                <article key={number} className="group grid gap-6 border-b border-white/10 py-8 sm:grid-cols-[70px_1fr_1.15fr] sm:items-start sm:gap-8">
                  <span className="text-xs text-[#ff5a1f]">{number}</span>
                  <h3 className="text-xl font-medium leading-tight transition group-hover:text-[#ff6a2a]">{title}</h3>
                  <p className="max-w-md text-sm leading-6 text-white/35">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FORM */}
      <section className="relative mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-32">
        <div className="absolute right-[-160px] top-[180px] h-[400px] w-[400px] rounded-full bg-[#ff5a1f]/7 blur-[130px]" />
        <div className="relative grid gap-16 lg:grid-cols-[.58fr_1.42fr] lg:gap-24">
          <aside className="lg:sticky lg:top-32 lg:self-start">
            <p className="mb-5 text-xs uppercase tracking-[.25em] text-[#ff5a1f]">Collaboration request</p>
            <h2 className="font-display text-5xl font-semibold leading-[.88] sm:text-6xl">Give us the signal.</h2>
            <p className="mt-7 max-w-sm text-sm leading-6 text-white/35">A useful first message does not need to be long. These are the signals that help frame the conversation.</p>

            <div className="mt-10 border-y border-white/10 py-5">
              {signals.map((signal, index) => (
                <div key={signal} className="flex items-center justify-between py-2 text-xs">
                  <span className="text-white/40">{signal}</span>
                  <span className="font-mono text-[9px] text-white/15">0{index + 1}</span>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <p className="text-[10px] uppercase tracking-[.2em] text-white/25">Direct email</p>
              <a href="mailto:hello@foonitas.com" className="mt-2 inline-block text-lg transition hover:text-[#ff6a2a]">hello@foonitas.com</a>
            </div>
          </aside>

          <form onSubmit={handleSubmit} className="border-t border-white/10 pt-2">
            <div className="mb-8 flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase tracking-[.2em] text-white/20">Request / 01</span>
              <span className="text-[10px] uppercase tracking-[.18em] text-white/20">All fields marked * are required</span>
            </div>

            <div className="grid gap-9 sm:grid-cols-2">
              <label className="block border-b border-white/10 py-5 focus-within:border-[#ff5a1f]">
                <span className="text-[10px] uppercase tracking-[.2em] text-white/30">Your name *</span>
                <input required name="name" type="text" placeholder="John Smith" className="mt-3 w-full bg-transparent text-base outline-none placeholder:text-white/15" />
              </label>
              <label className="block border-b border-white/10 py-5 focus-within:border-[#ff5a1f]">
                <span className="text-[10px] uppercase tracking-[.2em] text-white/30">Work email *</span>
                <input required name="email" type="email" placeholder="john@company.com" className="mt-3 w-full bg-transparent text-base outline-none placeholder:text-white/15" />
              </label>
            </div>

            <label className="mt-4 block border-b border-white/10 py-5 focus-within:border-[#ff5a1f]">
              <span className="text-[10px] uppercase tracking-[.2em] text-white/30">Request type *</span>
              <select required name="requestType" defaultValue="" className="mt-3 w-full bg-transparent text-base text-white outline-none">
                <option value="" disabled className="bg-[#0d0d0d]">Select a request</option>
                {requestTypes.map((type) => <option key={type} value={type} className="bg-[#0d0d0d]">{type}</option>)}
              </select>
            </label>

            <div className="grid gap-9 sm:grid-cols-2">
              <label className="block border-b border-white/10 py-5 focus-within:border-[#ff5a1f]">
                <span className="text-[10px] uppercase tracking-[.2em] text-white/30">Application name</span>
                <input name="application" type="text" placeholder="Your application" className="mt-3 w-full bg-transparent text-base outline-none placeholder:text-white/15" />
              </label>
              <label className="block border-b border-white/10 py-5 focus-within:border-[#ff5a1f]">
                <span className="text-[10px] uppercase tracking-[.2em] text-white/30">Organization</span>
                <input name="organization" type="text" placeholder="Company or organization" className="mt-3 w-full bg-transparent text-base outline-none placeholder:text-white/15" />
              </label>
            </div>

            <label className="mt-4 block border-b border-white/10 py-5 focus-within:border-[#ff5a1f]">
              <span className="text-[10px] uppercase tracking-[.2em] text-white/30">Tell us about the application *</span>
              <textarea required name="message" rows={7} placeholder="Current status, target stores, markets, revenue model, publishing needs and anything else that helps us understand the application..." className="mt-4 w-full resize-none bg-transparent text-base leading-7 outline-none placeholder:text-white/15" />
            </label>

            <div className="mt-10 flex flex-col gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-md text-xs leading-5 text-white/25">Commercial and legal terms are defined separately through the appropriate Fonitas process.</p>
              <button type="submit" className="inline-flex shrink-0 items-center justify-center rounded-full bg-[#ff5a1f] px-8 py-4 text-sm font-semibold text-black transition hover:bg-[#ff7a3d] hover:shadow-[0_0_45px_rgba(255,90,31,.2)]">
                {submitted ? "Request received ✓" : "Submit request ↗"}
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="border-t border-white/[0.08] bg-[#ff5a1f] text-black">
        <div className="mx-auto max-w-[1400px] px-6 py-20 lg:px-10 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[.25em] text-black/50">Prefer to explore first?</p>
              <h2 className="font-display mt-4 max-w-4xl text-5xl font-semibold leading-[.84] sm:text-7xl">See the path before you start the conversation.</h2>
            </div>
            <a href="/how-it-works" className="inline-flex h-fit items-center justify-center rounded-full bg-black px-7 py-4 text-sm font-semibold text-white transition hover:bg-black/80">Explore the lifecycle <span className="ml-3">↗</span></a>
          </div>
        </div>
      </section>
    </main>
  );
}
