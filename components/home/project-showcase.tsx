"use client";

import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";

const stages = [
  { number: "01", key: "application", visual: "application", sublabel: "intake" },
  { number: "02", key: "qa", visual: "qa", sublabel: "validate" },
  { number: "03", key: "publishing", visual: "publishing", sublabel: "submit" },
];

function ApplicationVisual() {
  const t = useTranslations();
  return (
    <div className="relative h-full min-h-[360px] overflow-hidden bg-[#0f0f0f] p-7">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute -right-16 -top-16 h-72 w-72 rounded-full bg-[#ff5a1f]/15 blur-[80px]" />
      <div className="absolute left-[11%] top-[15%] h-[62%] w-[72%] rotate-[-5deg] rounded-[26px] border border-white/10 bg-[#151515] p-5 shadow-2xl transition duration-700 group-hover:rotate-[-2deg] group-hover:scale-[1.02]">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <span className="text-[9px] uppercase tracking-[.2em] text-white/25">{t("projectShowcase.applicationRecord")}</span>
          <span className="rounded-full bg-[#ff5a1f]/10 px-2 py-1 text-[8px] text-[#ff6a2a]">{t("projectShowcase.registered")}</span>
        </div>
        <div className="mt-6 grid grid-cols-3 gap-2">
          {["platform", "markets", "revenue"].map((x) => (
            <div key={x} className="rounded-xl border border-white/10 p-3">
              <span className="text-[7px] uppercase tracking-[.15em] text-white/20">{t(`projectShowcase.fields.${x}`)}</span>
              <div className="mt-3 h-1.5 rounded-full bg-white/10" />
            </div>
          ))}
        </div>
        <div className="mt-4 h-20 rounded-xl border border-white/[.07] bg-white/[.025]" />
        <div className="mt-4 flex items-center gap-2">
          <span className="h-1.5 w-16 rounded-full bg-[#ff5a1f]/35" />
          <span className="h-1.5 w-24 rounded-full bg-white/10" />
        </div>
      </div>
      <span className="absolute bottom-[9%] right-[9%] rounded-full border border-white/10 bg-[#0b0b0b]/90 px-4 py-2 text-[8px] uppercase tracking-[.18em] text-white/40">{t("projectShowcase.intakeLabel")}</span>
    </div>
  );
}

function QAVisual() {
  const t = useTranslations();
  const checks = ["sha256", "securityScan", "manifest", "permissions", "manualQa"];
  return (
    <div className="relative min-h-[300px] overflow-hidden bg-[#111] p-7">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_34%,rgba(255,90,31,.10)_34%,rgba(255,90,31,.10)_58%,transparent_58%)]" />
      <div className="absolute left-7 right-7 top-7 flex items-center justify-between text-[8px] uppercase tracking-[.18em] text-white/25">
        <span>{t("projectShowcase.releaseValidation")}</span><span>{t("projectShowcase.readyGate")}</span>
      </div>
      <div className="absolute left-7 right-7 top-20">
        {checks.map((check, index) => (
          <div key={check} className="mb-3 flex items-center gap-3">
            <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border ${index < 3 ? "border-[#ff5a1f]/30 text-[#ff6a2a]" : "border-white/10 text-white/25"} text-[8px]`}>{index < 3 ? "✓" : "—"}</span>
            <span className="text-[9px] uppercase tracking-[.15em] text-white/45">{t(`projectShowcase.checks.${check}`)}</span>
            <span className="ml-auto h-1 w-16 rounded-full bg-white/10"><span className={`block h-full rounded-full ${index < 3 ? "w-full bg-[#ff5a1f]/55" : "w-1/2 bg-white/15"}`} /></span>
          </div>
        ))}
      </div>
      <div className="absolute bottom-6 left-7 right-7 flex items-center justify-between border-t border-white/10 pt-4">
        <span className="text-[8px] uppercase tracking-[.18em] text-white/25">{t("projectShowcase.qaStatus")}</span>
        <span className="text-[10px] font-medium text-[#ff6a2a]">{t("projectShowcase.readyForSubmission")}</span>
      </div>
    </div>
  );
}

function PublishingVisual() {
  const t = useTranslations();
  return (
    <div className="relative min-h-[300px] overflow-hidden bg-[#0d0d0d] p-7">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#ff5a1f]/20 shadow-[0_0_90px_rgba(255,90,31,.12)]" />
      <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-[24px] border border-[#ff5a1f]/35 bg-[#ff5a1f]/[.08] transition duration-700 group-hover:rotate-[65deg]" />
      <div className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-xl bg-[#ff5a1f] text-[7px] font-semibold tracking-[.12em] text-black shadow-[0_0_60px_rgba(255,90,31,.4)]">{t("projectShowcase.submit")}</div>
      <div className="absolute left-7 top-7 text-[8px] uppercase tracking-[.2em] text-white/25">{t("projectShowcase.releasePath")}</div>
      <div className="absolute bottom-7 right-7 rounded-full border border-white/10 bg-[#0b0b0b]/90 px-3 py-2 text-[8px] uppercase tracking-[.18em] text-white/35">{t("projectShowcase.humanInLoop")}</div>
    </div>
  );
}

export function ProjectShowcase() {
  const t = useTranslations();
  return (
    <section className="border-y border-white/[0.08] bg-[#0a0a0a]">
      <div className="mx-auto max-w-[1400px] px-6 py-20 sm:py-28 lg:px-10 lg:py-40">
        <div className="grid gap-8 lg:grid-cols-[.72fr_1.28fr] lg:items-start lg:gap-14">
          <div>
            <p className="mb-5 text-xs uppercase tracking-[.25em] text-[#ff5a1f]">{t("projectShowcase.sectionLabel")}</p>
            <h2 className="font-display max-w-3xl text-4xl font-semibold leading-[.92] sm:text-6xl lg:text-7xl">{t("projectShowcase.heading")} <span className="text-white/30">{t("projectShowcase.headingAccent")}</span></h2>
            <p className="mt-7 max-w-md text-sm leading-6 text-white/35">{t("projectShowcase.summary")}</p>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {stages.map((stage, index) => (
              <article key={stage.number} className="group overflow-hidden rounded-[30px] border border-white/10 bg-[#101010]">
                {stage.visual === "application" ? <ApplicationVisual /> : stage.visual === "qa" ? <QAVisual /> : <PublishingVisual />}
                <div className="p-7 sm:p-8">
                  <div className="flex items-center justify-between text-[9px] uppercase tracking-[.22em] text-white/25"><span>{t(`projectShowcase.stages.${stage.key}.type`)}</span><span>{stage.number} / {t(`projectShowcase.stages.${stage.key}.sublabel`)}</span></div>
                  <h3 className="font-display mt-4 text-3xl font-semibold leading-tight">{t(`projectShowcase.stages.${stage.key}.title`)}</h3>
                  <p className="mt-4 text-sm leading-6 text-white/40">{t(`projectShowcase.stages.${stage.key}.description`)}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}