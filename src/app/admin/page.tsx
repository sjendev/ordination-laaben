import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import SignInButton from "./SignInButton";

export const metadata = { title: "Admin Login – Ordination Laaben" };

export default async function AdminLoginPage() {
  const session = await getServerSession(authOptions);
  if (session) redirect("/admin/dashboard");

  return (
    <main className="min-h-[60vh] flex items-center justify-center px-8">
      <div className="text-center space-y-6 max-w-sm w-full">
        <h1 className="text-2xl font-light tracking-wide">Admin</h1>
        <p className="text-sm text-slate-500 font-light">
          Bitte melden Sie sich an, um fortzufahren.
        </p>
        <SignInButton />
      </div>
    </main>
  );
}
