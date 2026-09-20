"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight } from "lucide-react";

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
      <div className="relative mx-auto max-w-[1400px] px-6 py-20 sm:py-28 lg:px-10 lg:py-40">
        <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:gap-24">
          <div>
            <p className="mb-6 text-xs uppercase tracking-[.28em] text-[#ff5a1f]">Collaboration request</p>
            <h2 className="font-display text-5xl font-semibold leading-[.88] sm:text-7xl lg:text-8xl">Bring your<br />application<br /><span className="text-white/25">to market.</span></h2>
            <p className="mt-8 max-w-md text-sm leading-7 text-white/45 sm:mt-10 sm:text-base">Tell us about the application, organization and publishing goal. The conversation starts with your request; the next steps follow the Fonitas lifecycle.</p>
            <div className="mt-10 border-t border-white/10 pt-7 sm:mt-14">
              <p className="text-[10px] uppercase tracking-[.2em] text-white/25">Email</p>
              <a href="mailto:hello@fonitas.com" className="mt-2 inline-block break-all text-lg transition hover:text-[#ff6a2a]">hello@fonitas.com</a>
              <p className="mt-8 text-[10px] uppercase tracking-[.2em] text-white/25">What happens next</p>
              <p className="mt-2 flex flex-wrap items-center gap-x-1 gap-y-1 text-sm leading-6 text-white/55"><span>Application details</span><ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" strokeWidth={1.8} /><span>evaluation</span><ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" strokeWidth={1.8} /><span>commercial discussion</span><ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" strokeWidth={1.8} /><span>publishing path.</span></p>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="rounded-[24px] border border-white/10 bg-[#0d0d0d]/90 p-6 backdrop-blur-xl sm:rounded-[28px] sm:p-10">
            <div className="grid gap-7 sm:grid-cols-2 sm:gap-8">
              <label className="group block"><span className="text-[10px] uppercase tracking-[.2em] text-white/30">Your name</span><input required name="name" type="text" placeholder="John Smith" className="mt-3 w-full border-b border-white/10 bg-transparent pb-4 text-base outline-none placeholder:text-white/20 focus:border-[#ff5a1f]" /></label>
              <label className="group block"><span className="text-[10px] uppercase tracking-[.2em] text-white/30">Work email</span><input required name="email" type="email" placeholder="john@company.com" className="mt-3 w-full border-b border-white/10 bg-transparent pb-4 text-base outline-none placeholder:text-white/20 focus:border-[#ff5a1f]" /></label>
            </div>
            <label className="mt-8 block sm:mt-9"><span className="text-[10px] uppercase tracking-[.2em] text-white/30">Request type</span><select required name="requestType" defaultValue="" className="mt-3 w-full border-b border-white/10 bg-transparent pb-4 text-base text-white outline-none focus:border-[#ff5a1f]"><option value="" disabled className="bg-[#0d0d0d]">Select a request</option>{requestTypes.map((type) => <option key={type} className="bg-[#0d0d0d]" value={type}>{type}</option>)}</select></label>
            <div className="mt-8 grid gap-7 sm:mt-9 sm:grid-cols-2 sm:gap-8">
              <label className="group block"><span className="text-[10px] uppercase tracking-[.2em] text-white/30">Application name</span><input name="application" type="text" placeholder="Your application" className="mt-3 w-full border-b border-white/10 bg-transparent pb-4 text-base outline-none placeholder:text-white/20 focus:border-[#ff5a1f]" /></label>
              <label className="group block"><span className="text-[10px] uppercase tracking-[.2em] text-white/30">Organization</span><input name="organization" type="text" placeholder="Company or organization" className="mt-3 w-full border-b border-white/10 bg-transparent pb-4 text-base outline-none placeholder:text-white/20 focus:border-[#ff5a1f]" /></label>
            </div>
            <label className="mt-8 block sm:mt-9"><span className="text-[10px] uppercase tracking-[.2em] text-white/30">Tell us about the application</span><textarea required name="message" rows={5} placeholder="Platform, current status, target stores, markets, revenue model and anything else that helps us understand the application..." className="mt-3 w-full resize-none border-b border-white/10 bg-transparent pb-4 text-base outline-none placeholder:text-white/20 focus:border-[#ff5a1f]" /></label>
            <div className="mt-8 flex flex-col gap-5 sm:mt-9 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-xs text-xs leading-5 text-white/25">Submitting a request starts the collaboration conversation. Commercial and legal terms are defined separately through the appropriate Fonitas process.</p>
              <button type="submit" className="group inline-flex w-full shrink-0 items-center justify-center rounded-full bg-[#ff5a1f] px-7 py-4 text-sm font-semibold text-black transition hover:bg-[#ff7a3d] hover:shadow-[0_0_45px_rgba(255,90,31,.2)] sm:w-auto">{submitted ? "Request received ✓" : <>Submit request <ArrowUpRight aria-hidden="true" className="ml-1 inline h-3.5 w-3.5" strokeWidth={1.8} /></>}</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
