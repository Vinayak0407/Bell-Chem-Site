import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle, Star, Award } from "lucide-react";
import { Link } from "react-router-dom";
import solventDyesImage from "@/assets/solvent-dyes.jpg";

const products = [
  {
    name: "Solvent Yellow",
    description: "High-solubility yellow dye with excellent transparency and heat stability.",
    specifications: [
      "Solubility: High in organic solvents",
      "Heat Stability: 220–260°C",
      "Light Fastness: 4–5",
      "Shade: Bright Yellow"
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
      "Shade: Deep Red"
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
      "Shade: Bright Blue"
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
      "Shade: Deep Green"
    ],
    applications: ["Fuel Dyes", "Polyolefins", "Candles", "Adhesives", "Industrial Solvents"]
  }
];

const features = [
  "Exceptional solubility in organic solvents",
  "High thermal stability for industrial applications",
  "Bright and transparent color tones",
  "Excellent compatibility with plastics, waxes, and resins",
  "Non-bleeding and non-migrating formulations",
  "Long-lasting shade consistency"
];

export default function SolventDyesPage() {
  return (
    <>
      <SEO
        title="Solvent Dyes Supplier in India"
        description="BellChem (A. K. Jain & Co.) supplies high-quality solvent dyes for plastics, fuels, waxes, inks, and industrial coatings."
        canonical="https://www.bellchem.in/solventdyes"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          "@id": "https://www.bellchem.in/solventdyes#service",
          "name": "Solvent Dyes Supply",
          "serviceType": "Bulk Solvent Dyes Supplier",
          "provider": {
            "@type": "Organization",
            "@id": "https://www.bellchem.in/#organization",
            "name": "A. K. Jain & Co. (BellChem)"
          },
          "areaServed": "Worldwide",
          "audience": {
            "@type": "BusinessAudience",
            "audienceType": "Plastic, Ink & Fuel Manufacturers"
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
              Solvent Dyes Supplier in India
            </h1>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

          {/* HERO */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="p-6 rounded-2xl bg-black/35 backdrop-blur-md border border-white/20 space-y-6">
              <div className="flex items-center space-x-2">
                <div className="text-3xl">💧</div>
                <h2 className="text-3xl font-bold text-white">
                  High-Performance Solvent Dyes
                </h2>
              </div>

              <p className="text-xl text-white leading-relaxed">
                BellChem supplies premium solvent dyes engineered for superior solubility,
                transparency, and durability across plastics, petroleum products,
                waxes, and solvent-based ink systems.
              </p>

              <div className="space-y-3 text-white">
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-yellow-300 fill-current" />
                  <span>Premium Industrial Grades</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-blue-400" />
                  <span>Industry & Export Trusted</span>
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src={solventDyesImage}
                alt="Solvent dyes for plastics, fuels, waxes and inks"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* SEO BODY CONTENT */}
          <div className="max-w-4xl mb-16">
            <p className="text-gray-700 leading-relaxed mb-4">
              Solvent dyes are oil-soluble colorants used where transparency,
              thermal stability, and migration resistance are critical.
              BellChem supplies carefully selected solvent dyes with consistent
              solubility and shade reliability for industrial processing.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Our solvent dyes are widely used in plastics, petroleum products,
              waxes, adhesives, inks, and coatings, offering stable coloration
              and compatibility across demanding manufacturing environments.
            </p>
          </div>

          {/* FEATURES */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8">Key Features</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, i) => (
                <div key={i} className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* PRODUCTS */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8">
              Solvent Dye Products for Industrial Applications
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

          {/* RELATED LINKS */}
          <div className="mb-16">
            <h2 className="text-xl font-semibold mb-4">Related Categories</h2>
            <div className="flex gap-4">
              <Link to="/pigmentdyes" className="text-blue-600 hover:underline">
                Pigment Dyes
              </Link>
              <Link to="/oilcolors" className="text-blue-600 hover:underline">
                Oil Colors
              </Link>
              <Link to="/industrialchemicals" className="text-blue-600 hover:underline">
                Industrial Chemicals
              </Link>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-blue-50 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Need Custom Solvent Dye Shades?</h2>
            <p className="mb-6">
              BellChem specializes in tailor-made solvent dye formulations for plastics,
              waxes, inks, and petroleum products.
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
