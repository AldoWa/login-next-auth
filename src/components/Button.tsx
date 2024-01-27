import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

export const Button = ({ text, className,  ...rest }: ButtonProps) => {
  return (
    <button type="button" className={`py-4 w-full bg-[#000] text-white font-medium rounded-md ${className}`} {...rest}>
      { text }
    </button>
  )
}