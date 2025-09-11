import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const products = [
    {
      title: "Textile Dyes",
      description: "Premium quality reactive, disperse, and acid dyes for textile industries with excellent fastness properties.",
      icon: "🎨"
    },
    {
      title: "Industrial Chemicals",
      description: "High-grade chemicals for pharmaceutical, textile, and manufacturing applications with strict quality control.",
      icon: "⚗️"
    },
    {
      title: "Specialty Chemicals",
      description: "Custom formulated chemicals for specific industrial processes and applications.",
      icon: "🧪"
    },
    {
      title: "Pharmaceutical Intermediates",
      description: "API intermediates and fine chemicals for pharmaceutical manufacturing with GMP compliance.",
      icon: "💊"
    }
  ];

  return (
    <section id="products" className="py-16 lg:py-24 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Products</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive range of high-quality chemicals and dyes for various industries with international standards.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="border-0 shadow-soft hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="text-4xl mb-4">{product.icon}</div>
                <CardTitle className="text-xl">{product.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center leading-relaxed">
                  {product.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;