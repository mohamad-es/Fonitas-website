import { Header } from "@/components/layout/header";
import { HeroOrbit } from "@/components/home/hero-orbit";
import { ProjectShowcase } from "@/components/home/project-showcase";
import { AboutProcess } from "@/components/home/about-process";
import { InsightsShowcase } from "@/components/home/insights-showcase";
import { PublishingModels } from "@/components/home/publishing-models";
import { PricingSection } from "@/components/home/pricing-section";
import { FAQSection } from "@/components/home/faq-section";
import { ContactSection } from "@/components/home/contact-section";

const capabilities = [
  ["01", "Collaboration request", "Start the relationship with the information needed to understand the application and the publishing opportunity."],
  ["02", "Application registration", "Register the application and establish the operational record that moves through the lifecycle."],
  ["03", "Evaluation", "Assess readiness, risk and the next step before publishing rights are activated."],
  ["04", "Contract & license", "Define publishing scope, stores, geography, duration and commercial terms before activation."],
  ["05", "QA & compliance", "Verify the release through integrity, security, manual QA and compliance checks."],
  ["06", "Publishing", "Prepare assets, builds and store submission while keeping the publishing operation accountable."],
  ["07", "Revenue collection", "Bring post-publication revenue into the financial workflow."],
  ["08", "Reconciliation", "Reconcile external revenue facts against costs and the active contractual rules."],
  ["09", "Settlement", "Create settlement, statement and payment records and close the financial loop."],
];

