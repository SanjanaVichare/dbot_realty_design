import heroBuilding from "@/assets/image.png";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full flex items-center overflow-hidden">

      {/* 🖼 Background Image */}
      <img
        src={heroBuilding}
        alt="DBOT Realty"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* 🌑 Base overlay */}
      <div className="absolute inset-0 bg-[#D5F2A0]/10 z-0" />

      {/* 🌿 Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#001240]/80 via-[#1A1A2E]/70 to-[#0E55A5]/50 z-10" />
      {/* CONTENT */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 lg:px-12 flex items-center min-h-screen">

        <div className="max-w-2xl">

          {/* Tag */}
          <div className="inline-flex items-center gap-2 bg-[#E0EBFA]/20 backdrop-blur-md rounded-full px-4 py-1.5 mb-6">
            <div className="w-2 h-2 bg-[#56A018] rounded-full" />
            <span className="text-xs uppercase tracking-widest text-white/80">
              Real Estate Advisory
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            Bringing Discipline to <br />
            Real Estate Capital &{" "}
            <span className="text-[#56A018]">Execution</span>
          </h1>

          {/* Description */}
          <p className="text-[#E0EBFA]/80 text-lg mb-8 max-w-xl">
            DBOT is a fast-growing Real Estate Advisory firm focused on
            financial discipline and structured execution.
          </p>

          {/* CTA */}
          <div className="flex items-center gap-4">
            <a
              href="#services"
              className="bg-[#0E55A5] hover:bg-[#56A018] text-white px-7 py-3 rounded-full font-medium transition-all duration-300 shadow-lg"
            >
              View Services
            </a>
          </div>

        </div>

      </div>

    </section>
  );
}