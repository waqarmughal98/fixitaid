import { api } from "@/lib/api/client";
import { leadEndpoint } from "@/config/site";
import type { LeadPayload, LeadResponse } from "@/types/lead.types";

export const leadService = {
  submit: async (payload: LeadPayload) => (await api.post<LeadResponse>(leadEndpoint, payload)).data,
};
