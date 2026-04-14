"use client";
import React, { useState, useEffect } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

/* ─── Types ──────────────────────────────────────────────── */
interface Service {
  title: string;
  desc: string;
  detail: string;
  highlights: string[];
}
interface PhaseGroup {
  phase: string;
  slug: "pre" | "during" | "post";
  icon: string;
  services: Service[];
}

/* ─── Data ───────────────────────────────────────────────── */
const serviceCards: PhaseGroup[] = [
  {
    phase: "Pre-Construction",
    slug: "pre",
    icon: "◈",
    services: [
      {
        title: "Due Diligence",
        desc: "TDD/PDD — technical, legal & financial assessment before acquisition",
        detail:
          "Our Due Diligence service covers Technical Due Diligence (TDD) and Property Due Diligence (PDD), delivering a full-spectrum assessment before you commit capital. We examine structural integrity, MEP systems, title clarity, environmental liabilities, and cash-flow stress scenarios — all within compressed timelines your investment committee can act on.",
        highlights: ["Structural & MEP surveys", "Title & legal review", "Environmental assessment", "Cash-flow stress testing", "Compressed timelines"],
      },
      {
        title: "Consulting & Valuations",
        desc: "Market analysis, property valuation, and strategic investment advisory",
        detail:
          "From RICS-compliant Red Book valuations to portfolio benchmarking, we provide investors with a clear, defensible view of asset worth across office, residential, retail, logistics, and mixed-use asset classes. Our advisory layer translates valuation data into actionable investment strategy.",
        highlights: ["RICS Red Book valuations", "Portfolio benchmarking", "Multi-asset class coverage", "Investment strategy advisory", "Comparable transaction analysis"],
      },
      {
        title: "ESG Consulting",
        desc: "Green building certification, LEED, BREEAM & WELL compliance",
        detail:
          "We map compliance gaps against LEED, BREEAM, and WELL standards, coordinate with certification bodies, and build phased roadmaps that make sustainability commercially viable. Our ESG consulting bridges the gap between regulatory obligation and real investment value creation.",
        highlights: ["LEED & BREEAM gap analysis", "WELL standard compliance", "Certification coordination", "Phased sustainability roadmaps", "ESG value creation strategy"],
      },
      {
        title: "Feasibility Studies",
        desc: "Demand assessment, absorption analysis & financial projections",
        detail:
          "Demand modelling, absorption analysis, competing scheme reviews, and sensitivity tables — everything a development board needs to commit capital or walk away with confidence. We combine local market intelligence with quantitative rigour to produce studies that hold up to scrutiny.",
        highlights: ["Demand & absorption modelling", "Competing scheme review", "Sensitivity tables", "Financial projections", "Development board reporting"],
      },
      {
        title: "Financial Modelling",
        desc: "IRR models, equity waterfalls, scenario analysis & LP/GP reporting",
        detail:
          "Bespoke Excel and Argus models covering levered and unlevered IRR, equity waterfalls, scenario analysis, and LP/GP reporting packs — built to audit standard. We build models that are transparent, stress-testable, and presentation-ready for investor and board audiences.",
        highlights: ["Levered / unlevered IRR", "Equity waterfall structures", "Scenario & sensitivity analysis", "LP/GP reporting packs", "Argus & Excel modelling"],
      },
    ],
  },
  {
    phase: "During Construction",
    slug: "during",
    icon: "◉",
    services: [
      {
        title: "Project Management Consulting (PMC)",
        desc: "Strategic oversight, milestone tracking & quality assurance",
        detail:
          "An independent PMC layer that sits between client and contractor — governing programmes, chairing progress meetings, administering change control, and reporting objectively to the board. We bring governance clarity and accountability to complex, multi-contractor construction environments.",
        highlights: ["Independent oversight layer", "Programme governance", "Change control administration", "Board-level reporting", "Multi-contractor coordination"],
      },
      {
        title: "Project Management (PM)",
        desc: "End-to-end execution with dedicated on-site teams",
        detail:
          "Our embedded PM teams take full ownership of delivery: procurement strategy, contractor appointment, on-site supervision, cost reporting, and handover documentation. We act as your trusted on-the-ground representative, ensuring quality, schedule, and budget targets are met.",
        highlights: ["Procurement strategy", "Contractor appointment", "On-site supervision", "Cost reporting", "Handover documentation"],
      },
    ],
  },
  {
    phase: "Post-Construction",
    slug: "post",
    icon: "◆",
    services: [
      {
        title: "Mandate Selling",
        desc: "Pricing strategy, buyer targeting & transaction support",
        detail:
          "Pricing strategy, buyer targeting, data-room management, and transaction support — we act as the developer's trusted sell-side advisor from soft launch through to exchange. Our mandate selling service ensures completed assets reach the right buyers at the right price.",
        highlights: ["Pricing strategy", "Buyer targeting & profiling", "Data-room management", "Soft launch to exchange support", "Sell-side advisory"],
      },
      {
        title: "ESG Consulting (Post)",
        desc: "Post-completion sustainability audits & ongoing compliance monitoring",
        detail:
          "Energy benchmarking, NABERS ratings, green-lease implementation, and annual ESG reporting for institutional landlords and fund managers with compliance obligations. We help asset owners maintain and improve their sustainability credentials post-handover.",
        highlights: ["Energy benchmarking", "NABERS ratings", "Green lease implementation", "Annual ESG reporting", "Institutional compliance"],
      },
    ],
  },
];

