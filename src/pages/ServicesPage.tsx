import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const phases = [
  {
    phase: "Pre-Construction",
    services: [
      { title: "Due Diligence", desc: "Technical, legal, and financial assessment of real estate assets before acquisition or investment." },
      { title: "Consulting & Valuation", desc: "Market analysis, property valuation, and strategic investment advisory." },
      { title: "ESG Consulting", desc: "Environmental, Social, and Governance compliance and green building certification support." },
      { title: "Feasibility Studies", desc: "Comprehensive viability analysis including demand assessment and financial projections." },
      { title: "Financial Modelling", desc: "Detailed models for project planning, cash flow analysis, and investor reporting." },
    ],
  },
  {
    phase: "During Construction",
    services: [
      { title: "Project Management Consulting (PMC)", desc: "Strategic oversight, milestone tracking, and quality assurance throughout construction." },
      { title: "Project Management (PM)", desc: "End-to-end project execution with dedicated on-site teams and reporting." },
    ],
  },
  {
    phase: "Post-Construction",
    services: [
      { title: "Mandate Selling", desc: "Strategic sales advisory and mandate-based selling for completed projects." },
      { title: "ESG Consulting", desc: "Post-construction sustainability audits and ongoing ESG compliance monitoring." },
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6 lg:px-8">
            <p className="text-sm font-medium tracking-[0.2em] uppercase text-muted-foreground mb-4">Capabilities</p>
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-foreground leading-tight max-w-3xl">
              Our Services<span className="text-accent">.</span>
            </h1>
            <p className="text-xl text-muted-foreground mt-6 max-w-2xl leading-relaxed">
              End-to-end real estate advisory across the entire project lifecycle.
            </p>
          </div>
        </section>

        {phases.map((phase, pi) => (
          <PhaseSection key={pi} {...phase} index={pi} />
        ))}
      </main>
      <Footer />
    </>
  );
}

function PhaseSection({ phase, services, index }: { phase: string; services: { title: string; desc: string }[]; index: number }) {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section ref={ref} className={`py-20 ${index % 2 === 0 ? "bg-secondary/30" : "bg-background"}`}>
      <div className="container mx-auto px-6 lg:px-8">
        <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="flex items-center gap-4 mb-12">
            <span className="text-sm font-medium tracking-[0.2em] uppercase text-accent bg-accent/10 px-4 py-2 rounded-full">Phase {index + 1}</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">{phase}</h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={i}
              className={`bg-background rounded-2xl p-8 hover-lift border border-border/50 group cursor-pointer transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <h3 className="text-lg font-heading font-semibold text-foreground mb-3">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">{s.desc}</p>
              <div className="flex items-center gap-2 text-sm font-medium text-foreground group-hover:text-accent transition-colors">
                Learn More <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
