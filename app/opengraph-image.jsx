import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Twin Digital Marketing — Full-service digital marketing agency";
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
          justifyContent: "center",
          padding: "72px 80px",
          background: "linear-gradient(145deg, #0a0a0b 0%, #101820 55%, #0a1418 100%)",
          color: "#f4f4f6",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "14px",
              background: "linear-gradient(135deg, #20b2aa, #3fd6cd)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "28px",
              fontWeight: 700,
              color: "#04201e",
            }}
          >
            T
          </div>
          <div style={{ fontSize: "28px", fontWeight: 600, letterSpacing: "-0.02em" }}>
            Twin Digital Marketing
          </div>
        </div>
        <div
          style={{
            fontSize: "64px",
            fontWeight: 700,
            lineHeight: 1.08,
            letterSpacing: "-0.03em",
            maxWidth: "900px",
          }}
        >
          Make your brand{" "}
          <span style={{ color: "#3fd6cd" }}>impossible to ignore.</span>
        </div>
        <div
          style={{
            marginTop: "28px",
            fontSize: "28px",
            lineHeight: 1.4,
            color: "#9a9aa6",
            maxWidth: "820px",
          }}
        >
          Social media, SEO, paid ads, and web design — all under one roof.
        </div>
      </div>
    ),
    { ...size }
  );
}