const successStories = [
  {
    title: "Mixed-Use Tower Acquisition",
    tag: "Due Diligence",
    body: "Full technical, legal, and financial due diligence within a compressed timeline — structural risks identified, purchase price renegotiated, investor returns preserved.",
  },
  {
    title: "Portfolio ESG Certification",
    tag: "ESG Consulting",
    body: "Aligned an entire developer portfolio with LEED and BREEAM standards. Six assets achieved green ratings within 18 months following a phased compliance roadmap.",
  },
  {
    title: "1,200-Unit Residential PMC",
    tag: "PMC",
    body: "Governance frameworks and real-time progress dashboards deployed — schedule overruns reduced by 34% against baseline projections.",
  },
];

const team = [
  { name: "Alexandra Voss", role: "Global Real Estate Lead", email: "a.voss@dbot.com", initials: "AV" },
  { name: "Omar Al-Sharif", role: "Middle East Advisory Lead", email: "o.alsharif@dbot.com", initials: "OA" },
  { name: "Priya Nair", role: "ESG & Sustainability Lead", email: "p.nair@dbot.com", initials: "PN" },
  { name: "James Whitfield", role: "Project Management Lead", email: "j.whitfield@dbot.com", initials: "JW" },
];

const phaseConfig = {
  pre: { accent: "#0E55A5", lightBg: "#E0EBFA", lightText: "#0E55A5", dotColor: "#0E55A5" },
  during: { accent: "#1A1A2E", lightBg: "#E0EBFA", lightText: "#1A1A2E", dotColor: "#1A1A2E" },
  post: { accent: "#56A018", lightBg: "#D5F2A0", lightText: "#3B6D11", dotColor: "#56A018" },
};

