import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Container } from "@/components/Container";
import { Wrapper } from "@/components/Wrapper";

import { FieldValues, useForm } from "react-hook-form";

import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from "next/router";

const formSchema = z.object({
  confirmPassword: z.string(
    {
      required_error: "Confirm password is required"
    }
  ),
  email: z.string(
    {
      invalid_type_error: "Email is required"
    }
  ).email({ message: "Invalid email address" }),
  password: z.string(
    {
      required_error: "Password is required"
    }
  ).min(8, { message: "Password must be at least 8 characters" }),
  username: z.string({
    required_error: "Username is required"
  }).min(3, { message: "Username must be at least 3 characters" }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

export default function Register() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(formSchema)
  });

  const router = useRouter()

  const onSubmit = async (data: FieldValues) => {
    const schema = formSchema.parse(data)
    
    try{
      await fetch('/api/register', {
        method: 'POST',
        body: JSON.stringify({
          email: schema.email,
          username: schema.username,
          password: schema.password,
        }),
      })
    } catch (err) {
      return err
    }

    router.push('/')
  }

  return (
    <Container>
      <Wrapper>
        <form id="form-login" name="form-login" onSubmit={handleSubmit(onSubmit)}>
          <Input
            label="Email"
            placeholder="Enter your email"
            type="email"
            register={register("email")}
            error={errors.email?.message as string}
          />
          <Input
            label="Username"
            placeholder="Enter your username"
            type="text"
            className="mt-9"
            register={register("username")}
            error={errors.username?.message as string}
          />
          <Input
            label="Password"
            placeholder="Enter your password"
            type="password"
            className="mt-9"
            register={register("password")}
            error={errors.password?.message as string}
          />
          <Input
            label="Confirm Password"
            placeholder="Enter your password"
            type="password"
            className="mt-9"
            register={register("confirmPassword")}
            error={errors.confirmPassword?.message as string}
          />
          <Button text="Register" type="submit" className="mt-9"></Button>
        </form>
      </Wrapper>
    </Container>
  );
}
