"use client";

import { useEffect, useRef, useState } from "react";
import { InitialPosts } from "@/app/page";
import ListPost from "./post";
import { getMorePosts } from "@/app/action";

interface PostListProps {
  initialPosts: InitialPosts;
}

export default function PostList({
  initialPosts: initialPosts,
}: PostListProps) {
  const [posts, setProducts] = useState(initialPosts);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [isLastPage, setIsLastPage] = useState(false);
  const trigger = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      async (
        entries: IntersectionObserverEntry[],
        observer: IntersectionObserver
      ) => {
        const element = entries[0];
        if (element.isIntersecting && trigger.current) {
          observer.unobserve(trigger.current);
          setIsLoading(true);
          const newPosts = await getMorePosts(page + 1);
          if (newPosts.length !== 0) {
            setProducts((prev) => [...prev, ...newPosts]);
            setPage((prev) => prev + 1);
          } else {
            setIsLastPage(true);
          }
          setIsLoading(false);
        }
      },
      {
        threshold: 1.0,
      }
    );
    if (trigger.current) {
      observer.observe(trigger.current);
    }
    return () => {
      observer.disconnect();
    };
  }, [page]);
  return (
    <div className="p-5 flex flex-col gap-5">
      {posts.map((post) => (
        <ListPost key={post.id} {...post} />
      ))}
      {!isLastPage ? (
        <span
          ref={trigger}
          className="text-sm font-semibold bg-orange-500 w-fit mx-auto px-3 py-2 rounded-md hover:opacity-90 active:scale-95"
        >
          {isLoading ? "로딩 중" : "Load more"}
        </span>
      ) : null}
    </div>
  );
}
