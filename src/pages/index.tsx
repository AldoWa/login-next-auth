import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Container } from "@/components/Container";
import { Wrapper } from "@/components/Wrapper";

import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { FieldValues, useForm } from "react-hook-form";

export default function Home() {
  const router = useRouter();

  const { register, handleSubmit } = useForm();

  async function handleForm(values: FieldValues) {
    try {
      const res = await signIn('credentials', {email: values.email, password: values.password, redirect: false, callbackUrl: '/dashboard' })
      if(res && !res.ok) {
        throw new Error('Error in sign in')
      }
      router.push('/dashboard')
    } catch (err: any) {
      toast.error(err.message)
    }
  }
  return (
    <Container>
      <Wrapper>
        <form id="form-login" name="form-login" onSubmit={handleSubmit(handleForm)}>
          <Input
            label="Email"
            placeholder="Enter your email"
            type="email"
            name="email"
            register={register("email")}
          />
          <Input
            label="Password"
            placeholder="Enter your password"
            type="password"
            name="password"
            className="mt-9"
            register={register("password")}
          />
          <div className="flex justify-between items-center mt-6">
            <div className="flex gap-3">
              <input type="checkbox" id="input-checkbox"/>
              <label htmlFor="input-checkbox">Remember me</label>
            </div>
            <span className="font-light text-xs text-[#4D4D4D]">Forgot Password ?</span>
          </div>
          <Button text="Login" type="submit" className="mt-9"></Button>
        </form>
      </Wrapper>
    </Container>
  );
}
