import Container from "@/components/Container";
import Button from "@/components/Button";

export default function Hero({onGoto}: any){
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#1f2937]">
      <div className="absolute inset-0 opacity-[0.06]" style={{backgroundImage:"radial-gradient(#fff 1px, transparent 1px)", backgroundSize:"20px 20px"}}/>
      <Container className="relative py-16 sm:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="text-white">
            <p className="text-sm/6 font-semibold text-emerald-300">Facturas online</p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
              Tu Factura profesional en <span className="underline decoration-emerald-400 decoration-8 underline-offset-4">segundos</span>
            </h1>
            <p className="mt-4 text-lg text-slate-300">
              Selecciona una plantilla, edita desde cualquier dispositivo y descárgala en PDF o HTML. Rápido, bonito y sin complicaciones.
            </p>
            <ul className="mt-5 space-y-2 text-slate-300 text-sm">
              <li>• Plantillas reales con estructura y tipografías optimizadas.</li>
              <li>• Previsualización en vivo con logo, colores, impuestos y descuentos.</li>
              <li>• 3 facturas gratis sin tarjeta.</li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button onClick={()=>onGoto?.("templates")} className="bg-emerald-500 hover:bg-emerald-400 text-slate-900">Crear factura</Button>
              <Button variant="secondary" onClick={()=>onGoto?.("templates")}>Ver plantillas</Button>
            </div>
          </div>
          <div className="relative">
            <img src="/hero-invoice.svg" alt="Ejemplo de factura" className="w-full rounded-2xl border border-slate-700/40 shadow-2xl"/>
          </div>
        </div>
      </Container>
    </section>
  );
}
