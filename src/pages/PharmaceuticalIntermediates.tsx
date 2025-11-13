import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle, Star, Award } from "lucide-react";
import { Link } from "react-router-dom";
import chemicalLab from "@/assets/chemical-lab.jpg";

const PharmaceuticalIntermediates = () => {
  const products = [
    {
      name: "API Intermediate A",
      description: "High-purity API intermediate for pharmaceutical manufacturing",
      specifications: ["Purity: 99.8%", "Grade: GMP", "Packaging: Controlled"],
      applications: ["Drug Synthesis", "Pharmaceutical Manufacturing", "Research"]
    },
    {
      name: "Fine Chemical B",
      description: "Specialized fine chemical for pharmaceutical applications",
      specifications: ["Purity: 99.5%", "Grade: Pharmaceutical", "Packaging: Controlled"],
      applications: ["API Production", "Drug Formulation", "Research"]
    },
    {
      name: "Synthetic Intermediate C",
      description: "Custom synthetic intermediate for pharmaceutical synthesis",
      specifications: ["Purity: 99.9%", "Grade: GMP", "Packaging: Controlled"],
      applications: ["Drug Development", "API Manufacturing", "Research"]
    },
    {
      name: "Pharmaceutical Grade D",
      description: "Pharmaceutical grade chemical with FDA compliance",
      specifications: ["Purity: 99.95%", "Grade: FDA Approved", "Packaging: Controlled"],
      applications: ["Drug Production", "Pharmaceutical Manufacturing", "Quality Control"]
    }
  ];

  const features = [
    "GMP compliance standards",
    "FDA approved formulations",
    "Controlled packaging environment",
    "Batch traceability",
    "Quality assurance protocols",
    "Regulatory compliance documentation"
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
            <h1 className="text-2xl font-bold text-gray-900">Pharmaceutical Intermediates</h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-3xl">💊</div>
              <h2 className="text-3xl font-bold text-gray-900">Pharmaceutical Intermediates</h2>
            </div>
            <p className="text-lg text-gray-600 mb-6">
              API intermediates and fine chemicals for pharmaceutical manufacturing with GMP compliance. 
              Our pharmaceutical intermediates meet the highest quality standards and regulatory requirements 
              for drug manufacturing.
            </p>
            <div className="flex items-center space-x-4 mb-6">
              <div className="flex items-center space-x-1">
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <span className="text-sm font-medium">GMP Compliant</span>
              </div>
              <div className="flex items-center space-x-1">
                <Award className="h-5 w-5 text-blue-500" />
                <span className="text-sm font-medium">FDA Approved</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img 
                src={chemicalLab}
                alt="Pharmaceutical intermediates in controlled environment"
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
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Our Pharmaceutical Intermediate Products</h3>
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
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Need Custom Pharmaceutical Intermediates?</h3>
          <p className="text-gray-600 mb-6">
            Contact our technical team for custom formulations and regulatory support.
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

export default PharmaceuticalIntermediates;


