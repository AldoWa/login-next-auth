import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  placeholder: string;
  errors?: Array<string>;
}

export const Input = ({ label, placeholder, errors, className, ...rest }: InputProps) => {
  return (
    <div className={className}>
      <label
        htmlFor="input"
        aria-describedby="label-validation"
        className="font-normal text-base text-[#000000]"
      >
        {label}
      </label>
      <input
        name="label-input"
        id={`input-${label}`}
        type={rest.type}
        autoComplete={rest.type}
        className={
          `py-5 px-6 h-14 rounded-md border border-[#282828] focus:outline-none focus:ring-2 focus:ring-[#3182CE] focus:border-transparent
           w-full mt-2 text-sm placeholder:text-[#ABABAB] text-[#000] font-light
          `
        }
        placeholder={placeholder}
        {...rest}
      />
      {!!errors?.length && (
        <div className="flex flex-col mt-2 gap-1">
          {errors.map((error) => (
            <span aria-required="true" id="label-validation" className="text-red-500" key={error}>
              {error}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};
