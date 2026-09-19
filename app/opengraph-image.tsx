import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Fonitas — Application Publishing Operating System";
export const size = {
  width: 1200,
  height: 630,
};
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
          padding: "72px",
          background: "#070707",
          color: "#f4f2ed",
          fontFamily: "Arial, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: -120,
            top: -160,
            width: 620,
            height: 620,
            borderRadius: "50%",
            background: "rgba(255,90,31,.14)",
            filter: "blur(90px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.16,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        <div style={{ display: "flex", flexDirection: "column", zIndex: 1 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              fontSize: 20,
              fontWeight: 700,
              letterSpacing: 5,
              color: "#ff6a2a",
              textTransform: "uppercase",
            }}
          >
            <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5a1f" }} />
            Fonitas
          </div>
          <div
            style={{
              marginTop: 58,
              fontSize: 76,
              lineHeight: 0.92,
              fontWeight: 700,
              letterSpacing: -4,
              maxWidth: 850,
            }}
          >
            Application publishing.
            <br />
            <span style={{ color: "rgba(244,242,237,.34)" }}>From intake to market.</span>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            zIndex: 1,
            fontSize: 18,
            color: "rgba(244,242,237,.48)",
            letterSpacing: 1,
          }}
        >
          <span style={{ width: 48, height: 1, background: "#ff5a1f" }} />
          Application Publishing Operating System
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
