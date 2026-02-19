"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { dt } from "@/lib/dashboard-i18n";
import { mockReviewRequests, thisWeekRequests, formatDate, type RequestStatus } from "@/lib/mock-data";

const statusColors: Record<RequestStatus, string> = {
  pending:  "bg-amber-50 text-amber-700",
  sent:     "bg-blue-50 text-blue-700",
  opened:   "bg-violet-50 text-violet-700",
  reviewed: "bg-emerald-50 text-emerald-700",
};

function groupBySendDate(requests: typeof mockReviewRequests) {
  const groups: Record<string, typeof mockReviewRequests> = {};
  requests.forEach((r) => {
    if (!groups[r.sendDate]) groups[r.sendDate] = [];
    groups[r.sendDate].push(r);
  });
  return Object.entries(groups).sort(([a], [b]) => a.localeCompare(b));
}

export default function NewPatientsPage() {
  const { language } = useLanguage();
  const T  = dt[language];
  const NP = T.newPatients;

  const [isDragging, setIsDragging] = useState(false);
  const [uploaded,   setUploaded]   = useState(false);
  const [selected,   setSelected]   = useState<Set<string>>(new Set());
  const [sent,       setSent]       = useState(false);

  const pending    = thisWeekRequests.filter((r) => r.status === "pending");
  const schedule   = groupBySendDate(thisWeekRequests);

  const toggleAll = () =>
    setSelected(selected.size === pending.length ? new Set() : new Set(pending.map((r) => r.id)));
  const toggleOne = (id: string) => {
    const next = new Set(selected);
    next.has(id) ? next.delete(id) : next.add(id);
    setSelected(next);
  };
  const handleSend = () => {
    setSent(true);
    setTimeout(() => setSent(false), 3500);
    setSelected(new Set());
  };

  const dayLabel = (iso: string) => {
    const today    = "2026-02-18";
    const tomorrow = "2026-02-19";
    if (iso === today)    return NP.today;
    if (iso === tomorrow) return NP.tomorrow;
    const [, , d] = iso.split("-");
    return `${NP.days[new Date(iso).getDay()]}, ${d}.02.`;
  };

  return (
    <div className="max-w-5xl space-y-8">
      {/* CSV upload */}
      <div className="bg-white border border-black/[0.05]">
        <div className="px-6 py-5 border-b border-black/[0.05]">
          <h2 className="text-sm font-medium text-slate-800">{NP.uploadTitle}</h2>
          <p className="text-xs text-slate-400 font-light mt-0.5">{NP.uploadSub}</p>
        </div>
        <div className="p-6">
          <div
            onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
            onDragLeave={() => setIsDragging(false)}
            onDrop={(e) => { e.preventDefault(); setIsDragging(false); setUploaded(true); }}
            className={`border-2 border-dashed transition-colors duration-200 p-10 text-center cursor-pointer ${
              isDragging ? "border-primary/40 bg-primary/[0.02]" : "border-black/[0.08] hover:border-primary/20 hover:bg-black/[0.01]"
            }`}
          >
            <span className="material-symbols-outlined text-3xl text-slate-300 block mb-3">upload_file</span>
            <p className="text-sm text-slate-500 font-light mb-1">
              {NP.dropLabel}{" "}
              <label className="text-primary cursor-pointer hover:underline">
                {NP.browseLabel}
                <input type="file" accept=".csv" className="hidden" onChange={() => setUploaded(true)} />
              </label>
            </p>
            <p className="text-xs text-slate-400 font-light">{NP.columns}</p>
          </div>
          <div className="flex items-center justify-between mt-3">
            <p className="text-xs text-slate-400 font-light">{NP.lastUpload}</p>
            {uploaded && (
              <p className="text-xs text-emerald-600 font-medium flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">check_circle</span>
                {NP.uploadSuccess}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Send toast */}
      {sent && (
        <div className="bg-emerald-50 border border-emerald-200 px-6 py-3 flex items-center gap-3">
          <span className="material-symbols-outlined text-[18px] text-emerald-600">check_circle</span>
          <p className="text-sm text-emerald-700 font-medium">{NP.sentToast}</p>
        </div>
      )}

      {/* This week's table */}
      <div className="bg-white border border-black/[0.05]">
        <div className="px-6 py-5 border-b border-black/[0.05] flex items-center justify-between flex-wrap gap-3">
          <div>
            <h2 className="text-sm font-medium text-slate-800">{NP.tableTitle}</h2>
            <p className="text-xs text-slate-400 font-light mt-0.5">{NP.tableSub}</p>
          </div>
          <div className="flex gap-2">
            <button onClick={() => setSelected(new Set(pending.map((r) => r.id)))}
              className="border border-black/[0.08] text-[10px] uppercase tracking-[0.15em] font-bold px-4 py-2.5 rounded-none hover:bg-black/[0.02] transition-colors text-slate-600">
              {NP.selectAllBtn}
            </button>
            <button onClick={handleSend} disabled={selected.size === 0}
              className="bg-primary text-white text-[10px] uppercase tracking-[0.2em] font-bold px-5 py-2.5 rounded-none hover:opacity-90 transition-opacity disabled:opacity-30 flex items-center gap-2">
              <span className="material-symbols-outlined text-[14px]">send</span>
              {NP.sendBtn(selected.size)}
            </button>
          </div>
        </div>

        <table className="w-full">
          <thead>
            <tr className="border-b border-black/[0.03]">
              <th className="px-6 py-3 text-left w-10">
                <input type="checkbox" checked={selected.size === pending.length && pending.length > 0} onChange={toggleAll} className="accent-primary" />
              </th>
              <th className="text-[9px] uppercase tracking-widest text-slate-400 font-bold text-left px-6 py-3">{NP.colPatient}</th>
              <th className="text-[9px] uppercase tracking-widest text-slate-400 font-bold text-left px-6 py-3 hidden sm:table-cell">{NP.colAppointment}</th>
              <th className="text-[9px] uppercase tracking-widest text-slate-400 font-bold text-left px-6 py-3 hidden sm:table-cell">{NP.colSendDate}</th>
              <th className="text-[9px] uppercase tracking-widest text-slate-400 font-bold text-left px-6 py-3">{NP.colStatus}</th>
            </tr>
          </thead>
          <tbody>
            {thisWeekRequests.map((req) => {
              const isReady = req.status === "pending";
              return (
                <tr key={req.id} className="border-b border-black/[0.03] hover:bg-black/[0.01] transition-colors">
                  <td className="px-6 py-3">
                    {isReady && <input type="checkbox" checked={selected.has(req.id)} onChange={() => toggleOne(req.id)} className="accent-primary" />}
                  </td>
                  <td className="px-6 py-3">
                    <p className="text-sm text-slate-800 font-light">{req.patientName}</p>
                    <p className="text-xs text-slate-400 font-light">{req.email}</p>
                  </td>
                  <td className="px-6 py-3 text-sm text-slate-500 font-light hidden sm:table-cell">{formatDate(req.appointmentDate)}</td>
                  <td className="px-6 py-3 text-sm text-slate-500 font-light hidden sm:table-cell">{formatDate(req.sendDate)}</td>
                  <td className="px-6 py-3">
                    <span className={`text-[9px] uppercase tracking-widest font-bold px-2 py-1 ${statusColors[req.status]}`}>
                      {req.status === "pending" ? T.newPatients.selectAllBtn.split(" ")[0] !== "Select" ? T.status.ready : T.status.ready : T.status[req.status as keyof typeof T.status]}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Sending schedule */}
      <div className="bg-white border border-black/[0.05]">
        <div className="px-6 py-5 border-b border-black/[0.05]">
          <h2 className="text-sm font-medium text-slate-800">{NP.scheduleTitle}</h2>
          <p className="text-xs text-slate-400 font-light mt-0.5">{NP.scheduleSub}</p>
        </div>
        <div className="divide-y divide-black/[0.03]">
          {schedule.map(([sendDate, requests]) => (
            <div key={sendDate} className="px-6 py-4 flex items-start gap-6">
              <div className="w-24 flex-shrink-0">
                <p className="text-xs font-medium text-slate-700">{dayLabel(sendDate)}</p>
                <p className="text-[10px] text-slate-400 font-light">{formatDate(sendDate)}</p>
              </div>
              <div className="flex-1 flex flex-wrap gap-2">
                {requests.map((r) => (
                  <span key={r.id} className="text-xs font-light text-slate-600 bg-black/[0.03] px-3 py-1">{r.patientName}</span>
                ))}
              </div>
              <div className="flex-shrink-0">
                <span className="text-[9px] uppercase tracking-widest text-slate-400 font-bold">{NP.patients(requests.length)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
