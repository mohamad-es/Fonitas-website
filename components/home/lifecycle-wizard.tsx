"use client";

import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { useTranslations } from "next-intl";

function getSteps(t: ReturnType<typeof useTranslations>) {
  return [
  {
    number: "01",
    eyebrow: t("Start"),
    title: t("Collaboration request"),
    description: t("Start with the application, organization and publishing opportunity."),
    signal: t("Request opened"),
  },
  {
    number: "02",
    eyebrow: t("Register"),
    title: t("Application registration"),
    description: t("Create the operational record that will move through the publishing lifecycle."),
    signal: t("Application recorded"),
  },
  {
    number: "03",
    eyebrow: t("Evaluate"),
    title: t("Evaluation"),
    description: t("Assess readiness, risk and the next operational step before publishing rights are activated."),
    signal: t("Readiness assessed"),
  },
  {
    number: "04",
    eyebrow: t("Define"),
    title: t("Contract & license"),
    description: t("Set publishing scope, stores, geography, duration and commercial terms."),
    signal: t("Publishing terms defined"),
  },
  {
    number: "05",
    eyebrow: t("Validate"),
    title: t("QA & compliance"),
    description: t("Verify build integrity, security, manual QA and compliance before submission."),
    signal: t("Release validated"),
  },
  {
    number: "06",
    eyebrow: t("Publish"),
    title: t("Publishing"),
    description: t("Prepare assets and builds, then record the human-led store submission."),
    signal: t("Submission recorded"),
  },
  {
    number: "07",
    eyebrow: t("Collect"),
    title: t("Revenue collection"),
    description: t("Bring post-publication revenue facts into the financial workflow."),
    signal: t("Revenue imported"),
  },
  {
    number: "08",
    eyebrow: t("Reconcile"),
    title: t("Reconciliation"),
    description: t("Match external revenue facts against costs and the active contractual rules."),
    signal: t("Financial facts reconciled"),
  },
  {
    number: "09",
    eyebrow: t("Close"),
    title: t("Settlement"),
    description: t("Create settlement, statement and payment records to close the financial loop."),
    signal: t("Financial close"),
  },
  ];
}

function StepVisual({ index, steps, t }: { index: number; steps: ReturnType<typeof getSteps>; t: ReturnType<typeof useTranslations> }) {
  const progress = ((index + 1) / steps.length) * 100;

  return (
    <div className="relative min-h-[250px] overflow-hidden rounded-[24px] sm:min-h-[350px] border border-white/10 bg-[#0b0b0b] ">
      <div className="absolute inset-0 opacity-60 [background-image:linear-gradient(rgba(255,255,255,.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.045)_1px,transparent_1px)] [background-size:48px_48px]" />
      <div className="absolute left-1/2 top-1/2 h-40 w-40 sm:h-52 sm:w-52 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#ff5a1f]/15 shadow-[0_0_90px_rgba(255,90,31,.08)]" />
      <div className="absolute left-1/2 top-1/2 h-24 w-24 sm:h-32 sm:w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
      <div className="absolute left-1/2 top-1/2 flex h-16 w-16 sm:h-20 sm:w-20 -translate-x-1/2 -translate-y-1/2 rotate-45 items-center justify-center rounded-[20px] bg-[#ff5a1f] shadow-[0_0_80px_rgba(255,90,31,.35)] transition-transform duration-500">
        <span className="-rotate-45 text-[9px] font-semibold uppercase tracking-[.16em] text-black">OS</span>
      </div>

      {[
        ["Application", "left-[8%] top-[18%]"],
        ["Contract", "right-[8%] top-[20%]"],
        ["QA", "left-[12%] bottom-[18%]"],
        [t("Store"), "right-[10%] bottom-[20%]"],
      ].map(([label, position]) => (
        <div key={label} className={`absolute ${position} flex items-center gap-2 rounded-full border border-white/10 bg-[#101010]/90 px-3 py-2 backdrop-blur-xl`}>
          <span className="h-1.5 w-1.5 rounded-full bg-[#ff5a1f]" />
          <span className="text-[8px] uppercase tracking-[.16em] text-white/45">{label}</span>
        </div>
      ))}

      <div className="absolute left-[20%] right-[20%] top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-[#ff5a1f]/35 to-transparent" />
      <div className="absolute bottom-5 left-6 right-6">
        <div className="flex items-center justify-between text-[9px] uppercase tracking-[.18em] text-white/25">
          <span>{t("Lifecycle progress")}</span>
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
  const t = useTranslations();
  const steps = getSteps(t);
  const [active, setActive] = useState(0);
  const step = steps[active];

  return (
    <div className="mt-14 lg:mt-16" aria-label=t("Fonitas application lifecycle wizard")>
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

      <div data-active-step={step.number} className="grid overflow-hidden rounded-[28px] border border-white/10 bg-[#0d0d0d] lg:grid-cols-[.92fr_1.08fr]">
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
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#ff5a1f]/25 text-[#ff6a2a]"><ArrowUpRight aria-hidden="true" className="h-4 w-4" /></span>
            </div>
          </div>
        </div>

        <div className="order-1 p-3 sm:p-4 lg:order-2 lg:p-5">
          <StepVisual index={active} steps={steps} t={t} />
        </div>
      </div>

      <div className="relative z-20 mt-5 flex items-center justify-between gap-3 pointer-events-auto">
        <button
          type="button"
          disabled={active === 0}
          onClick={() => setActive((value) => Math.max(value - 1, 0))}
          className="text-xs uppercase tracking-[.16em] text-white/35 transition hover:text-white disabled:pointer-events-none disabled:opacity-20"
        >
          <ArrowLeft aria-hidden="true" className="mr-2 h-3.5 w-3.5" />Previous
        </button>
        <span className="text-[10px] uppercase tracking-[.18em] text-white/20">Select a stage to explore</span>
        <button
          type="button"
          disabled={active === steps.length - 1}
          onClick={() => setActive((value) => Math.min(value + 1, steps.length - 1))}
          className="text-xs uppercase tracking-[.16em] text-white/55 transition hover:text-[#ff6a2a] disabled:pointer-events-none disabled:opacity-20"
        >
          Next<ArrowRight aria-hidden="true" className="ml-2 h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}