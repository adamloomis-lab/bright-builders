/**
 * Navbar — Centered logo with nav links on each side
 * Inspired by mancusohomes.com split navigation
 * Design: Industrial Craft — clean, bold, black bar with gold accents
 */
import { useState, useEffect } from "react";
import { Menu, X, Phone, MapPin, Clock, ArrowRight, Facebook } from "lucide-react";

const LOGO_URL = "/assets/rgrkahxqqmabioep.webp";
const PHONE_DISPLAY = "(330) 785-9056";
const PHONE_HREF = "tel:+13307859056";
const MAPS_DIR = "https://maps.google.com/?q=3570+Executive+Dr+Suite+216+Uniontown+OH+44685";
const FACEBOOK_URL = "https://www.facebook.com/brightbuilderscorp";

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
  const [menuShown, setMenuShown] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll + trigger slide-in/stagger while the mobile menu is open.
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
      const id = requestAnimationFrame(() => setMenuShown(true));
      return () => {
        cancelAnimationFrame(id);
        document.body.style.overflow = "";
      };
    }
    setMenuShown(false);
    document.body.style.overflow = "";
  }, [mobileOpen]);

  const allLinks = [...leftLinks, ...rightLinks];
  const closeMenu = () => setMobileOpen(false);

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

      </nav>

      {/* Mobile menu — full-screen blurred charcoal panel sliding in from the right */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-[60]" id="mobile-menu">
          {/* Backdrop */}
          <button
            type="button"
            aria-label="Close menu"
            onClick={closeMenu}
            className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
              menuShown ? "opacity-100" : "opacity-0"
            }`}
          />

          {/* Panel */}
          <div
            className={`relative ml-auto h-full w-full max-w-sm bg-[#1A1A1A] text-white overflow-y-auto transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              menuShown ? "translate-x-0" : "translate-x-full"
            }`}
            style={{ boxShadow: "0 0 80px rgba(232, 160, 32, 0.18)" }}
          >
            <div className="relative flex flex-col min-h-full px-7 pt-6 pb-10">
              {/* Header: logo + round close */}
              <div className="flex items-center justify-between">
                <a href="/" onClick={closeMenu} aria-label="Bright Builders home">
                  <img src={LOGO_URL} alt="Bright Builders" className="h-12 w-12 rounded-full object-cover" />
                </a>
                <button
                  type="button"
                  onClick={closeMenu}
                  aria-label="Close menu"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Trust badge */}
              <span className="mt-7 inline-flex w-fit items-center gap-2 rounded-full bg-[#E8A020] px-3 py-1.5 text-xs uppercase tracking-[0.14em] font-bold text-[#1A1A1A]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#1A1A1A] animate-pulse" />
                Custom Homes &amp; Remodels Since 2022
              </span>

              {/* Nav links */}
              <nav className="mt-6 flex flex-col">
                {allLinks.map((link, i) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={closeMenu}
                    className={`group flex items-center justify-between border-b border-white/10 py-4 font-display text-2xl uppercase tracking-wide text-white/90 transition-all duration-500 hover:text-[#E8A020] ${
                      menuShown ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"
                    }`}
                    style={{ transitionDelay: `${120 + i * 70}ms` }}
                  >
                    {link.label}
                    <ArrowRight
                      size={20}
                      className="text-white/30 group-hover:text-[#E8A020] group-hover:translate-x-1 transition-all"
                    />
                  </a>
                ))}
              </nav>

              {/* CTAs */}
              <div
                className={`mt-8 flex flex-col gap-3 transition-all duration-500 ${
                  menuShown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${120 + allLinks.length * 70 + 60}ms` }}
              >
                <a
                  href={PHONE_HREF}
                  className="flex items-center justify-center gap-2 rounded-sm bg-[#E8A020] px-6 py-4 font-display text-sm uppercase tracking-[0.15em] font-bold text-[#1A1A1A] hover:bg-[#d4920b] transition-colors"
                >
                  <Phone size={18} /> Call {PHONE_DISPLAY}
                </a>
                <a
                  href="/quote"
                  onClick={closeMenu}
                  className="flex items-center justify-center gap-2 rounded-sm border-2 border-[#E8A020] px-6 py-4 font-display text-sm uppercase tracking-[0.15em] font-semibold text-[#E8A020] hover:bg-[#E8A020] hover:text-[#1A1A1A] transition-colors"
                >
                  Get a Quote
                </a>
              </div>

              {/* Contact footer */}
              <div className="mt-auto pt-10 space-y-3 text-white/70 text-sm">
                <a
                  href={MAPS_DIR}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 hover:text-white transition-colors"
                >
                  <MapPin size={18} className="text-[#E8A020] shrink-0 mt-0.5" />
                  <span>3570 Executive Dr Suite 216, Uniontown, OH 44685</span>
                </a>
                <p className="flex items-center gap-3">
                  <Clock size={18} className="text-[#E8A020] shrink-0" />
                  Mon to Fri, 8am to 5pm
                </p>
                <a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-white transition-colors"
                >
                  <Facebook size={18} className="text-[#E8A020] shrink-0" />
                  Bright Builders on Facebook
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
