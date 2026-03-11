import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle, Award } from "lucide-react";
import { Link } from "react-router-dom";
import processingImage from "@/assets/TextileProcessing.jpg";

const products = [
  {
    name: "Tinopal",
    description:
      "A highly effective optical brightening agent that enhances fabric whiteness by absorbing UV light and emitting blue fluorescence.",
    specifications: [
      "Ionic Nature: Anionic",
      "Usage: 0.05%–0.3%",
      "Form: Powder / Granular",
      "Solubility: Fully soluble in water"
    ],
    applications: ["Detergents", "Textile Whitening", "Soaping", "Laundry Chemicals"]
  },
  {
    name: "Optical Brightener",
    description:
      "Fluorescent whitening agent used to improve brightness and whiteness of textile substrates during finishing.",
    specifications: [
      "Ionic Nature: Anionic / Non-ionic",
      "Usage: 0.1%–1%",
      "Light Fastness: Good",
      "Temperature Stability: Stable up to 130°C"
    ],
    applications: ["Finishing", "Whitening", "Detergent Formulations", "Dyeing Auxiliaries"]
  },
  {
    name: "Alum",
    description:
      "Versatile inorganic coagulant used in textile processing for scouring, dye fixation, and water treatment.",
    specifications: [
      "Chemical Formula: Al₂(SO₄)₃",
      "Purity: 98%–99%",
      "Form: Powder / Lumps",
      "pH: Acidic",
      "Solubility: Highly soluble in water"
    ],
    applications: ["Mordanting", "Dye Fixing", "Water Treatment", "Scouring"]
  },
  {
    name: "TSP(Tri-Sodium Phosphate)",
    description:
      "Strong alkaline processing agent used for scouring, degreasing, and heavy-duty textile pretreatment.",
    specifications: [
      "Chemical Formula: Na₃PO₄",
      "pH (1% Solution): 11–12",
      "Form: Crystalline Powder",
      "Purity: 98% Min",
      "Solubility: Fully soluble in water"
    ],
    applications: ["Scouring", "Degreasing", "Pretreatment", "Boil-Out Cleaning"]
  }
];

const features = [
  "Optimizes pretreatment, dyeing & finishing efficiency",
  "Improves fabric absorbency, whiteness & leveling",
  "Stable performance across wide pH & temperature ranges",
  "Eco-conscious formulations for sustainable processing",
  "Consistent results in hard water conditions",
  "Reduces defects & improves batch-to-batch uniformity"
];

export default function TextileProcessingPage() {
  return (
    <>
      <SEO
        title="Textile Processing Chemicals Supplier in India"
        description="BellChem (A. K. Jain & Co.) supplies textile processing chemicals for pretreatment, dyeing, bleaching, and finishing applications."
        canonical="https://www.bellchem.in/textileprocessing"
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
              Textile Processing Chemicals Supplier in India
            </h1>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

          {/* HERO */}
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">

            <div className="p-6 rounded-2xl bg-black/35 backdrop-blur-md border border-white/20 shadow-[0_0_25px_rgba(0,0,0,0.3)] space-y-6">
              <div className="flex items-center space-x-2">
                <div className="text-3xl">🧵</div>
                <h2 className="text-3xl font-bold text-white">
                  High-Performance Textile Processing Chemicals
                </h2>
              </div>

              <p className="text-xl text-white leading-relaxed">
                Advanced processing chemicals engineered for pretreatment,
                bleaching, dyeing, and finishing—delivering improved absorbency,
                enhanced whiteness, uniform dye uptake, and consistent quality.
              </p>

              <div className="flex items-center space-x-2 text-white">
                <Award className="h-5 w-5 text-blue-400" />
                <span>Industry & Export Approved</span>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-lg aspect-[16/10] max-h-[320px] w-full">
              <img
                src={processingImage}
                alt="Textile processing chemicals for pretreatment and finishing"
                className="w-full h-full object-cover"
              />
            </div>

          </div>

          {/* SEO + FEATURES GLASS */}
          <div className="mb-16 p-10 rounded-2xl bg-black/35 backdrop-blur-md border border-white/20 shadow-[0_0_25px_rgba(0,0,0,0.3)] text-center">

            <div className="max-w-4xl mx-auto mb-14 space-y-6">
              <p className="text-white/95 text-lg leading-relaxed">
                Textile processing chemicals play a critical role in pretreatment,
                bleaching, dyeing, and finishing by improving fabric absorbency,
                enhancing whiteness, and ensuring uniform dye penetration. BellChem
                supplies carefully selected processing chemicals engineered for
                consistent performance across cotton, blended, and specialty textiles.
              </p>

              <p className="text-white/90 text-lg leading-relaxed">
                Our processing chemical range is trusted by dye houses, garment
                manufacturers, and fabric processors seeking optimized workflows,
                reduced defects, and reliable batch-to-batch results. BellChem supports
                bulk supply, technical guidance, and customized solutions worldwide.
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
              Textile Processing Chemical Range
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {products.map((product, i) => (
                <Card key={i}>
                  <CardHeader>
                    <CardTitle>{product.name}</CardTitle>
                    <CardDescription>{product.description}</CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div>
                      <h3 className="font-semibold mb-2">Specifications</h3>
                      <ul className="space-y-1 text-sm">
                        {product.specifications.map((spec, j) => (
                          <li key={j}>• {spec}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-2">Applications</h3>
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
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* RELATED GLASS */}
          <div className="mb-16 p-8 rounded-2xl bg-black/35 backdrop-blur-md border border-white/20 shadow-[0_0_25px_rgba(0,0,0,0.3)] text-center">

            <h2 className="text-2xl font-bold mb-6 text-white">
              Related Categories
            </h2>

            <div className="flex flex-wrap justify-center gap-6">
              <Link to="/reactivedyes" className="px-6 py-3 rounded-xl bg-black/30 border border-white/15 text-white hover:bg-black/45 transition">
                Reactive Dyes
              </Link>
              <Link to="/directdyes" className="px-6 py-3 rounded-xl bg-black/30 border border-white/15 text-white hover:bg-black/45 transition">
                Direct Dyes
              </Link>
              <Link to="/dischargedyes" className="px-6 py-3 rounded-xl bg-black/30 border border-white/15 text-white hover:bg-black/45 transition">
                Discharge Dyes
              </Link>
              <Link to="/textileauxiliaries" className="px-6 py-3 rounded-xl bg-black/30 border border-white/15 text-white hover:bg-black/45 transition">
                Textile Auxiliaries
              </Link>
            </div>

          </div>

          {/* CTA */}
          <div className="bg-blue-50 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">
              Need Custom Textile Processing Solutions?
            </h2>

            <p className="mb-6">
              Contact our technical experts for optimized formulations and
              process support tailored to your production requirements.
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
