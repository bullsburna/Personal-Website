import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { ViewMoreButton } from "../components/ViewMoreButton";

export const Home = () => {
    return (
        <div className ="min-h-screen bg-background text-foreground overflow-x-hidden"> 
            <Navbar />
            <main>
                <HeroSection/>
                <AboutSection />
            </main>
            <ViewMoreButton />
        </div>
    );
};