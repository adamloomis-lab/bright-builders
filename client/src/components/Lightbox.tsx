/**
 * Lightbox — full-screen image viewer for project galleries.
 * Keyboard: Esc closes, arrow keys navigate. Body scroll locks while open.
 */
import { useEffect, useCallback, useRef } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export interface LightboxImage {
  src: string;
  alt: string;
}

interface LightboxProps {
  images: LightboxImage[];
  index: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function Lightbox({ images, index, onClose, onNavigate }: LightboxProps) {
  const closeRef = useRef<HTMLButtonElement>(null);

  const prev = useCallback(
    () => onNavigate((index - 1 + images.length) % images.length),
    [index, images.length, onNavigate],
  );
  const next = useCallback(
    () => onNavigate((index + 1) % images.length),
    [index, images.length, onNavigate],
  );

  useEffect(() => {
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose, prev, next]);

  const img = images[index];
  if (!img) return null;

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center"
      role="dialog"
      aria-modal="true"
      aria-label={img.alt}
      onClick={onClose}
    >
      <button
        ref={closeRef}
        type="button"
        onClick={onClose}
        aria-label="Close image viewer"
        className="absolute top-4 right-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-white hover:bg-white/10 transition-colors"
      >
        <X size={24} />
      </button>

      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Previous image"
            className="absolute left-2 sm:left-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-white hover:bg-white/10 transition-colors"
          >
            <ChevronLeft size={26} />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next image"
            className="absolute right-2 sm:right-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-white hover:bg-white/10 transition-colors"
          >
            <ChevronRight size={26} />
          </button>
        </>
      )}

      <figure
        className="max-w-[92vw] max-h-[88vh] flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={img.src}
          alt={img.alt}
          className="max-w-full max-h-[80vh] object-contain shadow-2xl"
        />
        <figcaption className="mt-3 text-sm text-white/80 text-center">
          {img.alt}
          {images.length > 1 && (
            <span className="ml-2 text-white/50">
              {index + 1} / {images.length}
            </span>
          )}
        </figcaption>
      </figure>
    </div>
  );
}
