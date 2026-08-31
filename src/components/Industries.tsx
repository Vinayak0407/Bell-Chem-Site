import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <Reveal key={index} index={index} className="h-full">
                <Card className="card-shimmer group h-full border-0 shadow-soft hover:shadow-professional transition-all duration-300 hover:-translate-y-2 bg-card">
                  <CardHeader className="text-center pb-4">
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{industry.icon}</div>
                    <CardTitle className="text-xl font-semibold text-foreground">{industry.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {industry.description}
                    </CardDescription>
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
