import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import Sidebar from "./_components/Sidebar";
import TopNav from "./_components/TopNav";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/admin");

  return (
    // fixed inset-0: takes over the full viewport, immune to body min-height
    <div className="fixed inset-0 flex bg-[#F5F6F0]">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <TopNav userName={session.user?.name ?? session.user?.email ?? ""} />
        {/* Only this area scrolls */}
        <main className="flex-1 overflow-y-auto px-6 py-8 pb-24 md:pb-8">
          {children}
        </main>
      </div>
    </div>
  );
}
