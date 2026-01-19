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
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          "@id": "https://www.bellchem.in/aciddyes#service",
          "name": "Acid Dyes Supply",
          "serviceType": "Bulk Acid Dyes Supplier",
          "provider": {
            "@type": "Organization",
            "@id": "https://www.bellchem.in/#organization",
            "name": "A. K. Jain & Co. (BellChem)"
          },
          "areaServed": "Worldwide",
          "audience": {
            "@type": "BusinessAudience",
            "audienceType": "Textile & Industrial Manufacturers"
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
              Acid Dyes Supplier in India
            </h1>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

          {/* HERO */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="p-6 rounded-2xl bg-black/35 backdrop-blur-md border border-white/20 shadow-[0_0_25px_rgba(0,0,0,0.3)] space-y-6">
              <div className="flex items-center space-x-2">
                <div className="text-3xl">🎯</div>
                <h2 className="text-3xl font-bold text-white">
                  High-Performance Acid Dyes
                </h2>
              </div>

              <p className="text-xl text-white leading-relaxed">
                BellChem supplies acid dyes engineered for wool, silk, nylon,
                and specialty textile applications, delivering excellent fastness,
                leveling, and consistent shade performance.
              </p>

              <div className="space-y-3 text-white">
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-yellow-300 fill-current" />
                  <span>Premium B2B Quality</span>
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
                alt="Industrial acid dyes for wool, silk, and nylon"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* SEO BODY CONTENT */}
          <div className="max-w-4xl mb-16">
            <p className="text-gray-700 leading-relaxed mb-4">
              Acid dyes are water-soluble dyes applied in acidic dye baths,
              primarily used for wool, silk, nylon, and specialty fibers.
              BellChem supplies carefully selected acid dyes with excellent
              leveling behavior and reliable fastness properties.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Our acid dye range is widely used by textile dye houses,
              carpet manufacturers, and industrial fabric processors
              requiring consistent shade reproduction and export-ready quality.
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
              Acid Dye Products for Textile & Industrial Use
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
              <Link to="/dispersedyes" className="text-blue-600 hover:underline">
                Disperse Dyes
              </Link>
              <Link to="/textileprocessing" className="text-blue-600 hover:underline">
                Textile Processing Chemicals
              </Link>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-blue-50 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">
              Need Bulk Acid Dyes Supply?
            </h2>
            <p className="mb-6">
              Contact BellChem for bulk supply, export inquiries,
              and technical dyeing support.
            </p>
            <Link to="/quote">
              <Button size="lg">Request a Quote</Button>
            </Link>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
