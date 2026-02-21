"use client";

import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { BOOKING_LINK } from "@/config/links";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { language, setLanguage, t } = useLanguage();

    return (
        <header
            className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center bg-[#F5F6F0]/80 backdrop-blur-md border-b border-black/[0.05]"
        >
            <div className="flex-1 lg:flex-none">
                <Link href="/" className="flex items-center group">
                    <img
                        src="/logo.png"
                        alt="Ordination Laaben Logo"
                        className="h-14 w-auto object-contain"
                    />
                </Link>
            </div>

            <nav className="hidden lg:flex flex-1 justify-center items-center gap-10 text-[11px] uppercase tracking-widest font-medium h-full">
                <Link
                    href="/"
                    className="hover:text-primary transition-colors"
                >
                    {t.nav.home}
                </Link>

                <Link
                    href="/ueber-mich"
                    className="hover:text-primary transition-colors"
                >
                    {t.nav.about}
                </Link>

                <Link
                    href="/leistungen"
                    className="hover:text-primary transition-colors"
                >
                    {t.nav.services}
                </Link>

                <Link
                    href="/wahlarzt"
                    className="hover:text-primary transition-colors"
                >
                    {t.nav.wahlarzt}
                </Link>

                <Link
                    href="/kontakt"
                    className="hover:text-primary transition-colors"
                >
                    {t.nav.contact}
                </Link>
            </nav>

            <div className="flex-1 lg:flex-none flex justify-end items-center gap-4">
                {/* Language Toggle */}
                <div className="flex items-center bg-slate-50 p-1 border border-slate-100 mr-2 shadow-sm">
                    <button
                        onClick={() => setLanguage("de")}
                        className={`px-3 py-1.5 text-[9px] font-bold uppercase tracking-wider transition-all duration-300 ${language === 'de' ? 'bg-white shadow-sm text-primary' : 'text-slate-400 hover:text-slate-600'}`}
                    >
                        DE
                    </button>
                    <button
                        onClick={() => setLanguage("en")}
                        className={`px-3 py-1.5 text-[9px] font-bold uppercase tracking-wider transition-all duration-300 ${language === 'en' ? 'bg-white shadow-sm text-primary' : 'text-slate-400 hover:text-slate-600'}`}
                    >
                        EN
                    </button>
                </div>

                <a
                    href={BOOKING_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden md:block bg-primary text-white text-[10px] uppercase tracking-[0.2em] font-bold px-8 py-4 rounded-none hover:bg-slate-900 transition-colors shadow-sm"
                >
                    {t.nav.cta}
                </a>

                <button
                    className="lg:hidden w-10 h-10 flex items-center justify-end group"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <span className="material-symbols-outlined text-3xl font-extralight text-slate-900">
                        {isMenuOpen ? "close" : "menu"}
                    </span>
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-md border-t border-slate-100 p-8 flex flex-col gap-8 lg:hidden animate-in fade-in slide-in-from-top-2 overflow-y-auto max-h-[85vh]">
                    <nav className="flex flex-col gap-6 text-xs uppercase tracking-widest font-medium text-center">
                        <Link href="/" onClick={() => setIsMenuOpen(false)}>{t.nav.home}</Link>

                        <Link href="/ueber-mich" onClick={() => setIsMenuOpen(false)}>{t.nav.about}</Link>

                        <Link href="/leistungen" onClick={() => setIsMenuOpen(false)}>{t.nav.services}</Link>

                        <Link href="/wahlarzt" onClick={() => setIsMenuOpen(false)}>{t.nav.wahlarzt}</Link>
                        <Link href="/kontakt" onClick={() => setIsMenuOpen(false)}>{t.nav.contact}</Link>
                    </nav>
                    <a
                        href={BOOKING_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-primary text-white text-[10px] uppercase tracking-[0.2em] font-bold py-5 text-center shadow-md mt-4"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        {t.nav.cta}
                    </a>
                </div>
            )}
        </header>
    );
}
