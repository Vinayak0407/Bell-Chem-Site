import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import textileDyes from "@/assets/textile-dyes.jpg";

const Services = () => {
  const dyes = [
    {
      title: "Reactive Dyes",
      description: "High-quality reactive dyes for cotton and cellulosic fibers with excellent wash fastness and brilliant colors.",
      icon: "🎨"
    },
    {
      title: "Disperse Dyes",
      description: "Premium disperse dyes for polyester and synthetic fibers with superior color strength and migration resistance.",
      icon: "🌈"
    },
    {
      title: "Acid Dyes",
      description: "Specialized acid dyes for wool, silk, and nylon with excellent light fastness and leveling properties.",
      icon: "🎯"
    },
    {
      title: "Direct Dyes",
      description: "Cost-effective direct dyes for cellulosic fibers with good color yield and application versatility.",
      icon: "🎪"
    }
  ];

  const chemicals = [
    {
      title: "Industrial Chemicals",
      description: "High-grade chemicals for pharmaceutical, textile, and manufacturing applications with strict quality control.",
      icon: "⚗️"
    },
    {
      title: "Pharmaceutical Intermediates",
      description: "API intermediates and fine chemicals for pharmaceutical manufacturing with GMP compliance.",
      icon: "💊"
    },
    {
      title: "Specialty Chemicals",
      description: "Custom formulated chemicals for specific industrial processes and applications.",
      icon: "🧪"
    },
    {
      title: "Textile Auxiliaries",
      description: "Complete range of textile processing chemicals including softeners, finishing agents, and auxiliaries.",
      icon: "🔬"
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
            <p className="text-xl text-primary leading-relaxed mb-8">
              Comprehensive range of high-quality chemicals and dyes manufactured using cutting-edge 
              technology and stringent quality control processes to meet international standards.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-primary">ISO 9001:2015 Quality Management</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-primary">REACH Compliance for European Markets</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-primary">FDA Approved Pharmaceutical Grade</span>
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
        
        {/* Dyes Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              <span className="bg-gradient-primary bg-clip-text text-transparent">Industrial Dyes</span>
            </h3>
            <p className="text-lg text-primary max-w-2xl mx-auto">
              Premium quality dyes for textile and industrial applications with superior color fastness and performance.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {dyes.map((dye, index) => (
              <Link key={index} to={`/${dye.title.toLowerCase().replace(/\s+/g, '')}`}>
                <Card className="group border-0 shadow-soft hover:shadow-professional transition-all duration-300 hover:-translate-y-2 bg-white cursor-pointer">
                  <CardHeader className="text-center pb-4">
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{dye.icon}</div>
                    <CardTitle className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">{dye.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="text-primary leading-relaxed">
                      {dye.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Chemicals Section */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              <span className="bg-gradient-primary bg-clip-text text-transparent">Industrial Chemicals</span>
            </h3>
            <p className="text-lg text-primary max-w-2xl mx-auto">
              High-grade chemicals and specialty formulations for diverse industrial applications with strict quality control.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {chemicals.map((chemical, index) => (
              <Link key={index} to={`/${chemical.title.toLowerCase().replace(/\s+/g, '')}`}>
                <Card className="group border-0 shadow-soft hover:shadow-professional transition-all duration-300 hover:-translate-y-2 bg-white cursor-pointer">
                  <CardHeader className="text-center pb-4">
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{chemical.icon}</div>
                    <CardTitle className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">{chemical.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="text-primary leading-relaxed">
                      {chemical.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
