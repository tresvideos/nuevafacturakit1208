import Container from "@/components/Container";

export default function Clients(){
  return (
    <section className="bg-white">
      <Container className="py-10">
        <div className="rounded-xl bg-white px-4 py-3 shadow-md ring-1 ring-slate-200">
          <div className="text-xs font-semibold text-slate-700">NOS CONTRATAN:</div>
          <div className="mt-3 grid grid-cols-3 sm:grid-cols-6 gap-4 opacity-80 text-slate-500">
            {["Amazon","Deloitte","Mercadona","Santander","Rappi","Notion"].map(n=>(
              <div key={n} className="grid h-7 place-items-center text-[12px] font-semibold">{n}</div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
