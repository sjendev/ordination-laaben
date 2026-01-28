"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
    const { t } = useLanguage();

    return (
        <footer className="py-24 px-8 bg-black/[0.03] border-t border-black/[0.05]">
            <div className="max-w-6xl mx-auto flex flex-col items-center gap-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full text-center md:text-left">
                    <div className="space-y-6">
                        <Link href="/" className="inline-block">
                            <img
                                src="/logo.png"
                                alt="Ordination Laaben Logo"
                                className="h-10 w-auto object-contain mx-auto md:mx-0 opacity-80 hover:opacity-100 transition-opacity"
                            />
                        </Link>
                        <p className="text-sm text-slate-500 font-light">
                            Internistische & Kardiologische Facharztordination<br />
                            Dr. Sang
                        </p>
                    </div>
                    <div className="space-y-4">
                        <p className="text-[10px] uppercase tracking-widest text-slate-400">{t.footer.contact}</p>
                        <p className="text-sm font-light">
                            Laaben 33/40, 3053 Brand-Laaben<br />
                            0670 556 33 62<br />
                            sang@ordination-laaben.at
                        </p>
                    </div>
                    <div className="space-y-4">
                        <p className="text-[10px] uppercase tracking-widest text-slate-400">{t.footer.hours}</p>
                        <p className="text-sm font-light">
                            {t.footer.hoursValue}
                        </p>
                    </div>
                </div>

                <div className="flex flex-col items-center gap-6">
                    <div className="flex gap-8 text-[10px] uppercase tracking-widest text-slate-400">
                        <Link href="/imprint" className="hover:text-primary transition-colors">
                            {t.footer.imprint}
                        </Link>
                        <Link href="/privacy" className="hover:text-primary transition-colors">
                            {t.footer.privacy}
                        </Link>
                    </div>
                    <p className="text-[9px] uppercase tracking-widest text-slate-300">
                        © 2026 Ordination Laaben
                    </p>
                </div>
            </div>
        </footer>
    );
}
