import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ContactPayload = {
  name?: string;
  phone?: string;
  message?: string;
};

export async function POST(request: Request) {
  const payload = (await request.json().catch(() => null)) as ContactPayload | null;

  if (!payload?.name || !payload?.phone || !payload?.message) {
    return NextResponse.json({ error: "Faltan datos obligatorios." }, { status: 400 });
  }

  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const to = process.env.CONTACT_TO;
  const from = process.env.CONTACT_FROM || user;

  if (!host || !user || !pass || !to || !from) {
    return NextResponse.json({ error: "SMTP no configurado." }, { status: 500 });
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: process.env.SMTP_SECURE === "true",
    auth: { user, pass },
  });

  await transporter.sendMail({
    from,
    to,
    subject: `Nueva consulta web - ${payload.name}`,
    replyTo: user,
    text: [
      `Nombre: ${payload.name}`,
      `WhatsApp: ${payload.phone}`,
      "",
      "Mensaje:",
      payload.message,
    ].join("\n"),
    html: `
      <h2>Nueva consulta web</h2>
      <p><strong>Nombre:</strong> ${escapeHtml(payload.name)}</p>
      <p><strong>WhatsApp:</strong> ${escapeHtml(payload.phone)}</p>
      <p><strong>Mensaje:</strong></p>
      <p>${escapeHtml(payload.message).replaceAll("\n", "<br />")}</p>
    `,
  });

  return NextResponse.json({ ok: true });
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
