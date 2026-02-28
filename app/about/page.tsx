import type { Metadata } from "next";
import AboutContent from "@/components/section/about-content";

export const metadata: Metadata = {
  title: "About",
};

export default function About() {
  return <AboutContent />;
}
