import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

// Add up to 5 email addresses that are allowed to access the admin dashboard
const ALLOWED_EMAILS = [
  "sjen@humanadvisory.com",
  "mogachago@gmail.com",
];

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  pages: {
    signIn: "/admin",
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    signIn({ profile }) {
      return ALLOWED_EMAILS.includes(profile?.email ?? "");
    },
  },
};
