/**
 * ServiceAreas — Showcases NE Ohio service coverage
 * Design: Industrial Craft — dark bg, gold accents, city grid with map pin motif
 */
import { useEffect, useRef, useState } from "react";
import { MapPin } from "lucide-react";

const cities = [
  "Akron",
  "Canton",
  "Cleveland",
  "Uniontown",
  "Green",
  "Hartville",
  "Hudson",
  "Stow",
  "Cuyahoga Falls",
  "Medina",
  "Wadsworth",
  "Massillon",
  "North Canton",
  "Barberton",
  "Tallmadge",
  "Kent",
  "Wooster",
  "Fairlawn",
  "Copley",
  "Bath",
];

export default function ServiceAreas() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="service-areas"
      className="py-24 bg-[#1A1A1A] overflow-hidden"
    >
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-4 transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="font-display text-sm tracking-[0.3em] text-[#E8A020] uppercase">
            Where We Work
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 uppercase tracking-[0.05em]">
            Proudly Serving{" "}
            <span className="text-[#E8A020]">Northeast Ohio</span>
          </h2>
          <div className="w-16 h-[3px] bg-[#E8A020] mx-auto mt-4" />
          <p className="mt-6 text-white/60 max-w-2xl mx-auto leading-relaxed">
            From Akron to Cleveland and everywhere in between, Bright Builders is
            proud to serve communities across Northeast Ohio. No matter where you
            are in the region, our team is ready to bring your vision to life.
          </p>
        </div>

        {/* Cities grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {cities.map((city, i) => (
            <div
              key={city}
              className="group flex items-center gap-2 px-4 py-3 border border-white/10 hover:border-[#E8A020]/50 hover:bg-[#E8A020]/5 transition-all duration-300"
              style={{
                transitionDelay: visible ? `${i * 40}ms` : "0ms",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(12px)",
                transition: `opacity 0.5s ease ${i * 40}ms, transform 0.5s ease ${i * 40}ms, border-color 0.3s, background-color 0.3s`,
              }}
            >
              <MapPin
                size={14}
                className="text-[#E8A020] flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
              />
              <span className="text-white/70 text-sm group-hover:text-white transition-colors duration-300">
                {city}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="text-center mt-12">
          <p className="text-white/40 text-sm">
            Don't see your area?{" "}
            <a
              href="tel:+13307859056"
              className="text-[#E8A020] hover:text-[#d4920b] transition-colors underline underline-offset-2"
            >
              Give us a call
            </a>{" "}
            — we may still be able to help.
          </p>
        </div>
      </div>
    </section>
  );
}
