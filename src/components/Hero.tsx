"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { BOOKING_LINK } from "@/config/links";

export default function Hero() {
    const { t } = useLanguage();

    return (
        <section className="relative min-h-[90vh] flex items-center pt-24 px-8">
            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="relative z-10 py-12">
                    <span className="text-primary text-xs uppercase tracking-[0.4em] mb-4 block">
                        {t.hero.welcome}
                    </span>
                    <h1 className="font-display text-4xl md:text-5xl lg:text-7xl leading-[1.1] mb-8 font-medium">
                        {t.hero.headline}
                    </h1>
                    <p className="text-slate-600 font-light leading-relaxed mb-10 text-lg md:text-xl max-w-xl">
                        {t.hero.subheadline}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6">
                        <a
                            href={BOOKING_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-primary text-white text-[10px] uppercase tracking-[0.2em] font-bold px-10 py-5 rounded-none hover:bg-slate-900 transition-all group flex items-center justify-between min-w-[200px]"
                        >
                            <span>{t.hero.primaryCta}</span>
                            <span className="material-symbols-outlined text-lg transition-transform group-hover:translate-x-1">
                                arrow_forward
                            </span>
                        </a>
                        <Link
                            href="/services"
                            className="border border-slate-200 text-slate-900 text-[10px] uppercase tracking-[0.2em] font-bold px-10 py-5 rounded-none hover:bg-slate-50 transition-colors text-center"
                        >
                            {t.hero.secondaryCta}
                        </Link>
                    </div>
                </div>

                <div className="relative aspect-[16/10] lg:aspect-auto lg:h-[75vh] w-full overflow-hidden border border-black/[0.03] shadow-2xl rounded-sm">
                    <img
                        alt="Dr. Sang - Beratungsgespräch in der Ordination Laaben"
                        className="w-full h-full object-cover transition-transform duration-[2000ms] hover:scale-105"
                        src="/hero-consultation.jpg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#F5F6F0]/20 to-transparent"></div>
                </div>
            </div>
        </section>
    );
}
