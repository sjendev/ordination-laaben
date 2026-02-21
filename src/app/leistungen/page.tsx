"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function ServicesPage() {
    const { t } = useLanguage();

    return (
        <main className="pt-48 pb-32 px-8 bg-transparent">
            <div className="max-w-6xl mx-auto">
                <header className="text-center mb-32">
                    <span className="text-primary text-[10px] uppercase tracking-[0.4em] font-bold mb-4 block">
                        {t.services.label}
                    </span>
                    <h1 className="font-display text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight">{t.services.headline}</h1>
                    <p className="max-w-2xl mx-auto text-slate-500 font-light leading-relaxed text-lg">
                        {t.services.subheadline}
                    </p>
                    <div className="w-12 h-[1px] bg-primary/30 mx-auto mt-12"></div>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {t.services.allServices.map((service: any, index: number) => (
                        <div
                            key={index}
                            className="group flex flex-col bg-white overflow-hidden shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_60px_-10px_rgba(0,0,0,0.08)] transition-all duration-700 h-full border border-black/[0.02]"
                        >
                            <div className="aspect-[16/10] overflow-hidden bg-slate-50">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover grayscale-[0.1] group-hover:grayscale-0 transition-all duration-[2000ms] group-hover:scale-105"
                                />
                            </div>
                            <div className="p-10 md:p-12 flex flex-col flex-grow">
                                <h2 className="font-display text-2xl mb-4 text-slate-900">
                                    {service.title}
                                </h2>
                                <p className="text-slate-500 font-light leading-relaxed text-base flex-grow">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
