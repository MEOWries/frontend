import React from "react";
import { NavLink } from "react-router";

function Sidebar({ isOpen, toggleSidebar }) {
  const links = [
    { name: "Dashboard", path: "/donor/Dashboard" },
    { name: "Requests", path: "/donor/requests/assigned" },
    { name: "Notification", path: "/donor/notification" },
    { name: "History", path: "/donor/history" },
    { name: "Profile", path: "/donor/profile" },
  ];
  return (
    <>
      {/* Mobile Overlay: Dims the screen when sidebar is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-brand-slate-950/50 backdrop-blur-sm z-40 md:hidden animate-fade-in"
          onClick={toggleSidebar}
        />
      )}

      {/* The Sidebar */}
      <aside
        className={`
        w-64 bg-brand-slate-950 h-screen fixed left-0 top-0 flex flex-col border-r border-brand-slate-800 z-50 transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
      `}
      >
        {/* Brand Logo & Close Button */}
        <div className="p-8 flex items-center justify-between">
          <h1 className="text-2xl font-black text-white tracking-tighter">
            Blood<span className="text-brand-red-600">Rush.</span>
          </h1>
          {/* Close button - only visible on mobile */}
          <button
            onClick={toggleSidebar}
            className="md:hidden text-white text-2xl"
          >
            ✕
          </button>
        </div>

        <nav className="flex-1 px-4 space-y-2 mt-4">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => {
                if (window.innerWidth < 768) toggleSidebar();
              }}
              className={({ isActive }) => `
                flex items-center gap-4 px-4 py-3 rounded-xl font-bold text-sm transition-all duration-300
                ${
                  isActive
                    ? "bg-brand-red-600 text-white shadow-lg shadow-brand-red-600/20"
                    : "text-brand-slate-500 hover:bg-brand-slate-900 hover:text-white"
                }
              `}
            >
              <span className="text-lg">{link.icon}</span>
              {link.name}
            </NavLink>
          ))}
        </nav>

        <div className="p-4 mt-auto border-t border-brand-slate-900">
          <button className="w-full bg-brand-slate-900 text-white py-3 rounded-xl text-xs font-black uppercase tracking-widest hover:text-brand-slate-900 hover:bg-white transition-colors">
            Logout
          </button>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
