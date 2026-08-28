import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #20b2aa, #3fd6cd)",
          borderRadius: "36px",
          fontSize: "96px",
          fontWeight: 700,
          color: "#04201e",
        }}
      >
        T
      </div>
    ),
    { ...size }
  );
}
