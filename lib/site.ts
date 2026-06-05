import { catalogProducts } from "./catalog";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://profitpinamarsuplementos.com";

export const whatsappNumber =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "59898325435";

export const brand = {
  name: "Profit Pinamar Suplementos",
  domain: "profitpinamarsuplementos.com",
  location: "Pinamar, Canelones, Uruguay",
  phone: "+598 98 325 435",
  phoneAlt: "+598 98 372 747",
  instagram: "@profitpinamar",
  email: "ventas@profitpinamarsuplementos.com",
};

export function whatsappHref(message: string) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const products = catalogProducts;

export const promotions = [
  {
    title: "Promo lanzamiento",
    detail: "Isolate Protein Mix 1.8 kg + Creatine Monohydrate 1 kg + shaker de regalo.",
    price: "$4100",
    image: "/images/card3.png",
  },
  {
    title: "Asesoramiento Sin Costo",
    detail: "Te ayudamos a elegir según objetivo, peso, experiencia y rutina.",
    price: "Sin costo",
    image: "/images/gym.png",
  },
];
