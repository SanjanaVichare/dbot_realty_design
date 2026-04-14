import heroBuilding from "@/assets/image.png";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full flex items-center overflow-hidden">

      {/* Background Image */}
      <img
        src={heroBuilding}
        alt="DBOT Realty"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Main gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#001240]/95 via-[#0E55A5]/65 to-[#56A018]/10 z-10" />

      {/* CONTENT */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-16 py-24 sm:py-28 flex items-center min-h-screen">

        <div className="w-full max-w-xl lg:max-w-2xl">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 border border-[#56A018]/40 backdrop-blur-md rounded-full px-4 py-1.5 mb-5 sm:mb-6">
            <span className="w-2 h-2 rounded-full bg-[#56A018] animate-pulse" />
            <span className="text-[10px] sm:text-xs uppercase tracking-widest text-white/70 font-medium">
              Real Estate Advisory
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-[clamp(28px,5vw,56px)] font-extrabold text-white leading-[1.1] tracking-tight mb-4">
            Bringing Discipline to{" "}
            <br className="hidden sm:block" />
            Real Estate Capital &{" "}
            <span className="text-[#56A018]">Execution</span>
          </h1>

          {/* Description */}
          <p className="text-[#E0EBFA]/70 text-sm sm:text-base lg:text-lg leading-relaxed mb-7 sm:mb-8 max-w-md sm:max-w-lg">
            DBOT is a fast-growing Real Estate Advisory firm focused on
            financial discipline and structured execution.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
            <a
              href="#services"
              className="text-center bg-[#0E55A5] hover:bg-[#56A018] text-white px-7 py-3 rounded-full text-sm font-medium transition-all duration-300 shadow-lg hover:-translate-y-0.5"
            >
              View Services
            </a>
            <a
              href="#about"
              className="text-center border border-white/25 hover:border-[#56A018] text-white/80 hover:text-white px-7 py-3 rounded-full text-sm font-medium transition-all duration-300"
            >
              Learn more →
            </a>
          </div>

        </div>
      </div>
    </section>
  );
} 