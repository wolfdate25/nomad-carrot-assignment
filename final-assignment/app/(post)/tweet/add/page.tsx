"use client";

import { PhotoIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { useFormState } from "react-dom";
import Input from "@/components/post/form-input";
import { uploadPost } from "./actions";

export default function AddProduct() {
  const [state, action] = useFormState(uploadPost, null);
  return (
    <div>
      <form action={action} className="p-5 flex flex-col gap-5">
        {/* <label
          htmlFor="photo"
          className="border-2 aspect-square flex items-center justify-center flex-col text-neutral-300 border-neutral-300 rounded-md border-dashed cursor-pointer bg-center bg-cover"
          style={{
            backgroundImage: `url(${preview})`,
          }}
        >
          {preview === "" ? (
            <>
              <PhotoIcon className="w-20" />
              <div className="text-neutral-400 text-sm">
                사진을 추가해주세요.
                {state?.fieldErrors.photo}
              </div>
            </>
          ) : null}
        </label>
        <input
          onChange={onImageChange}
          type="file"
          id="photo"
          name="photo"
          accept="image/*"
          className="hidden"
        /> */}
        <Input
          name="title"
          required
          placeholder="제목"
          type="text"
          errors={state?.fieldErrors.title}
        />
        <Input
          name="content"
          type="string"
          required
          placeholder="내용"
          errors={state?.fieldErrors.content}
        />
        <button>작성 완료</button>
      </form>
    </div>
  );
}
