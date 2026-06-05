import { Dumbbell, Instagram, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { brand } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/40">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1.2fr_1fr_1fr] lg:px-8">
        <div>
          <div className="mb-4 flex items-center gap-3 text-white">
            <Dumbbell className="text-[#1F4DFF]" aria-hidden />
            <span className="font-black uppercase">{brand.name}</span>
          </div>
          <p className="max-w-sm text-sm leading-6 text-white/62">
            Suplementos deportivos originales, asesoramiento directo y envíos a todo Uruguay.
          </p>
        </div>
        <div className="space-y-3 text-sm text-white/70">
          <p className="flex items-center gap-2">
            <MapPin size={16} className="text-[#1F4DFF]" aria-hidden />
            {brand.location}
          </p>
          <p className="flex items-center gap-2">
            <Phone size={16} className="text-[#1F4DFF]" aria-hidden />
            {brand.phone} / {brand.phoneAlt}
          </p>
          <p className="flex items-center gap-2">
            <Instagram size={16} className="text-[#1F4DFF]" aria-hidden />
            {brand.instagram}
          </p>
        </div>
        <div className="flex gap-4 text-sm font-bold text-white/78 md:justify-end">
          <Link className="focus-ring h-fit rounded-md transition hover:text-white" href="/">
            Inicio
          </Link>
          <Link className="focus-ring h-fit rounded-md transition hover:text-white" href="/productos">
            Productos
          </Link>
        </div>
      </div>
    </footer>
  );
}
