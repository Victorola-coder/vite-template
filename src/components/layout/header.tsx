import { useEffect, useState } from "react";
import clsx from "clsx";
import Button from "../ui/button";
import { headerLinks } from "../../data/navigation";

const LOGO_TEXT = "Victor Template";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className={clsx(
        "sticky top-0 z-40 border-b border-transparent transition-colors duration-300",
        isScrolled ? "bg-white/90 backdrop-blur border-black/5" : "bg-white/70"
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        <a
          href="/"
          className="text-lg font-semibold tracking-tight text-dark hover:text-primary transition-colors"
        >
          {LOGO_TEXT}
        </a>
        <nav className="hidden items-center gap-8 lg:flex">
          {headerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-dark-300 transition-colors hover:text-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="hidden lg:block">
          <Button className="bg-dark hover:bg-dark-200">Book a demo</Button>
        </div>

        <button
          type="button"
          className="lg:hidden"
          aria-label="Toggle navigation"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <span className="sr-only">Open menu</span>
          <div className="flex h-10 w-10 flex-col justify-center space-y-1.5 rounded-full border border-dark-100/80 bg-white px-2">
            <span
              className={clsx(
                "h-0.5 w-full bg-dark transition-transform",
                isMenuOpen && "translate-y-1.5 rotate-45"
              )}
            />
            <span
              className={clsx(
                "h-0.5 w-full bg-dark transition-opacity",
                isMenuOpen && "opacity-0"
              )}
            />
            <span
              className={clsx(
                "h-0.5 w-full bg-dark transition-transform",
                isMenuOpen && "-translate-y-1.5 -rotate-45"
              )}
            />
          </div>
        </button>
      </div>

      <div
        className={clsx(
          "lg:hidden",
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="space-y-4 px-6 pb-6 pt-2 transition-all duration-300">
          {headerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={closeMenu}
              className="block rounded-xl border border-dark/5 bg-white px-4 py-3 text-base font-medium text-dark"
            >
              {link.label}
            </a>
          ))}
          <Button className="bg-dark text-white" onClick={closeMenu}>
            Book a demo
          </Button>
        </div>
      </div>
    </header>
  );
}

