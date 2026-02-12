const Input = ({ label, type = "text", value, onChange, ...props }) => (
  <div className="space-y-2">
    <label className="text-[10px] font-bold text-brand-slate-400 uppercase tracking-widest">{label}</label>
    <input
      type={type}
      value={value}
      onChange={onChange}
      className="w-full bg-brand-slate-50 border-none rounded-xl px-4 py-3 text-sm font-medium text-brand-slate-900 focus:ring-2 focus:ring-brand-red-600/20 outline-none transition-all placeholder:text-brand-slate-400"
      {...props}
    />
  </div>
);

export default Input