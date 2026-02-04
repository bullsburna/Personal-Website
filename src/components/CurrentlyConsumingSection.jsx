import { useState } from "react";
import { ImageCarousel } from "./ImageCarousel";

const BOOKS = [
  {
    src: "/images_cropped/Play_Winning_Chess_Book.jpeg",
    alt: "Play Winning Chess",
    caption: "Phenomenal introduction to chess strategy",
    reviewUrl: "",
  },
  {
    src: "/images_cropped/Rise_To_Globalism_Book.jpg",
    alt: "Rise to Globalism",
    caption: "Great primer on post-WWII foreign policy",
    reviewUrl: "",
  },
  {
    src: "/images_cropped/Abundance_Book.jpg",
    alt: "Abundance",
    caption: "Generated a lot of buzz, some ambitious ideas",
    reviewUrl: "",
  },
  {
    src: "/images_cropped/What_We_Owe_Each_Other_Book.jpg",
    alt: "What We Owe Each Other",
    caption: "First in depth foray into philosophy/ethics",
    reviewUrl: "",
  },
  {
    src: "/images_cropped/Fundamentals_Of_Options_Book.jpg",
    alt: "Fundamentals of Futures & Options",
    caption: "Enjoyable overview of markets",
    reviewUrl: "",
  },
];

const PODCASTS = [
  { src: "/images_cropped/Thinking_Basketball.jpg", alt: "Thinking Basketball", caption: "My favorite basketball podcast" },
  { src: "/images_cropped/Fall_Of_Civilizations.jpg", alt: "Fall of Civilizations", caption: "Deep dives into lesser-known civilizations" },
  { src: "/images_cropped/Plain_English.jpeg", alt: "Plain English", caption: "Wide range of topics; great guests" },
  { src: "/images_cropped/Behind_The_Bastards.jpeg", alt: "Behind the Bastards", caption: "Explores some of the lesser-known bad actors throughout history" },
];

const tabs = [
  { key: "books", label: "Books", items: BOOKS, ratioClass: "aspect-[7/10]", fit: "cover", caption: "below", frame: true },
  { key: "podcasts", label: "Podcasts", items: PODCASTS, ratioClass: "aspect-square", fit: "cover", caption: "below", frame: true },
];

export const CurrentlyConsumingSection = () => {
  const [active, setActive] = useState("books");

  return (
    <section id="currently-consuming" className="py-24 px-4 relative scroll-mt-28">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-foreground">
          Currently <span className="text-primary">Consuming</span>
        </h2>
        <p className="text-center text-foreground/70 mb-10 max-w-2xl mx-auto">
          What I am reading and listening to lately.
        </p>

        <div className="flex items-center justify-center gap-2 mb-8">
          {tabs.map((t) => {
            const isActive = t.key === active;
            return (
              <button
                key={t.key}
                onClick={() => setActive(t.key)}
                className={[
                  "px-4 py-2 rounded-full border transition-colors duration-200 text-sm",
                  isActive
                    ? "bg-primary text-primary-foreground border-transparent shadow-sm"
                    : "bg-transparent text-foreground/80 hover:text-foreground border-border",
                ].join(" ")}
                aria-pressed={isActive}
              >
                {t.label}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {tabs.map((t) => (
            <div
              key={t.key}
              className={[
                "p-6 rounded-2xl transition-opacity duration-300 border border-border bg-card/60 backdrop-blur-sm card-hover",
                active === t.key ? "opacity-100" : "opacity-45",
              ].join(" ")}
            >
              <div className="text-xs uppercase tracking-[0.14em] text-primary font-semibold mb-4 text-left">
                {t.label}
              </div>

              <ImageCarousel
                items={t.items}
                className={["mx-auto w-full max-w-[23rem]", t.ratioClass].join(" ")}
                fit={t.fit}
                captionPlacement={t.caption}
                frame={t.frame}
                showReviewLink={t.key === "books"}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
