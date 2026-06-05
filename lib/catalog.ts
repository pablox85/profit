export type ProductCategoryId = "all" | "proteinas" | "creatinas" | "combos" | "accesorios";

export type ProductCategory = {
  id: Exclude<ProductCategoryId, "all">;
  name: string;
};

export type CatalogProduct = {
  id: string;
  name: string;
  categoryId: ProductCategory["id"];
  category: string;
  image: string;
  description: string;
  tags: string[];
  featured?: boolean;
};

export const productCategories: ProductCategory[] = [
  { id: "proteinas", name: "Proteínas" },
  { id: "creatinas", name: "Creatinas" },
  { id: "combos", name: "Combos" },
  { id: "accesorios", name: "Shakers / accesorios" },
];

export const catalogProducts: CatalogProduct[] = [
  // Proteínas
  {
    id: "isolate-protein-mix",
    name: "Isolate Protein Mix 1.8Kg",
    categoryId: "proteinas",
    category: "Proteínas",
    image: "/images/card1.png",
    description: "Proteína aislada para recuperación, definición y masa muscular (1.8 kg).",
    tags: ["Masa muscular", "Recuperación", "Whey"],
    featured: true,
  },
  {
    id: "proteina-importada-whey",
    name: "Creatina Monohidratada",
    categoryId: "proteinas",
    category: "Proteínas",
    image: "/images/profit006.jpeg",
    description: "Proteína de uso diario para completar tus requerimientos.",
    tags: ["Whey", "Recuperación"],

    id: "creatine-monohydrate-power",
    name: "Ni idea que es essto",
    categoryId: "proteina",
    category: "Proteínas",
    image: "/images/card2.png",
    description: "Creatina monohidratada para fuerza, potencia y rendimiento (1 kg).",
    tags: ["Fuerza", "Potencia", "Rendimiento"],
    featured: true,
  },

  // Creatinas

  {
    id: "creatina-refil-economico",
    name: "Creatina Refil Económico",
    categoryId: "creatinas",
    category: "Creatinas",
    image: "/images/profit007.jpeg",
    description: "Formato conveniente para sostener tu rutina de fuerza.",
    tags: ["Creatina", "Fuerza"],
  },

  // Combos
  {
    id: "combo-lanzamiento",
    name: "Combo Lanzamiento",
    categoryId: "combos",
    category: "Combos",
    image: "/images/card3.png",
    description: "Protein Mix + Creatine + shaker de regalo en promoción.",
    tags: ["Promo", "Proteína", "Creatina"],
    featured: true,
  },
  {
    id: "pack-ganancia-muscular",
    name: "Pack Ganancia Muscular",
    categoryId: "combos",
    category: "Combos",
    image: "/images/profit005.jpeg",
    description: "Selección orientada a aumentar masa muscular con asesoramiento.",
    tags: ["Masa muscular", "Combo"],
  },

  // Shakers / accesorios
  {
    id: "shaker-profit",
    name: "Shaker Profit",
    categoryId: "accesorios",
    category: "Shakers / accesorios",
    image: "/images/productos/shaker.png",
    description: "Shaker práctico para preparar tus suplementos en cualquier lugar.",
    tags: ["Shaker", "Accesorio"],
  },

];
