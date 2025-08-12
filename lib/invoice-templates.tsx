"use client";
import React from "react";
import { currency, calcTotals } from "@/lib/invoice-utils";

export const TEMPLATES = [
  { id: "minimal", name: "Minimal", colors: ["#0f172a","#334155","#1f2937"], vibe: "Sobrio" },
  { id: "classic", name: "Clásica", colors: ["#4338ca","#3730a3","#312e81"], vibe: "Formal" },
  { id: "modern", name: "Moderna", colors: ["#059669","#047857","#065f46"], vibe: "Actual" },
  { id: "elegant", name: "Elegante", colors: ["#e11d48","#be123c","#9f1239"], vibe: "Premium" }
];

export const DEFAULT_SAMPLE:any = {
  number: "0001",
  date: new Date().toISOString().slice(0,10),
  dueDate: new Date(Date.now()+7*864e5).toISOString().slice(0,10),
  purchaseOrder: "PO-2025-001",
  paymentMethod: "Transferencia",
  bankIban: "ES12 3456 7890 1234 5678 9012",
  issuer: { name:"Tu Empresa S.L.", nif:"B12345678", address:"Calle Mayor 1, Madrid", email:"facturas@empresa.com", phone:"+34 600 000 000" },
  client: { name:"Cliente Demo", nif:"00000000A", address:"C/ Falsa 123, Barcelona", email:"cliente@demo.com" },
  items: [
    { id: "1", description:"Servicio profesional", qty:1, price:300 },
    { id: "2", description:"Soporte", qty:2, price:50 }
  ],
  notes: "Gracias por su confianza.",
  terms: "Pago a 7 días. Recargo por demora 1%.",
  color: "#0f172a",
  discount: { mode:"percent", value: 0 },
  taxRate: 21,
  templateId: "minimal"
};

export function Divider(){ return <div className="h-px w-full bg-slate-200 my-2" />; }

