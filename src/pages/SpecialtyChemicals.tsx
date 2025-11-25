import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle, Star, Award } from "lucide-react";
import { Link } from "react-router-dom";
import chemicalLab from "@/assets/chemical-lab.jpg";

const SpecialtyChemicals = () => {
  const products = [
    {
      name: "BFF Gel",
  description: "High-strength fixing and film-forming gel used to enhance pigment adhesion, improve fastness, and stabilise print paste consistency.",
  specifications: ["Form: Gel", "Ionic Nature: Anionic/Non-ionic (varies by grade)", "Usage: 1%–3%"],
  applications: ["Pigment Printing", "Print Paste Stabilisation", "Fastness Improvement"]
    },
    {
      name: "Alphox 200",
  description: "Non-ionic surfactant used as an efficient wetting, emulsifying, and detergency agent in textile pretreatment and dyeing.",
  specifications: ["Ionic Nature: Non-ionic", "Form: Liquid", "Active Content: 99%", "HLB Value: ~13"],
  applications: ["Scouring", "Wetting", "Dye Bath Additive", "Emulsification"]
    },
    {
      name: "Emulsifier",
  description: "Non-ionic surfactant used to emulsify oils, silicones, and hydrophobic chemicals for stable textile processing formulations.",
  specifications: ["Ionic Nature: Non-ionic", "Form: Liquid", "Usage: 0.5%–2%"],
  applications: ["Scouring", "Emulsification", "Dyeing", "Softener Formulations"]
    },
    {
      name: "Rasis Salt (Resist Salt)",
  description: "Speciality dyeing auxiliary used to control dye absorption and improve levelling during reactive dyeing processes.",
  specifications: ["Form: Powder", "Ionic Nature: Anionic", "Solubility: Completely soluble in water"],
  applications: ["Reactive Dyeing", "Levelling", "Shade Control", "Pastel Shades"]
    }
  ];

  const features = [
    "Custom formulation capabilities",
    "Technical support and consultation",
    "Flexible packaging options",
    "Process optimization expertise",
    "Quality assurance protocols",
    "Regulatory compliance support"
  ];

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
            <h1 className="text-2xl font-bold text-gray-900">Specialty Chemicals</h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-3xl">🧪</div>
              <h2 className="text-3xl font-bold text-gray-900">Specialty Chemicals</h2>
            </div>
            <p className="text-lg text-gray-600 mb-6">
              Custom formulated chemicals for specific industrial processes and applications. 
              Our specialty chemicals are designed to meet unique requirements and provide 
              optimal performance in specialized applications.
            </p>
            <div className="flex items-center space-x-4 mb-6">
              <div className="flex items-center space-x-1">
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <span className="text-sm font-medium">Custom Formulated</span>
              </div>
              <div className="flex items-center space-x-1">
                <Award className="h-5 w-5 text-blue-500" />
                <span className="text-sm font-medium">Technical Support</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img 
                src={chemicalLab}
                alt="Specialty chemicals in laboratory setting"
                className="w-full h-[400px] object-cover"
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
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Some of our Specialty Chemical Products</h3>
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
                    <h4 className="font-semibold text-gray-900 mb-2">Specifications:</h4>
                    <ul className="space-y-1">
                      {product.specifications.map((spec, specIndex) => (
                        <li key={specIndex} className="text-sm text-gray-600 flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Applications:</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.applications.map((app, appIndex) => (
                        <span key={appIndex} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
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

        {/* Contact CTA */}
        <div className="bg-blue-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Need Custom Specialty Chemicals?</h3>
          <p className="text-gray-600 mb-6">
            Contact our technical team for custom formulations and process optimization.
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

export default SpecialtyChemicals;


