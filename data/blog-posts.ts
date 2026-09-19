export type BlogPost = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  author: string;
  image: string;
  featured?: boolean;
  content: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "from-build-to-market",
    category: "Publishing",
    title: "From build to market: what happens after an application is ready",
    excerpt:
      "Publishing is more than uploading a build. A reliable release needs review, QA, store preparation, submission and a clear operational record.",
    date: "September 12, 2026",
    readTime: "6 min read",
    author: "Fonitas",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80",
    featured: true,
    content: [
      "An application can be technically complete and still be far from the market. The work between a finished build and a published product is where operational gaps tend to appear.",
      "A controlled publishing workflow starts by establishing the application record, confirming the release scope and making the responsibilities around the release explicit. From there, QA and compliance checks can be attached to the same release path.",
      "The important part is traceability. The build, checks, approvals, submission and final store state should form one understandable record rather than a collection of disconnected messages and files.",
      "Fonitas is designed around that operating model: move an application through a defined lifecycle, keep the important decisions auditable, and connect publishing with the financial operations that follow it.",
    ],
  },
  {
    slug: "why-publishing-needs-an-operating-system",
    category: "Operations",
    title: "Why application publishing needs an operating system",
    excerpt:
      "As publishing becomes a recurring business process, teams need more than a dashboard. They need a system that connects people, process, state and accountability.",
    date: "September 5, 2026",
    readTime: "5 min read",
    author: "Fonitas",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",
    content: [
      "Publishing touches multiple responsibilities: application ownership, evaluation, contracts, QA, store operations and finance. Treating each step as an isolated task makes the overall process harder to understand and harder to audit.",
      "An operating system gives those steps a shared lifecycle. Each domain can keep ownership of its own state while the workflow provides a clear path from one responsibility to the next.",
      "That model becomes increasingly useful when an organization publishes more than one application. The goal is not to add another generic CRUD dashboard, but to create a dependable operating layer around the application lifecycle.",
    ],
  },
  {
    slug: "human-in-the-loop-publishing",
    category: "Publishing",
    title: "Human-in-the-loop publishing: where automation should stop",
    excerpt:
      "Not every publishing decision should be automated. The right boundary keeps repetitive operations efficient while leaving consequential release decisions under human control.",
    date: "August 28, 2026",
    readTime: "5 min read",
    author: "Fonitas",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=80",
    content: [
      "Automation is useful when a step is repeatable, observable and safe to execute without additional judgment. Publishing also contains moments where a human decision matters.",
      "Fonitas therefore treats store submission as a human-in-the-loop workflow in the initial publishing model. The system prepares the release, validates the required conditions and records the submission, while the final store interaction remains explicit.",
      "This creates a useful boundary: software handles state, validation and evidence; people remain responsible for decisions that carry operational or commercial consequences.",
    ],
  },
  {
    slug: "the-financial-close-after-publishing",
    category: "Finance",
    title: "The financial close after publishing",
    excerpt:
      "Publishing does not end when an app reaches a store. Revenue collection, reconciliation, owner share and settlement complete the operational lifecycle.",
    date: "August 19, 2026",
    readTime: "7 min read",
    author: "Fonitas",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1400&q=80",
    content: [
      "Once an application is generating revenue, a second operational lifecycle begins. Revenue facts need to be recorded, reconciled and connected to the contractual terms that determine ownership.",
      "A financial close should leave an immutable history of what was earned, what was reconciled, what was allocated and what was settled. That history becomes part of the application record rather than an afterthought.",
      "Connecting publishing and financial operations gives application owners a clearer view of the full journey from release to settlement.",
    ],
  },
  {
    slug: "building-for-store-expansion",
    category: "Platform",
    title: "Designing a publishing core that can support more stores",
    excerpt:
      "A future-ready publishing model starts with a stable internal workflow instead of coupling the product to one store provider.",
    date: "August 11, 2026",
    readTime: "6 min read",
    author: "Fonitas",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1400&q=80",
    content: [
      "Different stores expose different APIs, requirements and submission workflows. Building the internal publishing model around one provider can make future expansion unnecessarily expensive.",
      "A better boundary is to keep the internal concepts stable: publishing request, store submission and store event. Provider-specific adapters can then translate those concepts into the requirements of each store.",
      "This allows the core workflow to evolve independently while future integrations can be added without changing the business language of the platform.",
    ],
  },
  {
    slug: "application-ownership-and-accountability",
    category: "Product",
    title: "Application ownership is more than access control",
    excerpt:
      "Clear ownership connects the application record, operational responsibilities, contractual terms and financial outcomes.",
    date: "August 3, 2026",
    readTime: "4 min read",
    author: "Fonitas",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80",
    content: [
      "Access control answers who can perform an action. Ownership answers who is accountable for the application and the outcomes attached to it.",
      "Keeping those concepts explicit helps different parts of the system make decisions without creating hidden dependencies between domains.",
      "For an application publishing platform, that distinction becomes especially important once contracts, publishing records and financial settlement are part of the same lifecycle.",
    ],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
