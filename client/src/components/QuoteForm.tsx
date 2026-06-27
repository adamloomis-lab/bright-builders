import { useState } from "react";
import {
  Loader2,
  Send,
  ArrowRight,
  Phone,
  Home,
  PlusSquare,
  ChefHat,
  Bath,
  Layers,
  Hammer,
  PencilRuler,
  KeyRound,
  HelpCircle,
  type LucideIcon,
} from "lucide-react";
import { FloatField, SuccessCheck } from "@/components/FluidField";

// Service options as single-select icon cards. The submitted `value` is kept
// identical to the old <select> options so the Netlify backend receives the
// same data.
const SERVICES: { value: string; label: string; icon: LucideIcon }[] = [
  { value: "Custom Home Build", label: "Custom home build", icon: Home },
  { value: "Home Addition", label: "Home addition", icon: PlusSquare },
  { value: "Kitchen Remodel", label: "Kitchen remodel", icon: ChefHat },
  { value: "Bathroom Remodel", label: "Bathroom remodel", icon: Bath },
  { value: "Basement Renovation", label: "Basement renovation", icon: Layers },
  { value: "Remodeling / Renovation", label: "Remodel / renovation", icon: Hammer },
  { value: "Design-Build Project", label: "Design-build project", icon: PencilRuler },
  { value: "Buy or Sell a Home", label: "Buy or sell a home", icon: KeyRound },
  { value: "Other / Not Sure Yet", label: "Other / not sure yet", icon: HelpCircle },
];

function encode(data: Record<string, string>) {
  return Object.keys(data)
    .map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(data[k]))
    .join("&");
}

interface QuoteFormProps {
  /** Pre-selects a value in the Service selector (must match a SERVICES entry). */
  defaultService?: string;
  /** Tags the lead with which page it came from (sent as a hidden `landing_page` field). */
  source?: string;
}

export default function QuoteForm({ defaultService, source }: QuoteFormProps = {}) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: defaultService ?? "",
    city: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submittedName, setSubmittedName] = useState("");
  const [error, setError] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(false);
    setSubmitting(true);

    const payload: Record<string, string> = {
      "form-name": "quote",
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      service: formData.service,
      city: formData.city,
      message: formData.message,
    };
    if (source) payload.landing_page = source;

    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode(payload),
      });
      if (!res.ok) throw new Error("Network error");
      // Capture first name before any reset for the personalized thank-you.
      setSubmittedName(formData.name.trim().split(" ")[0]);
      setSubmitted(true);
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div
        className="bg-white p-8 sm:p-10 text-center shadow-xl"
        style={{ animation: "rise 0.8s cubic-bezier(0.16,1,0.3,1) both" }}
      >
        <span className="mx-auto mb-5 flex h-16 w-16 items-center justify-center">
          <SuccessCheck />
        </span>
        <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#1A1A1A] uppercase tracking-[0.05em]">
          {submittedName ? `Thank You, ${submittedName}!` : "Thank You!"}
        </h3>
        <p className="mt-3 text-[#4A4A4A] leading-relaxed max-w-md mx-auto">
          Your request has been received. A member of the Bright Builders team will reach out
          shortly to discuss your project. Need to talk sooner?
        </p>
        <a
          href="tel:+13307859056"
          className="group relative mt-6 inline-flex items-center justify-center gap-2 overflow-hidden bg-[#E8A020] text-[#1A1A1A] font-display text-sm font-semibold tracking-[0.2em] uppercase px-8 py-4 hover:bg-[#d4920b] transition-all duration-300 active:scale-[0.98]"
        >
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-white/40 blur-md group-hover:[animation:sheen_0.9s_ease]"
          />
          <Phone size={16} /> Call (330) 785-9056
        </a>
      </div>
    );
  }

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
      {/* Keep `service` in the static form for Netlify form detection at build time. */}
      <input type="hidden" name="service" value={formData.service} />
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
        <FloatField
          name="name"
          label="Full Name"
          value={formData.name}
          onChange={handleChange}
          autoComplete="name"
          required
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FloatField
            name="phone"
            label="Phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            autoComplete="tel"
            required
          />
          <FloatField
            name="email"
            label="Email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            autoComplete="email"
            required
          />
        </div>

        {/* Service as single-select icon cards (value still submits via formData.service) */}
        <fieldset>
          <legend className="mb-2.5 block font-display text-xs font-semibold text-[#1A1A1A] uppercase tracking-[0.1em]">
            Service Needed <span className="text-[#c98a0b]">*</span>
          </legend>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
            {SERVICES.map((o) => {
              const active = formData.service === o.value;
              const Icon = o.icon;
              return (
                <button
                  key={o.value}
                  type="button"
                  aria-pressed={active}
                  onClick={() =>
                    setFormData((prev) => ({
                      ...prev,
                      service: active ? "" : o.value,
                    }))
                  }
                  className={`flex flex-col items-start gap-2 rounded-md border px-3.5 py-3.5 text-left font-sans text-sm transition-all duration-200 active:scale-[0.98] ${
                    active
                      ? "border-[#E8A020] bg-[#E8A020] text-[#1A1A1A] shadow-[0_10px_24px_-12px_rgba(232,160,32,0.8)]"
                      : "border-[#E8A020]/20 bg-[#F5F0EB] text-[#1A1A1A] hover:border-[#E8A020] hover:bg-white"
                  }`}
                >
                  <Icon
                    size={22}
                    className={active ? "text-[#1A1A1A]" : "text-[#c98a0b]"}
                    strokeWidth={1.75}
                  />
                  <span className="font-semibold leading-tight">{o.label}</span>
                </button>
              );
            })}
          </div>
        </fieldset>

        <FloatField
          name="city"
          label="City / ZIP"
          value={formData.city}
          onChange={handleChange}
          autoComplete="address-level2"
        />

        <FloatField
          name="message"
          label="Project Details"
          value={formData.message}
          onChange={handleChange}
          textarea
          rows={4}
        />

        {error && (
          <p className="text-sm text-red-600" role="alert">
            Something went wrong. Please try again or call us at (330) 785-9056.
          </p>
        )}

        <button
          type="submit"
          disabled={submitting}
          className="group relative w-full overflow-hidden font-display text-sm tracking-[0.2em] bg-[#E8A020] text-[#1A1A1A] px-8 py-4 hover:bg-[#d4920b] transition-all duration-300 font-semibold uppercase inline-flex items-center justify-center gap-2 disabled:opacity-60 active:scale-[0.99]"
        >
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-white/40 blur-md group-hover:[animation:sheen_0.9s_ease]"
          />
          {submitting ? (
            <>
              <Loader2 size={18} className="animate-spin" /> Sending…
            </>
          ) : (
            <>
              <Send size={15} /> Get My Free Quote
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </>
          )}
        </button>
        <p className="text-[#666666] text-xs text-center">
          No obligation. We'll never share your information.
        </p>
      </div>
    </form>
  );
}
