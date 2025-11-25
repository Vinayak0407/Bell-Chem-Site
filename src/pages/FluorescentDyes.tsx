import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle, Sparkles, Flame } from "lucide-react";
import { Link } from "react-router-dom";
import fluorescentImage from "@/assets/FluorescentDyes.jpg";

const FluorescentDyes = () => {
  const products = [
    {
      name: "Fluorescent Yellow",
      description: "Ultra-bright high-visibility yellow pigment with excellent luminosity and UV reactivity.",
      specifications: [
        "Particle Size: 1–3 µm",
        "Heat Stability: 180–200°C",
        "Light Fastness: Moderate",
        "Form: Fine Powder"
      ],
      applications: ["Textile Printing", "High-Visibility Coatings", "Plastic Coloring", "Inks", "Neon Signages"]
    },
    {
      name: "Fluorescent Pink",
      description: "Intense neon pink shade with excellent dispersion and glowing visual impact.",
      specifications: [
        "Particle Size: 1–3 µm",
        "Heat Stability: 160–190°C",
        "UV Reactivity: High",
        "Form: Fine Powder"
      ],
      applications: ["Fashion Textiles", "Cosmetic Packaging", "Water-Based Inks", "Art Supplies", "Acrylic Paints"]
    },
    {
      name: "Fluorescent Green",
      description: "Bright, vivid neon green with strong opacity and exceptional brightness.",
      specifications: [
        "Particle Size: 1–3 µm",
        "Heat Stability: 170–200°C",
        "Light Fastness: Moderate",
        "Form: Fine Powder"
      ],
      applications: ["Safety Gear", "Plastics", "Posters", "Neon Printing", "Specialty Coatings"]
    },
    {
      name: "Fluorescent Orange",
      description: "High-visibility orange pigment ideal for attention-grabbing designs and safety applications.",
      specifications: [
        "Particle Size: 1–3 µm",
        "Heat Stability: 160–190°C",
        "UV Glow Intensity: High",
        "Form: Fine Powder"
      ],
      applications: ["Road Safety Products", "Advertising Prints", "Inks", "PVC Coloring", "Reflective Textiles"]
    }
  ];

  const features = [
    "High luminance and neon glow under UV light",
    "Excellent dispersion for smooth application",
    "Wide compatibility with inks, plastics, textiles, and coatings",
    "Vivid and long-lasting color brilliance",
    "Strong visual impact for branding and safety uses",
    "Consistent particle size for uniform shade development"
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
            <h1 className="text-2xl font-bold text-gray-900">Fluorescent Dyes</h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Intro Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-3xl"><Sparkles /></div>
              <h2 className="text-3xl font-bold text-gray-900">Fluorescent Dyes</h2>
            </div>

            <p className="text-lg text-gray-600 mb-6">
              High-impact neon dyes engineered to deliver unmatched vibrancy, UV glow, and eye-catching intensity for premium applications.
            </p>

            <div className="flex items-center space-x-4 mb-6">
              <div className="flex items-center space-x-1">
                <Flame className="h-5 w-5 text-orange-500" />
                <span className="text-sm font-medium">Ultra Bright</span>
              </div>
              <div className="flex items-center space-x-1">
                <Sparkles className="h-5 w-5 text-pink-500" />
                <span className="text-sm font-medium">UV Reactive</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src={fluorescentImage}
                alt="Fluorescent neon color pigments"
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
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Some of our Fluorescent Dye Products</h3>
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
                          <div className="w-1.5 h-1.5 bg-pink-500 rounded-full"></div>
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Applications:</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.applications.map((app, appIndex) => (
                        <span key={appIndex} className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm rounded-full">
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
        <div className="bg-purple-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Need Custom Neon Shades?</h3>
          <p className="text-gray-600 mb-6">
            Our experts can develop custom fluorescent shades tailored to your industry requirements.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FluorescentDyes;
