import Link from "next/link";

export const metadata = {
  title: "Sign in — Foonitas",
  description: "Sign in to your Foonitas account.",
};

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-[#070707] px-6 py-12 text-[#f4f2ed]">
      <div className="mx-auto flex min-h-[calc(100vh-6rem)] max-w-md items-center justify-center">
        <div className="w-full">
          <Link href="/" className="mb-12 inline-block text-sm font-semibold tracking-[0.22em] text-white">FOONITAS</Link>
          <div className="mb-8">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#ff5a1f]">Welcome back</p>
            <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">Sign in</h1>
            <p className="mt-4 text-sm leading-6 text-white/50">Access your applications, publishing workflow, and collaboration activity.</p>
          </div>
          <form className="space-y-5" action="#" method="post">
            <label className="block text-sm text-white/70">Email<input name="email" type="email" autoComplete="email" required placeholder="you@company.com" className="mt-2 w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-white outline-none transition placeholder:text-white/25 focus:border-[#ff5a1f]/60" /></label>
            <label className="block text-sm text-white/70">Password<input name="password" type="password" autoComplete="current-password" required placeholder="••••••••" className="mt-2 w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-white outline-none transition placeholder:text-white/25 focus:border-[#ff5a1f]/60" /></label>
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-white/45"><input type="checkbox" name="remember" className="accent-[#ff5a1f]" /> Remember me</label>
              <Link href="/contact" className="text-[#ff7a3d] hover:text-white">Forgot password?</Link>
            </div>
            <button type="submit" className="w-full rounded-full bg-[#ff5a1f] px-5 py-3.5 text-sm font-semibold text-black transition hover:bg-[#ff7a3d]">Sign in ↗</button>
          </form>
          <p className="mt-8 text-center text-sm text-white/45">Don&apos;t have an account? <Link href="/register" className="text-white hover:text-[#ff7a3d]">Create one</Link></p>
        </div>
      </div>
    </main>
  );
}
