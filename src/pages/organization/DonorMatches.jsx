import React from "react";
import { Phone, MapPin, CheckCircle, MoreHorizontal } from "lucide-react";

// Mock Data
const matches = [
  { id: 1, name: "Sarah Jenkins", blood: "O-", dist: "1.2 km", status: "Available", lastDonation: "3 months ago" },
  { id: 2, name: "Michael Chen", blood: "O-", dist: "3.5 km", status: "Available", lastDonation: "6 months ago" },
  { id: 3, name: "David Ross", blood: "O+", dist: "0.8 km", status: "Coolding Period", lastDonation: "2 weeks ago" }, // Ineligible
  { id: 4, name: "Anita Roy", blood: "A+", dist: "5.0 km", status: "Available", lastDonation: "1 year ago" },
];

const DonorMatches = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-black text-brand-slate-900">Donor Matches</h1>
          <p className="text-brand-slate-500 text-sm">Eligible donors for active requests nearby.</p>
        </div>
        <div className="flex gap-2">
            <select className="bg-white border border-brand-slate-200 text-xs font-bold text-brand-slate-700 rounded-lg px-3 py-2 outline-none">
                <option>Filter by Distance</option>
                <option>Filter by Blood Type</option>
            </select>
        </div>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {matches.map((donor) => (
          <div key={donor.id} className="bg-white rounded-3xl p-6 border border-brand-slate-100 shadow-sm hover:shadow-lg transition-all group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-brand-slate-50 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
           
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-black text-lg shadow-sm ${
                    donor.blood.includes("-") ? "bg-brand-red-600 text-white" : "bg-brand-slate-100 text-brand-slate-900"
                  }`}>
                    {donor.blood}
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-slate-900">{donor.name}</h3>
                    <div className="flex items-center gap-1 text-xs text-brand-slate-500 font-medium">
                      <MapPin size={12} /> {donor.dist} away
                    </div>
                  </div>
                </div>
                <button className="text-brand-slate-300 hover:text-brand-slate-900"><MoreHorizontal size={20} /></button>
              </div>


              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-xs">
                  <span className="text-brand-slate-400 font-bold uppercase tracking-wider">Status</span>
                  <span className={`font-bold ${donor.status === "Available" ? "text-emerald-600" : "text-brand-slate-400"}`}>
                    {donor.status}
                  </span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-brand-slate-400 font-bold uppercase tracking-wider">Last Donated</span>
                  <span className="text-brand-slate-700 font-medium">{donor.lastDonation}</span>
                </div>
              </div>


              <div className="flex gap-3">
                <button className="flex-1 bg-brand-slate-900 text-white py-3 rounded-xl text-xs font-bold hover:bg-brand-red-600 transition-colors flex items-center justify-center gap-2">
                  <Phone size={14} /> Contact
                </button>
                <button className="px-4 py-3 rounded-xl border border-brand-slate-200 text-brand-slate-500 hover:bg-brand-slate-50 hover:text-brand-slate-900 transition-colors">
                  <CheckCircle size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonorMatches