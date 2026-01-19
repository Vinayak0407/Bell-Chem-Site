import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle, Star, Award } from "lucide-react";
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
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          "@id": "https://www.bellchem.in/directdyes#service",
          "name": "Direct Dyes Supply",
          "serviceType": "Bulk Direct Dyes Supplier",
          "provider": {
            "@type": "Organization",
            "@id": "https://www.bellchem.in/#organization",
            "name": "A. K. Jain & Co. (BellChem)"
          },
          "areaServed": "Worldwide",
          "audience": {
            "@type": "BusinessAudience",
            "audienceType": "Textile & Fabric Manufacturers"
          }
        }}
      />

      <Header />

      <main className="min-h-screen">
        {/* TOP HEADER */}
        <div className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center space-x-4">
            <Link to="/products">
              <Button variant="ghost" size="sm" className="flex items-center space-x-2">
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Products</span>
              </Button>
            </Link>
            <div className="h-6 w-px bg-gray-300" />
            <h1 className="text-2xl font-bold text-gray-900">
              Direct Dyes Supplier in India
            </h1>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

          {/* HERO */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="p-6 rounded-2xl bg-black/35 backdrop-blur-md border border-white/20 shadow-[0_0_25px_rgba(0,0,0,0.3)] space-y-6">
              <div className="flex items-center space-x-2">
                <div className="text-3xl">🎪</div>
                <h2 className="text-3xl font-bold text-white">
                  Cost-Effective Direct Dyes
                </h2>
              </div>

              <p className="text-xl text-white leading-relaxed">
                BellChem supplies direct dyes for cotton, viscose, and other
                cellulosic fibers, offering economical dyeing solutions with
                reliable shade consistency and ease of application.
              </p>

              <div className="space-y-3 text-white">
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-yellow-300 fill-current" />
                  <span>Economical Industrial Grades</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-blue-400" />
                  <span>ISO & Export-Compliant Supply</span>
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src={textileDyes}
                alt="Direct dyes for cotton and cellulosic fibers"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* SEO BODY CONTENT */}
          <div className="max-w-4xl mb-16">
            <p className="text-gray-700 leading-relaxed mb-4">
              Direct dyes are water-soluble dyes applied directly to cellulosic
              fibers without the need for complex fixation chemistry.
              BellChem supplies carefully selected direct dyes suitable for
              economical textile dyeing operations.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Our direct dye range is widely used by textile processors and
              fabric manufacturers seeking cost efficiency, reliable color
              yield, and consistent batch performance.
            </p>
          </div>

          {/* FEATURES */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8">Key Features</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, i) => (
                <div key={i} className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* PRODUCTS */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8">
              Direct Dye Products for Textile Applications
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {products.map((product, i) => (
                <Card key={i}>
                  <CardHeader>
                    <CardTitle>{product.name}</CardTitle>
                    <CardDescription>{product.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-1 text-sm text-gray-600">
                      {product.specifications.map((spec, j) => (
                        <li key={j}>• {spec}</li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {product.applications.map((app, j) => (
                        <span
                          key={j}
                          className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                        >
                          {app}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* RELATED LINKS */}
          <div className="mb-16">
            <h2 className="text-xl font-semibold mb-4">Related Categories</h2>
            <div className="flex gap-4">
              <Link to="/reactivedyes" className="text-blue-600 hover:underline">
                Reactive Dyes
              </Link>
              <Link to="/aciddyes" className="text-blue-600 hover:underline">
                Acid Dyes
              </Link>
              <Link to="/dispersedyes" className="text-blue-600 hover:underline">
                Disperse Dyes
              </Link>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-blue-50 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">
              Need Custom Direct Dye Formulations?
            </h2>
            <p className="mb-6">
              Our technical team supports bulk supply, shade matching,
              and customized direct dye solutions.
            </p>
            <Link to="/contact">
              <Button size="lg">Contact Us</Button>
            </Link>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
