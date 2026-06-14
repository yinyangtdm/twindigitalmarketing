import "./globals.css";

const SITE_URL = "https://twindigitalmarketing.com";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Twin Digital Marketing — Social, SEO, Paid Ads & Web Design",
    template: "%s | Twin Digital Marketing",
  },
  description:
    "Twin Digital Marketing is a full-service agency helping businesses grow with data-driven social media, SEO, paid advertising, and standout web design.",
  keywords: [
    "digital marketing agency",
    "social media marketing",
    "SEO",
    "PPC",
    "paid ads",
    "web design",
    "branding",
  ],
  openGraph: {
    title: "Twin Digital Marketing",
    description:
      "Full-service digital marketing — social, SEO, paid ads, and web design under one roof.",
    url: SITE_URL,
    siteName: "Twin Digital Marketing",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Twin Digital Marketing",
    description:
      "Full-service digital marketing — social, SEO, paid ads, and web design under one roof.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
