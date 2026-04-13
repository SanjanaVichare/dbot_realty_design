import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState } from "react";

const cities = [
  {
    name: "Mumbai",
    state: "Maharashtra",
    projects: 18,
    value: "₹3.2B",
    lat: 19.076,
    lng: 72.8777,
    highlights: [
      "Luxury residential towers",
      "Coastal ESG projects",
      "Mixed-use developments",
    ],
  },
  {
    name: "Delhi NCR",
    state: "NCR",
    projects: 14,
    value: "₹2.8B",
    lat: 28.6139,
    lng: 77.209,
    highlights: [
      "Smart city consulting",
      "Commercial feasibility",
      "Govt. advisory mandates",
    ],
  },
  {
    name: "Bangalore",
    state: "Karnataka",
    projects: 12,
    value: "₹1.9B",
    lat: 12.9716,
    lng: 77.5946,
    highlights: [
      "Tech park valuations",
      "ESG compliance",
      "Residential high-rises",
    ],
  },
  {
    name: "Kolkata",
    state: "West Bengal",
    projects: 5,
    value: "₹0.6B",
    lat: 22.5726,
    lng: 88.3639,
    highlights: ["Heritage zone advisory", "Financial modelling"],
  },
];

export default function IndiaMapSection() {
  const { ref } = useScrollAnimation();
  const [active, setActive] = useState(cities[0]);

  const mapSrc = `https://maps.google.com/maps?q=${active.lat},${active.lng}&z=12&output=embed`;

  return (
    <section className="snap-start h-screen w-full bg-[#F4F7FC] flex flex-col">

      {/* HEADER */}
      <div className="px-8 lg:px-16 pt-16 pb-8 flex justify-between items-end">
        <h2 className="text-4xl md:text-5xl font-bold text-[#0E55A5]">
          Where we operate<span className="text-[#56A018]">.</span>
        </h2>

        <div className="flex gap-8">
          <div className="text-center">
            <p className="text-3xl font-bold text-[#0E55A5]">
              {cities.length}
            </p>
            <p className="text-xs uppercase text-[#0E55A5]/50">Cities</p>
          </div>

          <div className="w-px bg-[#0E55A5]/10" />

          <div className="text-center">
            <p className="text-3xl font-bold text-[#0E55A5]">
              {cities.reduce((a, c) => a + c.projects, 0)}+
            </p>
            <p className="text-xs uppercase text-[#0E55A5]/50">Projects</p>
          </div>
        </div>
      </div>

      {/* MAIN FULL HEIGHT */}
      <div
        ref={ref}
        className="flex flex-1 w-full overflow-hidden border-t border-[#0E55A5]/10"
      >
        {/* LEFT PANEL */}
        <div className="w-[280px] bg-[#0E55A5] text-white flex flex-col">
          <div className="px-5 py-4 text-xs uppercase tracking-widest text-white/60 border-b border-white/10">
            Select City
          </div>

          <div className="flex-1 overflow-y-auto">
            {cities.map((city) => {
              const isAct = active.name === city.name;

              return (
                <button
                  key={city.name}
                  onClick={() => setActive(city)}
                  className={`w-full flex items-center gap-4 px-5 py-4 border-b border-white/10 transition ${isAct ? "bg-[#08306b]" : ""
                    }`}
                >
                  <div
                    className={`w-2 h-2 rounded-full ${isAct ? "bg-[#D5F2A0]" : "bg-white/30"
                      }`}
                  />

                  <div className="flex-1 text-left">
                    <p className="text-sm font-bold">{city.name}</p>
                    <p className="text-xs text-white/60">{city.state}</p>
                  </div>

                  <div className="text-right">
                    <p className="text-sm font-bold text-[#D5F2A0]">
                      {city.projects}
                    </p>
                    <p className="text-xs text-white/40">proj</p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* MAP FULL FILL */}
        <div className="flex-1 relative">
          <iframe
            key={active.name}
            src={mapSrc}
            className="absolute inset-0 w-full h-full"
            style={{ border: 0 }}
            loading="lazy"
          />

          {/* OVERLAY */}
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-white/95 to-transparent">
            <div className="flex justify-between flex-wrap gap-4">
              <div>
                <p className="text-xs uppercase text-[#56A018] mb-1">
                  {active.state}
                </p>
                <h3 className="text-2xl font-bold text-[#0E55A5] mb-3">
                  {active.name}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {active.highlights.map((h) => (
                    <span
                      key={h}
                      className="text-xs px-3 py-1 rounded-full bg-[#0E55A5]/10 text-[#0E55A5]/70"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-6">
                <div className="text-center">
                  <p className="text-2xl font-bold text-[#0E55A5]">
                    {active.projects}
                  </p>
                  <p className="text-xs uppercase text-[#0E55A5]/50">
                    Projects
                  </p>
                </div>

                <div className="w-px bg-[#0E55A5]/10" />

                <div className="text-center">
                  <p className="text-2xl font-bold text-[#0E55A5]">
                    {active.value}
                  </p>
                  <p className="text-xs uppercase text-[#0E55A5]/50">
                    Value
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}