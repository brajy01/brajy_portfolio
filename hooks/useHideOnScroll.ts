import { useEffect, useState } from "react";

export const useHideOnScroll = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollUpTimeout, setScrollUpTimeout] = useState<NodeJS.Timeout | null>(
    null
  );

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Si on est au très haut de la page, toujours montrer le header
      if (currentScrollY < 10) {
        setIsVisible(true);
        setLastScrollY(currentScrollY);
        return;
      }

      // Si on scroll vers le bas, cacher le header immédiatement
      if (currentScrollY > lastScrollY) {
        // Effacer le timeout précédent si on scroll vers le bas
        if (scrollUpTimeout) {
          clearTimeout(scrollUpTimeout);
          setScrollUpTimeout(null);
        }
        setIsVisible(false);
      }
      // Si on scroll vers le haut, ajouter un délai avant d'afficher le header
      else {
        // Effacer le timeout précédent
        if (scrollUpTimeout) {
          clearTimeout(scrollUpTimeout);
        }
        // Ajouter un délai avant de montrer le header
        const timeout = setTimeout(() => {
          setIsVisible(true);
        }, 5);
        setScrollUpTimeout(timeout);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollUpTimeout) {
        clearTimeout(scrollUpTimeout);
      }
    };
  }, [lastScrollY, scrollUpTimeout]);

  return isVisible;
};
