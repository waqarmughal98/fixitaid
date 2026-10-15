export type LeadPayload = {
  name: string;
  phone: string;
  zip: string;
  service: string;
  details?: string;
  urgent?: "yes" | "no";
  /** Page the lead came from, e.g. /free-roof-check. */
  page: string;
  /** Honeypot. Real people never fill it in. */
  company?: string;
};

export type LeadResponse = { ok?: boolean; error?: string };

export type LeadFormValues = Omit<LeadPayload, "page">;
