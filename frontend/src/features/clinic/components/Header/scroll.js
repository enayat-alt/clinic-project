import { useEffect, useState } from "react";

export default function useScroll() {
  const [scrolled, setScrolled] = useState(false);
  const [showHeader, setShowHeader] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Add background after scrolling 50px
      setScrolled(currentScrollY > 50);

      // Always show header near the top
      if (currentScrollY < 80) {
        setShowHeader(true);
      } else {
        if (currentScrollY > lastScrollY) {
          // Scrolling down
          setShowHeader(false);
        } else {
          // Scrolling up
          setShowHeader(true);
        }
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return {
    scrolled,
    showHeader,
  };
}