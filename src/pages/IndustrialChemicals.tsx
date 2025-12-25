import SEO from "@/components/SEO";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import chemicalLab from "@/assets/chemical-lab.jpg";

const IndustrialChemicals = () => {
  const products = [
    {
      name: "Sodium Hydroxide (NaOH)",
      description:
        "High-purity caustic soda widely used across textile processing and core chemical industries.",
      specifications: ["Purity: 99.5%", "Grade: Industrial", "Packaging: Bulk / Drums"],
      applications: ["Textile Processing", "Chemical Manufacturing", "Water Treatment"]
    },
    {
      name: "Acetic Acid (CH₃COOH)",
      description:
        "Industrial-grade acetic acid suitable for controlled pH adjustment and synthesis processes.",
      specifications: ["Concentration: 32–37%", "Grade: Technical", "Packaging: Bulk / Tankers"],
      applications: ["Chemical Synthesis", "Metal Treatment", "pH Control"]
    },
    {
      name: "Sulfuric Acid (H₂SO₄)",
      description:
        "High-concentration sulfuric acid for fertilizer, metal, and chemical processing industries.",
      specifications: ["Concentration: 98%", "Grade: Technical", "Packaging: Bulk"],
      applications: ["Chemical Manufacturing", "Fertilizer Production", "Metal Processing"]
    },
    {
      name: "Zinc Oxide (ZnO)",
      description:
        "High-quality zinc oxide used in textiles, rubber processing, and specialty chemical applications.",
      specifications: ["Form: Powder", "Grade: Industrial", "Packaging: Bags / Bulk"],
      applications: ["Textile Processing", "Rubber Industry", "Chemical Manufacturing"]
    }
  ];

  const features = [
    "Export-grade industrial chemicals",
    "ISO 9001:2015 certified supply chain",
    "Bulk and custom packaging options",
    "Consistent batch-to-batch quality",
    "Technical documentation & MSDS support",
    "REACH-compliant supply for EU markets"
  ];

  return (
    <div className="min-h-screen">
      {/* SEO */}
      <SEO
        title="Industrial Chemicals Manufacturer & Exporter in India"
        description="BellChem (A. K. Jain & Co.) is a trusted B2B manufacturer and exporter of industrial chemicals for textile processing, chemical manufacturing, and water treatment applications."
        canonical="https://www.bellchem.in/industrialchemicals"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Industrial Chemicals Supply",
          serviceType: "Bulk Industrial Chemicals Manufacturer & Exporter",
          provider: {
            "@type": "Organization",
            name: "A. K. Jain & Co. (BellChem)",
            url: "https://www.bellchem.in"
          },
          areaServed: "Worldwide"
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
              Industrial Chemicals Manufacturer & Exporter in India
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* HERO */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div
            className="
              p-6 rounded-2xl
              bg-black/35 backdrop-blur-md
              border border-white/20
              shadow-[0_0_25px_rgba(0,0,0,0.3)]
              space-y-6
            "
          >
            <h2 className="text-3xl font-bold text-white">
              Industrial Chemicals for Textile & Manufacturing Applications
            </h2>

            <p className="text-xl text-white leading-relaxed">
              BellChem (A. K. Jain & Co.) supplies high-performance industrial chemicals
              for textile processing, chemical manufacturing, water treatment, and
              allied industrial operations. Our products meet international quality
              standards and are supplied with export-ready consistency.
            </p>

            <p className="text-white/80">
              Trusted by global importers, processors, and manufacturers for reliable
              bulk supply, documentation support, and long-term sourcing stability.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src={chemicalLab}
              alt="Industrial chemicals manufacturing and quality control laboratory"
              className="w-full h-[350px] object-cover"
            />
          </div>
        </div>

        {/* FEATURES */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Key Supply Advantages
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm"
              >
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* PRODUCTS */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Industrial Chemical Product Range
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <Card key={index} className="shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">
                    {product.name}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Specifications
                    </h3>
                    <ul className="space-y-1">
                      {product.specifications.map((spec, i) => (
                        <li
                          key={i}
                          className="text-sm text-gray-600 flex items-center space-x-2"
                        >
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Applications
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {product.applications.map((app, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                        >
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

        {/* RELATED — MATCH DISCHARGE PAGE FORMAT */}
        <div className="mb-16">
          <div
            className="
              p-6 rounded-2xl
              bg-black/35 backdrop-blur-md
              border border-white/20
              shadow-[0_0_25px_rgba(0,0,0,0.3)]
              space-y-6
            "
          >
            <h2 className="text-2xl font-bold text-white">
              Related Dye Categories
            </h2>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/reactivedyes"
                className="text-white/90 hover:text-white hover:underline"
              >
                Reactive Dyes Supplier
              </Link>
              <Link
                to="/vatdyes"
                className="text-white/90 hover:text-white hover:underline"
              >
                Vat Dyes Supplier
              </Link>
              <Link
                to="/dischargedyes"
                className="text-white/90 hover:text-white hover:underline"
              >
                Discharge Dyes
              </Link>
              <Link
                to="/textileauxiliaries"
                className="text-white/90 hover:text-white hover:underline"
              >
                Textile Auxiliaries
              </Link>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-blue-50 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Looking for a Reliable Industrial Chemical Supplier?
          </h2>
          <p className="text-gray-600 mb-6">
            Contact BellChem for bulk supply, export inquiries, and technical
            documentation support.
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

export default IndustrialChemicals;
