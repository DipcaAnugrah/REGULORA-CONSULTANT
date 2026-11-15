import { z } from "zod";
import { normalizePhone } from "./config";
import { services } from "@/content/services";
import { getDict, type Locale } from "@/i18n";
export function makeLeadSchema(locale: Locale = "id") {
  const m = getDict(locale).validation;
  return z.object({
    name: z.string().trim().min(2, m.name).max(100),
    phone: z
      .string()
      .max(25)
      .refine((v) => !!normalizePhone(v), m.phone),
    email: z
      .union([z.literal(""), z.email(m.email).max(254, m.emailLong)])
      .optional(),
    service: z
      .string()
      .refine(
        (v) => services.some((s) => s.slug === v) || v === "belum-tahu",
        m.service,
      ),
    description: z
      .string()
      .trim()
      .min(20, m.descriptionShort)
      .max(2000, m.descriptionLong),
    consent: z.boolean().refine((v) => v, m.consent),
    website: z.string().max(0),
    requestId: z.uuid(),
  });
}
export const leadSchema = makeLeadSchema("id");
export type LeadInput = z.infer<typeof leadSchema>;
