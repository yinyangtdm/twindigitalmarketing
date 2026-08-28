import { SITE } from "./site";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE.url}/#organization`,
    name: SITE.name,
    url: SITE.url,
    logo: `${SITE.url}/logo.svg`,
    image: `${SITE.url}/opengraph-image`,
    email: SITE.email,
    description: SITE.defaultDescription,
    priceRange: "$$",
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    serviceType: [
      "Social Media Marketing",
      "Search Engine Optimization",
      "Pay-Per-Click Advertising",
      "Web Design",
      "Branding",
    ],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    name: SITE.name,
    url: SITE.url,
    description: SITE.defaultDescription,
    publisher: { "@id": `${SITE.url}/#organization` },
    inLanguage: "en-US",
  };
}

export function serviceSchema({ name, description, path }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${SITE.url}${path}`,
    provider: { "@id": `${SITE.url}/#organization` },
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
  };
}

export function breadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE.url}${item.path}`,
    })),
  };
}
