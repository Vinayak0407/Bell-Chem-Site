import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import FeatureGrid from "@/components/FeatureGrid";
import Reveal from "@/components/Reveal";
import OptimizedImage from "@/components/OptimizedImage";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Star, Award } from "lucide-react";
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
        breadcrumbs={[
          { name: "Home", url: "https://www.bellchem.in/" },
          { name: "Products", url: "https://www.bellchem.in/products" },
          { name: "Specialty Chemicals", url: "https://www.bellchem.in/specialtychemicals" }
        ]}
      />

      <Header />

      <main className="min-h-screen">
        <div className="bg-card border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Link to="/products">
              <Button variant="ghost" size="sm" className="flex items-center space-x-2 text-muted-foreground hover:text-primary">
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Products</span>
              </Button>
            </Link>
          </div>
        </div>

        <PageHero
          eyebrow="🧪 Specialty Chemicals"
          title="High-Performance Specialty Chemicals"
          description="Specialty chemicals engineered for precise control, enhanced performance, and optimized outcomes in textile printing, dyeing, and processing applications."
          badges={[
            { icon: <Star className="h-4 w-4 fill-current" />, label: "Custom Formulated Solutions" },
            { icon: <Award className="h-4 w-4" />, label: "Industry & Export Approved" },
          ]}
          image={
            <div className="rounded-2xl overflow-hidden shadow-professional aspect-[16/10] max-h-[360px] w-full">
              <OptimizedImage
                src={chemicalLab}
                alt="Specialty chemicals formulation and laboratory testing"
                className="w-full h-full object-cover"
                width={800}
                height={500}
              />
            </div>
          }
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

          <FeatureGrid
            intro={[
              "BellChem supplies specialty chemicals developed for textile printing, dyeing auxiliaries, and industrial processing applications. Our products help improve fastness, dispersion, leveling, and overall production efficiency.",
              "We provide bulk supply, custom formulations, technical consultation, and compliance documentation for domestic and export customers worldwide."
            ]}
            features={features}
          />

          {/* PRODUCTS */}
          <div className="mb-16">
            <Reveal className="inline-block bg-card border border-border rounded-2xl shadow-soft px-6 py-4 mb-8">
              <h2 className="text-2xl font-bold text-foreground">
                Specialty Chemical Product Range
              </h2>
            </Reveal>

            <div className="grid md:grid-cols-2 gap-8">
              {products.map((product, i) => (
                <Reveal key={i} index={i}>
                  <Card className="card-shimmer h-full hover:shadow-elegant transition-shadow duration-300">
                    <CardHeader>
                      <CardTitle>{product.name}</CardTitle>
                      <CardDescription>{product.description}</CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        {product.specifications.map((spec, j) => (
                          <li key={j}>• {spec}</li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {product.applications.map((app, j) => (
                          <span key={j} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                            {app}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>

          {/* CTA */}
          <Reveal className="bg-gradient-hero rounded-2xl p-10 text-center">
            <h2 className="text-2xl font-bold mb-4 text-white">
              Need Custom Specialty Chemical Solutions?
            </h2>

            <p className="mb-6 text-white/85 max-w-xl mx-auto">
              Our technical team supports custom formulation, optimization, and bulk supply for specialized industrial requirements.
            </p>

            <Link to="/contact">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-professional transition-transform hover:scale-[1.03]">
                Contact Us
              </Button>
            </Link>
          </Reveal>

        </div>
      </main>

      <Footer />
    </>
  );
}
