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
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-foreground">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of the projects I’ve been working on recently.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl shadow-md p-6 flex flex-col bg-primary text-primary-foreground"
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="mb-4 flex-grow">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map(
                  (tag, idx) =>
                    tag && (
                      <span
                        key={idx}
                        className="px-2 py-1 text-xs rounded-full bg-background text-foreground"
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
                className="mt-auto inline-block text-sm font-medium px-4 py-2 rounded-lg bg-background text-foreground hover:opacity-90 transition"
              >
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
