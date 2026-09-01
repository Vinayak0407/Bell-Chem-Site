import { Card, CardContent } from "@/components/ui/card";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

const industries = [
  {
    title: "Textile",
    description: "Comprehensive range of dyes and chemicals for cotton, polyester, wool, and silk processing with superior color fastness.",
    icon: "🧵"
  },
  {
    title: "Printing",
    description: "High-performance dyes for vibrant printing, superior color fastness, and precise shade reproduction.",
    icon: "🖨️"
  },
  {
    title: "Paint & Coatings",
    description: "Specialty pigments and additives for automotive, architectural, and industrial coating applications.",
    icon: "🎨"
  },
  {
    title: "Paper & Pulp",
    description: "Eco-friendly chemicals for paper bleaching, sizing, and coating processes with minimal environmental impact.",
    icon: "📄"
  },
  {
    title: "Leather Processing",
    description: "Complete range of chemicals for tanning, dyeing, and finishing leather products with consistent quality.",
    icon: "👜"
  },
  {
    title: "Surfactants",
    description: "High-performance surfactants for enhanced cleaning, emulsification, and industrial formulation efficiency.",
    icon: "🧴"
  }
];

const Industries = () => {
  return (
    <>
      <PageHero
        title="Industries We Serve"
        description="Trusted partner for leading companies across diverse industries, delivering tailored chemical solutions that drive efficiency and innovation."
      />

      <section id="industries" className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <Reveal key={index} index={index} className="h-full">
                <Card className="card-shimmer group h-full border border-border shadow-soft hover:shadow-professional transition-all duration-300 hover:-translate-y-1 bg-card">
                  <CardContent className="p-8 flex items-start gap-6">
                    <div className="shrink-0 w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-4xl group-hover:scale-110 transition-transform">
                      {industry.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">{industry.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {industry.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Industries;
