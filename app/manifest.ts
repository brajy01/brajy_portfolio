import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Brajy · Jeremy Brajon",
    short_name: "Brajy",
    description:
      "Jeremy Brajon, operations & data analyst. Operations × Data × Systems.",
    start_url: "/",
    display: "standalone",
    background_color: "#F9F9F9",
    theme_color: "#ED5315",
    icons: [
      { src: "/icon.svg", type: "image/svg+xml", sizes: "any" },
      { src: "/apple-icon", type: "image/png", sizes: "180x180" },
    ],
  };
}
