"use client";

import { motion } from "framer-motion";

export { motion };
export { AnimatePresence, useScroll, useTransform } from "framer-motion";

export const easings = {
  // Same curve as --ease-smooth in app/globals.css. Framer Motion cannot read
  // CSS variables, so the two declarations must be kept in sync by hand.
  smooth: [0.16, 1, 0.3, 1] as const,
};
