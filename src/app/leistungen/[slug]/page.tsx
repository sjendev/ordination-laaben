"use client";

import { notFound, useParams } from "next/navigation";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { BOOKING_LINK } from "@/config/links";

export default function ServiceDetailPage() {
    const { slug } = useParams();
    const { t } = useLanguage();

    // @ts-ignore
    const service = t.services.items[slug as string];

    if (!service) {
        notFound();
    }

    return (
        <main className="pt-48 pb-32 px-8 bg-transparent">
            <div className="max-w-4xl mx-auto">
                <Link
                    href="/leistungen"
                    className="flex items-center gap-2 text-[10px] uppercase tracking-[0.4em] text-slate-400 font-bold mb-16 hover:text-primary transition-colors group w-fit"
                >
                    <span className="material-symbols-outlined text-sm transition-transform group-hover:-translate-x-1">arrow_back</span>
                    {t.services.back}
                </Link>

                <header className="mb-24">
                    <span className="text-primary text-[10px] uppercase tracking-[0.4em] font-bold mb-4 block">
                        {service.subtitle}
                    </span>
                    <h1 className="font-display text-4xl md:text-5xl lg:text-6xl mb-12 leading-tight">{service.title}</h1>
                    <div className="w-full aspect-[21/9] bg-slate-100 rounded-sm overflow-hidden mb-20 shadow-2xl border border-black/[0.03]">
                        <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-full object-cover grayscale-[0.1] hover:grayscale-0 transition-all duration-[2000ms]"
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 border-l border-primary/10 pl-12">
                        {service.content.map((p: string, i: number) => (
                            <p key={i} className="text-slate-600 font-light leading-relaxed text-xl italic font-display">
                                {p}
                            </p>
                        ))}
                    </div>
                </header>

                <section className="bg-[#F5F6F0] p-12 md:p-24 rounded-sm border border-black/[0.03] shadow-inner">
                    <h2 className="font-display text-3xl mb-16 italic underline decoration-primary/20 underline-offset-8">Methoden & Diagnostik</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-24">
                        {service.details.map((detail: any, i: number) => (
                            <div
                                key={i}
                                id={detail.name.toLowerCase().replace(/\s+/g, '-').replace(/[()]/g, '')}
                                className="space-y-4 group scroll-mt-32"
                            >
                                <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-slate-800 group-hover:text-primary transition-colors">{detail.name}</h3>
                                <p className="text-sm text-slate-500 font-light leading-relaxed">{detail.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <footer className="mt-32 text-center py-20 bg-primary text-white rounded-sm relative overflow-hidden group">
                    <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                    <p className="text-white/70 font-light mb-10 text-lg relative z-10">{t.services.bookingText}</p>
                    <a
                        href={BOOKING_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-slate-900 text-[10px] uppercase tracking-[0.2em] font-bold px-12 py-5 hover:bg-slate-900 hover:text-white transition-all inline-block relative z-10 shadow-xl active:scale-95"
                    >
                        {t.services.bookingCta}
                    </a>
                </footer>
            </div>
        </main>
    );
}
