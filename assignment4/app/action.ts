"use server";

import getSession from "@/lib/session";
import { redirect } from "next/navigation";

export async function checkLogin() {
  const session = await getSession();
  if (!session.id) {
    redirect("/create-account");
  }
}
