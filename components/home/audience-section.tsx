const audiences = [
  ["01", "Developers", "Build the application. Fonitas operates the publishing path around it."],
  ["02", "Product teams", "Move applications through review, contract, QA and publishing with explicit states."],
  ["03", "Application owners", "Keep visibility across publishing, revenue, reconciliation and settlement."],
];

export function AudienceSection() {
  return (
    <section className="border-b border-white/[0.08]">
      <div className="mx-auto max-w-[1400px] px-6 py-28 lg:px-10 lg:py-40">
        <div className="flex flex-col gap-8 border-b border-white/10 pb-12 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-5 text-xs uppercase tracking-[.25em] text-[#ff5a1f]">Who it is for</p>
            <h2 className="font-display max-w-3xl text-5xl font-semibold leading-[.9] sm:text-7xl">For teams that need <span className="text-white/30">a controlled path.</span></h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-white/35">Different roles can work around the same application lifecycle without losing ownership between stages.</p>
        </div>
        <div className="grid gap-0 md:grid-cols-3">
          {audiences.map(([number, title, description]) => (
            <article key={number} className="group border-b border-white/10 py-8 md:border-b-0 md:border-r md:px-7 md:first:pl-0 md:last:border-r-0">
              <span className="text-xs text-[#ff5a1f]">{number}</span>
              <h3 className="font-display mt-16 text-3xl font-semibold transition group-hover:text-[#ff6a2a]">{title}</h3>
              <p className="mt-4 max-w-xs text-sm leading-6 text-white/40">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
