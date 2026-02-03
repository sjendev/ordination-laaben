"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function ServiceTeaser() {
    const { t } = useLanguage();

    const services = [
        {
            ...t.home.services[0],
            icon: "favorite",
            link: "/leistungen/kardiologie",
        },
        {
            ...t.home.services[1],
            icon: "verified_user",
            link: "/leistungen/diagnostik",
        },
        {
            ...t.home.services[2],
            icon: "medical_services",
            link: "/leistungen/covid-nachsorge",
        },
    ];

    return (
        <section className="py-32 px-8">
            <div className="max-w-6xl mx-auto text-center mb-20">
                <h2 className="font-display text-3xl md:text-4xl">{t.home.servicesHeadline}</h2>
                <div className="w-12 h-[1px] bg-primary/40 mx-auto mt-6"></div>
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
                {services.map((service: any, index: number) => (
                    <div key={index} className="group bg-black/[0.02] border border-black/[0.05] hover:border-primary/20 hover:bg-white/40 transition-all flex flex-col items-center text-center backdrop-blur-sm overflow-hidden">
                        <div className="w-full aspect-video overflow-hidden relative">
                            <img
                                src={service.image}
                                alt={service.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                            />
                            <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors"></div>
                            <span className="absolute top-4 right-4 material-symbols-outlined text-2xl text-white/80 font-thin bg-primary/20 backdrop-blur-md p-2 rounded-full">
                                {service.icon}
                            </span>
                        </div>
                        <div className="p-10 flex flex-col items-center">
                            <h3 className="font-display text-xl mb-4">{service.title}</h3>
                            <p className="text-sm text-slate-500 font-light leading-relaxed mb-8">
                                {service.description}
                            </p>
                            <Link
                                href={service.link}
                                className="text-[10px] uppercase tracking-widest font-bold border-b border-primary/10 pb-1 group-hover:border-primary transition-colors"
                            >
                                {t.cookie.details}
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
