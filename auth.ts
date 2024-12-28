import Google from "next-auth/providers/google";
import { fbId, fbSecret, googleClientId, googleSecret } from "./secret";
import NextAuth from "next-auth";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import client from "./lib/db";
import Facebook from "next-auth/providers/facebook";
import Credentials from "next-auth/providers/credentials";
import { findUserFromDB } from "./queries/userQuery";
import { connectDB } from "./services/connectDB";

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
    Credentials({
      credentials: {
        email: { label: "Email" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials): Promise<any> {
        await connectDB();
        if (credentials === null) return null;

        if (!credentials.email || !credentials.password) return null;

        try {
          const user = await findUserFromDB(credentials.email);

          if (user) {
            const isMatch = user.password === credentials.password;
            if (isMatch) {
              return user;
            } else {
              return { success: false, message: "User Not found" };
            }
          } else {
            return null;
          }
        } catch (error) {
          throw error;
        }
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
