"use client";

import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import { useLanguage } from "@/context/LanguageContext";
import { dt } from "@/lib/dashboard-i18n";

const pageTitleKeys = {
  "/admin/dashboard":              "overview",
  "/admin/dashboard/patients":     "patients",
  "/admin/dashboard/new-patients": "newPatients",
  "/admin/dashboard/reviews":      "reviews",
  "/admin/dashboard/settings":     "settings",
} as const;

interface Props {
  userName: string;
}

export default function TopNav({ userName }: Props) {
  const pathname = usePathname();
  const { language, setLanguage } = useLanguage();
  const T = dt[language];

  const key = pageTitleKeys[pathname as keyof typeof pageTitleKeys];
  const title = key ? T.nav[key] : "Admin";

  return (
    <header className="h-[60px] flex-shrink-0 bg-white border-b border-black/[0.05] flex items-center justify-between px-6">
      <h1 className="text-sm font-medium text-slate-800 tracking-wide">{title}</h1>

      <div className="flex items-center gap-4">
        {/* Language toggle – same style as site Header */}
        <div className="flex items-center bg-slate-50 p-1 border border-slate-100 shadow-sm">
          <button
            onClick={() => setLanguage("de")}
            className={`px-3 py-1.5 text-[9px] font-bold uppercase tracking-wider transition-all duration-300 ${
              language === "de" ? "bg-white shadow-sm text-primary" : "text-slate-400 hover:text-slate-600"
            }`}
          >
            DE
          </button>
          <button
            onClick={() => setLanguage("en")}
            className={`px-3 py-1.5 text-[9px] font-bold uppercase tracking-wider transition-all duration-300 ${
              language === "en" ? "bg-white shadow-sm text-primary" : "text-slate-400 hover:text-slate-600"
            }`}
          >
            EN
          </button>
        </div>

        <span className="text-xs text-slate-400 font-light hidden sm:block">{userName}</span>

        <button
          onClick={() => signOut({ callbackUrl: "/admin" })}
          className="text-[10px] uppercase tracking-[0.15em] font-bold text-slate-400 hover:text-primary transition-colors"
        >
          {T.topNav.signOut}
        </button>
      </div>
    </header>
  );
}
