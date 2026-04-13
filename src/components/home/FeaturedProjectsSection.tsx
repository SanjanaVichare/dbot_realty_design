import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    img: project1,
    title: "Luxury Residences, Mumbai",
    problem: "Budget overruns and delayed timelines",
    solution: "Structured PMC with milestone tracking",
    result: "Delivered 3 months ahead, 12% cost savings",
  },
  {
    img: project2,
    title: "Tech Park, Bangalore",
    problem: "Complex multi-phase execution",
    solution: "Integrated financial modelling & oversight",
    result: "18M sq ft managed on schedule",
  },
  {
    img: project3,
    title: "Township, Pune",
    problem: "Regulatory compliance gaps",
    solution: "End-to-end due diligence & ESG advisory",
    result: "Zero compliance issues, IGBC certified",
  },
  {
    img: project4,
    title: "Mixed-Use Development, Delhi",
    problem: "Investor confidence deficit",
    solution: "Transparent reporting & valuation consulting",
    result: "₹800Cr funding secured successfully",
  },
];

export default function FeaturedProjectsSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="h-screen snap-start flex items-center overflow-hidden">
      <div ref={ref} className="w-full px-8 lg:px-16">

        {/* Heading */}
        <div className={`mb-10 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-3">
            Case Studies
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Featured Projects<span className="text-primary">.</span>
          </h2>
        </div>

        {/* Accordion */}
        <div className="flex h-[380px] gap-4 w-full">

          {projects.map((p, i) => (
            <div
              key={i}
              className={`
                group relative overflow-hidden rounded-xl cursor-pointer
                transition-all duration-700 ease-in-out
                flex-[1]
                hover:flex-[4]
              `}
            >

              {/* Image */}
              <img
                src={p.img}
                alt={p.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-500" />

              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-4 text-white">

                {/* Title */}
                <h3 className="text-sm md:text-base font-semibold">
                  {p.title}
                </h3>

                {/* Hover Content */}
                <div className="max-h-0 opacity-0 overflow-hidden group-hover:max-h-[200px] group-hover:opacity-100 transition-all duration-500 text-xs space-y-1 mt-2">
                  <p><span className="font-medium">Challenge:</span> {p.problem}</p>
                  <p><span className="font-medium">Solution:</span> {p.solution}</p>
                  <p className="bg-lime-tint/30 inline-block px-2 py-0.5 rounded">
                    {p.result}
                  </p>

                  <div className="flex items-center gap-1 mt-2 text-primary text-xs">
                    View Details <ArrowRight size={12} />
                  </div>
                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}