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
          <div style={{ fontSize: "28px", fontWeight: 600 }}>
            Twin Digital Marketing
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: "58px",
            fontWeight: 700,
            lineHeight: 1.15,
            maxWidth: "960px",
          }}
        >
          <div style={{ display: "flex" }}>Make your brand</div>
          <div style={{ display: "flex", color: "#3fd6cd" }}>impossible to ignore.</div>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: "28px",
            fontSize: "26px",
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
