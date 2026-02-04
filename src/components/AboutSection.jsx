import { ImageCarousel } from "./ImageCarousel";

const aboutPhotos = [
  { src: "/images/Asia.jpg", alt: "Ha Giang Loop", caption: "Ha Giang Loop views" },
  { src: "/images/Cubs.JPG", alt: "Cubs", caption: "Cubs beat Guardians in extras" },
  { src: "/images/Golf.jpg", alt: "Golf", caption: "A scenic 18 in Cancun" },
  { src: "/images/Iceland.JPG", alt: "Iceland", caption: "Favorite hike in Iceland" },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative scroll-mt-28">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-4 rounded-2xl border border-border bg-card/50 p-6 backdrop-blur-sm card-hover">
            <div className="flex flex-col items-center md:items-start gap-4">
              <img
                src="/images/Headshot.jpg"
                alt="Brian Jett"
                className="rounded-2xl w-44 h-44 object-cover shadow-lg"
              />
              <div className="space-y-2.5 text-center md:text-left w-full">
                <div className="rounded-lg border border-border px-3 py-2">
                  <strong className="text-foreground/65 text-xs uppercase tracking-wide">Email</strong>
                  <div>
                    <a href="mailto:brianjett31@gmail.com" className="text-foreground/85 hover:text-primary transition-colors">
                      brianjett31@gmail.com
                    </a>
                  </div>
                </div>
                <div className="rounded-lg border border-border px-3 py-2">
                  <strong className="text-foreground/65 text-xs uppercase tracking-wide">Phone</strong>
                  <div>
                    <a href="tel:+16308632927" className="text-foreground/85 hover:text-primary transition-colors">
                      +1 (630) 863-2927
                    </a>
                  </div>
                </div>
                <div className="rounded-lg border border-border px-3 py-2">
                  <strong className="text-foreground/65 text-xs uppercase tracking-wide">GitHub</strong>
                  <div>
                    <a
                      href="https://github.com/bullsburna"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/85 hover:text-primary transition-colors"
                    >
                      bullsburna
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-5 rounded-2xl border border-border bg-card/50 p-6 md:p-8 text-left backdrop-blur-sm card-hover">
            <h3 className="text-2xl font-semibold text-primary">
              Current Student/Early Professional exploring whatever catches my eye!
            </h3>
            <p className="text-foreground/75 leading-relaxed mt-4">
              I am a student at the University of Illinois Urbana-Champaign studying Data Science while
              picking up minors in Computer Science and Business. I am constantly trying to learn the
              best ways to apply my experience to streamline tedious processes, solve new problems, or
              just build out a cool product.
            </p>
            <p className="text-foreground/80 leading-relaxed mt-4">
              Outside of school, I have a wide array of interests and personal goals. Currently, I am
              trying to shoot in the low 90s in golf, get better at strategy games (Poker, Chess, and
              Spades), watch new movies and shows, and read a couple of new books. I am also a die-hard
              Chicago sports fan and have spent the last few years visiting new places.
            </p>
          </div>

          <div className="md:col-span-3 rounded-2xl border border-border bg-card/50 p-5 md:p-6 backdrop-blur-sm card-hover md:self-start">
            <div className="text-xs uppercase tracking-[0.16em] text-foreground/60 mb-4 text-left">
              Highlights
            </div>
            <ImageCarousel
              items={aboutPhotos}
              className="mx-auto w-full max-w-none aspect-[4/3] rounded-md"
              fit="cover"
              captionPlacement="below"
              frame
            />
          </div>
        </div>
      </div>
    </section>
  );
};
