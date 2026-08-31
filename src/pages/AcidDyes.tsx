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
    name: "Acid Red 88",
    description: "High-strength acid red dye for wool and silk with excellent light fastness.",
    specifications: ["Light Fastness: 5–6", "Wash Fastness: 4–5", "pH Range: 3–5"],
    applications: ["Wool", "Silk", "Nylon"]
  },
  {
    name: "Acid Blue 80",
    description: "Brilliant blue acid dye with superior leveling properties.",
    specifications: ["Light Fastness: 6", "Wash Fastness: 4–5", "pH Range: 3–5"],
    applications: ["Wool", "Silk", "Nylon"]
  },
  {
    name: "Acid Yellow 23",
    description: "Bright yellow acid dye with excellent migration resistance.",
    specifications: ["Light Fastness: 5–6", "Wash Fastness: 4–5", "pH Range: 3–5"],
    applications: ["Wool", "Silk", "Nylon"]
  },
  {
    name: "Acid Black 1",
    description: "Deep black acid dye with outstanding color depth.",
    specifications: ["Light Fastness: 5–6", "Wash Fastness: 4–5", "pH Range: 3–5"],
    applications: ["Wool", "Silk", "Nylon"]
  }
];

const features = [
  "Excellent light fastness properties",
  "Superior leveling characteristics",
  "Good migration resistance",
  "Wide pH range compatibility",
  "Environmentally responsible formulations",
  "Consistent batch-to-batch quality"
];

export default function AcidDyesPage() {
  return (
    <>
      <SEO
        title="Acid Dyes Supplier in India"
        description="BellChem (A. K. Jain & Co.) supplies acid dyes for wool, silk, nylon, and industrial textile applications with consistent quality and export-ready standards."
        canonical="https://www.bellchem.in/aciddyes"
        breadcrumbs={[
          { name: "Home", url: "https://www.bellchem.in/" },
          { name: "Products", url: "https://www.bellchem.in/products" },
          { name: "Acid Dyes", url: "https://www.bellchem.in/aciddyes" }
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
          eyebrow="Textile Dyes"
          title="High-Performance Acid Dyes"
          description="BellChem supplies acid dyes engineered for wool, silk, nylon, and specialty textile applications, delivering excellent fastness, leveling, and consistent shade performance."
          badges={[
            { icon: <Star className="h-4 w-4 fill-current" />, label: "Premium B2B Quality" },
            { icon: <Award className="h-4 w-4" />, label: "ISO & Export-Compliant Supply" },
          ]}
          image={
            <div className="rounded-2xl overflow-hidden shadow-professional aspect-[16/10] max-h-[360px] w-full">
              <OptimizedImage
                src={textileDyes}
                alt="Industrial acid dyes for wool, silk, and nylon"
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
              "Acid dyes are water-soluble dyes applied in acidic dye baths, primarily used for wool, silk, nylon, and specialty fibers. BellChem supplies carefully selected acid dyes with excellent leveling behavior and reliable fastness properties.",
              "Our acid dye range is widely used by textile dye houses, carpet manufacturers, and industrial fabric processors requiring consistent shade reproduction and export-ready quality."
            ]}
            features={features}
          />

          {/* PRODUCTS */}
          <div className="mb-16">
            <Reveal>
              <h2 className="text-2xl font-bold mb-8 text-foreground">
                Acid Dye Products for Textile & Industrial Use
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
              <Link to="/reactivedyes" className="px-6 py-3 rounded-xl bg-white border border-border text-foreground hover:border-primary hover:text-primary shadow-soft transition-colors">
                Reactive Dyes
              </Link>

              <Link to="/dispersedyes" className="px-6 py-3 rounded-xl bg-white border border-border text-foreground hover:border-primary hover:text-primary shadow-soft transition-colors">
                Disperse Dyes
              </Link>

              <Link to="/textileprocessing" className="px-6 py-3 rounded-xl bg-white border border-border text-foreground hover:border-primary hover:text-primary shadow-soft transition-colors">
                Textile Processing Chemicals
              </Link>
            </div>
          </Reveal>

          {/* CTA */}
          <Reveal className="bg-gradient-hero rounded-2xl p-10 text-center">
            <h2 className="text-2xl font-bold mb-4 text-white">
              Need Bulk Acid Dyes Supply?
            </h2>

            <p className="mb-6 text-white/85 max-w-xl mx-auto">
              Contact BellChem for bulk supply, export inquiries, and technical dyeing support.
            </p>

            <Link to="/quote">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-professional transition-transform hover:scale-[1.03]">
                Request a Quote
              </Button>
            </Link>
          </Reveal>

        </div>
      </main>

      <Footer />
    </>
  );
}
