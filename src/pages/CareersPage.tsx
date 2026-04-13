import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import teamLife from "@/assets/team-life.jpg";
import { Rocket, Users, Heart, TrendingUp, ExternalLink } from "lucide-react";

const values = [
  { icon: Rocket, title: "Innovation", text: "We encourage fresh thinking and creative problem-solving." },
  { icon: Users, title: "Collaboration", text: "Cross-functional teams working towards shared goals." },
  { icon: Heart, title: "Well-being", text: "Work-life balance and employee wellness programs." },
  { icon: TrendingUp, title: "Growth", text: "Continuous learning, mentorship, and career development." },
];

export default function CareersPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6 lg:px-8">
            <p className="text-sm font-medium tracking-[0.2em] uppercase text-muted-foreground mb-4">Join Us</p>
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-foreground leading-tight max-w-3xl">
              Build Your Career<span className="text-accent">.</span>
            </h1>
            <p className="text-xl text-muted-foreground mt-6 max-w-2xl leading-relaxed">
              Join a team that's reshaping the real estate advisory landscape in India.
            </p>
          </div>
        </section>

        {/* Life at DBOT */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="rounded-3xl overflow-hidden mb-16">
              <img src={teamLife} alt="Life at DBOT" className="w-full h-[400px] object-cover" loading="lazy" width={1200} height={800} />
            </div>
            <SectionTitle label="Life at DBOT" title="Our Culture" />
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((v, i) => (
                <ValueCard key={i} {...v} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* Openings */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6 lg:px-8">
            <SectionTitle label="Openings" title="Current Roles" />
            <div className="mt-12 space-y-4">
              {["Senior Project Manager — Mumbai", "ESG Consultant — Bangalore", "Financial Analyst — Delhi NCR", "Site Engineer — Pune"].map((role, i) => (
                <div key={i} className="flex items-center justify-between bg-secondary/50 rounded-xl px-8 py-5 hover-lift border border-border/50 cursor-pointer group">
                  <span className="font-medium text-foreground">{role}</span>
                  <ExternalLink size={18} className="text-muted-foreground group-hover:text-accent transition-colors" />
                </div>
              ))}
            </div>
            <div className="mt-10 text-center">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium text-sm hover:bg-accent hover:text-accent-foreground transition-all duration-300"
              >
                View All on LinkedIn <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function SectionTitle({ label, title }: { label: string; title: string }) {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <div ref={ref} className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
      <p className="text-sm font-medium tracking-[0.2em] uppercase text-muted-foreground mb-4">{label}</p>
      <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">{title}<span className="text-accent">.</span></h2>
    </div>
  );
}

function ValueCard({ icon: Icon, title, text, index }: { icon: typeof Rocket; title: string; text: string; index: number }) {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <div ref={ref} className={`bg-background rounded-2xl p-8 hover-lift border border-border/50 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`} style={{ transitionDelay: `${index * 100}ms` }}>
      <Icon size={28} className="text-accent mb-4" />
      <h3 className="font-heading font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
    </div>
  );
}
