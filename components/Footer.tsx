import Container from "@/components/Container";

export default function Footer(){
  return (
    <footer className="border-t border-slate-200 py-10">
      <Container>
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-3">
            <img src="/logo.svg" className="h-6 w-6 rounded" alt="logo"/>
            <p className="text-sm text-slate-600">© {new Date().getFullYear()} Facturakit. Todos los derechos reservados.</p>
          </div>
          <div className="flex items-center gap-5 text-xl text-slate-600">
            <a href="#" aria-label="Twitter">🐦</a>
            <a href="#" aria-label="Instagram">📸</a>
            <a href="#" aria-label="LinkedIn">💼</a>
            <a href="#" aria-label="Web">🌐</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
