import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle, Star, Award } from "lucide-react";
import { Link } from "react-router-dom";
import chemicalLab from "@/assets/chemical-lab.jpg";

const IndustrialChemicals = () => {
  const products = [
    {
      name: "Sodium Hydroxide (NaOH)",
      description: "High-purity caustic soda for industrial applications",
      specifications: ["Purity: 99.5%", "Grade: Industrial", "Packaging: Bulk"],
      applications: ["Textile Processing", "Chemical Manufacturing", "Water Treatment"]
    },
    {
      name: "Acetic Acid (CH3COOH)",
      description: "Acetic acid for industrial use",
      specifications: ["Concentration: 32-37%", "Grade: Technical", "Packaging: Bulk"],
      applications: ["Chemical Synthesis", "Metal Treatment", "pH Control"]
    },
    {
      name: "Sulfuric Acid (H2SO4)",
      description: "High-grade sulfuric acid for various industrial processes",
      specifications: ["Concentration: 98%", "Grade: Technical", "Packaging: Bulk"],
      applications: ["Chemical Manufacturing", "Fertilizer Production", "Metal Processing"]
    },
    {
      name: "Zinc Oxide (ZnO)",
      description: "Aqueous ammonia solution for industrial applications",
      specifications: ["Concentration: 25-30%", "Grade: Technical", "Packaging: Bulk"],
      applications: ["Chemical Synthesis", "Water Treatment", "Textile Processing"]
    }
  ];

  const features = [
    "Strict quality control processes",
    "ISO 9001:2015 certified",
    "Bulk packaging options",
    "Technical support available",
    "Consistent batch-to-batch quality",
    "REACH compliance for European markets"
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center space-x-4">
            <Link to="/products">
              <Button variant="ghost" size="sm" className="flex items-center space-x-2">
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Products</span>
              </Button>
            </Link>
            <div className="h-6 w-px bg-gray-300" />
            <h1 className="text-2xl font-bold text-gray-900">Industrial Chemicals</h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
        <div
  className="
    p-6 rounded-2xl 
    bg-black/30 backdrop-blur-md 
    border border-white/20 
    shadow-[0_0_25px_rgba(0,0,0,0.3)]
    space-y-4
  "
>

  {/* Title Row INSIDE the Box */}
  <div className="flex items-center space-x-2 mb-4">
    <div className="text-3xl">⚗️</div>
    <h2 className="text-3xl font-bold text-white">Industrial Chemicals</h2>
  </div>

  <p className="text-xl text-white leading-relaxed mb-6">
    High-grade chemicals for textile and manufacturing applications with strict 
    quality control. Our industrial chemicals meet international standards and 
    are manufactured using cutting-edge technology.
  </p>

  <div className="space-y-4 text-white">
    <div className="flex items-center space-x-3">
      <Star className="h-5 w-5 text-yellow-300 fill-current" />
      <span>Premium Quality</span>
    </div>

    <div className="flex items-center space-x-3">
      <Award className="h-5 w-5 text-blue-400" />
      <span>ISO Certified</span>
    </div>
  </div>

</div>

          
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img 
                src={chemicalLab}
                alt="Industrial chemicals in laboratory setting"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Key Features</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Products */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Some of our Industrial Chemical Products</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <Card key={index} className="shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">{product.name}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Specifications:</h4>
                    <ul className="space-y-1">
                      {product.specifications.map((spec, specIndex) => (
                        <li key={specIndex} className="text-sm text-gray-600 flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Applications:</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.applications.map((app, appIndex) => (
                        <span key={appIndex} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-blue-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Need Custom Industrial Chemicals?</h3>
          <p className="text-gray-600 mb-6">
            Contact our technical team for custom formulations and technical support.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IndustrialChemicals;


