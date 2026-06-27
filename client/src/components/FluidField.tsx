import type { ChangeEvent } from "react";

// Shared "fluid" form controls for Bright Builders, tuned for the white form
// surface: floating-label fields (gold underline + focus glow) and the animated
// thank-you checkmark. Brand: gold #E8A020 on charcoal #1A1A1A.

interface FloatFieldProps {
  name: string;
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  type?: string;
  required?: boolean;
  textarea?: boolean;
  rows?: number;
  autoComplete?: string;
  idPrefix?: string;
}

export function FloatField({
  name,
  label,
  value,
  onChange,
  type = "text",
  required,
  textarea,
  rows = 4,
  autoComplete,
  idPrefix = "q",
}: FloatFieldProps) {
  const id = `${idPrefix}-${name}`;
  const input =
    "peer w-full bg-transparent px-4 pt-6 pb-2 font-sans text-[#1A1A1A] text-base placeholder-transparent outline-none";
  const labelCls =
    "pointer-events-none absolute left-4 top-4 origin-left font-sans text-base text-[#8a8276] transition-all duration-200 " +
    "peer-focus:top-2 peer-focus:text-[10px] peer-focus:font-semibold peer-focus:uppercase peer-focus:tracking-[0.14em] peer-focus:text-[#c98a0b] " +
    "peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:tracking-[0.14em] peer-[:not(:placeholder-shown)]:text-[#7a746a]";
  return (
    <div className="group relative rounded-md border border-[#E8A020]/25 bg-[#F5F0EB] transition-all duration-300 focus-within:border-[#E8A020]/70 focus-within:bg-white focus-within:shadow-[0_10px_30px_-14px_rgba(232,160,32,0.55)]">
      {textarea ? (
        <textarea
          id={id}
          name={name}
          rows={rows}
          required={required}
          placeholder=" "
          value={value}
          onChange={onChange}
          className={`${input} resize-none`}
        />
      ) : (
        <input
          id={id}
          type={type}
          name={name}
          required={required}
          autoComplete={autoComplete}
          placeholder=" "
          value={value}
          onChange={onChange}
          className={input}
        />
      )}
      <label htmlFor={id} className={labelCls}>
        {label}
        {required && <span className="ml-1 text-[#c98a0b]">*</span>}
      </label>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 h-0.5 w-[calc(100%-2rem)] -translate-x-1/2 scale-x-0 bg-[#E8A020] transition-transform duration-300 peer-focus:scale-x-100"
      />
    </div>
  );
}

// Animated drawn checkmark for the personalized thank-you state.
export function SuccessCheck() {
  return (
    <svg viewBox="0 0 52 52" className="h-16 w-16" aria-hidden="true">
      <circle
        cx="26"
        cy="26"
        r="24"
        fill="none"
        stroke="#E8A020"
        strokeWidth="3"
        strokeDasharray="151"
        strokeDashoffset="151"
        style={{ animation: "draw-check 0.6s ease forwards" }}
      />
      <path
        d="M15 27 l7 7 l15 -16"
        fill="none"
        stroke="#E8A020"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="40"
        strokeDashoffset="40"
        style={{ animation: "draw-check 0.4s 0.5s ease forwards" }}
      />
    </svg>
  );
}
