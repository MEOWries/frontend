import React from "react";

// Compact Input Field
export const Input = ({ label, ...props }) => (
  <div className="mb-3">
    <label className="block text-[11px] uppercase tracking-wider font-semibold text-brand-slate-500 mb-1">
      {label}
    </label>
    <input
      className="w-full px-3 py-2 text-sm rounded-md border border-brand-slate-500/20 focus:ring-1 focus:ring-brand-red-600 outline-none transition-all"
      {...props}
    />
  </div>
);

// Selection Grid for Questions
export const ChoiceButton = ({ label, active, onClick, danger = false }) => (
  <button
    type="button"
    onClick={onClick}
    className={`flex-1 py-2 text-sm font-semibold rounded-md border transition-all ${
      active
        ? danger
          ? "bg-brand-red-600 border-brand-red-600 text-white"
          : "bg-brand-slate-900 border-brand-slate-900 text-white"
        : "bg-white border-brand-slate-200 text-brand-slate-900 hover:bg-brand-slate-50"
    }`}
  >
    {label}
  </button>
);

// Disclaimer Alert
export const Disclaimer = ({ message }) => (
  <div className="bg-brand-red-100 border-l-4 border-brand-red-600 p-3 my-4 animate-fade-in">
    <p className="text-xs text-brand-red-700 font-medium leading-relaxed">
      {message}
    </p>
  </div>
);
export const Card = ({ children, className = "" }) => (
  <div
    className={`bg-white border border-brand-slate-100 shadow-2xl rounded-3xl overflow-hidden ${className}`}
  >
    {children}
  </div>
);

export const StepLabel = ({ step, title }) => (
  <div className="flex items-center gap-2 mb-6">
    <span className="bg-brand-red-100 text-brand-red-600 text-xs font-bold px-2 py-1 rounded-md">
      STEP {step}
    </span>
    <h3 className="text-brand-slate-900 font-bold text-lg">{title}</h3>
  </div>
);

export const ModernInput = ({ label, icon, ...props }) => (
  <div className="group">
    <label className="block text-[10px] uppercase tracking-widest font-bold text-brand-slate-400 mb-2 group-focus-within:text-brand-red-600 transition-colors">
      {label}
    </label>
    <div className="relative">
      <input
        className="w-full bg-brand-slate-50 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-brand-red-600/20 outline-none transition-all"
        {...props}
      />
    </div>
  </div>
);
