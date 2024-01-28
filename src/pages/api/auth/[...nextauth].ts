import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

interface User {
  username: string;
  email: string;
  id: string;
}

export const authOptions = {
  providers: [
    CredentialsProvider({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials, req) {
        try {
          const res = await fetch(`${process.env.NEXTAUTH_URL}/api/login`, {
            method: 'POST',
            body: JSON.stringify({
              email: credentials!.email,
              password: credentials!.password
            }),
            headers: { 'Content-Type': 'application/json' }
          })
          const { data } = await res.json()
          return data
        } catch (err){
          return null
        }
      },

    }),
  ],

  callbacks: {
    async session({ session, token }: { session: any, token: { token: string, user: User }}) {
      session.token = token.token;
      session.user = token.user;

      return Promise.resolve(session)
    },
    async jwt({ token, user }: { token: { accessToken: string }, user: { token: string } }) {
      if (user) {
        return { ...token, ...user }
      }
      return token
    },
  },

  pages: {
    signIn: '/'
  }
}

// @ts-ignore
const handler = NextAuth(authOptions)

export default handler