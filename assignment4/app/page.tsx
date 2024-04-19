import getSession from "@/lib/session";
import { checkLogin } from "./action";
import { redirect } from "next/navigation";
import db from "@/lib/db";

export default async function Home() {
  const session = await getSession();
  if (!session.id) {
    redirect("/create-account");
  }
  const user = await db.user.findUnique({
    where: {
      id: session.id,
    },
  });
  return (
    <div className="m-2 min-h-screen">
      <h1 className="text-4xl">Welcome {user?.name ? user.name : ""}</h1>
      <h2 className="text-2xl">
        Your email is {user?.email ? user.email : ""}
      </h2>
    </div>
  );
}
