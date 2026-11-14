"use client";
import Link from "@/components/static-link";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { leadSchema, type LeadInput } from "@/lib/validation";
import { services } from "@/content/services";
import { track } from "./client";
import { whatsappUrl } from "@/lib/config";
export function ContactForm() {
  const [state, setState] = useState<"idle" | "error">("idle");
  const [message, setMessage] = useState("");
  const started = useRef(false);
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<LeadInput>({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      service: "",
      consent: false,
      website: "",
      email: "",
      requestId: "00000000-0000-4000-8000-000000000000",
    },
  });
  useEffect(() => {
    const service = new URLSearchParams(window.location.search).get("layanan");
    if (services.some((item) => item.slug === service)) setValue("service", service!);
  }, [setValue]);
  function submit(data: LeadInput) {
    const service = services.find((item) => item.slug === data.service)?.name || "Belum yakin";
    const href = whatsappUrl([
      "Halo REGULORA CONSULTANT, saya ingin berkonsultasi.",
      "Nama: " + data.name, "WhatsApp: " + data.phone,
      data.email ? "Email: " + data.email : "",
      "Layanan: " + service, "Kebutuhan: " + data.description,
    ].filter(Boolean).join("\n"));
    if (!href) { setState("error"); setMessage("WhatsApp belum tersedia. Silakan hubungi kami melalui email."); return; }
    track("click_whatsapp", { service: data.service });
    setState("idle");
    setMessage("Lanjutkan dengan menekan Kirim di WhatsApp. Membuka WhatsApp belum mengirim pesan Anda.");
    window.location.assign(href);
  }
  return (
    <form
      className="form"
      onSubmit={(event) => {
        void handleSubmit(submit)(event);
      }}
      onFocus={() => {
        if (!started.current) {
          started.current = true;
          track("contact_form_start");
        }
      }}
      noValidate
    >
      <h2 style={{ fontSize: 25, marginBottom: 15 }}>
        Ceritakan kebutuhan Anda
      </h2>
      <p style={{ fontSize: 12, marginBottom: 24 }}>
        Kolom bertanda * wajib diisi. Hindari menyertakan dokumen atau informasi
        sensitif. Tombol di bawah membuka pesan di WhatsApp; Anda perlu menekan Kirim di WhatsApp.
      </p>
      <fieldset
        style={{ border: 0, padding: 0, margin: 0 }}
      >
        <div className="field">
          <label htmlFor="name">Nama lengkap *</label>
          <input
            id="name"
            autoComplete="name"
            maxLength={100}
            {...register("name")}
            aria-invalid={!!errors.name}
            aria-describedby="name-error"
          />
          <p id="name-error" className="field-error">
            {errors.name?.message}
          </p>
        </div>
        <div className="form-grid">
          <div className="field">
            <label htmlFor="phone">Nomor WhatsApp *</label>
            <input
              id="phone"
              type="tel"
              autoComplete="tel"
              maxLength={25}
              placeholder="08… atau 62…"
              {...register("phone")}
              aria-invalid={!!errors.phone}
              aria-describedby="phone-error"
            />
            <p id="phone-error" className="field-error">
              {errors.phone?.message}
            </p>
          </div>
          <div className="field">
            <label htmlFor="email">Email (opsional)</label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              maxLength={254}
              {...register("email")}
              aria-invalid={!!errors.email}
              aria-describedby="email-error"
            />
            <p id="email-error" className="field-error">
              {errors.email?.message}
            </p>
          </div>
        </div>
        <div className="field">
          <label htmlFor="service">Jenis layanan *</label>
          <select
            id="service"
            {...register("service")}
            aria-invalid={!!errors.service}
            aria-describedby="service-error"
          >
            <option value="">Pilih layanan</option>
            {services.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.name}
              </option>
            ))}
            <option value="belum-tahu">Saya belum yakin</option>
          </select>
          <p id="service-error" className="field-error">
            {errors.service?.message}
          </p>
        </div>
        <div className="field">
          <label htmlFor="description">Deskripsi kebutuhan *</label>
          <textarea
            id="description"
            maxLength={2000}
            placeholder="Ceritakan jenis produk, kegiatan usaha, dan bantuan yang Anda perlukan…"
            {...register("description")}
            aria-invalid={!!errors.description}
            aria-describedby="description-error"
          />
          <p id="description-error" className="field-error">
            {errors.description?.message}
          </p>
        </div>
        <div className="honeypot" aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input
            id="website"
            tabIndex={-1}
            autoComplete="off"
            {...register("website")}
          />
        </div>
        <div className="field">
          <label className="checkbox">
            <input
              type="checkbox"
              {...register("consent")}
              aria-describedby="consent-error"
            />
            <span>
              Saya menyetujui{" "}
              <Link href="/kebijakan-privasi">Kebijakan Privasi</Link> dan
              pemrosesan data untuk menanggapi permintaan konsultasi. *
            </span>
          </label>
          <p className="field-error" id="consent-error">
            {errors.consent?.message}
          </p>
        </div>
        <button
          className="button primary"
          type="submit"
        >
          Lanjutkan ke WhatsApp ↗
        </button>
      </fieldset>
      {message && (
        <div
          role={state === "error" ? "alert" : "status"}
          style={{ marginTop: 20 }}
          className={`notice ${state === "error" ? "error-notice" : ""}`}
        >
          {message}
        </div>
      )}
    </form>
  );
}
