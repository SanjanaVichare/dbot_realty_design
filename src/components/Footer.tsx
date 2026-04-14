import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-midnight text-primary-foreground py-16">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <h3 className="text-2xl font-heading font-bold mb-4">
              DBOT<span className="text-accent">.</span>
            </h3>
            <p className="text-primary-foreground/50 text-sm leading-relaxed">
              Bringing Discipline to Real Estate Capital & Execution.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-sm tracking-wider uppercase text-primary-foreground/30">Company</h4>
            <div className="flex flex-col gap-3">
              {[["About", "/about"], ["Services", "/services"], ["Projects", "/projects"]].map(([label, path]) => (
                <Link key={path} to={path} className="text-sm text-primary-foreground/50 hover:text-accent transition-colors">{label}</Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-sm tracking-wider uppercase text-primary-foreground/30">Connect</h4>
            <div className="flex flex-col gap-3">
              {[["Careers", "/careers"], ["Contact", "/contact"]].map(([label, path]) => (
                <Link key={path} to={path} className="text-sm text-primary-foreground/50 hover:text-accent transition-colors">{label}</Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-sm tracking-wider uppercase text-primary-foreground/30">Legal</h4>
            <div className="flex flex-col gap-3">
              <span className="text-sm text-primary-foreground/50">Privacy Policy</span>
              <span className="text-sm text-primary-foreground/50">Terms of Service</span>
              <span className="text-sm text-primary-foreground/50">Sitemap</span>
            </div>
          </div>
        </div>
        <div className="mt-14 pt-6 border-t border-primary-foreground/10 text-center">
          <p className="text-sm text-primary-foreground/30">© 2026 DBOT Realty. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
