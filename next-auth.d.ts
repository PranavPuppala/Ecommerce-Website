import { ReviewState } from "@/components/products/listing/states";
import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
    } & DefaultSession["user"];
  }
}
