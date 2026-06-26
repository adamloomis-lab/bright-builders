import { Phone, Check, ShieldCheck, MapPin, Clock, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Awards from "@/components/Awards";
import QuoteForm from "@/components/QuoteForm";
import { useSeo } from "@/hooks/useSeo";
import { SITE_URL, BUSINESS } from "@/lib/site";
import type { ServiceLandingConfig } from "@/lib/serviceLandings";

const trust = [
  { icon: Star, label: "5-Star Rated" },
  { icon: ShieldCheck, label: "Licensed & Insured" },
  { icon: MapPin, label: "Serving NE Ohio" },
  { icon: Clock, label: "Established 2022" },
];

export default function ServiceLanding({ config }: { config: ServiceLandingConfig }) {
  const url = `${SITE_URL}/${config.slug}`;

  useSeo({
    title: config.seoTitle,
    description: config.seoDescription,
    path: `/${config.slug}`,
    image: `${SITE_URL}${config.heroImage}`,
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        name: config.serviceValue,
        serviceType: config.navLabel,
        provider: {
          "@type": "HomeAndConstructionBusiness",
          name: BUSINESS.name,
          telephone: "+1-330-785-9056",
          url: SITE_URL,
        },
        areaServed: { "@type": "AdministrativeArea", name: "Northeast Ohio" },
        url,
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: config.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: config.navLabel, item: url },
        ],
      },
    ],
  });

  const Icon = config.icon;

  return (
    <div className="min-h-screen flex flex-col bg-warm-white">
      <Navbar />
      <main>
        {/* Hero + form */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0">
            <img src={config.heroImage} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-[#1A1A1A]/85" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <span className="inline-flex items-center gap-2 font-display text-xs sm:text-sm tracking-[0.25em] text-[#E8A020] uppercase">
                  {Icon && <Icon size={18} />} {config.heroEyebrow}
                </span>
                <div className="w-16 h-[3px] bg-[#E8A020] mx-auto lg:mx-0 my-6" />
                <h1 className="font-display text-4xl sm:text-5xl font-bold text-white uppercase tracking-[0.04em] leading-[1.1]">
                  {config.heroTitlePre}{" "}
                  <span className="text-[#E8A020]">{config.heroTitleHighlight}</span>
                </h1>
                <p className="mt-5 text-white/70 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                  {config.heroSubtitle}
                </p>

                <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-xl mx-auto lg:mx-0">
                  {trust.map(({ icon: TIcon, label }) => (
                    <div key={label} className="flex flex-col items-center lg:items-start gap-2">
                      <TIcon className="text-[#E8A020]" size={22} />
                      <span className="text-white/70 text-xs sm:text-sm">{label}</span>
                    </div>
                  ))}
                </div>

                <a
                  href={BUSINESS.phoneHref}
                  className="mt-8 inline-flex items-center gap-2 font-display text-sm tracking-[0.15em] border-2 border-white/40 text-white px-6 py-3 hover:border-[#E8A020] hover:text-[#E8A020] transition-all duration-300"
                >
                  <Phone size={16} />
                  Prefer to talk? {BUSINESS.phone}
                </a>
              </div>

              <div>
                <QuoteForm key={config.slug} defaultService={config.serviceValue} source={config.source} />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-[#F5F0EB]">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-14">
              <span className="font-display text-sm tracking-[0.3em] text-[#E8A020] uppercase">
                What You Get
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1A1A1A] mt-3 uppercase tracking-[0.05em]">
                {config.benefitsTitle}
              </h2>
              <div className="w-16 h-[3px] bg-[#E8A020] mx-auto mt-4" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
              {config.benefits.map((b) => (
                <div key={b.title} className="flex gap-4 p-6 bg-white border border-[#E8A020]/15">
                  <Check className="text-[#E8A020] flex-shrink-0 mt-1" size={22} />
                  <div>
                    <h3 className="font-display text-lg font-bold text-[#1A1A1A] tracking-[0.03em] uppercase">
                      {b.title}
                    </h3>
                    <p className="mt-1.5 text-[#4A4A4A] text-sm leading-relaxed">{b.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <button
                type="button"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="font-display text-sm tracking-[0.2em] bg-[#E8A020] text-[#1A1A1A] px-8 py-4 hover:bg-[#d4920b] transition-all duration-300 font-semibold uppercase"
              >
                Get My Free Quote
              </button>
            </div>
          </div>
        </section>

        {/* Project gallery (kitchens / bathrooms) */}
        {config.gallery && config.gallery.length > 0 && (
          <section className="py-20 bg-[#1A1A1A]">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-12">
                <span className="font-display text-sm tracking-[0.3em] text-[#E8A020] uppercase">
                  Our Work
                </span>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mt-3 uppercase tracking-[0.05em]">
                  {config.galleryTitle ?? "Recent Projects"}
                </h2>
                <div className="w-16 h-[3px] bg-[#E8A020] mx-auto mt-4" />
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
                {config.gallery.map((img) => (
                  <div key={img.src} className="group overflow-hidden">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={img.src}
                        alt={img.alt}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        <Awards />

        {/* FAQ */}
        <section className="py-20 bg-[#1A1A1A]">
          <div className="max-w-3xl mx-auto px-4">
            <div className="text-center mb-12">
              <span className="font-display text-sm tracking-[0.3em] text-[#E8A020] uppercase">
                Common Questions
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mt-3 uppercase tracking-[0.05em]">
                FAQ
              </h2>
              <div className="w-16 h-[3px] bg-[#E8A020] mx-auto mt-4" />
            </div>

            <div className="space-y-4">
              {config.faqs.map((f) => (
                <details key={f.q} className="group bg-[#222222] border border-[#333333] p-5">
                  <summary className="flex items-center justify-between cursor-pointer list-none font-display text-white tracking-[0.03em] uppercase text-sm sm:text-base">
                    {f.q}
                    <span className="text-[#E8A020] ml-4 transition-transform duration-300 group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 text-white/60 text-sm leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>

            <div className="text-center mt-12">
              <a
                href={BUSINESS.phoneHref}
                className="inline-flex items-center gap-2 font-display text-sm tracking-[0.2em] bg-[#E8A020] text-[#1A1A1A] px-8 py-4 hover:bg-[#d4920b] transition-all duration-300 font-semibold"
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
