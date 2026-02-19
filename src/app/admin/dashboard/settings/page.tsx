"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { dt } from "@/lib/dashboard-i18n";

export default function SettingsPage() {
  const { language } = useLanguage();
  const T  = dt[language];
  const S  = T.settings;

  const [practiceName,    setPracticeName]    = useState("Ordination Dr. Sang");
  const [googleUrl,       setGoogleUrl]       = useState("https://g.page/r/...");
  const [contactEmail,    setContactEmail]    = useState("sang@ordination-laaben.at");
  const [delay,           setDelay]           = useState("2");
  const [autoSend,        setAutoSend]        = useState(false);
  const [requireApproval, setRequireApproval] = useState(true);
  const [showTemplate,    setShowTemplate]    = useState(false);
  const [saved,           setSaved]           = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="max-w-2xl space-y-8">
      {/* Toast */}
      {saved && (
        <div className="bg-emerald-50 border border-emerald-200 px-6 py-3 flex items-center gap-3">
          <span className="material-symbols-outlined text-[18px] text-emerald-600">check_circle</span>
          <p className="text-sm text-emerald-700 font-medium">{S.savedToast}</p>
        </div>
      )}

      {/* Practice info */}
      <div className="bg-white border border-black/[0.05]">
        <div className="px-6 py-5 border-b border-black/[0.05]">
          <h2 className="text-sm font-medium text-slate-800">{S.practiceTitle}</h2>
        </div>
        <div className="px-6 py-6 space-y-5">
          <div>
            <label className="block text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-2">{S.practiceNameLabel}</label>
            <input type="text" value={practiceName} onChange={(e) => setPracticeName(e.target.value)}
              className="w-full px-4 py-2.5 text-sm font-light border border-black/[0.08] bg-white focus:outline-none focus:border-primary/40 transition-colors rounded-none" />
          </div>
          <div>
            <label className="block text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-2">{S.googleUrlLabel}</label>
            <input type="url" value={googleUrl} onChange={(e) => setGoogleUrl(e.target.value)}
              className="w-full px-4 py-2.5 text-sm font-light border border-black/[0.08] bg-white focus:outline-none focus:border-primary/40 transition-colors rounded-none" />
            <p className="text-xs text-slate-400 font-light mt-1.5">{S.googleUrlHint}</p>
          </div>
          <div>
            <label className="block text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-2">{S.emailLabel}</label>
            <input type="email" value={contactEmail} onChange={(e) => setContactEmail(e.target.value)}
              className="w-full px-4 py-2.5 text-sm font-light border border-black/[0.08] bg-white focus:outline-none focus:border-primary/40 transition-colors rounded-none" />
          </div>
        </div>
      </div>

      {/* Automation */}
      <div className="bg-white border border-black/[0.05]">
        <div className="px-6 py-5 border-b border-black/[0.05]">
          <h2 className="text-sm font-medium text-slate-800">{S.automationTitle}</h2>
        </div>
        <div className="px-6 py-6 space-y-6">
          <div>
            <label className="block text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-3">{S.delayLabel}</label>
            <div className="flex flex-wrap gap-3">
              {S.delayOptions.map((opt) => (
                <label key={opt.value}
                  className={`flex items-center gap-2.5 px-4 py-2.5 border cursor-pointer transition-colors text-sm font-light ${
                    delay === opt.value ? "border-primary/30 bg-primary/[0.03] text-slate-800" : "border-black/[0.08] hover:bg-black/[0.02] text-slate-600"
                  }`}>
                  <input type="radio" name="delay" value={opt.value} checked={delay === opt.value}
                    onChange={() => setDelay(opt.value)} className="accent-primary" />
                  {opt.label}
                </label>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <label className="flex items-start gap-3 cursor-pointer group">
              <input type="checkbox" checked={autoSend} onChange={(e) => setAutoSend(e.target.checked)} className="mt-0.5 accent-primary" />
              <div>
                <p className="text-sm font-light text-slate-700 group-hover:text-slate-900 transition-colors">{S.autoSendLabel}</p>
                <p className="text-xs text-slate-400 font-light mt-0.5">{S.autoSendHint}</p>
              </div>
            </label>
            <label className="flex items-start gap-3 cursor-pointer group">
              <input type="checkbox" checked={requireApproval} onChange={(e) => setRequireApproval(e.target.checked)} className="mt-0.5 accent-primary" />
              <div>
                <p className="text-sm font-light text-slate-700 group-hover:text-slate-900 transition-colors">{S.approvalLabel}</p>
                <p className="text-xs text-slate-400 font-light mt-0.5">{S.approvalHint}</p>
              </div>
            </label>
          </div>
        </div>
      </div>

      {/* Email template */}
      <div className="bg-white border border-black/[0.05]">
        <div className="px-6 py-5 border-b border-black/[0.05] flex items-center justify-between">
          <h2 className="text-sm font-medium text-slate-800">{S.templateTitle}</h2>
          <button onClick={() => setShowTemplate((v) => !v)}
            className="text-[10px] uppercase tracking-[0.15em] font-bold text-primary hover:opacity-70 transition-opacity">
            {showTemplate ? S.templateHide : S.templateShow}
          </button>
        </div>
        {showTemplate ? (
          <div className="px-6 py-6">
            <pre className="text-xs font-light text-slate-600 leading-relaxed whitespace-pre-wrap bg-black/[0.02] border border-black/[0.04] p-5">
              {S.emailTemplate}
            </pre>
            <p className="text-xs text-slate-400 font-light mt-3">{S.templateVarsHint}</p>
          </div>
        ) : (
          <div className="px-6 py-4">
            <p className="text-xs text-slate-400 font-light">{S.templateActive}</p>
          </div>
        )}
      </div>

      {/* Save */}
      <div className="flex justify-end">
        <button onClick={handleSave}
          className="bg-primary text-white text-[10px] uppercase tracking-[0.2em] font-bold px-8 py-4 rounded-none hover:opacity-90 transition-opacity">
          {S.saveBtn}
        </button>
      </div>
    </div>
  );
}
