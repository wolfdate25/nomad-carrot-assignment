"use client";

import { login } from "./action";
import { useFormState } from "react-dom";
import FormInput from "@/components/form-input";

export default function Home() {
  const [state, action] = useFormState(login, null);
  console.log(state);
  return (
    <div className="m-2 min-h-screen">
      <form action={action} className="grid grid-cols">
        <FormInput
          name="name"
          placeholder=""
          text="Name: "
          required={false}
          type="text"
          errors={state?.errors?.fieldErrors.name}
        />
        <FormInput
          name="email"
          placeholder="Only @naver.com"
          text="Email: "
          required={false}
          type="email"
          errors={state?.errors?.fieldErrors.email}
        />
        <FormInput
          name="password"
          placeholder="Min 10 characters"
          text="Password: "
          required={false}
          type="password"
          errors={state?.errors?.fieldErrors.password}
        />
        <button className="w-14 border-none ring-2 rounded-md ring-gray-500 bg-gray-300">
          Log in
        </button>
      </form>
      {state?.success && <div>Thank you</div>}
    </div>
  );
}
