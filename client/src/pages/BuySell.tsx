/**
 * Buy & Sell page — rebuilt to match the live multi-page site's /buy-sell page.
 * Content + images copied from the production build; styled in the Industrial Craft system.
 */
import { Link } from "wouter";
import { Phone, Search, TrendingUp, Hammer, Users, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useSeo } from "@/hooks/useSeo";
import { SITE_URL, BUSINESS } from "@/lib/site";

const HERO = "/assets/buy-sell-hero.webp";
const OWNER = "/assets/brandon-brown-owner.webp";
const EXP_LOGO = "/assets/bright-exp-realty.png";

const differences = [
  "Licensed agents contracted through eXp Realty",
  "Construction and design expertise built into every transaction",
  "Internal project managers and designers on staff",
  "Guidance on renovation potential before you buy",
  "Strategic improvement advice before you sell",
];

const approach = [
  {
    icon: Search,
    title: "Find Your Ideal Property",
    description:
      "Our agents don't just search listings — they evaluate properties with a builder's eye, identifying hidden potential and structural concerns that traditional realtors often miss.",
  },
  {
    icon: TrendingUp,
    title: "Sell with Confidence",
    description:
      "When it's time to sell, our team knows exactly how to position your home for maximum value. With construction and design expertise, we can advise on strategic improvements that deliver the highest return.",
  },
  {
    icon: Hammer,
    title: "Transform Your Current Home",
    description:
      "Not ready to move? Our project managers and designers can turn your existing property into the home you've always envisioned — from kitchen remodels to full-scale renovations.",
  },
  {
    icon: Users,
    title: "One Team, Every Step",
    description:
      "Backed by an internal team of project managers and designers, our real estate professionals offer a seamless experience from property search through closing — and beyond.",
  },
];

