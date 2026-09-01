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
import textileDyes from "@/assets/textile-dyes.jpg";

const products = [
  {
    name: "Procion MX Red 2B",
    description:
      "Brilliant fiber-reactive red dye (dichlorotriazine) for cotton with excellent wash fastness.",
    specifications: [
      "Wash Fastness: 4–5 (ISO 105-C06)",
      "Light Fastness: 5–6 (ISO 105-B02)",
      "pH Range (for fixation): ~10.5–11.5"
    ],
    applications: ["Cotton", "Viscose", "Linen"]
  },
  {
    name: "Procion MX Blue",
    description:
      "High-strength fiber-reactive blue dye with good leveling and bright shade.",
    specifications: [
      "Wash Fastness: 4–5",
      "Light Fastness: 5–6",
      "pH Range (for fixation): ~10.5–11.5"
    ],
    applications: ["Cotton", "Rayon", "Cellulosic blends"]
  },
  {
    name: "Remazol Turquoise Blue (Vinyl Sulphone)",
    description:
      "Medium-brand vinyl-sulphone reactive dye giving vivid turquoise tones with high fixation.",
    specifications: [
      "Wash Fastness: 4 (ISO 105-C06)",
      "Light Fastness: 4–5",
      "pH Range (for dye bath): ~11.0–12.0"
    ],
    applications: ["Cotton", "Rayon"]
  },
  {
    name: "Remazol Golden Yellow",
    description:
      "Bright yellow vinyl-sulphone reactive dye with strong color yield and good leveling.",
    specifications: [
      "Wash Fastness: 4–5",
      "Light Fastness: 4–6",
      "pH Range (for dyeing): ~11.0–12.0"
    ],
    applications: ["Cellulosic fibers", "Cotton", "Viscose"]
  }
];

const features = [
  "Excellent wash fastness properties",
  "Superior color strength and brightness",
  "Good migration resistance",
  "Wide pH range compatibility",
  "Environmentally friendly formulations",
  "Consistent batch-to-batch quality"
];

export default function ReactiveDyesPage() {
  return (
    <>
      <SEO
        title="Reactive Dyes Supplier in India"
        description="BellChem (A. K. Jain & Co.) supplies high-quality reactive dyes for cotton and cellulosic fibers with excellent wash fastness, color strength, and industrial performance."
        canonical="https://www.bellchem.in/reactivedyes"
        breadcrumbs={[
          { name: "Home", url: "https://www.bellchem.in/" },
          { name: "Products", url: "https://www.bellchem.in/products" },
          { name: "Reactive Dyes", url: "https://www.bellchem.in/reactivedyes" }
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
          title="High-Performance Reactive Dyes"
          description="High-quality reactive dyes for cotton and cellulosic fibers, formulated for excellent wash fastness, bright shades, and reliable textile processing performance."
          badges={[
            { icon: <Star className="h-4 w-4 fill-current" />, label: "Premium Industrial Quality" },
            { icon: <Award className="h-4 w-4" />, label: "Industry & Export Approved" },
          ]}
          image={
            <div className="rounded-2xl overflow-hidden shadow-professional aspect-[16/10] max-h-[360px] w-full">
              <OptimizedImage
                src={textileDyes}
                alt="Reactive dyes for cotton and cellulosic fibers"
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
              "Reactive dyes are water-soluble dyes that form a covalent bond with cellulosic fibers, resulting in excellent wash fastness and long-lasting color. BellChem supplies carefully selected reactive dyes suitable for modern textile dyeing and printing processes.",
              "Our reactive dye range is widely used by textile processors, garment manufacturers, and fabric dye houses seeking consistent shade, strong fixation, and reliable batch-to-batch performance."
            ]}
            features={features}
          />

          {/* PRODUCTS */}
          <div className="mb-16">
            <Reveal className="inline-block bg-card border border-border rounded-2xl shadow-soft px-6 py-4 mb-8">
              <h2 className="text-2xl font-bold text-foreground">
                Selected Reactive Dye Products
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
              Need Custom Reactive Dyes?
            </h2>

            <p className="mb-6 text-white/85 max-w-xl mx-auto">
              Contact our technical team for custom formulations, shade matching,
              and application support.
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
