import { ImageResponse } from "next/og";
import { getLogoDataUri } from "./load-logo";

export async function renderLogoIcon(size) {
  const logoSrc = await getLogoDataUri();
  const logoHeight = Math.round(size * 0.62);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a0b",
        }}
      >
        <img src={logoSrc} alt="" height={logoHeight} />
      </div>
    ),
    { width: size, height: size }
  );
}
