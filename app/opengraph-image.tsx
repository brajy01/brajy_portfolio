import { ImageResponse } from "next/og";
import { BrandMark } from "@/components/brand-mark";

// Branded link-preview image (WhatsApp, LinkedIn, iMessage, X, …).
export const alt = "Brajy · Jeremy Brajon · Operations × Data × Code";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const ORANGE = "#ED5315";
const CREAM = "#F9F9F9";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: ORANGE,
          padding: 80,
        }}
      >
        <div style={{ display: "flex" }}>
          <BrandMark size={96} color={CREAM} />
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 82, fontWeight: 600, color: CREAM, lineHeight: 1.04 }}>
            Jeremy Brajon
          </div>
          <div style={{ fontSize: 42, color: CREAM, opacity: 0.92, marginTop: 16 }}>
            Operations × Data × Code
          </div>
          <div style={{ width: 132, height: 6, background: CREAM, marginTop: 30 }} />
        </div>

        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <div style={{ fontSize: 30, color: CREAM, opacity: 0.85, letterSpacing: 1 }}>
            brajy.com
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
