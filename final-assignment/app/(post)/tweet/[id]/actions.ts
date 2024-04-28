"use server";

import db from "@/lib/db";

export async function getLikes(postId: number) {
  const likes = await db.likes.findMany({
    where: {
      postId: postId,
    },
  });
  return likes.length;
}

export async function toggleLike(postId: number, userId: number) {
  const result = await db.likes.findFirst({
    where: {
      postId: postId,
      userId: userId,
    },
  });
  if (!result) {
    await db.likes.create({
      data: {
        postId: postId,
        userId: userId,
      },
    });
    return true;
  } else {
    await db.likes.deleteMany({
      where: {
        postId: postId,
        userId: userId,
      },
    });
    return false;
  }
}
