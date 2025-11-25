import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle, Star, Award } from "lucide-react";
import { Link } from "react-router-dom";

import OilColorsImage from "@/assets/oil-colors.jpg"; // <-- ADD YOUR IMAGE HERE

const OilColors = () => {
  const products = [
    {
      name: "Oil Red O",
      description: "Bright, oil-soluble red dye suitable for oils, waxes, polishes and hydrocarbon systems.",
      specifications: [
        "Solubility: Excellent in oils & hydrocarbons",
        "Heat Stability: 140–160°C",
        "Light Fastness: 4–5",
        "Shade: Bright Red"
      ],
      applications: ["Oils", "Polishes", "Waxes", "Lubricants", "Coatings"]
    },
    {
      name: "Oil Yellow 3G",
      description: "High-strength yellow oil color with strong brightness and excellent dispersibility.",
      specifications: [
        "Solubility: High in most oils & solvents",
        "Heat Stability: Up to 180°C",
        "Light Fastness: 4",
        "Shade: Golden Yellow"
      ],
      applications: ["Inks", "Oils", "Greases", "Plastic Coloring"]
    },
    {
      name: "Oil Blue N",
      description: "Brilliant blue oil-soluble dye with strong tinting strength and stability.",
      specifications: [
        "Solubility: Excellent in mineral and synthetic oils",
        "Heat Stability: 160–180°C",
        "Light Fastness: 5",
        "Shade: Deep Blue"
      ],
      applications: ["Solvent-based inks", "Plastic coloration", "Industrial lubricants"]
    },
    {
      name: "Oil Green S",
      description: "Stable green oil color widely used in industrial oils and solvent-based formulations.",
      specifications: [
        "Solubility: Very High in oils",
        "Heat Stability: 180–200°C",
        "Light Fastness: 4–5",
        "Shade: Green"
      ],
      applications: ["Oils", "Coatings", "Solvent systems", "Marker inks"]
    }
  ];

  const features = [
    "Excellent solubility in oils & hydrocarbons",
    "High thermal stability and consistent performance",
    "Strong tinting strength with bright, clean shades",
    "Suitable for inks, coatings, polishes and industrial oils",
    "Non-gritty, smooth dispersion quality",
    "Stable under processing conditions"
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
            <h1 className="text-2xl font-bold text-gray-900">Oil Colors</h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Intro Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-3xl">🛢️</div>
              <h2 className="text-3xl font-bold text-gray-900">Oil Colors</h2>
            </div>

            <p className="text-lg text-gray-600 mb-6">
              High-purity oil-soluble colors formulated for consistent performance in oils, 
              solvents, waxes, lubricants, inks, and coatings. Designed for excellent solubility,
              bright shades, and long-term stability in diverse industrial applications.
            </p>

            <div className="flex items-center space-x-4 mb-6">
              <div className="flex items-center space-x-1">
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <span className="text-sm font-medium">Premium Quality</span>
              </div>
              <div className="flex items-center space-x-1">
                <Award className="h-5 w-5 text-blue-500" />
                <span className="text-sm font-medium">Industry Approved</span>
              </div>
            </div>
          </div>

          {/* IMAGE SECTION */}
          <div className="rounded-2xl overflow-hidden shadow-md">
            <img
              src={OilColorsImage}
              alt="Oil Colors"
              className="w-full h-full object-cover"
            />
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
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Some of our Oil Color Products</h3>
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

        {/* CTA */}
        <div className="bg-blue-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Looking for Custom Oil Colors?</h3>
          <p className="text-gray-600 mb-6">
            Connect with our technical team for custom formulations and application support.
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

export default OilColors;
