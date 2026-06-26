import { useEffect, useState } from "react";
import { Link } from "wouter";

const STORAGE_KEY = "cookie-consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      const timer = setTimeout(() => setVisible(true), 700);
      return () => clearTimeout(timer);
    }
  }, []);

  function accept() {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  }

  function decline() {
    localStorage.setItem(STORAGE_KEY, "declined");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="region"
      aria-label="Cookie consent"
      className="fixed bottom-3 left-3 right-3 z-50 flex flex-col sm:flex-row items-start sm:items-center gap-4 rounded-sm bg-[#111111] border border-white/10 px-5 py-4 shadow-2xl"
    >
      <p className="flex-1 text-white/70 text-sm leading-relaxed">
        This site uses cookies to keep things running smoothly. We never sell
        your data.{" "}
        <Link href="/privacy" className="text-[#E8A020] hover:underline">
          Privacy Policy
        </Link>
      </p>
      <div className="flex gap-3 shrink-0">
        <button
          onClick={decline}
          className="text-sm text-white/50 hover:text-white/80 transition-colors duration-200 px-3 py-2"
        >
          No Thanks
        </button>
        <button
          onClick={accept}
          className="text-sm font-semibold bg-[#E8A020] text-[#1A1A1A] px-5 py-2 hover:bg-[#d4920b] transition-colors duration-200 rounded-sm"
        >
          Got It
        </button>
      </div>
    </div>
  );
}
