import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle, Star, Award } from "lucide-react";
import { Link } from "react-router-dom";
import pigmentDyesImage from "@/assets/PigmentDyes.jpg";

const PigmentDyes = () => {
  const products = [
    {
      name: "Pigment Red",
      description: "High-performance red pigment offering strong opacity, brightness, and excellent heat stability.",
      specifications: [
        "Heat Stability: 250–300°C",
        "Light Fastness: 6–7",
        "Tinting Strength: High",
        "Particle Size: 0.2–0.5 µm"
      ],
      applications: ["Paints", "Inks", "Plastics", "Textile Printing", "Coatings"]
    },
    {
      name: "Pearl Pigment",
      description: "Strong, stable pearl pigment known for excellent dispersion and weather resistance.",
      specifications: [
        "Heat Stability: 260–300°C",
        "Light Fastness: 7–8",
        "Opacifying Power: High",
        "Particle Size: 0.1–0.3 µm"
      ],
      applications: ["Masterbatches", "Decorative Paints", "Inkjet Inks", "Industrial Coatings"]
    },
    {
      name: "Pigment Orange",
      description: "Bright orange pigment with superb brightness and excellent fastness properties.",
      specifications: [
        "Heat Stability: 240–280°C",
        "Light Fastness: 6",
        "Migration Resistance: High",
        "Particle Size: 0.3–0.6 µm"
      ],
      applications: ["PVC Coloring", "Printing Inks", "Powder Coatings", "Textile Prints"]
    },
    {
      name: "Pigment Black",
      description: "Deep black pigment with high jetness and uniform dispersion quality.",
      specifications: [
        "Heat Stability: 280–320°C",
        "Light Fastness: 8",
        "Jetness: High",
        "Particle Size: 0.02–0.1 µm"
      ],
      applications: ["Rubber", "Plastics", "Paints", "Automotive Coatings", "Inks"]
    }
  ];

  const features = [
    "High dispersion quality for smooth finishes",
    "Excellent thermal and UV stability",
    "Wide compatibility with paints, inks, plastics and coatings",
    "Strong tinting strength with long-lasting shades",
    "Low particle size for superior consistency",
    "Non-migratory, weather-resistant formulations"
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
            <h1 className="text-2xl font-bold text-gray-900">Pigment Colors</h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Intro Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            {/* Pigment Colors Section */}
<div>
  
  {/* Title Row */}

  


  {/* Black Glass Box */}
  <div
  className="
    p-6 rounded-2xl 
    bg-black/30 backdrop-blur-md 
    border border-white/20 
    shadow-[0_0_25px_rgba(0,0,0,0.3)]
    space-y-4
  "
>

  {/* Title Row INSIDE the Glass Box */}
  <div className="flex items-center space-x-2 mb-4">
    <div className="text-3xl">🖌️</div>
    <h2 className="text-3xl font-bold text-white">Pigment Colors</h2>
  </div>

  <p className="text-xl text-white leading-relaxed mb-6">
    High-performance pigment powders engineered for maximum opacity, dispersion, 
    and shade consistency across paints, inks, plastics, coatings, and textile 
    printing applications.
  </p>

  <div className="space-y-4 text-white">
    <div className="flex items-center space-x-3">
      <Star className="h-5 w-5 text-yellow-300 fill-current" />
      <span>Premium Quality</span>
    </div>

    <div className="flex items-center space-x-3">
      <Award className="h-5 w-5 text-blue-400" />
      <span>Industry Approved</span>
    </div>
  </div>

</div>

</div>

          </div>

          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img 
                src={pigmentDyesImage}
                alt="Pigment dyes in various shades"
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
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Products */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Some of our Pigment Color Products</h3>
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
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Need Custom Pigment Shades?</h3>
          <p className="text-gray-600 mb-6">
            Our technical team can assist with shade matching, dispersion optimization, and custom pigment formulations.
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

export default PigmentDyes;
