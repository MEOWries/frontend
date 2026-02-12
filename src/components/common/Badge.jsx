const UrgencyBadge = ({ level }) => {
  const styles = {
    Critical: "bg-brand-red-100 text-brand-red-700 border-brand-red-200",
    High: "bg-orange-100 text-orange-700 border-orange-200",
    Normal: "bg-brand-slate-100 text-brand-slate-600 border-brand-slate-200",
  };
  return (
    <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider border ${styles[level] || styles.Normal}`}>
      {level}
    </span>
  );
};

export default UrgencyBadge