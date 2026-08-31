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
        breadcrumbs={[
          { name: "Home", url: "https://www.bellchem.in/" },
          { name: "Products", url: "https://www.bellchem.in/products" },
          { name: "Textile Auxiliaries", url: "https://www.bellchem.in/textileauxiliaries" }
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
          eyebrow="🔬 Textile Auxiliaries"
          title="High-Performance Textile Auxiliaries"
          description="Complete range of textile auxiliaries engineered to improve dyeing, printing, and finishing efficiency across cotton, blended, and specialty fabrics."
          badges={[
            { icon: <Star className="h-4 w-4 fill-current" />, label: "Complete Processing Support" },
            { icon: <Award className="h-4 w-4" />, label: "Export & Industry Approved" },
          ]}
          image={
            <div className="rounded-2xl overflow-hidden shadow-professional aspect-[16/10] max-h-[360px] w-full">
              <OptimizedImage
                src={chemicalLab}
                alt="Textile auxiliaries laboratory testing and quality control"
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
              "BellChem supplies textile auxiliaries designed to enhance process efficiency, shade consistency, and fabric performance across dyeing, printing, and finishing operations. Our auxiliaries support improved leveling, fastness, dispersion, and overall production reliability.",
              "We provide bulk supply, technical guidance, and formulation support for textile processors worldwide, ensuring consistent quality and compliance with international standards."
            ]}
            features={features}
          />

          {/* PRODUCTS */}
          <div className="mb-16">
            <Reveal>
              <h2 className="text-2xl font-bold mb-8 text-foreground">
                Textile Auxiliary Product Range
              </h2>
            </Reveal>

            <div className="grid md:grid-cols-2 gap-8">
              {products.map((product, i) => (
                <Reveal key={i} index={i}>
                  <Card className="h-full hover:shadow-elegant transition-shadow duration-300">
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
              Need Custom Textile Auxiliary Solutions?
            </h2>

            <p className="mb-6 text-white/85 max-w-xl mx-auto">
              Our technical team supports formulation, optimization, and bulk supply for textile processors worldwide.
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
