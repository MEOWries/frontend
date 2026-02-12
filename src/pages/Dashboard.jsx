import React from "react";
import { ImpactChart, StatCard } from "../components/common/DashboardElements";
import { useNavigate } from "react-router";

function Dashboard() {
  // Mock data representing the donor's journey
  const donorStats = {
    name: "Alex Pierce",
    totalRequests: 24,
    accepted: 12,
    completed: 8,
    rejected: 4,
  };

  const navigate = useNavigate();
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Welcome Header */}
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="text-brand-red-600 font-bold text-xs uppercase tracking-[0.3em]">
            Overview
          </span>
          <h1 className="text-4xl font-black text-brand-slate-900 tracking-tighter mt-1">
            Hello,{" "}
            <span className="text-brand-red-600">
              {donorStats.name.split(" ")[0]}
            </span>
          </h1>
          <p className="text-brand-slate-500 text-sm font-medium">
            Here is your life-saving impact summary.
          </p>
        </div>
        <div className="bg-white px-4 py-2 rounded-2xl border border-brand-slate-100 shadow-sm">
          <p className="text-[10px] font-bold text-brand-slate-400 uppercase tracking-widest">
            Next Eligibility
          </p>
          <p className="text-sm font-black text-brand-slate-900">
            14 March 2026
          </p>
        </div>
      </header>

      {/* Numerical Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        <StatCard label="Total Requests" value={donorStats.totalRequests} />
        <StatCard
          label="Accepted"
          value={donorStats.accepted}
          colorClass="text-brand-red-600"
        />
        <StatCard label="Completed" value={donorStats.completed} />
        <StatCard
          label="Rejected"
          value={donorStats.rejected}
          colorClass="text-brand-slate-400"
        />
      </div>

      {/* Graphical & Summary Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* The Graphic Representation */}
        <div className="lg:col-span-2">
          <ImpactChart stats={donorStats} />
        </div>

        {/* Quick Action / Mini Status Card */}
        <div className="bg-brand-red-600 rounded-[2.5rem] p-8 text-white flex flex-col justify-between shadow-xl shadow-brand-red-600/20 relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-xl font-bold mb-2">Ready to Help?</h3>
            <p className="text-brand-red-100 text-xs leading-relaxed opacity-80">
              There are currently 4 urgent blood requests matching your type in
              your area.
            </p>
          </div>
          
            <button onClick={()=>navigate("/home/requests/assigned")} className="relative z-10 mt-6 bg-white text-brand-red-600 font-black text-[10px] uppercase tracking-widest py-4 rounded-2xl hover:bg-brand-red-50 transition-all active:scale-95 shadow-lg">
              View Live Requests
            </button>
          <div className="absolute top-0 right-0 p-4 text-6xl opacity-20">
            🩸
          </div>
        </div>
      </div>

      {/* Bottom Row - Subtle motivation text */}
      <footer className="text-center py-4">
        <p className="text-xs font-bold text-brand-slate-300 uppercase tracking-[0.5em]">
          Your blood type <span className="text-brand-red-600">O+</span> is in
          high demand
        </p>
      </footer>
    </div>
  );
}

export default Dashboard;
