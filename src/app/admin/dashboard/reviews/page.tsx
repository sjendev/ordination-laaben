"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { dt } from "@/lib/dashboard-i18n";
import { mockGoogleReviews, mockPrivateFeedback, googleRating, formatDate } from "@/lib/mock-data";

type Tab = "public" | "private" | "all";

function StarRow({ rating }: { rating: number }) {
  return (
    <span className="text-base text-amber-400 tracking-tight">
      {"★".repeat(rating)}
      <span className="text-slate-200">{"★".repeat(5 - rating)}</span>
    </span>
  );
}

export default function ReviewsPage() {
  const { language } = useLanguage();
  const T  = dt[language];
  const RV = T.reviews;

  const [tab, setTab] = useState<Tab>("public");

  const tabs: { id: Tab; label: string }[] = [
    { id: "public",  label: RV.tabPublic  },
    { id: "private", label: RV.tabPrivate },
    { id: "all",     label: RV.tabAll     },
  ];

  return (
    <div className="max-w-4xl space-y-6">
      {/* Summary */}
      <div className="bg-white border border-black/[0.05] p-6 flex flex-wrap items-center gap-8">
        <div>
          <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-2">{RV.statRatingLabel}</p>
          <p className="text-5xl font-display font-light text-slate-800 leading-none">{googleRating}</p>
          <span className="text-lg text-amber-400">{"★".repeat(5)}</span>
        </div>
        <div className="h-12 w-[1px] bg-black/[0.05]" />
        <div>
          <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-2">{RV.statTotalLabel}</p>
          <p className="text-5xl font-display font-light text-slate-800 leading-none">{mockGoogleReviews.length}</p>
          <p className="text-xs text-slate-400 font-light mt-1">{RV.statTotalSub}</p>
        </div>
        <div className="h-12 w-[1px] bg-black/[0.05]" />
        <div>
          <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-2">{RV.statPrivateLabel}</p>
          <p className="text-5xl font-display font-light text-slate-800 leading-none">{mockPrivateFeedback.length}</p>
          <p className="text-xs text-slate-400 font-light mt-1">{RV.statPrivateSub}</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-black/[0.05] flex gap-8">
        {tabs.map((t) => (
          <button key={t.id} onClick={() => setTab(t.id)}
            className={`pb-3 text-[10px] uppercase tracking-widest font-bold transition-colors ${
              tab === t.id ? "text-primary border-b-2 border-primary -mb-px" : "text-slate-400 hover:text-slate-600"
            }`}>
            {t.label}
          </button>
        ))}
      </div>

      {/* Public reviews */}
      {(tab === "public" || tab === "all") && (
        <div className="space-y-4">
          {tab === "all" && <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">{RV.sectionPublic}</p>}
          {mockGoogleReviews.map((review) => (
            <div key={review.id} className="bg-white border border-black/[0.05] p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <p className="text-sm font-medium text-slate-800">{review.author}</p>
                    <span className="text-xs text-slate-400 font-light">{formatDate(review.date)}</span>
                  </div>
                  <StarRow rating={review.rating} />
                  <p className="text-sm text-slate-600 font-light leading-relaxed mt-3">{review.text}</p>
                </div>
                <a href="#"
                  className="flex-shrink-0 border border-black/[0.08] text-[9px] uppercase tracking-widest font-bold px-4 py-2 rounded-none hover:bg-black/[0.02] transition-colors text-slate-500 flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[13px]">open_in_new</span>
                  {RV.onGoogleBtn}
                </a>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Private feedback */}
      {(tab === "private" || tab === "all") && (
        <div className="space-y-4">
          {tab === "all" && <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mt-8">{RV.sectionPrivate}</p>}
          {mockPrivateFeedback.length === 0 ? (
            <div className="bg-white border border-black/[0.05] px-6 py-12 text-center">
              <span className="material-symbols-outlined text-4xl text-slate-300 block mb-3">sentiment_satisfied</span>
              <p className="text-sm text-slate-400 font-light">{RV.emptyPrivate}</p>
            </div>
          ) : (
            mockPrivateFeedback.map((fb) => (
              <div key={fb.id} className="bg-white border border-black/[0.05] p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <p className="text-sm font-medium text-slate-800">{fb.patientName}</p>
                      <span className="text-xs text-slate-400 font-light">{formatDate(fb.appointmentDate)}</span>
                      <span className="text-[9px] uppercase tracking-widest font-bold px-2 py-0.5 bg-amber-50 text-amber-700">{RV.privateBadge}</span>
                    </div>
                    <StarRow rating={fb.rating!} />
                    {fb.feedbackText && <p className="text-sm text-slate-600 font-light leading-relaxed mt-3">{fb.feedbackText}</p>}
                  </div>
                  <div className="flex flex-col gap-2 flex-shrink-0">
                    <button className="border border-black/[0.08] text-[9px] uppercase tracking-widest font-bold px-4 py-2 rounded-none hover:bg-black/[0.02] transition-colors text-slate-500 flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[13px]">reply</span>
                      {RV.replyBtn}
                    </button>
                    <button className="border border-black/[0.08] text-[9px] uppercase tracking-widest font-bold px-4 py-2 rounded-none hover:bg-black/[0.02] transition-colors text-slate-500 flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[13px]">check</span>
                      {RV.resolveBtn}
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}
