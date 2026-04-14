import Navbar from "@/components/Navbar";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import ServicesSection from "@/components/home/ServicesSection";
import FeaturedProjectsSection from "@/components/home/FeaturedProjectsSection";
import FootprintSection from "@/components/home/FootprintSection";
import IndiaMapSection from "@/components/home/IndiaMapSection";
import TrustedBySection from "@/components/home/TrustedBySection";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <>
      <Navbar />

      {/* Scroll Container */}
      <main className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">

        {/* HERO (full impact, no extra padding) */}
        <section className="snap-start min-h-screen flex items-center">
          <HeroSection />
        </section>

        {/* ABOUT */}
        <section className="snap-start min-h-screen flex items-center">
          <AboutSection />
        </section>

        {/* SERVICES */}
        <section className="snap-start h-screen py-2 flex items-start">
          <ServicesSection />
        </section>

        {/* FOOTPRINT / STATS */}
        <section className="snap-start h-screen flex items-center">
          <FootprintSection />
        </section>

        {/* INDIA MAP */}
        <section className="snap-start min-h-screen flex items-center">
          <IndiaMapSection />
        </section>

        {/* FEATURED PROJECTS */}
        <section className="snap-start min-h-screen py-2 flex items-center">
          <FeaturedProjectsSection />
        </section>

        {/* FOOTER */}
        <section className="snap-start min-h-screen flex flex-col justify-end pt-20">
          <Footer />
        </section>

      </main>
    </>
  );
}