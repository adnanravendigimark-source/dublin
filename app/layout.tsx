import type { Metadata } from "next";
import Script from "next/script";
import { Cormorant_Garamond, Alex_Brush } from "next/font/google";
import { SITE_URL } from "@/lib/site";
import { resolveRobots } from "@/lib/seo";
import { getSiteChrome } from "@/lib/homepage";
import { hexToRgbTriplet } from "@/lib/color";
import "./globals.css";


const displayFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
});

const scriptFont = Alex_Brush({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-script",
});

const DEFAULT_OG_IMAGE =
  "https://images.unsplash.com/photo-1546986294-d9cdc4873420?q=80&w=2400&auto=format&fit=crop";

// Google Analytics (GA4) measurement ID — PLACEHOLDER. Replace with this
// site's own GA4 property ID before launch. Do not reuse another site's
// ID or you'll mix both sites' traffic together (see README "Before you
// launch").
const GA_MEASUREMENT_ID = "G-8WV26RP73S";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Day Trips from Dublin",
  url: SITE_URL,
  description:
    "Independent guide comparing certified guided day trips from Dublin — the Cliffs of Moher, the Wicklow Mountains, and the Giant's Causeway — with round-trip coach transport included.",
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Day Trips from Dublin",
  url: SITE_URL,
};

export function generateMetadata(): Metadata {
  const robots = resolveRobots(false);

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: "Day Trips from Dublin | Dublin Day Trips (2026)",
      template: "%s | Day Trips from Dublin",
    },
    description:
      "Compare the best guided day trips from Dublin — Cliffs of Moher, Wicklow Mountains & Glendalough, and the Giant's Causeway. Round-trip coach transport, local driver-guides, and free cancellation.",
    keywords: [
      "Day Trips from Dublin",
      "Dublin Day Trips",
      "Dublin day trip tours",
      "Cliffs of Moher day trip from Dublin",
      "Wicklow Mountains day trip",
      "Giant's Causeway day trip from Dublin",
      "guided day trip from Dublin",
      "Dublin coach tour",
      "best day trips from Dublin",
      "Dublin day trips 2026",
    ],
    alternates: {
      canonical: "/",
    },
    icons: {
      icon: [
        { url: "/favicon.svg", type: "image/svg+xml" },
        { url: "/icon", type: "image/png" },
      ],
      apple: "/apple-icon",
    },
    robots,
    openGraph: {
      title: "Day Trips from Dublin | Guided Day Trips & Coach Tours",
      description:
        "Book guided day trips from Dublin with round-trip coach transport and a local driver-guide included. Free cancellation up to 24h prior.",
      type: "website",
      url: SITE_URL,
      siteName: "Day Trips from Dublin",
      images: [{ url: DEFAULT_OG_IMAGE, width: 2400, height: 1350, alt: "The Cliffs of Moher along Ireland's Wild Atlantic Way under a dramatic sky" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Day Trips from Dublin | Guided Day Trips & Coach Tours",
      description:
        "Book guided day trips from Dublin with round-trip coach transport and a local driver-guide included. Free cancellation up to 24h prior.",
      images: [DEFAULT_OG_IMAGE],
    },
  };
}

function buildThemeStyle(theme: { primary: string; secondary: string; dark: string; accent: string }) {
  const vars: [string, string | null][] = [
    ["--color-maya-gold", hexToRgbTriplet(theme.primary)],
    ["--color-maya-emerald", hexToRgbTriplet(theme.secondary)],
    ["--color-maya-charcoal", hexToRgbTriplet(theme.dark)],
    ["--color-gold-400", hexToRgbTriplet(theme.accent)],
    ["--color-chichen-gold", hexToRgbTriplet(theme.primary)],
    ["--color-chichen-navy", hexToRgbTriplet(theme.secondary)],
    ["--color-chichen-charcoal", hexToRgbTriplet(theme.dark)],
  ];
  const declarations = vars
    .filter(([, value]) => value !== null)
    .map(([name, value]) => `${name}:${value};`)
    .join("");
  return declarations ? `:root{${declarations}}` : "";
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme } = await getSiteChrome();
  const themeStyle = buildThemeStyle(theme);

  return (
    <html lang="en" className={`${displayFont.variable} ${scriptFont.variable}`}>
      <head>
        {/* Warms up the connection to Google's analytics domains ahead of
            the afterInteractive gtag.js load below, shaving the DNS/TLS
            handshake off its actual request instead of paying for it when
            the script fires. */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        {/* Google tag (gtag.js) */}
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
      </head>
      <body className="font-body bg-stone-50 text-stone-900 antialiased">
        {themeStyle && <style dangerouslySetInnerHTML={{ __html: themeStyle }} />}
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </body>
    </html>
  );
}
