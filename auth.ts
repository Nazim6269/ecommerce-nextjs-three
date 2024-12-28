import Google from "next-auth/providers/google";
import { fbId, fbSecret, googleClientId, googleSecret } from "./secret";
import NextAuth from "next-auth";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import client from "./lib/db";
import Facebook from "next-auth/providers/facebook";

const authoptions: any = {
  adapter: MongoDBAdapter(client),
  session: {
    strategy: "jwt",
  },
  providers: [
    Facebook({
      clientId: fbId,
      clientSecret: fbSecret,
    }),
    Google({
      clientId: googleClientId,
      clientSecret: googleSecret,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
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
