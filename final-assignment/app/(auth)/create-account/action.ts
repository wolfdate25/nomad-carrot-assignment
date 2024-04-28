"use server";

import { z } from "zod";
import bcrypt from "bcrypt";
import db from "@/lib/db";
import getSession from "@/lib/session";
import { redirect } from "next/navigation";

const registerFormSchema = z
  .object({
    username: z.string().toLowerCase().trim(),
    password: z.string(),
    confirm_password: z.string(),
  })
  .superRefine(async ({ username }, ctx) => {
    const user = await db.user.findFirst({
      where: {
        username: username,
      },
    });
    if (user) {
      ctx.addIssue({
        code: "custom",
        message: "이미 존재하는 사용자 이름입니다",
        path: ["username"],
        fatal: true,
      });
    }
    return z.NEVER;
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "비밀번호가 일치하지 않습니다",
    path: ["confirm_password"],
  });

export async function createAccount(prevState: any, formData: FormData) {
  const data = {
    username: formData.get("username"),
    password: formData.get("password"),
    confirm_password: formData.get("confirm_password"),
  };
  const result = await registerFormSchema.safeParseAsync(data);
  console.log(result);
  if (!result.success) {
    return result.error.flatten();
  }
  const hashedPassword = await bcrypt.hash(result.data.password, 12);
  console.log(hashedPassword);
  const user = await db.user.create({
    data: {
      username: result.data.username,
      password: hashedPassword,
    },
  });
  // const session = await getSession();
  // session.id = user.id;
  // await session.save();

  redirect("/");
}
