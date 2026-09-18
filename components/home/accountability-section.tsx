const principles = [
  ["01", "Control", "Know what happens at every stage, with explicit state and a clear next step."],
  ["02", "Security", "Build integrity, security scanning, analysis and QA create a controlled release trail."],
  ["03", "Accountability", "Publishing and financial outcomes remain attributable, auditable and traceable."],
  ["04", "Ownership", "Each domain keeps its own responsibility and source of truth."],
];

export function AccountabilitySection() {
  return (
    <section id="principles" className="border-b border-white/[0.08]">
      <div className="mx-auto max-w-[1400px] px-6 py-28 lg:px-10 lg:py-40">
        <div className="grid gap-14 lg:grid-cols-[.7fr_1.3fr] lg:gap-20">
          <div>
            <p className="mb-5 text-xs uppercase tracking-[.25em] text-[#ff5a1f]">Why Fonitas</p>
            <h2 className="font-display max-w-xl text-5xl font-semibold leading-[.9] sm:text-7xl">Built around <span className="text-white/30">accountability.</span></h2>
          </div>
          <div className="grid border-t border-white/10 md:grid-cols-2">
            {principles.map(([number, title, description]) => (
              <article key={number} className="group min-h-[240px] border-b border-white/10 p-7 md:border-r md:last:border-r-0">
                <div className="flex items-center justify-between"><span className="text-xs text-[#ff5a1f]">{number}</span><span className="text-white/20 transition group-hover:text-[#ff5a1f]">↗</span></div>
                <h3 className="font-display mt-14 text-3xl font-semibold">{title}</h3>
                <p className="mt-4 max-w-sm text-sm leading-6 text-white/40">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
