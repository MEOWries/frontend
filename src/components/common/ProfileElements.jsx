import React from 'react';

// A clean row for data display
export const InfoRow = ({ label, value, icon }) => (
  <div className="flex items-center justify-between py-4 border-b border-brand-slate-50 last:border-0 group">
    <div className="flex items-center gap-3">
      <span className="text-lg opacity-50 group-hover:opacity-100 transition-opacity">{icon}</span>
      <span className="text-[11px] font-black uppercase tracking-widest text-brand-slate-400">{label}</span>
    </div>
    <span className="text-sm font-bold text-brand-slate-900">{value}</span>
  </div>
);

// Large Badge for Eligibility
export const EligibilityBadge = ({ status }) => {
  const isEligible = status === "Eligible";
  return (
    <div className={`px-4 py-2 rounded-2xl border flex items-center gap-2 ${
      isEligible 
      ? 'bg-green-50 border-green-100 text-green-600' 
      : 'bg-brand-red-50 border-brand-red-100 text-brand-red-600'
    }`}>
      <div className={`w-2 h-2 rounded-full animate-pulse ${isEligible ? 'bg-green-500' : 'bg-brand-red-600'}`} />
      <span className="text-xs font-black uppercase tracking-widest">{status}</span>
    </div>
  );
};