import type { Metadata } from "next";
import { ProductCatalog } from "@/components/ProductCatalog";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Productos",
  description:
    "Catálogo de proteínas, creatinas, combos y accesorios de Profit Pinamar Suplementos con consulta directa por WhatsApp.",
  alternates: {
    canonical: "/productos",
  },
};

export default function ProductsPage() {
  return (
    <main>
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Catálogo"
          title="Productos"
          copy="Filtrá por categoría o buscá por objetivo. Cada producto abre consulta directa por WhatsApp."
        />
        <ProductCatalog />
      </section>
    </main>
  );
}
