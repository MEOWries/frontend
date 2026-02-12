import React from 'react';

// Large Stat Card for high-impact numbers
export const StatCard = ({ label, value, colorClass = "text-brand-slate-900" }) => (
  <div className="bg-white/80 backdrop-blur-md border border-white rounded-[2rem] p-6 shadow-glass hover:shadow-xl transition-all animate-fade-in-up">
    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-slate-400 mb-1">{label}</p>
    <h2 className={`text-4xl font-black tracking-tighter ${colorClass}`}>{value}</h2>
  </div>
);

// Progress Circle (Graphical Representation)
export const ImpactChart = ({ stats }) => {
  // Simple calculation for a visual breakdown
  const total = stats.totalRequests || 1;
  const acceptedWidth = (stats.accepted / total) * 100;
  const rejectedWidth = (stats.rejected / total) * 100;

  return (
    <div className="bg-brand-slate-950 rounded-[2.5rem] p-8 text-white shadow-2xl relative overflow-hidden">
      <div className="relative z-10">
        <h3 className="text-xl font-bold mb-6">Activity Distribution</h3>
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-brand-slate-400">
              <span>Accepted vs Total</span>
              <span>{Math.round(acceptedWidth)}%</span>
            </div>
            <div className="h-2 bg-brand-slate-800 rounded-full overflow-hidden">
              <div className="h-full bg-brand-red-600 rounded-full" style={{ width: `${acceptedWidth}%` }}></div>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-brand-slate-400">
              <span>Rejection Rate</span>
              <span>{Math.round(rejectedWidth)}%</span>
            </div>
            <div className="h-2 bg-brand-slate-800 rounded-full overflow-hidden">
              <div className="h-full bg-brand-slate-500 rounded-full" style={{ width: `${rejectedWidth}%` }}></div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 flex gap-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-brand-red-600"></div>
            <span className="text-[10px] font-bold uppercase tracking-widest">Success</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-brand-slate-500"></div>
            <span className="text-[10px] font-bold uppercase tracking-widest">Skipped</span>
          </div>
        </div>
      </div>
      {/* Abstract Background Icon */}
      <div className="absolute -bottom-10 -right-10 text-[12rem] opacity-5 pointer-events-none">📊</div>
    </div>
  );
};