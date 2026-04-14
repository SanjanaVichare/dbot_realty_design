import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Projects", path: "/projects" },
  { label: "Careers", path: "/careers" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const main = document.querySelector("main");
    if (!main) return;
    const onScroll = () => setScrolled(main.scrollTop > 50);
    main.addEventListener("scroll", onScroll);
    return () => main.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [location]);

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-5xl transition-all duration-500">
      {/* Top pill bar — always rounded-full */}
      <div
        className={`rounded-full border transition-all duration-500 ${scrolled
            ? "bg-white/70 backdrop-blur-xl border-white/30 shadow-lg shadow-black/5"
            : "bg-white/40 backdrop-blur-md border-white/20"
          }`}
      >
        <div className="flex items-center justify-between py-2 px-5 lg:px-6">
          {/* Logo */}
          <Link
            to="/"
            className="text-xl font-heading font-bold tracking-tight text-foreground"
          >
            DBOT<span className="text-primary">.</span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((l) => (
              <Link
                key={l.path}
                to={l.path}
                className={`text-sm font-medium tracking-wide transition-colors hover:text-primary ${location.pathname === l.path
                    ? "text-primary"
                    : "text-muted-foreground"
                  }`}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <Link
            to="/contact"
            className="hidden lg:inline-flex items-center bg-primary text-primary-foreground px-5 py-2 rounded-xl text-sm font-medium hover:bg-accent transition-colors duration-300"
          >
            Get in Touch
          </Link>

          {/* Hamburger */}
          <button
            className="lg:hidden text-foreground p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown — SEPARATE from the pill, sits below it */}
      {mobileOpen && (
        <div
          className={`lg:hidden mt-2 rounded-2xl border transition-all duration-300 ${scrolled
              ? "bg-white/70 backdrop-blur-xl border-white/30 shadow-lg shadow-black/5"
              : "bg-white/60 backdrop-blur-md border-white/20"
            }`}
        >
          <div className="px-6 py-4 flex flex-col">
            {navLinks.map((l) => (
              <Link
                key={l.path}
                to={l.path}
                className={`text-base font-medium py-3 border-b border-border/20 last:border-0 transition-colors ${location.pathname === l.path
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                  }`}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="mt-4 text-center bg-primary text-primary-foreground px-5 py-3 rounded-xl text-sm font-medium hover:bg-accent transition-colors duration-300"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}