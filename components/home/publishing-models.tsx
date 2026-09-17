const models = [
  {
    number: "01",
    title: "Publish only",
    description: "Use Fonitas as the publishing and release layer while your team keeps its own authentication, billing and infrastructure.",
    flow: ["Developer", "Publishing License", "Fonitas", "Store"],
    tag: "PUBLISHING",
  },
  {
    number: "02",
    title: "Publish + infrastructure",
    description: "Combine publishing with optional Fonitas services such as Auth, Storage, Notifications and Analytics.",
    flow: ["Developer", "Fonitas Publishing", "Auth · Storage · Notifications · Analytics"],
    tag: "PLATFORM SERVICES",
  },
  {
    number: "03",
    title: "Full platform",
    description: "A longer-term model connecting publishing with Commercial, Infrastructure, Legal, Marketing, Finance and Investment.",
    flow: ["Developer", "Fonitas", "Publishing · Commercial · Infrastructure · Legal · Marketing · Finance · Investment"],
    tag: "LONG-TERM",
  },
];

export function PublishingModels() {
  return (
    <section id="models" className="border-y border-white/[0.08] bg-[#090909]">
      <div className="mx-auto max-w-[1400px] px-6 py-28 lg:px-10 lg:py-40">
        <div className="grid gap-12 lg:grid-cols-[.72fr_1.28fr] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="mb-5 text-xs uppercase tracking-[0.25em] text-[#ff5a1f]">Ways to work with Fonitas</p>
            <h2 className="font-display max-w-xl text-5xl font-semibold leading-[.92] sm:text-7xl">One publishing core. <span className="text-white/30">Different operating models.</span></h2>
            <p className="mt-8 max-w-md text-sm leading-6 text-white/35">The architecture supports different levels of involvement without creating a separate publishing architecture for each model.</p>
          </div>

          <div className="grid gap-5">
            {models.map((model) => (
              <article key={model.number} className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-[#101010] p-7 transition duration-500 hover:-translate-y-1 hover:border-[#ff5a1f]/30 sm:p-9">
                <div className="absolute -right-24 -top-24 h-48 w-48 rounded-full bg-[#ff5a1f]/10 blur-[70px] opacity-0 transition duration-500 group-hover:opacity-100" />
                <div className="relative grid gap-8 lg:grid-cols-[70px_1fr_1.05fr] lg:items-center">
                  <span className="text-xs text-[#ff5a1f]">{model.number}</span>
                  <div>
                    <span className="text-[9px] uppercase tracking-[.22em] text-white/25">{model.tag}</span>
                    <h3 className="mt-3 font-display text-3xl font-semibold tracking-[-.04em] sm:text-4xl">{model.title}</h3>
                    <p className="mt-4 max-w-xl text-sm leading-6 text-white/40">{model.description}</p>
                  </div>
                  <div className="relative rounded-2xl border border-white/[0.08] bg-[#0a0a0a] p-5">
                    {model.flow.map((step, index) => (
                      <div key={step} className="flex items-center gap-3">
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#ff5a1f]/30 text-[9px] text-[#ff6a2a]">{String(index + 1).padStart(2, "0")}</span>
                        <span className="text-xs leading-5 text-white/55">{step}</span>
                        {index < model.flow.length - 1 && <span aria-hidden="true" className="ml-auto text-[#ff5a1f]/60">↓</span>}
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
