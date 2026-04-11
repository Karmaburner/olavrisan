"use client";

import { useEffect, useState } from "react";

export default function BookButton() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY < window.innerHeight * 0.85);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Mobil: stor knapp nederst i midten */}
      <div
        className="fixed bottom-14 right-6 z-20 transition-opacity duration-300 md:hidden"
        style={{ opacity: visible ? 1 : 0, pointerEvents: visible ? "auto" : "none" }}
      >
        <a
          href="mailto:post@olavrisan.no?subject=Booking%20–%20Olav%20Risan"
          className="book-link font-[family-name:var(--font-oswald)]"
        >
          Book nå<span className="arrow">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </span>
        </a>
      </div>

      {/* Desktop: tekst-lenke øverst til høyre */}
      <div
        className="fixed top-6 right-6 z-20 transition-opacity duration-300 hidden md:block"
        style={{ opacity: visible ? 1 : 0, pointerEvents: visible ? "auto" : "none" }}
      >
        <a
          href="mailto:post@olavrisan.no?subject=Booking%20–%20Olav%20Risan"
          className="book-link font-[family-name:var(--font-oswald)]"
        >
          Book nå<span className="arrow">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </span>
        </a>
      </div>
    </>
  );
}
