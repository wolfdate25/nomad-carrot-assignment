"use client";

import React, { useEffect, useState } from "react";

function LikeButton() {
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    fetch("/tweet/like")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setLikes(data.likes))
      .catch((error) => console.error("There was an error!", error));
  }, []);

  const handleLike = () => {
    fetch("/tweet/like", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ likes: likes + 1 }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setLikes(data.likes))
      .catch((error) => console.error("There was an error!", error));
  };

  return <button onClick={handleLike}>Like {likes}</button>;
}

export default LikeButton;
