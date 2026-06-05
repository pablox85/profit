import Image from "next/image";
import Link from "next/link";
import { brand } from "@/lib/site";
import { WhatsAppButton } from "./WhatsAppButton";

export function Header() {
  return (
    <header className="sticky top-0 z-50 h-16 w-full overflow-x-clip border-b border-white/10 bg-[#03050a]/90 backdrop-blur-xl sm:h-18">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between gap-2 px-3 sm:gap-4 sm:px-6 lg:px-8">
        <Link href="/" className="focus-ring flex shrink-0 items-center gap-2 rounded-md sm:gap-3">
          <span className="relative block h-12 w-12 shrink-0 sm:h-14 sm:w-14">
            <Image
              src="/images/header-logo.png"
              alt={`${brand.name} logo`}
              fill
              sizes="56px"
              className="object-contain"
              priority
            />
          </span>
          <span className="hidden text-sm font-black uppercase leading-tight text-white sm:block">
            Profit Pinamar
            <span className="block text-[11px] font-semibold text-white/58">Suplementos</span>
          </span>
        </Link>
        <nav className="flex min-w-0 flex-1 items-center justify-center gap-1 text-[12px] font-bold text-white/78 sm:gap-5 sm:text-sm">
          <Link className="focus-ring rounded-md px-2 py-2 transition hover:text-white" href="/#promos">
            Promos
          </Link>
          <Link className="focus-ring rounded-md px-2 py-2 transition hover:text-white" href="/productos">
            Productos
          </Link>
          <Link className="focus-ring hidden rounded-md px-2 py-2 transition hover:text-white sm:inline" href="/#contacto">
            Contacto
          </Link>
        </nav>
        <div className="hidden shrink-0 sm:block">
          <WhatsAppButton
            label="WhatsApp"
            message="Hola Profit Pinamar, quiero consultar por suplementos."
            source="header"
            className="px-4"
          />
        </div>
      </div>
    </header>
  );
}
