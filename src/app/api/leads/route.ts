import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Redis } from "@upstash/redis";
import { Ratelimit } from "@upstash/ratelimit";
import { createHash } from "node:crypto";
import { leadSchema } from "@/lib/validation";
import { leadsReady, normalizePhone, siteUrl } from "@/lib/config";
export const runtime = "nodejs";
export async function POST(req: NextRequest) {
  const origin = req.headers.get("origin");
  if (!origin || origin !== new URL(siteUrl).origin)
    return NextResponse.json(
      { error: "Permintaan tidak diizinkan." },
      { status: 403 },
    );
  if (!leadsReady())
    return NextResponse.json(
      { error: "Formulir belum aktif. Gunakan kanal kontak yang tersedia." },
      { status: 503 },
    );
  if (!req.headers.get("content-type")?.startsWith("application/json"))
    return NextResponse.json(
      { error: "Format permintaan tidak valid." },
      { status: 415 },
    );
  try {
    const redis = Redis.fromEnv();
    const limiter = new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(5, "10 m"),
      prefix: "regulora:leads",
      analytics: false,
    });
    // Set this header only at a trusted reverse proxy; never trust user-supplied X-Forwarded-For on a directly exposed server.
    const ip = process.env.TRUSTED_IP_HEADER
      ? req.headers.get(process.env.TRUSTED_IP_HEADER) || "unknown"
      : "shared";
    const key = createHash("sha256")
      .update(ip + "|" + process.env.SUPABASE_SERVICE_ROLE_KEY)
      .digest("hex");
    const limit = await limiter.limit(key);
    if (!limit.success)
      return NextResponse.json(
        {
          error:
            "Terlalu banyak permintaan. Silakan coba lagi dalam beberapa menit.",
        },
        { status: 429, headers: { "Retry-After": "600" } },
      );
    const reader = req.body?.getReader();
    if (!reader)
      return NextResponse.json(
        { error: "Permintaan kosong." },
        { status: 400 },
      );
    let size = 0;
    const chunks: Uint8Array[] = [];
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      size += value.length;
      if (size > 16384) {
        await reader.cancel();
        return NextResponse.json(
          { error: "Data terlalu besar." },
          { status: 413 },
        );
      }
      chunks.push(value);
    }
    let body;
    try {
      body = JSON.parse(Buffer.concat(chunks).toString("utf8"));
    } catch {
      return NextResponse.json({ error: "Data tidak valid." }, { status: 400 });
    }
    const parsed = leadSchema.safeParse(body);
    if (!parsed.success)
      return NextResponse.json(
        { error: "Periksa kembali kelengkapan data dan persetujuan privasi." },
        { status: 400 },
      );
    const data = parsed.data;
    const db = createClient(
      process.env.SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!,
      { auth: { persistSession: false, autoRefreshToken: false } },
    );
    const { error } = await db
      .from("leads")
      .insert({
        id: data.requestId,
        name: data.name,
        phone: normalizePhone(data.phone),
        email: data.email || null,
        service: data.service,
        description: data.description,
        consent: true,
        consent_version: "2026-11-05",
        status: "new",
      });
    if (error?.code === "23505")
      return NextResponse.json({
        ok: true,
        id: data.requestId,
        duplicate: true,
      });
    if (error)
      return NextResponse.json(
        { error: "Permintaan belum tersimpan. Silakan coba kembali." },
        { status: 502 },
      );
    return NextResponse.json(
      { ok: true, id: data.requestId },
      { status: 201, headers: { "Cache-Control": "no-store" } },
    );
  } catch {
    return NextResponse.json(
      {
        error:
          "Layanan sementara tidak tersedia. Data belum dikonfirmasi tersimpan; coba kembali.",
      },
      { status: 503 },
    );
  }
}
