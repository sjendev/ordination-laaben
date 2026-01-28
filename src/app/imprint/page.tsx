"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function ImprintPage() {
    const { t } = useLanguage();

    return (
        <main className="pt-48 pb-32 px-8 bg-transparent">
            <div className="max-w-3xl mx-auto">
                <header className="mb-20">
                    <span className="text-primary text-[10px] uppercase tracking-[0.4em] font-bold mb-4 block">
                        Legal
                    </span>
                    <h1 className="font-display text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight">{t.legal.imprint}</h1>
                    <div className="w-12 h-[1px] bg-primary/30"></div>
                </header>

                <section className="space-y-16 text-slate-600 font-light leading-relaxed">
                    <div className="group">
                        <h2 className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary mb-6">{t.legal.imprintTitle}</h2>
                        <p className="text-lg">
                            Dr. Stephanie Sang<br />
                            {t.legal.jobValue}<br />
                            Laaben 33/40<br />
                            3053 Brand-Laaben<br />
                            Österreich
                        </p>
                    </div>

                    <div className="group">
                        <h2 className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary mb-6">{t.legal.contactTitle}</h2>
                        <p className="text-lg">
                            Telefon: 0670 556 33 62<br />
                            E-Mail: sang@ordination-laaben.at
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        <div>
                            <h2 className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary mb-6">{t.legal.chamberTitle}</h2>
                            <p className="text-slate-500">{t.legal.chamberValue}</p>
                        </div>
                        <div>
                            <h2 className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary mb-6">{t.legal.jobTitle}</h2>
                            <p className="text-slate-500">{t.legal.jobValue}</p>
                        </div>
                    </div>

                    <div className="pt-16 border-t border-black/[0.05]">
                        <h2 className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary mb-6">{t.legal.disclosureTitle}</h2>
                        <p className="text-slate-500">{t.legal.disclosureValue}</p>
                    </div>
                </section>
            </div>
        </main>
    );
}
