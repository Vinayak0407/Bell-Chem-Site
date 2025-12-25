import SEO from "@/components/SEO";
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
        "A vibrant red pigment offering strong coloration and excellent consistency across formulations. Ideal for paints, plastics, coatings, and printing inks.",
      applications: ["Paints", "Plastics", "Printing Inks", "Masterbatches", "Coatings"]
    },
    {
      name: "Pigment Lemon Yellow GRKW",
      description:
        "A bright lemon-yellow pigment known for its clean shade and reliable performance across industries.",
      applications: ["Textile Printing", "Water-Based Paints", "Inks", "Plastics"]
    },
    {
      name: "Pigment Golden Yellow GR",
      description:
        "A warm, golden-yellow pigment offering excellent opacity and balanced brightness.",
      applications: ["Paints", "Plastics", "Powder Coatings", "Inks"]
    },
    {
      name: "Pigment Orange G",
      description:
        "A brilliant orange pigment with high chroma and smooth dispersion.",
      applications: ["PVC Coloring", "Inks", "Coatings", "Textile Prints"]
    },
    {
      name: "Pigment Pink PF",
      description:
        "A clean-tone pink pigment with good stability for decorative and specialty formulations.",
      applications: ["Decorative Coatings", "Plastics", "Textile Printing", "Masterbatches"]
    },
    {
      name: "Pigment Bordeaux BW",
      description:
        "A deep bordeaux red pigment with strong coloring power and smooth dispersion.",
      applications: ["Printing Inks", "Industrial Coatings", "Leather Finishes"]
    },
    {
      name: "Pigment Rubine R",
      description:
        "A bold rubine-red pigment with excellent tinting strength.",
      applications: ["Offset Inks", "Paints", "Plastics", "Textile Printing"]
    },
    {
      name: "Pigment Violet B",
      description:
        "A deep violet pigment with high shade purity.",
      applications: ["Coatings", "Masterbatches", "Decorative Paints", "Inks"]
    },
    {
      name: "Pigment Navy Blue RJ",
      description:
        "A strong navy-blue pigment with uniform coverage and dependable consistency.",
      applications: ["Paints", "Powder Coatings", "Inks", "Rubber Compounds"]
    },
    {
      name: "Pigment Blue FB",
      description:
        "A bright blue pigment with consistent tinting strength.",
      applications: ["Plastics", "Masterbatches", "Textile Printing", "Coatings"]
    },
    {
      name: "Pigment Turquoise Blue CB",
      description:
        "A striking turquoise pigment delivering fresh blue-green tones.",
      applications: ["Water-Based Paints", "Inks", "Polymer Coloring", "Decorative Coatings"]
    },
    {
      name: "Pigment Green GR",
      description:
        "A high-strength green pigment with stable color performance.",
      applications: ["Plastics", "Coatings", "Printing Inks", "Industrial Finishes"]
    },
    {
      name: "Pigment Brown GR",
      description:
        "A rich brown pigment with excellent hiding power.",
      applications: ["Leather Coatings", "Wood Finishes", "Inks", "Industrial Paints"]
    },
    {
      name: "Pigment Black G",
      description:
        "An economical deep black pigment for general-purpose industrial formulations.",
      applications: ["Rubber", "Plastics", "Paints", "General Inks", "PVC Compounds"]
    },
    {
      name: "Pigment Black FBR",
      description:
        "A cleaner-tone black pigment for applications requiring deeper coverage.",
      applications: ["Water-Based Paints", "Plastics", "Inks", "Industrial Applications"]
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

      {/* SEO */}
      <SEO
        title="Pigment Dyes Supplier & Exporter in India"
        description="BellChem (A. K. Jain & Co.) is a trusted B2B supplier and exporter of pigment dyes and pigment powders for paints, inks, plastics, coatings, and industrial applications. Bulk and export-ready supply."
        canonical="https://www.bellchem.in/pigmentdyes"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          "@id": "https://www.bellchem.in/pigmentdyes#service",
          "name": "Pigment Dyes Supply",
          "serviceType": "Bulk Pigment Dyes & Pigment Powders Supplier",
          "provider": {
            "@type": "Organization",
            "@id": "https://www.bellchem.in/#organization",
            "name": "A. K. Jain & Co. (BellChem)"
          },
          "areaServed": "Worldwide",
          "audience": {
            "@type": "BusinessAudience",
            "audienceType": "Paint, Ink & Plastic Manufacturers"
          }
        }}
      />

      {/* HEADER */}
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
            <h1 className="text-2xl font-bold text-gray-900">
              Pigment Dyes Supplier & Exporter in India
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* HERO */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">

          {/* GLASS BOX */}
          <div
            className="
              p-6 rounded-2xl
              bg-black/35 backdrop-blur-md
              border border-white/20
              shadow-[0_0_25px_rgba(0,0,0,0.3)]
              space-y-6
            "
          >
            <div className="flex items-center space-x-2">
              <div className="text-3xl">🖌️</div>
              <h2 className="text-3xl font-bold text-white">
                High-Performance Pigment Dyes
              </h2>
            </div>

            <p className="text-xl text-white leading-relaxed">
              BellChem supplies premium pigment dyes engineered for high opacity,
              excellent dispersion, and long-term color stability across paints,
              inks, plastics, coatings, and textile printing applications.
            </p>

            <div className="space-y-4 text-white">
              <div className="flex items-center space-x-3">
                <Star className="h-5 w-5 text-yellow-300 fill-current" />
                <span>Premium Industrial Grades</span>
              </div>
              <div className="flex items-center space-x-3">
                <Award className="h-5 w-5 text-blue-400" />
                <span>Export & Industry Approved</span>
              </div>
            </div>
          </div>

          {/* IMAGE */}
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src={pigmentDyesImage}
              alt="Pigment dyes for paints, inks, plastics and coatings"
              className="w-full h-[350px] object-cover"
            />
          </div>
        </div>

        {/* FEATURES */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Key Features of Our Pigment Dyes
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* PRODUCTS */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Pigment Dye Products for Industrial Applications
          </h2>
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
                    <h3 className="font-semibold text-gray-900 mb-2">Applications</h3>
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

        {/* RELATED LINKS — GLASS */}
        <div
          className="
            mb-16
            p-6 rounded-2xl
            bg-black/35 backdrop-blur-md
            border border-white/20
            shadow-[0_0_25px_rgba(0,0,0,0.3)]
          "
        >
          <h2 className="text-2xl font-bold text-white mb-6">
            Related Dye Categories
          </h2>
          <div className="flex flex-wrap gap-4">
            <Link to="/reactivedyes" className="text-white/90 hover:text-white hover:underline">
              Reactive Dyes Supplier
            </Link>
            <Link to="/solventdyes" className="text-white/90 hover:text-white hover:underline">
              Solvent Dyes Supplier
            </Link>
            <Link to="/industrialchemicals" className="text-white/90 hover:text-white hover:underline">
              Industrial Chemicals
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-blue-50 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Need Custom Pigment Shades?
          </h2>
          <p className="text-gray-600 mb-6">
            BellChem’s technical team can assist with shade matching, dispersion optimization,
            and custom pigment formulations.
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
