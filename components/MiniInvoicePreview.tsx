"use client";
import { InvoiceDocByTemplate, DEFAULT_SAMPLE } from "@/lib/invoice-templates";

export default function MiniInvoicePreview({ templateId = "minimal" }: any){
  const color = DEFAULT_SAMPLE.color;
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-3">
      <div className="h-48 rounded-lg bg-white overflow-hidden">
        <div className="scale-[0.75] origin-top-left min-w-[640px] -translate-y-3">
          <InvoiceDocByTemplate invoice={{...DEFAULT_SAMPLE, templateId, color}} templateId={templateId} accentColor={color} compact/>
        </div>
      </div>
    </div>
  );
}
