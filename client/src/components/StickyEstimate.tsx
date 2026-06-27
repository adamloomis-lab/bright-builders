import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { ArrowRight, FileText } from "lucide-react";

// Desktop-only floating "Free Quote" pill, shown once the visitor scrolls past
// the hero. A glowing, sheened gold capsule that reads as premium. Links to the
// dedicated quote route.
export default function StickyEstimate() {
  const [show, setShow] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => {
      const hero = document.getElementById("hero");
      const threshold =
        hero && hero.offsetHeight > 0
          ? hero.offsetTop + hero.offsetHeight - 80
          : window.innerHeight * 0.6;
      setShow(window.scrollY > threshold);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [location]);

  // Hide on routes where a quote form is already front and center.
  if (location === "/quote" || location === "/contact") return null;

  return (
    <Link
      href="/quote"
      className={`group fixed bottom-8 right-8 z-40 hidden items-center gap-2.5 overflow-hidden rounded-full bg-gradient-to-br from-[#E8A020] to-[#c98a0b] px-7 py-4 font-display text-sm uppercase tracking-widest font-bold text-[#1A1A1A] shadow-[0_16px_44px_-8px_rgba(232,160,32,0.6)] ring-1 ring-white/20 transition-all duration-300 hover:scale-[1.04] lg:flex ${
        show
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none translate-y-5 opacity-0"
      }`}
    >
      <span
        className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-white/40 blur-md group-hover:[animation:sheen_1s_ease]"
        aria-hidden="true"
      />
      <FileText size={18} /> Free Quote
      <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
    </Link>
  );
}
