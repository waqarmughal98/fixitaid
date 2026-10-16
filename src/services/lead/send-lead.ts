import "server-only";
import nodemailer from "nodemailer";
import type { LeadPayload } from "@/types/lead.types";

function smtp() {
  const user = process.env.SMTP_USER ?? "";
  const pass = (process.env.SMTP_PASS ?? "").replace(/\s+/g, "");
  const port = Number(process.env.SMTP_PORT ?? 587);
  if (!user || !pass) return null;
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST ?? "smtp.gmail.com",
    port,
    secure: port === 465,
    auth: { user, pass },
  });
}

/** Email one lead through Google SMTP. Throws if the message is rejected. */
export async function sendLeadEmail(lead: LeadPayload) {
  const transport = smtp();
  if (!transport) throw new Error("smtp_not_configured");

  const from = process.env.MAIL_FROM ?? process.env.SMTP_USER!;
  const to = process.env.MAIL_TO ?? from;
  const fromName = process.env.MAIL_FROM_NAME ?? "Fix It Aid website";

  const lines = [
    "New website lead",
    "",
    `Name: ${lead.name}`,
    `Phone: ${lead.phone}`,
    `ZIP: ${lead.zip}`,
    `Service: ${lead.service}`,
  ];
  if (lead.urgent) lines.push(`Urgent: ${lead.urgent}`);
  if (lead.details) lines.push("", "Details:", lead.details);
  lines.push("", `Page: ${lead.page || "(unknown)"}`);

  await transport.sendMail({
    from: `"${fromName.replace(/"/g, "")}" <${from}>`,
    to,
    replyTo: from,
    subject: `New lead: ${lead.service} — ${lead.name} (${lead.zip})`,
    text: lines.join("\n"),
  });
}
