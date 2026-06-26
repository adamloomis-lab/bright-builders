/**
 * Services — Three service cards with background images
 * Design: Industrial Craft — dark overlays, gold accents, hover lift
 */
import { useEffect, useRef, useState } from "react";
import { Home, Hammer, Building2 } from "lucide-react";
import { Link } from "wouter";

const RENOVATION_IMG = "/assets/hero-renovation-hk78nargeai2rrbqb9zf8j.webp";
const KITCHEN_IMG = "/assets/djinieeevzcasicq.webp";
const EXTERIOR_IMG = "/assets/cta-exterior-5qhmmdsgaq6lb3sfxvyqtl.webp";

const services = [
  {
    title: "CUSTOM HOMES",
    description: "Build your dream home from the ground up with our elite construction team.",
    icon: Home,
    image: EXTERIOR_IMG,
    href: "/custom-homes",
  },
  {
    title: "REMODELING",
    description: "Transform your existing space with expert renovation and design services.",
    icon: Hammer,
    image: RENOVATION_IMG,
    href: "/remodeling",
  },
  {
    title: "BUY & SELL",
    description: "Expert real estate professionals to guide your buying and selling journey.",
    icon: Building2,
    image: KITCHEN_IMG,
    href: "/buy-sell",
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
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

  const Icon = service.icon;

  return (
    <div
      ref={ref}
      className={`group relative overflow-hidden cursor-pointer transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Background image (links to the service's page) */}
      <Link
        href={service.href}
        aria-label={service.title}
        className="block aspect-[4/5] relative overflow-hidden cursor-pointer"
      >
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/60 to-transparent transition-opacity duration-500" />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
          <div className="mb-3">
            <Icon className="text-[#E8A020] mb-3" size={32} strokeWidth={1.5} />
          </div>
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-[0.1em]">
            {service.title}
          </h3>
          <p className="mt-2 text-white/70 text-sm leading-relaxed max-w-xs">
            {service.description}
          </p>
          {/* Gold accent line */}
          <div className="w-12 h-[2px] bg-[#E8A020] mt-4 transition-all duration-500 group-hover:w-20" />
        </div>
      </Link>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-20 bg-[#F5F0EB]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="font-display text-sm tracking-[0.3em] text-[#E8A020] uppercase">
            What We Do
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A1A1A] mt-3 uppercase tracking-[0.05em]">
            Our Services
          </h2>
          <div className="w-16 h-[3px] bg-[#E8A020] mx-auto mt-4" />
        </div>

        {/* Service cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
