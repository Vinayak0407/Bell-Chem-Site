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
    name: "Thickener",
    description:
      "High-viscosity agent used to regulate print paste flow and ensure dimensional clarity in textile printing.",
    specifications: [
      "Type: Natural / Synthetic",
      "Ionic Nature: Non-ionic / Anionic",
      "Viscosity Range: Depends on Grade",
      "Usage Level: Typically 1%–5%"
    ],
    applications: ["Pigment Printing", "Reactive Printing", "Discharge Printing"]
  },
  {
    name: "Binder",
    description:
      "Polymer emulsion employed in pigment printing to form a durable film that binds pigment particles to fabric surfaces.",
    specifications: [
      "Polymer Type: Acrylic Emulsion",
      "Ionic Nature: Anionic",
      "Binder Content: 40%–50%",
      "Curing Temperature: 150°C–170°C"
    ],
    applications: ["Pigment Printing", "Screen Printing", "Fabric Coating"]
  },
  {
    name: "Guar Gum",
    description:
      "Natural polysaccharide-based thickener derived from guar beans, providing excellent print definition and flow control.",
    specifications: [
      "Source: Guar Beans",
      "Ionic Nature: Non-ionic",
      "Viscosity (1%): 2,000–5,000 cps",
      "Form: Off-white Powder"
    ],
    applications: ["Reactive Printing", "Carpet Printing", "Fabric Sizing"]
  },
  {
    name: "Dye Fixer",
    description:
      "After-treatment chemical used to enhance wash fastness and minimize dye bleeding on finished textiles.",
    specifications: [
      "Ionic Nature: Cationic",
      "Form: Liquid",
      "Application pH: 5–6"
    ],
    applications: [
      "Reactive Dyeing",
      "Direct Dyeing",
      "After-Treatment",
      "Color Fastness Improvement"
    ]
  }
];

const features = [
  "Complete textile processing auxiliary range",
  "Export-grade consistency for bulk supply",
  "Technical support & formulation guidance",
  "Process optimization expertise",
  "Quality assurance & batch consistency",
  "Compliance with international standards"
];

export default function TextileAuxiliariesPage() {
  return (
    <>
      <SEO
        title="Textile Auxiliaries Supplier in India"
        description="BellChem (A. K. Jain & Co.) supplies textile auxiliaries for dyeing, printing, and finishing applications, supporting global textile manufacturers."
        canonical="https://www.bellchem.in/textileauxiliaries"
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
              Textile Auxiliaries Supplier in India
            </h1>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

          {/* HERO */}
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">

            <div className="p-6 rounded-2xl bg-black/35 backdrop-blur-md border border-white/20 shadow-[0_0_25px_rgba(0,0,0,0.3)] space-y-6">
              <div className="flex items-center space-x-2">
                <div className="text-3xl">🔬</div>
                <h2 className="text-3xl font-bold text-white">
                  High-Performance Textile Auxiliaries
                </h2>
              </div>

              <p className="text-xl text-white leading-relaxed">
                Complete range of textile auxiliaries engineered to improve dyeing,
                printing, and finishing efficiency across cotton, blended, and
                specialty fabrics.
              </p>

              <div className="space-y-3 text-white">
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-yellow-300 fill-current" />
                  <span>Complete Processing Support</span>
                </div>

                <div className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-blue-400" />
                  <span>Export & Industry Approved</span>
                </div>
              </div>
            </div>

            {/* IMAGE */}
            <div className="rounded-2xl overflow-hidden shadow-lg aspect-[16/10] max-h-[320px] w-full">
              <img
                src={chemicalLab}
                alt="Textile auxiliaries laboratory testing and quality control"
                className="w-full h-full object-cover"
              />
            </div>

          </div>

          {/* SEO + FEATURES GLASS */}
          <div className="mb-16 p-10 rounded-2xl bg-black/35 backdrop-blur-md border border-white/20 shadow-[0_0_25px_rgba(0,0,0,0.3)] text-center">

            <div className="max-w-4xl mx-auto mb-14 space-y-6">
              <p className="text-white/95 text-lg leading-relaxed">
                BellChem supplies textile auxiliaries designed to enhance process efficiency,
                shade consistency, and fabric performance across dyeing, printing, and finishing
                operations. Our auxiliaries support improved leveling, fastness, dispersion,
                and overall production reliability.
              </p>

              <p className="text-white/90 text-lg leading-relaxed">
                We provide bulk supply, technical guidance, and formulation support for textile
                processors worldwide, ensuring consistent quality and compliance with
                international standards.
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
              Textile Auxiliary Product Range
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
              Need Custom Textile Auxiliary Solutions?
            </h2>

            <p className="mb-6">
              Our technical team supports formulation, optimization, and bulk supply
              for textile processors worldwide.
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
