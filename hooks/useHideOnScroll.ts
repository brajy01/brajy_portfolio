import { useEffect, useRef, useState } from "react";

const SCROLL_DOWN_THRESHOLD = 40; // px of cumulative scroll-down before hiding
const TOP_ZONE = 200; // always show header when within this distance from top

export const useHideOnScroll = () => {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const cumulativeDelta = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Always show header near the top of the page
      if (currentScrollY < TOP_ZONE) {
        setIsVisible(true);
        lastScrollY.current = currentScrollY;
        cumulativeDelta.current = 0;
        return;
      }

      const delta = currentScrollY - lastScrollY.current;

      if (delta > 0) {
        // Scrolling down — accumulate distance
        cumulativeDelta.current += delta;
        if (cumulativeDelta.current > SCROLL_DOWN_THRESHOLD) {
          setIsVisible(false);
        }
      } else {
        // Scrolling up — show immediately, reset accumulator
        cumulativeDelta.current = 0;
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return isVisible;
};
