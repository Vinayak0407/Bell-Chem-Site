import manufacturingFacility from "@/assets/manufacturing-facility.jpg";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";
import TrustBadges from "@/components/TrustBadges";
import { Building2 } from "lucide-react";

const pillars = [
  {
    title: "Quality Excellence",
    description:
      "Rigorous multi-stage quality checks with verified supplier networks. Consistent sourcing standards to ensure purity, performance, and batch reliability. Compliance with global documentation and export requirements.",
  },
  {
    title: "Environmental Responsibility",
    description:
      "Eco-friendly production methods with zero liquid discharge. Commitment to minimizing environmental impact across our supply chain.",
  },
  {
    title: "Innovation Focus",
    description:
      "Customer-centric solutions tailored to textile, chemical, and industrial segments. Continuous expansion of our product portfolio based on industry needs.",
  },
];

const stats = [
  { value: "1000+", label: "Products" },
  { value: "500+", label: "Satisfied Clients" },
  { value: "99%", label: "Quality Assurance" },
  { value: "40+", label: "Years Experience" },
];

const About = () => {
  return (
    <>
      <PageHero
        eyebrow="Since 1984"
        title="About Bell Chem"
        description="Established in 1984, Bell Chem has been India's trusted partner in dyes and chemical supplying for over four decades, delivering excellence through innovation and quality."
        badges={[{ icon: <Building2 className="h-4 w-4" />, label: "An A.K. Jain & Co. Enterprise" }]}
      />

      <section id="about" className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <Reveal className="bg-card rounded-2xl border border-border shadow-soft p-8 space-y-8">
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-foreground">Our Legacy</h2>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  From a modest beginning to becoming one of India's leading chemical supplier and exporter,
                  Bell Chem has consistently evolved with changing industry demands while maintaining
                  our commitment to quality and sustainability.
                </p>

                <div className="space-y-6">
                  {pillars.map((pillar) => (
                    <div key={pillar.title} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-3 shrink-0" />
                      <div>
                        <h3 className="font-semibold text-foreground">{pillar.title}</h3>
                        <p className="text-muted-foreground">{pillar.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={120} animation="scale" className="relative">
              <div className="rounded-2xl overflow-hidden shadow-professional">
                <img
                  src={manufacturingFacility}
                  alt="Bell Chem modern manufacturing facility with advanced equipment"
                  className="w-full h-[400px] object-cover"
                  loading="lazy"
                />
              </div>
            </Reveal>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} index={i} className="text-center p-6 bg-card rounded-xl shadow-soft border border-border hover:shadow-elegant hover:-translate-y-1 transition-all duration-300">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  <CountUp value={stat.value} />
                </div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </Reveal>
            ))}
          </div>

        </div>
      </section>

      <TrustBadges />
    </>
  );
};

export default About;
