import Image from "next/image";
import TeamDiscussion from '../../public/team-discussion.png'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";

interface WrapperProps {
  children: React.ReactNode;
}

export const Wrapper = ({ children }: WrapperProps) => {
  const pathName = usePathname()
  const isRegister = pathName === '/register'

  return (
    <section className="flex items-center justify-center md:h-screen md:px-0 px-3 md:py-0 py-3 ">
      <div className="border rounded-lg border-[#282828] shadow-xl md:p-9 p-5">
        <p className="text-2xl text-[#000] font-light mb-7">Welcome !</p>
        <h1 className="text-3xl font-medium text-[#000] mb-1">Sign {isRegister ? "out" : "in"} to</h1>
        <h2 className="text-base font-normal text-[#000] mb-12">Lorem Ipsum is simply</h2>
        { children }
        <Link href={ isRegister ? '/' : '/register' } className="text-[#7D7D7D] text-base font-light mt-14 text-center block">
          { isRegister ? "Already have an Account ?" : "Don’y have an Account ?"} <span className="text-[#000] font-semibold">
            { isRegister ? "Sign in" : "Sign up"}
          </span>
        </Link>
      </div>
      <Image
        height={650}
        width={857}
        src={TeamDiscussion}
        alt="Team discussion"
        className="hidden xl:block"
      />
    </section>
  )
}