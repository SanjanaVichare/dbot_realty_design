import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useCountUp } from "@/hooks/useCountUp";
import cityOverlay from "@/assets/city-overlay.jpg";

const logos = [
  "Godrej Properties", "DLF", "Lodha Group", "Prestige", "Sobha",
  "Brigade", "Mahindra Lifespaces", "Tata Housing", "L&T Realty", "Shapoorji",
];

const stats = [
  { value: 48, suffix: "+", label: "Completed Projects" },
  { value: 52, suffix: "+", label: "Ongoing Projects" },
  { value: 18, suffix: "M+", label: "Sq Ft Managed" },
  { value: 2.3, suffix: "B+", label: "₹ Project Value", isDecimal: true },
];

function StatCard({
  value, suffix, label, isDecimal, started,
}: {
  value: number; suffix: string; label: string; isDecimal?: boolean; started: boolean;
}) {
  const count = useCountUp(isDecimal ? 23 : value, 2000, started);

  return (
    <div className="flex flex-col items-center text-center p-8 rounded-2xl border border-white/10 backdrop-blur-sm bg-white/5">
      <p className="text-5xl md:text-6xl font-heading font-bold mb-2 text-white">
        {isDecimal ? (count / 10).toFixed(1) : count}
        <span className="text-[#D5F2A0]">{suffix}</span>
      </p>
      <p className="text-xs tracking-[0.18em] uppercase mt-1 text-white/40">
        {label}
      </p>
    </div>
  );
}

export default function FootprintSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="h-screen snap-start flex items-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={cityOverlay}
          alt="City skyline"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#001240ee] to-[#001240f5]" />
      </div>

      <div ref={ref} className="relative w-full container mx-auto px-6 lg:px-8">

        {/* Stats */}
        <div className="mb-16 text-center">
          <div className={`mb-10 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>

            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white">
              Numbers that speak<span className="text-[#D5F2A0]">.</span>
            </h2>

            <p className="mt-4 text-sm max-w-md mx-auto text-white/40">
              A track record built on discipline, transparency, and delivery across India's markets.
            </p>
          </div>

          <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            {stats.map((s, i) => (
              <StatCard key={i} {...s} started={isVisible} />
            ))}
          </div>
        </div>

        {/* Trusted By */}
        <div className={`transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>

          <p className="text-center text-xs font-semibold tracking-[0.25em] uppercase text-white/30 mb-8">
            Trusted By Industry Leaders
          </p>

          <div className="relative overflow-hidden">

            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#001240] to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#001240] to-transparent z-10" />

            {/* ONLY marquee (no duplicate UI below anymore) */}
            <div className="flex animate-logo-scroll whitespace-nowrap">
              {[...logos, ...logos].map((name, i) => (
                <span
                  key={i}
                  className="mx-10 text-sm font-heading font-semibold uppercase tracking-widest text-white/25 hover:text-white/60 transition"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}