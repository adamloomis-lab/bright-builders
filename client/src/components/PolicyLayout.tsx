import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface PolicyLayoutProps {
  title: string;
  intro: string;
  updated: string;
  children: ReactNode;
}

export default function PolicyLayout({ title, intro, updated, children }: PolicyLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-warm-white">
      <Navbar />
      <main>
        {/* Dark page header (keeps the transparent navbar legible) */}
        <header className="bg-[#1A1A1A] pt-36 pb-20">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <div className="w-16 h-[3px] bg-[#E8A020] mx-auto mb-6" />
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white uppercase tracking-[0.05em]">
              {title}
            </h1>
            <p className="mt-5 text-white/60 leading-relaxed">{intro}</p>
            <p className="mt-4 text-white/30 text-xs tracking-[0.15em] uppercase">
              Last updated: {updated}
            </p>
          </div>
        </header>

        {/* Body */}
        <article className="max-w-3xl mx-auto px-4 py-16 policy-prose">
          {children}
        </article>
      </main>
      <Footer />
    </div>
  );
}
