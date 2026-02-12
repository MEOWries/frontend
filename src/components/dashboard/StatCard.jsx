import React from "react";
import { ArrowUpRight } from "lucide-react";


const StatCard = ({ label, value, sub, color }) => (
  <div className="bg-white p-6 rounded-3xl border border-brand-slate-100 shadow-sm hover:shadow-md transition-all group">
    <div className="flex justify-between items-start mb-4">
      <div className={`p-2 rounded-xl bg-opacity-10 ${color.replace('bg-', 'bg-opacity-10 text-')}`}>
        <div className={`w-2 h-2 rounded-full ${color}`} />
      </div>
      <ArrowUpRight size={18} className="text-brand-slate-300 group-hover:text-brand-slate-900 transition-colors" />
    </div>
    <h3 className="text-3xl font-black text-brand-slate-900 tracking-tight">{value}</h3>
    <p className="text-sm font-bold text-brand-slate-900 mt-1">{label}</p>
    <p className="text-xs text-brand-slate-400 font-medium mt-2">{sub}</p>
  </div>
);

export default StatCard