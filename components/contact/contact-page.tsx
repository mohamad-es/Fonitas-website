"use client";

import { FormEvent, useState } from "react";

const requestTypes = [
  "Publish an application",
  "Discuss a publishing partnership",
  "Ask about the platform",
  "Other",
];

const steps = [
  ["01", "Tell us what you are building", "Share the application, organization and where you are in the launch process."],
  ["02", "We map the publishing path", "We look at the relevant lifecycle stages: evaluation, contract, QA, publishing and settlement."],
  ["03", "We define the next step", "The collaboration path, responsibilities and commercial details are handled explicitly."],
];

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="overflow-hidden pt-20">
      <section className="relative border-b border-white/[0.08]">
        <div className="absolute inset-0 grid-bg opacity-25" />
        <div className="absolute -right-48 top-0 h-[620px] w-[620px] rounded-full bg-[#ff5a1f]/10 blur-[150px]" />
        <div className="relative mx-auto grid min-h-[680px] max-w-[1400px] items-end gap-16 px-6 py-20 lg:grid-cols-[1fr_.72fr] lg:px-10 lg:py-28">
          <div>
            <p className="reveal-up mb-7 text-xs font-semibold uppercase tracking-[.28em] text-[#ff5a1f]">Contact Fonitas</p>
            <h1 className="font-display reveal-up reveal-delay-1 max-w-5xl text-[clamp(4rem,8.5vw,8.8rem)] font-semibold leading-[.82]">
              Let&apos;s move<br />your <span className="text-white/25">application</span><br />forward.
            </h1>
            <p className="reveal-up reveal-delay-2 mt-10 max-w-xl text-base leading-7 text-white/45 sm:text-lg">
              Whether you are preparing a first release, looking for a publishing partner or exploring the wider Fonitas platform, start with the application and tell us where you need to go.
            </p>
          </div>

          <div className="relative hidden min-h-[430px] lg:block">
            <div className="absolute right-8 top-10 h-[360px] w-[360px] rounded-full border border-white/10" />
            <div className="absolute right-20 top-22 h-[280px] w-[280px] rounded-full border border-[#ff5a1f]/25" />
            <div className="absolute right-[155px] top-[155px] h-28 w-28 rounded-full bg-[#ff5a1f]/75 blur-[2px] shadow-[0_0_100px_rgba(255,90,31,.55)]" />
            <div className="absolute right-[135px] top-[135px] h-40 w-40 rounded-full border border-[#ff5a1f]/30" />
            <div className="absolute right-0 top-[92px] rounded-full border border-white/10 bg-[#0b0b0b] px-4 py-2 text-[9px] uppercase tracking-[.2em] text-white/45">Application</div>
            <div className="absolute right-[270px] top-0 rounded-full border border-white/10 bg-[#0b0b0b] px-4 py-2 text-[9px] uppercase tracking-[.2em] text-white/45">Review</div>
            <div className="absolute right-[330px] bottom-16 rounded-full border border-white/10 bg-[#0b0b0b] px-4 py-2 text-[9px] uppercase tracking-[.2em] text-white/45">Publishing</div>
            <div className="absolute right-5 bottom-4 rounded-full border border-[#ff5a1f]/25 bg-[#0b0b0b] px-4 py-2 text-[9px] uppercase tracking-[.2em] text-[#ff6a2a]">Settlement</div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/[0.08] bg-[#0b0b0b]">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-6 py-24 lg:grid-cols-[.65fr_1.35fr] lg:px-10 lg:py-32">
          <div>
            <p className="mb-5 text-xs uppercase tracking-[.25em] text-[#ff5a1f]">Start here</p>
            <h2 className="font-display max-w-md text-5xl font-semibold leading-[.9] sm:text-6xl">A clear first conversation.</h2>
          </div>
          <div className="grid border-t border-white/10 md:grid-cols-3 md:border-t-0">
            {steps.map(([number, title, description]) => (
              <article key={number} className="border-b border-white/10 py-8 md:border-l md:border-b-0 md:px-7 md:first:border-l-0 md:first:pl-0">
                <span className="text-xs text-[#ff5a1f]">{number}</span>
                <h3 className="mt-7 max-w-xs text-xl font-medium leading-tight">{title}</h3>
                <p className="mt-5 max-w-xs text-sm leading-6 text-white/35">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-[.58fr_1.42fr] lg:gap-24">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="mb-5 text-xs uppercase tracking-[.25em] text-[#ff5a1f]">Collaboration request</p>
            <h2 className="font-display text-5xl font-semibold leading-[.9] sm:text-6xl">Tell us what needs to move.</h2>
            <p className="mt-7 max-w-sm text-sm leading-6 text-white/35">
              The form is designed around the information needed to understand an application and its intended publishing path.
            </p>
            <div className="mt-12 border-t border-white/10 pt-6">
              <p className="text-[10px] uppercase tracking-[.2em] text-white/25">Direct email</p>
              <a href="mailto:hello@foonitas.com" className="mt-2 inline-block text-lg transition hover:text-[#ff6a2a]">hello@foonitas.com</a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="border-t border-white/10 pt-2">
            <div className="grid gap-9 sm:grid-cols-2">
              <label className="block border-b border-white/10 py-5 focus-within:border-[#ff5a1f]">
                <span className="text-[10px] uppercase tracking-[.2em] text-white/30">Your name</span>
                <input required name="name" type="text" placeholder="John Smith" className="mt-3 w-full bg-transparent text-base outline-none placeholder:text-white/20" />
              </label>
              <label className="block border-b border-white/10 py-5 focus-within:border-[#ff5a1f]">
                <span className="text-[10px] uppercase tracking-[.2em] text-white/30">Work email</span>
                <input required name="email" type="email" placeholder="john@company.com" className="mt-3 w-full bg-transparent text-base outline-none placeholder:text-white/20" />
              </label>
            </div>

            <label className="mt-4 block border-b border-white/10 py-5 focus-within:border-[#ff5a1f]">
              <span className="text-[10px] uppercase tracking-[.2em] text-white/30">Request type</span>
              <select required name="requestType" defaultValue="" className="mt-3 w-full bg-transparent text-base text-white outline-none">
                <option value="" disabled className="bg-[#0d0d0d]">Select a request</option>
                {requestTypes.map((type) => <option key={type} value={type} className="bg-[#0d0d0d]">{type}</option>)}
              </select>
            </label>

            <div className="grid gap-9 sm:grid-cols-2">
              <label className="block border-b border-white/10 py-5 focus-within:border-[#ff5a1f]">
                <span className="text-[10px] uppercase tracking-[.2em] text-white/30">Application name</span>
                <input name="application" type="text" placeholder="Your application" className="mt-3 w-full bg-transparent text-base outline-none placeholder:text-white/20" />
              </label>
              <label className="block border-b border-white/10 py-5 focus-within:border-[#ff5a1f]">
                <span className="text-[10px] uppercase tracking-[.2em] text-white/30">Organization</span>
                <input name="organization" type="text" placeholder="Company or organization" className="mt-3 w-full bg-transparent text-base outline-none placeholder:text-white/20" />
              </label>
            </div>

            <label className="mt-4 block border-b border-white/10 py-5 focus-within:border-[#ff5a1f]">
              <span className="text-[10px] uppercase tracking-[.2em] text-white/30">Tell us about the application</span>
              <textarea required name="message" rows={6} placeholder="Current status, target stores, markets, revenue model, publishing needs and anything else that helps us understand the application..." className="mt-4 w-full resize-none bg-transparent text-base leading-7 outline-none placeholder:text-white/20" />
            </label>

            <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-md text-xs leading-5 text-white/25">Commercial and legal terms are defined separately through the appropriate Fonitas process.</p>
              <button type="submit" className="inline-flex shrink-0 items-center justify-center rounded-full bg-[#ff5a1f] px-8 py-4 text-sm font-semibold text-black transition hover:bg-[#ff7a3d] hover:shadow-[0_0_45px_rgba(255,90,31,.2)]">
                {submitted ? "Request received ✓" : "Submit request ↗"}
              </button>
            </div>
          </form>
        </div>
      </section>

      <section className="border-t border-white/[0.08] bg-[#ff5a1f] text-black">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-8 px-6 py-16 sm:flex-row sm:items-end sm:justify-between lg:px-10 lg:py-20">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[.25em] text-black/55">Not ready to submit?</p>
            <h2 className="font-display mt-4 max-w-3xl text-4xl font-semibold leading-[.9] sm:text-6xl">Explore how the publishing lifecycle works first.</h2>
          </div>
          <a href="/how-it-works" className="inline-flex shrink-0 items-center justify-center rounded-full bg-black px-7 py-4 text-sm font-semibold text-white transition hover:bg-black/80">See how it works <span className="ml-3">↗</span></a>
        </div>
      </section>
    </main>
  );
}
