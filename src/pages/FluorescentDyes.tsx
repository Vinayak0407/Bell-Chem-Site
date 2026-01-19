import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle, Sparkles, Flame } from "lucide-react";
import { Link } from "react-router-dom";
import fluorescentImage from "@/assets/FluorescentDyes.jpg";

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

export default function FluorescentColorsPage() {
  return (
    <>
      <SEO
        title="Fluorescent Dyes & Neon Colors Supplier in India"
        description="BellChem (A. K. Jain & Co.) supplies industrial-grade fluorescent dyes and neon pigments for textiles, inks, plastics, coatings, and high-visibility applications."
        canonical="https://www.bellchem.in/fluorescentcolors"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          "@id": "https://www.bellchem.in/fluorescentcolors#service",
          "name": "Fluorescent Dyes Supply",
          "serviceType": "Bulk Fluorescent Dyes & Neon Pigments Supplier",
          "provider": {
            "@type": "Organization",
            "@id": "https://www.bellchem.in/#organization",
            "name": "A. K. Jain & Co. (BellChem)"
          },
          "areaServed": "Worldwide",
          "audience": {
            "@type": "BusinessAudience",
            "audienceType": "Textile, Ink & Plastic Manufacturers"
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
              Fluorescent Dyes & Neon Colors Supplier in India
            </h1>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

          {/* HERO */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="p-6 rounded-2xl bg-black/35 backdrop-blur-md border border-white/20 space-y-6">
              <div className="flex items-center space-x-2">
                <Sparkles className="h-8 w-8 text-yellow-300" />
                <h2 className="text-3xl font-bold text-white">
                  High-Impact Fluorescent Colors
                </h2>
              </div>

              <p className="text-xl text-white leading-relaxed">
                BellChem supplies high-performance fluorescent dyes and neon pigments
                engineered for unmatched vibrancy, UV glow, and visual intensity across
                industrial applications.
              </p>

              <div className="space-y-3 text-white">
                <div className="flex items-center space-x-2">
                  <Flame className="h-5 w-5 text-orange-400" />
                  <span>Ultra-Bright Neon Shades</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Sparkles className="h-5 w-5 text-pink-400" />
                  <span>UV Reactive & High Visibility</span>
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src={fluorescentImage}
                alt="Fluorescent dyes and neon pigments for industrial applications"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* SEO BODY CONTENT (CRITICAL FOR INDEXING) */}
          <div className="max-w-4xl mb-16">
            <p className="text-gray-700 leading-relaxed mb-4">
              Fluorescent dyes and neon pigments are specialized colorants designed to emit
              high-intensity visible light when exposed to natural or ultraviolet light.
              BellChem supplies industrial-grade fluorescent dyes formulated for superior
              brightness, dispersion, and consistency across demanding manufacturing
              environments.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Our fluorescent color range is widely used by textile printers, ink
              manufacturers, plastic processors, coating formulators, and safety product
              manufacturers who require vibrant shades, UV reactivity, and reliable
              performance. BellChem supports bulk supply and custom shade development for
              B2B clients worldwide.
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
              Fluorescent Dye Products for Industrial Applications
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {products.map((product, i) => (
                <Card key={i}>
                  <CardHeader>
                    <CardTitle>{product.name}</CardTitle>
                    <CardDescription>{product.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-1 text-sm text-gray-600">
                      {product.specifications.map((spec, j) => (
                        <li key={j}>• {spec}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* RELATED LINKS */}
          <div className="mb-16">
            <h2 className="text-xl font-semibold mb-4">Related Dye Categories</h2>
            <div className="flex gap-4">
              <Link to="/pigmentdyes" className="text-blue-600 hover:underline">
                Pigment Dyes Supplier
              </Link>
              <Link to="/solventdyes" className="text-blue-600 hover:underline">
                Solvent Dyes Supplier
              </Link>
              <Link to="/textileprocessing" className="text-blue-600 hover:underline">
                Textile Processing Chemicals
              </Link>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-purple-50 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Need Custom Neon Shades?</h2>
            <p className="mb-6">
              BellChem’s experts can develop custom fluorescent shades tailored to
              your industry and performance requirements.
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
