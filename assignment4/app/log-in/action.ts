"use server";

import db from "@/lib/db";
import getSession from "@/lib/session";
import { redirect } from "next/navigation";

export async function login(prevState: any, formData: FormData) {
  const data = {
    email: formData.get("email").toString(),
  };
  const user = await db.user.findUnique({
    where: {
      email: data.email,
    },
    select: {
      id: true,
    },
  });
  if (user) {
    const session = await getSession();
    session.id = user.id;
    await session.save();
  }
  redirect("/");
}
