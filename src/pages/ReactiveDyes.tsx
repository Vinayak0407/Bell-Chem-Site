import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle, Star, Award } from "lucide-react";
import { Link } from "react-router-dom";
import textileDyes from "@/assets/textile-dyes.jpg";

const products = [
  {
    name: "Procion MX Red 2B",
    description:
      "Brilliant fiber-reactive red dye (dichlorotriazine) for cotton with excellent wash fastness.",
    specifications: [
      "Wash Fastness: 4–5 (ISO 105-C06)",
      "Light Fastness: 5–6 (ISO 105-B02)",
      "pH Range (for fixation): ~10.5–11.5"
    ],
    applications: ["Cotton", "Viscose", "Linen"]
  },
  {
    name: "Procion MX Blue",
    description:
      "High-strength fiber-reactive blue dye with good leveling and bright shade.",
    specifications: [
      "Wash Fastness: 4–5",
      "Light Fastness: 5–6",
      "pH Range (for fixation): ~10.5–11.5"
    ],
    applications: ["Cotton", "Rayon", "Cellulosic blends"]
  },
  {
    name: "Remazol Turquoise Blue (Vinyl Sulphone)",
    description:
      "Medium-brand vinyl-sulphone reactive dye giving vivid turquoise tones with high fixation.",
    specifications: [
      "Wash Fastness: 4 (ISO 105-C06)",
      "Light Fastness: 4–5",
      "pH Range (for dye bath): ~11.0–12.0"
    ],
    applications: ["Cotton", "Rayon"]
  },
  {
    name: "Remazol Golden Yellow",
    description:
      "Bright yellow vinyl-sulphone reactive dye with strong color yield and good leveling.",
    specifications: [
      "Wash Fastness: 4–5",
      "Light Fastness: 4–6",
      "pH Range (for dyeing): ~11.0–12.0"
    ],
    applications: ["Cellulosic fibers", "Cotton", "Viscose"]
  }
];

const features = [
  "Excellent wash fastness properties",
  "Superior color strength and brightness",
  "Good migration resistance",
  "Wide pH range compatibility",
  "Environmentally friendly formulations",
  "Consistent batch-to-batch quality"
];

export default function ReactiveDyesPage() {
  return (
    <>
      <SEO
        title="Reactive Dyes Supplier in India"
        description="BellChem (A. K. Jain & Co.) supplies high-quality reactive dyes for cotton and cellulosic fibers with excellent wash fastness, color strength, and industrial performance."
        canonical="https://www.bellchem.in/reactivedyes"
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
              Reactive Dyes Supplier in India
            </h1>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

          {/* HERO */}
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">

            <div className="p-6 rounded-2xl bg-black/35 backdrop-blur-md border border-white/20 shadow-[0_0_25px_rgba(0,0,0,0.3)] space-y-6">
              <div className="flex items-center space-x-2">
                <div className="text-3xl">🎨</div>
                <h2 className="text-3xl font-bold text-white">
                  High-Performance Reactive Dyes
                </h2>
              </div>

              <p className="text-xl text-white leading-relaxed">
                High-quality reactive dyes for cotton and cellulosic fibers,
                formulated for excellent wash fastness, bright shades, and
                reliable textile processing performance.
              </p>

              <div className="space-y-3 text-white">
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-yellow-300 fill-current" />
                  <span>Premium Industrial Quality</span>
                </div>

                <div className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-blue-400" />
                  <span>Industry & Export Approved</span>
                </div>
              </div>
            </div>

            {/* IMAGE */}
            <div className="rounded-2xl overflow-hidden shadow-lg aspect-[16/10] max-h-[320px] w-full">
              <img
                src={textileDyes}
                alt="Reactive dyes for cotton and cellulosic fibers"
                className="w-full h-full object-cover"
              />
            </div>

          </div>

          {/* SEO + FEATURES GLASS */}
          <div className="mb-16 p-10 rounded-2xl bg-black/35 backdrop-blur-md border border-white/20 shadow-[0_0_25px_rgba(0,0,0,0.3)] text-center">

            <div className="max-w-4xl mx-auto mb-14 space-y-6">
              <p className="text-white/95 text-lg leading-relaxed">
                Reactive dyes are water-soluble dyes that form a covalent bond with
                cellulosic fibers, resulting in excellent wash fastness and long-lasting
                color. BellChem supplies carefully selected reactive dyes suitable for
                modern textile dyeing and printing processes.
              </p>

              <p className="text-white/90 text-lg leading-relaxed">
                Our reactive dye range is widely used by textile processors, garment
                manufacturers, and fabric dye houses seeking consistent shade,
                strong fixation, and reliable batch-to-batch performance.
              </p>
            </div>

            <h2 className="text-3xl font-bold mb-10 text-white">
              Key Features
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, i) => (
                <div
                  key={i}
                  className="flex items-center justify-center space-x-4 p-5 bg-black/30 backdrop-blur-sm rounded-xl border border-white/15"
                >
                  <CheckCircle className="h-6 w-6 text-green-400" />
                  <span className="text-white/95">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

          </div>

          {/* PRODUCTS */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8">
              Selected Reactive Dye Products
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

          {/* CTA */}
          <div className="bg-blue-50 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">
              Need Custom Reactive Dyes?
            </h2>

            <p className="mb-6">
              Contact our technical team for custom formulations, shade matching,
              and application support.
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
