import React from 'react';
import { Outlet } from 'react-router-dom';
import { RequestTabs } from '../../components/common/RequestsComponents';

function Requests() {
  return (
    <div className="min-h-screen bg-brand-slate-50 p-6 md:p-12 bg-[radial-gradient(circle_at_bottom_left,var(--color-brand-red-100)_0%,transparent_30%)]">
      <div className="max-w-5xl mx-auto">
        
        {/* Header Section */}
        <header className="text-center mb-12 animate-fade-in">
          <span className="text-brand-red-600 font-bold text-xs uppercase tracking-[0.3em]">Live Feed</span>
          <h1 className="text-5xl font-black text-brand-slate-900 mt-2 tracking-tighter">Blood <span className="text-brand-red-600">Requests.</span></h1>
          <p className="text-brand-slate-500 text-sm mt-3 font-medium">Your donation makes an immediate impact today.</p>
        </header>

        {/* Tab Selection */}
        <RequestTabs />

        {/* Dynamic Route Content */}
        <main className="animate-fade-in">
          <Outlet />
        </main>

      </div>
    </div>
  )
}

export default Requests