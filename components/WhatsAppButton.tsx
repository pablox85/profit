"use client";

import { MessageCircle } from "lucide-react";
import Link from "next/link";
import { trackEvent } from "@/lib/tracking";
import { whatsappHref } from "@/lib/site";

type WhatsAppButtonProps = {
  label?: string;
  message: string;
  source: string;
  className?: string;
  variant?: "primary" | "outline";
};

export function WhatsAppButton({
  label = "Consultar por WhatsApp",
  message,
  source,
  className = "",
  variant = "primary",
}: WhatsAppButtonProps) {
  const styles =
    variant === "primary"
      ? "bg-[#1F4DFF] text-white blue-glow hover:bg-[#2f5cff]"
      : "border border-[#1F4DFF]/70 text-white hover:border-[#1F4DFF] hover:bg-[#1F4DFF]/12";

  return (
    <Link
      href={whatsappHref(message)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackEvent("whatsapp_click", { source })}
      className={`focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-extrabold uppercase tracking-wide transition duration-200 hover:-translate-y-0.5 ${styles} ${className}`}
    >
      <MessageCircle aria-hidden size={18} />
      {label}
    </Link>
  );
}
