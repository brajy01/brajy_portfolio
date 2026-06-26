import { NextResponse } from "next/server";
import { Resend } from "resend";

// Where contact-form submissions are delivered. Until a domain is verified in
// Resend, this MUST be the Resend account's own email — test mode only allows
// delivery to that address. Switch to contact@brajy.com once brajy.com is verified.
const TO_EMAIL = "brajon.jeremy@gmail.com";
// Must be an address on a domain verified in Resend. While the domain is not
// yet verified, Resend's onboarding sender works for testing.
const FROM_EMAIL = "Brajy Portfolio <onboarding@resend.dev>";

interface ContactPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(body: unknown): ContactPayload | null {
  if (typeof body !== "object" || body === null) return null;
  const { name, email, subject, message } = body as Record<string, unknown>;
  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof subject !== "string" ||
    typeof message !== "string"
  ) {
    return null;
  }
  const trimmed = {
    name: name.trim(),
    email: email.trim(),
    subject: subject.trim(),
    message: message.trim(),
  };
  if (
    !trimmed.name ||
    !trimmed.subject ||
    !trimmed.message ||
    !EMAIL_RE.test(trimmed.email)
  ) {
    return null;
  }
  return trimmed;
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set");
    return NextResponse.json(
      { error: "Email service not configured" },
      { status: 500 }
    );
  }

  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const data = validate(json);
  if (!data) {
    return NextResponse.json({ error: "Invalid form data" }, { status: 400 });
  }

  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: data.email,
      subject: `[Portfolio] ${data.subject}`,
      text: `From: ${data.name} <${data.email}>\n\n${data.message}`,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send message" },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Unexpected error sending email:", err);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
