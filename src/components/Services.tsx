import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      title: "Strategic Consulting",
      description: "Expert guidance to navigate complex business challenges and identify growth opportunities.",
      icon: "🎯"
    },
    {
      title: "Digital Transformation",
      description: "Modernize your operations with cutting-edge technology and streamlined processes.",
      icon: "🚀"
    },
    {
      title: "Innovation Solutions",
      description: "Custom solutions designed to give your business a competitive edge in the market.",
      icon: "💡"
    },
    {
      title: "Growth Strategy",
      description: "Data-driven strategies to accelerate your business growth and market expansion.",
      icon: "📈"
    }
  ];

  return (
    <section id="services" className="py-16 lg:py-24 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We offer comprehensive solutions tailored to your business needs and objectives.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-0 shadow-soft hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="text-4xl mb-4">{service.icon}</div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center leading-relaxed">
                  {service.description}
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