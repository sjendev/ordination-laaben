"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function ServicesPage() {
    const { t } = useLanguage();

    const serviceCategories = [
        {
            ...t.services.items.kardiologie,
            slug: "kardiologie",
            list: t.services.items.kardiologie.details.slice(0, 3).map((d: any) => d.name)
        },
        {
            ...t.services.items.gefaessmedizin,
            slug: "gefaessmedizin",
            list: t.services.items.gefaessmedizin.details.map((d: any) => d.name)
        },
        {
            ...t.services.items.diagnostik,
            slug: "diagnostik",
            list: t.services.items.diagnostik.details.slice(0, 3).map((d: any) => d.name)
        },
        {
            ...t.services.items["covid-nachsorge"],
            slug: "covid-nachsorge",
            list: t.services.items["covid-nachsorge"].details.map((d: any) => d.name)
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

                <div className="grid grid-cols-1 gap-40">
                    {serviceCategories.map((category, index) => (
                        <section
                            key={category.slug}
                            className={`flex flex-col lg:flex-row gap-20 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                        >
                            <div className="w-full lg:w-1/2 aspect-[16/10] bg-slate-100 rounded-sm overflow-hidden border border-black/[0.03] shadow-xl group">
                                <img
                                    src={category.image}
                                    alt={category.title}
                                    className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-[2000ms] group-hover:scale-105"
                                />
                            </div>
                            <div className="w-full lg:w-1/2">
                                <h2 className="font-display text-4xl mb-8">{category.title}</h2>
                                <p className="text-slate-600 font-light leading-relaxed mb-10 text-lg">
                                    {category.content[0]}
                                </p>
                                <ul className="space-y-4 mb-12">
                                    {category.list.map((item: string, i: number) => (
                                        <li key={i} className="flex items-center gap-4 text-sm text-slate-500 font-light group">
                                            <span className="w-1.5 h-1.5 rounded-full bg-primary/20 group-hover:bg-primary transition-colors"></span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <Link
                                    href={`/leistungen/${category.slug}`}
                                    className="bg-primary text-white text-[10px] uppercase tracking-[0.2em] font-bold px-10 py-5 rounded-none hover:bg-slate-900 transition-all shadow-lg active:scale-95 inline-block"
                                >
                                    {t.services.cta}
                                </Link>
                            </div>
                        </section>
                    ))}
                </div>
            </div>
        </main>
    );
}
