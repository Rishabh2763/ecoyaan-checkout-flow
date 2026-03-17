import { UseFormRegisterReturn } from "react-hook-form";

interface InputFieldProps {
  label: string;
  placeholder: string;
  type?: string;
  error?: string;
  registration: UseFormRegisterReturn;
  isTextArea?: boolean;
}

export default function InputField({ label, placeholder, type = "text", error, registration, isTextArea }: InputFieldProps) {
  const className = `w-full p-3 border rounded-md focus:outline-none focus:ring-1 ${
    error ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-[#00875A]"
  }`;

  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      {isTextArea ? (
        <textarea rows={3} placeholder={placeholder} {...registration} className={`${className} resize-none`} />
      ) : (
        <input type={type} placeholder={placeholder} {...registration} className={className} />
      )}
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}