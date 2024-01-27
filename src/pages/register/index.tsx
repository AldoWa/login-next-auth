import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Container } from "@/components/Container";
import { Wrapper } from "@/components/Wrapper";

export default function Register() {
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
            label="Username"
            placeholder="Enter your username"
            type="text"
            className="mt-9"
          />
          <Input
            label="Password"
            placeholder="Enter your password"
            type="password"
            className="mt-9"
          />
          <Input
            label="Confirm Password"
            placeholder="Enter your password"
            type="password"
            className="mt-9"
          />
          <Button text="Register" type="submit" className="mt-9"></Button>
        </form>
      </Wrapper>
    </Container>
  );
}
