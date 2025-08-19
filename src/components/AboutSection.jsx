import { ImageCarousel } from "./ImageCarousel";

const aboutPhotos = [
  { src: "/images/Asia.jpg", alt: "Ha Giang Loop", caption: "Ha Giang Loop views" },
  { src: "/images/Cubs.JPG", alt: "Cubs", caption: "Cubs beat Guardians in extras" },
  { src: "/images/Golf.jpg", alt: "Golf", caption: "A scenic 18 in Cancún" },
  { src: "/images/Iceland.JPG", alt: "Iceland", caption: "Favorite hike in Iceland" },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative scroll-mt-28">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          <div className="flex flex-col items-center md:items-start gap-4">
            <img
              src="/images/Headshot.jpg"
              alt="Brian Jett"
              className="rounded-full w-48 h-48 object-cover shadow-lg mb-4"
            />
            <div className="space-y-3 text-center md:text-left">
              <div>
                <strong>Email:</strong>{" "}
                <a href="mailto:brianjett31@gmail.com" className="text-muted-foreground hover:underline">
                  brianjett31@gmail.com
                </a>
              </div>
              <div>
                <strong>Phone:</strong>{" "}
                <a href="tel:+16308632927" className="text-muted-foreground hover:underline">
                  +1 (630) 863-2927
                </a>
              </div>
              <div>
                <strong>GitHub:</strong>{" "}
                <a
                  href="https://github.com/bullsburna"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:underline"
                >
                  bullsburna
                </a>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-primary">
              Current Student/Early Professional exploring whatever catches my eye!
            </h3>
            <p className="text-muted-foreground">
              I am a student at the University of Illinois Urbana-Champaign studying Data
              Science while picking up minors in Computer Science and Business. I'm
              constantly trying to learn the best ways to apply my experience to streamline
              tedious processes, solve new problems, or just build out a cool product.
            </p>
            <p className="text-foreground/90">
              Outside of school, I have a wide array of interests and personal goals.
              Currently, I’m trying to shoot in the low 90s in golf, get better at strategy
              games (Poker, Chess, and Spades), watch new movies and shows, and read a
              couple of new books. I’m also a die-hard Chicago sports fan and have spent the
              last few years visiting new places.
            </p>
          </div>

          <div className="md:justify-self-center">
            <ImageCarousel
              items={aboutPhotos}
              className="mx-auto w-56 sm:w-64 md:w-72 aspect-[4/3] rounded-md"
              fit="cover"              
              captionPlacement="overlay" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};