import { Home, Hammer, Building2, Bath, Construction, Sofa, type LucideIcon } from "lucide-react";

export interface ServiceLandingConfig {
  slug: string; // route path without leading slash
  navLabel: string;
  icon?: LucideIcon; // optional eyebrow icon
  serviceValue: string; // must match a QuoteForm SERVICES entry
  source: string; // lead attribution tag
  heroImage: string;
  heroEyebrow: string;
  heroTitlePre: string;
  heroTitleHighlight: string;
  heroSubtitle: string;
  seoTitle: string;
  seoDescription: string;
  formHeadline: string;
  benefitsTitle: string;
  benefits: { title: string; description: string }[];
  faqs: { q: string; a: string }[];
  galleryTitle?: string;
  gallery?: { src: string; alt: string }[];
}

export const SERVICE_LANDINGS: Record<string, ServiceLandingConfig> = {
  "custom-homes": {
    slug: "custom-homes",
    navLabel: "Custom Homes",
    icon: Home,
    serviceValue: "Custom Home Build",
    source: "landing-custom-homes",
    heroImage: "/assets/cta-exterior-5qhmmdsgaq6lb3sfxvyqtl.webp",
    heroEyebrow: "Custom Home Builder · Northeast Ohio",
    heroTitlePre: "Build Your",
    heroTitleHighlight: "Custom Dream Home",
    heroSubtitle:
      "From your lot to your keys, Bright Builders manages every step of building a one-of-a-kind home — design, permits, construction, and finishes. Get a free, no-obligation build consultation.",
    seoTitle: "Custom Home Builder in NE Ohio | Bright Builders Corp",
    seoDescription:
      "Build a custom home in Northeast Ohio with Bright Builders Corp. Full design-to-keys management, premium craftsmanship, transparent estimates. Request a free consultation.",
    formHeadline: "Start Your Custom Home",
    benefitsTitle: "Why Build With Bright Builders",
    benefits: [
      { title: "Land-to-Keys Management", description: "One team handles design, permitting, construction, and final walkthrough — no juggling contractors." },
      { title: "Custom Design & Architecture", description: "Your vision, brought to life with detailed plans you approve before a single nail goes in." },
      { title: "Premium Craftsmanship", description: "Licensed, certified professionals who treat your home like it's their own." },
      { title: "Transparent Estimates", description: "Comprehensive, itemized proposals so there are no surprises along the way." },
    ],
    faqs: [
      { q: "How long does it take to build a custom home?", a: "Most custom builds run 8–14 months depending on size, site conditions, and finish selections. We give you a clear timeline in your proposal." },
      { q: "Can you build on a lot I already own?", a: "Absolutely. We build on your land or can help you evaluate lots before you purchase." },
      { q: "What areas do you serve?", a: "We build throughout Northeast Ohio, including Akron, Canton, Cleveland, and the surrounding communities." },
    ],
  },

  remodeling: {
    slug: "remodeling",
    navLabel: "Remodeling",
    icon: Hammer,
    serviceValue: "Remodeling / Renovation",
    source: "landing-remodeling",
    heroImage: "/assets/hero-renovation-hk78nargeai2rrbqb9zf8j.webp",
    heroEyebrow: "Remodeling & Design-Build · Northeast Ohio",
    heroTitlePre: "Remodeling That",
    heroTitleHighlight: "Transforms Your Home",
    heroSubtitle:
      "Kitchens, bathrooms, basements, additions, and whole-home renovations — designed and built under one roof. Tell us about your project and get a free estimate.",
    seoTitle: "Home Remodeling & Renovation in NE Ohio | Bright Builders Corp",
    seoDescription:
      "Kitchen, bath, basement, and whole-home remodeling in Northeast Ohio. Design-build under one roof from Bright Builders Corp. Request a free remodeling estimate.",
    formHeadline: "Get Your Remodel Quote",
    benefitsTitle: "Remodels We Handle",
    benefits: [
      { title: "Kitchens & Bathrooms", description: "From refreshes to full gut renovations with finishes that match your style and budget." },
      { title: "Basements & Additions", description: "Add living space, a home theater, in-law suite, or square footage that fits your life." },
      { title: "Whole-Home Renovations", description: "Reimagine your entire home with a single, coordinated project plan." },
      { title: "Design-Build Under One Roof", description: "Design and construction handled by one team — faster decisions, fewer surprises." },
    ],
    faqs: [
      { q: "Do you help with design, or do I need my own plans?", a: "We do both. Bring your own plans or let our design-build team create them with you — we guide you the whole way." },
      { q: "How do estimates work?", a: "After an on-site consultation we provide a detailed, itemized estimate covering layout, materials, and finishes — no surprises." },
      { q: "Can I live in my home during the remodel?", a: "In most cases, yes. We sequence the work and protect the rest of your home to minimize disruption." },
    ],
  },

  "kitchen-remodeling": {
    slug: "kitchen-remodeling",
    navLabel: "Kitchen Remodeling",
    serviceValue: "Kitchen Remodel",
    source: "landing-kitchen-remodeling",
    heroImage: "/assets/spobtwpudenpvted.webp",
    heroEyebrow: "Kitchen Remodeling & Renovation · Northeast Ohio",
    heroTitlePre: "Your Dream",
    heroTitleHighlight: "Kitchen Remodel",
    heroSubtitle:
      "Custom cabinetry, islands, countertops, and smart layouts — designed and built by one team. From a refresh to a full gut renovation, get a free kitchen remodel estimate.",
    seoTitle: "Kitchen Remodeling & Renovation in NE Ohio | Bright Builders Corp",
    seoDescription:
      "Kitchen remodeling and renovation in Northeast Ohio — custom cabinets, islands, countertops, and full layouts. Free estimate from Bright Builders Corp. Call (330) 785-9056.",
    formHeadline: "Get Your Kitchen Quote",
    benefitsTitle: "What Your Kitchen Remodel Includes",
    benefits: [
      { title: "Custom Cabinetry & Storage", description: "Cabinets, pantries, and storage solutions built around how you actually use your kitchen." },
      { title: "Countertops & Islands", description: "Quartz, granite, butcher block, and statement islands that anchor the space." },
      { title: "Layout, Lighting & Fixtures", description: "Open up the floor plan, improve flow, and add the lighting and fixtures that bring it together." },
      { title: "Design-Build Under One Roof", description: "Design and construction handled by one team — faster decisions and fewer surprises." },
    ],
    faqs: [
      { q: "How long does a kitchen remodel take?", a: "Most kitchen remodels run 4–8 weeks once materials are in, depending on scope. We give you a clear timeline in your estimate." },
      { q: "Can I use my kitchen during the remodel?", a: "Usually there's a period without full kitchen access, but we sequence the work and protect the rest of your home to keep disruption to a minimum." },
      { q: "Do you help pick finishes and materials?", a: "Yes — our design-build team helps you choose cabinets, counters, tile, and fixtures that fit your style and budget." },
    ],
    galleryTitle: "Kitchens We've Built",
    gallery: [
      { src: "/assets/nsmskmffoepckxzv.webp", alt: "Spacious kitchen with island and vaulted ceiling" },
      { src: "/assets/djinieeevzcasicq.webp", alt: "Kitchen with dark wood cabinets and stainless range" },
      { src: "/assets/nkptvoynjnkwvhbv.webp", alt: "Kitchen with custom cabinetry and gas range" },
      { src: "/assets/hrdrjkeclxcfxttg.webp", alt: "White kitchen with farmhouse apron sink" },
      { src: "/assets/xhiydhaakjsfgjeq.webp", alt: "Gray kitchen with patterned backsplash" },
      { src: "/assets/ynrbtogdhhpmqijn.webp", alt: "Modern kitchen with stainless appliances" },
    ],
  },

  "bathroom-remodeling": {
    slug: "bathroom-remodeling",
    navLabel: "Bathroom Remodeling",
    icon: Bath,
    serviceValue: "Bathroom Remodel",
    source: "landing-bathroom-remodeling",
    heroImage: "/assets/haiihjezgrhhvqjk.webp",
    heroEyebrow: "Bathroom Remodeling & Renovation · Northeast Ohio",
    heroTitlePre: "A Bathroom",
    heroTitleHighlight: "You'll Love",
    heroSubtitle:
      "Walk-in showers, freestanding tubs, custom vanities, and beautiful tile work — designed and built start to finish. Get a free bathroom remodel estimate.",
    seoTitle: "Bathroom Remodeling & Renovation in NE Ohio | Bright Builders Corp",
    seoDescription:
      "Bathroom remodeling and renovation in Northeast Ohio — walk-in showers, soaking tubs, custom vanities, and tile. Free estimate from Bright Builders Corp. Call (330) 785-9056.",
    formHeadline: "Get Your Bathroom Quote",
    benefitsTitle: "What Your Bathroom Remodel Includes",
    benefits: [
      { title: "Walk-In Showers & Tubs", description: "Custom tile showers, frameless glass, and freestanding or soaking tubs built to last." },
      { title: "Custom Vanities & Storage", description: "Vanities, cabinetry, and storage tailored to your space and style." },
      { title: "Tile, Flooring & Fixtures", description: "Durable, water-smart tile, flooring, lighting, and fixtures that finish the room." },
      { title: "Design-Build Under One Roof", description: "Plumbing, tile, and finishing handled by one coordinated team." },
    ],
    faqs: [
      { q: "How long does a bathroom remodel take?", a: "Most bathroom remodels take 2–4 weeks depending on size and scope. You'll get a clear timeline in your estimate." },
      { q: "Can you remodel both small and large bathrooms?", a: "Yes — from powder rooms to full master baths, we handle bathrooms of every size." },
      { q: "Do you handle plumbing and tile work?", a: "Absolutely. Our team manages plumbing, tile, fixtures, and finishing so it's all done under one roof." },
    ],
    galleryTitle: "Bathrooms We've Built",
    gallery: [
      { src: "/assets/dltcfftlarovhaat.webp", alt: "Walk-in marble tile shower with glass door" },
      { src: "/assets/yzkvoqrxausgdxez.webp", alt: "Blue subway tile shower and pedestal sink" },
      { src: "/assets/rqmcowxhgxwyjhca.webp", alt: "Custom bathroom vanity with round mirror" },
    ],
  },

  "home-additions": {
    slug: "home-additions",
    navLabel: "Home Additions",
    icon: Construction,
    serviceValue: "Home Addition",
    source: "landing-home-additions",
    heroImage: "/assets/additions-framing.webp",
    heroEyebrow: "Home Additions & New Construction · Northeast Ohio",
    heroTitlePre: "Add Space",
    heroTitleHighlight: "Without the Move",
    heroSubtitle:
      "An extra bedroom, a larger kitchen, a new level, or a master suite — Bright Builders designs and builds additions that blend seamlessly with your existing home. Get a free addition estimate.",
    seoTitle: "Home Additions & New Construction in NE Ohio | Bright Builders Corp",
    seoDescription:
      "Home additions and new construction across Northeast Ohio — bedrooms, kitchens, master suites, second stories. Free estimate from Bright Builders Corp. Call (330) 785-9056.",
    formHeadline: "Get Your Addition Quote",
    benefitsTitle: "Additions We Build",
    benefits: [
      { title: "Bedroom & Master Suite Additions", description: "Add a new bedroom, primary suite, or in-law suite designed to feel like it's always been there." },
      { title: "Kitchen & Living Space Expansions", description: "Open up your floor plan or push out for a larger kitchen, family room, or sunroom." },
      { title: "Second-Story & Bump-Out Additions", description: "Add square footage up or out — we handle structural design and the build, start to finish." },
      { title: "Seamless Integration", description: "Roofline, siding, and finishes matched to your existing home so the addition looks built-in, not bolted on." },
    ],
    faqs: [
      { q: "How long does a home addition take?", a: "Most additions run 3–6 months depending on size and complexity. You'll get a clear timeline in your estimate." },
      { q: "Will the addition blend with my existing home?", a: "Yes — we match the roofline, siding, windows, and finishes so the addition looks original to the house, inside and out." },
      { q: "Do you handle permits and structural work?", a: "Absolutely. We manage permitting, structural design, and inspections so you don't have to coordinate any of it." },
    ],
    galleryTitle: "Additions We've Built",
    gallery: [
      { src: "/assets/additions-framing.webp", alt: "Aerial view of a new home addition being framed" },
      { src: "/assets/cta-exterior-5qhmmdsgaq6lb3sfxvyqtl.webp", alt: "Finished home exterior with addition" },
      { src: "/assets/hero-renovation-hk78nargeai2rrbqb9zf8j.webp", alt: "Open kitchen and living space inside an addition" },
    ],
  },

  "basement-renovations": {
    slug: "basement-renovations",
    navLabel: "Basement Renovations",
    icon: Sofa,
    serviceValue: "Basement Renovation",
    source: "landing-basement-renovations",
    heroImage: "/assets/portfolio/dsc04016-hdr-1920w_1__065446b7.webp",
    heroEyebrow: "Basement Finishing & Renovation · Northeast Ohio",
    heroTitlePre: "Transform Your",
    heroTitleHighlight: "Basement",
    heroSubtitle:
      "Turn unused square footage into a home theater, bar, gym, in-law suite, or family hangout. Bright Builders handles design, framing, plumbing, and finishes — start to finish. Get a free basement estimate.",
    seoTitle: "Basement Finishing & Renovation in NE Ohio | Bright Builders Corp",
    seoDescription:
      "Basement finishing, remodeling, and renovation across Northeast Ohio — home theaters, bars, gyms, in-law suites. Free estimate from Bright Builders Corp. Call (330) 785-9056.",
    formHeadline: "Get Your Basement Quote",
    benefitsTitle: "What We Build Downstairs",
    benefits: [
      { title: "Full Basement Finishing", description: "From bare studs to finished living space — framing, drywall, electrical, plumbing, and finishes all handled." },
      { title: "Bars, Theaters & Game Rooms", description: "Custom built-ins, lighting, and layouts designed around how you actually want to use the space." },
      { title: "In-Law Suites & Guest Spaces", description: "Add a bedroom, bathroom, or full suite with proper egress windows and code-compliant design." },
      { title: "Moisture-Smart Design", description: "Smart material choices and proper sealing so your investment lasts for decades." },
    ],
    faqs: [
      { q: "How long does a basement remodel take?", a: "Most basement finishes run 6–12 weeks depending on size, plumbing, and finish level. You'll get a clear timeline in your estimate." },
      { q: "Do you handle egress windows and code requirements?", a: "Yes — we handle egress windows, permitting, electrical, plumbing, and inspections so the basement is fully code-compliant." },
      { q: "Can you add a bathroom or kitchenette downstairs?", a: "Absolutely. We can rough in plumbing for a full bathroom, half bath, wet bar, or kitchenette." },
    ],
    galleryTitle: "Basements We've Built",
    gallery: [
      { src: "/assets/portfolio/dsc04016-hdr-1920w_1__065446b7.webp", alt: "Finished basement bar with bar stools and sputnik chandeliers" },
      { src: "/assets/portfolio/dsc04061-hdr-1920w_a5ed1f2a.webp", alt: "Basement game room" },
      { src: "/assets/portfolio/dsc09258-1920w_eadd0554.webp", alt: "Basement entertainment room" },
      { src: "/assets/portfolio/img_7149-1920w_382039d4.webp", alt: "Finished basement media room" },
    ],
  },

  "real-estate": {
    slug: "real-estate",
    navLabel: "Buy & Sell",
    icon: Building2,
    serviceValue: "Buy or Sell a Home",
    source: "landing-real-estate",
    heroImage: "/assets/djinieeevzcasicq.webp",
    heroEyebrow: "Real Estate · Northeast Ohio",
    heroTitlePre: "Buy or Sell With a",
    heroTitleHighlight: "Builder's Advantage",
    heroSubtitle:
      "Our real estate professionals help you buy or sell — with the unique edge of an in-house construction team for renovations, repairs, and value-adds. Get a free, no-pressure consultation.",
    seoTitle: "Buy or Sell a Home in NE Ohio | Bright Builders Corp Real Estate",
    seoDescription:
      "Buy or sell your home in Northeast Ohio with Bright Builders Corp — real estate plus an in-house construction team for renovations and value-adds. Free consultation.",
    formHeadline: "Talk to Our Real Estate Team",
    benefitsTitle: "The Bright Builders Edge",
    benefits: [
      { title: "Local Market Expertise", description: "Pricing, staging, and negotiation guidance grounded in Northeast Ohio neighborhoods." },
      { title: "Renovate-to-Sell", description: "Boost your sale price with strategic, in-house improvements before you list." },
      { title: "Buy + Build / Remodel", description: "Find a home and renovate it with one team — all coordinated under one roof." },
      { title: "Full-Service Representation", description: "We guide you start to finish, whether you're buying, selling, or both." },
    ],
    faqs: [
      { q: "Do you only sell homes you've built?", a: "No — our agents help you buy or sell any home. The bonus is our in-house construction team for repairs and renovations." },
      { q: "Can you help me renovate a home before I sell it?", a: "Yes. We can identify high-return improvements and complete them quickly to maximize your sale price." },
      { q: "What areas do you cover?", a: "We serve buyers and sellers across Northeast Ohio, including Akron, Canton, Cleveland, and nearby communities." },
    ],
  },
};

export const SERVICE_SLUGS = Object.keys(SERVICE_LANDINGS);
