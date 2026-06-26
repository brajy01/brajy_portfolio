import type { Metadata } from "next";
import Hero from "@/components/section/hero";
import LatestProjects from "@/components/section/latest_projects";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <LatestProjects />
    </>
  );
}
