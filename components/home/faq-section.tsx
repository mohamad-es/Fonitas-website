import { useTranslations } from "next-intl";

const faqCount = 9;

export function FAQSection() {
  const t = useTranslations();
  return (
    <section id="faq" className="border-b border-white/[0.08]">
      <div className="mx-auto max-w-[1400px] px-6 py-20 sm:py-28 lg:px-10 lg:py-40">
        <div className="grid gap-10 lg:grid-cols-[.72fr_1.28fr] lg:gap-16">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="mb-5 text-xs uppercase tracking-[0.25em] text-[#ff5a1f]">{t("Questions")}</p>
            <h2 className="font-display max-w-xl text-4xl font-semibold leading-[.92] sm:text-6xl lg:text-7xl">{t("faq.heading")} <span className="text-white/30">{t("faq.headingAccent")}</span></h2>
            <p className="mt-7 max-w-md text-sm leading-6 text-white/35 sm:mt-8">{t("faq.intro")}</p>
          </div>
          <div className="border-t border-white/10">
            {Array.from({ length: faqCount }, (_, index) => {
              const id = index + 1;
              return (
                <details key={id} className="group border-b border-white/10">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-6 text-base font-medium text-white/80 transition hover:text-white sm:gap-8 sm:py-7">
                    <span className="flex min-w-0 items-start gap-4"><span className="mt-1 shrink-0 text-[10px] text-[#ff5a1f]">{String(id).padStart(2, "0")}</span><span>{t(`faq.questions.${index}`)}</span></span>
                    <span aria-hidden="true" className="shrink-0 text-xl font-light text-white/30 transition duration-300 group-open:rotate-45 group-open:text-[#ff5a1f]">+</span>
                  </summary>
                  <div className="max-w-3xl pb-7 pl-0 text-sm leading-7 text-white/40 sm:pb-8 sm:pl-12">{t(`faq.answers.${index}`)}</div>
                </details>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
