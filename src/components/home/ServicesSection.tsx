import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Search, BarChart3, Leaf, FileCheck, Calculator, ChevronDown } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Due Diligence",
    subtitle: "Risk & Technical Assessment",
    desc: "We conduct comprehensive risk assessments and technical evaluations of real estate assets — covering legal title checks, structural audits, regulatory compliance, and market positioning.",
    highlights: ["Legal Title Verification", "Structural Audits", "Regulatory Review", "Market Risk Assessment"],
    color: "#0E55A5",
    tint: "#E0EBFA",
  },
  {
    icon: BarChart3,
    title: "Consulting & Valuations",
    subtitle: "Advisory & Market Intelligence",
    desc: "Expert property valuations, market insights, and investment strategy tailored to your portfolio objectives.",
    highlights: ["Valuations", "Investment Strategy", "Market Analysis", "Portfolio Optimisation"],
    color: "#001240",
    tint: "#E8EEF8",
  },
  {
    icon: Leaf,
    title: "ESG Consulting",
    subtitle: "Sustainable Practices",
    desc: "Guiding real estate projects toward sustainable, compliant, and future-ready development standards.",
    highlights: ["Green Certifications", "ESG Strategy", "Carbon Footprint Analysis", "Sustainable Materials"],
    color: "#56A018",
    tint: "#D5F2A0",
  },
  {
    icon: FileCheck,
    title: "Feasibility Studies",
    subtitle: "Project Viability",
    desc: "Assessing the practicality and profitability of projects through data-driven feasibility analysis.",
    highlights: ["Site Evaluation", "Demand Analysis", "Cost Estimation", "Return Projections"],
    color: "#0E55A5",
    tint: "#E0EBFA",
  },
  {
    icon: Calculator,
    title: "Financial Modelling",
    subtitle: "Planning & Reporting",
    desc: "Building structured financial models to support investment decisions and long-term planning.",
    highlights: ["Cash Flow Modelling", "Investor Reporting", "Scenario Planning", "Budget Forecasting"],
    color: "#001240",
    tint: "#F0EED8",
  },
];

