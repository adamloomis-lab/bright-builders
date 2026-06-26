/**
 * Bright Builders Homepage
 * Design: "Industrial Craft" — Modern Industrial meets Artisan Warmth
 * Colors: Charcoal (#1A1A1A), Amber Gold (#E8A020), Warm White (#F5F0EB)
 * Typography: Oswald (display), Source Sans 3 (body)
 */
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Awards from "@/components/Awards";
import GoogleReviews from "@/components/GoogleReviews";
import About from "@/components/About";
import HowWeWork from "@/components/HowWeWork";
import Portfolio from "@/components/Portfolio";
import ServiceAreas from "@/components/ServiceAreas";
import Faq from "@/components/Faq";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";
import { useSeo } from "@/hooks/useSeo";

export default function Home() {
  useSeo({
    title: "Bright Builders Corp | Custom Homes, Remodeling & Real Estate in NE Ohio",
    description:
      "Bright Builders Corp is your all-in-one team for custom homes, remodeling, design-build, and real estate across Northeast Ohio. Call (330) 785-9056 for a free quote.",
    path: "/",
  });

  return (
    <div className="min-h-screen flex flex-col bg-warm-white">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:shadow-lg focus:text-gray-900">Skip to content</a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Services />
        <Awards />
        <GoogleReviews />
        <About />
        <HowWeWork />
        <Portfolio />
        <ServiceAreas />
        <Faq />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
}
