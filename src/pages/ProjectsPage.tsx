import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState } from "react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const categories = ["All", "PMC", "PM", "Consulting", "TDD"];

const projects = [
  { img: project1, title: "Skyline Residences, Mumbai", category: "PMC", sqft: "2.4M", value: "₹450Cr" },
  { img: project2, title: "Tech Tower, Bangalore", category: "PM", sqft: "1.8M", value: "₹320Cr" },
  { img: project3, title: "Green Valley Township, Pune", category: "Consulting", sqft: "5.2M", value: "₹780Cr" },
  { img: project4, title: "Central Hub, Delhi NCR", category: "TDD", sqft: "3.1M", value: "₹520Cr" },
  { img: project1, title: "Lakeside Villas, Hyderabad", category: "PMC", sqft: "1.2M", value: "₹280Cr" },
  { img: project2, title: "Commerce Park, Chennai", category: "PM", sqft: "2.8M", value: "₹410Cr" },
];

export default function ProjectsPage() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      <Navbar />
      <main className="pt-10">
        <section className="py-10 bg-background">
          <div className="container mx-auto px-6 lg:px-8">
            <p className="text-sm font-medium tracking-[0.2em] uppercase text-muted-foreground mb-4">DBOT Footprint</p>
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-foreground leading-tight">
              Our Projects<span className="text-accent">.</span>
            </h1>

            <div className="flex gap-3 mt-10 flex-wrap">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setActive(c)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${active === c ? "bg-accent text-accent-foreground" : "bg-secondary text-muted-foreground hover:bg-secondary/80"
                    }`}
                >
                  {c}
                </button>
              ))}
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((p, i) => (
                <ProjectCard key={`${p.title}-${i}`} {...p} index={i} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function ProjectCard({ img, title, category, sqft, value, index }: { img: string; title: string; category: string; sqft: string; value: string; index: number }) {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <div
      ref={ref}
      className={`group rounded-2xl overflow-hidden bg-background border border-border hover-lift cursor-pointer transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="relative overflow-hidden h-52">
        <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" width={800} height={600} />
        <span className="absolute top-4 left-4 bg-accent text-accent-foreground text-xs font-medium px-3 py-1.5 rounded-full">{category}</span>
      </div>
      <div className="p-6">
        <h3 className="font-heading font-semibold text-foreground text-lg mb-3">{title}</h3>
        <div className="flex gap-6 text-sm text-muted-foreground">
          <span>{sqft} sq ft</span>
          <span>{value}</span>
        </div>
      </div>
    </div>
  );
}
