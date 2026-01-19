import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle, Star, Award } from "lucide-react";
import { Link } from "react-router-dom";
import pigmentDyesImage from "@/assets/PigmentDyes.jpg";

const products = [
  {
    name: "Pigment Red FB",
    description:
      "A vibrant red pigment offering strong coloration and excellent consistency across formulations.",
    applications: ["Paints", "Plastics", "Printing Inks", "Masterbatches", "Coatings"]
  },
  {
    name: "Pigment Lemon Yellow GRKW",
    description:
      "A bright lemon-yellow pigment known for its clean shade and reliable performance.",
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
      "A clean-tone pink pigment with good stability for decorative formulations.",
    applications: ["Decorative Coatings", "Plastics", "Textile Printing", "Masterbatches"]
  },
  {
    name: "Pigment Bordeaux BW",
    description:
      "A deep bordeaux red pigment with strong coloring power.",
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
      "A strong navy-blue pigment with uniform coverage.",
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
      "An economical deep black pigment for general-purpose formulations.",
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
  "Non-migratory and weather-resistant formulations"
];

export default function PigmentDyesPage() {
  return (
    <>
      <SEO
        title="Pigment Dyes Supplier in India"
        description="BellChem (A. K. Jain & Co.) supplies high-quality pigment dyes and pigment powders for paints, inks, plastics, coatings, and industrial applications."
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
              Pigment Dyes Supplier in India
            </h1>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

          {/* HERO */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="p-6 rounded-2xl bg-black/35 backdrop-blur-md border border-white/20 space-y-6">
              <div className="flex items-center space-x-2">
                <div className="text-3xl">🖌️</div>
                <h2 className="text-3xl font-bold text-white">
                  High-Performance Pigment Dyes
                </h2>
              </div>

              <p className="text-xl text-white leading-relaxed">
                BellChem supplies premium pigment dyes engineered for high opacity,
                excellent dispersion, and long-term color stability across industrial
                and decorative applications.
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

            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src={pigmentDyesImage}
                alt="Pigment dyes for paints, inks, plastics and coatings"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* SEO BODY CONTENT */}
          <div className="max-w-4xl mb-16">
            <p className="text-gray-700 leading-relaxed mb-4">
              Pigment dyes are insoluble colorants used to impart durable, vibrant
              coloration to paints, inks, plastics, coatings, and industrial materials.
              BellChem supplies carefully processed pigment dyes with controlled particle
              size, high dispersion quality, and consistent shade performance.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Our pigment dye range is widely used by paint manufacturers, ink formulators,
              plastic processors, and coating applicators who require stable color,
              weather resistance, and reliable batch-to-batch consistency for
              large-scale production.
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
              Pigment Dye Products for Industrial Applications
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {products.map((product, i) => (
                <Card key={i}>
                  <CardHeader>
                    <CardTitle>{product.name}</CardTitle>
                    <CardDescription>{product.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
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
              <Link to="/reactivedyes" className="text-blue-600 hover:underline">
                Reactive Dyes
              </Link>
              <Link to="/solventdyes" className="text-blue-600 hover:underline">
                Solvent Dyes
              </Link>
              <Link to="/industrialchemicals" className="text-blue-600 hover:underline">
                Industrial Chemicals
              </Link>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-blue-50 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Need Custom Pigment Shades?</h2>
            <p className="mb-6">
              BellChem’s technical team can assist with shade matching, dispersion optimization,
              and custom pigment formulations.
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
