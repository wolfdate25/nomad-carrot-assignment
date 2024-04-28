"use client";

import { useState } from "react";
import { toggleLike, getLikes } from "./actions";

export default function LikeButton({
  initialLikes,
  alreadyLiked,
  postId,
  authorId,
}: {
  initialLikes: number;
  postId: number;
  authorId: number;
  alreadyLiked: boolean;
}) {
  const [likes, setLikes] = useState(initialLikes);

  const handleToggleLike = async () => {
    await toggleLike(postId, authorId);
    const updatedLikes = await getLikes(postId);
    setLikes(updatedLikes);
  };

  return (
    <>
      <p>좋아요 수: {likes}</p>
      <button onClick={handleToggleLike}>
        {alreadyLiked ? "좋아요 취소" : "좋아요"}
      </button>
    </>
  );
}
