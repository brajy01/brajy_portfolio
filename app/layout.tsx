import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { SITE_URL } from "@/lib/site";

const ppMori = localFont({
  src: [
    { path: "./fonts/PPMori-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/PPMori-SemiBold.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-pp-mori",
  display: "swap",
});

const geistMono = localFont({
  src: "./fonts/GeistMono.woff2",
  weight: "400",
  style: "normal",
  variable: "--font-geist-mono",
  display: "swap",
});

const DESCRIPTION =
  "Jeremy Brajon, operations & data analyst. I turn operational data into decisions with Python, SQL and analytics. Multilingual (FR/EN/PT/ES).";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Brajy | Operations × Data × Systems",
    template: "%s | Brajy",
  },
  description: DESCRIPTION,
  applicationName: "Brajy",
  keywords: [
    "Jeremy Brajon",
    "Brajy",
    "operations analyst",
    "data analyst",
    "business intelligence",
    "Python",
    "SQL",
    "data analytics",
    "portfolio",
  ],
  authors: [{ name: "Jeremy Brajon", url: SITE_URL }],
  creator: "Jeremy Brajon",
  publisher: "Jeremy Brajon",
  openGraph: {
    type: "website",
    siteName: "Brajy",
    title: "Brajy | Operations × Data × Systems",
    description: DESCRIPTION,
    url: SITE_URL,
    locale: "en",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brajy | Operations × Data × Systems",
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#ED5315",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${ppMori.variable} ${geistMono.variable}`}>
      <body className="antialiased pt-(--header-height)">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-foreground focus:px-4 focus:py-2 focus:font-caption focus:text-sm focus:text-background"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="page-enter">
          {children}
        </main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
