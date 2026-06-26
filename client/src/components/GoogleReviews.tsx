/**
 * GoogleReviews — Carousel of Google review cards
 * Design: Industrial Craft — clean white cards, gold stars, Google branding
 * Mimics the mancusohomes.com review carousel
 */
import { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const reviews = [
  {
    name: "Sarah M.",
    date: "Feb 15, 2025",
    rating: 5,
    text: "Bright Builders exceeded all our expectations! From the initial consultation to the final walkthrough, every detail was handled with care. Our kitchen renovation turned out absolutely stunning.",
  },
  {
    name: "James T.",
    date: "Jan 28, 2025",
    rating: 5,
    text: "Professional, prompt, and very resourceful. The team at Bright Builders was attentive to every detail throughout our entire home renovation. Highly recommend!",
  },
  {
    name: "Maria L.",
    date: "Jan 10, 2025",
    rating: 5,
    text: "We hired Bright Builders for a complete bathroom remodel and couldn't be happier. Their design team helped us choose finishes that transformed the space completely.",
  },
  {
    name: "David K.",
    date: "Dec 20, 2024",
    rating: 5,
    text: "Quick and easy experience with the Bright Builders team! They helped us find our dream home and then renovated the kitchen exactly how we envisioned it.",
  },
  {
    name: "Jennifer R.",
    date: "Dec 05, 2024",
    rating: 5,
    text: "Working with Bright Builders was a pleasure from start to finish. Their attention to detail and commitment to quality is unmatched. Our custom home is everything we dreamed of.",
  },
  {
    name: "Michael P.",
    date: "Nov 18, 2024",
    rating: 5,
    text: "The whole process was seamless. Bright Builders' team communicated every step of the way and delivered our basement renovation on time and on budget. Truly impressive work.",
  },
  {
    name: "Amanda C.",
    date: "Nov 02, 2024",
    rating: 5,
    text: "We used Bright Builders for both buying our home and renovating it. Having everything under one roof made the entire experience so much easier. Fantastic team!",
  },
  {
    name: "Robert H.",
    date: "Oct 15, 2024",
    rating: 5,
    text: "Bright Builders built our custom home from the ground up and it's absolutely beautiful. The craftsmanship and attention to detail is evident in every corner of the house.",
  },
];

function GoogleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18A10.96 10.96 0 001 12c0 1.77.42 3.44 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );
}

export default function GoogleReviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setCardsPerView(1);
      else if (window.innerWidth < 1024) setCardsPerView(2);
      else setCardsPerView(3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, reviews.length - cardsPerView);

  const prev = useCallback(() => {
    setCurrentIndex((i) => Math.max(0, i - 1));
  }, []);

  const next = useCallback(() => {
    setCurrentIndex((i) => Math.min(maxIndex, i + 1));
  }, [maxIndex]);

  return (
    <section
      ref={sectionRef}
      className={`py-20 bg-[#1A1A1A] transition-opacity duration-1000 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <GoogleIcon />
            <span className="font-display text-sm tracking-[0.3em] text-white/60 uppercase">
              Google Reviews
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white uppercase tracking-[0.05em]">
            What Our Clients Say
          </h2>
          <div className="w-16 h-[3px] bg-[#E8A020] mx-auto mt-4" />

        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Navigation arrows */}
          <button
            onClick={prev}
            disabled={currentIndex === 0}
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-[#E8A020] text-[#1A1A1A] flex items-center justify-center hover:bg-[#d4920b] transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            disabled={currentIndex >= maxIndex}
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-[#E8A020] text-[#1A1A1A] flex items-center justify-center hover:bg-[#d4920b] transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronRight size={20} />
          </button>

          {/* Cards container */}
          <div className="overflow-hidden mx-6">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`,
              }}
            >
              {reviews.map((review, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 px-3"
                  style={{ width: `${100 / cardsPerView}%` }}
                >
                  <div className="bg-white p-6 h-full flex flex-col">
                    {/* Stars and date */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex gap-0.5">
                        {[...Array(review.rating)].map((_, j) => (
                          <Star key={j} size={16} className="fill-[#E8A020] text-[#E8A020]" />
                        ))}
                      </div>
                      <span className="text-xs text-gray-400">{review.date}</span>
                    </div>

                    {/* Review text */}
                    <p className="text-[#4A4A4A] text-sm leading-relaxed flex-1">
                      "{review.text}"
                    </p>

                    {/* Reviewer info */}
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                      <span className="font-semibold text-[#1A1A1A] text-sm">{review.name}</span>
                      <GoogleIcon />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pagination dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === currentIndex ? "bg-[#E8A020] w-6" : "bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
