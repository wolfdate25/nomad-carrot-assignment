"use server";

import db from "@/lib/db";
import { z } from "zod";
import bcrypt from "bcrypt";
import getSession from "@/lib/session";
import { redirect } from "next/navigation";

async function checkUserExists(username: string) {
  const user = await db.user.findFirst({
    where: {
      username: username,
    },
  });
  return Boolean(user);
}

const formSchema = z.object({
  username: z.string().toLowerCase().refine(checkUserExists, {
    message: "사용자가 존재하지 않습니다.",
  }),
  password: z.string(),
});

export async function login(prevState: any, formData: FormData) {
  const data = {
    username: formData.get("username"),
    password: formData.get("password"),
  };
  const result = await formSchema.safeParseAsync(data);
  if (!result.success) {
    return result.error.flatten();
  }
  const user = await db.user.findUnique({
    where: {
      username: result.data.username,
    },
    select: {
      id: true,
      password: true,
    },
  });
  const ok = await bcrypt.compare(result.data.password, user!.password ?? "");
  if (ok) {
    const session = await getSession();
    session.id = user!.id;
    await session.save();
  } else {
    return {
      fieldErrors: {
        password: ["Wrong password"],
        email: [],
      },
    };
  }
  redirect("/");
}
