import { useTranslations } from "next-intl";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

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
    description: "Publishing plus platform services that support the application lifecycle.",
    features: ["Everything in Publish", "Auth", "Storage", "Notifications", "Analytics"],
  },
  {
    number: "03",
    title: "Full Platform",
    description: "A broader operating model connecting publishing with future business capabilities.",
    features: ["Publishing core", "Infrastructure services", "Commercial", "Finance", "Future capabilities"],
  },
];

export function PricingSection() {
  const t = useTranslations();
  return (
    <section id="pricing" className="border-y border-white/[0.08] bg-[#090909]">
      <div className="mx-auto max-w-[1400px] px-6 py-28 lg:px-10 lg:py-40">
        <div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr]">
          <div>
            <p className="mb-5 text-xs uppercase tracking-[.25em] text-[#ff5a1f]">{t("Engagement models")}</p>
            <h2 className="font-display max-w-xl text-4xl sm:text-5xl font-semibold leading-[.9] sm:text-7xl">
              {t("Start with publishing")} <span className="text-white/30">{t("Expand when it makes sense")}</span>
            </h2>
            <p className="mt-8 max-w-md text-sm leading-7 text-white/35">
              {t("Fonitas does not need one fixed package for every application. The operating model can expand with the responsibility you want Fonitas to carry.")}
            </p>
            <Link
              href="/contact"
              className="mt-9 inline-flex items-center gap-2 text-sm text-white/60 transition hover:text-white"
            >
              {t("Discuss your application")}{" "}
              <span className="text-[#ff5a1f]">
                <ArrowUpRight aria-hidden="true" className="h-4 w-4" strokeWidth={1.8} />
              </span>
            </Link>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 hidden h-full border-l border-dashed border-white/10 lg:block" />
            <div className="grid gap-4">
              {plans.map((plan, index) => (
                <article
                  key={plan.number}
                  className={`group relative overflow-hidden rounded-[26px] border p-6 transition duration-500 sm:p-8 ${index === 1 ? "border-[#ff5a1f]/35 bg-[#ff5a1f]/[.045]" : "border-white/10 bg-[#101010] hover:border-white/20"}`}
                >
                  <div className="relative grid gap-7 lg:grid-cols-[56px_1fr_auto] lg:items-start">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#ff5a1f]/30 bg-[#0b0b0b] text-[10px] text-[#ff6a2a]">
                      {plan.number}
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="text-[9px] uppercase tracking-[.22em] text-white/25">
                          {t(index === 0 ? "CORE" : index === 1 ? "EXPANDED" : "LONG-TERM")}
                        </span>
                        {index === 1 && (
                          <span className="rounded-full border border-[#ff5a1f]/25 px-2 py-1 text-[8px] uppercase tracking-[.16em] text-[#ff6a2a]">
                            {t("Expanded")}
                          </span>
                        )}
                      </div>
                      <h3 className="font-display mt-3 text-3xl font-semibold">{t(plan.title)}</h3>
                      <p className="mt-3 max-w-xl text-sm leading-6 text-white/40">{t(plan.description)}</p>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {plan.features.map((f) => (
                          <span
                            key={t(f)}
                            className="rounded-full border border-white/10 px-3 py-1.5 text-[10px] text-white/40"
                          >
                            {t(f)}
                          </span>
                        ))}
                      </div>
                    </div>
                    <span className="hidden text-white/15 transition group-hover:text-[#ff5a1f] lg:block">
                      <ArrowUpRight aria-hidden="true" className="h-4 w-4" strokeWidth={1.8} />
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-[10px] uppercase tracking-[.16em] text-white/20">
          {t("Scope and commercial terms depend on the application, target stores, markets, publishing responsibilities and agreed commercial model.")}
        </div>
      </div>
    </section>
  );
}
