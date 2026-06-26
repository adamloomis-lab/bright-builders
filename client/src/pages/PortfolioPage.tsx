/**
 * Portfolio page (/portfolio) — rebuilt to match the live multi-page site.
 * Filterable gallery (Kitchens / Bathrooms / Basements) with a lightbox.
 */
import { useEffect, useMemo, useState, useCallback } from "react";
import { Link } from "wouter";
import { Phone, X, ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useSeo } from "@/hooks/useSeo";
import { BUSINESS } from "@/lib/site";
import { PORTFOLIO_CATEGORIES, PORTFOLIO_ITEMS } from "@/lib/portfolio";

export default function PortfolioPage() {
  useSeo({
    title: "Portfolio | Bright Builders Corp",
    description:
      "Browse completed Bright Builders projects across Northeast Ohio — custom kitchens, bathroom renovations, and basement transformations.",
    path: "/portfolio",
  });

  const [category, setCategory] = useState<string>("All Projects");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const items = useMemo(
    () =>
      category === "All Projects"
        ? PORTFOLIO_ITEMS
        : PORTFOLIO_ITEMS.filter((i) => i.category === category),
    [category]
  );

  const close = useCallback(() => setLightbox(null), []);
  const prev = useCallback(
    () => setLightbox((i) => (i === null ? i : (i - 1 + items.length) % items.length)),
    [items.length]
  );
  const next = useCallback(
    () => setLightbox((i) => (i === null ? i : (i + 1) % items.length)),
    [items.length]
  );

  useEffect(() => {
    if (lightbox === null) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [lightbox, close, prev, next]);

  return (
    <div className="min-h-screen flex flex-col bg-warm-white">
      <Navbar />
      <main>
        {/* Header */}
        <header className="bg-[#1A1A1A] pt-36 pb-20">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <div className="w-16 h-[3px] bg-[#E8A020] mx-auto mb-6" />
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white uppercase tracking-[0.05em]">
              Our <span className="text-[#E8A020]">Portfolio</span>
            </h1>
            <p className="mt-6 text-white/60 leading-relaxed">
              Browse our completed projects across Northeast Ohio. From custom kitchens to bathroom
              renovations and basement transformations, see the quality and craftsmanship that
              defines Bright Builders.
            </p>
          </div>
        </header>

        {/* Gallery */}
        <section className="py-16 bg-[#F5F0EB]">
          <div className="max-w-7xl mx-auto px-4">
            {/* Filters */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
              {PORTFOLIO_CATEGORIES.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setCategory(c)}
                  className={`font-display text-xs sm:text-sm tracking-[0.15em] uppercase px-5 py-2.5 transition-all duration-300 ${
                    category === c
                      ? "bg-[#E8A020] text-[#1A1A1A] font-semibold"
                      : "border border-[#1A1A1A]/20 text-[#1A1A1A] hover:border-[#E8A020] hover:text-[#c98a0b]"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>

            <p className="text-center text-[#4A4A4A]/70 text-sm mb-8">
              Showing {items.length} photo{items.length === 1 ? "" : "s"}
            </p>

            {items.length === 0 ? (
              <p className="text-center text-[#4A4A4A] py-12">
                No projects found in this category yet. Check back soon!
              </p>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                {items.map((item, idx) => (
                  <button
                    key={item.src}
                    type="button"
                    onClick={() => setLightbox(idx)}
                    className="group relative overflow-hidden aspect-[4/3] bg-[#1A1A1A]"
                  >
                    <img
                      src={item.src}
                      alt={item.alt}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <span className="absolute inset-0 bg-[#1A1A1A]/0 group-hover:bg-[#1A1A1A]/20 transition-colors duration-300" />
                  </button>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-20 bg-[#1A1A1A]">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white uppercase tracking-[0.05em]">
              Like What You <span className="text-[#E8A020]">See</span>?
            </h2>
            <p className="mt-4 text-white/60 leading-relaxed">
              Let's discuss your project. Contact us today for a free consultation and estimate.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/quote"
                className="font-display text-sm tracking-[0.2em] bg-[#E8A020] text-[#1A1A1A] px-8 py-4 hover:bg-[#d4920b] transition-all duration-300 font-semibold uppercase"
              >
                Get a Free Quote
              </Link>
              <a
                href={BUSINESS.phoneHref}
                className="font-display text-sm tracking-[0.2em] border-2 border-white/40 text-white px-8 py-4 hover:border-[#E8A020] hover:text-[#E8A020] transition-all duration-300 inline-flex items-center gap-2"
              >
                <Phone size={16} />
                CALL {BUSINESS.phone}
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {/* Lightbox */}
      {lightbox !== null && items[lightbox] && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute top-4 right-4 text-white/80 hover:text-[#E8A020] p-2"
          >
            <X size={32} />
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Previous"
            className="absolute left-3 sm:left-6 text-white/80 hover:text-[#E8A020] p-2"
          >
            <ChevronLeft size={40} />
          </button>
          <img
            src={items[lightbox].src}
            alt={items[lightbox].alt}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85vh] max-w-[90vw] object-contain"
          />
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Next"
            className="absolute right-3 sm:right-6 text-white/80 hover:text-[#E8A020] p-2"
          >
            <ChevronRight size={40} />
          </button>
          <span className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/60 text-sm">
            {lightbox + 1} / {items.length}
          </span>
        </div>
      )}
    </div>
  );
}
