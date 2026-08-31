import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import FeatureGrid from "@/components/FeatureGrid";
import Reveal from "@/components/Reveal";
import OptimizedImage from "@/components/OptimizedImage";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Award } from "lucide-react";
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
        breadcrumbs={[
          { name: "Home", url: "https://www.bellchem.in/" },
          { name: "Products", url: "https://www.bellchem.in/products" },
          { name: "Textile Processing Chemicals", url: "https://www.bellchem.in/textileprocessing" }
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
          eyebrow="🧵 Textile Processing"
          title="High-Performance Textile Processing Chemicals"
          description="Advanced processing chemicals engineered for pretreatment, bleaching, dyeing, and finishing—delivering improved absorbency, enhanced whiteness, uniform dye uptake, and consistent quality."
          badges={[
            { icon: <Award className="h-4 w-4" />, label: "Industry & Export Approved" },
          ]}
          image={
            <div className="rounded-2xl overflow-hidden shadow-professional aspect-[16/10] max-h-[360px] w-full">
              <OptimizedImage
                src={processingImage}
                alt="Textile processing chemicals for pretreatment and finishing"
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
              "Textile processing chemicals play a critical role in pretreatment, bleaching, dyeing, and finishing by improving fabric absorbency, enhancing whiteness, and ensuring uniform dye penetration. BellChem supplies carefully selected processing chemicals engineered for consistent performance across cotton, blended, and specialty textiles.",
              "Our processing chemical range is trusted by dye houses, garment manufacturers, and fabric processors seeking optimized workflows, reduced defects, and reliable batch-to-batch results. BellChem supports bulk supply, technical guidance, and customized solutions worldwide."
            ]}
            features={features}
          />

          {/* PRODUCTS */}
          <div className="mb-16">
            <Reveal>
              <h2 className="text-2xl font-bold mb-8 text-foreground">
                Textile Processing Chemical Range
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

          {/* RELATED LINKS */}
          <Reveal className="mb-16 p-8 rounded-2xl bg-muted/50 border border-border text-center">
            <h2 className="text-2xl font-bold mb-6 text-foreground">
              Related Categories
            </h2>

            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/reactivedyes" className="px-6 py-3 rounded-xl bg-card border border-border text-foreground hover:border-primary hover:text-primary shadow-soft transition-colors">
                Reactive Dyes
              </Link>
              <Link to="/directdyes" className="px-6 py-3 rounded-xl bg-card border border-border text-foreground hover:border-primary hover:text-primary shadow-soft transition-colors">
                Direct Dyes
              </Link>
              <Link to="/dischargedyes" className="px-6 py-3 rounded-xl bg-card border border-border text-foreground hover:border-primary hover:text-primary shadow-soft transition-colors">
                Discharge Dyes
              </Link>
              <Link to="/textileauxiliaries" className="px-6 py-3 rounded-xl bg-card border border-border text-foreground hover:border-primary hover:text-primary shadow-soft transition-colors">
                Textile Auxiliaries
              </Link>
            </div>
          </Reveal>

          {/* CTA */}
          <Reveal className="bg-gradient-hero rounded-2xl p-10 text-center">
            <h2 className="text-2xl font-bold mb-4 text-white">
              Need Custom Textile Processing Solutions?
            </h2>

            <p className="mb-6 text-white/85 max-w-xl mx-auto">
              Contact our technical experts for optimized formulations and process support tailored to your production requirements.
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
