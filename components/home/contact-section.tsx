"use client";

import { FormEvent, useState } from "react";

const requestTypes = ["Publish an application", "Discuss a publishing partnership", "Ask about the platform", "Other"];

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="relative overflow-hidden border-t border-white/[0.08]">
      <div className="absolute -left-56 top-1/3 h-[520px] w-[520px] rounded-full bg-[#ff5a1f]/10 blur-[150px]" />
      <div className="absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-[#ff5a1f]/[0.07] blur-[130px]" />

      <div className="relative mx-auto max-w-[1400px] px-6 py-28 lg:px-10 lg:py-40">
        <div className="grid gap-16 lg:grid-cols-[.85fr_1.15fr] lg:gap-24">
          <div>
            <p className="mb-6 text-xs uppercase tracking-[.28em] text-[#ff5a1f]">Collaboration request</p>
            <h2 className="font-display text-6xl font-semibold leading-[.88] sm:text-8xl">Bring your<br />application<br /><span className="text-white/25">to market.</span></h2>
            <p className="mt-10 max-w-md text-base leading-7 text-white/45">Tell us about the application, organization and publishing goal. The conversation starts with your request; the next steps follow the Fonitas lifecycle.</p>

            <div className="mt-14 border-t border-white/10 pt-7">
              <p className="text-[10px] uppercase tracking-[.2em] text-white/25">Email</p>
              <a href="mailto:hello@fonitas.com" className="mt-2 inline-block text-lg transition hover:text-[#ff6a2a]">hello@fonitas.com</a>
              <p className="mt-8 text-[10px] uppercase tracking-[.2em] text-white/25">What happens next</p>
              <p className="mt-2 text-sm leading-6 text-white/55">Application details → evaluation → commercial discussion → publishing path.</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-[28px] border border-white/10 bg-[#0d0d0d]/90 p-7 backdrop-blur-xl sm:p-10">
            <div className="grid gap-8 sm:grid-cols-2">
              <label className="group block">
                <span className="text-[10px] uppercase tracking-[.2em] text-white/30">Your name</span>
                <input required name="name" type="text" placeholder="John Smith" className="mt-3 w-full border-b border-white/10 bg-transparent pb-4 text-base outline-none placeholder:text-white/20 focus:border-[#ff5a1f]" />
              </label>
              <label className="group block">
                <span className="text-[10px] uppercase tracking-[.2em] text-white/30">Work email</span>
                <input required name="email" type="email" placeholder="john@company.com" className="mt-3 w-full border-b border-white/10 bg-transparent pb-4 text-base outline-none placeholder:text-white/20 focus:border-[#ff5a1f]" />
              </label>
            </div>

            <label className="mt-9 block">
              <span className="text-[10px] uppercase tracking-[.2em] text-white/30">Request type</span>
              <select required name="requestType" defaultValue="" className="mt-3 w-full border-b border-white/10 bg-transparent pb-4 text-base text-white outline-none focus:border-[#ff5a1f]">
                <option value="" disabled className="bg-[#0d0d0d]">Select a request</option>
                {requestTypes.map((type) => <option key={type} className="bg-[#0d0d0d]" value={type}>{type}</option>)}
              </select>
            </label>

            <div className="mt-9 grid gap-8 sm:grid-cols-2">
              <label className="group block">
                <span className="text-[10px] uppercase tracking-[.2em] text-white/30">Application name</span>
                <input name="application" type="text" placeholder="Your application" className="mt-3 w-full border-b border-white/10 bg-transparent pb-4 text-base outline-none placeholder:text-white/20 focus:border-[#ff5a1f]" />
              </label>
              <label className="group block">
                <span className="text-[10px] uppercase tracking-[.2em] text-white/30">Organization</span>
                <input name="organization" type="text" placeholder="Company or organization" className="mt-3 w-full border-b border-white/10 bg-transparent pb-4 text-base outline-none placeholder:text-white/20 focus:border-[#ff5a1f]" />
              </label>
            </div>

            <label className="mt-9 block">
              <span className="text-[10px] uppercase tracking-[.2em] text-white/30">Tell us about the application</span>
              <textarea required name="message" rows={5} placeholder="Platform, current status, target stores, markets, revenue model and anything else that helps us understand the application..." className="mt-3 w-full resize-none border-b border-white/10 bg-transparent pb-4 text-base outline-none placeholder:text-white/20 focus:border-[#ff5a1f]" />
            </label>

            <div className="mt-9 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-xs text-xs leading-5 text-white/25">Submitting a request starts the collaboration conversation. Commercial and legal terms are defined separately through the appropriate Fonitas process.</p>
              <button type="submit" className="group inline-flex shrink-0 items-center justify-center rounded-full bg-[#ff5a1f] px-7 py-4 text-sm font-semibold text-black transition hover:bg-[#ff7a3d] hover:shadow-[0_0_45px_rgba(255,90,31,.2)]">{submitted ? "Request received ✓" : "Submit request ↗"}</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
