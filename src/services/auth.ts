import NextAuth, { NextAuthConfig, Session } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";

export const authConfig: NextAuthConfig = {
  providers: [
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID as string,
      clientSecret: process.env.AUTH_GOOGLE_SECRET as string,
    }),
    FacebookProvider({
      clientId: process.env.AUTH_FACEBOOK_ID as string,
      clientSecret: process.env.AUTH_FACEBOOK_SECRET as string,
    }),
  ],

  callbacks: {
    authorized({
      auth,
      request,
    }: {
      auth: Session | null;
      request: Request;
    }) {
      return !!auth?.user;
    },
  },

  pages: {
    signIn: "/signin",
  },
};

export const {
  auth,
  handlers: { GET, POST },
  signIn,
  signOut,
} = NextAuth(authConfig);
