import { Button } from "@/components/Button";
import { Input } from "@/components/Input";

export default function Home() {
  return (
    <div className="container mx-auto">
      <div className="border rounded-lg border-[#282828] shadow-xl p-9	">
        <p className="text-2xl text-[#000] font-light mb-7">Welcome !</p>
        <h1 className="text-3xl font-medium text-[#000] mb-1">Sign in to</h1>
        <h2 className="text-base font-normal text-[#000] mb-12">Lorem Ipsum is simply</h2>
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
      </div>
    </div>
  );
}
