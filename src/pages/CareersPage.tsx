import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChevronDown } from "lucide-react";

const sections = [
  { id: "life", label: "Life at DBOT" },
  { id: "gallery", label: "Picture Gallery" },
  { id: "values", label: "The Values" },
  { id: "openings", label: "Current Openings" },
  { id: "growth", label: "Growth Stories" },
];

const lifeCards = [
  { icon: "🤝", title: "Culture", desc: "A collaborative, inclusive environment where every voice matters and ideas are welcomed from day one." },
  { icon: "🏢", title: "Work Environment", desc: "Modern workspaces designed for focus and creativity, with flexibility built into how we work." },
  { icon: "🎁", title: "Benefits", desc: "Competitive compensation, health coverage, learning budgets, and more — because great work deserves great support." },
];

const values = [
  { num: "01", label: "Innovation", desc: "Thinking beyond the obvious" },
  { num: "02", label: "Integrity", desc: "Doing the right thing, always" },
  { num: "03", label: "Growth", desc: "Learning never stops here" },
  { num: "04", label: "People First", desc: "Our team is our greatest asset" },
];

const testimonials = [
  { initials: "AK", name: "Ananya K.", role: "Senior Sales Manager", quote: "DBOT gives you real ownership from day one. I've grown more here in 2 years than in my previous 5." },
  { initials: "RV", name: "Rahul V.", role: "Head of Strategy", quote: "The culture here is rare — people actually help each other. It's collaborative in a way I hadn't experienced before." },
  { initials: "PM", name: "Priya M.", role: "Product Lead", quote: "Started as an intern and now lead a product. DBOT genuinely invests in your career — not just your output." },
];

