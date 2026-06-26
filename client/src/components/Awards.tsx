/**
 * Awards — Horizontal row of award badges and certifications
 * Design: Industrial Craft — warm white bg, subtle animation, trust signals
 */
import { useEffect, useRef, useState } from "react";

const awards = [
  {
    src: "/assets/xlhwtfuszvgipovl.png",
    alt: "Nextdoor Neighborhood Fave 2024",
  },
  {
    src: "/assets/sfhvtfwpukijlaxh.jpg",
    alt: "Nextdoor Neighborhood Fave 2023",
  },
  {
    src: "/assets/cwctprumgxdyodpm.png",
    alt: "Best of Houzz Service 2024",
  },
  {
    src: "/assets/hzbnetsgreuhybsc.png",
    alt: "Best of Houzz Service 2023",
  },
  {
    src: "/assets/omxvviusijpfhejd.jpg",
    alt: "Angi Super Service Award 2023",
  },
];

export default function Awards() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className={`py-16 bg-[#F5F0EB] border-t border-[#E8A020]/10 transition-all duration-1000 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-10">
          <span className="font-display text-sm tracking-[0.3em] text-[#E8A020] uppercase">
            Recognized Excellence
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#1A1A1A] mt-2 uppercase tracking-[0.05em]">
            Awards & Certifications
          </h2>
          <div className="w-16 h-[3px] bg-[#E8A020] mx-auto mt-4" />
        </div>

        {/* Awards row */}
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
          {awards.map((award, i) => (
            <div
              key={i}
              className="group transition-all duration-500"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <img
                src={award.src}
                alt={award.alt}
                className="h-20 sm:h-24 md:h-28 w-auto object-contain grayscale-[30%] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
