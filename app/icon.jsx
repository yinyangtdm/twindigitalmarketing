import { renderLogoIcon } from "../lib/render-logo-icon";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default async function Icon() {
  return renderLogoIcon(32);
}
