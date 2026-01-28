"use client";

import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { BOOKING_LINK } from "@/config/links";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
    const { language, setLanguage, t } = useLanguage();

    return (
        <header
            className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center bg-[#F5F6F0]/80 backdrop-blur-md border-b border-black/[0.05]"
            onMouseLeave={() => setIsMegaMenuOpen(false)}
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
                    href="/about"
                    className="hover:text-primary transition-colors"
                    onMouseEnter={() => setIsMegaMenuOpen(false)}
                >
                    {t.nav.about}
                </Link>

                <div
                    className="relative py-2"
                    onMouseEnter={() => setIsMegaMenuOpen(true)}
                >
                    <Link href="/services" className="hover:text-primary transition-colors flex items-center gap-1 group">
                        {t.nav.services}
                        <span className={`material-symbols-outlined text-[14px] transition-transform duration-300 ${isMegaMenuOpen ? 'rotate-180' : ''}`}>
                            expand_more
                        </span>
                    </Link>

                    {/* Full-Width Mega Menu Dropdown */}
                    <div className={`fixed top-full left-0 w-full bg-[#F5F6F0] border-y border-black/[0.05] shadow-2xl transition-all duration-500 origin-top overflow-hidden ${isMegaMenuOpen ? 'opacity-100 translate-y-0 visible pointer-events-auto' : 'opacity-0 -translate-y-4 invisible pointer-events-none'}`}>
                        <div className="max-w-7xl mx-auto px-8 py-12">
                            <div className="grid grid-cols-4 gap-8">
                                {t.nav.subServices?.map((service: any, index: number) => (
                                    <Link
                                        key={index}
                                        href={service.link}
                                        className="group/item flex flex-col gap-4"
                                        onClick={() => setIsMegaMenuOpen(false)}
                                    >
                                        <div className="aspect-[16/10] overflow-hidden bg-black/[0.05] border border-black/[0.05] relative">
                                            <img
                                                src={service.image}
                                                alt={service.title}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover/item:scale-110 opacity-80 group-hover/item:opacity-100"
                                            />
                                            <div className="absolute inset-0 bg-primary/0 group-hover/item:bg-primary/5 transition-colors duration-500"></div>
                                        </div>
                                        <div>
                                            <h4 className="text-[14px] font-display font-medium mb-1 group-hover/item:text-primary transition-colors">
                                                {service.title}
                                            </h4>
                                            <p className="text-[11px] text-slate-400 font-light lowercase tracking-wider leading-relaxed">
                                                {service.description}
                                            </p>
                                        </div>
                                    </Link>
                                ))}

                                <div className="bg-black/[0.02] p-8 flex flex-col justify-between border border-black/[0.03]">
                                    <div>
                                        <p className="text-[10px] text-primary font-bold tracking-[0.3em] mb-4 uppercase">
                                            {t.nav.cta}
                                        </p>
                                        <p className="text-[12px] text-slate-500 font-light leading-relaxed mb-8">
                                            Wir nehmen uns Zeit für Ihre individuelle Betreuung. Vereinbaren Sie Ihren Termin ganz einfach online.
                                        </p>
                                    </div>
                                    <a
                                        href={BOOKING_LINK}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-primary text-white text-[9px] font-bold uppercase tracking-widest py-4 px-8 text-center hover:bg-slate-900 transition-all shadow-sm"
                                        onClick={() => setIsMegaMenuOpen(false)}
                                    >
                                        {t.nav.cta}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Link
                    href="/wahlarzt"
                    className="hover:text-primary transition-colors"
                    onMouseEnter={() => setIsMegaMenuOpen(false)}
                >
                    {t.nav.wahlarzt}
                </Link>
                <Link
                    href="/contact"
                    className="hover:text-primary transition-colors"
                    onMouseEnter={() => setIsMegaMenuOpen(false)}
                >
                    {t.nav.contact}
                </Link>
            </nav>

            <div className="flex-1 lg:flex-none flex justify-end items-center gap-4">
                {/* Language Toggle */}
                <div
                    className="flex items-center bg-slate-50 p-1 border border-slate-100 mr-2 shadow-sm"
                    onMouseEnter={() => setIsMegaMenuOpen(false)}
                >
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
                    onMouseEnter={() => setIsMegaMenuOpen(false)}
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
                <div className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-md border-t border-slate-100 p-8 flex flex-col gap-8 lg:hidden animate-in fade-in slide-in-from-top-2">
                    <nav className="flex flex-col gap-6 text-xs uppercase tracking-widest font-medium text-center">
                        <Link href="/about" onClick={() => setIsMenuOpen(false)}>{t.nav.about}</Link>
                        <Link href="/services" onClick={() => setIsMenuOpen(false)}>{t.nav.services}</Link>
                        <Link href="/wahlarzt" onClick={() => setIsMenuOpen(false)}>{t.nav.wahlarzt}</Link>
                        <Link href="/contact" onClick={() => setIsMenuOpen(false)}>{t.nav.contact}</Link>
                    </nav>
                    <a
                        href={BOOKING_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-primary text-white text-[10px] uppercase tracking-[0.2em] font-bold py-5 text-center shadow-md"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        {t.nav.cta}
                    </a>
                </div>
            )}
        </header>
    );
}
