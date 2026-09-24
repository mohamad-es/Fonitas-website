import { useTranslations } from "next-intl";

const principles = [
  { number: "01", key: "control" },
  { number: "02", key: "security" },
  { number: "03", key: "accountability" },
  { number: "04", key: "ownership" },
];

export function AccountabilitySection() {
  const t = useTranslations();
  return (
    <section id="principles" className="border-b border-white/[0.08]">
      <div className="mx-auto max-w-[1400px] px-6 py-28 lg:px-10 lg:py-40">
        <div className="grid gap-14 lg:grid-cols-[.7fr_1.3fr] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="mb-5 text-xs uppercase tracking-[.25em] text-[#ff5a1f]">{t("accountability.why")}</p>
            <h2 className="font-display max-w-xl text-5xl font-semibold leading-[.9] sm:text-7xl">{t("accountability.heading")} <span className="text-white/30">{t("accountability.headingAccent")}</span></h2>
            <p className="mt-8 max-w-md text-sm leading-7 text-white/35">{t("accountability.summary")}</p>
          </div>
          <div className="relative">
            <div className="absolute left-0 top-0 hidden h-full border-l border-dashed border-white/10 md:block" />
            <div className="md:pl-10">
              {principles.map(({number,key}, index) => (
                <article key={number} className="group relative border-t border-white/10 py-7 first:border-t-0 sm:py-9">
                  <div className="grid gap-5 sm:grid-cols-[72px_190px_1fr] sm:items-start">
                    <span className="text-xs text-[#ff5a1f]">{number}</span>
                    <h3 className="font-display text-3xl font-semibold transition group-hover:text-[#ff6a2a]">{t(`accountability.principles.${key}.title`)}</h3>
                    <p className="max-w-lg text-sm leading-6 text-white/40">{t(`accountability.principles.${key}.description`)}</p>
                  </div>
                  <span className="absolute -left-[5px] top-9 hidden h-2.5 w-2.5 rounded-full border border-[#ff5a1f]/50 bg-[#0a0a0a] md:block" />
                  {index < principles.length - 1 && <div className="mt-7 hidden h-px w-20 bg-gradient-to-r from-[#ff5a1f]/30 to-transparent sm:block" />}
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
