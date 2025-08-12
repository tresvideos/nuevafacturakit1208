export function Card({className="", children}: any){ return <div className={`rounded-2xl border border-slate-200 bg-white shadow-sm ${className}`}>{children}</div>; }
export function CardHeader({title, subtitle, right, className=""}: any){
  return (<div className={`flex items-start justify-between gap-4 p-5 ${className}`}>
    <div><h3 className="text-lg font-semibold text-slate-900">{title}</h3>{subtitle && <p className="mt-1 text-sm text-slate-500">{subtitle}</p>}</div>{right}
  </div>);
}
export function CardBody({className="", children}: any){ return <div className={`p-5 ${className}`}>{children}</div>; }
export function Badge({children, className=""}: any){ return <span className={`inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-700 ${className}`}>{children}</span>; }
