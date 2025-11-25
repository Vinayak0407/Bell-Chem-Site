import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle, Award } from "lucide-react";
import { Link } from "react-router-dom";
import processingImage from "@/assets/TextileProcessing.jpg"; // <-- replace with your image file

const TextileProcessing = () => {

  const products = [
    {
      name: "Tinopal 2B",
  description: "A highly effective optical brightening agent that enhances fabric whiteness by absorbing UV light and emitting blue fluorescence.",
  specifications: [
    "Ionic Nature: Anionic",
    "Usage: 0.05%–0.3%",
    "Form: Powder / Granular",
    "Solubility: Fully soluble in water"
  ],
  applications: ["Detergents", "Textile Whitening", "Soaping", "Laundry Chemicals"]
    },
    {
      name: "Optical Brightener CBX",
  description: "Fluorescent whitening agent used to improve brightness and whiteness of textile substrates during finishing.",
  specifications: [
    "Ionic Nature: Anionic / Non-ionic (varies by grade)",
    "Usage: 0.1%–1%",
    "Light Fastness: Good",
    "Temperature Stability: Stable up to 130°C"
  ],
  applications: ["Finishing", "Whitening", "Detergent Formulations", "Dyeing Auxiliaries"]
    },
    {
      name: "Alum",
  description: "Versatile inorganic coagulant used in textile processing for scouring, dye fixation, and water treatment.",
  specifications: [
    "Chemical Formula: Al₂(SO₄)₃",
    "Form: Powder / Lumps",
    "Purity: 98%–99%",
    "pH: Acidic",
    "Solubility: Highly soluble in water"
  ],
  applications: ["Mordanting", "Dye Fixing", "Water Treatment", "Scouring"]
    },
    {
      name: "TSP",
  description: "Strong alkaline cleaning and processing agent used for scouring and heavy-duty degreasing of textile substrates.",
  specifications: [
    "Chemical Formula: Na₃PO₄",
    "pH: 11–12 (1% solution)",
    "Form: Crystalline Powder",
    "Purity: 98% Min",
    "Solubility: Fully soluble in water"
  ],
  applications: ["Scouring", "Degreasing", "Pretreatment", "Boil-Out Cleaning"]
    }
  ];

  const features = [
    "Enhances efficiency across all textile processing stages",
    "Improves fabric absorbency, whiteness & leveling",
    "High thermal stability & broad pH compatibility",
    "Eco-friendly formulations for sustainable processing",
    "Stable performance in hard water conditions",
    "Reduces processing defects & improves consistency"
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
            <h1 className="text-2xl font-bold text-gray-900">Textile Processing Chemicals</h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Intro */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* LEFT TEXT COLUMN */}
<div
  className="
    p-6 rounded-2xl 
    bg-black/30 backdrop-blur-md 
    border border-white/20 
    shadow-[0_0_25px_rgba(0,0,0,0.3)]
    space-y-4
  "
>

  {/* Title Row INSIDE Box */}
  <div className="flex items-center space-x-2 mb-4">
    <div className="text-3xl">🧵</div>
    <h2 className="text-3xl font-bold text-white">Textile Processing Chemicals</h2>
  </div>

  <p className="text-xl text-white leading-relaxed mb-6">
    High-performance processing chemicals engineered to deliver maximum efficiency 
    in pretreatment, bleaching, dyeing, and finishing operations—ensuring consistent 
    quality, improved absorbency, and optimized production results.
  </p>

  <div className="space-y-4 text-white">
    <div className="flex items-center space-x-3">
      <Award className="h-5 w-5 text-blue-400" />
      <span>Industry Approved</span>
    </div>
  </div>

</div>



          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img 
                src={processingImage}
                alt="Textile processing chemicals"
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

        {/* Product Cards */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Some of our Processing Chemical Range</h3>

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
                  
                  {/* Specifications */}
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

                  {/* Applications */}
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
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Need Custom Processing Chemicals?</h3>
          <p className="text-gray-600 mb-6">
            Contact our expert technical team for optimized formulations and processing support.
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

export default TextileProcessing;
