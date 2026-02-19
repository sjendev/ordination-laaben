"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { dt } from "@/lib/dashboard-i18n";
import { mockPatients, formatDate, type PatientStatus } from "@/lib/mock-data";

const statusColors: Record<PatientStatus, string> = {
  active:   "bg-emerald-50 text-emerald-700",
  inactive: "bg-slate-100 text-slate-500",
};

const PAGE_SIZE = 10;

export default function AllPatientsPage() {
  const { language } = useLanguage();
  const T = dt[language];
  const P = T.patients;

  const [search,   setSearch]   = useState("");
  const [page,     setPage]     = useState(1);
  const [selected, setSelected] = useState<Set<string>>(new Set());

  const filtered = mockPatients.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.email.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paged      = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const toggleAll = () => {
    setSelected(selected.size === paged.length ? new Set() : new Set(paged.map((p) => p.id)));
  };
  const toggleOne = (id: string) => {
    const next = new Set(selected);
    next.has(id) ? next.delete(id) : next.add(id);
    setSelected(next);
  };

  return (
    <div className="max-w-5xl space-y-6">
      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-3">
        <div className="relative flex-1 min-w-[200px]">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[16px] text-slate-400">search</span>
          <input
            type="text"
            placeholder={P.searchPlaceholder}
            value={search}
            onChange={(e) => { setSearch(e.target.value); setPage(1); }}
            className="w-full pl-9 pr-4 py-2.5 text-sm font-light border border-black/[0.08] bg-white focus:outline-none focus:border-primary/40 transition-colors"
          />
        </div>
        <button className="border border-black/[0.08] bg-white text-[10px] uppercase tracking-[0.15em] font-bold px-5 py-2.5 rounded-none hover:bg-black/[0.02] transition-colors flex items-center gap-2 text-slate-600">
          <span className="material-symbols-outlined text-[15px]">person_add</span>
          {P.addBtn}
        </button>
        <button className="border border-black/[0.08] bg-white text-[10px] uppercase tracking-[0.15em] font-bold px-5 py-2.5 rounded-none hover:bg-black/[0.02] transition-colors flex items-center gap-2 text-slate-600">
          <span className="material-symbols-outlined text-[15px]">upload_file</span>
          {P.importBtn}
        </button>
      </div>

      {/* Selection banner */}
      {selected.size > 0 && (
        <div className="bg-primary/5 border border-primary/20 px-6 py-3 flex items-center justify-between">
          <p className="text-xs text-primary font-medium">{P.selectedBanner(selected.size)}</p>
          <button className="bg-primary text-white text-[10px] uppercase tracking-[0.2em] font-bold px-5 py-2.5 rounded-none hover:opacity-90 transition-opacity">
            {P.sendBtn}
          </button>
        </div>
      )}

      {/* Table */}
      <div className="bg-white border border-black/[0.05]">
        <table className="w-full">
          <thead>
            <tr className="border-b border-black/[0.05]">
              <th className="px-6 py-3 text-left w-10">
                <input type="checkbox" checked={selected.size === paged.length && paged.length > 0} onChange={toggleAll} className="accent-primary" />
              </th>
              <th className="text-[9px] uppercase tracking-widest text-slate-400 font-bold text-left px-6 py-3">{P.colName}</th>
              <th className="text-[9px] uppercase tracking-widest text-slate-400 font-bold text-left px-6 py-3 hidden md:table-cell">{P.colEmail}</th>
              <th className="text-[9px] uppercase tracking-widest text-slate-400 font-bold text-left px-6 py-3 hidden sm:table-cell">{P.colLastVisit}</th>
              <th className="text-[9px] uppercase tracking-widest text-slate-400 font-bold text-left px-6 py-3">{P.colStatus}</th>
            </tr>
          </thead>
          <tbody>
            {paged.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-6 py-12 text-center">
                  <span className="material-symbols-outlined text-4xl text-slate-300 block mb-3">search_off</span>
                  <p className="text-sm text-slate-400 font-light">{P.empty}</p>
                </td>
              </tr>
            ) : (
              paged.map((patient) => (
                <tr key={patient.id} className="border-b border-black/[0.03] hover:bg-black/[0.01] transition-colors">
                  <td className="px-6 py-3">
                    <input type="checkbox" checked={selected.has(patient.id)} onChange={() => toggleOne(patient.id)} className="accent-primary" />
                  </td>
                  <td className="px-6 py-3 text-sm text-slate-800 font-light">{patient.name}</td>
                  <td className="px-6 py-3 text-sm text-slate-500 font-light hidden md:table-cell">{patient.email}</td>
                  <td className="px-6 py-3 text-sm text-slate-500 font-light hidden sm:table-cell">{formatDate(patient.lastVisit)}</td>
                  <td className="px-6 py-3">
                    <span className={`text-[9px] uppercase tracking-widest font-bold px-2 py-1 ${statusColors[patient.status]}`}>
                      {T.status[patient.status]}
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="px-6 py-4 border-t border-black/[0.05] flex items-center justify-between">
            <p className="text-xs text-slate-400 font-light">{P.pagination(filtered.length, page, totalPages)}</p>
            <div className="flex gap-2">
              <button onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page === 1}
                className="border border-black/[0.08] text-[10px] uppercase tracking-[0.15em] font-bold px-4 py-2 disabled:opacity-30 hover:bg-black/[0.02] transition-colors text-slate-600">
                {P.prev}
              </button>
              <button onClick={() => setPage((p) => Math.min(totalPages, p + 1))} disabled={page === totalPages}
                className="border border-black/[0.08] text-[10px] uppercase tracking-[0.15em] font-bold px-4 py-2 disabled:opacity-30 hover:bg-black/[0.02] transition-colors text-slate-600">
                {P.next}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