/* ─── Service Detail Popup ───────────────────────────────── */
function ServicePopup({
  service,
  phase,
  slug,
  onClose,
}: {
  service: Service;
  phase: string;
  slug: "pre" | "during" | "post";
  onClose: () => void;
}) {
  const cfg = phaseConfig[slug];

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 2000,
        background: "rgba(0,18,64,0.7)",
        backdropFilter: "blur(8px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "75vw",
          maxWidth: 860,
          maxHeight: "82vh",
          background: "#fff",
          borderRadius: 28,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          boxShadow: "0 40px 100px rgba(0,18,64,0.4)",
        }}
      >
        {/* Popup header */}
        <div style={{ background: "#001240", padding: "32px 40px 28px", flexShrink: 0 }}>
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 16 }}>
            <div>
              <span
                style={{
                  display: "inline-block",
                  fontSize: 11,
                  fontWeight: 600,
                  color: slug === "post" ? "#D5F2A0" : "#E0EBFA",
                  background: `${cfg.accent}35`,
                  border: `1px solid ${cfg.accent}55`,
                  borderRadius: 12,
                  padding: "3px 12px",
                  marginBottom: 14,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}
              >
                {phase}
              </span>
              <h2
                style={{
                  fontFamily: "'DM Serif Display', serif",
                  fontSize: 30,
                  fontWeight: 400,
                  color: "#F4F7FC",
                  margin: 0,
                  lineHeight: 1.2,
                }}
              >
                {service.title}
              </h2>
            </div>
            <button
              onClick={onClose}
              style={{
                width: 38,
                height: 38,
                borderRadius: 11,
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.12)",
                color: "rgba(255,255,255,0.55)",
                fontSize: 15,
                cursor: "pointer",
                flexShrink: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.15s",
                fontFamily: "inherit",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.15)";
                (e.currentTarget as HTMLButtonElement).style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.08)";
                (e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.55)";
              }}
            >
              ✕
            </button>
          </div>
        </div>

        {/* Popup body */}
        <div style={{ flex: 1, overflowY: "auto", padding: "36px 40px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 220px", gap: 40, alignItems: "start" }}>
            {/* Left */}
            <div>
              <p style={{ fontSize: 11, fontWeight: 600, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 12 }}>
                Overview
              </p>
              <p style={{ fontSize: 15, color: "#1A1A2E", lineHeight: 1.85, marginBottom: 36 }}>
                {service.detail}
              </p>

              {(["The Method", "Notable Clients", "Complete Project List"] as const).map((section) => (
                <div key={section} style={{ marginBottom: 28 }}>
                  <p style={{ fontSize: 11, fontWeight: 600, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 12 }}>
                    {section}
                  </p>
                  <div
                    style={{
                      background: "#F4F7FC",
                      border: "1.5px dashed #D1D9E6",
                      borderRadius: 16,
                      padding: "20px 22px",
                      fontSize: 13,
                      color: "#9ca3af",
                      lineHeight: 1.65,
                    }}
                  >
                    {section} content coming soon — connect to your CMS or add static data here.
                  </div>
                </div>
              ))}
            </div>

            {/* Right: sticky panel */}
            <div style={{ position: "sticky", top: 0, display: "flex", flexDirection: "column", gap: 14 }}>
              <div>
                <p style={{ fontSize: 11, fontWeight: 600, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 14 }}>
                  Key Highlights
                </p>
                <div
                  style={{
                    background: cfg.lightBg,
                    borderRadius: 18,
                    padding: "20px 18px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 11,
                  }}
                >
                  {service.highlights.map((h, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                      <div
                        style={{
                          width: 7,
                          height: 7,
                          borderRadius: "50%",
                          background: cfg.accent,
                          flexShrink: 0,
                          marginTop: 5,
                        }}
                      />
                      <span style={{ fontSize: 13, color: "#1A1A2E", lineHeight: 1.5 }}>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div
                style={{
                  background: "#001240",
                  borderRadius: 18,
                  padding: "22px 18px",
                }}
              >
                <p style={{ fontSize: 12, color: "rgba(255,255,255,0.48)", marginBottom: 14, lineHeight: 1.65 }}>
                  Interested in this service? Our team is ready to help.
                </p>
                <a
                  href="/contact"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 7,
                    background: cfg.accent,
                    color: "#fff",
                    borderRadius: 12,
                    padding: "10px 18px",
                    fontSize: 13,
                    fontWeight: 600,
                    textDecoration: "none",
                    transition: "opacity 0.15s",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "0.82")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "1")}
                >
                  Get in touch →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Service Row ────────────────────────────────────────── */
