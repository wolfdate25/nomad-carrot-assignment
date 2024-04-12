interface FormInputProps {
  type: string;
  text: string;
  placeholder: string;
  required: boolean;
  errors?: string[];
  name: string;
}

export default function FormInput({
  name,
  type,
  text,
  placeholder,
  required,
  errors = [],
}: FormInputProps) {
  return (
    <div>
      <label>{text} </label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
      />
      <span>{errors.length > 0 ? errors[0] : ""}</span>
    </div>
  );
}
