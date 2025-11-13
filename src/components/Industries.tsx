import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Industries = () => {
  const industries = [
    {
      title: "Textile Manufacturing",
      description: "Comprehensive range of dyes and chemicals for cotton, polyester, wool, and silk processing with superior color fastness.",
      icon: "🧵"
    },
    {
      title: "Pharmaceutical",
      description: "High-purity intermediates and fine chemicals for drug manufacturing with complete regulatory compliance.",
      icon: "🏥"
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
      title: "Water Treatment",
      description: "Advanced chemicals for industrial water treatment, effluent management, and environmental compliance.",
      icon: "💧"
    }
  ];

  return (
    <section id="industries" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Industries <span className="bg-gradient-primary bg-clip-text text-transparent">We Serve</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Trusted partner for leading companies across diverse industries, delivering tailored 
            chemical solutions that drive efficiency and innovation.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <Card key={index} className="group border-0 shadow-soft hover:shadow-professional transition-all duration-300 hover:-translate-y-2 bg-white">
              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{industry.icon}</div>
                <CardTitle className="text-xl font-semibold text-gray-900">{industry.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 leading-relaxed">
                  {industry.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;