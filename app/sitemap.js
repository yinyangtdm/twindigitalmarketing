import { ROUTES, SITE } from "../lib/site";

export default function sitemap() {
  const lastModified = new Date();

  return ROUTES.map(({ path, changeFrequency, priority }) => ({
    url: `${SITE.url}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
