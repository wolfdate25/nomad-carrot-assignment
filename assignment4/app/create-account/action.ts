"use server";

import db from "@/lib/db";
import { redirect } from "next/navigation";

export async function createAccount(prevState: any, formData: FormData) {
  const data = {
    name: formData.get("name").toString(),
    email: formData.get("email").toString(),
  };
  const user = await db.user.create({
    data: {
      name: data.name,
      email: data.email,
    },
  });
  redirect("/log-in");
}
