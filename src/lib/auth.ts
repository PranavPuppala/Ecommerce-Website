import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/db/db";
import { compare } from "bcrypt";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  //use custom webpage
  pages: {
    signIn: "/auth/sign-in",
  },
  // Configure authentication provider
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null; //return nothing if email and password box is empty
        }

        const existingUser = await prisma.user.findUnique({
          where: { email: credentials?.email },
        });

        console.log(existingUser);
        if (!existingUser) {
          return null;
        }

        const passwordMatch = await compare(credentials.password, existingUser.password);

        if (!passwordMatch) {
          return null; // if password does not match
        }

        return {
          id: existingUser.id,
          email: existingUser.email,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session?.user) {
        session.user.id = token.id;
      }
      return session;
    },
  },
};

export default NextAuth(authOptions);
