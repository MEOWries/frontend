import React from 'react'
import { RequestCard } from '../../components/common/RequestsComponents';

function AssignedRequests() {
    const mockData = [
    { 
      id: 1, 
      patientName: "Sarah Jenkins", 
      organization: "City General Hospital", 
      bloodType: "O+", 
      total: 4, 
      current: 3, // 3 out of 4 available
      location: "Downtown Medical Center, NY" 
    },
    { 
      id: 2, 
      patientName: "Mark Thompson", 
      organization: "Red Cross Center", 
      bloodType: "B-", 
      total: 10, 
      current: 2, // 2 out of 10 available
      location: "North Wing Plaza, Suite 40" 
    },
  ];
  return (
    <div className="grid grid-cols-1 gap-6 p-4">
      {mockData.map((req) => (
        <RequestCard key={req.id} data={req} isAcceptedView={false}>
          <button className="flex-1 bg-brand-slate-900 text-white text-[10px] font-black uppercase tracking-widest py-3 rounded-xl hover:bg-brand-slate-800 transition-all active:scale-95">
            Decline
          </button>
          <button className="flex-2 bg-brand-red-600 text-white text-[10px] font-black uppercase tracking-widest py-3 rounded-xl hover:shadow-lg hover:shadow-brand-red-600/30 transition-all active:scale-95">
            Accept Request
          </button>
        </RequestCard>
      ))}
    </div>
  )
}

export default AssignedRequests