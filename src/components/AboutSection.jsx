export const AboutSection = () => {
    return <section id="about" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className = "text-3xl md:text-4xl font-bold text-center mb-12">
                About <span className="text-primary">Me</span>
            </h2>
            <div className="grid gird-cols-1 md:grid-cols-3 gap-12 items-center">
                <div className="flex flex-col items-center md:items-start gap-4">
                    <img src="/images/Headshot.jpg" alt="Brian Jett" className="rounded-full w-48 h-48 object-cover shadow-lg mb-4" />
                <div className="space-y-4 text-center md:text-left">
                    <div>
                        <strong>Email:</strong>
                        <a href="mailto:brianjett31@gmail.com" className = "text-muted-foreground hover:underline"> brianjett31@gmail.com</a>
                    </div> 
                    <div>
                        <strong>Phone:</strong>
                        <a href="tel:+16308632927" className ="text-muted-foreground hover:underline"> +1 (630) 863-2927</a>
                    </div>
                    <div>
                        <strong>GitHub</strong>
                        <a href="https://github.com/bullsburna" target="_blank" rel="noopener noreferrer" className = "text-muted-foreground hover:underline"> bullsburna</a>
                    </div>
                </div>
                </div>
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold text-primary">Current Student/Early Professional exploring whatever catches my eye!</h3>
                    <p className="text-primary text-muted-foreground">
                        I am a student at the University of Illinois Urbana-Champaign studying Data Science while picking up minors in Computer Science and Business.
                        I'm constantly trying to learn the best ways to apply my experience to streamline some tedious processes, solve a new problem, or just build out a cool product.
                    </p>
                    <p className="text-primary">
                        Outside of school, I have a wide array of interests and personal goals. Currently, I am trying to shoot in the low 90s in Golf,
                        get a little bit better at a few of my favorite strategy games (Poker, Chess, and Spades), watch some new movies and shows,
                        and read a couple new books. I'm also a die-hard Chicago sports fan and have spent the last few years trying to visit some new places.
                    </p>
                </div>
            <div className="grid grid-cols-2 gap-4 justify-items-center">
                <div className="text-center">
                    <img src="/images/Asia.jpg" alt="Asia" className="w-36 h-36 object-cover rounded-md shadow transform transition-transform hover:scale-105" />
                    <p className="mt-2 text-sm text-primary font-semibold"> Some stunning views on the Ha-Giang Loop</p>
                </div>
                <div className="text-center">
                    <img src="/images/Cubs.JPG" alt="Cubs" className="w-36 h-36 object-cover rounded-md shadow transform transition-transform hover:scale-105" />
                    <p className="mt-2 text-sm text-primary font-semibold"> Got to see the Cubs beat out the Guardians in Extras</p>
                </div>
                <div className="text-center">
                    <img src="/images/Golf.jpg" alt="Golf" className="w-36 h-36 object-cover rounded-md shadow transform transition-transform hover:scale-105" />
                    <p className="mt-2 text-sm text-primary font-semibold"> A scenic 18 holes out in Cancun</p>
                </div>
                <div className="text-center">
                    <img src="/images/Iceland.JPG" alt="Iceland" className="w-36 h-36 object-cover rounded-md shadow transform transition-transform hover:scale-105" />
                    <p className="mt-2 text-sm text-primary font-semibold"> A beautiful view on one of my favorite hikes in Iceland</p>
                </div>
            </div>
            </div>
        </div> 
    </section>;
};