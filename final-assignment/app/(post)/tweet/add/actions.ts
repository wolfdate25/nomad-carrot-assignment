"use server";

import { z } from "zod";
import db from "@/lib/db";
import getSession from "@/lib/session";
import { redirect } from "next/navigation";

const postSchema = z.object({
  title: z.string({
    required_error: "Title is required",
  }),
  content: z.string({
    required_error: "content is required",
  }),
});

export async function uploadPost(_: any, formData: FormData) {
  const data = {
    title: formData.get("title"),
    content: formData.get("content"),
  };
  const result = postSchema.safeParse(data);
  if (!result.success) {
    return result.error.flatten();
  } else {
    const session = await getSession();
    await db.post.create({
      data: {
        title: result.data.title,
        content: result.data.content,
        authorId: session.id,
      },
    });
    redirect("/");
  }
}
