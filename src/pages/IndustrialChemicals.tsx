import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import FeatureGrid from "@/components/FeatureGrid";
import Reveal from "@/components/Reveal";
import OptimizedImage from "@/components/OptimizedImage";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
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
        breadcrumbs={[
          { name: "Home", url: "https://www.bellchem.in/" },
          { name: "Products", url: "https://www.bellchem.in/products" },
          { name: "Industrial Chemicals", url: "https://www.bellchem.in/industrialchemicals" }
        ]}
      />

      <Header />

      <main className="min-h-screen">
        <div className="bg-white border-b border-border">
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
          eyebrow="Industrial Chemicals"
          title="Industrial Chemicals for Textile & Manufacturing Applications"
          description="BellChem supplies high-performance industrial chemicals for textile processing, chemical manufacturing, water treatment, and allied industrial operations. Trusted by global importers, processors, and manufacturers for reliable bulk supply, documentation support, and long-term sourcing stability."
          image={
            <div className="rounded-2xl overflow-hidden shadow-professional aspect-[16/10] max-h-[360px] w-full">
              <OptimizedImage
                src={chemicalLab}
                alt="Industrial chemicals manufacturing and quality control laboratory"
                className="w-full h-full object-cover"
                width={800}
                height={500}
              />
            </div>
          }
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

          <FeatureGrid
            title="Key Supply Advantages"
            intro={[
              "BellChem supplies export-grade industrial chemicals used across textile processing, chemical synthesis, rubber manufacturing, fertilizer production, and water treatment industries. Our products are sourced and handled under strict quality control systems.",
              "We support bulk supply, custom packaging, technical documentation, and regulatory compliance for domestic and international customers."
            ]}
            features={features}
          />

          {/* PRODUCTS */}
          <div className="mb-16">
            <Reveal>
              <h2 className="text-2xl font-bold mb-8 text-foreground">
                Industrial Chemical Product Range
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
              Looking for a Reliable Industrial Chemical Supplier?
            </h2>

            <p className="mb-6 text-white/85 max-w-xl mx-auto">
              Contact BellChem for bulk supply, export inquiries, and technical documentation support.
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