function ServiceRow({
  svc,
  isLast,
  accentColor,
  dotColor,
  onClick,
}: {
  svc: Service;
  isLast: boolean;
  accentColor: string;
  dotColor: string;
  onClick: () => void;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 14,
        padding: "15px 22px 15px 74px",
        borderBottom: isLast ? "none" : "1px solid #F4F7FC",
        cursor: "pointer",
        background: hovered ? "#F4F7FC" : "transparent",
        transition: "background 0.15s",
      }}
    >
      <div
        style={{
          width: 7,
          height: 7,
          borderRadius: "50%",
          flexShrink: 0,
          background: hovered ? dotColor : "#D1D9E6",
          transition: "background 0.2s",
        }}
      />
      <div style={{ flex: 1 }}>
        <p style={{ fontSize: 14, fontWeight: 600, color: hovered ? "#001240" : "#1A1A2E", margin: 0, transition: "color 0.15s" }}>
          {svc.title}
        </p>
        <p style={{ fontSize: 12, color: "#6b7280", margin: "3px 0 0", lineHeight: 1.4 }}>{svc.desc}</p>
      </div>
      <span
        style={{
          fontSize: 13,
          color: hovered ? accentColor : "#D1D9E6",
          transform: hovered ? "translateX(2px)" : "translateX(0)",
          transition: "all 0.15s",
          flexShrink: 0,
        }}
      >
        →
      </span>
    </div>
  );
}

