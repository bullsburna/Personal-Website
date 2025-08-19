import {ArrowDown} from "lucide-react";
export const HeroSection = () => {
    return <section id ="hero" className= "relative min-h-screen flex flex-col items-center justify-center px-4 bg-background text-foreground">
        <div className= "container max-w-4xl mx-auto text-center z-10">
            <div className = "space-y-6"> 
                <h1 className = "text-4xl md:text-6xl font-bold tracking-tight text-primary">
                    <span className="opacity-0 animate-fade-in"> Hello, </span>
                    <span className="opacity-0 animate-fade-in-delay-1"> {" "} I'm </span>
                    <span className="opacity-0 animate-fade-in-delay-2"> {" "} Brian Jett </span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3 text-primary"> I'm always on the lookout for new subjects to dive into. 
                    This website shares a little about me. From my interests, to my projects, and what I’m currently exploring.
                    Take a look around and enjoy!
                </p>
            </div>
            <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                <a href="#projects" className="cosmic-button"> View My Work
                </a>
            </div>
        </div>
    </section>
}