import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";

const sectionIds = ["hero", "about", "projects", "currently-consuming"];
export const ViewMoreButton = () => {
    const [currentSection, setCurrentSection] = useState("hero");
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            let current = "hero";
            for (const id of sectionIds) {
                const section = document.getElementById(id);
                if (section && scrollY >= section.offsetTop - window.innerHeight / 2) {
                    current = id;
                }
            }
            setCurrentSection(current);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    const currentIndex = sectionIds.indexOf(currentSection);
    const nextSection = sectionIds[currentIndex + 1];
    const handleClick = () => {
        const nextEl = document.getElementById(nextSection);
        if (nextEl) {
            nextEl.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };
    if (!nextSection) return null;
    return (
        <button onClick={handleClick}
        className="hidden sm:flex fixed bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce cursor-pointer z-50">
            <span className="text-sm text-muted-foreground mb-1">View More</span>
            <ArrowDown className="h-5 w-5 text-primary" />
        </button>
    );
};