import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { User } from "@/pages/api/auth/[...nextauth]";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";

interface Data {
  user: User
}

export default function Dashboard() {
  const { data, status } = useSession({ required: true, onUnauthenticated() { return }})
  const router = useRouter();
  
  const dataTyped = data as unknown as Data
  const handleSignOut = async () => {
    await signOut({ redirect: false});
    router.push('/')
  }

  return (
    <Container className="mt-5">
      <section className="border rounded-lg border-[#282828] shadow-xl md:p-9 p-5 w-full flex flex-col gap-3
        max-w-5xl mx-auto
      ">
        {status === 'loading' ? (
          <p>Loading...</p>
        ): <><h1>Dashboard</h1>
        <span>Usuário Logado</span>
        <span>Email: { dataTyped?.user.email } </span>
        <span>Username: { dataTyped?.user.username }</span>
        <Button onClick={handleSignOut}>Sign Out</Button></>}
      </section>
    </Container>
  )
}

