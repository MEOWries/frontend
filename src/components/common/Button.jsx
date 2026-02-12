import React from 'react'

function Button({ children, primary = false, className = '', ...props }) {
    const baseClasses = "font-semibold px-8 py-3 rounded-lg transition-all duration-300 ease-in-out shadow-md";
  const primaryClasses = "bg-brand-red-600 hover:bg-brand-red-700 text-white transform hover:-translate-y-1";
  const secondaryClasses = "border border-brand-slate-500 text-brand-slate-900 hover:bg-brand-slate-100 hover:border-brand-slate-600 transform hover:-translate-y-1";
  return (
    <button
      className={`${baseClasses} ${primary ? primaryClasses : secondaryClasses} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button