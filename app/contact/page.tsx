"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const socialLinks = [
  {
    name: "instagram",
    href: "https://instagram.com/username",
    label: "Visit Instagram profile",
  },
  {
    name: "linkedin",
    href: "https://linkedin.com/in/username",
    label: "Visit LinkedIn profile",
  },
  {
    name: "github",
    href: "https://github.com/username",
    label: "Visit GitHub profile",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitStatus, setSubmitStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
    } catch (error) {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 3000);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 px-6 md:px-8 lg:px-12">
        <div className="flex justify-between items-end mb-8 pb-8 border-b border-gray-200 text-primary">
          <h1 className="font-title text-4xl md:text-5xl">Get In Touch_</h1>
          <p className="font-caption text-xs md:text-sm">
            _let's talk
          </p>
        </div>

        <p className="font-text text-base sm:text-lg md:text-xl leading-relaxed text-foreground max-w-3xl">
          Have a project in mind or want to discuss data analytics, business intelligence, or web development? I'd love to hear from you. Get in touch and let's explore how we can work together.
        </p>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-2xl mx-auto w-full">
              <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="font-caption text-xs sm:text-sm text-primary mb-2 block">
                    _name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full font-text text-base border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary text-foreground bg-transparent placeholder-gray-500"
                    placeholder="Your name"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="font-caption text-xs sm:text-sm text-primary mb-2 block">
                    _email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full font-text text-base border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary text-foreground bg-transparent placeholder-gray-500"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Subject Field */}
                <div>
                  <label htmlFor="subject" className="font-caption text-xs sm:text-sm text-primary mb-2 block">
                    _subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full font-text text-base border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary text-foreground bg-transparent placeholder-gray-500"
                    placeholder="What is this about?"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="font-caption text-xs sm:text-sm text-primary mb-2 block">
                    _message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full font-text text-base border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary text-foreground bg-transparent placeholder-gray-500 resize-none"
                    placeholder="Your message..."
                  />
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    disabled={submitStatus === "loading"}
                    className="font-caption text-sm px-4 py-2 border border-primary text-primary rounded hover:bg-primary hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center gap-2"
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
                  </button>
                </div>

                {/* Status Messages */}
                {submitStatus === "success" && (
                  <p className="font-caption text-sm text-green-600">
                    Thanks for reaching out! I'll get back to you soon.
                  </p>
                )}
                {submitStatus === "error" && (
                  <p className="font-caption text-sm text-red-600">
                    Something went wrong. Please try again.
                  </p>
                )}
              </form>
        </div>
      </section>
    </>
  );
}
