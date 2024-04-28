import PostList from "@/components/post/post-list";
import db from "@/lib/db";
import getSession from "@/lib/session";
import { PlusIcon } from "@heroicons/react/24/solid";
import { Prisma } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

async function getInitialPosts() {
  const posts = await db.post.findMany({
    select: {
      title: true,
      id: true,
      content: true,
      created_at: true,
    },
    take: 1,
    orderBy: {
      created_at: "desc",
    },
  });
  return posts;
}

export type InitialPosts = Prisma.PromiseReturnType<typeof getInitialPosts>;

export default async function Home() {
  const initialPosts = await getInitialPosts();
  return (
    <div>
      <PostList initialPosts={initialPosts}></PostList>
      <div>
        <Link href={"/tweet/add"}>
          <PlusIcon className="size-10" />
        </Link>
      </div>
    </div>
  );
}
