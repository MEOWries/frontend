import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  PlusCircle,
  Activity,
  Users,
  Bell,
  LogOut,
} from "lucide-react";

export const SidebarItem = ({ icon: Icon, label, path, active }) => (
  <Link
    to={path}
    className={`flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-sm transition-all duration-200 group ${
      active
        ? "bg-red-50 text-red-600 shadow-sm"
        : "text-slate-500 hover:bg-white hover:shadow-sm hover:text-slate-900"
    }`}
  >
    <Icon
      size={20}
      className={
        active ? "text-red-600" : "text-slate-400 group-hover:text-slate-900"
      }
    />
    {label}
  </Link>
);

export default function Sidebar({ sidebarOpen }) {
  const location = useLocation();

  const menuItems = [
    { icon: LayoutDashboard, label: "Overview", path: "/organization/dashboard" },
    { icon: PlusCircle, label: "New Request", path: "/organization/create" },
    { icon: Activity, label: "Active Requests", path: "/organization/active" },
    { icon: Users, label: "Donor Matches", path: "/organization/matches" },
    { icon: Bell, label: "Notifications", path: "/organization/notifications" },
  ];

  return (
    <aside
      className={`
        fixed lg:static inset-y-0 left-0 z-50 w-72 bg-brand-slate-50 border-r border-brand-slate-200
        transform transition-transform duration-300 ease-in-out
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}
    >
      <div className="flex items-center gap-3 text-brand-red-600 mb-10 px-4 pt-6">
        <div className="w-8 h-8 bg-brand-red-600 rounded-lg flex items-center justify-center text-white font-black text-lg shadow-lg shadow-brand-red-600/30">
          B
        </div>
        <span className="text-xl font-bold text-brand-slate-900 tracking-tight">
          BloodDon
        </span>
      </div>

      <nav className="flex-1 space-y-1">
        <p className="px-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">
          Menu
        </p>
        {menuItems.map((item) => (
          <SidebarItem
            key={item.path}
            {...item}
            active={location.pathname === item.path}
          />
        ))}
      </nav>

      <div className="absolute bottom-0 w-full p-6 border-t border-brand-slate-200/50">
        <div className="flex items-center gap-3 mb-6 px-2">
          <div className="w-10 h-10 rounded-full bg-brand-slate-200 flex items-center justify-center font-bold text-brand-slate-500">
            CH
          </div>
          <div>
            <p className="text-sm font-bold">City Hospital</p>
            <p className="text-xs text-brand-slate-400">Admin Account</p>
          </div>
        </div>
        <button className="flex items-center gap-2 text-xs font-bold text-brand-slate-400 hover:text-brand-red-600 transition-colors px-2">
          <LogOut size={16} /> Logout
        </button>
      </div>
    </aside>
  );
}
