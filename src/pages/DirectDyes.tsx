import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle, Star, Award } from "lucide-react";
import { Link } from "react-router-dom";
import textileDyes from "@/assets/textile-dyes.jpg";

const DirectDyes = () => {
  const products = [
    {
      name: "Direct Red 28",
      description: "Cost-effective direct red dye for cellulosic fibers with good color yield",
      specifications: ["Wash Fastness: 3-4", "Light Fastness: 4-5", "pH Range: 7-9"],
      applications: ["Cotton", "Viscose", "Linen"]
    },
    {
      name: "Direct Blue 1",
      description: "Versatile direct blue dye with excellent application properties",
      specifications: ["Wash Fastness: 3-4", "Light Fastness: 4-5", "pH Range: 7-9"],
      applications: ["Cotton", "Viscose", "Blends"]
    },
    {
      name: "Direct Yellow 4",
      description: "Bright yellow direct dye with good leveling characteristics",
      specifications: ["Wash Fastness: 3-4", "Light Fastness: 4-5", "pH Range: 7-9"],
      applications: ["Cotton", "Viscose", "Linen"]
    },
    {
      name: "Direct Black 38",
      description: "Deep black direct dye with excellent color depth",
      specifications: ["Wash Fastness: 3-4", "Light Fastness: 4-5", "pH Range: 7-9"],
      applications: ["Cotton", "Viscose", "Blends"]
    }
  ];

  const features = [
    "Cost-effective solution",
    "Good color yield and brightness",
    "Easy application process",
    "Wide pH range compatibility",
    "Environmentally compliant",
    "Consistent quality standards"
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
            <h1 className="text-2xl font-bold text-gray-900">Direct Dyes</h1>
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
    <div className="text-3xl">🎪</div>
    <h2 className="text-3xl font-bold text-white">Direct Dyes</h2>
  </div>

  <p className="text-xl text-white leading-relaxed mb-6">
    Cost-effective direct dyes for cellulosic fibers with good color yield and 
    application versatility. Our direct dyes offer excellent value for money 
    while maintaining consistent quality standards.
  </p>

  <div className="space-y-4 text-white">
    <div className="flex items-center space-x-3">
      <Star className="h-5 w-5 text-yellow-300 fill-current" />
      <span>Cost Effective</span>
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
                src={textileDyes}
                alt="Direct dyes in various colors"
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
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Some of our Direct Dye Products</h3>
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
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Need Custom Direct Dyes?</h3>
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

export default DirectDyes;

