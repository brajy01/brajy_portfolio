import type { Metadata } from "next";
import AboutContent from "@/components/section/about-content";

const DESCRIPTION =
  "From four years running a 400+ tonne operation to building the data systems behind it: Jeremy Brajon's path, experience and education.";

export const metadata: Metadata = {
  title: "About",
  description: DESCRIPTION,
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About | Brajy",
    description: DESCRIPTION,
    url: "/about",
  },
};

export default function About() {
  return <AboutContent />;
}
