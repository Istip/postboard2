import { z } from "zod";

export const loginFormSchema = z.object({
  email: z.email("You forgot to enter a valid email address"),
  password: z.string().min(8, "You forgot to enter your correct password"),
});
