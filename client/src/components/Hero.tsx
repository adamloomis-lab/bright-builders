/**
 * Hero — Full-viewport background VIDEO with bold headline and CTA
 * Design: Industrial Craft — dramatic, dark overlay, gold accents, Oswald type
 * Video auto-plays, loops, and is muted for a cinematic hero experience
 */
import { useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

const HERO_VIDEO = "/assets/ifjdaacpnpznctiv.mp4";

export default function Hero() {
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = headlineRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    requestAnimationFrame(() => {
      setTimeout(() => {
        el.style.transition = "opacity 1.2s ease, transform 1.2s ease";
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, 300);
    });
  }, []);

  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={HERO_VIDEO} type="video/mp4" />
        </video>
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A]/70 via-[#1A1A1A]/50 to-[#1A1A1A]/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Gold accent line */}
        <div className="w-20 h-[3px] bg-[#E8A020] mx-auto mb-8" />

        <h1
          ref={headlineRef}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white uppercase tracking-[0.05em] leading-[1.1]"
        >
          Your Premier{" "}
          <span className="text-[#E8A020]">All-in-One</span>{" "}
          Solution for All Your Home Needs
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-white/70 max-w-2xl mx-auto font-light leading-relaxed">
          Real Estate &middot; Design-Build &middot; Custom Homes &middot; Remodeling
        </p>

        {/* CTA buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="font-display text-sm tracking-[0.2em] bg-[#E8A020] text-[#1A1A1A] px-8 py-4 hover:bg-[#d4920b] transition-all duration-300 font-semibold"
          >
            SCHEDULE A CALL
          </a>
          <a
            href="#about"
            className="font-display text-sm tracking-[0.2em] border-2 border-white/40 text-white px-8 py-4 hover:border-[#E8A020] hover:text-[#E8A020] transition-all duration-300"
          >
            LEARN MORE
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-[#E8A020]" size={32} />
      </div>

      {/* Bottom diagonal clip */}
      <div className="absolute bottom-0 left-0 right-0 h-24">
        <svg viewBox="0 0 1440 96" fill="none" className="w-full h-full" preserveAspectRatio="none">
          <path d="M0 96L1440 96L1440 0L0 96Z" fill="#F5F0EB" />
        </svg>
      </div>
    </section>
  );
}
