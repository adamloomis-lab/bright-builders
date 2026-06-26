/**
 * Footer — Dark footer with contact info, social links, and partner logos
 * Design: Industrial Craft — charcoal bg, gold accents, clean layout
 */
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";
import { Link } from "wouter";

const LOGO_URL = "/assets/rgrkahxqqmabioep.webp";

/* TikTok icon — lucide-react doesn't include one, so we use a custom SVG */
function TikTokIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo and tagline */}
          <div className="flex flex-col items-center md:items-start">
            <img
              src={LOGO_URL}
              alt="Bright Builders"
              className="h-24 w-24 rounded-full object-cover mb-4"
            />
            <p className="text-white/60 text-sm leading-relaxed text-center md:text-left mt-2">
              Improving Cities, Building Communities. Your premier all-in-one solution for all your home needs.
            </p>
            {/* Social icons */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://www.facebook.com/brightbuilderscorp"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-white/20 flex items-center justify-center hover:border-[#E8A020] hover:text-[#E8A020] transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://www.instagram.com/brightbuilderscorp"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-white/20 flex items-center justify-center hover:border-[#E8A020] hover:text-[#E8A020] transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.tiktok.com/@brightbuilderscorp"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-white/20 flex items-center justify-center hover:border-[#E8A020] hover:text-[#E8A020] transition-colors duration-300"
                aria-label="TikTok"
              >
                <TikTokIcon size={18} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="text-center md:text-left">
            <h4 className="font-display text-sm tracking-[0.2em] text-[#E8A020] uppercase mb-6">
              Quick Links
            </h4>
            <nav className="space-y-3">
              {[
                { label: "Services", href: "/services" },
                { label: "Buy & Sell", href: "/buy-sell" },
                { label: "Portfolio", href: "/portfolio" },
                { label: "FAQ", href: "/faq" },
                { label: "About Us", href: "/#about" },
                { label: "Contact", href: "/contact" },
              ].map((link, i) =>
                link.href.startsWith("/#") ? (
                  <a
                    key={`${link.label}-${i}`}
                    href={link.href}
                    className="block text-white/60 hover:text-[#E8A020] transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={`${link.label}-${i}`}
                    href={link.href}
                    className="block text-white/60 hover:text-[#E8A020] transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>
          </div>

          {/* Contact info */}
          <div className="text-center md:text-left">
            <h4 className="font-display text-sm tracking-[0.2em] text-[#E8A020] uppercase mb-6">
              Contact Us
            </h4>
            <div className="space-y-4">
              <a
                href="tel:+13307859056"
                className="flex items-center gap-3 text-white/60 hover:text-[#E8A020] transition-colors duration-300 text-sm justify-center md:justify-start"
              >
                <Phone size={16} className="flex-shrink-0" />
                <span>(330) 785-9056</span>
              </a>
              <a
                href="mailto:info@brightbuilderscorp.com"
                className="flex items-center gap-3 text-white/60 hover:text-[#E8A020] transition-colors duration-300 text-sm justify-center md:justify-start"
              >
                <Mail size={16} className="flex-shrink-0" />
                <span>info@brightbuilderscorp.com</span>
              </a>
              <a
                href="https://maps.google.com/?q=3570+Executive+Dr+Suite+216+Uniontown+OH+44685"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-white/60 hover:text-[#E8A020] transition-colors duration-300 text-sm justify-center md:justify-start"
              >
                <MapPin size={16} className="flex-shrink-0 mt-0.5" />
                <span>3570 Executive Dr Suite 216,<br />Uniontown, OH 44685</span>
              </a>
            </div>

            {/* CTA */}
            <Link
              href="/quote"
              className="inline-block mt-8 font-display text-xs tracking-[0.2em] bg-[#E8A020] text-[#1A1A1A] px-6 py-3 hover:bg-[#d4920b] transition-all duration-300 font-semibold"
            >
              GET A FREE QUOTE
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-xs text-center sm:text-left">
            &copy; {new Date().getFullYear()} Bright Builders Corp. All rights reserved. Est. 2022
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <Link href="/privacy" className="text-white/60 hover:text-[#E8A020] text-xs transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-white/60 hover:text-[#E8A020] text-xs transition-colors">
              Terms of Service
            </Link>
            <Link href="/accessibility" className="text-white/60 hover:text-[#E8A020] text-xs transition-colors">
              Accessibility
            </Link>
          </div>
          <p className="text-white/60 text-xs">
            Website by{" "}
            <a
              href="https://adamloomis.online"
              target="_blank"
              rel="noopener"
              className="text-white/70 hover:text-[#E8A020] transition-colors"
            >
              AdamLoomis.online
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
