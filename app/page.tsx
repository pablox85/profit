import Image from "next/image";
import Link from "next/link";
import { Award, CreditCard, ShieldCheck, Truck, Users } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { ProductCard } from "@/components/ProductCard";
import { RecommendationTool } from "@/components/RecommendationTool";
import { SectionHeading } from "@/components/SectionHeading";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { products, promotions } from "@/lib/site";

const benefits = [
  { title: "Envíos a todo Uruguay", icon: Truck },
  { title: "Pagos seguros", icon: CreditCard },
  { title: "Asesoramiento personalizado", icon: Users },
  { title: "Productos originales", icon: ShieldCheck },
];

const testimonials = [
  "Me asesoraron rápido y el combo llegó impecable. La creatina se nota en los entrenamientos.",
  "Compré proteína y shaker. Muy buena atención, claros con las dosis y envío puntual.",
  "No sabía qué elegir para empezar. Me guiaron sin venderme de más.",
];

export default function Home() {
  const featuredProducts = products.filter((product) => product.featured);

  return (
    <main>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/header-logo.png"
            alt="Promo lanzamiento de suplementos Profit Pinamar"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-24 sm:opacity-34"
            style={{
              objectPosition: "34% 42%",
            }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#03050a_0%,rgba(3,5,10,0.96)_45%,rgba(3,5,10,0.76)_100%)]" />
        </div>
        <div className="relative mx-auto grid min-h-[calc(100svh-61px)] max-w-7xl content-start gap-8 px-4 py-7 sm:min-h-[calc(100svh-73px)] sm:content-center sm:px-6 sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-6 hidden h-20 w-20 items-center justify-center overflow-hidden rounded-full border border-[#1F4DFF]/60 bg-black/35 pt-1.5 blue-glow sm:flex">
              <Image
                src="/images/header-logo.png"
                alt="Profit Pinamar Suplementos"
                width={120}
                height={120}
                className="h-full w-full rounded-full object-cover object-center scale-[1.4]"
              />
            </div>
            <p className="mb-3 text-[10px] font-black uppercase tracking-[0.18em] text-[#9bb4ff] sm:mb-4 sm:text-xs sm:tracking-[0.28em]">
              Pinamar · Canelones · Uruguay
            </p>
            <h1 className="max-w-full text-[2.08rem] font-black uppercase leading-[0.94] text-white min-[390px]:text-[2.2rem] sm:max-w-4xl sm:text-7xl lg:text-8xl">
              <span className="block">Suplementos</span>
              <span className="block">para</span>
              <span className="block">construir</span>
              <span className="block">resultados.</span>
            </h1>
            <p className="mt-4 max-w-[31ch] text-[15px] leading-6 text-white/72 sm:mt-6 sm:max-w-2xl sm:text-lg sm:leading-8">
              Proteínas, creatinas y combos originales con asesoramiento directo.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:mt-8 sm:flex-row">
              <WhatsAppButton
                label="Comprar por WhatsApp"
                message="Hola Profit Pinamar, quiero consultar por suplementos y promociones."
                source="hero_primary"
                className="w-full max-w-[calc(100vw-2rem)] sm:w-auto sm:max-w-none"
              />
              <Link
                href="/productos"
                className="focus-ring inline-flex min-h-12 w-full max-w-[calc(100vw-2rem)] items-center justify-center rounded-md border border-white/16 px-5 py-3 text-sm font-black uppercase text-white transition hover:-translate-y-0.5 hover:border-[#1F4DFF] sm:w-auto sm:max-w-none"
              >
                Ver productos
              </Link>
            </div>
          </div>
          <div className="hidden items-end lg:flex">
            <div className="glass-border w-full rounded-lg p-4 blue-glow">
              <Image
                src="/images/profit001.jpeg"
                alt="Combo Profit Protein Mix, creatina y shaker"
                width={700}
                height={700}
                className="aspect-square w-full rounded-md object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Destacados"
          title="Productos que más consultan"
          copy="Selección de suplementos para fuerza, recuperación y progreso físico, con consulta directa por WhatsApp."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {featuredProducts.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </section>

      <section id="promos" className="border-y border-white/10 bg-black/24">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Promociones"
            title="Promos vigentes"
            copy="Consultá disponibilidad, sabores y forma de envío antes de reservar."
          />
          <div className="grid gap-5 md:grid-cols-2">
            {promotions.map((promo) => (
              <article
                key={promo.title}
                className="glass-border grid overflow-hidden rounded-lg transition hover:-translate-y-1 hover:border-[#1F4DFF] sm:grid-cols-[0.9fr_1.1fr]"
              >
                <div className="relative min-h-64">
                  <Image
                    src={promo.image}
                    alt={promo.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <p className="mb-3 inline-flex rounded-md bg-[#1F4DFF]/16 px-3 py-1 text-xs font-black uppercase tracking-wider text-[#9bb4ff]">
                    {promo.price}
                  </p>
                  <h3 className="text-2xl font-black uppercase text-white">{promo.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/64">{promo.detail}</p>
                  <WhatsAppButton
                    label="Consultar promo"
                    message={`Hola Profit Pinamar, quiero consultar por la promoción: ${promo.title}.`}
                    source={`promo_${promo.title.toLowerCase().replaceAll(" ", "_")}`}
                    className="mt-6"
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Confianza" title="Comprá con respaldo" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map(({ title, icon: Icon }) => (
            <div key={title} className="glass-border rounded-lg p-5 transition hover:-translate-y-1 hover:border-[#1F4DFF]">
              <Icon className="mb-5 text-[#1F4DFF]" aria-hidden />
              <h3 className="text-lg font-black uppercase text-white">{title}</h3>
            </div>
          ))}
        </div>
      </section>

      

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Clientes" title="Experiencias reales" />
        <div className="grid gap-4 md:grid-cols-3">
          {testimonials.map((quote) => (
            <blockquote key={quote} className="glass-border rounded-lg p-6">
              <Award className="mb-5 text-[#1F4DFF]" aria-hidden />
              <p className="text-base font-semibold leading-7 text-white/76">“{quote}”</p>
            </blockquote>
          ))}
        </div>
      </section>

      <section id="contacto" className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 md:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <SectionHeading
            eyebrow="Contacto"
            title="Consultá stock, precios y envíos"
            copy="Dejá tus datos o escribinos por WhatsApp. La respuesta comercial se centraliza en asesoramiento directo."
          />
          <WhatsAppButton
            label="Hablar ahora"
            message="Hola Profit Pinamar, quiero consultar stock, precios y envíos."
            source="contact_section"
          />
        </div>
        <ContactForm />
      </section>
    </main>
  );
}