const jobs = [
  {
    dept: "Sales & Business Development",
    title: "Senior Sales Manager – Residential",
    tags: [
      { label: "Sales", type: "dept" },
      { label: "Mumbai", type: "loc" },
      { label: "Full-time", type: "type" },
      { label: "5–8 yrs exp", type: "exp" },
    ],
    ctc: "₹12–18 LPA + incentives",
    responsibilities: [
      "Lead and mentor a team of 6–10 sales executives",
      "Drive residential unit sales across key Mumbai micro-markets",
      "Own monthly and quarterly revenue targets",
      "Build and manage relationships with channel partners",
      "Collaborate with marketing on lead generation campaigns",
    ],
    requirements: [
      "5–8 years in real estate sales, min. 2 years in a team lead role",
      "Strong knowledge of Mumbai residential market",
      "Proven track record of hitting ₹10Cr+ monthly targets",
      "Excellent negotiation and client management skills",
      "Bachelor's degree (MBA preferred)",
    ],
  },
  {
    dept: "Sales & Business Development",
    title: "Business Development Executive",
    tags: [
      { label: "Sales", type: "dept" },
      { label: "Pune", type: "loc" },
      { label: "Full-time", type: "type" },
      { label: "2–4 yrs exp", type: "exp" },
    ],
    ctc: "₹6–9 LPA + incentives",
    responsibilities: [
      "Identify and convert qualified leads into clients",
      "Conduct site visits and product presentations",
      "Maintain a healthy pipeline via CRM tools",
      "Coordinate with channel partners in Pune region",
      "Meet weekly activity and conversion KPIs",
    ],
    requirements: [
      "2–4 years in real estate or B2C sales",
      "Familiarity with Pune's residential micro-markets",
      "Strong communication skills in English and Marathi",
      "Self-starter with high ownership mindset",
      "Comfortable with field sales and client visits",
    ],
  },
  {
    dept: "Marketing & Growth",
    title: "Digital Marketing Manager",
    tags: [
      { label: "Marketing", type: "dept" },
      { label: "Mumbai", type: "loc" },
      { label: "Full-time", type: "type" },
      { label: "4–6 yrs exp", type: "exp" },
    ],
    ctc: "₹10–16 LPA",
    responsibilities: [
      "Own performance marketing across Google, Meta, and YouTube",
      "Manage monthly ad budgets of ₹20L+",
      "Drive qualified lead volume for sales teams",
      "Run A/B tests on creatives, landing pages, and audiences",
      "Report on CAC, ROAS, and funnel conversion weekly",
    ],
    requirements: [
      "4–6 years in performance/digital marketing",
      "Hands-on with Meta Ads Manager and Google Ads",
      "Experience in real estate or high-ticket B2C preferred",
      "Strong analytical mindset — comfortable in Excel/Sheets",
      "Familiarity with CRM and marketing automation tools",
    ],
  },
  {
    dept: "Marketing & Growth",
    title: "Content & Social Media Specialist",
    tags: [
      { label: "Marketing", type: "dept" },
      { label: "Remote", type: "loc" },
      { label: "Full-time", type: "type" },
      { label: "1–3 yrs exp", type: "exp" },
    ],
    ctc: "₹5–8 LPA",
    responsibilities: [
      "Create and schedule content across Instagram, LinkedIn, YouTube",
      "Write short-form copy for ads, reels, and stories",
      "Coordinate with design and video teams on asset production",
      "Track engagement metrics and adjust content strategy",
      "Manage community interactions and comments",
    ],
    requirements: [
      "1–3 years in social media or content marketing",
      "Strong writing skills in English (Hindi a plus)",
      "Eye for visual design and brand consistency",
      "Familiar with scheduling tools (Later, Buffer, or similar)",
      "Real estate or lifestyle brand experience preferred",
    ],
  },
  {
    dept: "Technology & Product",
    title: "Full Stack Developer (React / Node.js)",
    tags: [
      { label: "Tech", type: "dept" },
      { label: "Mumbai", type: "loc" },
      { label: "Full-time", type: "type" },
      { label: "3–5 yrs exp", type: "exp" },
    ],
    ctc: "₹12–20 LPA",
    responsibilities: [
      "Build and maintain customer-facing web applications",
      "Develop RESTful APIs and integrate third-party services",
      "Collaborate with product and design on feature delivery",
      "Write clean, tested, and well-documented code",
      "Participate in code reviews and architecture discussions",
    ],
    requirements: [
      "3–5 years with React, Node.js, and REST APIs",
      "Proficiency in TypeScript and modern JS patterns",
      "Experience with PostgreSQL or MongoDB",
      "Familiarity with AWS or GCP deployment",
      "Strong sense of ownership and product thinking",
    ],
  },
  {
    dept: "Technology & Product",
    title: "Product Manager – PropTech",
    tags: [
      { label: "Tech", type: "dept" },
      { label: "Mumbai", type: "loc" },
      { label: "Full-time", type: "type" },
      { label: "4–7 yrs exp", type: "exp" },
    ],
    ctc: "₹18–26 LPA",
    responsibilities: [
      "Define and own the product roadmap for DBOT's digital platforms",
      "Gather requirements from sales, ops, and customer teams",
      "Write detailed PRDs and user stories for engineering",
      "Prioritise features against business impact and feasibility",
      "Track and report on product KPIs post-launch",
    ],
    requirements: [
      "4–7 years in product management, preferably in PropTech or fintech",
      "Strong grasp of agile/scrum processes",
      "Comfort with data — SQL or BI tools a strong plus",
      "Experience working directly with engineering teams",
      "Exceptional written and verbal communication",
    ],
  },
  {
    dept: "Operations & Finance",
    title: "Operations Coordinator",
    tags: [
      { label: "Operations", type: "dept" },
      { label: "Mumbai", type: "loc" },
      { label: "Full-time", type: "type" },
      { label: "2–4 yrs exp", type: "exp" },
    ],
    ctc: "₹5–8 LPA",
    responsibilities: [
      "Coordinate documentation and handover processes for property deals",
      "Liaise between sales, legal, and finance teams",
      "Track and resolve post-sale client queries",
      "Maintain accurate records in CRM and internal systems",
      "Support leadership with reporting and scheduling",
    ],
    requirements: [
      "2–4 years in operations or project coordination",
      "Strong organisation and multi-tasking skills",
      "Proficiency in Excel and Google Workspace",
      "Prior experience in real estate or construction preferred",
      "Clear communicator with a process-oriented mindset",
    ],
  },
  {
    dept: "Operations & Finance",
    title: "Finance & Accounts Executive",
    tags: [
      { label: "Finance", type: "dept" },
      { label: "Mumbai", type: "loc" },
      { label: "Full-time", type: "type" },
      { label: "2–5 yrs exp", type: "exp" },
    ],
    ctc: "₹5–9 LPA",
    responsibilities: [
      "Handle day-to-day bookkeeping and accounts payable/receivable",
      "Prepare MIS reports and monthly financial summaries",
      "Assist in statutory compliance — GST, TDS filings",
      "Reconcile bank statements and vendor accounts",
      "Support the CFO during audits and due diligence",
    ],
    requirements: [
      "2–5 years in accounts or finance roles",
      "Hands-on with Tally, Zoho Books, or similar",
      "Working knowledge of GST and TDS regulations",
      "B.Com / M.Com or CA Inter preferred",
      "Detail-oriented with a high degree of accuracy",
    ],
  },
];

