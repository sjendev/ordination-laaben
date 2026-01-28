"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function InfoBar() {
    const { t } = useLanguage();

    const infoItems = [
        {
            icon: "location_on",
            label: t.infobar.address,
            value: "Laaben 33/40, 3053 Brand-Laaben",
        },
        {
            icon: "phone",
            label: t.infobar.phone,
            value: "0670 556 33 62",
        },
        {
            icon: "schedule",
            label: t.infobar.hours,
            value: t.infobar.hoursValue,
        },
    ];

    return (
        <div className="bg-[#F5F6F0]/50 border-y border-black/[0.05] py-8 px-6 backdrop-blur-sm">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {infoItems.map((item, index) => (
                    <div key={index} className="flex items-center gap-4 group">
                        <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-primary/70 group-hover:bg-primary group-hover:text-white transition-colors">
                            <span className="material-symbols-outlined text-lg">{item.icon}</span>
                        </div>
                        <div>
                            <p className="text-[9px] uppercase tracking-widest text-slate-400 font-medium">
                                {item.label}
                            </p>
                            <p className="text-xs text-slate-700 font-light">{item.value}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
