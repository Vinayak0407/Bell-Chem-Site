import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle, Star, Award } from "lucide-react";
import { Link } from "react-router-dom";
import solventDyesImage from "@/assets/solvent-dyes.jpg";

const SolventDyes = () => {
  const products = [
    {
      name: "Solvent Yellow",
      description: "High-solubility yellow dye with excellent transparency and heat stability.",
      specifications: [
        "Solubility: High in organic solvents",
        "Heat Stability: 220–260°C",
        "Light Fastness: 4–5",
        "Shade: Bright yellow"
      ],
      applications: ["Plastics", "Wax Coatings", "Polishes", "Fuel Coloring", "Inkjet Inks"]
    },
    {
      name: "Solvent Red",
      description: "Strong red solvent dye offering clean shades and excellent migration resistance.",
      specifications: [
        "Solubility: Excellent in hydrocarbons",
        "Heat Stability: 240–280°C",
        "Light Fastness: 5–6",
        "Shade: Deep red"
      ],
      applications: ["PVC", "Rubber", "Polystyrene", "Candles", "Industrial Coatings"]
    },
    {
      name: "Solvent Blue",
      description: "Brilliant blue dye with outstanding clarity and durability in solvent-based systems.",
      specifications: [
        "Solubility: High",
        "Heat Stability: 200–240°C",
        "Light Fastness: 6",
        "Shade: Bright blue"
      ],
      applications: ["Acrylic Resins", "Printing Inks", "Petroleum Products", "Masterbatches"]
    },
    {
      name: "Solvent Green",
      description: "Versatile green dye widely used for plastics, waxes, and fuels.",
      specifications: [
        "Solubility: Excellent",
        "Heat Stability: 230–270°C",
        "Light Fastness: 5–6",
        "Shade: Deep green"
      ],
      applications: ["Fuel Dyes", "Polyolefins", "Candles", "Adhesives", "Industrial Solvents"]
    }
  ];

  const features = [
    "Exceptional solubility in organic solvents",
    "High thermal stability for industrial applications",
    "Bright and transparent color tones",
    "Excellent compatibility with plastics, waxes, and resins",
    "Non-bleeding, non-migrating formulations",
    "Long-lasting shade consistency"
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
            <h1 className="text-2xl font-bold text-gray-900">Solvent Dyes</h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Intro Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-3xl">💧</div>
              <h2 className="text-3xl font-bold text-gray-900">Solvent Dyes</h2>
            </div>

            <p className="text-lg text-gray-600 mb-6">
              High-performance solvent dyes engineered for superior solubility, transparency,
              and durability across plastics, petroleum, wax, and ink applications.
            </p>

            <div className="flex items-center space-x-4 mb-6">
              <div className="flex items-center space-x-1">
                <Star className="h-5 w-5 text-yellow-400" />
                <span className="text-sm font-medium">Premium Quality</span>
              </div>
              <div className="flex items-center space-x-1">
                <Award className="h-5 w-5 text-blue-500" />
                <span className="text-sm font-medium">Industry Trusted</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img 
                src={solventDyesImage}
                alt="Solvent dyes in different shades"
                className="w-full h-[350px] object-cover"
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
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Products */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Some of our Solvent Dye Products</h3>
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
                      {product.specifications.map((spec, i) => (
                        <li key={i} className="text-sm text-gray-600 flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Applications:</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.applications.map((app, i) => (
                        <span key={i} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
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
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Need Custom Solvent Shades?</h3>
          <p className="text-gray-600 mb-6">
            We specialize in tailor-made solvent dye formulations for plastics, wax, inks, and petroleum products.
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

export default SolventDyes;
