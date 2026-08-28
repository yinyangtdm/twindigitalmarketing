import { ImageResponse } from "next/og";
import { getLogoDataUri } from "../lib/load-logo";

export const alt = "Twin Digital Marketing — Full-service digital marketing agency";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const logoSrc = await getLogoDataUri();

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
            gap: "24px",
            marginBottom: "40px",
          }}
        >
          <img src={logoSrc} alt="" height={56} />
          <div style={{ fontSize: "28px", fontWeight: 600, letterSpacing: "-0.02em" }}>
            Twin Digital Marketing
          </div>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: "64px",
            fontWeight: 700,
            lineHeight: 1.08,
            letterSpacing: "-0.03em",
            maxWidth: "900px",
          }}
        >
          <span>Make your brand </span>
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
