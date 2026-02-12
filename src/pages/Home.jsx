import React, {useState} from 'react'
import Sidebar from '../components/Layout/Sidebar'
import { Outlet } from 'react-router'


function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  return (
   <div className="min-h-screen bg-brand-slate-50 flex">
      {/* Persistent Sidebar with state control */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      <div className="flex-1 md:ml-64 flex flex-col min-h-screen">
        
        <header className="h-16 bg-white border-b border-brand-slate-100 flex justify-between items-center px-6 md:px-8 sticky top-0 z-30 backdrop-blur-md">
          
          {/* Hamburger Menu - Only visible on Mobile */}
          <button 
            onClick={toggleSidebar}
            className="md:hidden w-10 h-10 flex items-center justify-center bg-brand-slate-50 rounded-xl border border-brand-slate-100 text-brand-slate-900"
          >
            <span className="text-xl">☰</span>
          </button>

          {/* Desktop Spacer */}
          <div className="hidden md:block" />

          {/* Top Right User Info */}
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-[10px] font-black uppercase tracking-widest text-brand-red-600">
                User
              </p>
              <p className="text-xs font-bold text-brand-slate-500">
                Alex Pierce
              </p>
            </div>
            <div className="w-10 h-10 rounded-full bg-brand-slate-100 border border-brand-slate-200 flex items-center justify-center text-sm shadow-sm">
              👤
            </div>
          </div>
        </header>

        <main className="p-4 md:p-10 flex-1 overflow-x-hidden">
          <div className="max-w-6xl mx-auto">
             <Outlet />
          </div>
        </main>
      </div>
    </div>
  )
}

export default Home