/* ─── Phase Accordion ────────────────────────────────────── */
function PhaseAccordion({
  cat,
  isOpen,
  onToggle,
  onServiceClick,
}: {
  cat: PhaseGroup;
  isOpen: boolean;
  onToggle: () => void;
  onServiceClick: (svc: Service, phase: string, slug: "pre" | "during" | "post") => void;
}) {
  const cfg = phaseConfig[cat.slug];

  return (
    <div style={{ marginBottom: 10 }}>
      <button
        onClick={onToggle}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          gap: 14,
          padding: "18px 22px",
          background: "#fff",
          border: `1.5px solid ${isOpen ? cfg.accent : "#E0EBFA"}`,
          borderRadius: isOpen ? "18px 18px 0 0" : 18,
          cursor: "pointer",
          textAlign: "left",
          transition: "border-color 0.2s, border-radius 0.2s",
          fontFamily: "inherit",
        }}
      >
        <span
          style={{
            width: 38,
            height: 38,
            borderRadius: 12,
            background: cfg.lightBg,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 15,
            color: cfg.lightText,
            flexShrink: 0,
          }}
        >
          {cat.icon}
        </span>
        <div style={{ flex: 1 }}>
          <p style={{ fontSize: 15, fontWeight: 600, color: "#001240", margin: 0, lineHeight: 1.2 }}>{cat.phase}</p>
          <p style={{ fontSize: 12, color: "#9ca3af", margin: "3px 0 0" }}>
            {cat.services.length} service{cat.services.length !== 1 ? "s" : ""} — click any to explore
          </p>
        </div>
        <span
          style={{
            fontSize: 13,
            color: "#9ca3af",
            display: "inline-block",
            transition: "transform 0.25s",
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
          }}
        >
          ▾
        </span>
      </button>

      {isOpen && (
        <div
          style={{
            background: "#fff",
            border: `1.5px solid ${cfg.accent}`,
            borderTop: "none",
            borderRadius: "0 0 18px 18px",
            overflow: "hidden",
          }}
        >
          {cat.services.map((svc, i) => (
            <ServiceRow
              key={i}
              svc={svc}
              isLast={i === cat.services.length - 1}
              accentColor={cfg.accent}
              dotColor={cfg.dotColor}
              onClick={() => onServiceClick(svc, cat.phase, cat.slug)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

/* ─── Main Page ──────────────────────────────────────────── */
export default function ServicesPage() {
  const [openPhase, setOpenPhase] = useState<"pre" | "during" | "post">("pre");
  const [popup, setPopup] = useState<{ service: Service; phase: string; slug: "pre" | "during" | "post" } | null>(null);

  const jumpTo = (slug: "pre" | "during" | "post") => {
    setOpenPhase(slug);
    setTimeout(() => {
      document.getElementById(`block-${slug}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  };

  const togglePhase = (slug: "pre" | "during" | "post") =>
    setOpenPhase((prev) => (prev === slug ? ("" as any) : slug));

  return (
    <div style={{ background: "#F4F7FC", minHeight: "100vh", color: "#001240", fontFamily: "'DM Sans', sans-serif" }}>
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=DM+Serif+Display:ital@0;1&display=swap"
        rel="stylesheet"
      />

      <Navbar />

      {popup && (
        <ServicePopup
          service={popup.service}
          phase={popup.phase}
          slug={popup.slug}
          onClose={() => setPopup(null)}
        />
      )}

      {/* ── Hero ── */}
      <section
        style={{
          background: "#001240",
          padding: "120px 40px 64px",
          borderRadius: "0 0 32px 32px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(ellipse at 72% 55%, rgba(14,85,165,0.38) 0%, transparent 62%)",
            pointerEvents: "none",
          }}
        />
        <div style={{ maxWidth: 1080, margin: "0 auto", position: "relative" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(255,255,255,0.07)",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: 24,
              padding: "5px 14px",
              marginBottom: 24,
            }}
          >
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#56A018" }} />
            <span style={{ fontSize: 11, color: "#D5F2A0", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 500 }}>
              DBOT Real Estate Advisory
            </span>
          </div>
          <h1
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "clamp(36px, 5vw, 60px)",
              fontWeight: 400,
              color: "#F4F7FC",
              lineHeight: 1.08,
              marginBottom: 16,
            }}
          >
            Our Capabilities
          </h1>
          <p style={{ fontSize: 16, color: "#E0EBFA", opacity: 0.75, maxWidth: 480, lineHeight: 1.75, marginBottom: 40 }}>
            End-to-end advisory across the complete real estate lifecycle — from pre-acquisition due diligence
            through to post-completion ESG compliance.
          </p>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            {(["pre", "during", "post"] as const).map((slug) => {
              const cat = serviceCards.find((c) => c.slug === slug)!;
              const cfg = phaseConfig[slug];
              const active = openPhase === slug;
              return (
                <button
                  key={slug}
                  onClick={() => jumpTo(slug)}
                  style={{
                    fontSize: 13,
                    fontWeight: 500,
                    color: active ? "#fff" : "rgba(255,255,255,0.45)",
                    background: active ? cfg.accent : "transparent",
                    border: `1px solid ${active ? cfg.accent : "rgba(255,255,255,0.15)"}`,
                    borderRadius: 24,
                    padding: "8px 18px",
                    cursor: "pointer",
                    transition: "all 0.18s",
                    display: "flex",
                    alignItems: "center",
                    gap: 7,
                    fontFamily: "inherit",
                  }}
                >
                  <span style={{ opacity: active ? 1 : 0.6 }}>{cat.icon}</span>
                  {cat.phase}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Main Content ── */}
      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "48px 32px" }}>
        {/* Lifecycle overview banner */}
        <div
          style={{
            background: "#001240",
            borderRadius: 24,
            padding: "34px 40px",
            marginBottom: 48,
            display: "flex",
            alignItems: "center",
            gap: 32,
            flexWrap: "wrap",
          }}
        >
          <div style={{ flex: 1, minWidth: 200 }}>
            <p style={{ fontSize: 11, color: "#56A018", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 600, marginBottom: 8 }}>
              Overview
            </p>
            <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 22, fontWeight: 400, color: "#F4F7FC", lineHeight: 1.3, margin: 0 }}>
              DBOT serves the complete real estate lifecycle
            </h2>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
            <span style={{ background: "#0E55A5", color: "#E0EBFA", borderRadius: 20, padding: "9px 18px", fontSize: 13, fontWeight: 500 }}>
              Pre-Construction
            </span>
            <span style={{ color: "rgba(255,255,255,0.25)", fontSize: 16 }}>→</span>
            <span style={{ background: "rgba(255,255,255,0.08)", color: "#E0EBFA", border: "1px solid rgba(255,255,255,0.14)", borderRadius: 20, padding: "9px 18px", fontSize: 13, fontWeight: 500 }}>
              During Construction
            </span>
            <span style={{ color: "rgba(255,255,255,0.25)", fontSize: 16 }}>→</span>
            <span style={{ background: "#56A018", color: "#D5F2A0", borderRadius: 20, padding: "9px 18px", fontSize: 13, fontWeight: 500 }}>
              Post-Construction
            </span>
          </div>
        </div>

        {/* Accordion + sidebar */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 300px", gap: 32, alignItems: "start" }}>
          <div>
            <p style={{ fontSize: 11, fontWeight: 600, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 16 }}>
              Service Areas
            </p>
            {serviceCards.map((cat) => (
              <div key={cat.slug} id={`block-${cat.slug}`}>
                <PhaseAccordion
                  cat={cat}
                  isOpen={openPhase === cat.slug}
                  onToggle={() => togglePhase(cat.slug)}
                  onServiceClick={(svc, phase, slug) => setPopup({ service: svc, phase, slug })}
                />
              </div>
            ))}
          </div>

          {/* Sidebar */}
          <div style={{ position: "sticky", top: 88 }}>
            <div style={{ background: "#fff", border: "1.5px solid #E0EBFA", borderRadius: 22, padding: "26px 22px" }}>
              <p style={{ fontSize: 11, fontWeight: 600, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 20 }}>
                What we cover
              </p>
              {serviceCards.map((cat) => {
                const cfg = phaseConfig[cat.slug];
                return (
                  <div key={cat.slug} style={{ marginBottom: 20 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                      <div style={{ width: 8, height: 8, borderRadius: "50%", background: cfg.accent, flexShrink: 0 }} />
                      <span style={{ fontSize: 13, fontWeight: 600, color: "#001240" }}>{cat.phase}</span>
                    </div>
                    <div style={{ paddingLeft: 16 }}>
                      {cat.services.map((s, i) => (
                        <p
                          key={i}
                          onClick={() => setPopup({ service: s, phase: cat.phase, slug: cat.slug })}
                          style={{ fontSize: 12, color: "#6b7280", padding: "5px 10px", borderRadius: 8, cursor: "pointer", margin: 0, transition: "all 0.15s" }}
                          onMouseEnter={(e) => {
                            (e.currentTarget as HTMLElement).style.color = cfg.accent;
                            (e.currentTarget as HTMLElement).style.background = cfg.lightBg;
                          }}
                          onMouseLeave={(e) => {
                            (e.currentTarget as HTMLElement).style.color = "#6b7280";
                            (e.currentTarget as HTMLElement).style.background = "transparent";
                          }}
                        >
                          {s.title}
                        </p>
                      ))}
                    </div>
                  </div>
                );
              })}
              <div style={{ borderTop: "1px solid #F4F7FC", paddingTop: 16, marginTop: 4 }}>
                <p style={{ fontSize: 12, color: "#9ca3af", lineHeight: 1.6 }}>
                  Click any service to view the full detail, method, and project list.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Success Stories ── */}
        <div style={{ background: "#001240", borderRadius: 28, padding: "52px 40px", margin: "56px 0" }}>
          <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 32, fontWeight: 400, color: "#F4F7FC", marginBottom: 32 }}>
            Success Stories
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 14 }}>
            {successStories.map((story, i) => (
              <div
                key={i}
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.09)", borderRadius: 20, padding: "26px 24px", transition: "all 0.18s", cursor: "default" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.09)";
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.18)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.05)";
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.09)";
                }}
              >
                <span style={{ display: "inline-block", fontSize: 11, fontWeight: 600, color: "#D5F2A0", background: "rgba(86,160,24,0.18)", border: "1px solid rgba(86,160,24,0.3)", borderRadius: 12, padding: "3px 12px", marginBottom: 14, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                  {story.tag}
                </span>
                <h3 style={{ fontSize: 17, fontWeight: 600, color: "#F4F7FC", marginBottom: 10, lineHeight: 1.3 }}>{story.title}</h3>
                <p style={{ fontSize: 13, color: "#E0EBFA", opacity: 0.65, lineHeight: 1.75 }}>{story.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Team ── */}
        <div style={{ marginBottom: 56 }}>
          <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 32, fontWeight: 400, color: "#001240", marginBottom: 28 }}>
            Meet our team
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 14 }}>
            {team.map((member, i) => (
              <div
                key={i}
                style={{ background: "#fff", border: "1.5px solid #E0EBFA", borderRadius: 20, padding: "24px 20px", transition: "border-color 0.18s" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = "#0E55A5"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = "#E0EBFA"; }}
              >
                <div style={{ width: 46, height: 46, borderRadius: 14, background: "#E0EBFA", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 600, color: "#0E55A5", marginBottom: 14 }}>
                  {member.initials}
                </div>
                <p style={{ fontSize: 15, fontWeight: 600, color: "#001240", marginBottom: 4 }}>{member.name}</p>
                <p style={{ fontSize: 12, color: "#6b7280", marginBottom: 12 }}>{member.role}</p>
                <a href={`mailto:${member.email}`} style={{ fontSize: 12, color: "#0E55A5", textDecoration: "none" }}>{member.email}</a>
              </div>
            ))}
          </div>
        </div>

        {/* ── Contact ── */}
        <div style={{ background: "#F9F3DE", borderRadius: 28, padding: "52px 40px", marginBottom: 48 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 52, alignItems: "start" }}>
            <div>
              <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 32, fontWeight: 400, color: "#001240", marginBottom: 10 }}>
                Connect with us
              </h2>
              <p style={{ fontSize: 14, color: "#4b5563", marginBottom: 32, lineHeight: 1.75 }}>
                To see how we can support your real estate priorities, get in touch or subscribe for updates.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12, maxWidth: 380 }}>
                {(["First name", "Last name", "Email address"] as const).map((placeholder) => (
                  <input
                    key={placeholder}
                    type={placeholder === "Email address" ? "email" : "text"}
                    placeholder={placeholder}
                    style={{ background: "#fff", border: "1.5px solid #E0EBFA", borderRadius: 14, padding: "12px 16px", fontSize: 14, color: "#001240", outline: "none", width: "100%", fontFamily: "inherit" }}
                  />
                ))}
                <button
                  style={{ alignSelf: "flex-start", background: "#001240", color: "#F4F7FC", border: "none", borderRadius: 14, padding: "12px 28px", fontSize: 14, fontWeight: 600, cursor: "pointer", marginTop: 4, fontFamily: "inherit" }}
                >
                  Subscribe →
                </button>
              </div>
            </div>
            <div style={{ background: "#fff", border: "1.5px solid #E0EBFA", borderRadius: 22, padding: "28px" }}>
              <p style={{ fontSize: 11, fontWeight: 600, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 16 }}>
                Top Location
              </p>
              <div style={{ width: "100%", height: 136, background: "#E0EBFA", borderRadius: 16, marginBottom: 18, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28 }}>
                📍
              </div>
              <h3 style={{ fontSize: 22, fontWeight: 600, color: "#001240", marginBottom: 6 }}>Dubai</h3>
              <a href="tel:+97142001234" style={{ fontSize: 14, color: "#4b5563", display: "block", marginBottom: 6, textDecoration: "none" }}>+971 4 200 1234</a>
              <address style={{ fontSize: 12, color: "#6b7280", fontStyle: "normal", lineHeight: 1.6 }}>
                Level 15, ICD Brookfield Place, DIFC, Dubai, UAE
              </address>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}