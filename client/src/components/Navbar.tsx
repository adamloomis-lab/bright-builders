/**
 * Navbar — Centered logo with nav links on each side
 * Inspired by mancusohomes.com split navigation
 * Design: Industrial Craft — clean, bold, black bar with gold accents
 */
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const LOGO_URL = "/assets/rgrkahxqqmabioep.webp";

const leftLinks = [
  { label: "HOME", href: "/" },
  { label: "SERVICES", href: "/services" },
  { label: "BUY & SELL", href: "/buy-sell" },
];

const rightLinks = [
  { label: "PORTFOLIO", href: "/portfolio" },
  { label: "FAQ", href: "/faq" },
  { label: "CONTACT", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#1A1A1A]/95 backdrop-blur-md shadow-lg py-2"
            : "bg-transparent py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          {/* Left nav links — desktop */}
          <div className="hidden lg:flex items-center gap-8 flex-1 justify-end pr-8">
            {leftLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-display text-sm tracking-[0.2em] text-white/80 hover:text-[#E8A020] transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#E8A020] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Logo center */}
          <a href="/" className="flex-shrink-0 relative z-10" aria-label="Bright Builders home">
            <img
              src={LOGO_URL}
              alt="Bright Builders"
              className={`transition-all duration-500 ${
                scrolled ? "h-14 w-14" : "h-20 w-20"
              } rounded-full object-cover`}
            />
          </a>

          {/* Right nav links — desktop */}
          <div className="hidden lg:flex items-center gap-8 flex-1 pl-8">
            {rightLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-display text-sm tracking-[0.2em] text-white/80 hover:text-[#E8A020] transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#E8A020] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <a
              href="tel:+13307859056"
              className="ml-4 font-display text-sm tracking-[0.15em] border-2 border-[#E8A020] text-[#E8A020] px-5 py-2 hover:bg-[#E8A020] hover:text-[#1A1A1A] transition-all duration-300 inline-flex items-center gap-2"
            >
              <Phone size={14} />
              (330) 785-9056
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          id="mobile-menu"
          inert={!mobileOpen ? true : undefined}
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-[#1A1A1A] border-t border-[#E8A020]/20 px-4 py-6 space-y-4">
            {[...leftLinks, ...rightLinks].map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block font-display text-sm tracking-[0.2em] text-white/80 hover:text-[#E8A020] transition-colors py-2"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+13307859056"
              onClick={() => setMobileOpen(false)}
              className="inline-flex items-center gap-2 font-display text-sm tracking-[0.15em] border-2 border-[#E8A020] text-[#E8A020] px-5 py-2 hover:bg-[#E8A020] hover:text-[#1A1A1A] transition-all duration-300 mt-2"
            >
              <Phone size={16} />
              (330) 785-9056
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
