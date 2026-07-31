/**
 * ThankYou — post-submission confirmation page.
 * The quote form redirects here on success so Google Ads / GA4 can count the
 * page view as a lead conversion (the original site tracked conversions the
 * same way). First name is passed via sessionStorage for the personal greeting.
 */
import { useEffect, useState } from "react";
import { Link } from "wouter";
import { Phone, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SuccessCheck } from "@/components/FluidField";
import { useSeo } from "@/hooks/useSeo";
import { BUSINESS } from "@/lib/site";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default function ThankYou() {
  const [firstName, setFirstName] = useState("");

  useSeo({
    title: "Thank You | Bright Builders Corp",
    description: "Your request has been received. The Bright Builders team will be in touch shortly.",
    path: "/thank-you",
  });

  useEffect(() => {
    setFirstName(sessionStorage.getItem("bb_lead_first_name") ?? "");
    // Keep this page out of search results — it only exists post-submission.
    const robots = document.createElement("meta");
    robots.name = "robots";
    robots.content = "noindex, nofollow";
    document.head.appendChild(robots);
    // Explicit SPA page view so the Ads "Thank You page view" conversion fires.
    window.gtag?.("event", "page_view", {
      page_path: "/thank-you",
      page_title: "Thank You | Bright Builders Corp",
    });
    return () => robots.remove();
  }, []);

  return (
    <div className="min-h-screen bg-[#1A1A1A]">
      <Navbar />
      <main className="flex items-center justify-center px-4 pt-36 pb-24">
        <div
          className="w-full max-w-xl bg-white p-8 sm:p-12 text-center shadow-xl"
          style={{ animation: "rise 0.8s cubic-bezier(0.16,1,0.3,1) both" }}
        >
          <span className="mx-auto mb-5 flex h-16 w-16 items-center justify-center">
            <SuccessCheck />
          </span>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-[#1A1A1A] uppercase tracking-[0.05em]">
            {firstName ? `Thank You, ${firstName}!` : "Thank You!"}
          </h1>
          <p className="mt-4 text-[#4A4A4A] leading-relaxed max-w-md mx-auto">
            Your request has been received. A member of the Bright Builders team will reach out
            shortly to discuss your project. Need to talk sooner?
          </p>
          <a
            href={BUSINESS.phoneHref}
            className="group relative mt-7 inline-flex items-center justify-center gap-2 overflow-hidden bg-[#E8A020] text-[#1A1A1A] font-display text-sm font-semibold tracking-[0.2em] uppercase px-8 py-4 hover:bg-[#d4920b] transition-all duration-300 active:scale-[0.98]"
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-white/40 blur-md group-hover:[animation:sheen_0.9s_ease]"
            />
            <Phone size={16} /> Call {BUSINESS.phone}
          </a>
          <div className="mt-6">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-sm text-[#7a5500] underline underline-offset-2 hover:text-[#1A1A1A] transition-colors"
            >
              Back to the homepage <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
