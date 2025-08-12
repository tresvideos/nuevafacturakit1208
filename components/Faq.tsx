import Container from "@/components/Container";
import { useState } from "react";

function Item({q, a}: any){
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-xl border border-slate-200 bg-white">
      <button className="flex w-full items-center justify-between p-4 text-left" onClick={()=>setOpen(!open)}>
        <span className="font-medium text-slate-900">{q}</span>
        <span className={`transition ${open?"rotate-180":""}`}>▾</span>
      </button>
      {open && <div className="border-t border-slate-200 p-4 text-slate-700 text-sm">{a}</div>}
    </div>
  );
}

export default function Faq(){
  const data = [
    ["¿Necesito registrarme?", "Puedes crear 3 facturas gratis sin tarjeta. Para descargar, te pediremos un email (demo local)."],
    ["¿Puedo cambiar de plantilla después?", "Sí, puedes cambiar diseño y colores sin perder datos."],
    ["¿Cómo exporto a PDF?", "Usa Exportar PDF (impresión del navegador con ajuste de colores)."]
  ];
  return (
    <section className="bg-slate-50">
      <Container className="py-16">
        <h3 className="text-center text-2xl font-bold">Preguntas frecuentes</h3>
        <div className="mx-auto mt-6 max-w-3xl space-y-3">
          {data.map(([q,a])=>(<Item key={q} q={q} a={a}/>))}
        </div>
      </Container>
    </section>
  );
}
