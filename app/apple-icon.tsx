import { ImageResponse } from "next/og";
import { BrandMark } from "@/components/brand-mark";

// iOS home-screen icon: white logomark on the brand orange.
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#ED5315",
        }}
      >
        <BrandMark size={120} color="#F9F9F9" />
      </div>
    ),
    { ...size },
  );
}
