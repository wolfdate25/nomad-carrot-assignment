"use server";

import db from "@/lib/db";

export async function getMorePosts(page: number) {
  const posts = await db.post.findMany({
    select: {
      title: true,
      content: true,
      created_at: true,
      id: true,
    },
    orderBy: {
      created_at: "desc",
    },
    skip: page * 1,
    take: 1,
  });
  return posts;
}
