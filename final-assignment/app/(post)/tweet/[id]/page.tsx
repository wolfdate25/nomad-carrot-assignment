import LikeButton from "@/components/post/like-btn";
import db from "@/lib/db";
import getSession from "@/lib/session";
import { UserIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

async function getIsOwner(authorId: number) {
  const session = await getSession();
  if (session.id) {
    return session.id === authorId;
  }
  return false;
}

async function getPost(id: number) {
  const post = await db.post.findUnique({
    where: {
      id,
    },
    select: {
      title: true,
      content: true,
      authorId: true,
      author: {
        select: {
          username: true,
        },
      },
    },
  });
  return post;
}

export default async function PostDetail({
  params,
}: {
  params: { id: string };
}) {
  const id = Number(params.id);
  if (isNaN(id)) {
    return notFound();
  }
  const post = await getPost(id);
  if (!post) {
    return notFound();
  }
  const isOwner = await getIsOwner(post.authorId);
  return (
    <div>
      <div className="p-5 flex items-center gap-3 border-b border-neutral-700">
        <div>
          <h3>{post.author?.username}</h3>
        </div>
      </div>
      <div className="p-5">
        <h1 className="text-2xl font-semibold">{post.title}</h1>
        <p>{post.content}</p>
      </div>
      <LikeButton></LikeButton>
    </div>
  );
}
