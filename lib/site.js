export const SITE = {
  name: "Twin Digital Marketing",
  url: "https://twindigitalmarketing.com",
  email: "yin@twindigitalmarketing.com",
  locale: "en_US",
  defaultDescription:
    "Twin Digital Marketing is a full-service agency helping businesses grow with data-driven social media, SEO, paid advertising, and standout web design.",
  tagline: "Social, SEO, paid ads, and web design under one roof.",
};

export const OG_IMAGE = {
  path: "/opengraph-image",
  width: 1200,
  height: 630,
  type: "image/png",
  alt: "Twin Digital Marketing — Full-service digital marketing agency",
};

export function getOgImageUrl() {
  return `${SITE.url}${OG_IMAGE.path}`;
}

/**
 * Build consistent page metadata for SEO and link previews.
 * Uses absolute HTTPS URLs for images so iOS, Android, WhatsApp, and Slack all resolve previews correctly.
 */
export function createMetadata({
  title,
  description = SITE.defaultDescription,
  path = "",
  noIndex = false,
}) {
  const url = `${SITE.url}${path}`;
  const pageTitle = title ? `${title} | ${SITE.name}` : `${SITE.name} — Social, SEO, Paid Ads & Web Design`;
  const imageUrl = getOgImageUrl();

  const image = {
    url: imageUrl,
    secureUrl: imageUrl,
    width: OG_IMAGE.width,
    height: OG_IMAGE.height,
    alt: OG_IMAGE.alt,
    type: OG_IMAGE.type,
  };

  return {
    title: title || undefined,
    description,
    keywords: [
      "digital marketing agency",
      "social media marketing",
      "SEO",
      "PPC",
      "paid ads",
      "web design",
      "branding",
      ...(title ? [title.toLowerCase()] : []),
    ],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: pageTitle,
      description,
      url,
      siteName: SITE.name,
      locale: SITE.locale,
      type: "website",
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      images: [image],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true, googleBot: { index: true, follow: true } },
  };
}

export const ROUTES = [
  { path: "", changeFrequency: "weekly", priority: 1 },
  { path: "/services/social-media", changeFrequency: "monthly", priority: 0.9 },
  { path: "/services/seo", changeFrequency: "monthly", priority: 0.9 },
  { path: "/services/paid-ads", changeFrequency: "monthly", priority: 0.9 },
  { path: "/services/web-design", changeFrequency: "monthly", priority: 0.9 },
  { path: "/onboarding", changeFrequency: "monthly", priority: 0.7 },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/terms", changeFrequency: "yearly", priority: 0.3 },
];
