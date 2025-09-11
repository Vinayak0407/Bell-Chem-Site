import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import textileDyes from "@/assets/textile-dyes.jpg";

const Services = () => {
  const products = [
    {
      title: "Textile Dyes",
      description: "Premium quality reactive, disperse, and acid dyes for textile industries with excellent fastness properties.",
      icon: "🎨"
    },
    {
      title: "Industrial Chemicals",
      description: "High-grade chemicals for pharmaceutical, textile, and manufacturing applications with strict quality control.",
      icon: "⚗️"
    },
    {
      title: "Specialty Chemicals",
      description: "Custom formulated chemicals for specific industrial processes and applications.",
      icon: "🧪"
    },
    {
      title: "Pharmaceutical Intermediates",
      description: "API intermediates and fine chemicals for pharmaceutical manufacturing with GMP compliance.",
      icon: "💊"
    }
  ];

  return (
    <section id="products" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero section with image */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our <span className="bg-gradient-primary bg-clip-text text-transparent">Product Range</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Comprehensive range of high-quality chemicals and dyes manufactured using cutting-edge 
              technology and stringent quality control processes to meet international standards.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">ISO 9001:2015 Quality Management</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-gray-700">REACH Compliance for European Markets</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-gray-700">FDA Approved Pharmaceutical Grade</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-professional">
              <img 
                src={textileDyes}
                alt="Vibrant textile dyes and chemical solutions in various colors"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
        
        {/* Product categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="group border-0 shadow-soft hover:shadow-professional transition-all duration-300 hover:-translate-y-2 bg-white">
              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{product.icon}</div>
                <CardTitle className="text-xl font-semibold text-gray-900">{product.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 leading-relaxed">
                  {product.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;