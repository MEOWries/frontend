import React, { useState } from "react";
import { Link, useLocation, Outlet } from "react-router"; // or "react-router-dom"
import { Bell, Menu, Search } from "lucide-react";
import Sidebar from "../components/Layout/SidebarAdmin";

export default function OrgLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-brand-slate-50 flex font-sans text-brand-slate-900">
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-brand-slate-900/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} />
      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden h-screen">
        <header className="h-20 border-b border-brand-slate-200 bg-white/50 backdrop-blur-xl flex items-center justify-between px-6 lg:px-10 sticky top-0 z-30 shrink-0">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden p-2 text-brand-slate-500"
          >
            <Menu size={24} />
          </button>

          <div className="hidden md:flex items-center bg-white border border-brand-slate-200 rounded-xl px-4 py-2 w-96 focus-within:ring-2 focus-within:ring-brand-red-600/20 transition-all shadow-sm">
            <Search size={18} className="text-brand-slate-400 mr-3" />
            <input
              type="text"
              placeholder="Search donors, requests, or files..."
              className="bg-transparent border-none outline-none text-sm w-full font-medium placeholder:text-brand-slate-400"
            />
          </div>

          <div className="flex items-center gap-4">
            <div className="relative">
              <Bell
                size={20}
                className="text-brand-slate-500 hover:text-brand-slate-900 cursor-pointer transition-colors"
              />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-brand-red-600 rounded-full border-2 border-white"></span>
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-6 lg:p-10">
          <Outlet />
        </div>
      </main>

      <style>{`
              .bg-brand-slate-50 { background-color: #f8fafc; }
              .bg-brand-slate-900 { background-color: #0f172a; }
              .text-brand-slate-900 { color: #0f172a; }
              .text-brand-slate-500 { color: #64748b; }
              .text-brand-slate-400 { color: #94a3b8; }
              .text-brand-red-600 { color: #b91c1c; }
              .bg-brand-red-600 { background-color: #b91c1c; }
              .bg-brand-red-50 { background-color: #fef2f2; }
              .border-brand-slate-100 { border-color: #f1f5f9; }
              .border-brand-slate-200 { border-color: #e2e8f0; }
             
              @keyframes fadeIn {
                from { opacity: 0; transform: translateY(10px); }
                to { opacity: 1; transform: translateY(0); }
              }
              .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
              .animate-fade-in-up { animation: fadeIn 0.7s ease-out forwards; }
             
              ::-webkit-scrollbar { width: 6px; }
              ::-webkit-scrollbar-track { background: transparent; }
              ::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 3px; }
              ::-webkit-scrollbar-thumb:hover { background: #94a3b8; }
            `}</style>
    </div>
  );
}
