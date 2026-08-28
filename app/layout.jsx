import "./globals.css";
import JsonLd from "./components/JsonLd";
import { createMetadata, SITE } from "../lib/site";
import { organizationSchema, websiteSchema } from "../lib/schema";

export const metadata = {
  metadataBase: new URL(SITE.url),
  ...createMetadata({ description: SITE.defaultDescription }),
  title: {
    default: `${SITE.name} — Social, SEO, Paid Ads & Web Design`,
    template: `%s | ${SITE.name}`,
  },
  applicationName: SITE.name,
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  category: "Digital Marketing",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/icon", sizes: "32x32", type: "image/png" },
      { url: "/logo.svg", type: "image/svg+xml" },
    ],
    shortcut: ["/icon"],
    apple: [{ url: "/apple-icon", sizes: "180x180", type: "image/png" }],
    other: [
      {
        rel: "icon",
        url: "/android-chrome-192x192",
        sizes: "192x192",
        type: "image/png",
      },
      {
        rel: "icon",
        url: "/android-chrome-512x512",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
  manifest: "/manifest.webmanifest",
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-title": SITE.name,
    "apple-mobile-web-app-status-bar-style": "black-translucent",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0a0a0b",
  colorScheme: "dark",
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
      <body>
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        {children}
      </body>
    </html>
  );
}
