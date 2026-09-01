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
import pigmentDyesImage from "@/assets/PigmentDyes.jpg";

const products = [
  {
    name: "Pigment Red FB",
    description: "A vibrant red pigment offering strong coloration and excellent consistency across formulations.",
    applications: ["Paints", "Plastics", "Printing Inks", "Masterbatches", "Coatings"]
  },
  {
    name: "Pigment Lemon Yellow GRKW",
    description: "A bright lemon-yellow pigment known for its clean shade and reliable performance.",
    applications: ["Textile Printing", "Water-Based Paints", "Inks", "Plastics"]
  },
  {
    name: "Pigment Golden Yellow GR",
    description: "A warm, golden-yellow pigment offering excellent opacity and balanced brightness.",
    applications: ["Paints", "Plastics", "Powder Coatings", "Inks"]
  },
  {
    name: "Pigment Orange G",
    description: "A brilliant orange pigment with high chroma and smooth dispersion.",
    applications: ["PVC Coloring", "Inks", "Coatings", "Textile Prints"]
  },
  {
    name: "Pigment Pink PF",
    description: "A clean-tone pink pigment with good stability for decorative formulations.",
    applications: ["Decorative Coatings", "Plastics", "Textile Printing", "Masterbatches"]
  },
  {
    name: "Pigment Bordeaux BW",
    description: "A deep bordeaux red pigment with strong coloring power.",
    applications: ["Printing Inks", "Industrial Coatings", "Leather Finishes"]
  },
  {
    name: "Pigment Rubine R",
    description: "A bold rubine-red pigment with excellent tinting strength.",
    applications: ["Offset Inks", "Paints", "Plastics", "Textile Printing"]
  },
  {
    name: "Pigment Violet B",
    description: "A deep violet pigment with high shade purity.",
    applications: ["Coatings", "Masterbatches", "Decorative Paints", "Inks"]
  },
  {
    name: "Pigment Navy Blue RJ",
    description: "A strong navy-blue pigment with uniform coverage.",
    applications: ["Paints", "Powder Coatings", "Inks", "Rubber Compounds"]
  },
  {
    name: "Pigment Blue FB",
    description: "A bright blue pigment with consistent tinting strength.",
    applications: ["Plastics", "Masterbatches", "Textile Printing", "Coatings"]
  },
  {
    name: "Pigment Turquoise Blue CB",
    description: "A striking turquoise pigment delivering fresh blue-green tones.",
    applications: ["Water-Based Paints", "Inks", "Polymer Coloring", "Decorative Coatings"]
  },
  {
    name: "Pigment Green GR",
    description: "A high-strength green pigment with stable color performance.",
    applications: ["Plastics", "Coatings", "Printing Inks", "Industrial Finishes"]
  },
  {
    name: "Pigment Brown GR",
    description: "A rich brown pigment with excellent hiding power.",
    applications: ["Leather Coatings", "Wood Finishes", "Inks", "Industrial Paints"]
  },
  {
    name: "Pigment Black G",
    description: "An economical deep black pigment for general-purpose formulations.",
    applications: ["Rubber", "Plastics", "Paints", "General Inks", "PVC Compounds"]
  },
  {
    name: "Pigment Black FBR",
    description: "A cleaner-tone black pigment for applications requiring deeper coverage.",
    applications: ["Water-Based Paints", "Plastics", "Inks", "Industrial Applications"]
  }
];

const features = [
  "High dispersion quality for smooth finishes",
  "Excellent thermal and UV stability",
  "Wide compatibility with paints, inks, plastics and coatings",
  "Strong tinting strength with long-lasting shades",
  "Low particle size for superior consistency",
  "Non-migratory and weather-resistant formulations"
];

export default function PigmentDyesPage() {
  return (
    <>
      <SEO
        title="Pigment Dyes Supplier in India"
        description="BellChem (A. K. Jain & Co.) supplies high-quality pigment dyes and pigment powders for paints, inks, plastics, coatings, and industrial applications."
        canonical="https://www.bellchem.in/pigmentdyes"
        breadcrumbs={[
          { name: "Home", url: "https://www.bellchem.in/" },
          { name: "Products", url: "https://www.bellchem.in/products" },
          { name: "Pigment Dyes", url: "https://www.bellchem.in/pigmentdyes" }
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
          title="High-Performance Pigment Dyes"
          description="BellChem supplies premium pigment dyes engineered for high opacity, excellent dispersion, and long-term color stability across industrial and decorative applications."
          badges={[
            { icon: <Star className="h-4 w-4 fill-current" />, label: "Premium Industrial Grades" },
            { icon: <Award className="h-4 w-4" />, label: "Industry & Export Approved" },
          ]}
          image={
            <div className="rounded-2xl overflow-hidden shadow-professional aspect-[16/10] max-h-[360px] w-full">
              <OptimizedImage
                src={pigmentDyesImage}
                alt="Pigment dyes for paints, inks, plastics and coatings"
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
              "Pigment dyes are insoluble colorants used to impart durable, vibrant coloration to paints, inks, plastics, coatings, and industrial materials. BellChem supplies carefully processed pigment dyes with controlled particle size, high dispersion quality, and consistent shade performance.",
              "Our pigment dye range is widely used by paint manufacturers, ink formulators, plastic processors, and coating applicators who require stable color, weather resistance, and reliable batch-to-batch consistency."
            ]}
            features={features}
          />

          {/* PRODUCTS */}
          <div className="mb-16">
            <Reveal className="inline-block bg-card border border-border rounded-2xl shadow-soft px-6 py-4 mb-8">
              <h2 className="text-2xl font-bold text-foreground">
                Pigment Dye Products for Industrial Applications
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
                    <CardContent>
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
            <h2 className="text-2xl font-bold mb-6 text-foreground">Related Categories</h2>

            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/reactivedyes" className="px-6 py-3 rounded-xl bg-card border border-border text-foreground hover:border-primary hover:text-primary shadow-soft transition-colors">
                Reactive Dyes
              </Link>
              <Link to="/solventdyes" className="px-6 py-3 rounded-xl bg-card border border-border text-foreground hover:border-primary hover:text-primary shadow-soft transition-colors">
                Solvent Dyes
              </Link>
              <Link to="/industrialchemicals" className="px-6 py-3 rounded-xl bg-card border border-border text-foreground hover:border-primary hover:text-primary shadow-soft transition-colors">
                Industrial Chemicals
              </Link>
            </div>
          </Reveal>

          {/* CTA */}
          <Reveal className="bg-gradient-hero rounded-2xl p-10 text-center">
            <h2 className="text-2xl font-bold mb-4 text-white">Need Custom Pigment Shades?</h2>
            <p className="mb-6 text-white/85 max-w-xl mx-auto">
              BellChem’s technical team can assist with shade matching, dispersion optimization,
              and custom pigment formulations.
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
