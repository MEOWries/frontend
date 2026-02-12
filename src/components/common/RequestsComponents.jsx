import React from "react";
import { Link, useLocation } from "react-router-dom";

// Modern Pill Tab Navigation
export const RequestTabs = () => {
  const location = useLocation();
  const tabs = [
    { name: "Requests", path: "/requests/assigned" },
    { name: "Accepted", path: "/requests/accepted" },
  ];

  return (
    <div className="flex bg-brand-slate-100 p-1.5 rounded-2xl w-fit mx-auto mb-8 shadow-inner">
      {tabs.map((tab) => {
        const isActive = location.pathname === tab.path;
        return (
          <Link
            key={tab.path}
            to={tab.path}
            className={`px-8 py-2.5 text-xs font-black uppercase tracking-widest rounded-xl transition-all duration-300 ${
              isActive
                ? "bg-white text-brand-red-600 shadow-sm scale-100"
                : "text-brand-slate-500 hover:text-brand-slate-900 scale-95"
            }`}
          >
            {tab.name}
          </Link>
        );
      })}
    </div>
  );
};

// The Request Card Base
export const RequestCard = ({ data, children }) => (
  <div className="bg-white/80 backdrop-blur-md border border-white rounded-[2rem] p-6 shadow-glass animate-fade-in-up hover:shadow-xl transition-shadow group">
    <div className="flex justify-between items-start mb-4">
      <div>
        <span className="text-brand-red-600 font-black text-[10px] uppercase tracking-widest bg-brand-red-100 px-2 py-1 rounded-md">
          {data.bloodType} Required
        </span>
        <h3 className="text-xl font-black text-brand-slate-900 mt-2">
          {data.patientName}
        </h3>
        <p className="text-xs font-bold text-brand-slate-500 uppercase tracking-tight">
          {data.organization}
        </p>
      </div>
      <div className="text-right">
        <div className="text-2xl font-black text-brand-slate-900">
          {data.quantity}
        </div>
        <div className="text-[10px] font-bold text-brand-slate-400 uppercase">
          Units
        </div>
      </div>
    </div>

    <div className="space-y-3 border-t border-brand-slate-100 pt-4 mb-6">
      <div className="flex items-center gap-2 text-brand-slate-600">
        <span className="text-sm">📍 {data.location}</span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-[11px] font-bold text-brand-slate-400 uppercase tracking-widest">
          Progress
        </span>
        <span className="text-xs font-black text-brand-red-600">
          {data.status}
        </span>
      </div>
      <div className="w-full h-1.5 bg-brand-slate-100 rounded-full overflow-hidden">
        <div
          className="h-full bg-brand-red-600 rounded-full"
          style={{ width: "75%" }}
        ></div>
      </div>
    </div>

    <div className="flex gap-3 mt-auto">{children}</div>
  </div>
);
