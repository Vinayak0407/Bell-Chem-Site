import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Building2, Award, Phone } from "lucide-react";

const HomeOverview = () => {
  const overviewSections = [
    {
      title: "About Bell Chem",
      description: "Discover our 40+ years of excellence in chemical manufacturing, our commitment to quality, and our journey from a modest beginning to becoming India's trusted partner.",
      icon: <Building2 className="w-8 h-8 text-primary" />,
      link: "/about",
      linkText: "Learn More About Us",
      stats: [
        { label: "Years Experience", value: "40+" },
        { label: "Products", value: "1000+" },
        { label: "Happy Clients", value: "200+" }
      ]
    },
    {
      title: "Our Products",
      description: "Explore our comprehensive range of industrial dyes and chemicals. From reactive dyes to specialty chemicals, we provide solutions for diverse industrial applications.",
      icon: <Award className="w-8 h-8 text-primary" />,
      link: "/products",
      linkText: "View All Products",
      stats: [
        { label: "Dye Categories", value: "4" },
        { label: "Chemical Types", value: "4" },
        { label: "Industries Served", value: "6+" }
      ]
    },
    {
      title: "Industries We Serve",
      description: "We serve leading companies across diverse industries including textile manufacturing, pharmaceutical, paint & coatings, and more with tailored solutions.",
      icon: <Users className="w-8 h-8 text-primary" />,
      link: "/industries",
      linkText: "Explore Industries",
      stats: [
        { label: "Textile", value: "✓" },
        { label: "Pharmaceutical", value: "✓" },
        { label: "Coatings", value: "✓" }
      ]
    }
  ];

  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Why Choose <span className="bg-gradient-primary bg-clip-text text-transparent">Bell Chem</span>
          </h2>
          <p className="text-xl text-primary max-w-3xl mx-auto leading-relaxed">
            Four decades of expertise, innovation, and commitment to quality make us the preferred choice for chemical solutions across India.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {overviewSections.map((section, index) => (
            <Card key={index} className="group border-0 shadow-soft hover:shadow-professional transition-all duration-300 hover:-translate-y-2 bg-white">
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  {section.icon}
                </div>
                <CardTitle className="text-2xl font-semibold text-gray-900">{section.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-6">
                <CardDescription className="text-primary leading-relaxed text-lg">
                  {section.description}
                </CardDescription>
                
                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
                  {section.stats.map((stat, statIndex) => (
                    <div key={statIndex} className="text-center">
                      <div className="text-lg font-bold text-primary">{stat.value}</div>
                      <div className="text-xs text-primary">{stat.label}</div>
                    </div>
                  ))}
                </div>
                
                <Link to={section.link}>
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-colors">
                    {section.linkText}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white rounded-2xl p-8 shadow-soft">
          <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-primary mb-6 max-w-2xl mx-auto">
            Contact our team today for a consultation and discover how Bell Chem can provide the perfect chemical solutions for your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white shadow-elegant">
                <Phone className="w-5 h-5 mr-2" />
                Contact Us Now
              </Button>
            </Link>
            <Link to="/products">
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white">
                View Product Catalog
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeOverview;
