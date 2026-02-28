import type { Metadata } from "next";
import ContactForm from "@/components/section/contact-form";

export const metadata: Metadata = {
  title: "Contact",
};

export default function Contact() {
  return <ContactForm />;
}