const Arrow = () => <span aria-hidden="true">↗</span>;

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Header />

      <section className="relative min-h-screen border-b border-white/[0.08] pt-20">
        <div className="absolute inset-0 grid-bg opacity-35" />
        <div className="absolute -right-40 top-24 h-[520px] w-[520px] rounded-full bg-[#ff5a1f]/10 blur-[140px]" />
        <div className="relative mx-auto grid min-h-[calc(100vh-80px)] max-w-[1400px] items-center gap-10 px-6 py-16 lg:grid-cols-[1.05fr_.95fr] lg:px-10 lg:py-20">
          <div className="relative z-10">
            <p className="reveal-up mb-8 text-xs font-semibold uppercase tracking-[0.28em] text-[#ff6a2a]">Application publishing operating system</p>
            <h1 className="font-display glow-text reveal-up reveal-delay-1 max-w-5xl text-[clamp(4rem,9vw,9.5rem)] font-semibold leading-[0.84]">From<br />application<br /><span className="text-white/30">to market.</span></h1>
            <div className="reveal-up reveal-delay-2 mt-10 flex max-w-2xl flex-col gap-6 sm:flex-row sm:items-end">
              <p className="text-base leading-7 text-white/50">Fonitas connects application intake, evaluation, contracts, QA, publishing and the financial lifecycle in one operating system.</p>
              <a href="#how-it-works" className="group flex shrink-0 items-center gap-3 text-sm font-medium transition hover:text-white/80">See how it works <span className="text-[#ff5a1f] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"><Arrow /></span></a>
            </div>
            <div className="reveal-up reveal-delay-3 mt-16 flex items-center gap-4 text-[10px] uppercase tracking-[0.24em] text-white/25"><span className="h-px w-10 bg-white/15" />Built around the application lifecycle</div>
          </div>
          <div className="reveal-up reveal-delay-2"><HeroOrbit /></div>
        </div>
      </section>

      <section className="border-b border-white/[0.08]">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-6 py-20 lg:grid-cols-[.7fr_1.3fr] lg:px-10 lg:py-28">
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.25em] text-[#ff5a1f]">What is Fonitas?</p>
            <h2 className="font-display max-w-xl text-5xl font-semibold leading-[.92] sm:text-7xl">More than a publishing tool.</h2>
          </div>
          <div className="max-w-3xl text-lg leading-8 text-white/45 sm:text-xl">
            <p>Fonitas is designed as an <span className="text-white/80">Application Publishing Operating System</span> — not just an app registration form, store publishing tool, dashboard or payment system.</p>
            <p className="mt-6">It connects the operational steps around an application so developers and organizations can move from collaboration to publishing and financial close through one accountable lifecycle.</p>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="mx-auto max-w-[1400px] px-6 py-28 lg:px-10 lg:py-40">
        <div className="grid gap-16 lg:grid-cols-[.72fr_1.28fr]">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="mb-5 text-xs uppercase tracking-[0.25em] text-[#ff5a1f]">The lifecycle</p>
            <h2 className="font-display max-w-xl text-5xl font-semibold leading-[.92] sm:text-7xl">One connected path from collaboration to settlement.</h2>
            <p className="mt-8 max-w-md text-sm leading-6 text-white/35">The MVP is intentionally centered on publishing and settlement. Future capabilities expand around that foundation.</p>
          </div>
          <div className="border-t border-white/10">
            {capabilities.map(([number, title, description]) => (
              <article key={number} className="group grid gap-5 border-b border-white/10 py-9 sm:grid-cols-[55px_1fr_1.1fr] sm:gap-6">
                <span className="text-xs text-white/25">{number}</span>
                <h3 className="text-2xl font-medium transition group-hover:text-[#ff6a2a]">{title}</h3>
                <p className="max-w-md text-sm leading-6 text-white/40">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="publishing" className="border-y border-white/[0.08] bg-[#0b0b0b]">
        <div className="mx-auto max-w-[1400px] px-6 py-28 lg:px-10 lg:py-40">
          <div className="mb-16 flex items-end justify-between gap-6">
            <div>
              <p className="mb-5 text-xs uppercase tracking-[0.25em] text-[#ff5a1f]">How publishing works</p>
              <h2 className="font-display max-w-4xl text-5xl font-semibold leading-[.9] sm:text-7xl">Controlled releases.<br /><span className="text-white/30">Clear responsibility.</span></h2>
            </div>
            <a href="#contact" className="hidden text-sm text-white/50 transition hover:text-white sm:block">Start a collaboration <Arrow /></a>
          </div>
          <ProjectShowcase />
        </div>
      </section>

      <AboutProcess />

      <PublishingModels />

      <section id="platform" className="border-y border-white/[0.08] bg-[#0b0b0b]">
        <div className="mx-auto max-w-[1400px] px-6 py-28 lg:px-10 lg:py-40">
          <div className="mb-14 flex items-end justify-between gap-6">
            <div>
              <p className="mb-5 text-xs uppercase tracking-[0.25em] text-[#ff5a1f]">Beyond publishing</p>
              <h2 className="font-display max-w-4xl text-5xl font-semibold leading-[.9] sm:text-7xl">A platform that can<br /><span className="text-white/30">grow around the core.</span></h2>
            </div>
          </div>
          <InsightsShowcase />
        </div>
      </section>

      <PricingSection />

      <FAQSection />

      <section className="border-b border-white/[0.08] bg-[#ff5a1f] text-black">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-8 px-6 py-16 sm:flex-row sm:items-end sm:justify-between lg:px-10 lg:py-20">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[.25em] text-black/55">Ready when the application is</p>
            <h2 className="font-display mt-4 max-w-3xl text-4xl font-semibold leading-[.9] sm:text-6xl">Start with the application. We&apos;ll map the path.</h2>
          </div>
          <a href="#contact" className="inline-flex shrink-0 items-center justify-center rounded-full bg-black px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-black/80">Submit a collaboration request <span className="ml-3">↗</span></a>
        </div>
      </section>

      <ContactSection />

      <footer className="border-t border-white/[0.08] bg-[#070707]">
        <div className="mx-auto max-w-[1400px] px-6 py-14 lg:px-10 lg:py-16">
          <div className="grid gap-12 md:grid-cols-[1.3fr_.7fr_.7fr_.7fr]">
            <div>
              <a href="#" className="text-2xl font-bold tracking-[-.05em]">Fonitas<span className="text-[#ff5a1f]">.</span></a>
              <p className="mt-5 max-w-xs text-sm leading-6 text-white/35">The operating system for application publishing, from intake to settlement.</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[.22em] text-white/25">Platform</p>
              <div className="mt-5 grid gap-3 text-sm text-white/50"><a href="#how-it-works" className="transition hover:text-white">Lifecycle</a><a href="#publishing" className="transition hover:text-white">Publishing</a><a href="#models" className="transition hover:text-white">Operating models</a><a href="#about" className="transition hover:text-white">Principles</a><a href="#platform" className="transition hover:text-white">Roadmap</a></div>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[.22em] text-white/25">Future capabilities</p>
              <div className="mt-5 grid gap-3 text-sm text-white/50"><span>Commercial</span><span>Marketing</span><span>Legal</span><span>Investment</span></div>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[.22em] text-white/25">Contact</p>
              <div className="mt-5 grid gap-3 text-sm text-white/50"><a href="mailto:hello@fonitas.com" className="transition hover:text-[#ff6a2a]">hello@fonitas.com</a><a href="#contact" className="transition hover:text-white">Submit a collaboration request ↗</a></div>
            </div>
          </div>
          <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-7 text-[10px] uppercase tracking-[.15em] text-white/20 sm:flex-row sm:items-center sm:justify-between"><span>© 2026 Fonitas. All rights reserved.</span><span>Application publishing, growth &amp; financial operations.</span></div>
        </div>
      </footer>
    </main>
  );
}
