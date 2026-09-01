import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import FeatureGrid from "@/components/FeatureGrid";
import Reveal from "@/components/Reveal";
import OptimizedImage from "@/components/OptimizedImage";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Sparkles, Flame } from "lucide-react";
import { Link } from "react-router-dom";
import fluorescentImage from "@/assets/FluorescentDyes.jpg";

const products = [
  {
    name: "Fluorescent Yellow",
    description: "Ultra-bright high-visibility yellow pigment with excellent luminosity and UV reactivity.",
    specifications: [
      "Particle Size: 1–3 µm",
      "Heat Stability: 180–200°C",
      "Light Fastness: Moderate",
      "Form: Fine Powder"
    ],
    applications: ["Textile Printing", "High-Visibility Coatings", "Plastic Coloring", "Inks", "Neon Signages"]
  },
  {
    name: "Fluorescent Pink",
    description: "Intense neon pink shade with excellent dispersion and glowing visual impact.",
    specifications: [
      "Particle Size: 1–3 µm",
      "Heat Stability: 160–190°C",
      "UV Reactivity: High",
      "Form: Fine Powder"
    ],
    applications: ["Fashion Textiles", "Cosmetic Packaging", "Water-Based Inks", "Art Supplies", "Acrylic Paints"]
  },
  {
    name: "Fluorescent Green",
    description: "Bright, vivid neon green with strong opacity and exceptional brightness.",
    specifications: [
      "Particle Size: 1–3 µm",
      "Heat Stability: 170–200°C",
      "Light Fastness: Moderate",
      "Form: Fine Powder"
    ],
    applications: ["Safety Gear", "Plastics", "Posters", "Neon Printing", "Specialty Coatings"]
  },
  {
    name: "Fluorescent Orange",
    description: "High-visibility orange pigment ideal for attention-grabbing designs and safety applications.",
    specifications: [
      "Particle Size: 1–3 µm",
      "Heat Stability: 160–190°C",
      "UV Glow Intensity: High",
      "Form: Fine Powder"
    ],
    applications: ["Road Safety Products", "Advertising Prints", "Inks", "PVC Coloring", "Reflective Textiles"]
  }
];

const features = [
  "High luminance and neon glow under UV light",
  "Excellent dispersion for smooth application",
  "Wide compatibility with inks, plastics, textiles, and coatings",
  "Vivid and long-lasting color brilliance",
  "Strong visual impact for branding and safety uses",
  "Consistent particle size for uniform shade development"
];

export default function FluorescentColorsPage() {
  return (
    <>
      <SEO
        title="Fluorescent Dyes & Neon Colors Supplier in India"
        description="BellChem (A. K. Jain & Co.) supplies industrial-grade fluorescent dyes and neon pigments for textiles, inks, plastics, coatings, and high-visibility applications."
        canonical="https://www.bellchem.in/fluorescent-dyes"
        breadcrumbs={[
          { name: "Home", url: "https://www.bellchem.in/" },
          { name: "Products", url: "https://www.bellchem.in/products" },
          { name: "Fluorescent Dyes", url: "https://www.bellchem.in/fluorescent-dyes" }
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
          title="High-Impact Fluorescent Colors"
          description="BellChem supplies high-performance fluorescent dyes and neon pigments engineered for unmatched vibrancy, UV glow, and visual intensity across industrial applications."
          badges={[
            { icon: <Flame className="h-4 w-4" />, label: "Ultra-Bright Neon Shades" },
            { icon: <Sparkles className="h-4 w-4" />, label: "UV Reactive & High Visibility" },
          ]}
          image={
            <div className="rounded-2xl overflow-hidden shadow-professional aspect-[16/10] max-h-[360px] w-full">
              <OptimizedImage
                src={fluorescentImage}
                alt="Fluorescent dyes and neon pigments for industrial applications"
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
              "Fluorescent dyes and neon pigments are specialized colorants designed to emit high-intensity visible light when exposed to natural or ultraviolet light. BellChem supplies industrial-grade fluorescent dyes formulated for superior brightness, dispersion, and consistency across demanding manufacturing environments.",
              "Our fluorescent color range is widely used by textile printers, ink manufacturers, plastic processors, coating formulators, and safety product manufacturers who require vibrant shades, UV reactivity, and reliable performance."
            ]}
            features={features}
          />

          {/* PRODUCTS */}
          <div className="mb-16">
            <Reveal className="inline-block bg-card border border-border rounded-2xl shadow-soft px-6 py-4 mb-8">
              <h2 className="text-2xl font-bold text-foreground">
                Fluorescent Dye Products for Industrial Applications
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
          <Reveal className="mb-16 p-8 rounded-2xl bg-muted border border-border text-center">
            <h2 className="text-2xl font-bold mb-6 text-foreground">
              Related Dye Categories
            </h2>

            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/pigmentdyes" className="px-6 py-3 rounded-xl bg-card border border-border text-foreground hover:border-primary hover:text-primary shadow-soft transition-colors">
                Pigment Dyes Supplier
              </Link>

              <Link to="/solventdyes" className="px-6 py-3 rounded-xl bg-card border border-border text-foreground hover:border-primary hover:text-primary shadow-soft transition-colors">
                Solvent Dyes Supplier
              </Link>

              <Link to="/textileprocessing" className="px-6 py-3 rounded-xl bg-card border border-border text-foreground hover:border-primary hover:text-primary shadow-soft transition-colors">
                Textile Processing Chemicals
              </Link>
            </div>
          </Reveal>

          {/* CTA */}
          <Reveal className="bg-gradient-hero rounded-2xl p-10 text-center">
            <h2 className="text-2xl font-bold mb-4 text-white">Need Custom Neon Shades?</h2>

            <p className="mb-6 text-white/85 max-w-xl mx-auto">
              BellChem’s experts can develop custom fluorescent shades tailored to
              your industry and performance requirements.
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
