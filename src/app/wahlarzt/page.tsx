"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { BOOKING_LINK } from "@/config/links";

export default function WahlarztPage() {
    const { t } = useLanguage();

    return (
        <main className="pt-48 pb-32 px-8">
            <div className="max-w-4xl mx-auto">
                <header className="mb-24 text-center md:text-left">
                    <span className="text-primary text-[10px] uppercase tracking-[0.3em] font-semibold mb-2 block">
                        {t.wahlarzt.label}
                    </span>
                    <h1 className="font-display text-4xl md:text-5xl mb-8">{t.wahlarzt.title}</h1>
                    <p className="text-slate-500 font-light leading-relaxed text-lg italic max-w-2xl font-display">
                        {t.wahlarzt.quote}
                    </p>
                </header>

                <section className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-32 items-center">
                    <div className="space-y-12">
                        <div>
                            <h2 className="font-display text-2xl mb-4">{t.wahlarzt.howTitle}</h2>
                            <p className="text-slate-600 font-light leading-relaxed">
                                {t.wahlarzt.howText}
                            </p>
                        </div>
                        <div>
                            <h2 className="font-display text-2xl mb-4">{t.wahlarzt.reimbursementTitle}</h2>
                            <p className="text-slate-600 font-light leading-relaxed">
                                {t.wahlarzt.reimbursementText}
                            </p>
                        </div>
                    </div>
                    <div className="bg-[#F5F6F0] p-12 rounded-sm border border-black/[0.03] shadow-sm relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -mr-12 -mt-12"></div>
                        <h3 className="text-[10px] uppercase tracking-widest font-bold text-primary mb-10">{t.wahlarzt.processTitle}</h3>
                        <ul className="space-y-6">
                            {t.wahlarzt.processItems.map((step: string, i: number) => (
                                <li key={i} className="flex gap-4 items-start group">
                                    <span className="w-6 h-6 rounded-full bg-white border border-primary/20 flex items-center justify-center text-[10px] font-bold text-primary flex-shrink-0 shadow-sm group-hover:bg-primary group-hover:text-white transition-colors">
                                        {i + 1}
                                    </span>
                                    <span className="text-sm text-slate-700 font-light leading-tight pt-1">{step}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                <section className="mb-32">
                    <h2 className="font-display text-3xl mb-12 text-center">{t.wahlarzt.benefitsTitle}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {t.wahlarzt.benefits.map((v: any, i: number) => (
                            <div key={i} className="text-center p-10 border border-black/[0.03] hover:border-primary/20 transition-all bg-white/[0.4] hover:bg-white active:scale-[0.98]">
                                <h3 className="font-display text-xl mb-4">{v.title}</h3>
                                <p className="text-sm text-slate-500 font-light leading-relaxed">{v.text}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <div className="bg-slate-900 p-16 text-center text-white rounded-sm relative overflow-hidden group">
                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                    <h2 className="font-display text-3xl mb-8 relative z-10">{t.wahlarzt.footerTitle}</h2>
                    <p className="text-slate-400 font-light mb-12 max-w-xl mx-auto relative z-10">
                        {t.wahlarzt.footerText}
                    </p>
                    <a
                        href={BOOKING_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-slate-900 text-[10px] uppercase tracking-[0.2em] font-bold px-12 py-5 hover:bg-primary hover:text-white transition-all inline-block relative z-10 shadow-xl active:scale-95"
                    >
                        {t.wahlarzt.footerCta}
                    </a>
                </div>
            </div>
        </main>
    );
}
