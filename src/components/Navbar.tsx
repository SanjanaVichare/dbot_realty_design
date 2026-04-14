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

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <nav className="fixed top-2 sm:top-3 left-1/2 -translate-x-1/2 z-50 w-[95%] sm:w-[92%] lg:w-[90%] max-w-7xl transition-all duration-500">

      <div
        className={`rounded-full border transition-all duration-500 ${scrolled
          ? "bg-white/80 backdrop-blur-xl border-white/30 shadow-lg shadow-black/5"
          : "bg-white/50 backdrop-blur-md border-white/20"
          }`}
      >
        {/* NAVBAR CONTENT */}
        <div className="flex items-center justify-between py-2 px-4 sm:px-5 lg:px-6">

          {/* LOGO */}
          <Link
            to="/"
            className="text-lg sm:text-xl font-heading font-bold tracking-tight text-foreground"
          >
            DBOT<span className="text-primary">.</span>
          </Link>

          {/* DESKTOP NAV (only large screens) */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((l) => (
              <Link
                key={l.path}
                to={l.path}
                className={`text-sm font-medium tracking-wide transition-all duration-300 hover:text-primary ${location.pathname === l.path
                  ? "text-primary"
                  : "text-muted-foreground"
                  }`}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* CTA BUTTON */}
          <Link
            to="/contact"
            className="hidden lg:inline-flex items-center bg-primary text-primary-foreground px-5 py-2 rounded-xl text-sm font-medium hover:bg-accent transition-all duration-300"
          >
            Get in Touch
          </Link>

          {/* MOBILE / TABLET MENU BUTTON */}
          <button
            className="lg:hidden text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* MOBILE / TABLET MENU */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-border/50 bg-white/90 backdrop-blur-xl animate-in slide-in-from-top duration-300">
            <div className="px-6 py-6 flex flex-col gap-4">

              {navLinks.map((l) => (
                <Link
                  key={l.path}
                  to={l.path}
                  className="text-lg font-medium text-foreground py-2 border-b border-border/30"
                >
                  {l.label}
                </Link>
              ))}

              <Link
                to="/contact"
                className="mt-4 text-center bg-primary text-primary-foreground px-5 py-3 rounded-xl text-base font-medium"
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