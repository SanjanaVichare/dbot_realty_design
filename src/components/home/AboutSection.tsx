import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import worker1 from "@/assets/project-1.jpg"; // replace later
import worker2 from "@/assets/project-2.jpg";

const stories = [
  {
    title: "Why We Began",
    text: "Founded with a vision to bring financial discipline and structured execution to India's real estate landscape.",
  },
  {
    title: "How We Work",
    text: "We combine deep industry expertise with data-driven methodologies and milestone-driven execution.",
  },
  {
    title: "Where We're Going",
    text: "Expanding across India with a focus on ESG, transparency, and high-performance project delivery.",
  },
];

export default function AboutSection() {
  const [active, setActive] = useState(0);
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="w-full bg-[#F4F7FC] py-20">
      <div className="max-w-[1300px] mx-auto px-6 lg:px-12 grid md:grid-cols-[1.1fr_0.9fr] gap-6 lg:gap-8 items-center">

        {/* LEFT CONTENT */}
        <div
          ref={ref}
          className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >

          <div className="bg-white/60 backdrop-blur-sm border border-[#E0EBFA] rounded-2xl p-6 lg:p-8 shadow-sm">
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-[#001240] mb-6">
              Why <span className="text-[#0E55A5]">Choose Us?</span>
            </h2>


            {/* Accordion Cards */}
            <div className="space-y-4">
              {stories.map((item, i) => (
                <div
                  key={i}
                  onClick={() => setActive(i)}
                  className={`cursor-pointer rounded-xl p-5 transition-all duration-300 border ${active === i
                    ? "bg-white shadow-md border-[#E0EBFA]"
                    : "bg-[#E0EBFA]/50 border-transparent hover:bg-[#E0EBFA]"
                    }`}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-[#001240] font-semibold">
                      {item.title}
                    </h3>
                    <div
                      className={`w-6 h-6 flex items-center justify-center rounded-full text-white text-xs ${active === i ? "bg-[#56A018]" : "bg-[#0E55A5]"
                        }`}
                    >
                      {active === i ? "−" : "+"}
                    </div>
                  </div>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${active === i ? "max-h-40 mt-3" : "max-h-0"
                      }`}
                  >
                    <p className="text-sm text-[#1A1A2E]/80 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT IMAGES */}
        <div className="relative flex justify-end">
          {/* Main Image */}
          <img
            src={worker1}
            className="w-[85%] h-[440px] object-cover rounded-2xl shadow-lg"
          />

          {/* Small Floating Image */}
          <img
            src={worker2}
            className="absolute top-6 right-0 w-[45%] h-[180px] object-cover rounded-xl shadow-md"
          />
        </div>
      </div>
    </section>
  );
}