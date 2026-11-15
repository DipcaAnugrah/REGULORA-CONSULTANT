"use client";
import Link from "@/components/static-link";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { makeLeadSchema, type LeadInput } from "@/lib/validation";
import { getServices } from "@/content/services";
import { track, useLocale } from "./client";
import { getDict, localePath } from "@/i18n";
import { whatsappUrl } from "@/lib/config";
export function ContactForm() {
  const lang = useLocale();
  const t = getDict(lang).form;
  const services = getServices(lang);
  const [state, setState] = useState<"idle" | "error">("idle");
  const [message, setMessage] = useState("");
  const started = useRef(false);
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<LeadInput>({
    resolver: zodResolver(makeLeadSchema(lang)),
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
    // Slugs are the same in every language.
    if (getServices().some((item) => item.slug === service)) setValue("service", service!);
  }, [setValue]);
  function submit(data: LeadInput) {
    const service = services.find((item) => item.slug === data.service)?.name || t.messageUnsure;
    const href = whatsappUrl([
      t.messageIntro,
      `${t.messageName}: ${data.name}`, `${t.messagePhone}: ${data.phone}`,
      data.email ? `${t.messageEmail}: ${data.email}` : "",
      `${t.messageService}: ${service}`, `${t.messageNeeds}: ${data.description}`,
    ].filter(Boolean).join("\n"));
    if (!href) { setState("error"); setMessage(t.noWhatsapp); return; }
    track("click_whatsapp", { service: data.service });
    setState("idle");
    setMessage(t.opened);
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
      <h2 style={{ fontSize: 25, marginBottom: 15 }}>{t.title}</h2>
      <p style={{ fontSize: 12, marginBottom: 24 }}>{t.intro}</p>
      <fieldset
        style={{ border: 0, padding: 0, margin: 0 }}
      >
        <div className="field">
          <label htmlFor="name">{t.name}</label>
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
            <label htmlFor="phone">{t.phone}</label>
            <input
              id="phone"
              type="tel"
              autoComplete="tel"
              maxLength={25}
              placeholder={t.phonePlaceholder}
              {...register("phone")}
              aria-invalid={!!errors.phone}
              aria-describedby="phone-error"
            />
            <p id="phone-error" className="field-error">
              {errors.phone?.message}
            </p>
          </div>
          <div className="field">
            <label htmlFor="email">{t.email}</label>
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
          <label htmlFor="service">{t.service}</label>
          <select
            id="service"
            {...register("service")}
            aria-invalid={!!errors.service}
            aria-describedby="service-error"
          >
            <option value="">{t.servicePlaceholder}</option>
            {services.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.name}
              </option>
            ))}
            <option value="belum-tahu">{t.serviceUnsure}</option>
          </select>
          <p id="service-error" className="field-error">
            {errors.service?.message}
          </p>
        </div>
        <div className="field">
          <label htmlFor="description">{t.description}</label>
          <textarea
            id="description"
            maxLength={2000}
            placeholder={t.descriptionPlaceholder}
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
              {t.consentBefore}{" "}
              <Link href={localePath(lang, "/kebijakan-privasi")}>
                {t.consentLink}
              </Link>{" "}
              {t.consentAfter}
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
          {t.submit}
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
