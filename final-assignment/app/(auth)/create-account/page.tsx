"use client";

import { useFormState } from "react-dom";
import { createAccount } from "./action";
import Input from "@/components/auth/form-input";

export default function CreateAccount() {
  const [state, dispatch] = useFormState(createAccount, null);
  return (
    <div className="grid grid-cols">
      <h1 className="text-3xl font-semibold">계정을 생성하세요</h1>
      <form action={dispatch} className="grid grid-cols">
        <Input
          name="username"
          required
          className="rounded-sm px-2 bg-black ring-1 ring-gray-700 h-14 focus:ring-sky-500 focus:ring-2 focus:outline-none"
          type="string"
          placeholder="이름"
          errors={state?.fieldErrors.username}
        />
        <Input
          name="password"
          required
          className="rounded-sm px-2 bg-black ring-1 ring-gray-700 h-14 focus:ring-sky-500 focus:ring-2 focus:outline-none"
          type="password"
          placeholder="비밀번호"
          errors={state?.fieldErrors.password}
        />
        <Input
          name="confirm_password"
          required
          className="rounded-sm px-2 bg-black ring-1 ring-gray-700 h-14 focus:ring-sky-500 focus:ring-2 focus:outline-none"
          type="password"
          placeholder="비밀번호 확인"
          errors={state?.fieldErrors.confirm_password}
        />
        <button className="rounded-full bg-sky-500 h-14 font-semibold text-lg">
          가입하기
        </button>
      </form>
    </div>
  );
}
