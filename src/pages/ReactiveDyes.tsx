import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle, Star, Award } from "lucide-react";
import { Link } from "react-router-dom";
import textileDyes from "@/assets/textile-dyes.jpg";

const ReactiveDyes = () => {
  const products = [
    {
      name: "Reactive Red HE-3B",
      description: "High-strength reactive red dye for cotton with excellent wash fastness",
      specifications: ["Wash Fastness: 4-5", "Light Fastness: 5-6", "pH Range: 6-8"],
      applications: ["Cotton", "Viscose", "Linen"]
    },
    {
      name: "Reactive Blue HE-R",
      description: "Brilliant blue reactive dye with superior migration resistance",
      specifications: ["Wash Fastness: 4-5", "Light Fastness: 6", "pH Range: 6-8"],
      applications: ["Cotton", "Viscose", "Blends"]
    },
    {
      name: "Reactive Yellow HE-4G",
      description: "Bright yellow reactive dye with excellent leveling properties",
      specifications: ["Wash Fastness: 4-5", "Light Fastness: 5-6", "pH Range: 6-8"],
      applications: ["Cotton", "Viscose", "Linen"]
    },
    {
      name: "Reactive Black HE-2B",
      description: "Deep black reactive dye with outstanding color depth",
      specifications: ["Wash Fastness: 4-5", "Light Fastness: 5-6", "pH Range: 6-8"],
      applications: ["Cotton", "Viscose", "Blends"]
    }
  ];

  const features = [
    "Excellent wash fastness properties",
    "Superior color strength and brightness",
    "Good migration resistance",
    "Wide pH range compatibility",
    "Environmentally friendly formulation",
    "Consistent batch-to-batch quality"
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
            <h1 className="text-2xl font-bold text-gray-900">Reactive Dyes</h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-3xl">🎨</div>
              <h2 className="text-3xl font-bold text-gray-900">Reactive Dyes</h2>
            </div>
            <p className="text-lg text-gray-600 mb-6">
              High-quality reactive dyes for cotton and cellulosic fibers with excellent wash fastness 
              and brilliant colors. Our reactive dyes are formulated to provide superior performance 
              in textile applications.
            </p>
            <div className="flex items-center space-x-4 mb-6">
              <div className="flex items-center space-x-1">
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <span className="text-sm font-medium">Premium Quality</span>
              </div>
              <div className="flex items-center space-x-1">
                <Award className="h-5 w-5 text-blue-500" />
                <span className="text-sm font-medium">ISO Certified</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img 
                src={textileDyes}
                alt="Reactive dyes in various colors"
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
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Our Reactive Dye Products</h3>
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
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Need Custom Reactive Dyes?</h3>
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

export default ReactiveDyes;

