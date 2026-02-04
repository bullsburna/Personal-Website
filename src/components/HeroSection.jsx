export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 bg-background text-foreground overflow-hidden"
    >
      <div className="absolute inset-0 hero-grid opacity-55" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(37,99,235,0.16),transparent_38%),radial-gradient(circle_at_80%_35%,rgba(59,130,246,0.14),transparent_40%)]"
        aria-hidden="true"
      />

      <div className="container max-w-5xl mx-auto text-center z-10">
        <div className="space-y-7">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
            <span className="opacity-0 animate-fade-in"> Hello,</span>
            <span className="opacity-0 animate-fade-in-delay-1"> I am</span>
            <span className="opacity-0 animate-fade-in-delay-2 text-primary"> Brian Jett</span>
          </h1>
          <p className="text-base md:text-xl text-foreground/80 max-w-3xl mx-auto opacity-0 animate-fade-in-delay-3">
            I am always on the lookout for new subjects to dive into. This website shares a little
            about me. From my interests, to my projects, and what I am currently exploring. Take a
            look around and enjoy!
          </p>
        </div>

        <div className="pt-8 opacity-0 animate-fade-in-delay-4 flex items-center justify-center gap-3 flex-wrap">
          <a href="#projects" className="cosmic-button">
            View My Work
          </a>
          <a
            href="/images/Jett_Brian_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 rounded-full border border-primary/50 text-primary hover:bg-primary/10 transition-colors duration-200"
          >
            View Resume
          </a>
          <a
            href="#about"
            className="px-6 py-2 rounded-full border border-border text-foreground/90 hover:border-primary hover:text-primary transition-colors duration-200"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};
