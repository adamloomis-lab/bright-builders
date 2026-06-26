/**
 * FAQ page (/faq) — rebuilt to match the live multi-page site.
 */
import { Link } from "wouter";
import { Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useSeo } from "@/hooks/useSeo";
import { BUSINESS } from "@/lib/site";

const faqs = [
  {
    q: "What areas do you serve?",
    a: "We proudly serve all of Northeast Ohio, including Akron, Canton, Cleveland, Uniontown, Green, Hudson, Stow, Medina, Wadsworth, Barberton, Hartville, North Canton, Massillon, Cuyahoga Falls, Tallmadge, and the surrounding communities.",
  },
  {
    q: "What types of projects do you handle?",
    a: "We handle a wide range of projects including custom home builds, home additions, kitchen and bathroom renovations, basement finishing, whole-home remodels, and new construction. We also offer real estate services through our agents contracted with eXp Realty.",
  },
  {
    q: "How does your process work?",
    a: "Our process begins with a consultation where we listen to your vision and goals. From there, we create detailed designs and drawings, provide a comprehensive estimate with no surprises, and then our licensed, professional team brings your project to life. We keep you informed every step of the way.",
  },
  {
    q: "Do you provide free estimates?",
    a: "Yes! We offer free initial consultations and estimates. We believe in transparency, so our estimates are comprehensive and clearly outline every element — from layout to finishes — so there are no surprises.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Absolutely. Our team is fully licensed, insured, and committed to ongoing education in their fields. Every member of the Bright Builders crew brings top-notch expertise and professionalism to your project.",
  },
  {
    q: "How long does a typical project take?",
    a: "Project timelines vary depending on scope and complexity. A bathroom renovation might take 4-6 weeks, while a custom home build can take 6-12 months. During our initial consultation, we'll provide a realistic timeline specific to your project.",
  },
  {
    q: "What makes Bright Builders different from other contractors?",
    a: "Unlike traditional contractors, we are a true all-in-one solution. We combine real estate expertise, architectural design, and construction under one roof. Our in-house designers and architects work directly with our construction team, ensuring seamless communication and a cohesive final product. We prioritize your interests and strive to deliver the highest quality on every project.",
  },
  {
    q: "Can you help me buy or sell a home?",
    a: "Yes! Our team of certified realtors, contracted through eXp Realty, are adept in both construction and design. This unique combination allows them to offer valuable guidance that goes beyond what a conventional realtor provides, helping you achieve your real estate goals.",
  },
  {
    q: "Do you handle permits and inspections?",
    a: "Yes, we handle all permitting, inspections, and regulatory requirements for your project. Our team is experienced with local building codes and regulations throughout Northeast Ohio, ensuring your project is fully compliant.",
  },
  {
    q: "What is your payment structure?",
    a: "We offer flexible payment structures tailored to each project. Typically, projects involve a deposit to begin, with progress payments tied to project milestones. We'll discuss all payment details during our initial consultation so everything is clear from the start.",
  },
];

export default function FaqPage() {
  useSeo({
    title: "FAQ | Bright Builders Corp",
    description:
      "Answers to common questions about Bright Builders Corp — our services, process, service areas, estimates, licensing, timelines, and more across Northeast Ohio.",
    path: "/faq",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  });

  return (
    <div className="min-h-screen flex flex-col bg-warm-white">
      <Navbar />
      <main>
        {/* Header */}
        <header className="bg-[#1A1A1A] pt-36 pb-20">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <div className="w-16 h-[3px] bg-[#E8A020] mx-auto mb-6" />
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white uppercase tracking-[0.05em]">
              Frequently Asked <span className="text-[#E8A020]">Questions</span>
            </h1>
            <p className="mt-6 text-white/60 leading-relaxed">
              Find answers to common questions about our services, process, and what makes Bright
              Builders the right choice for your project.
            </p>
          </div>
        </header>

        {/* Accordion */}
        <section className="py-20 bg-[#F5F0EB]">
          <div className="max-w-3xl mx-auto px-4 space-y-4">
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
        </section>

        {/* Bottom CTA */}
        <section className="py-16 bg-[#1A1A1A]">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white uppercase tracking-[0.05em]">
              Still Have <span className="text-[#E8A020]">Questions</span>?
            </h2>
            <p className="mt-4 text-white/60 leading-relaxed">
              We're here to help. Reach out and we'll get back to you as soon as possible.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="font-display text-sm tracking-[0.2em] bg-[#E8A020] text-[#1A1A1A] px-8 py-4 hover:bg-[#d4920b] transition-all duration-300 font-semibold uppercase"
              >
                Contact Us
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
    </div>
  );
}
