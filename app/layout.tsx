import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { SITE_URL } from "@/lib/site";

const DESCRIPTION =
  "Jeremy Brajon, operations & data analyst. I turn operational data into decisions with Python, SQL and analytics. Multilingual (FR/EN/PT/ES).";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Brajy | Operations × Data × Code",
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
    title: "Brajy | Operations × Data × Code",
    description: DESCRIPTION,
    url: SITE_URL,
    locale: "en",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brajy | Operations × Data × Code",
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
  colorScheme: "light dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="/fonts/PPMori-Regular.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/PPMori-SemiBold.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/GeistMono.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
      </head>
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
      </body>
    </html>
  );
}
