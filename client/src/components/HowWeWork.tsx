/**
 * HowWeWork — Four-step process section
 * Design: Industrial Craft — dark bg, numbered steps, gold accents, blueprint feel
 */
import { useEffect, useRef, useState } from "react";
import { Ear, PenTool, Calculator, Award } from "lucide-react";

const BLUEPRINT_IMG = "/assets/process-blueprint-raqwdqyhjtifuxbqmobfgn.webp";

const steps = [
  {
    number: "01",
    title: "WE LISTEN",
    description: "Your vision is at the heart of what we do. We take the time to listen closely, so we can create a space that matches what you've always imagined for your home.",
    icon: Ear,
  },
  {
    number: "02",
    title: "PLAN IT",
    description: "We bring your ideas to life with detailed designs and drawings, ensuring you're fully on board before construction begins. Whether you have a specific plan or just a rough idea, we'll guide you through the process.",
    icon: PenTool,
  },
  {
    number: "03",
    title: "ESTIMATE",
    description: "Our estimates are comprehensive, ensuring that every element — from layout to finishes — is clearly outlined, so there are no surprises.",
    icon: Calculator,
  },
  {
    number: "04",
    title: "PROFESSIONALISM",
    description: "Our team is highly trained, licensed, and committed to ongoing education in their fields. You can trust that every member of the Bright Builders crew brings top-notch expertise.",
    icon: Award,
  },
];

function StepCard({ step, index }: { step: typeof steps[0]; index: number }) {
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

  const Icon = step.icon;

  return (
    <div
      ref={ref}
      className={`relative transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      <div className="relative p-6 sm:p-8 bg-[#222222] border border-[#333333] group hover:border-[#E8A020]/40 transition-all duration-500">
        {/* Step number */}
        <span className="font-display text-5xl sm:text-6xl font-bold text-[#E8A020]/15 absolute top-4 right-4">
          {step.number}
        </span>

        <div className="relative z-10">
          <Icon className="text-[#E8A020] mb-4" size={28} strokeWidth={1.5} />
          <h3 className="font-display text-xl font-bold text-white tracking-[0.1em] mb-3">
            {step.title}
          </h3>
          <p className="text-white/60 text-sm leading-relaxed">
            {step.description}
          </p>
          {/* Gold accent line */}
          <div className="w-10 h-[2px] bg-[#E8A020] mt-4 transition-all duration-500 group-hover:w-16" />
        </div>
      </div>
    </div>
  );
}

export default function HowWeWork() {
  return (
    <section className="relative py-24 bg-[#1A1A1A] overflow-hidden">
      {/* Background blueprint image with low opacity */}
      <div className="absolute inset-0 opacity-5">
        <img
          src={BLUEPRINT_IMG}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="font-display text-sm tracking-[0.3em] text-[#E8A020] uppercase">
            Our Process
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 uppercase tracking-[0.05em]">
            How We Work
          </h2>
          <div className="w-16 h-[3px] bg-[#E8A020] mx-auto mt-4" />
          <p className="mt-6 text-white/60 max-w-2xl mx-auto leading-relaxed">
            At Bright Builders, we believe that great projects start with great communication. We take the time upfront to fully understand your needs, and we provide detailed designs and accurate proposals to ensure your vision is realized.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <StepCard key={step.number} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
