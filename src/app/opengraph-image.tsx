import { ImageResponse } from "next/og";

export const alt = "WPI Whisper — WPI Men's Ultimate Frisbee";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#000000",
          color: "#ffffff",
          padding: "72px 80px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
          <div
            style={{
              width: 68,
              height: 68,
              borderRadius: 999,
              border: "16px solid #AC2B37",
            }}
          />
          <div style={{ fontSize: 30, fontWeight: 800, letterSpacing: "-0.02em" }}>
            WPI Whisper
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ color: "#A9B0B7", fontSize: 28, fontWeight: 700, letterSpacing: "0.08em" }}>
            WORCESTER POLYTECHNIC INSTITUTE
          </div>
          <div style={{ marginTop: 18, maxWidth: 1000, fontSize: 72, fontWeight: 900, lineHeight: 1 }}>
            Men&apos;s Ultimate Frisbee
          </div>
        </div>
        <div style={{ width: "100%", height: 10, background: "#AC2B37" }} />
      </div>
    ),
    size,
  );
}
