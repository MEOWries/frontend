import React from 'react'
import { EligibilityBadge, InfoRow } from '../components/common/ProfileElements';

function Profile() {
  const donorData = {
    fullName: "Alex Pierce",
    email: "alex.pierce@healthmail.com",
    bloodType: "O+",
    eligibility: "Eligible", // or "Ineligible"
    age: 28,
    phone: "+1 (555) 012-3456",
    totalImpact: 120 // 12 donations x 10 points
  };
  return (
    <div className="max-w-2xl mx-auto animate-fade-in">
      {/* Profile Header */}
      <header className="mb-10 text-center">
        <div className="relative inline-block">
          <div className="w-24 h-24 rounded-[2.5rem] bg-brand-slate-900 flex items-center justify-center text-3xl shadow-xl mb-4">
            👤
          </div>
          <div className="absolute -bottom-1 -right-1 bg-brand-red-600 w-8 h-8 rounded-full border-4 border-brand-slate-50 flex items-center justify-center text-[10px]">
             🏆
          </div>
        </div>
        <h1 className="text-3xl font-black text-brand-slate-900 tracking-tighter">{donorData.fullName}</h1>
        <p className="text-brand-slate-500 text-sm font-medium">Donor ID: #BD-99210</p>
      </header>

      <div className="space-y-6">
        {/* Impact Points Summary Card */}
        <div className="bg-brand-red-600 rounded-4xl p-6 text-white flex justify-between items-center shadow-lg shadow-brand-red-600/20">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-70">Total Donor Rank</p>
            <h3 className="text-2xl font-black">Life Saver Gold</h3>
          </div>
          <div className="text-right">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-70">Impact Points</p>
            <h3 className="text-2xl font-black">{donorData.totalImpact} PTS</h3>
          </div>
        </div>

        {/* Core Information Card */}
        <div className="bg-white/80 backdrop-blur-md border border-white rounded-[2.5rem] p-8 shadow-glass">
          <div className="flex justify-between items-center mb-6 pb-6 border-b border-brand-slate-50">
            <h3 className="text-lg font-black text-brand-slate-900">Personal Details</h3>
            <EligibilityBadge status={donorData.eligibility} />
          </div>

          <div className="space-y-1">
            <InfoRow label="Email Address" value={donorData.email} icon="✉️" />
            <InfoRow label="Mobile Number" value={donorData.phone} icon="📞" />
            <InfoRow label="Age" value={`${donorData.age} Years`} icon="🎂" />
            <InfoRow label="Blood Type" value={donorData.bloodType} icon="🩸" />
          </div>
          
          <div className="mt-8 pt-6">
            <button className="w-full bg-brand-slate-50 text-brand-slate-900 font-black text-[10px] uppercase tracking-widest py-4 rounded-2xl hover:bg-brand-slate-100 transition-all active:scale-[0.98]">
              Edit Profile Information
            </button>
          </div>
        </div>

        
      </div>
    </div>
  )
}

export default Profile