export default function ServicesSection() {
  const [active, setActive] = useState(0);
  const [mobileOpen, setMobileOpen] = useState<number | null>(0);
  const { ref, isVisible } = useScrollAnimation();
  const current = services[active];

  return (
    <section className="w-full py-12 sm:py-16">

      {/* HEADER */}
      <div className="max-w-6xl mx-auto px-5 sm:px-8 mb-8 sm:mb-10">
        <div
          ref={ref}
          className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <p className="text-xs uppercase tracking-widest text-[#0E55A5] font-medium mb-2">
            What we offer
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#001240]">
            Our <span className="text-[#0E55A5]">Services</span>
          </h2>
        </div>
      </div>

      {/* DESKTOP / TABLET LAYOUT */}
      <div className="hidden md:block max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/*
    KEY FIX 1: Use w-full + overflow-hidden on the wrapper so the
    grid never bleeds outside. Remove fixed col widths that cause overflow.
  */}
        <div className="w-full grid grid-cols-5 rounded-2xl overflow-hidden border border-[#E0EBFA] shadow-md">

          {/* LEFT NAV — KEY FIX 2: add min-w-0 to prevent flex blowout */}
          <div className="col-span-2 bg-[#001240] min-w-0">
            {services.map((s, i) => {
              const isAct = active === i;
              return (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                  className="w-full flex items-center gap-3 px-4 py-4 border-b last:border-b-0 transition-all duration-200 text-left"
                  style={{
                    borderColor: "rgba(255,255,255,0.06)",
                    backgroundColor: isAct ? s.color : "transparent",
                  }}
                >
                  <div className="w-8 h-8 rounded-lg flex-shrink-0 flex items-center justify-center bg-white/10">
                    <s.icon size={15} color={isAct ? "#fff" : "rgba(255,255,255,0.4)"} />
                  </div>
                  {/* KEY FIX 3: min-w-0 + overflow-hidden on text container */}
                  <div className="flex-1 min-w-0 overflow-hidden">
                    <p className={`text-sm font-semibold truncate ${isAct ? "text-white" : "text-white/60"}`}>
                      {s.title}
                    </p>
                    <p className={`text-[11px] truncate ${isAct ? "text-white/70" : "text-white/30"}`}>
                      {s.subtitle}
                    </p>
                  </div>
                  <span className="text-[10px] text-white/25 flex-shrink-0 tabular-nums">
                    0{i + 1}
                  </span>
                </button>
              );
            })}
          </div>

          {/* RIGHT DETAIL — KEY FIX 4: min-w-0 + overflow-hidden prevents content blowout */}
          <div
            className="col-span-3 p-6 lg:p-8 flex flex-col justify-between min-w-0 overflow-hidden"
            style={{ background: `linear-gradient(135deg, ${current.tint} 0%, #ffffff 60%)` }}
          >
            <div className="min-w-0">
              {/* Icon + title */}
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: current.color }}
                >
                  <current.icon size={18} color="#fff" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] uppercase tracking-widest font-medium" style={{ color: current.color }}>
                    {current.subtitle}
                  </p>
                  <h3 className="text-base lg:text-lg font-bold text-[#001240] leading-tight">
                    {current.title}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-[#1A1A2E]/75 leading-relaxed mb-4">
                {current.desc}
              </p>

              {/* Highlights — KEY FIX 5: use minmax(0,1fr) to prevent grid overflow */}
              <div className="grid grid-cols-2 gap-2 mb-4" style={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
                {current.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2 bg-white/80 rounded-lg px-3 py-2 border border-white min-w-0">
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: current.color }}
                    />
                    <p className="text-[12px] font-medium text-[#001240] truncate">{h}</p>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="flex gap-5 items-center">
                <div>
                  <p className="text-lg font-bold text-[#001240]">100+</p>
                  <p className="text-[11px] text-[#001240]/50 uppercase tracking-wide">Projects</p>
                </div>
                <div className="w-px h-8 bg-[#001240]/12" />
                <div>
                  <p className="text-lg font-bold text-[#001240]">₹500Cr+</p>
                  <p className="text-[11px] text-[#001240]/50 uppercase tracking-wide">Value Advised</p>
                </div>
              </div>
            </div>

            {/* CTA footer */}
            <div className="mt-5 pt-4 border-t border-[#001240]/10 flex items-center justify-between gap-4 flex-wrap">
              <div>
                <p className="text-[11px] text-[#001240]/45">Ready to evaluate?</p>
                <p className="text-sm font-semibold text-[#001240]">Talk to our experts</p>
              </div>
              <button
                className="flex-shrink-0 px-5 py-2.5 text-sm rounded-full text-white font-medium hover:opacity-90 transition-opacity"
                style={{ backgroundColor: current.color }}
              >
                Get in Touch →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── MOBILE LAYOUT (< md) — accordion ── */}
      <div className="md:hidden max-w-7xl mx-auto px-5 space-y-3">
        {services.map((s, i) => {
          const isOpen = mobileOpen === i;
          return (
            <div
              key={i}
              className="rounded-xl overflow-hidden border border-[#E0EBFA] shadow-sm"
            >
              {/* Accordion header */}
              <button
                className="w-full flex items-center gap-3 px-4 py-3.5 text-left transition-colors duration-200"
                style={{ backgroundColor: isOpen ? s.color : "#001240" }}
                onClick={() => setMobileOpen(isOpen ? null : i)}
              >
                <div className="w-8 h-8 rounded-lg flex-shrink-0 flex items-center justify-center bg-white/15">
                  <s.icon size={15} color="#fff" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-white truncate">{s.title}</p>
                  <p className="text-[11px] text-white/60 truncate">{s.subtitle}</p>
                </div>
                <ChevronDown
                  size={16}
                  color="rgba(255,255,255,0.6)"
                  className={`flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                />
              </button>

              {/* Accordion body */}
              {isOpen && (
                <div
                  className="px-4 py-4"
                  style={{ background: `linear-gradient(135deg, ${s.tint} 0%, #ffffff 70%)` }}
                >
                  <p className="text-sm text-[#1A1A2E]/75 leading-relaxed mb-4">{s.desc}</p>

                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {s.highlights.map((h, j) => (
                      <div
                        key={j}
                        className="flex items-center gap-2 bg-white/80 rounded-lg px-3 py-2"
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ backgroundColor: s.color }}
                        />
                        <p className="text-[11px] font-medium text-[#001240]">{h}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-[#001240]/10">
                    <div className="flex gap-4">
                      <div>
                        <p className="text-base font-bold text-[#001240]">100+</p>
                        <p className="text-[10px] text-[#001240]/50 uppercase tracking-wide">Projects</p>
                      </div>
                      <div>
                        <p className="text-base font-bold text-[#001240]">₹500Cr+</p>
                        <p className="text-[10px] text-[#001240]/50 uppercase tracking-wide">Value</p>
                      </div>
                    </div>
                    <button
                      className="px-4 py-2 text-xs rounded-full text-white font-medium"
                      style={{ backgroundColor: s.color }}
                    >
                      Get in Touch →
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

    </section>
  );
}