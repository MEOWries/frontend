import React from 'react'
import { RequestCard } from '../../components/common/RequestsComponents';

function AcceptedRequests() {
   const mockData = [
    { 
      id: 3, 
      patientName: "David Miller", 
      organization: "St. Jude Foundation", 
      bloodType: "A+", 
      total: 5, 
      current: 5, // Fully met
      location: "East Side Clinic, Room 302" 
    },
  ];
  return (
    <div className="grid grid-cols-1 gap-6 p-4">
      {mockData.map((req) => (
        <RequestCard key={req.id} data={req} isAcceptedView={true}>
          <button className="w-full bg-brand-slate-100 text-brand-slate-400 text-[10px] font-black uppercase tracking-widest py-3 rounded-xl border border-brand-slate-200 hover:bg-brand-red-50 hover:text-brand-red-600 hover:border-brand-red-200 transition-all active:scale-95 group">
            Cancel Donation
          </button>
        </RequestCard>
      ))}
    </div>
  )
}

export default AcceptedRequests