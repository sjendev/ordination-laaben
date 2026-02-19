"use client";

import { signIn } from "next-auth/react";

export default function SignInButton() {
  return (
    <button
      onClick={() => signIn("google", { callbackUrl: "/admin/dashboard" })}
      className="px-6 py-3 bg-[#8B3030] text-white text-sm rounded-sm hover:opacity-90 transition-opacity"
    >
      Sign in with Google
    </button>
  );
}
