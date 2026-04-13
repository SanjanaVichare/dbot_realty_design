import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import teamLife from "@/assets/team-life.jpg";
import { useRef } from "react";

export default function AboutPage() {

  const sections = {
    foundation: useRef<HTMLDivElement>(null),
    people: useRef<HTMLDivElement>(null),
    iso: useRef<HTMLDivElement>(null),
    awards: useRef<HTMLDivElement>(null),
    why: useRef<HTMLDivElement>(null),
  };

  const scrollTo = (ref: any) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar />

      <main className="pt-24 bg-[#F4F7FC] text-[#001240]">

        {/* ================= HERO ================= */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

            <div>
              <h1 className="text-6xl md:text-7xl font-bold leading-[0.9] mb-6">
                ABOUT <br /> DBOT
              </h1>

              <p className="text-lg text-[#1A1A2E] max-w-md leading-relaxed">
                We bring structure, discipline, and clarity to real estate execution.
                Every project is driven by precision, transparency, and long-term value.
              </p>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-lg">
              <img src={teamLife} className="w-full h-[400px] object-cover" />
            </div>

          </div>
        </section>


        {/* ================= STICKY NAV ================= */}
        <div className="sticky top-20 z-40 bg-white border-y shadow-sm">
          <div className="max-w-7xl mx-auto px-6 py-4 flex gap-4 flex-wrap">

            <button onClick={() => scrollTo(sections.foundation)} className="btn">Foundation</button>
            <button onClick={() => scrollTo(sections.people)} className="btn">People</button>
            <button onClick={() => scrollTo(sections.iso)} className="btn">ISO</button>
            <button onClick={() => scrollTo(sections.awards)} className="btn">Awards</button>
            <button onClick={() => scrollTo(sections.why)} className="btn">Why Us</button>

          </div>
        </div>


        {/* ================= FOUNDATION STORY ================= */}
        <section ref={sections.foundation} className="py-20">
          <div className="max-w-5xl mx-auto px-6">

            <h2 className="text-4xl font-bold mb-10">THE FOUNDATION STORY</h2>

            <div className="space-y-8 border-l-2 border-[#0E55A5] pl-6">

              {[
                {
                  title: "The Beginning",
                  text: "DBOT was founded to bring discipline and structured execution into India's real estate ecosystem."
                },
                {
                  title: "The DBOT Way",
                  text: "A process-driven approach combining due diligence, financial clarity, and execution precision."
                },
                {
                  title: "Compliance First",
                  text: "Every project adheres strictly to regulatory and legal frameworks."
                },
                {
                  title: "Client Trust",
                  text: "Long-term partnerships built on transparency and results."
                }
              ].map((item, i) => (
                <div key={i}>
                  <h4 className="text-xl font-semibold">{item.title}</h4>
                  <p className="text-[#1A1A2E]">{item.text}</p>
                </div>
              ))}

            </div>
          </div>
        </section>


        {/* ================= PEOPLE ================= */}
        <section ref={sections.people} className="py-20 bg-[#E0EBFA]">
          <div className="max-w-7xl mx-auto px-6">

            <h2 className="text-4xl font-bold mb-12 text-center">THE PEOPLE</h2>

            <div className="grid md:grid-cols-3 gap-8">

              {[
                { name: "Rajesh Kumar", role: "Founder & CEO" },
                { name: "Priya Sharma", role: "COO" },
                { name: "Amit Verma", role: "Head of Operations" },
              ].map((p, i) => (
                <div key={i} className="bg-white rounded-3xl p-8 text-center shadow">

                  <div className="w-28 h-28 mx-auto mb-4 rounded-full bg-[#D5F2A0]" />

                  <h3 className="text-lg font-semibold">{p.name}</h3>
                  <p className="text-[#0E55A5] text-sm">{p.role}</p>

                </div>
              ))}

            </div>
          </div>
        </section>


        {/* ================= ISO ================= */}
        <section ref={sections.iso} className="py-20">
          <div className="max-w-5xl mx-auto px-6 text-center">

            <h2 className="text-4xl font-bold mb-6">ISO CERTIFICATIONS</h2>

            <p className="mb-8 text-[#1A1A2E]">
              Click below to view official certification documents.
            </p>

            <button className="bg-[#0E55A5] text-white px-6 py-3 rounded-xl">
              View Certificates
            </button>

          </div>
        </section>


        {/* ================= AWARDS ================= */}
        <section ref={sections.awards} className="py-20 bg-[#F9F3DE]">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

            <div className="rounded-3xl overflow-hidden">
              <img src={teamLife} className="w-full h-[300px] object-cover" />
            </div>

            <div>
              <h2 className="text-4xl font-bold mb-6">AWARDS & RECOGNITION</h2>

              <ul className="space-y-4">
                <li>🏆 Best Real Estate Advisory 2023</li>
                <li>🏆 Excellence in Compliance 2022</li>
                <li>🏆 Industry Leadership Award</li>
              </ul>
            </div>

          </div>
        </section>


        {/* ================= WHY CHOOSE US ================= */}
        <section ref={sections.why} className="py-20 bg-[#001240] text-white">
          <div className="max-w-7xl mx-auto px-6 text-center">

            <h2 className="text-4xl font-bold mb-12">WHY CHOOSE DBOT</h2>

            <div className="grid md:grid-cols-3 gap-8">

              {[
                "The Team",
                "The Systems",
                "The Experience"
              ].map((item, i) => (
                <div key={i} className="bg-white/10 p-8 rounded-2xl">
                  <p className="text-lg">{item}</p>
                </div>
              ))}

            </div>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}