import Image from "next/image";

import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Container } from "@/components/Container";
import { Wrapper } from "@/components/Wrapper";

export default function Home() {
  return (
    <Container>
      <Wrapper>
        <form id="form-login" name="form-login">
          <Input
            label="Email"
            placeholder="Enter your email"
            type="email"
          />
          <Input
            label="Password"
            placeholder="Enter your password"
            type="password"
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
