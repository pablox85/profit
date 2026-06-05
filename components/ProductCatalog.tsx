"use client";

import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import { ProductCard } from "@/components/ProductCard";
import {
  catalogProducts,
  productCategories,
  type ProductCategoryId,
} from "@/lib/catalog";

const allCategories: Array<{ id: ProductCategoryId; name: string }> = [
  { id: "all", name: "Todos" },
  ...productCategories,
];

export function ProductCatalog() {
  const [activeCategory, setActiveCategory] = useState<ProductCategoryId>("all");
  const [query, setQuery] = useState("");

  const filteredProducts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return catalogProducts.filter((product) => {
      const matchesCategory =
        activeCategory === "all" || product.categoryId === activeCategory;

      const searchableText = [
        product.name,
        product.category,
        product.description,
        ...product.tags,
      ]
        .join(" ")
        .toLowerCase();

      return matchesCategory && searchableText.includes(normalizedQuery);
    });
  }, [activeCategory, query]);

  return (
    <div className="space-y-8">
      <div className="grid gap-4 lg:grid-cols-[1fr_22rem] lg:items-center">
        <div className="flex gap-2 overflow-x-auto pb-1">
          {allCategories.map((category) => {
            const isActive = activeCategory === category.id;

            return (
              <button
                key={category.id}
                type="button"
                onClick={() => setActiveCategory(category.id)}
                className={`focus-ring min-h-11 shrink-0 rounded-md border px-4 py-2 text-sm font-black uppercase transition ${
                  isActive
                    ? "border-[#1F4DFF] bg-[#1F4DFF] text-white blue-glow"
                    : "border-[#1F4DFF]/40 bg-black/30 text-white/72 hover:border-[#1F4DFF] hover:text-white"
                }`}
              >
                {category.name}
              </button>
            );
          })}
        </div>

        <label className="focus-within:border-[#1F4DFF] flex min-h-12 items-center gap-3 rounded-md border border-white/12 bg-black px-4 text-white transition">
          <Search size={18} className="shrink-0 text-[#8ca8ff]" aria-hidden />
          <span className="sr-only">Buscar productos</span>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Buscar producto"
            className="w-full bg-transparent text-sm font-semibold outline-none placeholder:text-white/36"
          />
        </label>
      </div>

      {filteredProducts.length > 0 ? (
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="glass-border rounded-lg p-8 text-center">
          <h2 className="text-xl font-black uppercase text-white">Sin resultados</h2>
          <p className="mt-3 text-sm leading-6 text-white/62">
            Probá con otra categoría o buscá por objetivo, producto o suplemento.
          </p>
        </div>
      )}
    </div>
  );
}
