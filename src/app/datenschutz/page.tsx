"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function PrivacyPage() {
    const { t } = useLanguage();

    return (
        <main className="pt-48 pb-32 px-8 bg-transparent">
            <div className="max-w-3xl mx-auto">
                <header className="mb-20">
                    <span className="text-primary text-[10px] uppercase tracking-[0.4em] font-bold mb-4 block">
                        Legal
                    </span>
                    <h1 className="font-display text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight">{t.legal.privacy}</h1>
                    <div className="w-12 h-[1px] bg-primary/30"></div>
                </header>

                <section className="space-y-16 text-slate-600 font-light leading-relaxed">
                    <p className="text-xl italic font-display text-slate-500">
                        {t.legal.privacyIntro}
                    </p>

                    <div className="group">
                        <h2 className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary mb-6">{t.legal.privacyContactTitle}</h2>
                        <p className="text-lg">
                            {t.legal.privacyContactValue}
                        </p>
                    </div>

                    <div className="group">
                        <h2 className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary mb-6">{t.legal.privacyDataTitle}</h2>
                        <p className="text-lg">
                            {t.legal.privacyDataValue}
                        </p>
                    </div>

                    <div className="group">
                        <h2 className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary mb-6">{t.legal.privacyCookiesTitle}</h2>
                        <p className="text-lg">
                            {t.legal.privacyCookiesValue}
                        </p>
                    </div>

                    <div className="group">
                        <h2 className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary mb-6">{t.legal.privacyRightsTitle}</h2>
                        <p className="text-lg">
                            {t.legal.privacyRightsValue}
                        </p>
                    </div>
                </section>
            </div>
        </main>
    );
}
