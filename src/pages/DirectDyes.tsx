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
    name: "Direct Red 28",
    description: "Cost-effective direct red dye for cellulosic fibers with good color yield.",
    specifications: ["Wash Fastness: 3–4", "Light Fastness: 4–5", "pH Range: 7–9"],
    applications: ["Cotton", "Viscose", "Linen"]
  },
  {
    name: "Direct Blue 1",
    description: "Versatile direct blue dye with excellent application properties.",
    specifications: ["Wash Fastness: 3–4", "Light Fastness: 4–5", "pH Range: 7–9"],
    applications: ["Cotton", "Viscose", "Blends"]
  },
  {
    name: "Direct Yellow 4",
    description: "Bright yellow direct dye with good leveling characteristics.",
    specifications: ["Wash Fastness: 3–4", "Light Fastness: 4–5", "pH Range: 7–9"],
    applications: ["Cotton", "Viscose", "Linen"]
  },
  {
    name: "Direct Black 38",
    description: "Deep black direct dye with excellent color depth.",
    specifications: ["Wash Fastness: 3–4", "Light Fastness: 4–5", "pH Range: 7–9"],
    applications: ["Cotton", "Viscose", "Blends"]
  }
];

const features = [
  "Cost-effective dyeing solution",
  "Good color yield and brightness",
  "Easy application on cellulosic fibers",
  "Wide pH range compatibility",
  "Environmentally compliant formulations",
  "Consistent batch-to-batch quality"
];

export default function DirectDyesPage() {
  return (
    <>
      <SEO
        title="Direct Dyes Supplier in India"
        description="BellChem (A. K. Jain & Co.) supplies direct dyes for cotton, viscose, and cellulosic fibers. Reliable bulk supply for textile manufacturers."
        canonical="https://www.bellchem.in/directdyes"
        breadcrumbs={[
          { name: "Home", url: "https://www.bellchem.in/" },
          { name: "Products", url: "https://www.bellchem.in/products" },
          { name: "Direct Dyes", url: "https://www.bellchem.in/directdyes" }
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
          title="Cost-Effective Direct Dyes"
          description="BellChem supplies direct dyes for cotton, viscose, and other cellulosic fibers, offering economical dyeing solutions with reliable shade consistency and ease of application."
          badges={[
            { icon: <Star className="h-4 w-4 fill-current" />, label: "Economical Industrial Grades" },
            { icon: <Award className="h-4 w-4" />, label: "ISO & Export-Compliant Supply" },
          ]}
          image={
            <div className="rounded-2xl overflow-hidden shadow-professional aspect-[16/10] max-h-[360px] w-full">
              <OptimizedImage
                src={textileDyes}
                alt="Direct dyes for cotton and cellulosic fibers"
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
              "Direct dyes are water-soluble dyes applied directly to cellulosic fibers without the need for complex fixation chemistry. BellChem supplies carefully selected direct dyes suitable for economical textile dyeing operations.",
              "Our direct dye range is widely used by textile processors and fabric manufacturers seeking cost efficiency, reliable color yield, and consistent batch performance."
            ]}
            features={features}
          />

          {/* PRODUCTS */}
          <div className="mb-16">
            <Reveal>
              <h2 className="text-2xl font-bold mb-8 text-foreground">
                Direct Dye Products for Textile Applications
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
              <Link to="/reactivedyes" className="px-6 py-3 rounded-xl bg-card border border-border text-foreground hover:border-primary hover:text-primary shadow-soft transition-colors">
                Reactive Dyes
              </Link>

              <Link to="/aciddyes" className="px-6 py-3 rounded-xl bg-card border border-border text-foreground hover:border-primary hover:text-primary shadow-soft transition-colors">
                Acid Dyes
              </Link>

              <Link to="/dispersedyes" className="px-6 py-3 rounded-xl bg-card border border-border text-foreground hover:border-primary hover:text-primary shadow-soft transition-colors">
                Disperse Dyes
              </Link>
            </div>
          </Reveal>

          {/* CTA */}
          <Reveal className="bg-gradient-hero rounded-2xl p-10 text-center">
            <h2 className="text-2xl font-bold mb-4 text-white">
              Need Custom Direct Dye Formulations?
            </h2>

            <p className="mb-6 text-white/85 max-w-xl mx-auto">
              Our technical team supports bulk supply, shade matching,
              and customized direct dye solutions.
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