const jobsByDept = jobs.reduce<Record<string, typeof jobs>>((acc, job) => {
  if (!acc[job.dept]) acc[job.dept] = [];
  acc[job.dept].push(job);
  return acc;
}, {});

const tagStyles: Record<string, { bg: string; color: string }> = {
  dept: { bg: "#EEF9F4", color: "#0F6E56" },
  loc: { bg: "#FEF9EC", color: "#854F0B" },
  type: { bg: "#E8F0FB", color: "#0C447C" },
  exp: { bg: "#F1EFE8", color: "#5F5E5A" },
};

export default function CareersPage() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [openJob, setOpenJob] = useState<string | null>(null);
  const [hoveredJob, setHoveredJob] = useState<string | null>(null);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setDropdownOpen(false);
  };

  return (
    <>
      <Navbar />
      <main>

        {/* HERO */}
        <section style={{ padding: "90px 5%", background: "#F4F7FC", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 40, flexWrap: "wrap", minHeight: 520 }}>

          {/* LEFT */}
          <div style={{ maxWidth: 520 }}>

            {/* Headline */}
            <h1 style={{ fontSize: "2.8rem", fontWeight: 800, color: "#001240", lineHeight: 1.15, marginBottom: 16 }}>
              Build a career<br />you're proud of<br />at{" "}
              <span style={{ color: "#0E55A5" }}>DBOT</span>
            </h1>

            <p style={{ color: "#1A1A2E", opacity: 0.6, fontSize: "1.05rem", lineHeight: 1.6, marginBottom: 28 }}>
              Explore opportunities, culture, and growth stories at DBOT Realty — where ambitious people thrive.
            </p>

            {/* Stats row */}
            <div style={{ display: "flex", gap: 28, marginBottom: 32, flexWrap: "wrap" }}>
              {[
                { num: "120+", label: "Team members" },
                { num: "8", label: "Open roles" },
                { num: "4.8★", label: "Culture rating" },
              ].map((s, i) => (
                <div key={s.label} style={{ display: "flex", flexDirection: "column", paddingLeft: i > 0 ? 28 : 0, borderLeft: i > 0 ? "1px solid #D8E8F5" : "none" }}>
                  <span style={{ fontSize: "1.4rem", fontWeight: 800, color: "#001240" }}>{s.num}</span>
                  <span style={{ fontSize: "0.75rem", color: "#888", marginTop: 2 }}>{s.label}</span>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
              <div style={{ position: "relative", display: "inline-block" }}>
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  style={{ background: "#0E55A5", color: "#fff", padding: "13px 22px", borderRadius: 12, border: "none", display: "inline-flex", alignItems: "center", gap: 8, cursor: "pointer", fontSize: "0.9rem", fontWeight: 700 }}
                >
                  Explore Sections <ChevronDown size={14} />
                </button>
                {dropdownOpen && (
                  <div style={{ position: "absolute", top: "110%", left: 0, background: "#fff", borderRadius: 12, boxShadow: "0 15px 40px rgba(0,0,0,0.1)", overflow: "hidden", width: 220, zIndex: 10, border: "1px solid #E0EBFA" }}>
                    {sections.map((s) => (
                      <div
                        key={s.id}
                        onClick={() => scrollTo(s.id)}
                        style={{ padding: "13px 18px", cursor: "pointer", borderBottom: "1px solid #E0EBFA", fontSize: "0.9rem", color: "#001240" }}
                      >
                        {s.label}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <a
                href="#openings"
                onClick={(e) => { e.preventDefault(); scrollTo("openings"); }}
                style={{ background: "#fff", color: "#0E55A5", padding: "12px 20px", borderRadius: 12, border: "1.5px solid #C8DCEF", fontSize: "0.9rem", fontWeight: 600, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6 }}
              >
                View open roles →
              </a>
            </div>
          </div>

          {/* RIGHT — shuffled card stack */}
          <div style={{ position: "relative", width: 320, height: 420, flexShrink: 0 }}>

            {/* Card 3 — furthest back */}
            <div style={{
              width: 270, height: 360, background: "#B5CDE8", borderRadius: 20,
              position: "absolute", top: 30, left: 40,
              transform: "rotate(8deg)",
            }} />

            {/* Card 2 — middle */}
            <div style={{
              width: 270, height: 360, background: "#6D9EC8", borderRadius: 20,
              position: "absolute", top: 16, left: 24,
              transform: "rotate(4deg)",
            }} />

            {/* Card 1 — front (main) */}
            <div style={{
              width: 270, height: 360, background: "#0E55A5", borderRadius: 20,
              position: "absolute", top: 0, left: 0,
              transform: "rotate(0deg)",
              display: "flex", flexDirection: "column", justifyContent: "space-between",
              padding: 26, overflow: "hidden",
            }}>

              {/* Top */}
              <div>
                <div style={{ fontSize: "0.65rem", fontWeight: 800, color: "rgba(255,255,255,0.4)", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 14 }}>
                  DBOT Realty
                </div>
                <div style={{ fontSize: "1.1rem", fontWeight: 800, color: "#fff", lineHeight: 1.3 }}>
                  Join our team
                </div>
                <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.45)", marginTop: 4 }}>
                  Mumbai · Pune · Remote
                </div>
              </div>

              {/* Feature rows */}
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {[
                  { label: "Fast growth", sub: "3x team size in 2 years" },
                  { label: "Real ownership", sub: "Lead from day one" },
                  { label: "Learning budget", sub: "₹50K/yr per person" },
                ].map((f) => (
                  <div key={f.label} style={{ background: "rgba(255,255,255,0.1)", borderRadius: 10, padding: "11px 14px" }}>
                    <div style={{ fontSize: "0.8rem", color: "#fff", fontWeight: 700 }}>{f.label}</div>
                    <div style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.45)", marginTop: 2 }}>{f.sub}</div>
                  </div>
                ))}
              </div>

              {/* Bottom */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ display: "flex", gap: 5 }}>
                  <span style={{ width: 18, height: 6, borderRadius: 3, background: "#fff" }} />
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: "rgba(255,255,255,0.3)" }} />
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: "rgba(255,255,255,0.3)" }} />
                </div>
                <button
                  onClick={() => scrollTo("openings")}
                  style={{ background: "rgba(255,255,255,0.15)", color: "#fff", fontSize: "0.7rem", fontWeight: 700, padding: "6px 13px", borderRadius: 7, border: "none", cursor: "pointer" }}
                >
                  See openings →
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* LIFE */}
        <section id="life" style={{ padding: "90px 5%", background: "#fff" }}>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 800, color: "#001240" }}>Life at DBOT</h2>
          <p style={{ color: "#1A1A2E", opacity: 0.55, fontSize: "0.95rem", marginBottom: 32 }}>What makes working here different</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px,1fr))", gap: 20 }}>
            {lifeCards.map((c) => (
              <div key={c.title} style={{ background: "#fff", borderRadius: 16, padding: 28, border: "1px solid #E8F0FB" }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: "#E0EBFA", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16, fontSize: 20 }}>
                  {c.icon}
                </div>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#001240", marginBottom: 6 }}>{c.title}</h3>
                <p style={{ fontSize: "0.875rem", color: "#555", lineHeight: 1.6 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* GALLERY */}
        <section id="gallery" style={{ padding: "90px 5%", background: "#F4F7FC" }}>
          <h2 style={{ textAlign: "center", fontSize: "2rem", fontWeight: 800, color: "#001240", marginBottom: 6 }}>
            Life inside DBOT Realty
          </h2>
          <p style={{ textAlign: "center", color: "#666", fontSize: "0.95rem", marginBottom: 40 }}>
            A glimpse at the people, spaces, and moments that make us who we are
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 10, maxWidth: 900, margin: "0 auto" }}>
            <div style={{ gridColumn: 1, gridRow: 1, height: 120, borderRadius: 14, background: "#B8CDE8" }} />
            <div style={{ gridColumn: 1, gridRow: 2, height: 140, borderRadius: 14, background: "#C5D8EE" }} />
            <div style={{ gridColumn: 1, gridRow: 3, height: 100, borderRadius: 14, background: "#D0E2F2" }} />
            <div style={{ gridColumn: 2, gridRow: "1/3", height: 270, borderRadius: 14, background: "#8FAECC" }} />
            <div style={{ gridColumn: 2, gridRow: 3, height: 100, borderRadius: 14, background: "#C0D6EA" }} />
            <div style={{ gridColumn: 3, gridRow: "1/4", height: 370, borderRadius: 14, background: "#6B90B8" }} />
            <div style={{ gridColumn: 4, gridRow: 1, height: 150, borderRadius: 14, background: "#A0BFDA" }} />
            <div style={{ gridColumn: 4, gridRow: 2, height: 110, borderRadius: 14, background: "#BDCFE0" }} />
            <div style={{ gridColumn: 4, gridRow: 3, height: 110, borderRadius: 14, background: "#CAD9E8" }} />
            <div style={{ gridColumn: 5, gridRow: 1, height: 130, borderRadius: 14, background: "#AABFCE" }} />
            <div style={{ gridColumn: 5, gridRow: "2/4", height: 240, borderRadius: 14, background: "#8AAFC9" }} />
          </div>

          {/* TESTIMONIALS */}
          <div style={{ maxWidth: 900, margin: "60px auto 0" }}>
            <p style={{ textAlign: "center", fontSize: "1.3rem", fontWeight: 800, color: "#001240", marginBottom: 6 }}>
              Trusted by our people
            </p>
            <p style={{ textAlign: "center", fontSize: "0.9rem", color: "#888", marginBottom: 40 }}>
              From every team and level
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px,1fr))", gap: 20 }}>
              {testimonials.map((t) => (
                <div
                  key={t.name}
                  style={{
                    background: "#fff",
                    border: "1px solid #E8F0FB",
                    borderRadius: 18,
                    padding: "26px 24px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    gap: 20,
                  }}
                >
                  {/* Top: stars + quote */}
                  <div>
                    <div style={{ display: "flex", gap: 3, marginBottom: 14 }}>
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#F5A623" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>
                    <p style={{ fontSize: "0.88rem", color: "#333", lineHeight: 1.7, fontStyle: "italic" }}>
                      "{t.quote}"
                    </p>
                  </div>

                  {/* Bottom: avatar + name */}
                  <div style={{ display: "flex", alignItems: "center", gap: 12, paddingTop: 16, borderTop: "1px solid #F0F4FA" }}>
                    <div style={{
                      width: 40, height: 40, borderRadius: "50%",
                      background: "#001240", color: "#fff",
                      fontSize: 13, fontWeight: 700,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      flexShrink: 0,
                    }}>
                      {t.initials}
                    </div>
                    <div>
                      <div style={{ fontSize: "0.88rem", fontWeight: 700, color: "#001240" }}>{t.name}</div>
                      <div style={{ fontSize: "0.75rem", color: "#888", marginTop: 2 }}>{t.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* VALUES */}
        <section id="values" style={{ padding: "90px 5%", background: "#fff" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <h2 style={{ fontSize: "1.75rem", fontWeight: 800, color: "#001240", marginBottom: 8 }}>The Values</h2>
            <p style={{ color: "#1A1A2E", opacity: 0.55, fontSize: "0.95rem", marginBottom: 40 }}>
              Principles that guide everything we do
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px,1fr))", gap: 16 }}>
              {values.map((v) => (
                <div
                  key={v.label}
                  style={{
                    background: "#F4F7FC",
                    borderRadius: 16,
                    padding: "28px 26px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 12,
                    borderTop: "3px solid #0E55A5",
                  }}
                >
                  <span style={{ fontSize: "0.7rem", fontWeight: 800, color: "#0E55A5", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                    {v.num}
                  </span>
                  <div style={{ fontSize: "1.1rem", fontWeight: 800, color: "#001240" }}>{v.label}</div>
                  <div style={{ fontSize: "0.85rem", color: "#666", lineHeight: 1.6 }}>{v.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* OPENINGS */}
        <section id="openings" style={{ padding: "90px 5%", background: "#fff" }}>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 800, color: "#001240" }}>Current openings</h2>
          <p style={{ color: "#1A1A2E", opacity: 0.55, fontSize: "0.95rem", marginBottom: 8 }}>
            Join a team that's redefining real estate in India
          </p>

          {Object.entries(jobsByDept).map(([dept, deptJobs]) => (
            <div key={dept}>
              <p style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.08em", color: "#888", textTransform: "uppercase", margin: "32px 0 12px" }}>
                {dept}
              </p>

              {deptJobs.map((job) => {
                const isOpen = openJob === job.title;
                const isHovered = hoveredJob === job.title;

                return (
                  <div
                    key={job.title}
                    onClick={() => setOpenJob(isOpen ? null : job.title)}
                    onMouseEnter={() => setHoveredJob(job.title)}
                    onMouseLeave={() => setHoveredJob(null)}
                    style={{
                      border: `1px solid ${isOpen || isHovered ? "#B5D4F4" : "#E8F0FB"}`,
                      borderRadius: 14,
                      marginBottom: 10,
                      overflow: "hidden",
                      cursor: "pointer",
                      boxShadow: isOpen
                        ? "0 4px 20px rgba(14,85,165,.10)"
                        : isHovered
                          ? "0 2px 12px rgba(14,85,165,.07)"
                          : "none",
                      transition: "box-shadow 0.2s, border-color 0.2s",
                    }}
                  >
                    {/* Header */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "18px 22px",
                        gap: 16,
                        background: isOpen ? "#F0F6FD" : isHovered ? "#F8FBFF" : "#fff",
                        transition: "background 0.2s",
                      }}
                    >
                      <div>
                        <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "#001240", marginBottom: 6 }}>
                          {job.title}
                        </div>
                        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                          {job.tags.map((tag) => (
                            <span
                              key={tag.label}
                              style={{
                                ...tagStyles[tag.type],
                                fontSize: 11,
                                fontWeight: 600,
                                padding: "3px 10px",
                                borderRadius: 20,
                              }}
                            >
                              {tag.label}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Chevron */}
                      <div
                        style={{
                          width: 28,
                          height: 28,
                          borderRadius: "50%",
                          border: `1px solid ${isOpen || isHovered ? "#B5D4F4" : "#E8F0FB"}`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                          background: isOpen ? "#0E55A5" : isHovered ? "#E0EBFA" : "#fff",
                          color: isOpen ? "#fff" : "#0E55A5",
                          fontSize: 12,
                          transform: isOpen ? "rotate(180deg)" : "none",
                          transition: "transform 0.25s, background 0.2s, color 0.2s",
                        }}
                      >
                        ▾
                      </div>
                    </div>

                    {/* Expanded body */}
                    {isOpen && (
                      <div style={{ borderTop: "1px solid #E8F0FB", padding: "0 22px 22px" }}>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginTop: 18 }}>
                          <div>
                            <p style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.06em", color: "#888", textTransform: "uppercase", marginBottom: 10 }}>
                              Responsibilities
                            </p>
                            <ul style={{ listStyle: "none", padding: 0 }}>
                              {job.responsibilities.map((r) => (
                                <li key={r} style={{ fontSize: "0.85rem", color: "#444", lineHeight: 1.6, padding: "3px 0 3px 14px", position: "relative" }}>
                                  <span style={{ position: "absolute", left: 2, color: "#0E55A5", fontSize: "1.2rem", lineHeight: 1.3 }}>·</span>
                                  {r}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <p style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.06em", color: "#888", textTransform: "uppercase", marginBottom: 10 }}>
                              Requirements
                            </p>
                            <ul style={{ listStyle: "none", padding: 0 }}>
                              {job.requirements.map((r) => (
                                <li key={r} style={{ fontSize: "0.85rem", color: "#444", lineHeight: 1.6, padding: "3px 0 3px 14px", position: "relative" }}>
                                  <span style={{ position: "absolute", left: 2, color: "#0E55A5", fontSize: "1.2rem", lineHeight: 1.3 }}>·</span>
                                  {r}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <div style={{ marginTop: 18, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 10 }}>
                          <span style={{ fontSize: "0.85rem", color: "#555" }}>
                            CTC: <strong style={{ color: "#001240" }}>{job.ctc}</strong>
                          </span>
                          <a
                            href="https://www.linkedin.com/company/dbot-realty/posts/?feedView=all"
                            target="_blank"
                            onClick={(e) => e.stopPropagation()}
                            style={{ background: "#0E55A5", color: "#fff", padding: "10px 22px", borderRadius: 10, fontSize: "0.85rem", fontWeight: 600, textDecoration: "none" }}
                          >
                            Apply on LinkedIn →
                          </a>
                        </div>
                      </div>
                    )
                    }
                  </div>
                );
              })}
            </div>
          ))}

          <div style={{ textAlign: "center", marginTop: 40 }}>
            <a
              href="https://www.linkedin.com/company/dbot-realty/posts/?feedView=all"
              target="_blank"
              style={{ display: "inline-block", border: "1.5px solid #0E55A5", color: "#0E55A5", padding: "12px 28px", borderRadius: 12, fontWeight: 600, textDecoration: "none", fontSize: "0.95rem" }}
            >
              See all openings on LinkedIn →
            </a>
          </div>
        </section >

      </main >
      <Footer />
    </>
  );
}