import { InputHTMLAttributes } from "react";

interface FormInputProps {
  name: string;
  errors?: string[];
}
export default function Input({
  errors = [],
  name,
  ...props
}: FormInputProps & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="flex flex-col gap-2">
      <input
        name={name}
        className="rounded-sm px-2 bg-black ring-1 ring-gray-700 h-14 focus:ring-sky-500 focus:ring-2 focus:outline-none"
        {...props}
      />
      {errors.map((error, index) => (
        <span key={index} className="text-red-500 font-medium">
          {error}
        </span>
      ))}
    </div>
  );
}
