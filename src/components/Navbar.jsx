import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Currently Consuming", href: "#currently-consuming" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={cn(
          "fixed w-full z-40 transition-all duration-300",
          isScrolled ? "py-3 bg-background/85 backdrop-blur-md border-b border-border" : "py-5"
        )}
      >
        <div className="container flex items-center justify-between">
          <a className="text-lg sm:text-xl font-semibold text-foreground flex items-center" href="#hero">
            Brian Jett
          </a>

          <div className="hidden md:flex items-center gap-7">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm uppercase tracking-[0.08em] text-foreground/75 hover:text-primary transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
            <a
              href="/images/Jett_Brian_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-md border border-border text-xs uppercase tracking-[0.08em] text-foreground/85 hover:border-primary hover:text-primary transition-colors duration-200"
            >
              Resume
            </a>
          </div>

          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="md:hidden p-2 text-foreground z-50"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <div
        className={cn(
          "fixed inset-0 bg-background/95 backdrop-blur-md z-30 flex flex-col items-center justify-center",
          "transition-all duration-300 md:hidden",
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col space-y-8 text-xl">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
              onClick={(e) => {
                e.preventDefault();
                setIsMenuOpen(false);
                setTimeout(() => {
                  const el = document.querySelector(item.href);
                  if (el) {
                    const yOffset = -80;
                    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                    window.scrollTo({ top: y, behavior: "smooth" });
                  }
                }, 100);
              }}
            >
              {item.name}
            </a>
          ))}
          <a
            href="/images/Jett_Brian_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/80 hover:text-primary transition-colors duration-300"
          >
            Resume
          </a>
        </div>
      </div>
    </>
  );
};
