import Link from "next/link";
import { AuthLayout } from "@/components/auth/auth-layout";
import { RegisterForm } from "@/features/auth/register/register-form";

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
      <RegisterForm />
      <p className="mt-8 text-center text-sm text-white/45">Already have an account? <Link href="/login" className="text-white hover:text-[#ff7a3d]">Sign in</Link></p>
    </AuthLayout>
  );
}