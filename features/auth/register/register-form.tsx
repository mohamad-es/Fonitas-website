"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  registerSchema,
  type RegisterFormValues,
  type RegisterRequest,
  type RegisterResponse,
  type ApiErrorResponse,
} from "./register.schema";

const inputClass =
  "mt-2 w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-white outline-none transition placeholder:text-white/25 focus:border-[#ff5a1f]/60";
const errorClass = "mt-2 text-xs text-red-400";

function getApiError(payload: unknown): string {
  if (payload && typeof payload === "object" && "error" in payload) {
    const apiError = (payload as ApiErrorResponse).error;
    if (apiError && typeof apiError.message === "string" && apiError.message.trim()) {
      return apiError.message;
    }
  }
  return "We couldn't create your account. Please try again.";
}

export function RegisterForm() {
  const [requestError, setRequestError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      display_name: "",
      email: "",
      password: "",
      confirmPassword: "",
      terms: false as unknown as true,
    },
    mode: "onBlur",
  });

  const onSubmit = async (values: RegisterFormValues) => {
    setRequestError(null);
    setSuccessMessage(null);

    const body: RegisterRequest = {
      tenant_slug: "fonitas",
      display_name: values.display_name.trim(),
      email: values.email.trim(),
      password: values.password,
    };

    try {
      const response = await fetch("https://api.fonitas.com/api/v1/auth/register", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const payload: unknown = await response.json().catch(() => null);
      if (!response.ok) {
        setRequestError(getApiError(payload));
        return;
      }

      const result = payload as RegisterResponse;
      setSuccessMessage(
        result.data?.primary_email?.is_verified
          ? "Your account has been created successfully."
          : "Your account has been created. Please check your email for the next steps.",
      );
    } catch {
      setRequestError("Unable to connect to Fonitas. Check your connection and try again.");
    }
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit(onSubmit)} noValidate>
      {requestError && (
        <div role="alert" aria-live="assertive" className="rounded-2xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm leading-6 text-red-300">
          {requestError}
        </div>
      )}
      {successMessage && (
        <div role="status" aria-live="polite" className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm leading-6 text-emerald-300">
          {successMessage}
        </div>
      )}

      <label className="block text-sm text-white/70">
        Full name
        <input {...register("display_name")} type="text" autoComplete="name" placeholder="Your name" className={inputClass} aria-invalid={!!errors.display_name} />
        {errors.display_name && <p className={errorClass}>{errors.display_name.message}</p>}
      </label>

      <label className="block text-sm text-white/70">
        Work email
        <input {...register("email")} type="email" autoComplete="email" placeholder="you@company.com" className={inputClass} aria-invalid={!!errors.email} />
        {errors.email && <p className={errorClass}>{errors.email.message}</p>}
      </label>

      <label className="block text-sm text-white/70">
        Password
        <input {...register("password")} type="password" autoComplete="new-password" placeholder="Create a password" className={inputClass} aria-invalid={!!errors.password} />
        {errors.password && <p className={errorClass}>{errors.password.message}</p>}
      </label>

      <label className="block text-sm text-white/70">
        Confirm password
        <input {...register("confirmPassword")} type="password" autoComplete="new-password" placeholder="Repeat your password" className={inputClass} aria-invalid={!!errors.confirmPassword} />
        {errors.confirmPassword && <p className={errorClass}>{errors.confirmPassword.message}</p>}
      </label>

      <label className="flex items-start gap-3 text-sm leading-5 text-white/45">
        <input {...register("terms")} type="checkbox" className="mt-1 accent-[#ff5a1f]" />
        <span>I agree to the terms and acknowledge the Fonitas publishing workflow.
          {errors.terms && <span className="mt-2 block text-xs text-red-400">{errors.terms.message}</span>}
        </span>
      </label>

      <button type="submit" disabled={isSubmitting} className="w-full rounded-full bg-[#ff5a1f] px-5 py-3.5 text-sm font-semibold text-black transition hover:bg-[#ff7a3d] disabled:cursor-not-allowed disabled:opacity-60">
        {isSubmitting ? "Creating account..." : "Create account ↗"}
      </button>
    </form>
  );
}
