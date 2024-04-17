"use client";

import { useFormState } from "react-dom";
import { createAccount } from "./action";

export default function CreateAccountPage() {
  const [state, dispatch] = useFormState(createAccount, null);
  if (state) {
    alert("Account created");
  }
  return (
    <div className="max-w-screen-sm m-3">
      <h1 className="text-4xl">Create Account</h1>
      {/* The form has label and input that name and email with create button */}
      <form action={dispatch} className="grid grid-cols">
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div>
          <button className="bg-gray-400 rounded-md ring-1 ring-black">
            Create Account
          </button>
        </div>
      </form>
    </div>
  );
}
