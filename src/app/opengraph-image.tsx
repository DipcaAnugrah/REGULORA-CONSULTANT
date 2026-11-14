import { ImageResponse } from "next/og";
export const alt =
  "REGULORA CONSULTANT — Pendampingan perizinan produk dan usaha";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    <div
      style={{
        background: "#edf2fa",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        padding: 85,
        color: "#17233d",
      }}
    >
      <div style={{ fontSize: 27, color: "#234c9f" }}>REGULORA CONSULTANT</div>
      <div
        style={{
          fontSize: 76,
          lineHeight: 1.15,
          marginTop: 65,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <span>Langkah lebih pasti.</span>
        <span style={{ color: "#234c9f" }}>Usaha lebih siap.</span>
      </div>
      <div style={{ fontSize: 25, marginTop: 40 }}>
        Alat kesehatan · PKRT · Pangan · Kosmetik
      </div>
    </div>,
    size,
  );
}

export const dynamic = "force-static";
