import { readFile } from "fs/promises";
import { join } from "path";

export async function getLogoDataUri() {
  const logo = await readFile(join(process.cwd(), "public/logo.svg"));
  return `data:image/svg+xml;base64,${logo.toString("base64")}`;
}
