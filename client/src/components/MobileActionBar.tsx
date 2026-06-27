import { Phone, Navigation, FileText } from "lucide-react";
import { Link } from "wouter";
import { BUSINESS } from "@/lib/site";

const DIRECTIONS_URL =
  "https://maps.google.com/?q=" +
  encodeURIComponent(
    `${BUSINESS.street} ${BUSINESS.city} ${BUSINESS.state} ${BUSINESS.zip}`,
  );

// High-end floating action bar (mobile/tablet): an elevated, blurred charcoal
// capsule with glassy Call + Directions and a glowing gold "Get a Quote".
// Stands off the edge rather than sitting flat against it.
export default function MobileActionBar() {
  return (
    <nav
      aria-label="Quick actions"
      className="fixed inset-x-0 bottom-0 z-40 px-3 lg:hidden"
      style={{ paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom))" }}
    >
      <div className="flex gap-2 rounded-2xl border border-white/10 bg-[#1A1A1A]/90 p-2 shadow-[0_14px_40px_rgba(0,0,0,0.5)] backdrop-blur-xl">
        <a
          href={BUSINESS.phoneHref}
          className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-white/10 py-3.5 font-display text-xs uppercase tracking-widest font-semibold text-white transition-all active:scale-95"
        >
          <Phone size={17} className="text-[#E8A020]" /> Call
        </a>
        <a
          href={DIRECTIONS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-white/10 py-3.5 font-display text-xs uppercase tracking-widest font-semibold text-white transition-all active:scale-95"
        >
          <Navigation size={17} className="text-[#E8A020]" /> Directions
        </a>
        <Link
          href="/quote"
          className="group relative flex flex-[1.3] items-center justify-center gap-1.5 overflow-hidden rounded-xl bg-[#E8A020] py-3.5 font-display text-xs uppercase tracking-widest font-bold text-[#1A1A1A] animate-glow-pulse transition-all active:scale-95"
        >
          <span
            className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-white/40 blur-md group-hover:[animation:sheen_0.9s_ease]"
            aria-hidden="true"
          />
          <FileText size={17} /> Get a Quote
        </Link>
      </div>
    </nav>
  );
}
