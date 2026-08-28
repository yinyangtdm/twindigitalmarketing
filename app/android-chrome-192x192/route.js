import { renderLogoIcon } from "../../lib/render-logo-icon";

export async function GET() {
  return renderLogoIcon(192);
}
