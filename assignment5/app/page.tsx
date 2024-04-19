"use client";

import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { newDog } from "./action";

export default function Home() {
  const [videoUrl, setVideoUrl] = useState();
  const [isLike, setIsLike] = useState(false);

  const getVideo = async () => {
    const url = await newDog();
    setVideoUrl(url);
  };
  const like = () => {
    setIsLike(!isLike);
  };
  useEffect(() => {
    getVideo();
  }, []);

  return (
    <div className="flex justify-center items-center bg-slate-900 min-h-screen">
      <div className="max-w-screen-md w-full">
        <h1 className="text-3xl font-bold text-white ">Woof.tv</h1>
        <div className="bg-slate-800 mt-10 py-8 px-4">
          <div className="flex justify-center items-center">
            <video className="max-h-60" src={videoUrl} autoPlay></video>
          </div>
          <div className="flex flex-row *:basis-1/2 gap-2 mt-4 *:font-semibold">
            <form action={getVideo}>
              <button className="h-10 w-full rounded-sm bg-white">
                New Dog!
              </button>
            </form>
            <form action={like}>
              <button className="h-10 bg-cyan-500 rounded-sm w-full text-white">
                {isLike ? "Unlike" : "Like"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
