import { useState } from "react";
import { ImageCarousel } from "./ImageCarousel";

const BOOKS = [
  { src: "/images_cropped/Play_Winning_Chess_Book.jpeg", alt: "Play Winning Chess", caption: "Phenomenal introduction to chess strategy" },
  { src: "/images_cropped/Rise_To_Globalism_Book.jpg", alt: "Rise to Globalism", caption: "Great primer on post-WWII foreign policy" },
  { src: "/images_cropped/Abundance_Book.jpg", alt: "Abundance", caption: "Generated a lot of buzz, some ambitious ideas" },
  { src: "/images_cropped/What_We_Owe_Each_Other_Book.jpg", alt: "What We Owe Each Other", caption: "First in depth foray into philosophy/ethics" },
  { src: "/images_cropped/Fundamentals_Of_Options_Book.jpg", alt: "Fundamentals of Futures & Options", caption: "Enjoyable overview of markets" },
];

const PODCASTS = [
  { src: "/images_cropped/Thinking_Basketball.jpg", alt: "Thinking Basketball", caption: "My favorite basketball podcast" },
  { src: "/images_cropped/Fall_Of_Civilizations.jpg", alt: "Fall of Civilizations", caption: "Deep dives into lesser-known civilizations" },
  { src: "/images_cropped/Plain_English.jpeg", alt: "Plain English", caption: "Wide range of topics; great guests" },
  { src: "/images_cropped/Behind_The_Bastards.jpeg", alt: "Behind the Bastards", caption: "Explores some of the lesser-known bad actors throughout history" },
];

const tabs = [
  { key: "books", label: "Books", items: BOOKS, ratioClass: "aspect-[7/10]", fit: "cover", caption: "overlay", frame: true },
  { key: "podcasts", label: "Podcasts", items: PODCASTS, ratioClass: "aspect-square", fit: "cover", caption: "overlay", frame: true },
];

export const CurrentlyConsumingSection = () => {
  const [active, setActive] = useState("books");

  return (
    <section id="currently-consuming" className="py-24 px-4 relative scroll-mt-28">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-foreground">
          Currently <span className="text-primary">Consuming</span>
        </h2>
        <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
          What I’m reading and listening to lately.
        </p>

        <div className="flex items-center justify-center gap-2 mb-8">
          {tabs.map((t) => {
            const isActive = t.key === active;
            return (
              <button
                key={t.key}
                onClick={() => setActive(t.key)}
                className={[
                  "px-4 py-2 rounded-full border transition-colors duration-200",
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

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {tabs.map((t) => (
            <div
              key={t.key}
              className={[
                "p-6 rounded-xl transition-opacity duration-300",
                active === t.key ? "opacity-100" : "opacity-40",
                "bg-primary text-primary-foreground", // 🔶 ORANGE CARDS
              ].join(" ")}
            >
              <div className="text-sm uppercase tracking-wide text-background font-semibold mb-4 text-left">
                {t.label}
              </div>

              <ImageCarousel
                items={t.items}
                className={["mx-auto w-52 sm:w-64 md:w-72", t.ratioClass].join(" ")}
                fit={t.fit}
                captionPlacement={t.caption}
                frame={t.frame}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
