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
      <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm leading-6 text-white/55">
        <p className="font-medium text-white/80">Already registered but email verification is incomplete?</p>
        <p className="mt-1">You can open the verification page, enter the email address you registered with, and request a new verification message. For your security, we show a general confirmation after a resend request.</p>
        <Link href="/verify" className="mt-3 inline-flex font-semibold text-[#ff7a3d] hover:text-[#ff9a70]">
          Verify email or resend message ↗
        </Link>
      </div>
      <p className="mt-8 text-center text-sm text-white/45">Already have an account? <Link href="/login" className="text-white hover:text-[#ff7a3d]">Sign in</Link></p>
    </AuthLayout>
  );
}
