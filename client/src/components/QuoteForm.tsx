import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";

const SERVICES = [
  "Custom Home Build",
  "Home Addition",
  "Kitchen Remodel",
  "Bathroom Remodel",
  "Basement Renovation",
  "Remodeling / Renovation",
  "Design-Build Project",
  "Buy or Sell a Home",
  "Other / Not Sure Yet",
];

function encode(data: Record<string, string>) {
  return Object.keys(data)
    .map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(data[k]))
    .join("&");
}

interface QuoteFormProps {
  /** Pre-selects a value in the Service dropdown (must match a SERVICES entry). */
  defaultService?: string;
  /** Tags the lead with which page it came from (sent as a hidden `landing_page` field). */
  source?: string;
}

export default function QuoteForm({ defaultService, source }: QuoteFormProps = {}) {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(false);
    setSubmitting(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload: Record<string, string> = { "form-name": "quote" };
    data.forEach((value, key) => {
      payload[key] = value.toString();
    });

    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode(payload),
      });
      if (!res.ok) throw new Error("Network error");
      setSubmitted(true);
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="bg-white p-8 sm:p-10 text-center">
        <CheckCircle2 className="text-[#E8A020] mx-auto mb-4" size={48} strokeWidth={1.5} />
        <h3 className="font-display text-2xl font-bold text-[#1A1A1A] uppercase tracking-[0.05em]">
          Thank You!
        </h3>
        <p className="mt-3 text-[#4A4A4A] leading-relaxed">
          Your request has been received. A member of the Bright Builders team will reach out
          shortly to discuss your project. Need to talk sooner? Call us at{" "}
          <a href="tel:+13307859056" className="text-[#c98a0b] font-semibold hover:underline">
            (330) 785-9056
          </a>
          .
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full bg-[#F5F0EB] border border-[#E8A020]/20 px-4 py-3 text-[#1A1A1A] text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8A020] focus-visible:ring-offset-1 focus:border-[#E8A020] transition-colors";

  return (
    <form
      name="quote"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="bg-white p-6 sm:p-8 shadow-xl"
    >
      <input type="hidden" name="form-name" value="quote" />
      {source && <input type="hidden" name="landing_page" value={source} />}
      <p className="hidden">
        <label>
          Don't fill this out if you're human: <input name="bot-field" />
        </label>
      </p>

      <h3 className="font-display text-2xl font-bold text-[#1A1A1A] uppercase tracking-[0.05em] mb-1">
        Request a Free Quote
      </h3>
      <p className="text-[#4A4A4A] text-sm mb-6">
        Tell us about your project and we'll be in touch.
      </p>

      <div className="space-y-4">
        <div>
          <label htmlFor="q-name" className="block text-xs font-semibold text-[#1A1A1A] uppercase tracking-[0.1em] mb-1.5">
            Full Name
          </label>
          <input id="q-name" name="name" type="text" required autoComplete="name" className={inputClass} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="q-phone" className="block text-xs font-semibold text-[#1A1A1A] uppercase tracking-[0.1em] mb-1.5">
              Phone
            </label>
            <input id="q-phone" name="phone" type="tel" required autoComplete="tel" className={inputClass} />
          </div>
          <div>
            <label htmlFor="q-email" className="block text-xs font-semibold text-[#1A1A1A] uppercase tracking-[0.1em] mb-1.5">
              Email
            </label>
            <input id="q-email" name="email" type="email" required autoComplete="email" className={inputClass} />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="q-service" className="block text-xs font-semibold text-[#1A1A1A] uppercase tracking-[0.1em] mb-1.5">
              Service Needed
            </label>
            <select id="q-service" name="service" required className={inputClass} defaultValue={defaultService ?? ""}>
              <option value="" disabled>
                Select a service…
              </option>
              {SERVICES.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="q-city" className="block text-xs font-semibold text-[#1A1A1A] uppercase tracking-[0.1em] mb-1.5">
              City / ZIP
            </label>
            <input id="q-city" name="city" type="text" autoComplete="address-level2" className={inputClass} />
          </div>
        </div>

        <div>
          <label htmlFor="q-message" className="block text-xs font-semibold text-[#1A1A1A] uppercase tracking-[0.1em] mb-1.5">
            Project Details
          </label>
          <textarea id="q-message" name="message" rows={4} className={inputClass} placeholder="Tell us a bit about what you have in mind…" />
        </div>

        {error && (
          <p className="text-sm text-red-600" role="alert">
            Something went wrong. Please try again or call us at (330) 785-9056.
          </p>
        )}

        <button
          type="submit"
          disabled={submitting}
          className="w-full font-display text-sm tracking-[0.2em] bg-[#E8A020] text-[#1A1A1A] px-8 py-4 hover:bg-[#d4920b] transition-all duration-300 font-semibold uppercase inline-flex items-center justify-center gap-2 disabled:opacity-60"
        >
          {submitting ? (
            <>
              <Loader2 size={18} className="animate-spin" /> Sending…
            </>
          ) : (
            "Get My Free Quote"
          )}
        </button>
        <p className="text-[#666666] text-xs text-center">
          No obligation. We'll never share your information.
        </p>
      </div>
    </form>
  );
}
