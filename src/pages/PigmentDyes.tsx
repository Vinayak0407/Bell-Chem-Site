import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle, Star, Award } from "lucide-react";
import { Link } from "react-router-dom";
import pigmentDyesImage from "@/assets/PigmentDyes.jpg";

const PigmentDyes = () => {

  const products = [
    {
      name: "Pigment Red FB",
      description:
        "A vibrant red pigment offering strong coloration and excellent consistency across formulations. Ideal for paints, plastics, coatings, and printing inks requiring rich, long-lasting red shades.",
      applications: ["Paints", "Plastics", "Printing Inks", "Masterbatches", "Coatings"]
    },

    {
      name: "Pigment Lemon Yellow GRKW",
      description:
        "A bright lemon-yellow pigment known for its clean shade and reliable performance across industries. Suitable for paints, inks, textiles, and polymers requiring strong brightness and coverage.",
      applications: ["Textile Printing", "Water-Based Paints", "Inks", "Plastics"]
    },

    {
      name: "Pigment Golden Yellow GR",
      description:
        "A warm, golden-yellow pigment offering excellent opacity and balanced brightness. Widely used in coatings, plastics, and inks for clean, high-quality color development.",
      applications: ["Paints", "Plastics", "Powder Coatings", "Inks"]
    },

    {
      name: "Pigment Orange G",
      description:
        "A brilliant orange pigment with high chroma and smooth dispersion. Commonly used in PVC coloring, inks, paints, and textile printing for vivid orange shades.",
      applications: ["PVC Coloring", "Inks", "Coatings", "Textile Prints"]
    },

    {
      name: "Pigment Pink PF",
      description:
        "A bright and visually appealing pink pigment valued for its clean tone and stability. Ideal for decorative coatings, plastics, textiles, and specialty color formulations.",
      applications: ["Decorative Coatings", "Plastics", "Textile Printing", "Masterbatches"]
    },

    {
      name: "Pigment Bordeaux BW",
      description:
        "A deep bordeaux red pigment offering strong coloring power and smooth dispersion. Suitable for industrial paints, inks, leather finishes, and coatings requiring elegant red tones.",
      applications: ["Printing Inks", "Industrial Coatings", "Leather Finishes"]
    },

    {
      name: "Pigment Rubine R",
      description:
        "A vibrant rubine-red pigment known for its bold tone and excellent tinting strength. Ideal for inks, paints, plastics, and textile applications requiring rich red coloration.",
      applications: ["Offset Inks", "Paints", "Plastics", "Textile Printing"]
    },

    {
      name: "Pigment Violet B",
      description:
        "A deep violet pigment with high shade purity and smooth color performance. Commonly used in decorative paints, plastics, inks, and specialty coatings.",
      applications: ["Coatings", "Masterbatches", "Decorative Paints", "Inks"]
    },

    {
      name: "Pigment Navy Blue RJ",
      description:
        "A strong navy-blue pigment offering uniform coverage and dependable consistency. Suitable for industrial coatings, plastics, inks, and rubber applications requiring deep blue tones.",
      applications: ["Paints", "Powder Coatings", "Inks", "Rubber Compounds"]
    },

    {
      name: "Pigment Blue FB",
      description:
        "A bright blue pigment with consistent tinting strength and broad industrial applicability. Used in plastics, masterbatches, inks, and coatings for vivid blue shades.",
      applications: ["Plastics", "Masterbatches", "Textile Printing", "Coatings"]
    },

    {
      name: "Pigment Turquoise Blue CB",
      description:
        "A striking turquoise pigment delivering fresh, eye-catching blue-green tones. Ideal for decorative paints, inks, polymers, and textile applications.",
      applications: ["Water-Based Paints", "Inks", "Polymer Coloring", "Decorative Coatings"]
    },

    {
      name: "Pigment Green GR",
      description:
        "A high-strength green pigment known for its wide usability and stable color performance. Used in plastics, coatings, inks, and industrial finishes.",
      applications: ["Plastics", "Coatings", "Printing Inks", "Industrial Finishes"]
    },

    {
      name: "Pigment Brown GR",
      description:
        "A rich brown pigment offering excellent hiding power and uniform shade development. Suitable for wood coatings, leather finishes, inks, and industrial paints.",
      applications: ["Leather Coatings", "Wood Finishes", "Inks", "Industrial Paints"]
    },

    {
      name: "Pigment Black G",
      description:
        "An economical deep black pigment widely used for general-purpose industrial formulations. Offers reliable color coverage in paints, plastics, and inks, ideal where cost-efficiency and consistency are needed.",
      applications: ["Rubber", "Plastics", "Paints", "General Inks", "PVC Compounds"]
    },

    {
      name: "Pigment Black FBR",
      description:
        "A quality-grade black pigment designed for applications requiring deeper coverage and cleaner tone than basic economical grades. Suitable for water-based paints, plastics, and ink systems.",
      applications: ["Water-Based Paints", "Plastics", "Inks", "General Industrial Applications"]
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
            <div>
              {/* Glass Box */}
              <div
                className="
                  p-6 rounded-2xl 
                  bg-black/30 backdrop-blur-md 
                  border border-white/20 
                  shadow-[0_0_25px_rgba(0,0,0,0.3)]
                  space-y-4
                "
              >

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
