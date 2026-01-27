import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import chemicalLab from "@/assets/chemical-lab.jpg";

const products = [
  {
    name: "Sodium Hydroxide (NaOH)",
    description:
      "High-purity caustic soda widely used across textile processing and core chemical industries.",
    specifications: ["Purity: 99.5%", "Grade: Industrial", "Packaging: Bulk / Drums"],
    applications: ["Textile Processing", "Chemical Manufacturing", "Water Treatment"]
  },
  {
    name: "Acetic Acid (CH₃COOH)",
    description:
      "Industrial-grade acetic acid suitable for controlled pH adjustment and synthesis processes.",
    specifications: ["Concentration: 32–37%", "Grade: Technical", "Packaging: Bulk / Tankers"],
    applications: ["Chemical Synthesis", "Metal Treatment", "pH Control"]
  },
  {
    name: "Sulfuric Acid (H₂SO₄)",
    description:
      "High-concentration sulfuric acid for fertilizer, metal, and chemical processing industries.",
    specifications: ["Concentration: 98%", "Grade: Technical", "Packaging: Bulk"],
    applications: ["Chemical Manufacturing", "Fertilizer Production", "Metal Processing"]
  },
  {
    name: "Zinc Oxide (ZnO)",
    description:
      "High-quality zinc oxide used in textiles, rubber processing, and specialty chemical applications.",
    specifications: ["Form: Powder", "Grade: Industrial", "Packaging: Bags / Bulk"],
    applications: ["Textile Processing", "Rubber Industry", "Chemical Manufacturing"]
  }
];

const features = [
  "Export-grade industrial chemicals",
  "ISO 9001:2015 certified supply chain",
  "Bulk and custom packaging options",
  "Consistent batch-to-batch quality",
  "Technical documentation & MSDS support",
  "REACH-compliant supply for EU markets"
];

export default function IndustrialChemicalsPage() {
  return (
    <>
      <SEO
        title="Industrial Chemicals Supplier in India"
        description="BellChem (A. K. Jain & Co.) supplies industrial chemicals for textile processing, chemical manufacturing, and water treatment applications."
        canonical="https://www.bellchem.in/industrialchemicals"
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
              Industrial Chemicals Supplier in India
            </h1>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

          {/* HERO */}
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">

            <div className="p-6 rounded-2xl bg-black/35 backdrop-blur-md border border-white/20 shadow-[0_0_25px_rgba(0,0,0,0.3)] space-y-6">
              <h2 className="text-3xl font-bold text-white">
                Industrial Chemicals for Textile & Manufacturing Applications
              </h2>

              <p className="text-xl text-white leading-relaxed">
                BellChem supplies high-performance industrial chemicals for textile processing,
                chemical manufacturing, water treatment, and allied industrial operations.
              </p>

              <p className="text-white/80">
                Trusted by global importers, processors, and manufacturers for reliable
                bulk supply, documentation support, and long-term sourcing stability.
              </p>
            </div>

            {/* IMAGE */}
            <div className="rounded-2xl overflow-hidden shadow-lg aspect-[16/10] max-h-[320px] w-full">
              <img
                src={chemicalLab}
                alt="Industrial chemicals manufacturing and quality control laboratory"
                className="w-full h-full object-cover"
              />
            </div>

          </div>

          {/* SEO + FEATURES GLASS */}
          <div className="mb-16 p-10 rounded-2xl bg-black/35 backdrop-blur-md border border-white/20 shadow-[0_0_25px_rgba(0,0,0,0.3)] text-center">

            <div className="max-w-4xl mx-auto mb-14 space-y-6">
              <p className="text-white/95 text-lg leading-relaxed">
                BellChem supplies export-grade industrial chemicals used across textile
                processing, chemical synthesis, rubber manufacturing, fertilizer production,
                and water treatment industries. Our products are sourced and handled under
                strict quality control systems.
              </p>

              <p className="text-white/90 text-lg leading-relaxed">
                We support bulk supply, custom packaging, technical documentation,
                and regulatory compliance for domestic and international customers.
              </p>
            </div>

            <h2 className="text-3xl font-bold mb-10 text-white">
              Key Supply Advantages
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
              Industrial Chemical Product Range
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
              Looking for a Reliable Industrial Chemical Supplier?
            </h2>

            <p className="mb-6">
              Contact BellChem for bulk supply, export inquiries, and technical
              documentation support.
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
