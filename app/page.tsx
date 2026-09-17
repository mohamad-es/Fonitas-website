import { Header } from "@/components/layout/header";
import { HeroOrbit } from "@/components/home/hero-orbit";
import { ProjectShowcase } from "@/components/home/project-showcase";
import { AboutProcess } from "@/components/home/about-process";
import { InsightsShowcase } from "@/components/home/insights-showcase";
import { ContactSection } from "@/components/home/contact-section";

const solutions = [
  ["01", "Strategy", "We turn ambitious ideas into clear digital direction, defining what to build and why it matters."],
  ["02", "Design", "Human-centered interfaces and experiences that make complex products feel simple and intuitive."],
  ["03", "Development", "Fast, scalable digital products engineered for real users, real businesses and long-term growth."],
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
            <p className="reveal-up mb-8 text-xs font-semibold uppercase tracking-[0.28em] text-[#ff6a2a]">Digital products · Technology · Experience</p>
            <h1 className="font-display glow-text reveal-up reveal-delay-1 max-w-5xl text-[clamp(4rem,9vw,9.5rem)] font-semibold leading-[0.84]">Transform<br />fragmented<br /><span className="text-white/30">ideas.</span></h1>
            <div className="reveal-up reveal-delay-2 mt-10 flex max-w-xl flex-col gap-6 sm:flex-row sm:items-end">
              <p className="text-base leading-7 text-white/50">Strategy-led design and engineering for businesses ready to turn complexity into meaningful digital products.</p>
              <a href="#work" className="group flex shrink-0 items-center gap-3 text-sm font-medium transition hover:text-white/80">Explore our work <span className="text-[#ff5a1f] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"><Arrow /></span></a>
            </div>
            <div className="reveal-up reveal-delay-3 mt-16 flex items-center gap-4 text-[10px] uppercase tracking-[0.24em] text-white/25"><span className="h-px w-10 bg-white/15" />Scroll to explore</div>
          </div>
          <div className="reveal-up reveal-delay-2"><HeroOrbit /></div>
        </div>
      </section>

      <section className="border-b border-white/[0.08]" aria-label="Company statistics">
        <div className="mx-auto grid max-w-[1400px] grid-cols-2 divide-white/[0.08] px-6 sm:grid-cols-4 sm:divide-x lg:px-10">
          {[["50+", "Projects delivered"], ["30+", "Digital experiences"], ["5+", "Years of craft"], ["10+", "Industries explored"]].map(([value, label]) => <div key={label} className="px-5 py-10 first:pl-0 last:pr-0 sm:px-8"><p className="text-4xl font-semibold tracking-[-0.05em]">{value}</p><p className="mt-2 text-xs uppercase tracking-[0.16em] text-white/35">{label}</p></div>)}
        </div>
      </section>

      <section id="solutions" className="mx-auto max-w-[1400px] px-6 py-28 lg:px-10 lg:py-40">
        <div className="grid gap-16 lg:grid-cols-[.8fr_1.2fr]"><div><p className="mb-5 text-xs uppercase tracking-[0.25em] text-[#ff5a1f]">What we do</p><h2 className="font-display max-w-xl text-5xl font-semibold leading-[.95] sm:text-7xl">Strategy-led design.</h2></div><div className="border-t border-white/10">{solutions.map(([number, title, description]) => <div key={number} className="group grid gap-6 border-b border-white/10 py-9 sm:grid-cols-[80px_1fr_1fr]"><span className="text-xs text-white/30">{number}</span><h3 className="text-2xl font-medium transition group-hover:text-[#ff6a2a]">{title}</h3><p className="max-w-md text-sm leading-6 text-white/45">{description}</p></div>)}</div></div>
      </section>

      <section id="work" className="border-y border-white/[0.08] bg-[#0b0b0b]"><div className="mx-auto max-w-[1400px] px-6 py-28 lg:px-10 lg:py-40"><div className="mb-16 flex items-end justify-between gap-6"><div><p className="mb-5 text-xs uppercase tracking-[0.25em] text-[#ff5a1f]">Selected work</p><h2 className="font-display text-5xl font-semibold sm:text-7xl">Real products.<br />Real impact.</h2></div><a href="#contact" className="hidden text-sm text-white/50 transition hover:text-white sm:block">View all work <Arrow /></a></div><ProjectShowcase /></div></section>

      <AboutProcess />

      <section id="insights" className="border-y border-white/[0.08] bg-[#0b0b0b]"><div className="mx-auto max-w-[1400px] px-6 py-28 lg:px-10 lg:py-40"><div className="mb-14 flex items-end justify-between gap-6"><div><p className="mb-5 text-xs uppercase tracking-[0.25em] text-[#ff5a1f]">Insights</p><h2 className="font-display text-5xl font-semibold leading-[.95] sm:text-7xl">Ideas worth<br />sharing.</h2></div><a href="#contact" className="hidden text-sm text-white/45 transition hover:text-white sm:block">All insights <Arrow /></a></div><InsightsShowcase /></div></section>

      <ContactSection />

      <footer className="border-t border-white/[0.08] bg-[#070707]"><div className="mx-auto max-w-[1400px] px-6 py-14 lg:px-10 lg:py-16"><div className="grid gap-12 md:grid-cols-[1.3fr_.7fr_.7fr_.7fr]"><div><a href="#" className="text-2xl font-bold tracking-[-.05em]">Foonitas<span className="text-[#ff5a1f]">.</span></a><p className="mt-5 max-w-xs text-sm leading-6 text-white/35">Strategy, design and technology for ambitious digital products.</p></div><div><p className="text-[10px] uppercase tracking-[.22em] text-white/25">Explore</p><div className="mt-5 grid gap-3 text-sm text-white/50"><a href="#solutions" className="transition hover:text-white">Solutions</a><a href="#work" className="transition hover:text-white">Work</a><a href="#about" className="transition hover:text-white">About</a><a href="#insights" className="transition hover:text-white">Insights</a></div></div><div><p className="text-[10px] uppercase tracking-[.22em] text-white/25">Social</p><div className="mt-5 grid gap-3 text-sm text-white/50"><a href="#" className="transition hover:text-white">LinkedIn ↗</a><a href="#" className="transition hover:text-white">Instagram ↗</a><a href="#" className="transition hover:text-white">Dribbble ↗</a></div></div><div><p className="text-[10px] uppercase tracking-[.22em] text-white/25">Contact</p><div className="mt-5 grid gap-3 text-sm text-white/50"><a href="mailto:hello@foonitas.com" className="transition hover:text-[#ff6a2a]">hello@foonitas.com</a><a href="#contact" className="transition hover:text-white">Start a project ↗</a></div></div></div><div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-7 text-[10px] uppercase tracking-[.15em] text-white/20 sm:flex-row sm:items-center sm:justify-between"><span>© 2026 Foonitas. All rights reserved.</span><span>Technology for a better tomorrow.</span></div></div></footer>
    </main>
  );
}
