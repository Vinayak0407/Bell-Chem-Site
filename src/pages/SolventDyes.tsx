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
import solventDyesImage from "@/assets/solvent-dyes.jpg";

const products = [
  {
    name: "Solvent Yellow",
    description: "High-solubility yellow dye with excellent transparency and heat stability.",
    specifications: [
      "Solubility: High in organic solvents",
      "Heat Stability: 220–260°C",
      "Light Fastness: 4–5",
      "Shade: Bright Yellow"
    ],
    applications: ["Plastics", "Wax Coatings", "Polishes", "Fuel Coloring", "Inkjet Inks"]
  },
  {
    name: "Solvent Red",
    description: "Strong red solvent dye offering clean shades and excellent migration resistance.",
    specifications: [
      "Solubility: Excellent in hydrocarbons",
      "Heat Stability: 240–280°C",
      "Light Fastness: 5–6",
      "Shade: Deep Red"
    ],
    applications: ["PVC", "Rubber", "Polystyrene", "Candles", "Industrial Coatings"]
  },
  {
    name: "Solvent Blue",
    description: "Brilliant blue dye with outstanding clarity and durability in solvent-based systems.",
    specifications: [
      "Solubility: High",
      "Heat Stability: 200–240°C",
      "Light Fastness: 6",
      "Shade: Bright Blue"
    ],
    applications: ["Acrylic Resins", "Printing Inks", "Petroleum Products", "Masterbatches"]
  },
  {
    name: "Solvent Green",
    description: "Versatile green dye widely used for plastics, waxes, and fuels.",
    specifications: [
      "Solubility: Excellent",
      "Heat Stability: 230–270°C",
      "Light Fastness: 5–6",
      "Shade: Deep Green"
    ],
    applications: ["Fuel Dyes", "Polyolefins", "Candles", "Adhesives", "Industrial Solvents"]
  }
];

const features = [
  "Exceptional solubility in organic solvents",
  "High thermal stability for industrial applications",
  "Bright and transparent color tones",
  "Excellent compatibility with plastics, waxes, and resins",
  "Non-bleeding and non-migrating formulations",
  "Long-lasting shade consistency"
];

export default function SolventDyesPage() {
  return (
    <>
      <SEO
        title="Solvent Dyes Supplier in India"
        description="BellChem (A. K. Jain & Co.) supplies high-quality solvent dyes for plastics, fuels, waxes, inks, and industrial coatings."
        canonical="https://www.bellchem.in/solventdyes"
        breadcrumbs={[
          { name: "Home", url: "https://www.bellchem.in/" },
          { name: "Products", url: "https://www.bellchem.in/products" },
          { name: "Solvent Dyes", url: "https://www.bellchem.in/solventdyes" }
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
          eyebrow="Textile Dyes"
          title="High-Performance Solvent Dyes"
          description="BellChem supplies premium solvent dyes engineered for superior solubility, transparency, and durability across plastics, petroleum products, waxes, and solvent-based ink systems."
          badges={[
            { icon: <Star className="h-4 w-4 fill-current" />, label: "Premium Industrial Grades" },
            { icon: <Award className="h-4 w-4" />, label: "Industry & Export Trusted" },
          ]}
          image={
            <div className="rounded-2xl overflow-hidden shadow-professional aspect-[16/10] max-h-[360px] w-full">
              <OptimizedImage
                src={solventDyesImage}
                alt="Solvent dyes for plastics, fuels, waxes and inks"
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
              "Solvent dyes are oil-soluble colorants used where transparency, thermal stability, and migration resistance are critical. BellChem supplies carefully selected solvent dyes with consistent solubility and shade reliability for industrial processing.",
              "Our solvent dyes are widely used in plastics, petroleum products, waxes, adhesives, inks, and coatings, offering stable coloration and compatibility across demanding manufacturing environments."
            ]}
            features={features}
          />

          {/* PRODUCTS */}
          <div className="mb-16">
            <Reveal>
              <h2 className="text-2xl font-bold mb-8 text-foreground">
                Solvent Dye Products for Industrial Applications
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

          {/* RELATED LINKS */}
          <Reveal className="mb-16 p-8 rounded-2xl bg-muted/50 border border-border text-center">
            <h2 className="text-2xl font-bold mb-6 text-foreground">
              Related Categories
            </h2>

            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/pigmentdyes" className="px-6 py-3 rounded-xl bg-card border border-border text-foreground hover:border-primary hover:text-primary shadow-soft transition-colors">
                Pigment Dyes
              </Link>

              <Link to="/oilcolors" className="px-6 py-3 rounded-xl bg-card border border-border text-foreground hover:border-primary hover:text-primary shadow-soft transition-colors">
                Oil Colors
              </Link>

              <Link to="/industrialchemicals" className="px-6 py-3 rounded-xl bg-card border border-border text-foreground hover:border-primary hover:text-primary shadow-soft transition-colors">
                Industrial Chemicals
              </Link>
            </div>
          </Reveal>

          {/* CTA */}
          <Reveal className="bg-gradient-hero rounded-2xl p-10 text-center">
            <h2 className="text-2xl font-bold mb-4 text-white">Need Custom Solvent Dye Shades?</h2>
            <p className="mb-6 text-white/85 max-w-xl mx-auto">
              BellChem specializes in tailor-made solvent dye formulations for plastics,
              waxes, inks, and petroleum products.
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
