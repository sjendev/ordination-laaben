"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function ServiceTeaser() {
    const { t } = useLanguage();

    return (
        <section className="py-32 px-8 bg-black/[0.01]">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-20">
                    <span className="text-primary text-xs uppercase tracking-[0.4em] mb-4 block">
                        {t.home.schwerpunkteLabel}
                    </span>
                    <h2 className="font-display text-3xl md:text-4xl">{t.home.schwerpunkteHeadline}</h2>
                    <div className="w-12 h-[1px] bg-primary/40 mx-auto mt-6"></div>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 mb-20">
                        {t.home.schwerpunkteItems.map((item: string, index: number) => (
                            <div key={index} className="flex items-center gap-4 group">
                                <span className="text-primary w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                                <span className="text-slate-600 font-light leading-relaxed group-hover:text-black transition-colors duration-300">
                                    {item}
                                </span>
                            </div>
                        ))}
                    </div>

                    <div className="text-center border-t border-black/[0.05] pt-12">
                        <p className="text-slate-500 font-light italic leading-relaxed text-lg max-w-2xl mx-auto mb-10">
                            {t.home.schwerpunkteFooter}
                        </p>
                        <div className="flex justify-center">
                            <Link
                                href="/leistungen"
                                className="bg-primary text-white text-[10px] uppercase tracking-[0.2em] font-bold px-10 py-5 rounded-none hover:bg-slate-900 transition-all group flex items-center gap-3 min-w-[240px] justify-center"
                            >
                                <span>{t.nav.viewAll}</span>
                                <span className="material-symbols-outlined text-lg transition-transform group-hover:translate-x-1">
                                    arrow_forward
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
