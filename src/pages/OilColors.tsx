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
import OilColorsImage from "@/assets/oil-colors.jpg";

const products = [
  {
    name: "Oil Red",
    description:
      "Bright, oil-soluble red dye suitable for oils, waxes, polishes, and hydrocarbon systems.",
    specifications: [
      "Solubility: Excellent in oils & hydrocarbons",
      "Heat Stability: 140–160°C",
      "Light Fastness: 4–5",
      "Shade: Bright Red"
    ],
    applications: ["Oils", "Polishes", "Waxes", "Lubricants", "Coatings"]
  },
  {
    name: "Oil Yellow 3",
    description:
      "High-strength yellow oil color with strong brightness and excellent dispersibility.",
    specifications: [
      "Solubility: High in most oils & solvents",
      "Heat Stability: Up to 180°C",
      "Light Fastness: 4",
      "Shade: Golden Yellow"
    ],
    applications: ["Inks", "Oils", "Greases", "Plastic Coloring"]
  },
  {
    name: "Oil Blue",
    description:
      "Brilliant blue oil-soluble dye with strong tinting strength and stability.",
    specifications: [
      "Solubility: Excellent in mineral and synthetic oils",
      "Heat Stability: 160–180°C",
      "Light Fastness: 5",
      "Shade: Deep Blue"
    ],
    applications: ["Solvent-based inks", "Plastic coloration", "Industrial lubricants"]
  },
  {
    name: "Oil Green",
    description:
      "Stable green oil color widely used in industrial oils and solvent-based formulations.",
    specifications: [
      "Solubility: Very high in oils",
      "Heat Stability: 180–200°C",
      "Light Fastness: 4–5",
      "Shade: Green"
    ],
    applications: ["Oils", "Coatings", "Solvent systems", "Marker inks"]
  }
];

const features = [
  "Excellent solubility in oils and hydrocarbons",
  "High thermal stability and consistent performance",
  "Strong tinting strength with clean, bright shades",
  "Suitable for inks, coatings, polishes, and industrial oils",
  "Smooth, non-gritty dispersion quality",
  "Stable under industrial processing conditions"
];

export default function OilColorsPage() {
  return (
    <>
      <SEO
        title="Oil Colors Supplier in India"
        description="BellChem (A. K. Jain & Co.) supplies oil colors and oil-soluble dyes for inks, lubricants, oils, coatings, and industrial applications."
        canonical="https://www.bellchem.in/oilcolors"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          "@id": "https://www.bellchem.in/oilcolors#service",
          "name": "Oil Colors Supply",
          "serviceType": "Bulk Oil Colors & Oil-Soluble Dyes Supplier",
          "provider": {
            "@type": "Organization",
            "@id": "https://www.bellchem.in/#organization",
            "name": "A. K. Jain & Co. (BellChem)"
          },
          "areaServed": "Worldwide",
          "audience": {
            "@type": "BusinessAudience",
            "audienceType": "Industrial Manufacturers & Ink Producers"
          }
        }}
        breadcrumbs={[
          { name: "Home", url: "https://www.bellchem.in/" },
          { name: "Products", url: "https://www.bellchem.in/products" },
          { name: "Oil Colors", url: "https://www.bellchem.in/oilcolors" }
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
          title="High-Purity Oil Colors"
          description="BellChem supplies premium oil-soluble colors engineered for oils, waxes, inks, lubricants, and coatings, offering excellent solubility, thermal stability, and vibrant industrial shades."
          badges={[
            { icon: <Star className="h-4 w-4 fill-current" />, label: "Premium Industrial Grades" },
            { icon: <Award className="h-4 w-4" />, label: "Industry & Export Approved" },
          ]}
          image={
            <div className="rounded-2xl overflow-hidden shadow-professional aspect-[16/10] max-h-[360px] w-full">
              <OptimizedImage
                src={OilColorsImage}
                alt="Oil colors and oil-soluble dyes for industrial applications"
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
              "Oil colors are oil-soluble dyes used where transparency, solubility, and thermal stability are required. BellChem supplies carefully selected oil colors for industrial formulations that demand reliable dispersion and shade consistency.",
              "Our oil colors are widely used in inks, lubricants, waxes, polishes, coatings, and solvent-based systems, supporting stable coloration across demanding manufacturing environments."
            ]}
            features={features}
          />

          {/* PRODUCTS */}
          <div className="mb-16">
            <Reveal>
              <h2 className="text-2xl font-bold mb-8 text-foreground">
                Oil Color Products for Industrial Applications
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
                          <span
                            key={j}
                            className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                          >
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
              <Link
                to="/solventdyes"
                className="px-6 py-3 rounded-xl bg-card border border-border text-foreground hover:border-primary hover:text-primary shadow-soft transition-colors"
              >
                Solvent Dyes
              </Link>

              <Link
                to="/pigmentdyes"
                className="px-6 py-3 rounded-xl bg-card border border-border text-foreground hover:border-primary hover:text-primary shadow-soft transition-colors"
              >
                Pigment Dyes
              </Link>

              <Link
                to="/industrialchemicals"
                className="px-6 py-3 rounded-xl bg-card border border-border text-foreground hover:border-primary hover:text-primary shadow-soft transition-colors"
              >
                Industrial Chemicals
              </Link>
            </div>
          </Reveal>

          {/* CTA */}
          <Reveal className="bg-gradient-hero rounded-2xl p-10 text-center">
            <h2 className="text-2xl font-bold mb-4 text-white">
              Looking for Custom Oil Colors?
            </h2>
            <p className="mb-6 text-white/85 max-w-xl mx-auto">
              Connect with BellChem for bulk supply, custom shades,
              and technical formulation support.
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
