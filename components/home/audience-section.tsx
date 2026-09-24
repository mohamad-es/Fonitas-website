import { useTranslations } from "next-intl";
import { ArrowUpRight } from "lucide-react";

const audiences = [
  { number: "01", key: "developers" },
  { number: "02", key: "productTeams" },
  { number: "03", key: "applicationOwners" },
];

export function AudienceSection() {
  const t = useTranslations();
  return (
    <section className="border-b border-white/[0.08]">
      <div className="mx-auto max-w-[1400px] px-6 py-20 sm:py-28 lg:px-10 lg:py-40">
        <div className="grid gap-8 lg:grid-cols-[.85fr_1.15fr] lg:items-end lg:gap-10">
          <div>
            <p className="mb-5 text-xs uppercase tracking-[.25em] text-[#ff5a1f]">{t("audience.sectionLabel")}</p>
            <h2 className="font-display max-w-3xl text-4xl font-semibold leading-[.92] sm:text-6xl lg:text-7xl">{t("audience.heading")} <span className="text-white/30">{t("audience.headingAccent")}</span></h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-white/35 lg:justify-self-end">{t("audience.summary")}</p>
        </div>
        <div className="mt-12 border-y border-white/10 sm:mt-16">
          {audiences.map(({number,key}, index) => (
            <article key={number} className="group relative grid gap-4 border-b border-white/10 py-7 last:border-b-0 sm:grid-cols-[70px_1fr_auto] sm:items-center sm:gap-6 sm:py-10">
              <span className="text-xs text-[#ff5a1f]">{number}</span>
              <div className="grid gap-2 sm:grid-cols-[220px_1fr] sm:items-center">
                <h3 className="font-display text-2xl font-semibold transition group-hover:text-[#ff6a2a] sm:text-4xl">{t(`audience.items.${key}.title`)}</h3>
                <p className="max-w-2xl text-sm leading-6 text-white/40">{t(`audience.items.${key}.description`)}</p>
              </div>
              <span className="flex items-center gap-3 text-[9px] uppercase tracking-[.2em] text-white/25 transition group-hover:text-[#ff6a2a]">{t(`audience.items.${key}.action`)}<ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" strokeWidth={1.8} /></span>
              {index < audiences.length - 1 && <span className="pointer-events-none absolute bottom-0 left-[70px] hidden h-px w-20 bg-gradient-to-r from-[#ff5a1f]/30 to-transparent sm:block" />}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}