/**
 * CtaBanner — Full-width call-to-action with background image
 * Design: Industrial Craft — dramatic dark overlay, gold CTA, strong typography
 */

const CTA_IMG = "/assets/cta-exterior-5qhmmdsgaq6lb3sfxvyqtl.webp";

export default function CtaBanner() {
  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={CTA_IMG}
          alt="Beautiful neighborhood"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#1A1A1A]/75" />
      </div>

      {/* Diagonal top edge */}
      <div className="absolute top-0 left-0 right-0 h-16">
        <svg viewBox="0 0 1440 64" fill="none" className="w-full h-full" preserveAspectRatio="none">
          <path d="M0 0L1440 0L1440 64L0 0Z" fill="#F5F0EB" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white uppercase tracking-[0.05em]">
          Ready to Build Your{" "}
          <span className="text-[#E8A020]">Dream Home</span>?
        </h2>
        <p className="mt-6 text-white/70 text-lg leading-relaxed">
          Whether you're looking to buy, sell, renovate, or build from the ground up, our team is ready to make your vision a reality. Schedule a call today and let's get started.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://www.brightbuilderscorp.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-display text-sm tracking-[0.2em] bg-[#E8A020] text-[#1A1A1A] px-8 py-4 hover:bg-[#d4920b] transition-all duration-300 font-semibold"
          >
            CONTACT US
          </a>
          <a
            href="tel:+13307859056"
            className="font-display text-sm tracking-[0.2em] border-2 border-white/40 text-white px-8 py-4 hover:border-[#E8A020] hover:text-[#E8A020] transition-all duration-300"
          >
            CALL (330) 785-9056
          </a>
        </div>
      </div>
    </section>
  );
}
