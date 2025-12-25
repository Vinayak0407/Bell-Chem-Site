import SEO from "@/components/SEO";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle, Star, Award } from "lucide-react";
import { Link } from "react-router-dom";
import textileDyes from "@/assets/textile-dyes.jpg";

const DirectDyes = () => {
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

  return (
    <div className="min-h-screen">

      {/* SEO */}
      <SEO
        title="Direct Dyes Supplier & Exporter in India"
        description="BellChem (A. K. Jain & Co.) is a reliable B2B supplier and exporter of direct dyes for cotton, viscose, and cellulosic fibers. Bulk supply for textile manufacturers."
        canonical="https://www.bellchem.in/directdyes"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          "@id": "https://www.bellchem.in/directdyes#service",
          "name": "Direct Dyes Supply",
          "serviceType": "Bulk Direct Dyes Supplier & Exporter",
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

      {/* HEADER */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center space-x-4">
            <Link to="/products">
              <Button variant="ghost" size="sm" className="flex items-center space-x-2">
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Products</span>
              </Button>
            </Link>
            <div className="h-6 w-px bg-gray-300" />
            <h1 className="text-2xl font-bold text-gray-900">
              Direct Dyes Supplier & Exporter in India
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* HERO */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">

          {/* GLASS BOX */}
          <div
            className="
              p-6 rounded-2xl
              bg-black/35 backdrop-blur-md
              border border-white/20
              shadow-[0_0_25px_rgba(0,0,0,0.3)]
              space-y-6
            "
          >
            <div className="flex items-center space-x-2">
              <div className="text-3xl">🎪</div>
              <h2 className="text-3xl font-bold text-white">
                Cost-Effective Direct Dyes
              </h2>
            </div>

            <p className="text-xl text-white leading-relaxed">
              BellChem supplies high-quality direct dyes engineered for cotton,
              viscose, and other cellulosic fibers. Our direct dyes offer excellent
              value with reliable shade consistency and ease of application.
            </p>

            <div className="space-y-4 text-white">
              <div className="flex items-center space-x-3">
                <Star className="h-5 w-5 text-yellow-300 fill-current" />
                <span>Economical Industrial Grades</span>
              </div>
              <div className="flex items-center space-x-3">
                <Award className="h-5 w-5 text-blue-400" />
                <span>ISO & Export-Compliant Supply</span>
              </div>
            </div>
          </div>

          {/* IMAGE */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg">
            <img
              src={textileDyes}
              alt="Direct dyes for cotton and cellulosic fibers"
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>

        {/* FEATURES */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Key Features of Our Direct Dyes
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* PRODUCTS */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Direct Dye Products for Textile Applications
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <Card key={index} className="shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">{product.name}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Specifications</h3>
                    <ul className="space-y-1">
                      {product.specifications.map((spec, i) => (
                        <li key={i} className="text-sm text-gray-600 flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Applications</h3>
                    <div className="flex flex-wrap gap-2">
                      {product.applications.map((app, i) => (
                        <span key={i} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* RELATED LINKS — GLASS */}
        <div
          className="
            mb-16
            p-6 rounded-2xl
            bg-black/35 backdrop-blur-md
            border border-white/20
            shadow-[0_0_25px_rgba(0,0,0,0.3)]
          "
        >
          <h2 className="text-2xl font-bold text-white mb-6">
            Related Dye Categories
          </h2>
          <div className="flex flex-wrap gap-4">
            <Link to="/reactivedyes" className="text-white/90 hover:text-white hover:underline">
              Reactive Dyes Supplier
            </Link>
            <Link to="/aciddyes" className="text-white/90 hover:text-white hover:underline">
              Acid Dyes Supplier
            </Link>
            <Link to="/dispersedyes" className="text-white/90 hover:text-white hover:underline">
              Disperse Dyes Supplier
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-blue-50 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Need Custom Direct Dye Formulations?
          </h2>
          <p className="text-gray-600 mb-6">
            Our technical team supports bulk supply, shade matching, and customized
            direct dye solutions for textile manufacturers.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Contact Us
            </Button>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default DirectDyes;
