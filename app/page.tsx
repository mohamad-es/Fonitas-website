const solutions = [
  {
    number: "01",
    title: "Strategy",
    description: "We turn ambitious ideas into clear digital direction, defining what to build and why it matters.",
  },
  {
    number: "02",
    title: "Design",
    description: "Human-centered interfaces and experiences that make complex products feel simple and intuitive.",
  },
  {
    number: "03",
    title: "Development",
    description: "Fast, scalable digital products engineered for real users, real businesses and long-term growth.",
  },
];

const projects = [
  { type: "Digital Platform", title: "Education ecosystem", year: "2025" },
  { type: "Web Experience", title: "Real estate platform", year: "2025" },
  { type: "Product Design", title: "Business management", year: "2024" },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <main className="overflow-hidden">
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/[0.07] bg-[#070707]/75 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-6 lg:px-10">
          <a href="#" className="text-xl font-bold tracking-[-0.04em]">
            Foonitas<span className="text-[#ff5a1f]">.</span>
          </a>
          <nav className="hidden items-center gap-9 text-sm text-white/65 md:flex">
            <a className="transition hover:text-white" href="#solutions">Solutions</a>
            <a className="transition hover:text-white" href="#work">Work</a>
            <a className="transition hover:text-white" href="#about">About</a>
            <a className="transition hover:text-white" href="#insights">Insights</a>
          </nav>
          <a href="#contact" className="rounded-full bg-[#ff5a1f] px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-[#ff7a3d]">
            Let&apos;s talk <Arrow />
          </a>
        </div>
      </header>

      <section className="relative min-h-screen border-b border-white/[0.08] pt-20">
        <div className="absolute inset-0 grid-bg opacity-35" />
        <div className="absolute -right-40 top-24 h-[520px] w-[520px] rounded-full bg-[#ff5a1f]/10 blur-[140px]" />
        <div className="relative mx-auto grid min-h-[calc(100vh-80px)] max-w-[1400px] items-center gap-12 px-6 py-20 lg:grid-cols-[1.1fr_.9fr] lg:px-10">
          <div>
            <p className="mb-8 text-xs font-semibold uppercase tracking-[0.28em] text-[#ff6a2a]">Digital products · Technology · Experience</p>
            <h1 className="font-display max-w-4xl text-[clamp(4rem,9vw,9.5rem)] font-semibold leading-[0.84]">
              Transform
              <br />
              fragmented
              <br />
              <span className="text-white/35">ideas.</span>
            </h1>
            <div className="mt-10 flex max-w-xl flex-col gap-6 sm:flex-row sm:items-end">
              <p className="text-base leading-7 text-white/50">
                Strategy-led design and engineering for businesses ready to turn complexity into meaningful digital products.
              </p>
              <a href="#work" className="group flex shrink-0 items-center gap-3 text-sm font-medium">
                Explore our work <span className="text-[#ff5a1f] transition group-hover:translate-x-1"><Arrow /></span>
              </a>
            </div>
          </div>

          <div className="relative mx-auto aspect-square w-full max-w-[520px]">
            <div className="absolute inset-[13%] rounded-[32%] border border-[#ff5a1f]/25 bg-gradient-to-br from-[#ff5a1f]/20 via-[#ff5a1f]/5 to-transparent blur-[1px] orange-glow" />
            <div className="absolute inset-[24%] rotate-12 rounded-[28%] border border-white/10 bg-[#111]/80 backdrop-blur-sm" />
            <div className="absolute inset-[34%] -rotate-12 rounded-[24%] bg-[#ff5a1f] shadow-[0_0_100px_rgba(255,90,31,.4)]" />
            <div className="absolute inset-[40%] rounded-full bg-[#080808]" />
            <div className="absolute bottom-[8%] left-[8%] rounded-full border border-white/10 bg-black/60 px-4 py-2 text-xs text-white/50 backdrop-blur-md">FOONITAS / 01</div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/[0.08]" aria-label="Company statistics">
        <div className="mx-auto grid max-w-[1400px] grid-cols-2 divide-white/[0.08] px-6 sm:grid-cols-4 sm:divide-x lg:px-10">
          {[["50+", "Projects delivered"], ["30+", "Digital experiences"], ["5+", "Years of craft"], ["10+", "Industries explored"]].map(([value, label]) => (
            <div key={label} className="px-5 py-10 first:pl-0 last:pr-0 sm:px-8">
              <p className="text-4xl font-semibold tracking-[-0.05em]">{value}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.16em] text-white/35">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="solutions" className="mx-auto max-w-[1400px] px-6 py-28 lg:px-10 lg:py-40">
        <div className="grid gap-16 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.25em] text-[#ff5a1f]">What we do</p>
            <h2 className="font-display max-w-xl text-5xl font-semibold leading-[0.95] sm:text-7xl">Strategy-led design.</h2>
          </div>
          <div className="border-t border-white/10">
            {solutions.map((item) => (
              <div key={item.number} className="grid gap-6 border-b border-white/10 py-9 sm:grid-cols-[80px_1fr_1fr]">
                <span className="text-xs text-white/30">{item.number}</span>
                <h3 className="text-2xl font-medium">{item.title}</h3>
                <p className="max-w-md text-sm leading-6 text-white/45">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="border-y border-white/[0.08] bg-[#0b0b0b]">
        <div className="mx-auto max-w-[1400px] px-6 py-28 lg:px-10 lg:py-40">
          <div className="mb-16 flex items-end justify-between gap-6">
            <div>
              <p className="mb-5 text-xs uppercase tracking-[0.25em] text-[#ff5a1f]">Selected work</p>
              <h2 className="font-display text-5xl font-semibold sm:text-7xl">Real products.<br />Real impact.</h2>
            </div>
            <a href="#contact" className="hidden text-sm text-white/50 transition hover:text-white sm:block">View all work <Arrow /></a>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {projects.map((project, index) => (
              <article key={project.title} className={`${index === 0 ? "md:col-span-2" : ""} group relative min-h-[360px] overflow-hidden rounded-[28px] border border-white/[0.08] bg-[#111] p-7`}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,90,31,.18),transparent_40%)] transition duration-700 group-hover:scale-110" />
                <div className="absolute right-[10%] top-[16%] h-44 w-44 rotate-12 rounded-[30%] border border-[#ff5a1f]/20 bg-[#ff5a1f]/10 shadow-[0_0_90px_rgba(255,90,31,.18)] transition duration-700 group-hover:rotate-0 group-hover:scale-110" />
                <div className="absolute bottom-7 left-7 right-7 flex items-end justify-between">
                  <div>
                    <p className="mb-2 text-xs uppercase tracking-[0.18em] text-[#ff6a2a]">{project.type}</p>
                    <h3 className="text-2xl font-medium">{project.title}</h3>
                  </div>
                  <span className="text-sm text-white/30">{project.year} <Arrow /></span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-[1400px] px-6 py-28 lg:px-10 lg:py-40">
        <div className="grid gap-16 lg:grid-cols-[.7fr_1.3fr]">
          <p className="text-xs uppercase tracking-[0.25em] text-[#ff5a1f]">Why Foonitas</p>
          <div>
            <h2 className="font-display max-w-5xl text-5xl font-semibold leading-[.95] sm:text-7xl">We make complex things feel <span className="text-white/30">simple.</span></h2>
            <p className="mt-10 max-w-2xl text-lg leading-8 text-white/45">From the first strategic question to the final line of code, we bring clarity, design and technology into one focused process.</p>
          </div>
        </div>
      </section>

      <section id="insights" className="border-y border-white/[0.08] bg-[#0b0b0b]">
        <div className="mx-auto max-w-[1400px] px-6 py-28 lg:px-10 lg:py-32">
          <div className="mb-12 flex items-center justify-between">
            <div><p className="mb-4 text-xs uppercase tracking-[0.25em] text-[#ff5a1f]">Insights</p><h2 className="font-display text-4xl font-semibold sm:text-6xl">Ideas worth sharing.</h2></div>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {["Designing products people understand", "Why strategy comes before pixels", "Building digital products for scale"].map((title, i) => (
              <article key={title} className="group border-t border-white/10 py-7">
                <p className="text-xs text-white/30">0{i + 1} / INSIGHT</p>
                <h3 className="mt-16 text-xl leading-7 transition group-hover:text-[#ff6a2a]">{title}</h3>
                <p className="mt-6 text-xs uppercase tracking-[0.15em] text-white/25">Read article <Arrow /></p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="relative overflow-hidden px-6 py-32 text-center lg:py-48">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff5a1f]/10 blur-[130px]" />
        <div className="relative">
          <p className="mb-7 text-xs uppercase tracking-[0.3em] text-[#ff5a1f]">Have an idea?</p>
          <h2 className="font-display text-[clamp(4rem,11vw,10rem)] font-semibold leading-[.82]">Let&apos;s build<br /><span className="text-white/30">what&apos;s next.</span></h2>
          <a href="mailto:hello@foonitas.com" className="mt-12 inline-flex rounded-full bg-[#ff5a1f] px-7 py-4 text-sm font-semibold text-black transition hover:bg-[#ff7a3d]">Start a project <span className="ml-2"><Arrow /></span></a>
        </div>
      </section>

      <footer className="border-t border-white/[0.08]">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-8 px-6 py-10 sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <div><span className="font-semibold">Foonitas<span className="text-[#ff5a1f]">.</span></span><p className="mt-2 text-xs text-white/30">Technology for a better tomorrow.</p></div>
          <div className="flex gap-6 text-xs text-white/40"><a href="#">LinkedIn</a><a href="#">Instagram</a><a href="#">Dribbble</a></div>
          <p className="text-xs text-white/20">© 2026 Foonitas</p>
        </div>
      </footer>
    </main>
  );
}
