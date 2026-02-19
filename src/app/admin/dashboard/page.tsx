"use client";

import { useLanguage } from "@/context/LanguageContext";
import { dt } from "@/lib/dashboard-i18n";
import {
  mockReviewRequests,
  thisWeekRequests,
  recentlySent,
  mockGoogleReviews,
  googleRating,
  formatDate,
} from "@/lib/mock-data";

function StatCard({ value, label, sub }: { value: string; label: string; sub?: string }) {
  return (
    <div className="bg-white border border-black/[0.05] p-6">
      <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-3">{label}</p>
      <p className="text-5xl font-display font-light text-slate-800 leading-none">{value}</p>
      {sub && <p className="text-xs text-slate-400 font-light mt-2">{sub}</p>}
    </div>
  );
}

const statusColors: Record<string, string> = {
  pending:  "bg-amber-50 text-amber-700",
  sent:     "bg-blue-50 text-blue-700",
  opened:   "bg-violet-50 text-violet-700",
  reviewed: "bg-emerald-50 text-emerald-700",
};

export default function OverviewPage() {
  const { language } = useLanguage();
  const T = dt[language];
  const O = T.overview;

  const newReviews     = mockReviewRequests.filter((r) => r.status === "reviewed").length;
  const thisWeekCount  = thisWeekRequests.length;
  const pendingThisWeek = thisWeekRequests.filter((r) => r.status === "pending").slice(0, 5);

  return (
    <div className="max-w-5xl space-y-8">
      {/* Stat cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <StatCard value={String(newReviews)} label={O.statNewReviews} sub={O.statNewReviewsSub} />
        <StatCard value={String(thisWeekCount)} label={O.statThisWeek} sub={O.statThisWeekSub} />
        <StatCard value={`${googleRating} ★`} label={O.statGoogleRating} sub={`${mockGoogleReviews.length} ${T.reviews.statTotalSub}`} />
      </div>

      {/* This week – quick send */}
      <div className="bg-white border border-black/[0.05]">
        <div className="px-6 py-5 border-b border-black/[0.05] flex items-center justify-between">
          <div>
            <h2 className="text-sm font-medium text-slate-800">{O.cardTitle}</h2>
            <p className="text-xs text-slate-400 font-light mt-0.5">{O.cardSub}</p>
          </div>
          <a href="/admin/dashboard/new-patients" className="text-[10px] uppercase tracking-[0.15em] font-bold text-primary hover:opacity-70 transition-opacity">
            {O.showAll}
          </a>
        </div>

        {pendingThisWeek.length === 0 ? (
          <div className="px-6 py-12 text-center">
            <span className="material-symbols-outlined text-4xl text-slate-300 block mb-3">check_circle</span>
            <p className="text-sm text-slate-400 font-light">{O.emptyWeek}</p>
          </div>
        ) : (
          <>
            <table className="w-full">
              <thead>
                <tr className="border-b border-black/[0.03]">
                  {[O.colPatient, O.colAppointment, O.colSendDate, O.colStatus].map((h, i) => (
                    <th key={i} className={`text-[9px] uppercase tracking-widest text-slate-400 font-bold text-left px-6 py-3 ${i > 0 && i < 3 ? "hidden sm:table-cell" : ""}`}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {pendingThisWeek.map((req) => (
                  <tr key={req.id} className="border-b border-black/[0.03] hover:bg-black/[0.01] transition-colors">
                    <td className="px-6 py-3">
                      <p className="text-sm text-slate-800 font-light">{req.patientName}</p>
                      <p className="text-xs text-slate-400 font-light">{req.email}</p>
                    </td>
                    <td className="px-6 py-3 text-sm text-slate-500 font-light hidden sm:table-cell">{formatDate(req.appointmentDate)}</td>
                    <td className="px-6 py-3 text-sm text-slate-500 font-light hidden sm:table-cell">{formatDate(req.sendDate)}</td>
                    <td className="px-6 py-3">
                      <span className={`text-[9px] uppercase tracking-widest font-bold px-2 py-1 ${statusColors[req.status] ?? "bg-slate-100 text-slate-500"}`}>
                        {T.status[req.status as keyof typeof T.status]}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="px-6 py-4 border-t border-black/[0.05] flex items-center justify-between flex-wrap gap-3">
              <p className="text-xs text-slate-400 font-light">{O.autoInfo}</p>
              <a href="/admin/dashboard/new-patients" className="bg-primary text-white text-[10px] uppercase tracking-[0.2em] font-bold px-6 py-3 rounded-none hover:opacity-90 transition-opacity">
                {O.manageBtn}
              </a>
            </div>
          </>
        )}
      </div>

      {/* Recently sent */}
      <div className="bg-white border border-black/[0.05]">
        <div className="px-6 py-5 border-b border-black/[0.05]">
          <h2 className="text-sm font-medium text-slate-800">{O.recentTitle}</h2>
          <p className="text-xs text-slate-400 font-light mt-0.5">{O.recentSub}</p>
        </div>
        <table className="w-full">
          <thead>
            <tr className="border-b border-black/[0.03]">
              {[O.colPatient, O.colSendDate, O.colStatus, O.colRating].map((h, i) => (
                <th key={i} className={`text-[9px] uppercase tracking-widest text-slate-400 font-bold text-left px-6 py-3 ${i === 1 || i === 3 ? "hidden sm:table-cell" : ""}`}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {recentlySent.map((req) => (
              <tr key={req.id} className="border-b border-black/[0.03] hover:bg-black/[0.01] transition-colors">
                <td className="px-6 py-3 text-sm text-slate-800 font-light">{req.patientName}</td>
                <td className="px-6 py-3 text-sm text-slate-500 font-light hidden sm:table-cell">{formatDate(req.sendDate)}</td>
                <td className="px-6 py-3">
                  <span className={`text-[9px] uppercase tracking-widest font-bold px-2 py-1 ${statusColors[req.status] ?? "bg-slate-100 text-slate-500"}`}>
                    {T.status[req.status as keyof typeof T.status]}
                  </span>
                </td>
                <td className="px-6 py-3 hidden sm:table-cell">
                  {req.rating ? (
                    <span className="text-sm text-amber-500 font-light">{"★".repeat(req.rating)}{"☆".repeat(5 - req.rating)}</span>
                  ) : (
                    <span className="text-xs text-slate-300 font-light">—</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
