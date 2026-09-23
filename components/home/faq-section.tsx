const faqs = [
  ["What is Fonitas?", "Fonitas is an Application Publishing Operating System. It manages the lifecycle around an application from collaboration and registration through evaluation, contract, QA, publishing, revenue, reconciliation and settlement."],
  ["Does Fonitas need my application's source code?", "Normal publishing does not require source code. Fonitas works around the application, its releases, store assets and publishing workflow. Controlled repository access can be used when Fonitas is responsible for building a release."],
  ["Who is Fonitas for?", "The platform is designed around developers and organizations that need a structured path to publish and operate applications, with clear ownership across application, publishing, QA, commercial and financial workflows."],
  ["Is publishing fully automated?", "The MVP keeps publishing human-in-the-loop. Fonitas supports store preparation, checklists, assets, builds and submission while keeping responsibility and state explicit."],
  ["Can we keep our own store account?", "Yes. The architecture supports customer-owned store accounts where Fonitas acts as release manager, as well as a Publisher of Record model where Fonitas controls the publishing relationship."],
  ["What happens to revenue after an application is published?", "The financial lifecycle can collect revenue, reconcile external transactions, calculate the applicable owner share from the active contract, create settlement records and complete payment and statement workflows."],
  ["How does Fonitas handle higher-risk applications?", "Applications can be assessed across risk levels. Higher-risk categories may require enhanced QA, legal review, security assessment, source or audit rights, and additional contractual warranties."],
  ["What does the publishing agreement define?", "The contract can define publishing scope, stores, geography, duration, revenue share, costs and other commercial terms. Signed versions are treated as immutable, with changes handled through amendments."],
  ["Will Fonitas automate every store submission?", "No. The MVP is human-in-the-loop. Provider-specific store adapters are a later architecture path, while the internal publishing model remains store-agnostic."],
];

export function FAQSection() {
  return (
    <section id="faq" className="border-b border-white/[0.08]">
      <div className="mx-auto max-w-[1400px] px-6 py-20 sm:py-28 lg:px-10 lg:py-40">
        <div className="grid gap-10 lg:grid-cols-[.72fr_1.28fr] lg:gap-16">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="mb-5 text-xs uppercase tracking-[0.25em] text-[#ff5a1f]">Questions</p>
            <h2 className="font-display max-w-xl text-4xl font-semibold leading-[.92] sm:text-6xl lg:text-7xl">The important parts, <span className="text-white/30">made clear.</span></h2>
            <p className="mt-7 max-w-md text-sm leading-6 text-white/35 sm:mt-8">A concise view of the publishing model, source-code boundary, store ownership and financial lifecycle.</p>
          </div>
          <div className="border-t border-white/10">
            {faqs.map(([question, answer], index) => (
              <details key={question} className="group border-b border-white/10">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-6 text-base font-medium text-white/80 transition hover:text-white sm:gap-8 sm:py-7 sm:text-xl">
                  <span className="flex min-w-0 items-start gap-4"><span className="mt-1 shrink-0 text-[10px] text-[#ff5a1f]">{String(index + 1).padStart(2, "0")}</span><span>{question}</span></span>
                  <span aria-hidden="true" className="shrink-0 text-xl font-light text-white/30 transition duration-300 group-open:rotate-45 group-open:text-[#ff5a1f]">+</span>
                </summary>
                <div className="max-w-3xl pb-7 pl-0 text-sm leading-7 text-white/40 sm:pb-8 sm:pl-12">{answer}</div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
