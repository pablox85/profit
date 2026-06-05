"use client";

import { Send } from "lucide-react";
import { useState } from "react";

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      form.reset();
      setStatus("sent");
    } else {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="glass-border grid gap-4 rounded-lg p-5 sm:p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-bold text-white/80">
          Nombre
          <input
            name="name"
            required
            className="focus-ring rounded-md border border-white/12 bg-black px-4 py-3 text-white"
          />
        </label>
        <label className="grid gap-2 text-sm font-bold text-white/80">
          WhatsApp
          <input
            name="phone"
            required
            className="focus-ring rounded-md border border-white/12 bg-black px-4 py-3 text-white"
          />
        </label>
      </div>
      <label className="grid gap-2 text-sm font-bold text-white/80">
        Mensaje
        <textarea
          name="message"
          required
          rows={4}
          className="focus-ring resize-none rounded-md border border-white/12 bg-black px-4 py-3 text-white"
        />
      </label>
      <button
        type="submit"
        disabled={status === "sending"}
        className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-[#1F4DFF] px-5 py-3 text-sm font-black uppercase text-white transition hover:-translate-y-0.5 hover:bg-[#2f5cff] disabled:cursor-not-allowed disabled:opacity-60"
      >
        <Send aria-hidden size={18} />
        {status === "sending" ? "Enviando" : "Enviar consulta"}
      </button>
      {status === "sent" ? <p className="text-sm font-bold text-[#9bb4ff]">Consulta enviada.</p> : null}
      {status === "error" ? (
        <p className="text-sm font-bold text-red-300">No pudimos enviar el formulario. Probá por WhatsApp.</p>
      ) : null}
    </form>
  );
}
