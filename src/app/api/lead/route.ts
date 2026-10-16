import { NextRequest } from "next/server";
import * as Yup from "yup";
import { quickLeadSchema } from "@/lib/validations/lead";
import { sendLeadEmail } from "@/services/lead/send-lead";
import type { LeadPayload } from "@/types/lead.types";

export const dynamic = "force-dynamic";

const leadApiSchema = quickLeadSchema.shape({
  page: Yup.string().max(200).default("/"),
  urgent: Yup.string().oneOf(["yes", "no"]).optional(),
});

const hits = new Map<string, number[]>();

function clientIp(request: NextRequest) {
  const forwarded = request.headers.get("x-forwarded-for");
  return forwarded?.split(",")[0]?.trim() || "local";
}

function rateOk(ip: string) {
  const now = Date.now();
  const windowMs = 10 * 60 * 1000;
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < windowMs);
  if (recent.length >= 8) {
    hits.set(ip, recent);
    return false;
  }
  recent.push(now);
  hits.set(ip, recent);
  return true;
}

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return Response.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const raw = body as Record<string, unknown>;
  // Honeypot: pretend it worked.
  if (typeof raw.company === "string" && raw.company.trim()) {
    return Response.json({ ok: true });
  }

  if (!rateOk(clientIp(request))) {
    return Response.json({ ok: false, error: "rate_limited" }, { status: 429 });
  }

  try {
    const lead = (await leadApiSchema.validate(raw, { abortEarly: false, stripUnknown: true })) as LeadPayload;
    await sendLeadEmail(lead);
    return Response.json({ ok: true });
  } catch (error) {
    if (error instanceof Yup.ValidationError) {
      return Response.json({ ok: false, error: "validation", fields: error.errors }, { status: 422 });
    }
    const message = error instanceof Error ? error.message : "send_failed";
    if (message === "smtp_not_configured") {
      return Response.json({ ok: false, error: "not_configured" }, { status: 500 });
    }
    console.error("lead mail failed:", message);
    return Response.json({ ok: false, error: "send_failed" }, { status: 500 });
  }
}
