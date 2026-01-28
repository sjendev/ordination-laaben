"use client";

import Hero from "@/components/Hero";
import ServiceTeaser from "@/components/ServiceTeaser";
import InfoBar from "@/components/InfoBar";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

  return (
    <main className="overflow-x-hidden">
      <Hero />
      <InfoBar />

      {/* Welcome Section */}
      <section className="py-24 px-8 text-center bg-transparent">
        <div className="max-w-2xl mx-auto">
          <span className="text-primary text-xs uppercase tracking-[0.4em] mb-4 block">
            {t.home.welcome}
          </span>
          <h2 className="font-display text-3xl md:text-4xl mb-8 leading-tight">
            {t.home.welcomeHeadline}
          </h2>
          <p className="text-slate-500 font-light leading-relaxed text-lg italic mb-10">
            {t.home.welcomeText}
          </p>
          <div className="w-12 h-[1px] bg-primary/40 mx-auto"></div>
        </div>
      </section>

      <ServiceTeaser />

      {/* Wahlarzt Info Section */}
      <section className="py-24 px-8 bg-black/[0.02] border-y border-black/[0.03]">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-primary text-[10px] uppercase tracking-widest font-semibold mb-2 block">
              {t.home.wahlarztLabel}
            </span>
            <h2 className="font-display text-3xl mb-6">{t.home.wahlarztHeadline}</h2>
            <div className="text-slate-600 font-light leading-relaxed space-y-4 mb-8">
              <p>{t.home.wahlarztText1}</p>
              <p>{t.home.wahlarztText2}</p>
            </div>
            <Link
              href="/wahlarzt"
              className="text-[10px] uppercase tracking-widest font-bold border-b border-primary/30 pb-1 hover:border-primary transition-colors inline-block"
            >
              {t.home.wahlarztCta}
            </Link>
          </div>
          <div className="aspect-square bg-slate-200 rounded-sm overflow-hidden shadow-xl border border-black/[0.03]">
            <img
              src="/hero-consultation.jpg"
              alt="Ordination Dr. Sang"
              className="w-full h-full object-cover transition-transform duration-[2000ms] hover:scale-110"
            />
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-24 px-8 bg-transparent">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-display text-3xl mb-12">{t.home.locationHeadline}</h2>
          <div className="w-full h-[450px] bg-black/[0.05] border border-black/[0.05] rounded-sm relative overflow-hidden grayscale contrast-75 hover:grayscale-0 transition-all duration-1000">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10660.123456789!2d15.8!3d48.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476da381f9b3b5e7%3A0x40097572de611f0!2s3053%20Brand-Laaben!5e0!3m2!1sde!2sat!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
}
