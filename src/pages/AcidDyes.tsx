import SEO from "@/components/SEO";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle, Star, Award } from "lucide-react";
import { Link } from "react-router-dom";
import textileDyes from "@/assets/textile-dyes.jpg";

const AcidDyes = () => {
  const products = [
    {
      name: "Acid Red 88",
      description: "High-strength acid red dye for wool and silk with excellent light fastness",
      specifications: ["Light Fastness: 5-6", "Wash Fastness: 4-5", "pH Range: 3-5"],
      applications: ["Wool", "Silk", "Nylon"]
    },
    {
      name: "Acid Blue 80",
      description: "Brilliant blue acid dye with superior leveling properties",
      specifications: ["Light Fastness: 6", "Wash Fastness: 4-5", "pH Range: 3-5"],
      applications: ["Wool", "Silk", "Nylon"]
    },
    {
      name: "Acid Yellow 23",
      description: "Bright yellow acid dye with excellent migration resistance",
      specifications: ["Light Fastness: 5-6", "Wash Fastness: 4-5", "pH Range: 3-5"],
      applications: ["Wool", "Silk", "Nylon"]
    },
    {
      name: "Acid Black 1",
      description: "Deep black acid dye with outstanding color depth",
      specifications: ["Light Fastness: 5-6", "Wash Fastness: 4-5", "pH Range: 3-5"],
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

  return (
    <div className="min-h-screen">

      {/* SEO */}
      <SEO
        title="Acid Dyes Supplier & Exporter in India"
        description="BellChem (A. K. Jain & Co.) is a trusted B2B supplier and exporter of acid dyes for wool, silk, nylon, and industrial applications. Bulk supply, consistent quality, export-ready."
        canonical="https://www.bellchem.in/aciddyes"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          "@id": "https://www.bellchem.in/aciddyes#service",
          "name": "Acid Dyes Supply",
          "serviceType": "Bulk Acid Dyes Supplier & Exporter",
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
              Acid Dyes Supplier & Exporter in India
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* HERO */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">

          {/* ✅ GLASS BOX (ALL TEXT INSIDE) */}
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
              <div className="text-3xl">🎯</div>
              <h2 className="text-3xl font-bold text-white">
                High-Performance Acid Dyes
              </h2>
            </div>

            <p className="text-xl text-white leading-relaxed">
              BellChem supplies export-ready acid dyes engineered for wool, silk,
              nylon, and industrial applications, delivering excellent fastness,
              leveling, and shade consistency.
            </p>

            <div className="space-y-4 text-white">
              <div className="flex items-center space-x-3">
                <Star className="h-5 w-5 text-yellow-300 fill-current" />
                <span>Premium B2B Quality</span>
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
              alt="Industrial acid dyes in various colors"
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>

        {/* FEATURES */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Key Features of Our Acid Dyes
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
            Acid Dye Products for Textile & Industrial Use
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

       {/* RELATED LINKS */}
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
    <Link
      to="/reactivedyes"
      className="text-white/90 hover:text-white transition underline-offset-4 hover:underline"
    >
      Reactive Dyes Supplier
    </Link>

    <Link
      to="/dispersedyes"
      className="text-white/90 hover:text-white transition underline-offset-4 hover:underline"
    >
      Disperse Dyes for Polyester
    </Link>

    <Link
      to="/textileprocessing"
      className="text-white/90 hover:text-white transition underline-offset-4 hover:underline"
    >
      Textile Processing Chemicals
    </Link>
  </div>
</div>


        {/* CTA */}
        <div className="bg-blue-50 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Need Bulk Acid Dyes Supply?
          </h2>
          <p className="text-gray-600 mb-6">
            Contact BellChem for bulk supply, export inquiries, or technical support.
          </p>
          <Link to="/quote">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Request a Quote
            </Button>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default AcidDyes;
