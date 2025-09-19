import { z } from "zod";

export const loginFormSchema = z.object({
  email: z.email("Email address is invalid"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});
