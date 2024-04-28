"use client";

import Input from "@/components/auth/form-input";
import { login } from "./actions";
import { useFormState } from "react-dom";

export default async function LoginPage() {
  // redirect home when logged in

  const [state, dispatch] = useFormState(login, null);
  return (
    <div className="flex flex-col">
      <h1 className="text-3xl font-semibold">로그인 하기</h1>
      <form action={dispatch}>
        <Input name="username" type="string" placeholder="사용자" />
        <Input name="password" type="password" placeholder="패스워드" />
        <button className="rounded-full bg-sky-500 h-14 font-semibold text-lg w-full">
          로그인하기
        </button>
      </form>
    </div>
  );
}
