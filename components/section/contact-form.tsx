"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import AnimateOnScroll from "@/components/ui/animate-on-scroll";
import SectionHeading from "@/components/ui/section-heading";

const fieldClass =
  "w-full font-text text-base border border-border rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-foreground bg-transparent placeholder-muted-foreground transition-all duration-200";

function FormField({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="font-caption text-xs sm:text-sm text-primary mb-2 block"
      >
        _{label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required
        className={fieldClass}
        placeholder={placeholder}
      />
    </div>
  );
}

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setSubmitStatus("idle"), 3000);
      } else {
        setSubmitStatus("error");
        setTimeout(() => setSubmitStatus("idle"), 3000);
      }
    } catch {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 3000);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 md:py-28 section-x">
        <div className="section-container">
          <AnimateOnScroll>
            <SectionHeading
              title="Get In Touch"
              subtitle="Available for work opportunities"
              rightText="_let's talk"
            />
          </AnimateOnScroll>

          <AnimateOnScroll delay={100}>
            <p className="font-text text-base sm:text-lg md:text-xl leading-relaxed text-foreground max-w-3xl text-pretty">
              Have a project in mind or want to discuss data analytics, business
              intelligence, or web development? I&apos;d love to hear from you.
              Get in touch and let&apos;s explore how we can work together.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="pt-0 pb-16 sm:pb-20 md:pt-12 md:pb-24 section-x">
        <AnimateOnScroll className="max-w-2xl mx-auto w-full">
          <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
            <FormField
              label="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
            />
            <FormField
              label="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
            />
            <FormField
              label="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="What is this about?"
            />

            {/* Message Field */}
            <div>
              <label
                htmlFor="message"
                className="font-caption text-xs sm:text-sm text-primary mb-2 block"
              >
                _message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className={cn(fieldClass, "resize-none")}
                placeholder="Your message..."
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-2">
              <Button
                variant="outline"
                type="submit"
                disabled={submitStatus === "loading"}
              >
                {submitStatus === "loading" && "Sending..."}
                {submitStatus === "idle" && (
                  <>
                    Send Message
                    <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4" />
                  </>
                )}
                {submitStatus === "success" && "Sent!"}
                {submitStatus === "error" && "Error - Try again"}
              </Button>
            </div>

            {/* Status Messages */}
            {submitStatus === "success" && (
              <p className="font-caption text-sm text-primary">
                Thanks for reaching out! I&apos;ll get back to you soon.
              </p>
            )}
            {submitStatus === "error" && (
              <p className="font-caption text-sm text-primary">
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        </AnimateOnScroll>
      </section>
    </>
  );
}
