import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle, Star, Award } from "lucide-react";
import { Link } from "react-router-dom";
import OilColorsImage from "@/assets/oil-colors.jpg";

const products = [
  {
    name: "Oil Red",
    description:
      "Bright, oil-soluble red dye suitable for oils, waxes, polishes, and hydrocarbon systems.",
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
    description:
      "High-strength yellow oil color with strong brightness and excellent dispersibility.",
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
    description:
      "Brilliant blue oil-soluble dye with strong tinting strength and stability.",
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
    description:
      "Stable green oil color widely used in industrial oils and solvent-based formulations.",
    specifications: [
      "Solubility: Very high in oils",
      "Heat Stability: 180–200°C",
      "Light Fastness: 4–5",
      "Shade: Green"
    ],
    applications: ["Oils", "Coatings", "Solvent systems", "Marker inks"]
  }
];

const features = [
  "Excellent solubility in oils and hydrocarbons",
  "High thermal stability and consistent performance",
  "Strong tinting strength with clean, bright shades",
  "Suitable for inks, coatings, polishes, and industrial oils",
  "Smooth, non-gritty dispersion quality",
  "Stable under industrial processing conditions"
];

export default function OilColorsPage() {
  return (
    <>
      <SEO
        title="Oil Colors Supplier in India"
        description="BellChem (A. K. Jain & Co.) supplies oil colors and oil-soluble dyes for inks, lubricants, oils, coatings, and industrial applications."
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

      <Header />

      <main className="min-h-screen">
        {/* TOP HEADER */}
        <div className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center space-x-4">
            <Link to="/products">
              <Button variant="ghost" size="sm" className="flex items-center space-x-2">
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Products</span>
              </Button>
            </Link>
            <div className="h-6 w-px bg-gray-300" />
            <h1 className="text-2xl font-bold text-gray-900">
              Oil Colors Supplier in India
            </h1>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

          {/* HERO */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="p-6 rounded-2xl bg-black/35 backdrop-blur-md border border-white/20 shadow-[0_0_25px_rgba(0,0,0,0.3)] space-y-6">
              <div className="flex items-center space-x-2">
                <div className="text-3xl">🛢️</div>
                <h2 className="text-3xl font-bold text-white">
                  High-Purity Oil Colors
                </h2>
              </div>

              <p className="text-xl text-white leading-relaxed">
                BellChem supplies premium oil-soluble colors engineered for oils,
                waxes, inks, lubricants, and coatings, offering excellent solubility,
                thermal stability, and vibrant industrial shades.
              </p>

              <div className="space-y-3 text-white">
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-yellow-300 fill-current" />
                  <span>Premium Industrial Grades</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-blue-400" />
                  <span>Industry & Export Approved</span>
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-md">
              <img
                src={OilColorsImage}
                alt="Oil colors and oil-soluble dyes for industrial applications"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* SEO BODY CONTENT + FEATURES (BLACK GLASS, CENTER ALIGNED) */}
<div className="mb-16 p-10 rounded-2xl 
                bg-black/35 backdrop-blur-md 
                border border-white/20 
                shadow-[0_0_25px_rgba(0,0,0,0.3)]
                text-center">

  {/* SEO BODY CONTENT */}
  <div className="max-w-4xl mx-auto mb-14 space-y-6">
    <p className="text-white/95 text-lg leading-relaxed">
      Oil colors are oil-soluble dyes used where transparency, solubility,
      and thermal stability are required. BellChem supplies carefully
      selected oil colors for industrial formulations that demand reliable
      dispersion and shade consistency.
    </p>

    <p className="text-white/90 text-lg leading-relaxed">
      Our oil colors are widely used in inks, lubricants, waxes, polishes,
      coatings, and solvent-based systems, supporting stable coloration
      across demanding manufacturing environments.
    </p>
  </div>

  {/* FEATURES */}
  <div>
    <h2 className="text-3xl font-bold mb-10 text-white">
      Key Features
    </h2>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {features.map((feature, i) => (
        <div
          key={i}
          className="flex items-center justify-center space-x-4 p-5 
                     bg-black/30 backdrop-blur-sm
                     rounded-xl border border-white/15
                     shadow-sm"
        >
          <CheckCircle className="h-6 w-6 text-green-400" />
          <span className="text-white/95 text-base">
            {feature}
          </span>
        </div>
      ))}
    </div>
  </div>

</div>


          {/* PRODUCTS */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8">
              Oil Color Products for Industrial Applications
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {products.map((product, i) => (
                <Card key={i}>
                  <CardHeader>
                    <CardTitle>{product.name}</CardTitle>
                    <CardDescription>{product.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-1 text-sm text-gray-600">
                      {product.specifications.map((spec, j) => (
                        <li key={j}>• {spec}</li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {product.applications.map((app, j) => (
                        <span
                          key={j}
                          className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                        >
                          {app}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

        {/* RELATED LINKS (BLACK GLASS) */}
<div className="mb-16 p-8 rounded-2xl 
                bg-black/35 backdrop-blur-md 
                border border-white/20 
                shadow-[0_0_25px_rgba(0,0,0,0.3)]
                text-center">

  <h2 className="text-2xl font-bold mb-6 text-white">
    Related Categories
  </h2>

  <div className="flex flex-wrap justify-center gap-6">
    <Link
      to="/solventdyes"
      className="px-6 py-3 rounded-xl 
                 bg-black/30 backdrop-blur-sm
                 border border-white/15
                 text-white/90 font-medium
                 hover:bg-black/45 hover:border-white/30
                 transition-all duration-200"
    >
      Solvent Dyes
    </Link>

    <Link
      to="/pigmentdyes"
      className="px-6 py-3 rounded-xl 
                 bg-black/30 backdrop-blur-sm
                 border border-white/15
                 text-white/90 font-medium
                 hover:bg-black/45 hover:border-white/30
                 transition-all duration-200"
    >
      Pigment Dyes
    </Link>

    <Link
      to="/industrialchemicals"
      className="px-6 py-3 rounded-xl 
                 bg-black/30 backdrop-blur-sm
                 border border-white/15
                 text-white/90 font-medium
                 hover:bg-black/45 hover:border-white/30
                 transition-all duration-200"
    >
      Industrial Chemicals
    </Link>
  </div>
</div>


          {/* CTA */}
          <div className="bg-blue-50 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">
              Looking for Custom Oil Colors?
            </h2>
            <p className="mb-6">
              Connect with BellChem for bulk supply, custom shades,
              and technical formulation support.
            </p>
            <Link to="/contact">
              <Button size="lg">Contact Us</Button>
            </Link>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
