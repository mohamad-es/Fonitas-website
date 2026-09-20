import { ArrowRight } from "lucide-react";

const stages = [
  {
    number: "01",
    type: "Application",
    title: "Register the application",
    description: "Create the operational record before the release enters review.",
    sublabel: "INTAKE",
  },
  {
    number: "02",
    type: "QA & Compliance",
    title: "Validate the release",
    description: "Integrity, security, analysis and manual QA establish release readiness.",
    sublabel: "VALIDATE",
  },
  {
    number: "03",
    type: "Publishing",
    title: "Submit to the store",
    description: "Prepare assets and builds, then record the human-led store submission.",
    sublabel: "SUBMIT",
  },
];

function ApplicationVisual() {
  return (
    <div className="relative h-full min-h-[360px] overflow-hidden bg-[#0f0f0f] p-7">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute -right-16 -top-16 h-72 w-72 rounded-full bg-[#ff5a1f]/15 blur-[80px]" />
      <div className="absolute left-[11%] top-[15%] h-[62%] w-[72%] rotate-[-5deg] rounded-[26px] border border-white/10 bg-[#151515] p-5 shadow-2xl transition duration-700 group-hover:rotate-[-2deg] group-hover:scale-[1.02]">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <span className="text-[9px] uppercase tracking-[.2em] text-white/25">Application record</span>
          <span className="rounded-full bg-[#ff5a1f]/10 px-2 py-1 text-[8px] text-[#ff6a2a]">REGISTERED</span>
        </div>
        <div className="mt-6 grid grid-cols-3 gap-2">
          {["Platform", "Markets", "Revenue"].map((x) => (
            <div key={x} className="rounded-xl border border-white/10 p-3">
              <span className="text-[7px] uppercase tracking-[.15em] text-white/20">{x}</span>
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
      <span className="absolute bottom-[9%] right-[9%] rounded-full border border-white/10 bg-[#0b0b0b]/90 px-4 py-2 text-[8px] uppercase tracking-[.18em] text-white/40">01 / Intake</span>
    </div>
  );
}

function QAVisual() {
  const checks = ["SHA-256", "Security scan", "Manifest", "Permissions", "Manual QA"];
  return (
    <div className="relative min-h-[300px] overflow-hidden bg-[#111] p-7">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_34%,rgba(255,90,31,.10)_34%,rgba(255,90,31,.10)_58%,transparent_58%)]" />
      <div className="absolute left-7 right-7 top-7 flex items-center justify-between text-[8px] uppercase tracking-[.18em] text-white/25">
        <span>Release validation</span><span>Ready gate</span>
      </div>
      <div className="absolute left-7 right-7 top-20">
        {checks.map((check, index) => (
          <div key={check} className="mb-3 flex items-center gap-3">
            <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border ${index < 3 ? "border-[#ff5a1f]/30 text-[#ff6a2a]" : "border-white/10 text-white/25"} text-[8px]`}>{index < 3 ? "✓" : "—"}</span>
            <span className="text-[9px] uppercase tracking-[.15em] text-white/45">{check}</span>
            <span className="ml-auto h-1 w-16 rounded-full bg-white/10"><span className={`block h-full rounded-full ${index < 3 ? "w-full bg-[#ff5a1f]/55" : "w-1/2 bg-white/15"}`} /></span>
          </div>
        ))}
      </div>
      <div className="absolute bottom-6 left-7 right-7 flex items-center justify-between border-t border-white/10 pt-4">
        <span className="text-[8px] uppercase tracking-[.18em] text-white/25">QA status</span>
        <span className="text-[10px] font-medium text-[#ff6a2a]">READY FOR SUBMISSION</span>
      </div>
    </div>
  );
}

function PublishingVisual() {
  return (
    <div className="relative min-h-[300px] overflow-hidden bg-[#0d0d0d] p-7">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#ff5a1f]/20 shadow-[0_0_90px_rgba(255,90,31,.12)]" />
      <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-[24px] border border-[#ff5a1f]/35 bg-[#ff5a1f]/[.08] transition duration-700 group-hover:rotate-[65deg]" />
      <div className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-xl bg-[#ff5a1f] text-[7px] font-semibold tracking-[.12em] text-black shadow-[0_0_60px_rgba(255,90,31,.4)]">SUBMIT</div>
      <div className="absolute left-7 top-7 text-[8px] uppercase tracking-[.2em] text-white/25">Human-in-the-loop</div>
      <div className="absolute bottom-7 left-7 right-7 flex flex-wrap justify-center gap-2">
        {["Apple App Store", "Google Play", "Microsoft Store"].map((store, index) => (
          <span key={store} className={`rounded-full border px-3 py-2 text-[7px] uppercase tracking-[.1em] ${index === 0 ? "border-[#ff5a1f]/30 text-[#ff6a2a]" : "border-white/10 text-white/25"}`}>{store}</span>
        ))}
      </div>
    </div>
  );
}

export function ProjectShowcase() {
  return (
    <div className="relative">
      <div className="mb-6 hidden items-center gap-3 text-[9px] uppercase tracking-[.2em] text-white/25 lg:flex">
        {stages.map((stage, index) => (
          <div key={stage.number} className="flex items-center gap-3">
            <span className={`flex h-7 w-7 items-center justify-center rounded-full border ${index === 0 ? "border-[#ff5a1f]/40 text-[#ff6a2a]" : "border-white/10 text-white/25"}`}>{stage.number}</span>
            <span>{stage.sublabel}</span>
            {index < stages.length - 1 && <span className="mx-2 text-[#ff5a1f]/45"><ArrowRight aria-hidden="true" className="inline h-3.5 w-3.5" strokeWidth={1.8} /></span>}
          </div>
        ))}
      </div>

      <div className="grid gap-5 lg:grid-cols-[1.1fr_.9fr]">
        <article className="group overflow-hidden rounded-[30px] border border-white/10 bg-[#101010]">
          <ApplicationVisual />
          <div className="p-7 sm:p-9 lg:p-10">
            <div className="flex items-center justify-between text-[9px] uppercase tracking-[.22em]">
              <span className="text-[#ff6a2a]">01 / Application</span>
              <span className="text-white/25">Register</span>
            </div>
            <h3 className="font-display mt-4 text-4xl font-semibold leading-[.95] sm:text-5xl">{stages[0].title}</h3>
            <p className="mt-5 max-w-xl text-sm leading-6 text-white/40">{stages[0].description}</p>
          </div>
        </article>

        <div className="grid gap-5">
          <article className="group overflow-hidden rounded-[30px] border border-white/10 bg-[#101010]">
            <QAVisual />
            <div className="p-7 sm:p-8">
              <div className="flex items-center justify-between text-[9px] uppercase tracking-[.22em]"><span className="text-[#ff6a2a]">02 / QA & Compliance</span><span className="text-white/25">Validate</span></div>
              <h3 className="font-display mt-3 text-2xl font-semibold">Validate the release</h3>
              <p className="mt-3 text-sm leading-6 text-white/40">{stages[1].description}</p>
            </div>
          </article>

          <article className="group overflow-hidden rounded-[30px] border border-white/10 bg-[#101010]">
            <PublishingVisual />
            <div className="p-7 sm:p-8">
              <div className="flex items-center justify-between text-[9px] uppercase tracking-[.22em]"><span className="text-[#ff6a2a]">03 / Publishing</span><span className="text-white/25">Submit</span></div>
              <h3 className="font-display mt-3 text-2xl font-semibold">Submit to the store</h3>
              <p className="mt-3 text-sm leading-6 text-white/40">{stages[2].description}</p>
            </div>
          </article>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-3 text-[9px] uppercase tracking-[.18em] text-white/20">
        <span>Release path</span><span className="text-[#ff5a1f]/60">Application</span><span><ArrowRight aria-hidden="true" className="inline h-3.5 w-3.5" strokeWidth={1.8} /></span><span className="text-[#ff5a1f]/60">Validate</span><span><ArrowRight aria-hidden="true" className="inline h-3.5 w-3.5" strokeWidth={1.8} /></span><span className="text-[#ff5a1f]/60">Publish</span>
      </div>
    </div>
  );
}