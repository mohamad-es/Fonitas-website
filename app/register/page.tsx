import Link from "next/link";
import { AuthLayout } from "@/components/auth/auth-layout";

export const metadata = {
  title: "Create an account — Fonitas",
  description: "Create your Fonitas account and start a collaboration request.",
};

export default function RegisterPage() {
  return (
    <AuthLayout>
      <Link href="/" className="mb-10 inline-block text-xs font-semibold uppercase tracking-[0.28em] text-white/45 hover:text-white lg:hidden">
        ← Fonitas
      </Link>
      <div className="mb-8">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#ff5a1f]">Get started</p>
        <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">Create account</h1>
        <p className="mt-4 max-w-md text-sm leading-6 text-white/50">Create your account to manage applications and collaborate with the Fonitas publishing workflow.</p>
      </div>
      <div className="mb-6 rounded-2xl border border-[#ff5a1f]/15 bg-[#ff5a1f]/[0.04] px-4 py-3 text-xs leading-5 text-white/40">Authentication is currently a front-end prototype. Backend account access will be connected in a later phase.</div>
      <form className="space-y-5" action="#" method="post">
        <label className="block text-sm text-white/70">Full name<input name="name" type="text" autoComplete="name" required placeholder="Your name" className="mt-2 w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-white outline-none transition placeholder:text-white/25 focus:border-[#ff5a1f]/60" /></label>
        <label className="block text-sm text-white/70">Work email<input name="email" type="email" autoComplete="email" required placeholder="you@company.com" className="mt-2 w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-white outline-none transition placeholder:text-white/25 focus:border-[#ff5a1f]/60" /></label>
        <label className="block text-sm text-white/70">Password<input name="password" type="password" autoComplete="new-password" required placeholder="Create a password" className="mt-2 w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-white outline-none transition placeholder:text-white/25 focus:border-[#ff5a1f]/60" /></label>
        <label className="block text-sm text-white/70">Confirm password<input name="confirmPassword" type="password" autoComplete="new-password" required placeholder="Repeat your password" className="mt-2 w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-white outline-none transition placeholder:text-white/25 focus:border-[#ff5a1f]/60" /></label>
        <label className="flex items-start gap-3 text-sm leading-5 text-white/45"><input type="checkbox" name="terms" required className="mt-1 accent-[#ff5a1f]" /> I agree to the terms and acknowledge the Fonitas publishing workflow.</label>
        <button type="submit" className="w-full rounded-full bg-[#ff5a1f] px-5 py-3.5 text-sm font-semibold text-black transition hover:bg-[#ff7a3d]">Create account ↗</button>
      </form>
      <p className="mt-8 text-center text-sm text-white/45">Already have an account? <Link href="/login" className="text-white hover:text-[#ff7a3d]">Sign in</Link></p>
    </AuthLayout>
  );
}
