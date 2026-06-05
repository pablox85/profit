"use client";

import { useMemo, useState } from "react";
import { Activity, Target } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";

export function RecommendationTool() {
  const [goal, setGoal] = useState("ganar masa muscular");
  const [weight, setWeight] = useState("");
  const [experience, setExperience] = useState("principiante");
  const [submitted, setSubmitted] = useState(false);

  const recommendation = useMemo(() => {
    const normalizedGoal = goal.toLowerCase();

    if (normalizedGoal.includes("fuerza") || normalizedGoal.includes("rendimiento")) {
      return "Creatina monohidratada como base diaria, con proteína si te cuesta cubrir tus comidas.";
    }

    if (normalizedGoal.includes("definir") || normalizedGoal.includes("bajar")) {
      return "Proteína aislada para sostener recuperación y saciedad, ajustando dosis según tu alimentación.";
    }

    return "Combo proteína + creatina para apoyar recuperación, fuerza y ganancia muscular.";
  }, [goal]);

  const message = `Hola Profit Pinamar, completé la recomendación: objetivo ${goal}, peso ${weight || "sin indicar"}, experiencia ${experience}. Me sugirió: ${recommendation}`;

  return (
    <section id="asesoria" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid gap-8 overflow-hidden rounded-lg border border-[#1F4DFF]/40 bg-[#060914] md:grid-cols-[0.9fr_1.1fr]">
        <div className="relative min-h-72 bg-[url('/images/profit016.jpeg')] bg-cover bg-center p-6 md:p-8">
          <div className="absolute inset-0 bg-linear-to-r from-black/86 via-black/66 to-transparent" />
          <div className="relative z-10 max-w-sm">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-md bg-[#1F4DFF] blue-glow">
              <Target aria-hidden />
            </div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#9bb4ff]">Asesoramiento</p>
            <h2 className="mt-3 text-3xl font-black uppercase leading-none text-white sm:text-4xl">
              ¿No sabés qué suplemento elegir?
            </h2>
          </div>
        </div>
        <div className="p-5 sm:p-8">
          <form
            className="grid gap-4"
            onSubmit={(event) => {
              event.preventDefault();
              setSubmitted(true);
            }}
          >
            <label className="grid gap-2 text-sm font-bold text-white/80">
              Objetivo
              <select
                value={goal}
                onChange={(event) => setGoal(event.target.value)}
                className="focus-ring rounded-md border border-white/12 bg-black px-4 py-3 text-white"
              >
                <option>ganar masa muscular</option>
                <option>definir o bajar grasa</option>
                <option>mejorar fuerza y rendimiento</option>
              </select>
            </label>
            <label className="grid gap-2 text-sm font-bold text-white/80">
              Peso
              <input
                value={weight}
                onChange={(event) => setWeight(event.target.value)}
                inputMode="decimal"
                placeholder="Ej: 78 kg"
                className="focus-ring rounded-md border border-white/12 bg-black px-4 py-3 text-white placeholder:text-white/34"
              />
            </label>
            <label className="grid gap-2 text-sm font-bold text-white/80">
              Experiencia entrenando
              <select
                value={experience}
                onChange={(event) => setExperience(event.target.value)}
                className="focus-ring rounded-md border border-white/12 bg-black px-4 py-3 text-white"
              >
                <option>principiante</option>
                <option>intermedia</option>
                <option>avanzada</option>
              </select>
            </label>
            <button
              className="focus-ring mt-2 inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-black uppercase text-black transition hover:-translate-y-0.5 hover:bg-[#dfe7ff]"
              type="submit"
            >
              <Activity aria-hidden size={18} />
              Ver recomendación
            </button>
          </form>
          {submitted ? (
            <div className="mt-6 rounded-lg border border-[#1F4DFF]/50 bg-[#1F4DFF]/10 p-5">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#9bb4ff]">
                Recomendación orientativa
              </p>
              <p className="mt-3 text-lg font-bold leading-7 text-white">{recommendation}</p>
              <WhatsAppButton
                label="Hablar con un asesor"
                message={message}
                source="recommendation_tool"
                className="mt-5"
              />
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
