"use server";

import getSession from "@/lib/session";
import { redirect } from "next/navigation";

export async function newDog() {
  const response = await fetch("https://dogs-api.nomadcoders.workers.dev");
  const data = await response.json();
  return data.url;
}
