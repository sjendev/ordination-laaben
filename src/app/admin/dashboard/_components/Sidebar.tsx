"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { dt } from "@/lib/dashboard-i18n";

const navDefs = [
  { href: "/admin/dashboard",              icon: "space_dashboard",  key: "overview"    },
  { href: "/admin/dashboard/patients",     icon: "group",            key: "patients"    },
  { href: "/admin/dashboard/new-patients", icon: "person_add",       key: "newPatients" },
  { href: "/admin/dashboard/reviews",      icon: "star",             key: "reviews"     },
  { href: "/admin/dashboard/settings",     icon: "settings",         key: "settings"    },
] as const;

export default function Sidebar() {
  const pathname = usePathname();
  const { language } = useLanguage();
  const T = dt[language];

  const isActive = (href: string) => {
    if (href === "/admin/dashboard") return pathname === "/admin/dashboard";
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Desktop sidebar – h-full fills the fixed parent, overflow-y-auto for safety */}
      <aside className="hidden md:flex w-[200px] flex-shrink-0 bg-white border-r border-black/[0.05] flex-col h-full overflow-y-auto">
        <div className="px-6 py-5 border-b border-black/[0.05] flex-shrink-0">
          <Link href="/">
            <img
              src="/logo.png"
              alt="Ordination Laaben"
              className="h-7 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
            />
          </Link>
        </div>

        <nav className="flex-1 px-3 py-4 space-y-0.5">
          {navDefs.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-2.5 px-3 py-2 text-xs transition-all duration-200 ${
                  active
                    ? "text-primary bg-primary/5 border-l-2 border-primary -ml-px pl-[13px] font-medium"
                    : "text-slate-500 hover:text-slate-800 hover:bg-black/[0.02] rounded-sm font-light"
                }`}
              >
                <span className="material-symbols-outlined text-[17px]">{item.icon}</span>
                {T.nav[item.key]}
              </Link>
            );
          })}
        </nav>

        <div className="px-6 py-4 border-t border-black/[0.05] flex-shrink-0">
          <p className="text-[9px] uppercase tracking-widest text-slate-300">{T.nav.version}</p>
        </div>
      </aside>

      {/* Mobile bottom nav */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-black/[0.05] flex">
        {navDefs.map((item) => {
          const active = isActive(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex-1 flex flex-col items-center gap-1 py-2 transition-colors ${
                active ? "text-primary" : "text-slate-400 hover:text-slate-600"
              }`}
            >
              <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
              <span className="text-[7px] uppercase tracking-widest font-bold">{T.nav[item.key]}</span>
            </Link>
          );
        })}
      </nav>
    </>
  );
}
