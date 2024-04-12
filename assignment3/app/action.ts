"use server";

import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(1, "Please write down your name."),
  email: z
    .string()
    .min(1, "Please write down your email.")
    .email()
    .refine((value) => value.endsWith("@naver.com"), {
      message: "Only @naver.com domain allowed.",
      path: ["email"],
    }),
  password: z
    .string()
    .min(1, "Please write down your password.")
    .min(10, "Password has to be more than 10 char."),
});

export async function login(prevState: any, action: FormData) {
  const data = {
    name: action.get("name"),
    email: action.get("email"),
    password: action.get("password"),
  };
  console.log(data);
  const result = formSchema.safeParse(data);
  if (!result.success) {
    return {
      success: result.success,
      errors: result.error.flatten(),
    };
  } else {
    return {
      success: result.success,
      errors: null,
    };
  }
}
