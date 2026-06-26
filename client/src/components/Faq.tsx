/**
 * FAQ — Accordion of common questions (light section)
 * Design: Industrial Craft — warm white bg, gold accents
 */
import { BUSINESS } from "@/lib/site";

const faqs = [
  {
    q: "What services does Bright Builders offer?",
    a: "We're your all-in-one home team: custom home building, remodeling and design-build projects, and real estate to help you buy or sell — all under one roof.",
  },
  {
    q: "What areas do you serve?",
    a: "We proudly serve communities across Northeast Ohio, including Akron, Canton, Cleveland, Uniontown, Green, Hudson, Stow, Medina, and the surrounding region.",
  },
  {
    q: "Do you offer free estimates?",
    a: "Yes. We provide a free, no-obligation consultation and a detailed, itemized estimate so you know exactly what to expect before any work begins.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Absolutely. Our team is fully licensed and insured, and our professionals are certified and committed to ongoing training in their trades.",
  },
  {
    q: "Can you help with both real estate and renovations?",
    a: "Yes — that's our advantage. Our real estate professionals and construction team work together, so you can buy or sell and renovate with one coordinated team.",
  },
  {
    q: "How do I get started?",
    a: `Give us a call at ${BUSINESS.phone} or request a free quote online, and a member of our team will reach out to discuss your project.`,
  },
];

export default function Faq() {
  return (
    <section id="faq" className="py-24 bg-[#F5F0EB]">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="font-display text-sm tracking-[0.3em] text-[#E8A020] uppercase">
            Got Questions?
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A1A1A] mt-3 uppercase tracking-[0.05em]">
            Frequently Asked Questions
          </h2>
          <div className="w-16 h-[3px] bg-[#E8A020] mx-auto mt-4" />
        </div>

        <div className="space-y-4">
          {faqs.map((f) => (
            <details key={f.q} className="group bg-white border border-[#E8A020]/15 p-5">
              <summary className="flex items-center justify-between cursor-pointer list-none font-display text-[#1A1A1A] tracking-[0.03em] uppercase text-sm sm:text-base">
                {f.q}
                <span className="text-[#E8A020] ml-4 text-xl leading-none transition-transform duration-300 group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-[#4A4A4A] text-sm leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
