"use client";
import Link from "next/link";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { leadSchema, type LeadInput } from "@/lib/validation";
import { services } from "@/content/services";
import { track } from "./client";
export function ContactForm({
  ready,
  initialService,
}: {
  ready: boolean;
  initialService: string;
}) {
  const [state, setState] = useState<"idle" | "sending" | "success" | "error">(
    "idle",
  );
  const [message, setMessage] = useState("");
  const started = useRef(false);
  const busy = useRef(false);
  const requestId = useRef("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LeadInput>({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      service: initialService,
      consent: false,
      website: "",
      email: "",
      requestId: "00000000-0000-4000-8000-000000000000",
    },
  });
  async function submit(data: LeadInput) {
    if (busy.current || state === "success" || !ready) return;
    busy.current = true;
    setState("sending");
    requestId.current ||= crypto.randomUUID();
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, requestId: requestId.current }),
      });
      const result = await res.json();
      if (!res.ok)
        throw new Error(
          result.error || "Pengiriman belum berhasil. Silakan coba lagi.",
        );
      setState("success");
      setMessage(
        "Permintaan konsultasi Anda telah tersimpan. Tim akan meninjau kebutuhan Anda melalui kontak yang diberikan.",
      );
      if (!result.duplicate) {
        track("generate_lead", { service: data.service });
        const destination = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION;
        if (destination)
          track("conversion", {
            send_to: destination,
            transaction_id: result.id,
          });
      }
    } catch (e) {
      setState("error");
      setMessage(
        e instanceof Error ? e.message : "Koneksi bermasalah. Coba kembali.",
      );
    } finally {
      busy.current = false;
    }
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
        sensitif.
      </p>
      {!ready && (
        <div className="notice" role="status">
          Formulir konsultasi belum menerima pengiriman saat ini. Silakan
          gunakan kanal kontak lain yang tersedia di halaman ini.
        </div>
      )}
      <fieldset
        disabled={state === "sending" || state === "success"}
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
          disabled={!ready || state === "sending" || state === "success"}
          type="submit"
        >
          {state === "sending"
            ? "Menyimpan permintaan…"
            : state === "success"
              ? "Permintaan tersimpan ✓"
              : "Kirim permintaan konsultasi ↗"}
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
