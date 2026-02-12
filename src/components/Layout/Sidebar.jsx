import React from 'react'

function Sidebar() {
    const links = [
    { name: 'Dashboard', path: '/dashboard', icon: '📊' },
    { name: 'Requests', path: '/requests/assigned', icon: '🩸' },
    { name: 'History', path: '/history', icon: '📜' },
  ];
  return (
    <aside className="w-64 bg-brand-slate-950 h-screen fixed left-0 top-0 flex flex-col border-r border-brand-slate-800 hidden md:flex">
      {/* Brand Logo */}
      <div className="p-8">
        <h1 className="text-2xl font-black text-white tracking-tighter">
          Blood<span className="text-brand-red-600">Donation.</span>
        </h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 space-y-2 mt-4">
        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) => `
              flex items-center gap-4 px-4 py-3 rounded-xl font-bold text-sm transition-all duration-300
              ${isActive 
                ? 'bg-brand-red-600 text-white shadow-lg shadow-brand-red-600/20' 
                : 'text-brand-slate-500 hover:bg-brand-slate-900 hover:text-white'}
            `}
          >
            <span className="text-lg">{link.icon}</span>
            {link.name}
          </NavLink>
        ))}
      </nav>

      {/* User Quick Actions (Bottom of Sidebar) */}
      <div className="p-4 mt-auto border-t border-brand-slate-900">
        <button className="w-full bg-brand-slate-900 text-brand-slate-400 py-3 rounded-xl text-xs font-black uppercase tracking-widest hover:text-white transition-colors">
          Logout
        </button>
      </div>
    </aside>
  )
}

export default Sidebar