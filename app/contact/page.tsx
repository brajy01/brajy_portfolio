import type { Metadata } from "next";
import ContactForm from "@/components/section/contact-form";

const DESCRIPTION =
  "Get in touch with Jeremy Brajon, currently looking for Operations & Business Analyst roles in the Isle of Man.";

export const metadata: Metadata = {
  title: "Contact",
  description: DESCRIPTION,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact | Brajy",
    description: DESCRIPTION,
    url: "/contact",
  },
};

export default function Contact() {
  return <ContactForm />;
}
