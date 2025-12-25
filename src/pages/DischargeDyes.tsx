import SEO from "@/components/SEO";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle, Scissors, Award } from "lucide-react";
import { Link } from "react-router-dom";
import dischargeImage from "@/assets/DischargeDyes.jpg";

/* FULL PRODUCT LIST — RESTORED */
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

const DischargeDyes = () => {
  return (
    <div className="min-h-screen">

      {/* SEO */}
      <SEO
        title="Discharge Dyes Supplier & Exporter in India"
        description="BellChem (A. K. Jain & Co.) is a trusted B2B supplier and exporter of discharge dyes for textile printing, delivering sharp discharge effects and consistent performance on dark fabrics."
        canonical="https://www.bellchem.in/dischargedyes"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Discharge Dyes Supply",
          "serviceType": "Bulk Discharge Dyes Supplier & Exporter",
          "provider": {
            "@type": "Organization",
            "name": "A. K. Jain & Co. (BellChem)",
            "url": "https://www.bellchem.in"
          },
          "areaServed": "Worldwide"
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
              Discharge Dyes Supplier & Exporter in India
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
            <div className="flex items-center space-x-2">
              <Scissors className="h-8 w-8 text-green-300" />
              <h2 className="text-3xl font-bold text-white">
                High-Performance Discharge Dyes
              </h2>
            </div>

            <p className="text-xl text-white leading-relaxed">
              Premium discharge dyes engineered for bright, clean color replacement
              on dark-dyed cotton fabrics. Ideal for high-contrast textile printing
              with soft, breathable finishes.
            </p>

            <div className="space-y-4 text-white">
              <div className="flex items-center space-x-3">
                <Award className="h-5 w-5 text-blue-400" />
                <span>Industry & Export Approved</span>
              </div>
              <div className="flex items-center space-x-3">
                <Scissors className="h-5 w-5 text-green-300" />
                <span>Sharp, Clean Discharge Effect</span>
              </div>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src={dischargeImage}
              alt="Discharge dyes for textile printing"
              className="w-full h-[350px] object-cover"
            />
          </div>
        </div>

        {/* FEATURES */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Key Features of Our Discharge Dyes
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* PRODUCTS — FULL LIST */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Discharge Dye Product Range
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {dischargeProducts.map((product, index) => (
              <Card key={index} className="shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">{product.name}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <h3 className="font-semibold text-gray-900 mb-2">Applications</h3>
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
            <Link to="/directdyes" className="text-white/90 hover:text-white hover:underline">
              Direct Dyes Supplier
            </Link>
            <Link to="/textileprocessing" className="text-white/90 hover:text-white hover:underline">
              Textile Processing Chemicals
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-blue-50 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Need Custom Discharge Dye Solutions?
          </h2>
          <p className="text-gray-600 mb-6">
            Our technical team supports formulation, shade matching, and bulk supply
            for textile printers and manufacturers worldwide.
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

export default DischargeDyes;
