import Container from "@/components/Container";
import Button from "@/components/Button";
import MiniInvoicePreview from "@/components/MiniInvoicePreview";
import { TEMPLATES } from "@/lib/invoice-templates";

export default function InvoiceCarousel({onGoto}: any){
  return (
    <section className="bg-white">
      <Container className="py-16">
        <h2 className="text-center text-2xl font-extrabold tracking-tight text-slate-900">Selecciona la plantilla de tu factura</h2>
        <p className="mt-2 text-center text-slate-600">Explora estilos clásicos, modernos y artísticos. Todas son personalizables.</p>
        <div className="mt-8 no-scrollbar flex gap-6 overflow-x-auto pb-2">
          {TEMPLATES.map(t=>(
            <div key={t.id} className="w-[280px] shrink-0">
              <MiniInvoicePreview templateId={t.id} />
              <div className="mt-3 flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.vibe}</p>
                </div>
                <Button onClick={()=>onGoto?.("templates")} className="h-8 px-3">Usar</Button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
