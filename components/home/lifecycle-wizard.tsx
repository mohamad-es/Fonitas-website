"use client";

import { useState } from "react";

const steps = [
  {
    number: "01",
    eyebrow: "Start",
    title: "Collaboration request",
    description: "Start with the application, organization and publishing opportunity.",
    signal: "Request opened",
  },
  {
    number: "02",
    eyebrow: "Register",
    title: "Application registration",
    description: "Create the operational record that will move through the publishing lifecycle.",
    signal: "Application recorded",
  },
  {
    number: "03",
    eyebrow: "Evaluate",
    title: "Evaluation",
    description: "Assess readiness, risk and the next operational step before publishing rights are activated.",
    signal: "Readiness assessed",
  },
  {
    number: "04",
    eyebrow: "Define",
    title: "Contract & license",
    description: "Set publishing scope, stores, geography, duration and commercial terms.",
    signal: "Publishing terms defined",
  },
  {
    number: "05",
    eyebrow: "Validate",
    title: "QA & compliance",
    description: "Verify build integrity, security, manual QA and compliance before submission.",
    signal: "Release validated",
  },
  {
    number: "06",
    eyebrow: "Publish",
    title: "Publishing",
    description: "Prepare assets and builds, then record the human-led store submission.",
    signal: "Submission recorded",
  },
  {
    number: "07",
    eyebrow: "Collect",
    title: "Revenue collection",
    description: "Bring post-publication revenue facts into the financial workflow.",
    signal: "Revenue imported",
  },
  {
    number: "08",
    eyebrow: "Reconcile",
    title: "Reconciliation",
    description: "Match external revenue facts against costs and the active contractual rules.",
    signal: "Financial facts reconciled",
  },
  {
    number: "09",
    eyebrow: "Close",
    title: "Settlement",
    description: "Create settlement, statement and payment records to close the financial loop.",
    signal: "Financial close",
  },
];

function StepVisual({ index }: { index: number }) {
  const progress = ((index + 1) / steps.length) * 100;

  return (
    <div className="relative min-h-[290px] overflow-hidden rounded-[24px] border border-white/10 bg-[#0b0b0b] sm:min-h-[350px]">
      <div className="absolute inset-0 opacity-60 [background-image:linear-gradient(rgba(255,255,255,.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.045)_1px,transparent_1px)] [background-size:48px_48px]" />
      <div className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#ff5a1f]/15 shadow-[0_0_90px_rgba(255,90,31,.08)]" />
      <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
      <div className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 rotate-45 items-center justify-center rounded-[20px] bg-[#ff5a1f] shadow-[0_0_80px_rgba(255,90,31,.35)] transition-transform duration-500">
        <span className="-rotate-45 text-[9px] font-semibold uppercase tracking-[.16em] text-black">OS</span>
      </div>

      {[
        ["Application", "left-[8%] top-[18%]"],
        ["Contract", "right-[8%] top-[20%]"],
        ["QA", "left-[12%] bottom-[18%]"],
        ["Store", "right-[10%] bottom-[20%]"],
      ].map(([label, position]) => (
        <div key={label} className={`absolute ${position} flex items-center gap-2 rounded-full border border-white/10 bg-[#101010]/90 px-3 py-2 backdrop-blur-xl`}>
          <span className="h-1.5 w-1.5 rounded-full bg-[#ff5a1f]" />
          <span className="text-[8px] uppercase tracking-[.16em] text-white/45">{label}</span>
        </div>
      ))}

      <div className="absolute left-[20%] right-[20%] top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-[#ff5a1f]/35 to-transparent" />
      <div className="absolute bottom-5 left-6 right-6">
        <div className="flex items-center justify-between text-[9px] uppercase tracking-[.18em] text-white/25">
          <span>Lifecycle progress</span>
          <span>{String(index + 1).padStart(2, "0")} / {steps.length}</span>
        </div>
        <div className="mt-3 h-1 overflow-hidden rounded-full bg-white/10">
          <div className="h-full rounded-full bg-[#ff5a1f] transition-all duration-500" style={{ width: `${progress}%` }} />
        </div>
      </div>
    </div>
  );
}

export function LifecycleWizard() {
  const [active, setActive] = useState(0);
  const step = steps[active];

  return (
    <div className="mt-14 lg:mt-16">
      <div className="overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex min-w-max gap-2">
          {steps.map((item, index) => (
            <button
              key={item.number}
              type="button"
              onClick={() => setActive(index)}
              aria-current={active === index ? "step" : undefined}
              className={`group flex items-center gap-3 rounded-full border px-4 py-2.5 text-left transition-all duration-300 ${
                active === index
                  ? "border-[#ff5a1f]/45 bg-[#ff5a1f]/10 text-white"
                  : "border-white/10 bg-white/[0.02] text-white/35 hover:border-white/20 hover:text-white/70"
              }`}
            >
              <span className={`text-[10px] font-medium transition-colors ${active === index ? "text-[#ff6a2a]" : "text-white/25"}`}>{item.number}</span>
              <span className="text-xs">{item.eyebrow}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="grid overflow-hidden rounded-[28px] border border-white/10 bg-[#0d0d0d] lg:grid-cols-[.92fr_1.08fr]">
        <div className="order-2 flex flex-col justify-between border-t border-white/10 p-7 sm:p-9 lg:order-1 lg:border-r lg:border-t-0 lg:p-11">
          <div>
            <div className="flex items-center gap-3 text-[10px] uppercase tracking-[.22em] text-[#ff5a1f]">
              <span>{step.number}</span>
              <span className="h-px w-8 bg-[#ff5a1f]/40" />
              <span>{step.eyebrow}</span>
            </div>
            <h3 className="font-display mt-7 max-w-xl text-4xl font-semibold leading-[.92] sm:text-6xl">{step.title}</h3>
            <p className="mt-7 max-w-lg text-sm leading-7 text-white/40 sm:text-base">{step.description}</p>
          </div>

          <div className="mt-12 border-t border-white/10 pt-6">
            <p className="text-[9px] uppercase tracking-[.2em] text-white/25">What happens here</p>
            <div className="mt-3 flex items-center justify-between gap-4">
              <span className="text-sm text-white/70">{step.signal}</span>
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#ff5a1f]/25 text-[#ff6a2a]">↗</span>
            </div>
          </div>
        </div>

        <div className="order-1 p-3 sm:p-4 lg:order-2 lg:p-5">
          <StepVisual index={active} />
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between">
        <button
          type="button"
          disabled={active === 0}
          onClick={() => setActive((value) => value - 1)}
          className="text-xs uppercase tracking-[.16em] text-white/35 transition hover:text-white disabled:pointer-events-none disabled:opacity-20"
        >
          ← Previous
        </button>
        <span className="text-[10px] uppercase tracking-[.18em] text-white/20">Select a stage to explore</span>
        <button
          type="button"
          disabled={active === steps.length - 1}
          onClick={() => setActive((value) => value + 1)}
          className="text-xs uppercase tracking-[.16em] text-white/55 transition hover:text-[#ff6a2a] disabled:pointer-events-none disabled:opacity-20"
        >
          Next →
        </button>
      </div>
    </div>
  );
}
