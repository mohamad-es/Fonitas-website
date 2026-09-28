import { z } from "zod";

export const registerSchema = z
  .object({
    display_name: z.string().trim().min(2, "Name must be at least 2 characters.").max(100, "Name must be 100 characters or fewer."),
    email: z.string().trim().email("Enter a valid email address.").max(254),
    password: z.string().min(8, "Password must be at least 8 characters.").max(128, "Password must be 128 characters or fewer."),
    confirmPassword: z.string(),
    terms: z.literal(true, { error: "You must accept the terms to continue." }),
  })
  .refine((values) => values.password === values.confirmPassword, {
    message: "Passwords do not match.",
    path: ["confirmPassword"],
  });

export type RegisterFormValues = z.infer<typeof registerSchema>;
export type RegisterRequest = {
  tenant_slug: "fonitas";
  display_name: string;
  email: string;
  password: string;
};

export type RegisterUser = {
  public_id: string;
  display_name: string;
  status: string;
  primary_email: {
    email: string;
    is_verified: boolean;
    verified_at: string | null;
  };
  tenant_public_id: string;
  created_at: string;
  updated_at: string;
  last_login_at: string | null;
  roles: string[];
  permissions: string[];
};

export type RegisterResponse = {
  data: RegisterUser;
  meta: Record<string, unknown>;
};

export type ApiErrorResponse = {
  error: {
    code: string;
    message: string;
    details?: Record<string, unknown>;
  };
  request_id?: string;
};
