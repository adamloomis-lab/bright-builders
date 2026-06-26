/**
 * About — Company intro with asymmetric image/text layout
 * Design: Industrial Craft — warm white bg, staggered layout, gold accents
 */
import { useEffect, useRef, useState } from "react";

const BATHROOM_IMG = "/assets/rhrmzchrhqeccflm.webp";
const BAR_IMG = "/assets/wudnrujdujkvjfzx.webp";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-24 bg-[#F5F0EB] overflow-hidden">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-4 transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="font-display text-sm tracking-[0.3em] text-[#E8A020] uppercase">
            Who We Are
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A1A1A] mt-3 uppercase tracking-[0.05em]">
            About Bright Builders
          </h2>
          <div className="w-16 h-[3px] bg-[#E8A020] mx-auto mt-4" />
        </div>

        {/* Asymmetric layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Image stack — left side */}
          <div className="lg:col-span-5 relative">
            <div className="relative">
              <img
                src={BATHROOM_IMG}
                alt="Luxury bathroom renovation"
                className="w-full aspect-[4/3] object-cover"
              />
              {/* Overlapping second image */}
              <img
                src={BAR_IMG}
                alt="Custom bar area"
                className="absolute -bottom-8 -right-4 lg:-right-8 w-2/3 aspect-[4/3] object-cover border-4 border-[#F5F0EB] shadow-xl"
              />
              {/* Gold accent corner */}
              <div className="absolute -top-3 -left-3 w-16 h-16 border-t-[3px] border-l-[3px] border-[#E8A020]" />
            </div>
          </div>

          {/* Text — right side */}
          <div className="lg:col-span-7 mt-12 lg:mt-0">
            <p className="text-lg sm:text-xl text-[#4A4A4A] leading-relaxed italic font-light">
              At Bright Builders, we aim to be your premier all-in-one solution for all your home needs, offering comprehensive services in real estate and design-build projects.
            </p>

            <p className="mt-6 text-[#4A4A4A] leading-relaxed">
              From assisting with buying and selling properties through our real estate professionals, to overseeing renovation projects and creating the home of your dreams, or building a custom home from the ground up, we are committed to providing a personalized service all in one place, guaranteeing peace of mind every step of the way.
            </p>

            <p className="mt-4 text-[#4A4A4A] leading-relaxed">
              Unlike traditional contractors, we prioritize your interests and strive to deliver the highest quality on every project we undertake. Our team of highly skilled and certified professionals brings top-notch expertise to every project.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-6 mt-10 pt-8 border-t border-[#E8A020]/20">
              <div>
                <span className="font-display text-3xl sm:text-4xl font-bold text-[#E8A020]">50+</span>
                <p className="text-sm text-[#4A4A4A] mt-1">Projects Completed</p>
              </div>
              <div>
                <span className="font-display text-3xl sm:text-4xl font-bold text-[#E8A020]">100%</span>
                <p className="text-sm text-[#4A4A4A] mt-1">Client Satisfaction</p>
              </div>
              <div>
                <span className="font-display text-3xl sm:text-4xl font-bold text-[#E8A020]">3+</span>
                <p className="text-sm text-[#4A4A4A] mt-1">Years Experience</p>
              </div>
            </div>

            <a
              href="#contact"
              className="inline-block mt-8 font-display text-sm tracking-[0.2em] bg-[#E8A020] text-[#1A1A1A] px-8 py-4 hover:bg-[#d4920b] transition-all duration-300 font-semibold"
            >
              SCHEDULE A CALL
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
