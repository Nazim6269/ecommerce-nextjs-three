import Google from "next-auth/providers/google";
import { googleClientId, googleSecret } from "./secret";
import NextAuth from "next-auth";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import client from "./lib/db";

const authoptions: any = {
  adapter: MongoDBAdapter(client),
  session: {
    strategy: "jwt",
  },
  providers: [
    Google({
      clientId: googleClientId,
      clientSecret: googleSecret,
      authorization: {
        prompt: "consent",
        access_type: "offline",
        response_type: "code",
      },
    }),
  ],
};

export const {
  handlers: { GET, POST },
  auth,
  signOut,
  signIn,
} = NextAuth(authoptions);
