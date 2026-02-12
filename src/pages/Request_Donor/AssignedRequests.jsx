import React from 'react'
import { RequestCard } from '../../components/common/RequestsComponents';

function AssignedRequests() {
    const mockData = [
    { id: 1, patientName: "Sarah Jenkins", organization: "City General Hospital", bloodType: "O+", quantity: "2", location: "Downtown Medical Center, NY", status: "1/2 Available" },
    { id: 2, patientName: "Mark Thompson", organization: "Red Cross Center", bloodType: "B-", quantity: "4", location: "North Wing Plaza, Suite 40", status: "3/4 Available" },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
      {mockData.map((req) => (
        <RequestCard key={req.id} data={req}>
          <button className="flex-1 bg-brand-slate-900 text-white text-[10px] font-black uppercase tracking-widest py-3 rounded-xl hover:bg-brand-slate-800 transition-all active:scale-95">
            Decline
          </button>
          <button className="flex-[2] bg-brand-red-600 text-white text-[10px] font-black uppercase tracking-widest py-3 rounded-xl hover:shadow-lg hover:shadow-brand-red-600/30 transition-all active:scale-95">
            Accept Request
          </button>
        </RequestCard>
      ))}
    </div>
  )
}

export default AssignedRequests