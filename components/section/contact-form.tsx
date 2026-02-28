"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimateOnScroll from "@/components/ui/animate-on-scroll";
import Typewriter from "@/components/ui/typewriter";

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
      <section className="py-20 md:py-28 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="max-w-[1400px] mx-auto">
          <AnimateOnScroll>
            <h1 className="font-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight text-foreground">
              Get In Touch_
            </h1>
            <div className="flex justify-between items-end mt-1 mb-8 pb-8 border-b border-border">
              <p className="font-caption text-xs sm:text-sm md:text-2xl text-primary">
                Available for work opportunities
              </p>
              <Typewriter
                text="_let's talk"
                speed={60}
                delay={300}
                as="p"
                className="font-caption text-xs md:text-sm text-primary"
                showCursorAfter={false}
              />
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={100}>
            <p className="font-text text-base sm:text-lg md:text-xl leading-relaxed text-foreground max-w-3xl text-justify">
              Have a project in mind or want to discuss data analytics, business
              intelligence, or web development? I&apos;d love to hear from you.
              Get in touch and let&apos;s explore how we can work together.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="pt-0 pb-16 sm:pb-20 md:pt-12 md:pb-24 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <AnimateOnScroll className="max-w-2xl mx-auto w-full">
          <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
            {/* Name Field */}
            <div>
              <label
                htmlFor="name"
                className="font-caption text-xs sm:text-sm text-primary mb-2 block"
              >
                _name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full font-text text-base border border-border rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-foreground bg-transparent placeholder-muted-foreground transition-all duration-200"
                placeholder="Your name"
              />
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="font-caption text-xs sm:text-sm text-primary mb-2 block"
              >
                _email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full font-text text-base border border-border rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-foreground bg-transparent placeholder-muted-foreground transition-all duration-200"
                placeholder="your@email.com"
              />
            </div>

            {/* Subject Field */}
            <div>
              <label
                htmlFor="subject"
                className="font-caption text-xs sm:text-sm text-primary mb-2 block"
              >
                _subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full font-text text-base border border-border rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-foreground bg-transparent placeholder-muted-foreground transition-all duration-200"
                placeholder="What is this about?"
              />
            </div>

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
                className="w-full font-text text-base border border-border rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-foreground bg-transparent placeholder-muted-foreground transition-all duration-200 resize-none"
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
