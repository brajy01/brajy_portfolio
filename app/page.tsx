import type { Metadata } from "next";
import Hero from "@/components/section/hero";
import ProfileStrip from "@/components/section/profile-strip";
import SelectedWork from "@/components/section/selected-work";
import ContactCta from "@/components/section/contact-cta";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <ProfileStrip />
      <SelectedWork />
      <ContactCta />
    </>
  );
}
