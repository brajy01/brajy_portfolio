import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export const metadata: Metadata = {
  title: {
    default: "Brajy",
    template: "%s | Brajy",
  },
  description: "Operations, Data & Code. Portfolio of Jeremy Brajon.",
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
      <body className="antialiased pt-[88px]">
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
