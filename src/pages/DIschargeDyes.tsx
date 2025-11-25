import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle, Scissors, Award } from "lucide-react";
import { Link } from "react-router-dom";
import dischargeImage from "@/assets/DischargeDyes.jpg"; // <-- place your generated image here

const DischargeDyes = () => {
  const products = [
    {
      name: "Pink R",
      description: "Brilliant pink discharge dye delivering strong brightness and excellent shade retention after discharge.",
      specifications: [
       "Base: Formaldehyde-free discharge formulation",
    "Shade Strength: High, vivid pink tone",
    "pH Range: 9–11",
    "Compatibility: Suitable for cotton, viscose & blends"
      ],
      applications: ["Discharge Printing", "Textile Printing", "Fashion Fabrics"]
    },
    {
      name: "Orange RF",
      description: "High-brightness orange discharge dye formulated for clean, sharp discharge effects on dark fabrics.",
      specifications: [
        "Base: Eco-friendly, low-odor formulation",
    "Shade: Strong, bright orange",
    "pH Range: 9–11",
    "Compatibility: Ideal for cotton, rayon & cellulosic blends"
      ],
      applications: ["Discharge Printing", "Apparel", "Home Textiles"]
    },
    {
      name: "Blue 4B",
      description: "Deep, rich blue discharge dye providing clean tonal reduction and stable performance.",
      specifications: [
        "Shade: Deep Blue",
    "Dischargeability: Good on most dark reactive shades",
    "pH Range: 9–11",
    "Fastness: Very good wash and rubbing fastness"
      ],
      applications: ["Discharge Prints", "Cotton Jersey", "Hoodies & Apparel", "Custom Graphic Printing"]
    },
    {
      name: "Yellow GCN",
      description: "Vivid yellow discharge dye with excellent brightness and smooth leveling on cotton fabrics.",
      specifications: [
        "Shade: Bright Yellow",
    "Dischargeability: Excellent on reactive-dyed substrates",
    "pH Range: 9–11",
    "Color Yield: High brilliance with clean discharge effect"
      ],
      applications: ["Discharge Printing", "Cotton Fabrics", "Fashion Textiles", "Contrast Artwork"]
    }
  ];

  const features = [
    "Sharp discharge effect with high color clarity",
    "Eco-friendly, zinc-free formulations",
    "Excellent penetration with soft-hand feel",
    "Superior performance on dark cotton fabrics",
    "Stable tones with low odor",
    "Consistent results in screen and rotary printing"
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
            <h1 className="text-2xl font-bold text-gray-900">Discharge Dyes</h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Intro Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-3xl"><Scissors /></div>
              <h2 className="text-3xl font-bold text-gray-900">Discharge Dyes</h2>
            </div>

            <p className="text-lg text-gray-600 mb-6">
              Premium discharge dyes engineered for bright, clean color replacement on dark-dyed fabrics.
              Ideal for high-contrast textile prints with a soft, breathable finish.
            </p>

            <div className="flex items-center space-x-4 mb-6">
              <div className="flex items-center space-x-1">
                <Award className="h-5 w-5 text-blue-500" />
                <span className="text-sm font-medium">Industry Approved</span>
              </div>
              <div className="flex items-center space-x-1">
                <Scissors className="h-5 w-5 text-green-600" />
                <span className="text-sm font-medium">Sharp Discharge Effect</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src={dischargeImage}
                alt="Discharge dyes"
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
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Some of our Discharge Dye Products</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <Card key={index} className="shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">{product.name}</CardTitle>
                  <CardDescription className="text-gray-600">{product.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Specifications:</h4>
                    <ul className="space-y-1">
                      {product.specifications.map((spec, sIndex) => (
                        <li key={sIndex} className="text-sm text-gray-600 flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Applications:</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.applications.map((app, aIndex) => (
                        <span
                          key={aIndex}
                          className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                        >
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
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Need Custom Discharge Shades?</h3>
          <p className="text-gray-600 mb-6">
            Our team can support formulation, shade matching, and customization for your printing needs.
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

export default DischargeDyes;
