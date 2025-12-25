import SEO from "@/components/SEO";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle, Star, Award } from "lucide-react";
import { Link } from "react-router-dom";
import OilColorsImage from "@/assets/oil-colors.jpg";

const OilColors = () => {
  const products = [
    {
      name: "Oil Red",
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
      name: "Oil Yellow 3",
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
      name: "Oil Blue",
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
      name: "Oil Green",
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

      {/* SEO */}
      <SEO
        title="Oil Colors Supplier & Exporter in India"
        description="BellChem (A. K. Jain & Co.) is a trusted B2B supplier and exporter of oil colors and oil-soluble dyes for inks, oils, lubricants, coatings, and industrial applications. Bulk, export-ready supply."
        canonical="https://www.bellchem.in/oilcolors"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          "@id": "https://www.bellchem.in/oilcolors#service",
          "name": "Oil Colors Supply",
          "serviceType": "Bulk Oil Colors & Oil-Soluble Dyes Supplier",
          "provider": {
            "@type": "Organization",
            "@id": "https://www.bellchem.in/#organization",
            "name": "A. K. Jain & Co. (BellChem)"
          },
          "areaServed": "Worldwide",
          "audience": {
            "@type": "BusinessAudience",
            "audienceType": "Industrial Manufacturers & Ink Producers"
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
            {/* ✅ CORRECT H1 */}
            <h1 className="text-2xl font-bold text-gray-900">
              Oil Colors Supplier & Exporter in India
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
              <div className="text-3xl">🛢️</div>
              <h2 className="text-3xl font-bold text-white">
                High-Purity Oil Colors
              </h2>
            </div>

            <p className="text-xl text-white leading-relaxed">
              BellChem supplies premium oil-soluble colors engineered for oils,
              solvents, waxes, inks, lubricants, and coatings, offering excellent
              solubility, thermal stability, and vibrant shades for industrial use.
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
          <div className="rounded-2xl overflow-hidden shadow-md">
            <img
              src={OilColorsImage}
              alt="Oil colors and oil-soluble dyes for industrial applications"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* FEATURES */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Key Features of Our Oil Colors
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
            Oil Color Products for Industrial Applications
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
                    <h3 className="font-semibold text-gray-900 mb-2">Specifications</h3>
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
            <Link to="/solventdyes" className="text-white/90 hover:text-white hover:underline">
              Solvent Dyes Supplier
            </Link>
            <Link to="/pigmentdyes" className="text-white/90 hover:text-white hover:underline">
              Pigment Dyes Supplier
            </Link>
            <Link to="/industrialchemicals" className="text-white/90 hover:text-white hover:underline">
              Industrial Chemicals
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-blue-50 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Looking for Custom Oil Colors?
          </h2>
          <p className="text-gray-600 mb-6">
            Connect with BellChem for bulk supply, custom shades, and technical support.
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
