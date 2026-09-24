import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Header } from "@/components/layout/header";
import { HeroOrbit } from "@/components/home/hero-orbit";
import { ProductSignal } from "@/components/home/product-signal";
import { LifecycleWizard } from "@/components/home/lifecycle-wizard";
import { ProjectShowcase } from "@/components/home/project-showcase";
import { AccountabilitySection } from "@/components/home/accountability-section";
import { InsightsShowcase } from "@/components/home/insights-showcase";
import { FinancialClose } from "@/components/home/financial-close";
import { PublishingModels } from "@/components/home/publishing-models";
import { AudienceSection } from "@/components/home/audience-section";
import { PricingSection } from "@/components/home/pricing-section";
import { FAQSection } from "@/components/home/faq-section";

const Arrow = () => <ArrowUpRight aria-hidden="true" className="h-4 w-4" strokeWidth={1.8} />

export async function ProductOwnerPage() {
  const t = await getTranslations();
  return (
    <main id="main-content" tabIndex={-1} className="overflow-hidden">
      <Header />

      <section className="relative border-b border-white/[0.08] pt-20">
        <div className="absolute inset-0 grid-bg opacity-35" />
        <div className="absolute -right-40 top-24 h-[520px] w-[520px] rounded-full bg-[#ff5a1f]/10 blur-[140px]" />
        <div className="relative mx-auto grid max-w-[1400px] items-center gap-12 px-6 py-14 sm:py-16 lg:grid-cols-[1.05fr_.95fr] lg:gap-6 lg:px-10 lg:py-20">
          <div className="relative z-10">
            <p className="reveal-up mb-8 text-xs font-semibold uppercase tracking-[0.28em] text-[#ff6a2a]">{t("For product owners")}</p>
            <h1 className="font-display glow-text reveal-up reveal-delay-1 max-w-5xl text-[clamp(4rem,9vw,9.5rem)] font-semibold leading-[0.84]">
              {t("From")}<br />{t("application")}<br /><span className="text-white/30">{t("to market")}</span>
            </h1>
            <div className="reveal-up reveal-delay-2 mt-9 flex max-w-2xl flex-col gap-6 sm:mt-10 sm:flex-row sm:items-end">
              <p className="max-w-xl text-[15px] leading-7 text-white/50 sm:text-base">
                {t("Fonitas helps application owners move from intake and evaluation to QA, publishing, growth and financial operations through one accountable lifecycle")}
              </p>
              <a href="#how-it-works" className="group flex shrink-0 items-center gap-3 text-sm font-medium transition hover:text-white/80">
                {t("See how it works")} <span className="text-[#ff5a1f] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"><Arrow /></span>
              </a>
            </div>
            <div className="reveal-up reveal-delay-3 mt-16 flex items-center gap-4 text-[10px] uppercase tracking-[0.24em] text-white/25">
              <span className="h-px w-10 bg-white/15" /> {t("Built around the application lifecycle")}
            </div>
          </div>
          <div className="reveal-up reveal-delay-2"><HeroOrbit /></div>
        </div>
      </section>

      <ProductSignal />

      <section className="border-b border-white/[0.08]">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-6 py-20 lg:grid-cols-[.7fr_1.3fr] lg:px-10 lg:py-28">
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.25em] text-[#ff5a1f]">{t("For application owners")}</p>
            <h2 className="font-display max-w-xl text-5xl font-semibold leading-[.92] sm:text-7xl">{t("More than publishing")}</h2>
          </div>
          <div className="max-w-3xl text-lg leading-8 text-white/45 sm:text-xl">
            <p>{t("Fonitas connects the operational work around your application so your team can move from collaboration to publishing and financial close through one clear lifecycle")}</p>
            <p className="mt-6">{t("The result is a controlled process with visible responsibility at every stage — without turning your public-facing journey into another complicated platform")}</p>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="border-b border-white/[0.08] bg-[#080808]">
        <div className="mx-auto max-w-[1400px] px-6 py-24 sm:py-28 lg:px-10 lg:py-36">
          <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="mb-5 text-xs uppercase tracking-[0.25em] text-[#ff5a1f]">{t("The lifecycle")}</p>
              <h2 className="font-display max-w-3xl text-5xl font-semibold leading-[.9] sm:text-7xl">{t("One path")}<br /><span className="text-white/30">{t("Nine stages")}</span></h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-white/35 lg:pb-1">{t("Explore the journey from collaboration to financial close. Each stage has a clear state, responsibility and next step")}</p>
          </div>
          <LifecycleWizard />
        </div>
      </section>

      <section id="publishing" className="border-y border-white/[0.08] bg-[#0b0b0b]">
          <ProjectShowcase />
      </section>

      <AccountabilitySection />

      <section id="platform" className="border-y border-white/[0.08] bg-[#0b0b0b]">
        <div className="mx-auto max-w-[1400px] px-6 py-28 lg:px-10 lg:py-40">
          <div className="mb-12 flex items-end justify-between gap-6 sm:mb-14">
            <div>
              <p className="mb-5 text-xs uppercase tracking-[0.25em] text-[#ff5a1f]">{t("Beyond publishing")}</p>
              <h2 className="font-display max-w-4xl text-5xl font-semibold leading-[.9] sm:text-7xl">{t("One core")}<br /><span className="text-white/30">{t("Many capabilities")}</span></h2>
            </div>
          </div>
          <InsightsShowcase />
        </div>
      </section>

      <FinancialClose />
      <PublishingModels />
      <AudienceSection />
      <PricingSection />
      <FAQSection />

      <section className="border-b border-white/[0.08] bg-[#ff5a1f] text-black">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-8 px-6 py-16 sm:flex-row sm:items-end sm:justify-between lg:px-10 lg:py-20">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[.25em] text-black/55">{t("Ready when the application is")}</p>
            <h2 className="font-display mt-4 max-w-3xl text-4xl font-semibold leading-[.9] sm:text-6xl">{t("Ready to bring your application to market?")}</h2>
          </div>
          <a href="/contact" className="inline-flex shrink-0 items-center justify-center rounded-full bg-black px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-black/80">{t("Start a conversation")} <span className="ml-3">↗</span></a>
        </div>
      </section>

      <footer className="border-t border-white/[0.08] bg-[#070707]">
        <div className="mx-auto max-w-[1400px] px-6 py-14 lg:px-10 lg:py-16">
          <div className="grid gap-12 md:grid-cols-[1.3fr_.7fr_.7fr_.7fr]">
            <div>
              <Link href="/" className="text-2xl font-bold tracking-[-.05em]">Fonitas<span className="text-[#ff5a1f]">.</span></Link>
              <p className="mt-5 max-w-xs text-sm leading-6 text-white/35">{t("The operating system for application publishing, from intake to settlement")}</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[.22em] text-white/25">{t("Product owners")}</p>
              <div className="mt-5 grid gap-3 text-sm text-white/50">
                <a href="#how-it-works" className="transition hover:text-white">{t("Lifecycle")}</a>
                <a href="#publishing" className="transition hover:text-white">{t("Publishing")}</a>
                <a href="#platform" className="transition hover:text-white">{t("Capabilities")}</a>
                <a href="/contact" className="transition hover:text-white">{t("Contact")}</a>
              </div>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[.22em] text-white/25">Fonitas</p>
              <div className="mt-5 grid gap-3 text-sm text-white/50">
                <Link href="/investors" className="transition hover:text-white">{t("For investors")}</Link>
                <a href="/about" className="transition hover:text-white">{t("About")}</a>
                <Link href="/blog" className="transition hover:text-white">{t("Blog")}</Link>
              </div>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[.22em] text-white/25">{t("Contact")}</p>
              <div className="mt-5 grid gap-3 text-sm text-white/50">
                <a href="mailto:hello@fonitas.com" className="transition hover:text-[#ff6a2a]">hello@fonitas.com</a>
                <a href="/contact" className="transition hover:text-white">{t("Contact Fonitas ↗")}</a>
              </div>
            </div>
          </div>
          <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-7 text-[10px] uppercase tracking-[.15em] text-white/20 sm:flex-row sm:items-center sm:justify-between">
            <span>{t("© 2026 Fonitas. All rights reserved")}</span>
            <span>{t("Application publishing & financial operations")}</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
