import Container from "@/components/Container";

export default function TrustPilot(){
  return (
    <section className="bg-white">
      <Container className="py-6">
        <div className="mx-auto max-w-3xl rounded-xl bg-slate-50 p-4 ring-1 ring-slate-200 flex items-center gap-3">
          <span className="text-sm text-slate-900">Excelente</span>
          <div className="flex items-center gap-1 text-emerald-500">{Array.from({length:5}).map((_,i)=>(<span key={i}>★</span>))}</div>
          <span className="text-sm text-slate-600">2.074 opiniones en</span>
          <span className="text-emerald-600 font-semibold">Trustpilot</span>
        </div>
      </Container>
    </section>
  );
}
