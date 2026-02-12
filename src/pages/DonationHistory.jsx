import React from 'react'
import { HistoryCard } from '../components/common/HistoryElements';

function DonationHistory() {
  // Mock data for completed requests
  const historyData = [
    {
      id: 1,
      patientName: "Robert Fox",
      organization: "St. Mary's Medical Center",
      bloodType: "O+",
      quantity: "1 Unit",
      location: "782 Queens Ave, New York",
      date: "Feb 02, 2026",
    },
    {
      id: 2,
      patientName: "Emily Watson",
      organization: "City Children's Hospital",
      bloodType: "O+",
      quantity: "2 Units",
      location: "101 Pine St, Manhattan",
      date: "Dec 14, 2025",
    },
    {
      id: 3,
      patientName: "Michael Chen",
      organization: "Red Cross Donation Hub",
      bloodType: "O+",
      quantity: "1 Unit",
      location: "Plaza 5, North Wing",
      date: "Oct 21, 2025",
    }
  ];
  return (
    <div className="max-w-4xl mx-auto animate-fade-in">
      {/* Header Section */}
      <header className="mb-12">
        <span className="text-brand-red-600 font-bold text-xs uppercase tracking-[0.3em]">Recognition</span>
        <h1 className="text-4xl font-black text-brand-slate-900 tracking-tighter mt-1">
          Donation <span className="text-brand-red-600">History.</span>
        </h1>
        <p className="text-brand-slate-500 text-sm font-medium mt-2">
          Your contributions have directly impacted {historyData.length} lives.
        </p>
      </header>

      {/* History Timeline */}
      <div className="mt-8">
        {historyData.map((item) => (
          <HistoryCard key={item.id} data={item} />
        ))}
      </div>

      {/* Empty State (Optional) */}
      {historyData.length === 0 && (
        <div className="text-center py-20 bg-white rounded-[2.5rem] border border-dashed border-brand-slate-200">
          <p className="text-brand-slate-400 font-bold uppercase tracking-widest text-xs">No completed donations yet</p>
          <button className="mt-4 text-brand-red-600 font-black text-sm hover:underline">View Live Requests</button>
        </div>
      )}
    </div>
  )
}

export default DonationHistory