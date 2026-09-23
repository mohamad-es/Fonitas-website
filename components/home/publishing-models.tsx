import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

const models = [
  { number: "01", title: "Publish only", description: "Use Fonitas as the publishing and release layer while your team keeps its own authentication, billing and infrastructure.", flow: ["Developer", "Publishing License", "Fonitas", "Store"], tag: "PUBLISHING" },
  { number: "02", title: "Publish + infrastructure", description: "Combine publishing with optional Fonitas services such as Auth, Storage, Notifications and Analytics.", flow: ["Developer", "Fonitas Publishing", "Auth · Storage · Notifications · Analytics"], tag: "PLATFORM SERVICES" },
  { number: "03", title: "Full platform", description: "A longer-term model connecting publishing with Commercial, Infrastructure, Legal, Marketing, Finance and Investment.", flow: ["Developer", "Fonitas", "Publishing · Commercial · Infrastructure · Legal · Marketing · Finance · Investment"], tag: "LONG-TERM" },
];

export function PublishingModels() {
  const t = useTranslations();
  return (
    <section id="models" className="border-y border-white/[0.08] bg-[#090909]">
      <div className="mx-auto max-w-[1400px] px-6 py-20 sm:py-28 lg:px-10 lg:py-40">
        <div className="grid gap-10 lg:grid-cols-[.72fr_1.28fr] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="mb-5 text-xs uppercase tracking-[0.25em] text-[#ff5a1f]">{t("Ways to work with Fonitas")}</p>
            <h2 className="font-display max-w-xl text-4xl font-semibold leading-[.92] sm:text-6xl lg:text-7xl">{t("One publishing core.")} <span className="text-white/30">{t("Different operating models.")}</span></h2>
            <p className="mt-7 max-w-md text-sm leading-6 text-white/35 sm:mt-8">{t("The architecture supports different levels of involvement without creating a separate publishing architecture for each model.")}</p>
          </div>
          <div className="relative">
            <div className="absolute left-6 top-6 bottom-6 hidden border-l border-dashed border-white/10 lg:block" />
            <div>
              {models.map((model, index) => (
                <article key={model.number} className="group relative border-t border-white/10 py-7 first:border-t-0 sm:py-10 lg:pl-16">
                  <span className="absolute left-[2px] top-10 hidden h-3 w-3 rounded-full border border-[#ff5a1f]/50 bg-[#090909] lg:block" />
                  {index < models.length - 1 && <span className="absolute left-[7px] top-[52px] hidden h-[calc(100%-25px)] border-l border-[#ff5a1f]/10 lg:block" />}
                  <div className="grid gap-6 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-7">
                    <div>
                      <div className="flex flex-wrap items-center gap-3"><span className="text-xs text-[#ff5a1f]">{model.number}</span><span className="text-[9px] uppercase tracking-[.22em] text-white/25">{t(model.tag)}</span></div>
                      <h3 className="mt-3 font-display text-2xl font-semibold tracking-[-.04em] sm:text-4xl">{t(model.title)}</h3>
                      <p className="mt-4 max-w-xl text-sm leading-6 text-white/40">{t(model.description)}</p>
                    </div>
                    <div className="border-l border-white/10 pl-4 sm:pl-6">
                      <p className="mb-4 text-[9px] uppercase tracking-[.18em] text-white/20">{t("Operating path")}</p>
                      <div className="flex flex-wrap items-center gap-2">
                        {model.flow.map((step, stepIndex) => (
                          <div key={t(step)} className="flex items-center gap-2">
                            <span className="max-w-full rounded-full border border-white/10 bg-white/[.02] px-3 py-2 text-[10px] leading-4 text-white/50">{t(step)}</span>
                            {stepIndex < model.flow.length - 1 && <span className="shrink-0 text-[#ff5a1f]/60"><ArrowRight aria-hidden="true" className="inline h-3.5 w-3.5" strokeWidth={1.8} /></span>}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}