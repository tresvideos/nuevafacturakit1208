import Container from "@/components/Container";
import { Card, CardBody } from "@/components/Card";

const items = [
  { icon:"✅", title:"Diseño profesional", desc:"Plantillas con jerarquía, espaciado y tipografías trabajadas." },
  { icon:"🎨", title:"Marca propia", desc:"Logo y paletas por plantilla, colores coherentes." },
  { icon:"⚡", title:"Velocidad", desc:"Crea y descarga en segundos, sin fricción." },
  { icon:"🔒", title:"Privacidad", desc:"Datos locales; solo guardas si quieres." }
];

export default function WhyUs(){
  return (
    <section className="bg-slate-50">
      <Container className="py-16">
        <h3 className="text-center text-2xl font-bold">¿Por qué escogernos?</h3>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it)=>(
            <Card key={it.title}><CardBody>
              <div className="text-4xl">{it.icon}</div>
              <h4 className="mt-3 text-base font-semibold">{it.title}</h4>
              <p className="mt-2 text-sm text-slate-600">{it.desc}</p>
            </CardBody></Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
