/**
 * Contact page (/contact) — rebuilt to match the live multi-page site.
 * Embeds the business's existing JotForm (id 260615760004044).
 */
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import QuoteForm from "@/components/QuoteForm";
import { useSeo } from "@/hooks/useSeo";
import { BUSINESS } from "@/lib/site";

export default function ContactPage() {
  useSeo({
    title: "Contact Us | Bright Builders Corp",
    description:
      "Get in touch with Bright Builders Corp. Call (330) 785-9056 or request a free consultation online. Serving Uniontown and all of Northeast Ohio.",
    path: "/contact",
  });

  return (
    <div className="min-h-screen flex flex-col bg-warm-white">
      <Navbar />
      <main>
        {/* Header */}
        <header className="bg-[#1A1A1A] pt-36 pb-20">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <div className="w-16 h-[3px] bg-[#E8A020] mx-auto mb-6" />
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white uppercase tracking-[0.05em]">
              Get In <span className="text-[#E8A020]">Touch</span>
            </h1>
            <p className="mt-6 text-white/60 leading-relaxed">
              Ready to start your project? Fill out the form below or give us a call. We'd love to
              hear about your vision.
            </p>
          </div>
        </header>

        <section className="py-20 bg-[#F5F0EB]">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact info */}
            <div className="lg:col-span-2">
              <span className="font-display text-sm tracking-[0.3em] text-[#E8A020] uppercase">
                Contact Info
              </span>
              <h2 className="font-display text-3xl font-bold text-[#1A1A1A] mt-2 uppercase tracking-[0.05em]">
                Let's Talk
              </h2>
              <div className="w-12 h-[3px] bg-[#E8A020] mt-4 mb-8" />

              <div className="space-y-6">
                <a href={BUSINESS.phoneHref} className="flex items-start gap-4 group">
                  <span className="w-11 h-11 flex items-center justify-center bg-[#1A1A1A] text-[#E8A020] flex-shrink-0">
                    <Phone size={18} />
                  </span>
                  <span>
                    <span className="block font-display text-xs tracking-[0.2em] text-[#1A1A1A] uppercase">
                      Phone
                    </span>
                    <span className="text-[#4A4A4A] group-hover:text-[#c98a0b] transition-colors">
                      {BUSINESS.phone}
                    </span>
                  </span>
                </a>

                <a href={`mailto:${BUSINESS.email}`} className="flex items-start gap-4 group">
                  <span className="w-11 h-11 flex items-center justify-center bg-[#1A1A1A] text-[#E8A020] flex-shrink-0">
                    <Mail size={18} />
                  </span>
                  <span>
                    <span className="block font-display text-xs tracking-[0.2em] text-[#1A1A1A] uppercase">
                      Email
                    </span>
                    <span className="text-[#4A4A4A] group-hover:text-[#c98a0b] transition-colors break-all">
                      {BUSINESS.email}
                    </span>
                  </span>
                </a>

                <div className="flex items-start gap-4">
                  <span className="w-11 h-11 flex items-center justify-center bg-[#1A1A1A] text-[#E8A020] flex-shrink-0">
                    <MapPin size={18} />
                  </span>
                  <span>
                    <span className="block font-display text-xs tracking-[0.2em] text-[#1A1A1A] uppercase">
                      Office
                    </span>
                    <span className="text-[#4A4A4A]">
                      {BUSINESS.street},<br />
                      {BUSINESS.city}, {BUSINESS.state} {BUSINESS.zip}
                    </span>
                  </span>
                </div>

                <div className="flex items-start gap-4">
                  <span className="w-11 h-11 flex items-center justify-center bg-[#1A1A1A] text-[#E8A020] flex-shrink-0">
                    <Clock size={18} />
                  </span>
                  <span>
                    <span className="block font-display text-xs tracking-[0.2em] text-[#1A1A1A] uppercase mb-1">
                      Office Hours
                    </span>
                    <span className="block text-[#4A4A4A] text-sm">
                      Monday – Friday: <span className="text-[#1A1A1A]">8:00 AM – 5:00 PM</span>
                    </span>
                    <span className="block text-[#4A4A4A] text-sm">
                      Saturday: <span className="text-[#1A1A1A]">By Appointment</span>
                    </span>
                    <span className="block text-[#4A4A4A] text-sm">
                      Sunday: <span className="text-[#1A1A1A]">Closed</span>
                    </span>
                  </span>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <QuoteForm source="contact-page" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
