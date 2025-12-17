import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle, Scissors, Award } from "lucide-react";
import { Link } from "react-router-dom";
import dischargeImage from "@/assets/DischargeDyes.jpg"; // <-- place your generated image here

const vatDyes = [
  {
    name: "Black BG",
    description:
      "A deep, rich black vat dye known for excellent wash and light fastness. Commonly used in textile dyeing processes requiring durable, long-lasting black shades. Ideal for cotton and cellulosic fiber applications.",
    applications: ["Textiles", "Cotton Dyeing", "Cellulosic Fibers", "Yarn Dyeing"]
  },

  {
    name: "Green FFB",
    description:
      "A bright, high-strength green vat dye offering strong penetration and exceptional colorfastness. Suitable for apparel, home textiles, and industrial dyeing projects requiring vibrant green tones.",
    applications: ["Textile Dyeing", "Cotton Fabrics", "Garments", "Yarn Dyeing"]
  },

  {
    name: "Orange RF",
    description:
      "A vivid orange vat dye known for brilliant shades and outstanding fastness properties. Used extensively in premium textile dyeing for cotton, denim, and cellulosic fibers.",
    applications: ["Cotton Dyeing", "Denim", "Home Textiles", "Industrial Textiles"]
  },

  {
    name: "Pink R",
    description:
      "A strong pink vat dye offering clean tones and reliable shade consistency. Preferred in textile processing for producing bright, distinctive pink shades on cotton.",
    applications: ["Cotton Dyeing", "Textile Printing", "Fashion Fabrics", "Home Textiles"]
  },

  {
    name: "Pink 3B",
    description:
      "A premium pink vat dye delivering deeper and richer tones than standard pink grades. Ideal for apparel, knitted fabrics, and high-quality cotton dyeing.",
    applications: ["Apparel", "Knitted Fabrics", "Cotton Textiles", "Yarn Dyeing"]
  },

  {
    name: "Blue 4B",
    description:
      "A strong blue vat dye commonly used for deep, consistent blue shades in textile processing. Known for superior wash and light fastness.",
    applications: ["Textile Dyeing", "Cotton Fabrics", "Uniforms", "Denim"]
  },

  {
    name: "Blue 4GS",
    description:
      "A bright blue vat dye delivering clean tones and excellent dye uptake. Widely used for premium cotton dyeing and blended textile applications.",
    applications: ["Cotton Dyeing", "Blended Fabrics", "Home Textiles", "Garments"]
  },

  {
    name: "Brown RRD",
    description:
      "A rich brown vat dye offering earthy tones and stable performance in textile dyeing. Ideal for cotton and cellulosic fabrics requiring durable brown shades.",
    applications: ["Cotton Dyeing", "Yarn Dyeing", "Home Furnishings", "Textile Printing"]
  },

  {
    name: "Golden Yellow GOK",
    description:
      "A golden yellow vat dye known for its brightness and high colorfastness. Suitable for apparel, home textiles, and industrial cotton dyeing.",
    applications: ["Textile Dyeing", "Cotton Fabrics", "Denim", "Fashion Textiles"]
  },

  {
    name: "Red Violet RRN",
    description:
      "A red-violet vat dye delivering deep, elegant purple shades with excellent overall fastness. Used in high-end cotton and cellulosic textile dyeing.",
    applications: ["Apparel", "Cotton Textiles", "Yarn Dyeing", "Decorative Fabrics"]
  },

  {
    name: "Scarlet GCN",
    description:
      "A brilliant scarlet vat dye with strong color intensity and exceptional durability. Popular in textile processing for bright, eye-catching red shades.",
    applications: ["Fashion Textiles", "Cotton Dyeing", "Printed Fabrics", "Industrial Dyeing"]
  },

  {
    name: "Violet 2R",
    description:
      "A versatile violet vat dye producing clean purple shades with high fastness properties. Widely used in cotton dyeing and premium textile applications.",
    applications: ["Cotton Fabrics", "Yarn Dyeing", "Garments", "Home Textiles"]
  },

  {
    name: "Yellow GCN",
    description:
      "A bright, high-performance yellow vat dye offering excellent penetration and consistent shade reproduction. Ideal for cotton dyeing and textile finishing.",
    applications: ["Cotton Dyeing", "Textile Printing", "Garments", "Home Textiles"]
  },

  {
    name: "Olive Green B",
    description:
      "A muted olive green vat dye known for stable, earthy tones and dependable performance in textile applications. Used for uniforms, cotton fabrics, and fashion textiles.",
    applications: ["Uniforms", "Cotton Fabrics", "Fashion Apparel", "Industrial Textiles"]
  },

  {
    name: "Grey 3B",
    description:
      "A quality grey vat dye offering smooth, uniform coverage and excellent wash fastness. Commonly used in cotton dyeing for clean and consistent grey results.",
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
      
      {/* Header */}
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
            <h1 className="text-2xl font-bold text-gray-900">Discharge Colors</h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Intro Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div
            className="
              p-6 rounded-2xl 
              bg-black/30 backdrop-blur-md 
              border border-white/20 
              shadow-[0_0_25px_rgba(0,0,0,0.3)]
              space-y-4
            "
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-3xl"><Scissors className="text-green-300" /></div>
              <h2 className="text-3xl font-bold text-white">Discharge Dyes</h2>
            </div>

            <p className="text-xl text-white leading-relaxed mb-6">
              Premium discharge dyes engineered for bright, clean color replacement on 
              dark-dyed fabrics. Ideal for high-contrast textile prints with a soft, 
              breathable finish.
            </p>

            <div className="space-y-4 text-white">
              <div className="flex items-center space-x-3">
                <Award className="h-5 w-5 text-blue-400" />
                <span>Industry Approved</span>
              </div>

              <div className="flex items-center space-x-3">
                <Scissors className="h-5 w-5 text-green-300" />
                <span>Sharp Discharge Effect</span>
              </div>
            </div>

          </div>

          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src={dischargeImage}
                alt="Discharge dyes"
                className="w-full h-[350px] object-cover"
              />
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Key Features</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Products */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Some of our Discharge Color Products</h3>
          <div className="grid md:grid-cols-2 gap-8">

            {vatDyes.map((product, index) => (
              <Card key={index} className="shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">{product.name}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {product.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">

                  {/* REMOVED SPECIFICATIONS – FIXED ERROR */}
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Applications:</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.applications.map((app, aIndex) => (
                        <span
                          key={aIndex}
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

        {/* CTA */}
        <div className="bg-blue-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Need Custom Discharge Shades?</h3>
          <p className="text-gray-600 mb-6">
            Our team can support formulation, shade matching, and customization for your printing needs.
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
