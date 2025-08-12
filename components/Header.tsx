"use client";
import Image from "next/image";
import Button from "@/components/Button";
import Container from "@/components/Container";

export default function Header({onGoto}: any){
  return (
    <header className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-slate-200">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <button type="button" className="flex items-center gap-3" onClick={()=>onGoto?.("home")} aria-label="Ir al inicio">
            <Image src="/logo.svg" alt="Facturakit" width={36} height={36} className="rounded-md"/>
            <span className="hidden text-sm font-semibold text-slate-900 sm:block">Facturakit</span>
          </button>
          <nav className="flex items-center gap-2">
            <Button variant="ghost" onClick={()=>onGoto?.("templates")} className="hidden sm:inline-flex">Herramientas de facturas</Button>
            <Button variant="ghost" onClick={()=>onGoto?.("templates")} className="hidden sm:inline-flex">Plantillas</Button>
            <Button variant="ghost" onClick={()=>onGoto?.("contact")} className="hidden sm:inline-flex">Contacto</Button>
            <Button onClick={()=>onGoto?.("login")} className="bg-emerald-600 hover:bg-emerald-500">Login</Button>
          </nav>
        </div>
      </Container>
    </header>
  );
}
