import Image from "next/image";
import { WhatsAppButton } from "./WhatsAppButton";

type ProductCardProps = {
  product: {
    name: string;
    category: string;
    image: string;
    description: string;
  };
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="glass-border group overflow-hidden rounded-lg transition duration-200 hover:-translate-y-1 hover:border-[#1F4DFF]">
      <div className="relative aspect-square overflow-hidden bg-[radial-gradient(circle_at_center,rgba(31,77,255,0.16),rgba(0,0,0,0.92)_58%)]">
        <Image
          src={product.image}
          alt={`${product.name} - ${product.category}`}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="p-2 object-contain transition duration-500 group-hover:scale-[1.03]"
        />
        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/72 via-transparent to-black/10" />
        <span className="absolute left-4 top-4 rounded-md border border-[#1F4DFF]/60 bg-black/70 px-3 py-1 text-[11px] font-black uppercase tracking-wider text-[#9bb4ff]">
          {product.category}
        </span>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-black uppercase leading-tight text-white">{product.name}</h3>
        <p className="mt-3 min-h-12 text-sm leading-6 text-white/62">{product.description}</p>
        <WhatsAppButton
          label="Consultar"
          message={`Hola Profit Pinamar, quiero consultar por ${product.name}.`}
          source={`product_${product.name.toLowerCase().replaceAll(" ", "_")}`}
          className="mt-5 w-full"
        />
      </div>
    </article>
  );
}
