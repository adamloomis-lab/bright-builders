/**
 * Portfolio — Dual-row auto-scrolling gallery
 * Row 1 scrolls left, Row 2 scrolls right — infinite CSS animation
 * Design: Industrial Craft — full-bleed images, hover zoom, no text overlays
 */
import { useEffect, useRef, useState } from "react";

/* Row 1 images — scrolls LEFT */
const row1 = [
  { src: "/assets/vsvvgyuvzbtfmpbc.webp", alt: "Elegant dining room" },
  { src: "/assets/tibbxpqzuzxwboqf.webp", alt: "Luxury bathroom with freestanding tub" },
  { src: "/assets/spobtwpudenpvted.webp", alt: "Modern kitchen island" },
  { src: "/assets/portfolio/img_7149-1920w_382039d4.webp", alt: "Finished basement media room" },
  { src: "/assets/zbmzrieoebhjxzsa.webp", alt: "Teal tile bathroom" },
  { src: "/assets/dltcfftlarovhaat.webp", alt: "Basement fireplace with sports memorabilia" },
  { src: "/assets/punpclmmhgcymgiz.webp", alt: "White farmhouse kitchen" },
  { src: "/assets/tftllfblwvvlomxp.webp", alt: "Gray kitchen with diamond backsplash" },
  { src: "/assets/hrdrjkeclxcfxttg.webp", alt: "Gray kitchen range closeup" },
];

/* Row 2 images — scrolls RIGHT */
const row2 = [
  { src: "/assets/nkptvoynjnkwvhbv.webp", alt: "Dining room alternate view" },
  { src: "/assets/nsmskmffoepckxzv.webp", alt: "Media room with teal sofa" },
  { src: "/assets/yzkvoqrxausgdxez.webp", alt: "Subway tile bathroom" },
  { src: "/assets/rhrmzchrhqeccflm.webp", alt: "Marble shower bathroom" },
  { src: "/assets/haiihjezgrhhvqjk.webp", alt: "Luxury black vanity bathroom" },
  { src: "/assets/djinieeevzcasicq.webp", alt: "Kitchen with green cabinets" },
  { src: "/assets/kbwrzuwhnwkzidxj.webp", alt: "Modern bathroom vanity" },
  { src: "/assets/ynrbtogdhhpmqijn.webp", alt: "Hallway with accent lighting" },
  { src: "/assets/xhiydhaakjsfgjeq.webp", alt: "Dining area with skylight" },
  { src: "/assets/wtdiaoxgisyiavvo.webp", alt: "Basement wall sconce lighting" },
  { src: "/assets/rqmcowxhgxwyjhca.webp", alt: "Glass shower with barn door" },
  { src: "/assets/wudnrujdujkvjfzx.webp", alt: "Custom bar area" },
];

function ScrollRow({
  images,
  direction,
  duration = 60,
}: {
  images: { src: string; alt: string }[];
  direction: "left" | "right";
  duration?: number;
}) {
  const trackRef = useRef<HTMLDivElement>(null);

  return (
    <div className="overflow-hidden">
      <div
        ref={trackRef}
        className="flex gap-3"
        style={{
          animation: `scroll-${direction} ${duration}s linear infinite`,
          width: "max-content",
        }}
      >
        {/* Render images twice for seamless loop */}
        {[...images, ...images].map((img, i) => (
          <div
            key={`${direction}-${i}`}
            className="flex-shrink-0 w-64 sm:w-72 lg:w-80 group overflow-hidden"
          >
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
  );
}

export default function Portfolio() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className={`py-20 bg-[#F5F0EB] transition-opacity duration-1000 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="font-display text-sm tracking-[0.3em] text-[#E8A020] uppercase">
            Our Work
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A1A1A] mt-3 uppercase tracking-[0.05em]">
            Portfolio
          </h2>
          <div className="w-16 h-[3px] bg-[#E8A020] mx-auto mt-4" />
        </div>
      </div>

      {/* Dual-row auto-scrolling gallery */}
      <div className="space-y-3">
        <ScrollRow images={row1} direction="left" duration={50} />
        <ScrollRow images={row2} direction="right" duration={55} />
      </div>

      {/* CSS keyframes for scroll animation */}
      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}
