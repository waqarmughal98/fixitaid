import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { leadService } from "@/services/lead/lead.service";
import { routes } from "@/lib/routes";
import type { LeadPayload } from "@/types/lead.types";

// Every form ends on /thank-you, which is where the Google Ads conversion is counted.
export const useSubmitLead = () => {
  const router = useRouter();
  return useMutation({
    mutationFn: (payload: LeadPayload) => leadService.submit(payload),
    onSuccess: (_data, payload) => {
      router.push(`${routes.thankYou.href}?from=${encodeURIComponent(payload.page)}`);
    },
  });
};
