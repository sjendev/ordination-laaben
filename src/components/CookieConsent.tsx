"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";

export default function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false);
    const { t } = useLanguage();

    useEffect(() => {
        const consent = localStorage.getItem("cookie-consent");
        if (!consent) {
            setIsVisible(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("cookie-consent", "accepted");
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-6 left-6 right-6 z-[60] bg-white/95 backdrop-blur shadow-2xl p-6 border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <p className="text-[11px] text-slate-500 leading-relaxed font-light text-center md:text-left">
                {t.cookie.text}{" "}
                <Link href="/datenschutz" className="underline hover:text-primary transition-colors">{t.footer.privacy}</Link>.
            </p>
            <div className="flex gap-4 w-full md:w-auto">
                <button
                    onClick={handleAccept}
                    className="flex-1 md:flex-none md:min-w-[150px] bg-primary text-white text-[9px] uppercase tracking-widest font-bold py-4 hover:bg-slate-900 transition-colors"
                >
                    {t.cookie.accept}
                </button>
                <Link
                    href="/datenschutz"
                    className="flex-1 md:flex-none md:min-w-[150px] border border-slate-200 text-slate-500 text-[9px] uppercase tracking-widest font-bold py-4 hover:bg-slate-50 transition-colors text-center inline-block"
                >
                    {t.cookie.details}
                </Link>
            </div>
        </div>
    );
}
