"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function ServicesPage() {
    const { t } = useLanguage();

    const serviceCategories = [
        {
            title: "EKG",
            description: t.services.items.kardiologie.details[1].desc,
            image: "/services/cardiology.png",
            slug: "kardiologie#ekg-elektrokardiogramm"
        },
        {
            title: "Herzultraschall",
            description: t.services.items.kardiologie.details[0].desc,
            image: "/services/vascular.png",
            slug: "kardiologie#herzultraschall-echokardiographie"
        },
        {
            title: t.services.items.gefaessmedizin.title,
            description: t.services.items.gefaessmedizin.content[0],
            image: "/services/vascular.png",
            slug: "gefaessmedizin"
        },
        {
            title: t.services.items.diagnostik.title,
            description: t.services.items.diagnostik.content[0],
            image: "/services/diagnostics.png",
            slug: "diagnostik"
        }
    ];

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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
                    {serviceCategories.map((category) => (
                        <Link
                            key={category.slug}
                            href={`/leistungen/${category.slug}`}
                            className="group flex flex-col bg-white overflow-hidden shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] transition-all duration-700 h-full"
                        >
                            <div className="aspect-[16/10] overflow-hidden bg-slate-100">
                                <img
                                    src={category.image}
                                    alt={category.title}
                                    className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-[2000ms] group-hover:scale-105"
                                />
                            </div>
                            <div className="p-10 md:p-12 flex flex-col flex-grow">
                                <h2 className="font-display text-2xl md:text-3xl mb-4 tracking-[0.05em] text-slate-400 group-hover:text-primary transition-colors">
                                    {category.title}
                                </h2>
                                <p className="text-slate-500 font-light leading-relaxed mb-10 text-base line-clamp-4 flex-grow">
                                    {category.description}
                                </p>
                                <div className="flex items-center gap-3 text-primary text-[9px] uppercase tracking-[0.3em] font-bold mt-auto group-hover:gap-4 transition-all">
                                    {t.services.cta}
                                    <span className="material-symbols-outlined text-[12px]">arrow_forward</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
}
