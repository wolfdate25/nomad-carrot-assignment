import { getIronSession } from "iron-session";
import { cookies } from "next/headers";

interface SessionContent {
  id?: number;
}

export default async function getSession() {
  return getIronSession<SessionContent>(cookies(), {
    cookieName: "delicious-cookie",
    password: "123123123123123123123123123123123123123123123123123",
  });
}
