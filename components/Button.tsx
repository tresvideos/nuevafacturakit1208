export default function Button({children, className="", variant="primary", ...p}: any){
  const base="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50";
  const v:any={
    primary:"bg-slate-900 text-white hover:bg-slate-800 focus:ring-slate-900/20",
    secondary:"bg-slate-100 text-slate-900 hover:bg-slate-200 focus:ring-slate-300",
    ghost:"bg-transparent hover:bg-slate-100 text-slate-700 focus:ring-slate-300",
    outline:"border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 focus:ring-slate-300",
    success:"bg-emerald-500 text-slate-900 hover:bg-emerald-400 focus:ring-emerald-400/30"
  };
  return <button className={`${base} ${v[variant]} ${className}`} {...p}>{children}</button>;
}