export default function BuySell() {
  useSeo({
    title: "Buy & Sell Real Estate | Bright Builders Corp",
    description:
      "Real estate services powered by construction expertise. Bright Builders' agents, brokered by eXp Realty, help you buy, sell, and transform homes across Northeast Ohio.",
    path: "/buy-sell",
    image: `${SITE_URL}${HERO}`,
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "RealEstateAgent",
      name: "Bright Builders Corp — Real Estate",
      url: `${SITE_URL}/buy-sell`,
      telephone: "+1-330-785-9056",
      areaServed: { "@type": "AdministrativeArea", name: "Northeast Ohio" },
      parentOrganization: "eXp Realty",
    },
  });

  return (
    <div className="min-h-screen flex flex-col bg-warm-white">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative h-[70vh] min-h-[520px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img src={HERO} alt="Beautiful home exterior at dusk" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-[#1A1A1A]/70" />
          </div>
          <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
            <div className="w-20 h-[3px] bg-[#E8A020] mx-auto mb-8" />
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold text-white uppercase tracking-[0.05em]">
              Buy &amp; <span className="text-[#E8A020]">Sell</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
              Real estate services powered by construction expertise. Our agents see what others can't.
            </p>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-24">
            <svg viewBox="0 0 1440 96" fill="none" className="w-full h-full" preserveAspectRatio="none">
              <path d="M0 96L1440 96L1440 0L0 96Z" fill="#F5F0EB" />
            </svg>
          </div>
        </section>

        {/* Meet the Bright Team */}
        <section className="py-24 bg-[#F5F0EB]">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A1A1A] uppercase tracking-[0.05em]">
                Meet the <span className="text-[#E8A020]">Bright Team</span>
              </h2>
              <div className="w-16 h-[3px] bg-[#E8A020] mx-auto mt-4 mb-8" />
              <p className="text-lg text-[#4A4A4A] leading-relaxed italic font-light">
                If you think your dream home is just a dream, let us introduce you to the Bright Team of
                highly trained and qualified real estate professionals.
              </p>
              <p className="mt-5 text-[#4A4A4A] leading-relaxed">
                Bright Builders is more than just a renovation company. Buying or selling your home with
                the Bright Team is not like working with a traditional realtor. Our agents, brokered by
                eXp Realty, bring real world experience in construction and design to give you the advice
                and support you need to help accomplish all of your real estate goals.
              </p>
              <p className="mt-4 text-[#4A4A4A] leading-relaxed">
                Backed by our in-house team of project managers and designers, our real estate team can
                help sell your current home, buy a house you love, and even transform that house into your
                dream home.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-16">
              {/* Owner + eXp */}
              <div className="flex flex-col items-center text-center">
                <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden border-4 border-[#E8A020]/20 shadow-lg mb-4">
                  <img src={OWNER} alt="Brandon Brown - Owner" className="w-full h-full object-cover object-top" />
                </div>
                <h3 className="font-display text-2xl font-bold text-[#1A1A1A] tracking-[0.05em] uppercase">
                  Brandon Brown
                </h3>
                <span className="text-[#c98a0b] font-display tracking-[0.2em] text-sm uppercase mt-1">
                  Owner
                </span>
                <img src={EXP_LOGO} alt="BRIGHT | eXp Realty" className="h-16 w-auto mt-8 object-contain" />
              </div>

              {/* The Difference */}
              <div>
                <h3 className="font-display text-2xl font-bold text-[#1A1A1A] tracking-[0.03em] uppercase">
                  The Bright Builders <span className="text-[#E8A020]">Difference</span>
                </h3>
                <div className="w-12 h-[3px] bg-[#E8A020] mt-4 mb-6" />
                <ul className="space-y-4">
                  {differences.map((d) => (
                    <li key={d} className="flex items-start gap-3">
                      <Check className="text-[#E8A020] flex-shrink-0 mt-1" size={20} />
                      <span className="text-[#4A4A4A] leading-relaxed">{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* A Smarter Approach to Real Estate */}
        <section className="py-24 bg-[#1A1A1A]">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <span className="font-display text-sm tracking-[0.3em] text-[#E8A020] uppercase">
                How We Help
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 uppercase tracking-[0.05em]">
                A Smarter Approach to <span className="text-[#E8A020]">Real Estate</span>
              </h2>
              <div className="w-16 h-[3px] bg-[#E8A020] mx-auto mt-4" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
              {approach.map(({ icon: Icon, title, description }) => (
                <div key={title} className="p-8 bg-[#222222] border border-[#333333] hover:border-[#E8A020]/40 transition-all duration-500">
                  <Icon className="text-[#E8A020] mb-4" size={30} strokeWidth={1.5} />
                  <h3 className="font-display text-xl font-bold text-white tracking-[0.05em] uppercase mb-3">
                    {title}
                  </h3>
                  <p className="text-white/60 leading-relaxed">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contracted Through eXp Realty */}
        <section className="py-24 bg-[#F5F0EB]">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <span className="font-display text-sm tracking-[0.3em] text-[#E8A020] uppercase">
              Our Partnership
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A1A1A] mt-3 uppercase tracking-[0.05em]">
              Contracted Through <span className="text-[#E8A020]">eXp Realty</span>
            </h2>
            <div className="w-16 h-[3px] bg-[#E8A020] mx-auto mt-4 mb-8" />
            <img src={EXP_LOGO} alt="BRIGHT | eXp Realty" className="h-16 w-auto mx-auto mb-8 object-contain" />
            <p className="text-[#4A4A4A] leading-relaxed">
              Our licensed real estate agents operate through eXp Realty, one of the fastest-growing real
              estate companies in the world. This partnership gives our clients access to a vast network of
              resources, cutting-edge technology, and a team that understands both the real estate market
              and the construction process from the ground up.
            </p>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0">
            <img src={HERO} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-[#1A1A1A]/85" />
          </div>
          <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white uppercase tracking-[0.05em]">
              Ready to Make Your <span className="text-[#E8A020]">Move</span>?
            </h2>
            <p className="mt-6 text-white/70 text-lg leading-relaxed">
              Whether you're buying, selling, or looking to renovate, our team is here to guide you every
              step of the way. Reach out today for a consultation.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
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
