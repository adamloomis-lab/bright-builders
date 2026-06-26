import { Phone, Home, Hammer, Building2, ShieldCheck, MapPin, Clock, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Awards from "@/components/Awards";
import QuoteForm from "@/components/QuoteForm";
import { useSeo } from "@/hooks/useSeo";

const HERO_IMG = "/assets/cta-exterior-5qhmmdsgaq6lb3sfxvyqtl.webp";

const services = [
  {
    title: "Custom Homes",
    description: "Build from the ground up. We turn your vision into a one-of-a-kind home, managed end to end.",
    icon: Home,
    image: "/assets/cta-exterior-5qhmmdsgaq6lb3sfxvyqtl.webp",
  },
  {
    title: "Remodeling & Design-Build",
    description: "Kitchens, baths, basements, additions — transform your existing space with expert craftsmanship.",
    icon: Hammer,
    image: "/assets/hero-renovation-hk78nargeai2rrbqb9zf8j.webp",
  },
  {
    title: "Buy & Sell Real Estate",
    description: "Our real estate professionals guide your buying and selling journey, all under one roof.",
    icon: Building2,
    image: "/assets/djinieeevzcasicq.webp",
  },
];

const trust = [
  { icon: Star, label: "5-Star Rated" },
  { icon: ShieldCheck, label: "Licensed & Insured" },
  { icon: MapPin, label: "Serving NE Ohio" },
  { icon: Clock, label: "Established 2022" },
];

export default function QuoteLanding() {
  useSeo({
    title: "Free Quote — Custom Homes, Remodeling & Real Estate | Bright Builders Corp",
    description:
      "Get a free, no-obligation quote from Bright Builders Corp. Custom homes, remodeling, design-build, and real estate across Northeast Ohio. Request yours today.",
    path: "/quote",
  });

  return (
    <div className="min-h-screen flex flex-col bg-warm-white">
      <Navbar />
      <main>
        {/* Hero with form */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0">
            <img src={HERO_IMG} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-[#1A1A1A]/85" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Pitch */}
              <div className="text-center lg:text-left">
                <div className="w-16 h-[3px] bg-[#E8A020] mx-auto lg:mx-0 mb-6" />
                <h1 className="font-display text-4xl sm:text-5xl font-bold text-white uppercase tracking-[0.04em] leading-[1.1]">
                  Your All-in-One Team for{" "}
                  <span className="text-[#E8A020]">Home Projects</span>
                </h1>
                <p className="mt-5 text-white/70 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                  From custom homes and full renovations to buying and selling — Bright Builders
                  handles it all. Tell us about your project and get a free, no-obligation quote.
                </p>

                {/* Trust row */}
                <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-xl mx-auto lg:mx-0">
                  {trust.map(({ icon: Icon, label }) => (
                    <div key={label} className="flex flex-col items-center lg:items-start gap-2">
                      <Icon className="text-[#E8A020]" size={22} />
                      <span className="text-white/70 text-xs sm:text-sm">{label}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="tel:+13307859056"
                  className="mt-8 inline-flex items-center gap-2 font-display text-sm tracking-[0.15em] border-2 border-white/40 text-white px-6 py-3 hover:border-[#E8A020] hover:text-[#E8A020] transition-all duration-300"
                >
                  <Phone size={16} />
                  Prefer to talk? (330) 785-9056
                </a>
              </div>

              {/* Form */}
              <div>
                <QuoteForm source="quote-all-services" />
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 bg-[#F5F0EB]">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-14">
              <span className="font-display text-sm tracking-[0.3em] text-[#E8A020] uppercase">
                Everything Under One Roof
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1A1A1A] mt-3 uppercase tracking-[0.05em]">
                What We Can Build For You
              </h2>
              <div className="w-16 h-[3px] bg-[#E8A020] mx-auto mt-4" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {services.map(({ title, description, icon: Icon, image }) => (
                <div key={title} className="group relative overflow-hidden">
                  <div className="aspect-[4/5] relative overflow-hidden">
                    <img
                      src={image}
                      alt={title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/60 to-transparent" />
                    <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
                      <Icon className="text-[#E8A020] mb-3" size={32} strokeWidth={1.5} />
                      <h3 className="font-display text-2xl font-bold text-white tracking-[0.08em] uppercase">
                        {title}
                      </h3>
                      <p className="mt-2 text-white/70 text-sm leading-relaxed">{description}</p>
                      <div className="w-12 h-[2px] bg-[#E8A020] mt-4" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <a
                href="#top"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="inline-block font-display text-sm tracking-[0.2em] bg-[#E8A020] text-[#1A1A1A] px-8 py-4 hover:bg-[#d4920b] transition-all duration-300 font-semibold uppercase"
              >
                Get My Free Quote
              </a>
            </div>
          </div>
        </section>

        <Awards />

        {/* Reassurance band */}
        <section className="py-16 bg-[#1A1A1A]">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white uppercase tracking-[0.05em]">
              No Pressure. No Obligation.
            </h2>
            <p className="mt-4 text-white/60 leading-relaxed">
              Every project starts with a conversation. We listen, plan, and provide a clear,
              detailed estimate — so there are no surprises. Reach out today and let's build
              something great together.
            </p>
            <a
              href="tel:+13307859056"
              className="mt-8 inline-flex items-center gap-2 font-display text-sm tracking-[0.2em] bg-[#E8A020] text-[#1A1A1A] px-8 py-4 hover:bg-[#d4920b] transition-all duration-300 font-semibold"
            >
              <Phone size={16} />
              CALL (330) 785-9056
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
