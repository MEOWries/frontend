import React from "react";
import { useNavigate } from "react-router";

// Urgency Level Component
export const UrgencyBadge = ({ level }) => {
  const styles = {
    High: "bg-brand-red-600 text-white animate-pulse",
    Medium: "bg-amber-500 text-white",
    Low: "bg-brand-slate-900 text-white",
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-[0.15em] shadow-sm ${styles[level] || styles.Low}`}
    >
      {level} Urgency
    </span>
  );
};

// Notification Item
export const NotificationCard = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div className="bg-white/80 backdrop-blur-md border border-white rounded-3xl p-5 mb-4 shadow-glass hover:shadow-xl transition-all animate-fade-in-up flex items-center gap-5 group">
      {/* Visual Icon Hook */}
      <div
        className={`w-14 h-14 rounded-2xl flex items-center justify-center text-xl shrink-0 transition-transform group-hover:scale-110 ${data.urgency === "High" ? "bg-brand-red-50 text-brand-red-600" : "bg-brand-slate-50 text-brand-slate-400"}`}
      >
        {data.urgency === "High" ? "🚨" : "📩"}
      </div>

      {/* Content Area */}
      <div className="flex-1">
        <div className="flex items-center gap-3 mb-1">
          <h3 className="text-sm font-black text-brand-slate-900 uppercase tracking-tight">
            {data.bloodType} Required
          </h3>
          <UrgencyBadge level={data.urgency} />
        </div>
        <p className="text-xs font-bold text-brand-slate-500">
          <span className="text-brand-slate-900">{data.organization}</span>{" "}
          requested {data.quantity} units
        </p>
        <p className="text-[10px] text-brand-slate-400 mt-1 font-medium italic">
          Sent {data.timeSent}
        </p>
      </div>

      {/* Action Link */}
      <button
        onClick={() => navigate("/donor/requests/assigned")}
        className="hidden md:block px-5 py-2 bg-brand-slate-900 text-white text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-brand-red-600 transition-colors"
      >
        View Details
      </button>
    </div>
  );
};
