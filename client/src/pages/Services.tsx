/**
 * Services page — rebuilt to match the live multi-page site's /services page.
 * Content copied from the production build; styled in the site's Industrial Craft system.
 */
import { Link } from "wouter";
import { Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useSeo } from "@/hooks/useSeo";
import { SITE_URL, BUSINESS } from "@/lib/site";

const services = [
  {
    title: "Additions",
    image: "/assets/additions-framing.webp",
    description:
      "Expand your living space with expertly planned home additions and new construction. Whether you need an extra bedroom, a larger kitchen, or a new level, Bright Builders manages every detail from design through construction — ensuring your addition blends seamlessly with your existing home while adding lasting value.",
    learnMore: "/quote",
  },
  {
    title: "Remodeling",
    image: "/assets/hero-renovation-hk78nargeai2rrbqb9zf8j.webp",
    description:
      "Transform your existing space with expert renovation and design services. From kitchen remodels to whole-home renovations, Bright Builders helps homeowners reimagine their space while maintaining structural quality and design consistency. We handle every detail so you can enjoy the results.",
    learnMore: "/remodeling",
  },
  {
    title: "Buy & Sell",
    image: "/assets/nsmskmffoepckxzv.webp",
    description:
      "Expert real estate professionals to guide your buying and selling journey. Our agents, brokered by eXp Realty, bring real-world experience in construction and design — giving you the insight, advice, and support you need to confidently accomplish your real estate goals.",
    learnMore: "/buy-sell",
  },
];

export default function Services() {
  useSeo({
    title: "Our Services | Bright Builders Corp",
    description:
      "From custom homes to complete renovations, Bright Builders Corp offers comprehensive construction services across Northeast Ohio — additions, remodeling, and real estate.",
    path: "/services",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "HomeAndConstructionBusiness",
      name: BUSINESS.name,
      url: `${SITE_URL}/services`,
      telephone: "+1-330-785-9056",
      makesOffer: services.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.title },
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
            <span className="font-display text-sm tracking-[0.3em] text-[#E8A020] uppercase">
              What We Do
            </span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mt-3 uppercase tracking-[0.05em]">
              Our <span className="text-[#E8A020]">Services</span>
            </h1>
            <div className="w-16 h-[3px] bg-[#E8A020] mx-auto mt-5" />
            <p className="mt-6 text-white/60 leading-relaxed">
              From custom homes to complete renovations, we offer comprehensive construction
              services tailored to your vision.
            </p>
          </div>
        </header>

        {/* Service rows */}
        <section className="py-20 bg-[#F5F0EB]">
          <div className="max-w-7xl mx-auto px-4 space-y-16 lg:space-y-24">
            {services.map((service, i) => (
              <div
                key={service.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center ${
                  i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Image */}
                <div className="relative">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -top-3 -left-3 w-16 h-16 border-t-[3px] border-l-[3px] border-[#E8A020]" />
                </div>

                {/* Text */}
                <div>
                  <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1A1A1A] uppercase tracking-[0.05em]">
                    {service.title}
                  </h2>
                  <div className="w-12 h-[3px] bg-[#E8A020] mt-4" />
                  <p className="mt-6 text-[#4A4A4A] leading-relaxed">{service.description}</p>
                  <div className="mt-8 flex flex-col sm:flex-row gap-4">
                    <Link
                      href={service.learnMore}
                      className="font-display text-sm tracking-[0.2em] bg-[#E8A020] text-[#1A1A1A] px-7 py-3.5 hover:bg-[#d4920b] transition-all duration-300 font-semibold uppercase text-center"
                    >
                      Learn More
                    </Link>
                    <a
                      href="/portfolio"
                      className="font-display text-sm tracking-[0.2em] border-2 border-[#1A1A1A]/30 text-[#1A1A1A] px-7 py-3.5 hover:border-[#E8A020] hover:text-[#c98a0b] transition-all duration-300 uppercase text-center"
                    >
                      View Our Work
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/assets/cta-exterior-5qhmmdsgaq6lb3sfxvyqtl.webp"
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#1A1A1A]/85" />
          </div>
          <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white uppercase tracking-[0.05em]">
              Ready to Start Your <span className="text-[#E8A020]">Project</span>?
            </h2>
            <p className="mt-6 text-white/70 text-lg leading-relaxed">
              Contact us today for a free consultation and estimate. Let's bring your vision to life.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
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
    </div>
  );
}
