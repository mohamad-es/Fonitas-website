"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const loginSchema = z.object({
  email: z.string().trim().email("Enter a valid email address.").max(254),
  password: z.string().min(1, "Password is required.").max(128),
});

type LoginFormValues = z.infer<typeof loginSchema>;

type AuthUser = {
  public_id: string;
  display_name: string;
  status: string;
  primary_email: { email: string; is_verified: boolean; verified_at: string | null };
  tenant_public_id: string;
  created_at: string;
  updated_at: string;
  last_login_at: string | null;
  roles: string[];
  permissions: string[];
};

type LoginSuccessResponse = { data: AuthUser; meta: Record<string, unknown> };
type MfaRequiredResponse = { mfa_required: true; challenge_token: string; [key: string]: unknown };
type ApiErrorResponse = {
  error: { code: string; message: string; details: Record<string, unknown> };
  request_id: string;
};

const inputClass = "mt-2 w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-white outline-none transition placeholder:text-white/25 focus:border-[#ff5a1f]/60";
const errorClass = "mt-2 text-xs text-red-400";

function getApiError(payload: unknown): string {
  if (payload && typeof payload === "object" && "error" in payload) {
    const apiError = (payload as ApiErrorResponse).error;
    if (typeof apiError?.message === "string" && apiError.message.trim()) return apiError.message;
  }
  return "We couldn't sign you in. Check your details and try again.";
}

function isMfaRequired(payload: unknown): payload is MfaRequiredResponse {
  return !!payload && typeof payload === "object" &&
    "mfa_required" in payload && (payload as MfaRequiredResponse).mfa_required === true &&
    "challenge_token" in payload && typeof (payload as MfaRequiredResponse).challenge_token === "string";
}

export function LoginForm() {
  const [requestError, setRequestError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);
  const [mfaChallengeToken, setMfaChallengeToken] = useState<string | null>(null);

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "" },
    mode: "onBlur",
  });

  const onSubmit = async (values: LoginFormValues) => {
    setRequestError(null);
    setNotice(null);
    setMfaChallengeToken(null);

    try {
      const response = await fetch("https://api.fonitas.com/api/v1/auth/login", {
        method: "POST",
        credentials: "include",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({
          tenant_slug: "fonitas",
          email: values.email.trim(),
          password: values.password,
        }),
      });

      const payload: unknown = await response.json().catch(() => null);

      if (!response.ok) {
        const apiMessage = getApiError(payload);
        if (response.status === 429) {
          const retryAfter = response.headers.get("Retry-After");
          setRequestError(retryAfter
            ? `${apiMessage} Please wait ${retryAfter} seconds before trying again.`
            : apiMessage);
        } else {
          setRequestError(apiMessage);
        }
        return;
      }

      if (isMfaRequired(payload)) {
        setMfaChallengeToken(payload.challenge_token);
        setNotice("Multi-factor authentication is required. Your challenge has been created.");
        // MFA challenge continuation endpoint/UI can be connected when its API contract is provided.
        return;
      }

      const result = payload as LoginSuccessResponse;
      if (!result?.data?.public_id) {
        setRequestError("The server returned an unexpected login response. Please try again.");
        return;
      }

      if (!result.data.primary_email?.is_verified) {
        setNotice("You're signed in, but your email address is not verified yet.");
        return;
      }

      window.location.assign("/dashboard");
    } catch {
      setRequestError("Unable to connect to Fonitas. Check your connection and try again.");
    }
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit(onSubmit)} noValidate>
      {requestError && <div role="alert" aria-live="assertive" className="rounded-2xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm leading-6 text-red-300">{requestError}</div>}
      {notice && <div role="status" aria-live="polite" className="rounded-2xl border border-[#ff5a1f]/30 bg-[#ff5a1f]/10 px-4 py-3 text-sm leading-6 text-orange-200">{notice}</div>}
      {mfaChallengeToken && <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-xs leading-5 text-white/60 break-all">Challenge token received. MFA verification UI is pending the challenge verification API contract.</div>}

      <label className="block text-sm text-white/70">Email
        <input {...register("email")} type="email" autoComplete="email" required placeholder="you@company.com" className={inputClass} aria-invalid={!!errors.email} />
        {errors.email && <p className={errorClass}>{errors.email.message}</p>}
      </label>

      <label className="block text-sm text-white/70">Password
        <input {...register("password")} type="password" autoComplete="current-password" required placeholder="Enter your password" className={inputClass} aria-invalid={!!errors.password} />
        {errors.password && <p className={errorClass}>{errors.password.message}</p>}
      </label>

      <div className="flex items-center justify-between text-sm">
        <a href="/forgot-password" className="text-[#ff7a3d] hover:text-white">Forgot password?</a>
      </div>

      <button type="submit" disabled={isSubmitting} className="w-full rounded-full bg-[#ff5a1f] px-5 py-3.5 text-sm font-semibold text-black transition hover:bg-[#ff7a3d] disabled:cursor-not-allowed disabled:opacity-60">
        {isSubmitting ? "Signing in..." : "Sign in ↗"}
      </button>
    </form>
  );
}
