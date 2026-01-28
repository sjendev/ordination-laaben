"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function ContactPage() {
    const { t } = useLanguage();

    return (
        <main className="pt-48 pb-32 px-8 bg-transparent">
            <div className="max-w-4xl mx-auto">
                <header className="mb-24 text-center">
                    <span className="text-primary text-[10px] uppercase tracking-[0.4em] font-bold mb-4 block">
                        {t.nav.contact}
                    </span>
                    <h1 className="font-display text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight">{t.footer.contact}</h1>
                    <div className="w-12 h-[1px] bg-primary/30 mx-auto"></div>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-32">
                    <div className="space-y-16">
                        <div className="group">
                            <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary mb-6">{t.infobar.address}</h3>
                            <p className="text-slate-600 font-light text-xl leading-relaxed font-display">
                                Laaben 33/40<br />
                                3053 Brand-Laaben<br />
                                Österreich
                            </p>
                        </div>

                        <div className="group">
                            <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary mb-6">{t.infobar.phone}</h3>
                            <p className="text-slate-600 font-light text-xl hover:text-primary transition-colors cursor-pointer">
                                0670 556 33 62
                            </p>
                        </div>
                    </div>

                    <div className="space-y-16">
                        <div className="group">
                            <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary mb-6">E-Mail</h3>
                            <p className="text-slate-600 font-light text-xl hover:text-primary transition-colors cursor-pointer">
                                sang@ordination-laaben.at
                            </p>
                        </div>

                        <div className="group">
                            <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary mb-6">{t.infobar.hours}</h3>
                            <p className="text-slate-600 font-light text-xl italic font-display leading-relaxed">
                                {t.footer.hoursValue}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="relative h-[500px] w-full bg-black/[0.03] border border-black/[0.05] rounded-sm overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 group">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10660.123456789!2d15.8!3d48.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476da381f9b3b5e7%3A0x40097572de611f0!2s3053%20Brand-Laaben!5e0!3m2!1sde!2sat!4v1234567890"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                    ></iframe>
                    <div className="absolute inset-0 pointer-events-none border border-black/[0.05] group-hover:border-primary/20 transition-colors"></div>
                </div>
            </div>
        </main>
    );
}
