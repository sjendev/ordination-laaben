"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function AboutPage() {
    const { t } = useLanguage();

    return (
        <main className="pt-48 pb-32 px-8 bg-transparent">
            <div className="max-w-5xl mx-auto">
                {/* Hero Section */}
                <section className="flex flex-col lg:flex-row gap-20 items-start mb-40">
                    <div className="w-full lg:w-5/12 aspect-[4/5] bg-slate-100 rounded-sm overflow-hidden relative group shadow-2xl">
                        <img
                            src="/about-portrait.jpg"
                            alt={t.about.title}
                            className="w-full h-full object-cover grayscale-[0.1] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    </div>
                    <div className="w-full lg:w-7/12 pt-8">
                        <span className="text-primary text-[10px] uppercase tracking-[0.4em] font-bold mb-6 block">
                            {t.about.label}
                        </span>
                        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl mb-10 leading-tight">{t.about.title}</h1>
                        <p className="text-slate-500 font-light leading-relaxed text-xl mb-12 italic font-display">
                            {t.about.quote}
                        </p>
                        <div className="space-y-8 text-slate-600 font-light leading-relaxed text-lg">
                            <p>{t.about.text1}</p>
                            <p>{t.about.text2}</p>
                        </div>
                    </div>
                </section>

                {/* Qualifikationen Section with Ultrasound Image */}
                <section className="mb-40">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                        <div className="order-2 lg:order-1">
                            <h2 className="font-display text-3xl mb-12 border-b border-primary/10 pb-6 italic">{t.about.qualificationsTitle}</h2>
                            <div className="space-y-16">
                                <div>
                                    <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary mb-8">{t.about.cvTitle}</h3>
                                    <ul className="space-y-6">
                                        {t.about.cvItems.map((item: any, i: number) => (
                                            <li key={i} className="flex gap-6 group">
                                                <span className="font-bold text-slate-900 text-sm tracking-vocal min-w-[100px]">{item.year}</span>
                                                <span className="text-slate-500 font-light text-sm group-hover:text-primary transition-colors">{item.text}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary mb-8">{t.about.expertiseTitle}</h3>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {t.about.expertiseItems.map((item: string, i: number) => (
                                            <li key={i} className="flex items-center gap-4 text-sm text-slate-600 font-light">
                                                <span className="w-1.5 h-1.5 rounded-full bg-primary/30"></span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2 aspect-[16/10] bg-slate-100 rounded-sm overflow-hidden shadow-xl border border-black/[0.03] group">
                            <img
                                src="/about-ultrasound.jpg"
                                alt="Dr. Sang Ultrasound Diagnostics"
                                className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105"
                            />
                        </div>
                    </div>
                </section>

                {/* Philosophy Section */}
                <section className="text-center py-32 px-12 bg-black/[0.02] border border-black/[0.03] rounded-sm relative overflow-hidden">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-primary/20"></div>
                    <h2 className="font-display text-4xl mb-10">{t.about.philosophyTitle}</h2>
                    <p className="max-w-3xl mx-auto text-slate-500 font-light leading-relaxed text-xl italic font-display">
                        {t.about.philosophyText}
                    </p>
                </section>
            </div>
        </main>
    );
}
