import React from "react";

// Status Badge for Completed Donations
export const CompletedBadge = () => (
  <div className="flex items-center gap-1.5 bg-green-50 text-green-600 px-3 py-1 rounded-full border border-green-100">
    <div className="w-1.5 h-1.5 bg-green-600 rounded-full animate-pulse" />
    <span className="text-[10px] font-black uppercase tracking-widest">
      Completed
    </span>
  </div>
);

// Timeline Item Wrapper
export const HistoryCard = ({ data }) => (
  <div className="relative pl-8 pb-10 group">
    {/* The Timeline Line */}
    <div className="absolute left-[11px] top-0 bottom-0 w-px bg-brand-slate-200 group-last:bg-transparent" />

    {/* The Timeline Dot */}
    <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-white border-4 border-brand-red-600 shadow-sm z-10" />

    <div className="bg-white border border-brand-slate-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all animate-fade-in-up">
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <CompletedBadge />
            <span className="text-[10px] font-bold text-brand-slate-400 uppercase tracking-widest">
              Donated on: {data.date}
            </span>
          </div>
          <h3 className="text-xl font-black text-brand-slate-900 tracking-tight">
            {data.patientName}
          </h3>
          <p className="text-xs font-bold text-brand-slate-500 uppercase tracking-tight">
            {data.organization}
          </p>
        </div>

        <div className="flex items-center gap-6">
          <div className="text-center">
            <p className="text-[10px] font-bold text-brand-slate-400 uppercase tracking-widest">
              Units
            </p>
            <p className="text-lg font-black text-brand-slate-900">
              {data.quantity}
            </p>
          </div>
          <div className="text-center">
            <p className="text-[10px] font-bold text-brand-slate-400 uppercase tracking-widest">
              Type
            </p>
            <p className="text-lg font-black text-brand-red-600">
              {data.bloodType}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-brand-slate-50 flex flex-col md:flex-row md:items-center justify-between gap-2">
        <span className="text-xs text-brand-slate-500">📍 {data.location}</span>
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-black uppercase tracking-widest text-brand-red-600">
            +10 Impact Points
          </span>
          <div className="w-4 h-4 rounded-full bg-brand-red-100 flex items-center justify-center text-[8px]">
            🏆
          </div>
        </div>
      </div>
    </div>
  </div>
);
