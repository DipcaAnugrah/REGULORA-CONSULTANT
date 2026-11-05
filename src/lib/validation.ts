import { z } from "zod";
import { normalizePhone } from "./config";
import { services } from "@/content/services";
export const leadSchema = z.object({
  name: z.string().trim().min(2, "Nama minimal 2 karakter.").max(100),
  phone: z
    .string()
    .max(25)
    .refine((v) => !!normalizePhone(v), "Masukkan nomor WhatsApp yang valid."),
  email: z
    .union([
      z.literal(""),
      z.email("Email tidak valid.").max(254, "Email terlalu panjang."),
    ])
    .optional(),
  service: z
    .string()
    .refine(
      (v) => services.some((s) => s.slug === v) || v === "belum-tahu",
      "Pilih jenis layanan.",
    ),
  description: z
    .string()
    .trim()
    .min(20, "Ceritakan kebutuhan Anda minimal 20 karakter.")
    .max(2000, "Maksimal 2.000 karakter."),
  consent: z
    .boolean()
    .refine((v) => v, "Persetujuan kebijakan privasi diperlukan."),
  website: z.string().max(0),
  requestId: z.uuid(),
});
export type LeadInput = z.infer<typeof leadSchema>;
