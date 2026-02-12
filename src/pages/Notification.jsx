import React from 'react'
import { NotificationCard } from '../components/common/NotificationElements';

function Notification() {
  const notificationList = [
    {
      id: 1,
      bloodType: "O+",
      organization: "General City Hospital",
      urgency: "High",
      quantity: "3",
      timeSent: "2 mins ago"
    },
    {
      id: 2,
      bloodType: "O+",
      organization: "St. Lukes Clinic",
      urgency: "Medium",
      quantity: "1",
      timeSent: "45 mins ago"
    },
    {
      id: 3,
      bloodType: "B-", // Even if not donor type, might show for awareness
      organization: "Red Cross Plaza",
      urgency: "Low",
      quantity: "5",
      timeSent: "3 hours ago"
    }
  ];
  return (
    <div className="max-w-3xl mx-auto animate-fade-in">
      <header className="mb-10 flex justify-between items-end">
        <div>
          <span className="text-brand-red-600 font-bold text-xs uppercase tracking-[0.3em]">Inbox</span>
          <h1 className="text-4xl font-black text-brand-slate-900 tracking-tighter mt-1">
            Notifications<span className="text-brand-red-600">.</span>
          </h1>
        </div>
        <button className="text-[10px] font-black uppercase tracking-widest text-brand-slate-400 hover:text-brand-red-600 transition-colors mb-2">
          Mark all as read
        </button>
      </header>

      <div className="space-y-2">
        {notificationList.map((notif) => (
          <NotificationCard key={notif.id} data={notif} />
        ))}
      </div>

      {/* Footer / Settings Shortcut */}
      <div className="mt-12 p-8 bg-brand-slate-900 rounded-[2.5rem] text-center relative overflow-hidden">
        <div className="relative z-10">
          <p className="text-white text-[10px] font-black uppercase tracking-[0.2em] mb-2">Preferences</p>
          <h3 className="text-white font-bold text-sm">Want to customize these alerts?</h3>
          <button className="mt-4 px-8 py-3 bg-white text-brand-slate-900 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-brand-red-600 hover:text-white transition-all active:scale-95">
            Notification Settings
          </button>
        </div>
        <div className="absolute top-0 right-0 p-4 opacity-5 text-8xl">🔔</div>
      </div>
    </div>
  )
}

export default Notification