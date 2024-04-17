"use client";

import { useFormState } from "react-dom";
import { login } from "./action";

export default function CreateAccountPage() {
  const [state, dispatch] = useFormState(login, null);
  if (state) {
    alert("Account created");
  }
  return (
    <div className="max-w-screen-sm m-3">
      <h1 className="text-4xl">Login</h1>
      {/* The form has label and input that name and email with create button */}
      <form action={dispatch} className="grid grid-cols">
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div>
          <button className="bg-gray-400 rounded-md ring-1 ring-black">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
