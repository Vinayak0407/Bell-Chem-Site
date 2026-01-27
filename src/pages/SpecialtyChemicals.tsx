import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle, Star, Award } from "lucide-react";
import { Link } from "react-router-dom";
import chemicalLab from "@/assets/chemical-lab.jpg";

const products = [
  {
    name: "BFF Gel",
    description:
      "High-strength fixing and film-forming gel used to enhance pigment adhesion, improve fastness, and stabilize print paste consistency.",
    specifications: [
      "Form: Gel",
      "Ionic Nature: Anionic / Non-ionic (varies by grade)",
      "Usage Level: 1%–3%"
    ],
    applications: ["Pigment Printing", "Print Paste Stabilisation", "Fastness Improvement"]
  },
  {
    name: "Alphox 200",
    description:
      "Non-ionic surfactant used as an efficient wetting, emulsifying, and detergency agent in textile pretreatment and dyeing.",
    specifications: [
      "Ionic Nature: Non-ionic",
      "Form: Liquid",
      "Active Content: ~99%",
      "HLB Value: ~13"
    ],
    applications: ["Scouring", "Wetting", "Dye Bath Additive", "Emulsification"]
  },
  {
    name: "Emulsifier",
    description:
      "Non-ionic surfactant formulated to emulsify oils, silicones, and hydrophobic chemicals for stable textile processing systems.",
    specifications: [
      "Ionic Nature: Non-ionic",
      "Form: Liquid",
      "Usage Level: 0.5%–2%"
    ],
    applications: ["Scouring", "Emulsification", "Dyeing", "Softener Formulations"]
  },
  {
    name: "Rasis Salt (Resist Salt)",
    description:
      "Specialty dyeing auxiliary used to control dye absorption, improve leveling, and assist in pastel and controlled shade development.",
    specifications: [
      "Form: Powder",
      "Ionic Nature: Anionic",
      "Solubility: Completely soluble in water"
    ],
    applications: ["Reactive Dyeing", "Levelling", "Shade Control", "Pastel Shades"]
  }
];

const features = [
  "Custom-formulated specialty solutions",
  "Export-grade batch consistency",
  "Technical support & process consultation",
  "Flexible bulk packaging options",
  "Quality assurance protocols",
  "Regulatory & compliance support"
];

export default function SpecialtyChemicalsPage() {
  return (
    <>
      <SEO
        title="Specialty Chemicals Supplier in India"
        description="BellChem (A. K. Jain & Co.) supplies specialty chemicals for textile processing, printing, and industrial applications, offering custom formulations and technical support."
        canonical="https://www.bellchem.in/specialtychemicals"
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
              Specialty Chemicals Supplier in India
            </h1>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

          {/* HERO */}
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">

            <div className="p-6 rounded-2xl bg-black/35 backdrop-blur-md border border-white/20 shadow-[0_0_25px_rgba(0,0,0,0.3)] space-y-6">
              <div className="flex items-center space-x-2">
                <div className="text-3xl">🧪</div>
                <h2 className="text-3xl font-bold text-white">
                  High-Performance Specialty Chemicals
                </h2>
              </div>

              <p className="text-xl text-white leading-relaxed">
                Specialty chemicals engineered for precise control, enhanced performance,
                and optimized outcomes in textile printing, dyeing, and processing
                applications.
              </p>

              <div className="space-y-3 text-white">
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-yellow-300 fill-current" />
                  <span>Custom Formulated Solutions</span>
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
                src={chemicalLab}
                alt="Specialty chemicals formulation and laboratory testing"
                className="w-full h-full object-cover"
              />
            </div>

          </div>

          {/* SEO + FEATURES GLASS */}
          <div className="mb-16 p-10 rounded-2xl bg-black/35 backdrop-blur-md border border-white/20 shadow-[0_0_25px_rgba(0,0,0,0.3)] text-center">

            <div className="max-w-4xl mx-auto mb-14 space-y-6">
              <p className="text-white/95 text-lg leading-relaxed">
                BellChem supplies specialty chemicals developed for textile printing,
                dyeing auxiliaries, and industrial processing applications. Our products
                help improve fastness, dispersion, leveling, and overall production efficiency.
              </p>

              <p className="text-white/90 text-lg leading-relaxed">
                We provide bulk supply, custom formulations, technical consultation,
                and compliance documentation for domestic and export customers worldwide.
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
              Specialty Chemical Product Range
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

          {/* CTA */}
          <div className="bg-blue-50 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">
              Need Custom Specialty Chemical Solutions?
            </h2>

            <p className="mb-6">
              Our technical team supports custom formulation, optimization, and bulk
              supply for specialized industrial requirements.
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
