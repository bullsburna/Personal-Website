export const AboutSection = () => {
    return <section id="about" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className = "text-3xl md:text-4xl font-bold text-center mb-12">
                About <span className="text-primary">Me</span>
            </h2>
            <div className="grid gird-cols-1 md:grid-cols-2 gap-12 items-center"> 
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">Current Student/Early Professional exploring whatever catches my eye!</h3>
                    <p className="text-muted-foreground">
                        I am a student at the University of Illinois Urbana-Champaign studying Data Science while picking up minors in Computer Science and Business.
                        I'm constantly trying to learn the best ways to apply my experience to streamline some tedious processes, solve a new problem, or just build out a cool product.
                    </p>
                    <p className="text-muted-foreground">
                        Outside of school, I have a wide array of interests and personal goals. Currently, I am trying to shoot in the low 90s in Golf,
                        get a little bit better at a few of my favorite strategy games (Poker, Chess, and Spades), watch some new movies and shows,
                        and read a couple new books.
                    </p>
                </div>
            <div className="grid grid-cols-1 gap-6">
                <div className="space-y-2">
                    <img src="/images/Headshot.jpg" alt = "Brian Jett Headshot" className="rounded-lg shadow-lg w-full h-auto object-cover" />
                </div>
            </div>
            </div>
        </div> 
    </section>;
};