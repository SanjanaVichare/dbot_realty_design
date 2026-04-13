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
    // Watch <main> scroll, not window — window no longer scrolls
    const main = document.querySelector("main");
    if (!main) return;
    const onScroll = () => setScrolled(main.scrollTop > 50);
    main.addEventListener("scroll", onScroll);
    return () => main.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [location]);

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-5xl transition-all duration-500">
      <div
        className={`rounded-full border transition-all duration-500 ${scrolled
          ? "bg-white/70 backdrop-blur-xl border border-white/30 shadow-lg shadow-black/5"
          : "bg-white/40 backdrop-blur-md border border-white/20"
          }`}
      >
        <div className="flex items-center justify-between py-2 px-5 lg:px-6">
          <Link to="/" className="text-xl font-heading font-bold tracking-tight text-foreground">
            DBOT<span className="text-primary">.</span>
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <Link
                key={l.path}
                to={l.path}
                className={`text-sm font-medium tracking-wide transition-colors hover:text-primary ${location.pathname === l.path ? "text-primary" : "text-muted-foreground"
                  }`}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <Link
            to="/contact"
            className="hidden md:inline-flex items-center bg-primary text-primary-foreground px-5 py-2 rounded-xl text-sm font-medium hover:bg-accent transition-colors duration-300"
          >
            Get in Touch
          </Link>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-border/50 animate-fade-in">
            <div className="px-6 py-5 flex flex-col gap-3">
              {navLinks.map((l) => (
                <Link
                  key={l.path}
                  to={l.path}
                  className="text-base font-medium text-foreground py-2"
                >
                  {l.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="mt-2 text-center bg-primary text-primary-foreground px-5 py-3 rounded-xl text-sm font-medium"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}