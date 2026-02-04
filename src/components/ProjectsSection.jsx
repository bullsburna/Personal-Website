const projects = [
  {
    id: 1,
    title: "Monte Carlo Retirement Simulator",
    description:
      "An interactive simulator where users can model contribution schedules, asset allocations, and test outcomes with Monte Carlo simulations. Built with Python and Pandas, using historical market and CPI data.",
    tags: ["Python"],
    github: "https://github.com/bullsburna/Retirement-Simulator",
  },
  {
    id: 2,
    title: "Euchre AI Bot",
    description:
      "Building out a fully playable Euchre game with a few house rules. Doing research currently on how best to implement the bots using reinforcement learning for competitive games.",
    tags: ["Python"],
    github: "https://github.com/bullsburna/EuchreGame",
  },
  {
    id: 3,
    title: "Personal Website",
    description:
      "This portfolio site, built with React and Tailwind includes smooth animations, project highlights, and some interactive elements.",
    tags: ["React", "TailwindCSS"],
    github: "https://github.com/bullsburna/Personal-Website",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative scroll-mt-28">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-foreground">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-foreground/70 mb-12 max-w-2xl mx-auto">
          Here are some of the projects I have been working on recently.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <article
              key={project.id}
              className="rounded-2xl border border-border bg-card/60 backdrop-blur-sm p-6 flex flex-col card-hover"
            >
              <h3 className="text-xl font-semibold mb-3 text-foreground">{project.title}</h3>
              <p className="mb-5 flex-grow text-sm text-foreground/75 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map(
                  (tag, idx) =>
                    tag && (
                      <span
                        key={idx}
                        className="px-2.5 py-1 text-xs rounded-full border border-border bg-background/60 text-foreground/75"
                      >
                        {tag}
                      </span>
                    )
                )}
              </div>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center justify-center text-sm font-medium px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition"
              >
                View on GitHub
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
