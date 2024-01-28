import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Container } from "@/components/Container";
import { Wrapper } from "@/components/Wrapper";
import { signIn } from "next-auth/react";
import { FormEvent } from "react";

export default function Home() {
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    signIn('credentials', {email: 'aldojr_se@hotmail.com', password: '12345', redirect: false })
  }
  return (
    <Container>
      <Wrapper>
        <form id="form-login" name="form-login" onSubmit={(e: FormEvent<HTMLFormElement>) => handleSubmit(e)}>
          <Input
            label="Email"
            placeholder="Enter your email"
            type="email"
            name="email"
          />
          <Input
            label="Password"
            placeholder="Enter your password"
            type="password"
            name="password"
            className="mt-9"
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
