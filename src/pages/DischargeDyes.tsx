import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import FeatureGrid from "@/components/FeatureGrid";
import Reveal from "@/components/Reveal";
import OptimizedImage from "@/components/OptimizedImage";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Scissors, Award } from "lucide-react";
import { Link } from "react-router-dom";
import dischargeImage from "@/assets/DischargeDyes.jpg";

const dischargeProducts = [
  {
    name: "Black BG",
    description:
      "A deep, rich black discharge dye known for excellent wash and light fastness. Ideal for cotton and cellulosic fiber applications.",
    applications: ["Textiles", "Cotton Dyeing", "Cellulosic Fibers", "Yarn Dyeing"]
  },
  {
    name: "Green FFB",
    description:
      "A bright, high-strength green discharge dye offering sharp discharge and excellent colorfastness.",
    applications: ["Textile Dyeing", "Cotton Fabrics", "Garments", "Yarn Dyeing"]
  },
  {
    name: "Orange RF",
    description:
      "A vivid orange discharge dye delivering brilliant shades and outstanding fastness properties.",
    applications: ["Cotton Dyeing", "Denim", "Home Textiles", "Industrial Textiles"]
  },
  {
    name: "Pink R",
    description:
      "A strong pink discharge dye offering clean tones and reliable shade consistency.",
    applications: ["Cotton Dyeing", "Textile Printing", "Fashion Fabrics", "Home Textiles"]
  },
  {
    name: "Pink 3B",
    description:
      "A premium pink discharge dye delivering deeper and richer tones for high-quality cotton dyeing.",
    applications: ["Apparel", "Knitted Fabrics", "Cotton Textiles", "Yarn Dyeing"]
  },
  {
    name: "Blue 4B",
    description:
      "A strong blue discharge dye widely used for deep, consistent blue shades with excellent fastness.",
    applications: ["Textile Dyeing", "Cotton Fabrics", "Uniforms", "Denim"]
  },
  {
    name: "Blue 4GS",
    description:
      "A bright blue discharge dye delivering clean tones and excellent dye uptake.",
    applications: ["Cotton Dyeing", "Blended Fabrics", "Home Textiles", "Garments"]
  },
  {
    name: "Brown RRD",
    description:
      "A rich brown discharge dye offering stable, earthy tones and dependable performance.",
    applications: ["Cotton Dyeing", "Yarn Dyeing", "Home Furnishings", "Textile Printing"]
  },
  {
    name: "Golden Yellow GOK",
    description:
      "A golden yellow discharge dye known for brightness and high colorfastness.",
    applications: ["Textile Dyeing", "Cotton Fabrics", "Denim", "Fashion Textiles"]
  },
  {
    name: "Red Violet RRN",
    description:
      "A red-violet discharge dye delivering deep, elegant purple shades with excellent fastness.",
    applications: ["Apparel", "Cotton Textiles", "Yarn Dyeing", "Decorative Fabrics"]
  },
  {
    name: "Scarlet GCN",
    description:
      "A brilliant scarlet discharge dye with strong color intensity and durability.",
    applications: ["Fashion Textiles", "Cotton Dyeing", "Printed Fabrics", "Industrial Dyeing"]
  },
  {
    name: "Violet RR",
    description:
      "A versatile violet discharge dye producing clean purple shades with high fastness.",
    applications: ["Cotton Fabrics", "Yarn Dyeing", "Garments", "Home Textiles"]
  },
  {
    name: "Yellow GCN",
    description:
      "A bright, high-performance yellow discharge dye offering consistent shade reproduction.",
    applications: ["Cotton Dyeing", "Textile Printing", "Garments", "Home Textiles"]
  },
  {
    name: "Olive Green B",
    description:
      "A muted olive green discharge dye known for stable, earthy tones.",
    applications: ["Uniforms", "Cotton Fabrics", "Fashion Apparel", "Industrial Textiles"]
  },
  {
    name: "Grey 3B",
    description:
      "A quality grey discharge dye offering smooth, uniform coverage and excellent wash fastness.",
    applications: ["Cotton Dyeing", "Home Textiles", "Apparel", "Yarn Dyeing"]
  }
];

const features = [
  "Sharp discharge effect with high color clarity",
  "Eco-friendly, zinc-free formulations",
  "Excellent penetration with soft-hand feel",
  "Superior performance on dark cotton fabrics",
  "Stable tones with low odor",
  "Consistent results in screen and rotary printing"
];

export default function DischargeDyes() {
  return (
    <>
      <SEO
        title="Discharge Dyes Supplier in India | BellChem"
        description="BellChem (A. K. Jain & Co.) supplies high-performance discharge dyes for textile printing with sharp discharge effects and consistent results on dark fabrics."
        canonical="https://www.bellchem.in/dischargedyes"
        breadcrumbs={[
          { name: "Home", url: "https://www.bellchem.in/" },
          { name: "Products", url: "https://www.bellchem.in/products" },
          { name: "Discharge Dyes", url: "https://www.bellchem.in/dischargedyes" }
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
          title="High-Performance Discharge Dyes"
          description="Premium discharge dyes engineered for bright, clean color replacement on dark-dyed cotton fabrics with soft, breathable finishes."
          badges={[
            { icon: <Award className="h-4 w-4" />, label: "Industry & Export Approved" },
            { icon: <Scissors className="h-4 w-4" />, label: "Sharp, Clean Discharge Effect" },
          ]}
          image={
            <div className="rounded-2xl overflow-hidden shadow-professional aspect-[16/10] max-h-[360px] w-full">
              <OptimizedImage
                src={dischargeImage}
                alt="Discharge dyes for textile printing"
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
              "Discharge dyes are specialized textile dyes used to remove or replace existing colors on dark fabrics, enabling bright designs with soft hand-feel. BellChem supplies high-performance discharge dyes engineered for sharp discharge, consistent penetration, and clean tonal results.",
              "Our discharge dye range is widely adopted by textile printers and garment manufacturers seeking vibrant shades, eco-conscious formulations, and dependable batch-to-batch consistency."
            ]}
            features={features}
          />

          {/* PRODUCTS */}
          <div className="mb-16">
            <Reveal>
              <h2 className="text-2xl font-bold mb-8 text-foreground">
                Discharge Dye Product Range
              </h2>
            </Reveal>

            <div className="grid md:grid-cols-2 gap-8">
              {dischargeProducts.map((product, i) => (
                <Reveal key={i} index={i}>
                  <Card className="h-full hover:shadow-elegant transition-shadow duration-300">
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

          {/* CTA */}
          <Reveal className="bg-gradient-hero rounded-2xl p-10 text-center">
            <h2 className="text-2xl font-bold mb-4 text-white">
              Need Custom Discharge Dye Solutions?
            </h2>

            <p className="mb-6 text-white/85 max-w-xl mx-auto">
              Our technical team supports formulation, shade matching,
              and bulk supply for textile printers worldwide.
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
