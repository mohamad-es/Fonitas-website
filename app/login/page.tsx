import Link from "next/link";
import { AuthLayout } from "@/components/auth/auth-layout";
import { LoginForm } from "@/features/auth/login/login-form";

export const metadata = {
  title: "Sign in — Fonitas",
  description: "Sign in to your Fonitas account.",
};

export default function LoginPage() {
  return (
    <AuthLayout>
      <Link
        href="/"
        className="mb-10 inline-block text-xs font-semibold uppercase tracking-[0.28em] text-white/45 hover:text-white lg:hidden"
      >
        ← Fonitas
      </Link>
      <div className="mb-9">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#ff5a1f]">Welcome back</p>
        <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">Sign in</h1>
        <p className="mt-4 max-w-md text-sm leading-6 text-white/50">
          Access your applications, publishing workflow, and collaboration activity.
        </p>
      </div>
      <LoginForm />
      <p className="mt-8 text-center text-sm text-white/45">
        Don&apos;t have an account?{" "}
        <Link href="/register" className="text-white hover:text-[#ff7a3d]">
          Create one
        </Link>
      </p>
    </AuthLayout>
  );
}
