const stages = [
  {
    number: "01",
    type: "Application",
    title: "Prepare the application",
    description: "Register the application, its platforms, technology, markets, revenue model and ownership details before review.",
    label: "INTAKE / EVALUATION",
    visual: "application",
    className: "md:col-span-2",
  },
  {
    number: "02",
    type: "QA & Compliance",
    title: "Validate the release",
    description: "Build integrity, security scanning, manual QA and compliance checks create a controlled release path.",
    label: "BUILD / QA",
    visual: "qa",
    className: "",
  },
  {
    number: "03",
    type: "Publishing",
    title: "Move to the store",
    description: "Store preparation, assets, builds and human-in-the-loop submission keep publishing accountable and traceable.",
    label: "SUBMIT / PUBLISH",
    visual: "publishing",
    className: "",
  },
];

function StageVisual({ type }: { type: string }) {
  if (type === "application") {
    return (
      <div className="absolute inset-0 overflow-hidden bg-[#101010]">
        <div className="absolute -right-16 -top-20 h-80 w-80 rounded-full bg-[#ff5a1f]/20 blur-[80px]" />
        <div className="absolute left-[14%] top-[19%] h-[62%] w-[58%] rotate-[-7deg] rounded-[24px] border border-white/10 bg-[#171717]/90 p-4 shadow-2xl transition duration-700 group-hover:rotate-[-3deg] group-hover:scale-[1.03]">
          <div className="flex items-center justify-between border-b border-white/10 pb-3"><span className="h-2 w-24 rounded-full bg-white/20" /><span className="h-6 w-6 rounded-full bg-[#ff5a1f]/80" /></div>
          <div className="mt-5 grid grid-cols-[1.3fr_.7fr] gap-3"><div className="h-24 rounded-xl bg-white/[0.05]" /><div className="h-24 rounded-xl bg-[#ff5a1f]/15" /></div>
          <div className="mt-3 h-20 rounded-xl bg-white/[0.04]" />
          <div className="mt-3 flex gap-3"><span className="h-2 w-28 rounded-full bg-white/10" /><span className="h-2 w-16 rounded-full bg-white/5" /></div>
        </div>
        <div className="absolute bottom-[12%] right-[12%] rounded-2xl border border-white/10 bg-[#0c0c0c]/90 px-5 py-4 shadow-2xl backdrop-blur-xl transition duration-700 group-hover:-translate-y-2"><p className="text-[9px] uppercase tracking-[.2em] text-white/30">Application</p><p className="mt-1 text-xl font-semibold">Ready</p></div>
      </div>
    );
  }

  if (type === "qa") {
    return (
      <div className="absolute inset-0 overflow-hidden bg-[#111]">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_35%,rgba(255,90,31,.10)_35%,rgba(255,90,31,.10)_55%,transparent_55%)]" />
        <div className="absolute right-[13%] top-[18%] h-[58%] w-[58%] rotate-6 rounded-[28px] border border-white/10 bg-gradient-to-br from-white/[0.09] to-white/[0.02] p-7 shadow-2xl transition duration-700 group-hover:rotate-2 group-hover:scale-105">
          <div className="flex items-center justify-between"><span className="text-[9px] uppercase tracking-[.25em] text-white/30">Security scan</span><span className="h-2 w-2 rounded-full bg-[#ff5a1f] shadow-[0_0_18px_5px_rgba(255,90,31,.35)]" /></div>
          <div className="mt-10 space-y-4"><div className="h-2 rounded-full bg-white/10" /><div className="h-2 w-[82%] rounded-full bg-white/10" /><div className="h-2 w-[64%] rounded-full bg-[#ff5a1f]/40" /></div>
          <div className="absolute bottom-7 left-7 right-7 flex items-center justify-between border-t border-white/10 pt-5"><span className="text-[9px] uppercase tracking-[.2em] text-white/30">Risk</span><span className="text-sm font-semibold">LOW</span></div>
        </div>
        <div className="absolute bottom-[13%] left-[10%] rounded-full border border-white/10 bg-[#0b0b0b]/90 px-4 py-2 text-[9px] uppercase tracking-[.2em] text-white/45 backdrop-blur-xl">QA / Compliance</div>
      </div>
    );
  }

  return (
    <div className="absolute inset-0 overflow-hidden bg-[#0d0d0d]">
      <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#ff5a1f]/20 shadow-[0_0_100px_rgba(255,90,31,.12)] transition duration-700 group-hover:scale-110" />
      <div className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-[30px] border border-[#ff5a1f]/40 bg-[#ff5a1f]/10 transition duration-700 group-hover:rotate-[65deg]" />
      <div className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-[#ff5a1f] shadow-[0_0_70px_rgba(255,90,31,.4)]" />
      <div className="absolute left-[12%] top-[18%] text-[9px] uppercase tracking-[.25em] text-white/25">Store / Release</div>
      <div className="absolute bottom-[12%] right-[10%] text-right text-[9px] uppercase tracking-[.2em] text-white/25">Human-in-the-loop<br />Submission</div>
    </div>
  );
}

export function ProjectShowcase() {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {stages.map((stage) => (
        <article key={stage.number} className={`project-card group relative min-h-[500px] overflow-hidden rounded-[28px] border border-white/[0.08] bg-[#111] ${stage.className}`}>
          <StageVisual type={stage.visual} />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#080808] via-[#080808]/70 to-transparent" />
          <div className="absolute left-7 right-7 top-7 flex items-center justify-between text-[10px] uppercase tracking-[.2em]">
            <span className="text-[#ff6a2a]">{stage.number} / {stage.type}</span>
            <span className="text-white/30">{stage.label}</span>
          </div>
          <div className="absolute bottom-7 left-7 right-7 flex items-end justify-between gap-8">
            <div className="max-w-xl">
              <h3 className="font-display text-3xl font-semibold tracking-[-.04em] sm:text-4xl">{stage.title}</h3>
              <p className="mt-3 max-w-lg text-sm leading-6 text-white/45 transition duration-500 group-hover:text-white/65">{stage.description}</p>
            </div>
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-lg transition duration-500 group-hover:-translate-y-1 group-hover:border-[#ff5a1f]/50 group-hover:bg-[#ff5a1f] group-hover:text-black">↗</span>
          </div>
        </article>
      ))}
    </div>
  );
}
