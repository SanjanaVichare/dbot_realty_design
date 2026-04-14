import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { useState } from "react";

const offices = [
  { city: "Mumbai (HQ)", address: "Level 12, One BKC, Bandra Kurla Complex, Mumbai 400051", phone: "+91 22 4050 1234" },
  { city: "Delhi NCR", address: "DLF Cyber City, Tower B, Gurugram 122002", phone: "+91 124 456 7890" },
  { city: "Bangalore", address: "Embassy Golf Links, Domlur, Bangalore 560071", phone: "+91 80 4567 8901" },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  return (
    <>
      <Navbar />
      <main className="pt-12">
        <section className="py-6 bg-background">
          <div className="container mx-auto px-1 lg:px-6">
            <p className="text-sm font-medium tracking-[0.2em] uppercase text-muted-foreground mb-1">Get In Touch</p>
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-foreground leading-tight">
              Contact Us<span className="text-accent">.</span>
            </h1>
          </div>
        </section>

        <section className="py-10 bg-secondary/30">
          <div className="container mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <FormSection formData={formData} setFormData={setFormData} />
            </div>
            {/* Offices */}
            <div>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-8">Our Offices</h2>
              <div className="space-y-6">
                {offices.map((o, i) => (
                  <OfficeCard key={i} {...o} index={i} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function FormSection({ formData, setFormData }: { formData: any; setFormData: any }) {
  const { ref, isVisible } = useScrollAnimation();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div ref={ref} className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
      <h2 className="text-2xl font-heading font-bold text-foreground mb-8">Send a Message</h2>
      <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full px-5 py-4 rounded-xl bg-background border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
          />
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            className="w-full px-5 py-4 rounded-xl bg-background border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
          />
        </div>
        <input
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Subject"
          className="w-full px-5 py-4 rounded-xl bg-background border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows={5}
          className="w-full px-5 py-4 rounded-xl bg-background border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all resize-none"
        />
        <button
          type="submit"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium text-sm hover:bg-accent hover:text-accent-foreground transition-all duration-300"
        >
          Send Message <Send size={14} />
        </button>
      </form>
    </div>
  );
}

function OfficeCard({ city, address, phone, index }: { city: string; address: string; phone: string; index: number }) {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <div
      ref={ref}
      className={`bg-background rounded-2xl p-6 border border-border/50 hover-lift transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <h3 className="font-heading font-semibold text-foreground text-lg mb-3">{city}</h3>
      <p className="text-sm text-muted-foreground flex items-start gap-2 mb-2">
        <MapPin size={14} className="mt-0.5 flex-shrink-0" /> {address}
      </p>
      <p className="text-sm text-muted-foreground flex items-center gap-2">
        <Phone size={14} /> {phone}
      </p>
    </div>
  );
}
