import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

export const Button = ({ text, className,  ...rest }: ButtonProps) => {
  return (
    <button type="button" className={`py-4 w-full bg-[#000] text-white font-medium rounded-md ${className} 
      hover:bg-[#FABC78] hover:text-[#000]
      transition-all duration-300 ease-in-out
      `} {...rest}>
      { text }
    </button>
  )
}