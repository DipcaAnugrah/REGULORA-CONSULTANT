import { test } from "node:test";
import assert from "node:assert/strict";
import { normalizePhone, whatsappUrl } from "../src/lib/config";
import { leadSchema } from "../src/lib/validation";
import { services } from "../src/content/services";
import { track } from "../src/lib/analytics";
const lead = {
  name: "Pengujian Lokal",
  phone: "081234567890",
  email: "",
  service: "pkrt",
  description: "Permintaan pengujian lokal validasi saja.",
  consent: true,
  website: "",
  requestId: "da0bd35b-bf5c-48eb-bc59-43de3401569a",
};
test("normalizes Indonesian and international phone numbers", () => {
  assert.equal(normalizePhone("+62 812-3456-7890"), "6281234567890");
  assert.equal(normalizePhone("081234567890"), "6281234567890");
  assert.equal(normalizePhone("invalid"), null);
  assert.equal(normalizePhone("123"), null);
});
test("does not generate a fake WhatsApp link", () => {
  if (!process.env.NEXT_PUBLIC_WHATSAPP_NUMBER)
    assert.equal(whatsappUrl("test"), null);
});
test("accepts valid lead and optional email", () => {
  assert.equal(leadSchema.safeParse(lead).success, true);
});
test("rejects missing consent, spam, unknown services, oversized input and invalid contacts", () => {
  for (const patch of [
    { consent: false },
    { website: "spam" },
    { service: "unknown" },
    { description: "x".repeat(2001) },
    { phone: "123" },
    { email: "invalid" },
    { name: " " },
    { requestId: "invalid" },
  ])
    assert.equal(
      leadSchema.safeParse({ ...lead, ...patch }).success,
      false,
      JSON.stringify(patch),
    );
});
test("six distinct service landing pages with verification flags", () => {
  assert.equal(services.length, 6);
  assert.equal(new Set(services.map((s) => s.slug)).size, 6);
  assert.ok(
    services.every((s) => s.needsVerification && s.preparation.length === 3),
  );
  assert.equal(new Set(services.map((s) => s.focus)).size, 6);
});
test("analytics respects consent, strips private fields and URL queries, tolerates blocked storage", () => {
  const calls: unknown[][] = [];
  let consent = "rejected";
  Object.defineProperty(globalThis, "localStorage", {
    configurable: true,
    value: { getItem: () => consent },
  });
  Object.defineProperty(globalThis, "window", {
    configurable: true,
    value: { gtag: (...args: unknown[]) => calls.push(args) },
  });
  Object.defineProperty(globalThis, "location", {
    configurable: true,
    value: {
      origin: "https://example.test",
      pathname: "/kontak",
      search: "?email=private@example.test",
    },
  });
  track("generate_lead", { service: "pkrt" });
  assert.equal(calls.length, 0);
  consent = "accepted";
  track("generate_lead", {
    service: "pkrt",
    email: "private@example.test",
    phone: "private",
    description: "private",
  });
  assert.deepEqual(calls, [
    [
      "event",
      "generate_lead",
      {
        service: "pkrt",
        page_location: "https://example.test/kontak",
        page_referrer: "",
      },
    ],
  ]);
  track("unknown_event");
  assert.equal(calls.length, 1);
  Object.defineProperty(globalThis, "localStorage", {
    configurable: true,
    value: {
      getItem: () => {
        throw new Error("blocked");
      },
    },
  });
  assert.doesNotThrow(() => track("generate_lead"));
});
