const plans = [
  {
    number: "01",
    title: "Publish",
    description: "For teams that need a controlled publishing and release layer.",
    features: ["Application review", "QA & compliance", "Store preparation", "Publishing workflow"],
  },
  {
    number: "02",
    title: "Publish + Infrastructure",
    description: "Publishing plus the platform services that support the application lifecycle.",
    features: ["Everything in Publish", "Auth", "Storage", "Notifications", "Analytics"],
    featured: true,
  },
  {
    number: "03",
    title: "Full Platform",
    description: "A broader operating model connecting publishing with future business capabilities.",
    features: ["Publishing core", "Infrastructure services", "Commercial", "Finance", "Future platform capabilities"],
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="border-y border-white/[0.08]">
      <div className="mx-auto max-w-[1400px] px-6 py-28 lg:px-10 lg:py-40">
        <div className="grid gap-12 lg:grid-cols-[.72fr_1.28fr] lg:items-end">
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.25em] text-[#ff5a1f]">Pricing</p>
            <h2 className="font-display max-w-xl text-5xl font-semibold leading-[.92] sm:text-7xl">
              Pricing built around your publishing model.
            </h2>
          </div>
          <div className="max-w-2xl">
            <p className="text-lg leading-8 text-white/45 sm:text-xl">
              Start with the publishing layer you need. Expand into infrastructure
              and wider platform capabilities as your operation grows.
            </p>
            <p className="mt-5 text-sm leading-6 text-white/30">
              Pricing depends on application scope, target stores, markets,
              publishing responsibilities, and commercial model.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-4 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.number}
              className={`group relative flex min-h-[430px] flex-col border p-7 transition-colors sm:p-8 ${
                plan.featured
                  ? "border-[#ff5a1f]/40 bg-[#ff5a1f]/[0.055]"
                  : "border-white/10 bg-white/[0.02] hover:border-white/20"
              }`}
            >
              {plan.featured && (
                <div className="absolute right-6 top-6 rounded-full border border-[#ff5a1f]/30 px-3 py-1 text-[9px] uppercase tracking-[0.2em] text-[#ff7a3d]">
                  Expanded
                </div>
              )}

              <div className="flex items-center justify-between">
                <span className="text-xs text-[#ff5a1f]">{plan.number}</span>
                <span className="h-px w-10 bg-white/10" />
              </div>

              <div className="mt-16">
                <h3 className="font-display text-3xl font-semibold">{plan.title}</h3>
                <p className="mt-4 max-w-sm text-sm leading-6 text-white/40">
                  {plan.description}
                </p>
              </div>

              <ul className="mt-8 space-y-3 border-t border-white/[0.08] pt-6">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-white/55">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#ff5a1f]" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-medium text-white/65 transition hover:text-white"
              >
                Discuss this model <span className="text-[#ff5a1f]">↗</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
