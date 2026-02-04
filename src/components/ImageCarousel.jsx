import { useState, useEffect, useCallback } from "react";

export const ImageCarousel = ({
  items,
  className = "",
  autoPlayMs = 0,
  fit = "cover", // "cover" | "contain"
  position = "center",
  captionPlacement = "below", // "below" | "overlay"
  frame = false, // adds a subtle frame around the image
  showReviewLink = false,
}) => {
  const [idx, setIdx] = useState(0);
  const next = useCallback(() => setIdx((i) => (i + 1) % items.length), [items.length]);

  useEffect(() => {
    if (!autoPlayMs) return;
    const t = setInterval(next, autoPlayMs);
    return () => clearInterval(t);
  }, [autoPlayMs, next]);

  const active = items[idx];

  return (
    <div className={className}>
      <div
        onClick={next}
        role="button"
        aria-label="Next image"
        className={[
          "relative w-full h-full overflow-hidden rounded-xl cursor-pointer",
          "transition-transform duration-300 hover:scale-[1.01]",
          frame ? "bg-card/70 ring-1 ring-border p-2 shadow-sm" : "",
        ].join(" ")}
      >
        {items.map((it, i) => (
          <img
            key={it.src}
            src={it.src}
            alt={it.alt}
            className={[
              "absolute inset-0 w-full h-full rounded-lg",
              "transition-opacity duration-500 ease-in-out",
              i === idx ? "opacity-100" : "opacity-0",
            ].join(" ")}
            style={{ objectFit: fit, objectPosition: position }}
            draggable={false}
          />
        ))}

        {captionPlacement === "overlay" && active?.caption && (
          <div className="absolute bottom-0 inset-x-0 px-2 py-1 bg-black/45 text-[11px] sm:text-xs text-white text-center rounded-b-lg">
            {active.caption}
          </div>
        )}
      </div>

      {captionPlacement === "below" && active?.caption && (
        <div className="mt-2 min-h-10 rounded-md border border-border bg-card/55 px-2 py-1.5 text-center text-[11px] sm:text-xs text-foreground/90 leading-snug">
          {active.caption}
        </div>
      )}

      {showReviewLink && !!active?.reviewUrl && (
        <div className="mt-2 text-center">
          <a
            href={active.reviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-primary hover:underline"
            onClick={(e) => e.stopPropagation()}
          >
            Read review
          </a>
        </div>
      )}

      <div className="mt-2 flex items-center justify-center gap-1.5">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            className={[
              "h-1.5 w-1.5 rounded-full transition-all",
              i === idx ? "w-4 bg-primary" : "bg-foreground/30 hover:bg-foreground/60",
            ].join(" ")}
            aria-label={`Go to image ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
