"use client";

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
                            <div key={index} className="flex items-start gap-4 group">
                                <span className="text-primary mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                                <span className="text-slate-600 font-light leading-relaxed group-hover:text-black transition-colors duration-300">
                                    {item}
                                </span>
                            </div>
                        ))}
                    </div>

                    <div className="text-center border-t border-black/[0.05] pt-12">
                        <p className="text-slate-500 font-light italic leading-relaxed text-lg max-w-2xl mx-auto">
                            {t.home.schwerpunkteFooter}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
