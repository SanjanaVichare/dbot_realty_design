import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Search, BarChart3, Leaf, FileCheck, Calculator } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Due Diligence",
    subtitle: "Risk & Technical Assessment",
    desc: "We conduct comprehensive risk assessments and technical evaluations of real estate assets — covering legal title checks, structural audits, regulatory compliance, and market positioning.",
    highlights: [
      "Legal Title Verification",
      "Structural Audits",
      "Regulatory Review",
      "Market Risk Assessment",
    ],
    color: "#0E55A5",
    tint: "#E0EBFA",
  },
  {
    icon: BarChart3,
    title: "Consulting & Valuations",
    subtitle: "Advisory & Market Intelligence",
    desc: "Expert property valuations, market insights, and investment strategy.",
    highlights: [
      "Valuations",
      "Investment Strategy",
      "Market Analysis",
      "Portfolio Optimisation",
    ],
    color: "#001240",
    tint: "#E0EBFA",
  },

  // ✅ FIXED 3
  {
    icon: Leaf,
    title: "ESG Consulting",
    subtitle: "Sustainable Practices",
    desc: "Guiding real estate projects toward sustainable, compliant, and future-ready development standards.",
    highlights: [
      "Green Certifications",
      "ESG Strategy",
      "Carbon Footprint Analysis",
      "Sustainable Materials",
    ],
    color: "#56A018",
    tint: "#D5F2A0",
  },

  // ✅ FIXED 4
  {
    icon: FileCheck,
    title: "Feasibility Studies",
    subtitle: "Project Viability",
    desc: "Assessing the practicality and profitability of projects through data-driven feasibility analysis.",
    highlights: [
      "Site Evaluation",
      "Demand Analysis",
      "Cost Estimation",
      "Return Projections",
    ],
    color: "#0E55A5",
    tint: "#E0EBFA",
  },

  // ✅ FIXED 5
  {
    icon: Calculator,
    title: "Financial Modelling",
    subtitle: "Planning & Reporting",
    desc: "Building structured financial models to support investment decisions and long-term planning.",
    highlights: [
      "Cash Flow Modelling",
      "Investor Reporting",
      "Scenario Planning",
      "Budget Forecasting",
    ],
    color: "#001240",
    tint: "#F9F3DE",
  },
];

export default function ServicesSection() {
  const [active, setActive] = useState(0);
  const { ref, isVisible } = useScrollAnimation();
  const current = services[active];

  return (
    <section className="w-full py-16">

      {/* HEADER */}
      <div className="max-w-6xl mx-auto px-6 mb-8">
        <div
          ref={ref}
          className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#001240] mb-6">
            Our <span className="text-[#0E55A5]">Services</span>
          </h2>
        </div>
      </div>

      {/* MAIN CARD */}
      <div className="max-w-7xl mx-auto px-7">
        <div className="grid grid-cols-1 lg:grid-cols-5 rounded-xl overflow-hidden border border-[#E0EBFA] shadow-md">

          {/* LEFT */}
          <div className="lg:col-span-2 bg-[#001240]">
            {services.map((s, i) => {
              const isActive = active === i;

              return (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                  className="w-full flex items-center gap-3 px-5 py-4 border-b last:border-b-0 transition-all duration-300"
                  style={{
                    borderColor: "rgba(255,255,255,0.05)",
                    backgroundColor: isActive ? s.color : "transparent",
                  }}
                >
                  <div className="w-8 h-8 rounded-md flex items-center justify-center bg-white/10">
                    <s.icon size={16} color={isActive ? "#fff" : "rgba(255,255,255,0.4)"} />
                  </div>

                  <div className="flex-1 text-left">
                    <p className={`text-sm font-medium ${isActive ? "text-white" : "text-white/60"}`}>
                      {s.title}
                    </p>
                    <p className={`text-[11px] ${isActive ? "text-white/70" : "text-white/30"}`}>
                      {s.subtitle}
                    </p>
                  </div>

                  <span className="text-[10px] text-white/30">0{i + 1}</span>
                </button>
              );
            })}
          </div>

          {/* RIGHT */}
          <div
            className="lg:col-span-3 p-6 flex flex-col justify-between"
            style={{
              background: `linear-gradient(135deg, ${current.tint}, #ffffff)`,
            }}
          >
            <div className="max-w-md">

              {/* HEADER */}
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center shadow-sm"
                  style={{ backgroundColor: current.color }}
                >
                  <current.icon size={18} color="#fff" />
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-wider" style={{ color: current.color }}>
                    {current.subtitle}
                  </p>
                  <h3 className="text-lg font-bold text-[#001240]">
                    {current.title}
                  </h3>
                </div>
              </div>

              {/* TEXT */}
              <p className="text-sm mb-4 text-[#1A1A2E]/80 leading-relaxed">
                {current.desc}
              </p>

              {/* HIGHLIGHTS */}
              <div className="grid grid-cols-2 gap-2">
                {current.highlights.map((h, i) => (
                  <div key={i} className="p-2 rounded-md bg-white shadow-sm">
                    <p className="text-[11px] font-medium text-[#001240]">{h}</p>
                  </div>
                ))}
              </div>

              {/* STATS */}
              <div className="flex gap-6 mt-5">
                <div>
                  <p className="text-lg font-bold text-[#001240]">100+</p>
                  <p className="text-[11px] opacity-60">Projects</p>
                </div>
                <div>
                  <p className="text-lg font-bold text-[#001240]">₹500Cr+</p>
                  <p className="text-[11px] opacity-60">Value</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-6 pt-3 border-t border-[#001240]/10 flex justify-between items-center">
              <div>
                <p className="text-[11px] opacity-50">Ready to evaluate?</p>
                <p className="text-sm font-semibold text-[#001240]">
                  Talk to our experts
                </p>
              </div>

              <button
                className="px-4 py-2 text-sm rounded-md text-white shadow-sm hover:scale-105 transition"
                style={{ backgroundColor: current.color }}
              >
                Get in Touch →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}