function Table({items}: any){
  return (
    <div className="mt-6 overflow-x-auto">
      <table className="min-w-full text-sm">
        <thead>
          <tr className="text-slate-600">
            <th className="w-2/3 text-left">Descripción</th>
            <th className="text-left">Cant.</th>
            <th className="text-left">Precio</th>
            <th className="text-left">Importe</th>
          </tr>
        </thead>
        <tbody>
          {items.map((it: any) => (
            <tr key={it.id}>
              <td>{it.description}</td>
              <td>{it.qty}</td>
              <td>{currency(it.price)}</td>
              <td>{currency(Number(it.qty)*Number(it.price))}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Totals({invoice}: any){
  const totals = calcTotals(invoice.items, invoice.discount, invoice.taxRate);
  return (
    <div className="mt-6 ml-auto w-full max-w-xs text-sm">
      <div className="flex justify-between"><span className="text-slate-600">Subtotal</span><span className="font-medium">{currency(totals.subtotal)}</span></div>
      <div className="flex justify-between"><span className="text-slate-600">Descuento</span><span className="font-medium">-{currency(totals.discount)}</span></div>
      <div className="flex justify-between"><span className="text-slate-600">Base</span><span className="font-medium">{currency(totals.base)}</span></div>
      <div className="flex justify-between"><span className="text-slate-600">IVA ({invoice.taxRate}%)</span><span className="font-medium">{currency(totals.taxes)}</span></div>
      <div className="flex justify-between text-base font-semibold mt-2"><span>Total</span><span style={{color: invoice.color}}>{currency(totals.total)}</span></div>
    </div>
  );
}

/* Four visual templates */
function Minimal({invoice}: any){
  return (
    <div className="rounded-2xl border border-slate-200 p-6">
      <div className="flex items-start justify-between gap-6">
        <div>
          <div className="inline-block rounded-full px-2 py-0.5 text-xs text-white" style={{background: invoice.color}}>Factura</div>
          <h2 className="mt-3 text-xl font-bold text-slate-900">#{invoice.number}</h2>
          <p className="text-sm text-slate-600">Fecha: {invoice.date} · Vencimiento: {invoice.dueDate}</p>
          {invoice.purchaseOrder && <p className="text-xs text-slate-500">PO: {invoice.purchaseOrder}</p>}
        </div>
        <div className="text-right">
          <h3 className="text-sm font-semibold text-slate-900">{invoice.issuer?.name}</h3>
          <p className="text-xs text-slate-600">{invoice.issuer?.nif}</p>
          <p className="text-xs text-slate-600">{invoice.issuer?.address}</p>
          <p className="text-xs text-slate-600">{invoice.issuer?.email} · {invoice.issuer?.phone}</p>
        </div>
      </div>
      <div className="mt-6 grid gap-2 text-sm md:grid-cols-2">
        <div><p className="font-semibold text-slate-900">Facturar a</p><p className="text-slate-700">{invoice.client?.name}</p><p className="text-slate-500">{invoice.client?.nif}</p><p className="text-slate-500">{invoice.client?.address}</p><p className="text-slate-500">{invoice.client?.email}</p></div>
        <div><p className="font-semibold text-slate-900">Pago</p><p className="text-slate-700">{invoice.paymentMethod}</p><p className="text-slate-500">{invoice.bankIban}</p></div>
      </div>
      <Table items={invoice.items}/>
      <Totals invoice={invoice}/>
    </div>
  );
}

function Classic({invoice}: any){
  return (
    <div className="rounded-2xl border border-indigo-200 p-6">
      <div className="flex items-start justify-between">
        <div className="text-indigo-700 font-bold text-xl">FACTURA</div>
        <div className="text-right">
          <div className="text-xs text-slate-500">Nº</div>
          <div className="text-lg font-semibold">{invoice.number}</div>
        </div>
      </div>
      <Divider/>
      <div className="grid md:grid-cols-2 gap-4 text-sm">
        <div><p className="font-semibold text-slate-900">Emisor</p><p>{invoice.issuer?.name}</p><p>{invoice.issuer?.nif}</p><p>{invoice.issuer?.address}</p></div>
        <div><p className="font-semibold text-slate-900">Cliente</p><p>{invoice.client?.name}</p><p>{invoice.client?.nif}</p><p>{invoice.client?.address}</p></div>
      </div>
      <Table items={invoice.items}/>
      <Totals invoice={invoice}/>
    </div>
  );
}

function Modern({invoice}: any){
  return (
    <div className="rounded-2xl border border-emerald-200 p-0 overflow-hidden">
      <div className="bg-emerald-600 text-white px-6 py-4 flex items-center justify-between">
        <div className="font-bold">Factura #{invoice.number}</div>
        <div className="text-sm">Fecha {invoice.date}</div>
      </div>
      <div className="p-6">
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div><p className="font-semibold text-slate-900">Emisor</p><p>{invoice.issuer?.name}</p><p>{invoice.issuer?.nif}</p><p>{invoice.issuer?.address}</p></div>
          <div><p className="font-semibold text-slate-900">Cliente</p><p>{invoice.client?.name}</p><p>{invoice.client?.nif}</p><p>{invoice.client?.address}</p></div>
        </div>
        <Table items={invoice.items}/>
        <Totals invoice={invoice}/>
      </div>
    </div>
  );
}

function Elegant({invoice}: any){
  return (
    <div className="rounded-2xl border border-rose-200 p-6">
      <div className="flex items-center justify-between">
        <div className="text-rose-600 font-extrabold tracking-wide">FACTURAKIT</div>
        <div className="text-sm text-slate-500">#{invoice.number}</div>
      </div>
      <Divider/>
      <div className="grid md:grid-cols-2 gap-4 text-sm">
        <div><p className="font-semibold text-slate-900">Cliente</p><p>{invoice.client?.name}</p><p>{invoice.client?.address}</p></div>
        <div className="text-right"><p className="font-semibold text-slate-900">Fecha</p><p>{invoice.date}</p><p>Vence: {invoice.dueDate}</p></div>
      </div>
      <Table items={invoice.items}/>
      <Totals invoice={invoice}/>
    </div>
  );
}

export function InvoiceDocByTemplate({invoice, templateId, accentColor, compact=false}: any){
  const map:any = { minimal: Minimal, classic: Classic, modern: Modern, elegant: Elegant };
  const T = map[templateId] || Minimal;
  const doc = { ...invoice, color: accentColor || invoice.color };
  return <T invoice={doc} />;
}
