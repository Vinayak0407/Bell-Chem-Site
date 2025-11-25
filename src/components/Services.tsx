import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import textileDyes from "@/assets/textile-dyes.jpg";

const Services = () => {
  const dyes = [
    { title: "Oil Colors", slug: "oilcolors", description: "High-purity oil-soluble colors formulated for deep and uniform shades.", icon: "🎨" },
    { title: "Pigment Dyes", slug: "pigmentdyes", description: "Versatile, high-stability pigments providing superior lightfastness and durability.", icon: "🌈" },
    { title: "Solvent Dyes", slug: "solventdyes", description: "Premium solvent-soluble dyes with excellent transparency and fastness.", icon: "💧" },
    { title: "Direct Dyes", slug: "directdyes", description: "Cost-effective dyes for cellulosic fibers with excellent color yield.", icon: "🎪" },
    { title: "Fluorescent Colors", slug: "fluorescentcolors", description: "High-visibility fluorescent colors for vibrant glowing shades.", icon: "✨" },
    { title: "Acid Dyes", slug: "aciddyes", description: "High-strength acid dyes suitable for wool, silk, nylon, and industrial uses.", icon: "⚗️" },
    { title: "Reactive Dyes", slug: "reactivedyes", description: "Reactive dyes offering excellent fastness and strong fiber bonding.", icon: "🧪" },
    { title: "Discharge Dyes", slug: "dischargedyes", description: "High-purity dyes for clean discharge effects and sharp contrast printing.", icon: "✂️" }
  ];

  const chemicals = [
    { title: "Industrial Chemicals", slug: "industrialchemicals", description: "High-grade chemicals for pharmaceutical, textile, and manufacturing applications.", icon: "⚗️" },
    { title: "Textile Processing", slug: "textileprocessing", description: "High-performance chemicals for every stage of textile processing.", icon: "🏭" },
    { title: "Specialty Chemicals", slug: "specialtychemicals", description: "Precision-engineered specialty chemicals for high-performance applications.", icon: "🧬" },
    { title: "Textile Auxiliaries", slug: "textileauxiliaries", description: "Auxiliaries that enhance efficiency, compatibility, and process control.", icon: "🔬" }
  ];

  return (
    <section id="products" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ⭐ Our Product Range (same alignment, added glass box ONLY) */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div
            className="
              p-6 rounded-2xl 
              bg-black/30 backdrop-blur-md 
              border border-white/20 
              shadow-[0_0_25px_rgba(0,0,0,0.3)]
              space-y-4
            "
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Our <span className="bg-gradient-primary bg-clip-text text-transparent">Product Range</span>
            </h2>

            <p className="text-xl text-white leading-relaxed mb-6">
              A complete range of dyes and chemicals manufactured to meet international quality standards.
            </p>

            <div className="space-y-4 text-white">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>ISO 9001:2015 Certified</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>REACH Compliant</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span>FDA-Approved Grades Available</span>
              </div>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-professional">
            <img src={textileDyes} alt="Vibrant textile dyes and chemicals" className="w-full h-[400px] object-cover" />
          </div>
        </div>

        {/* ⭐ Industrial Dyes Section (glass block, no alignment changes) */}
        <div className="mb-20">
          <div
            className="
              text-center mb-12 px-8 py-5 
              bg-black/30 backdrop-blur-md 
              border border-white/20 
              shadow-[0_0_25px_rgba(0,0,0,0.3)]
              rounded-2xl w-fit mx-auto
            "
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Industrial Dyes
            </h3>
            <p className="text-lg text-white">
              High-performance dyes for textile and industrial applications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {dyes.map((dye, index) => (
              <Link key={index} to={`/${dye.slug}`}>
                <Card className="group border-0 shadow-soft hover:shadow-professional transition-all duration-300 hover:-translate-y-2 bg-white cursor-pointer">
                  <CardHeader className="text-center pb-4">
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{dye.icon}</div>
                    <CardTitle className="text-xl font-semibold group-hover:text-blue-600 transition-colors">
                      {dye.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="text-primary">{dye.description}</CardDescription>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* ⭐ Industrial Chemicals Section (same pattern) */}
        <div className="mb-12">
          <div
            className="
              text-center mb-12 px-8 py-5 
              bg-black/30 backdrop-blur-md 
              border border-white/20 
              shadow-[0_0_25px_rgba(0,0,0,0.3)]
              rounded-2xl w-fit mx-auto
            "
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Industrial Chemicals
            </h3>
            <p className="text-lg text-white">
              Reliable chemicals engineered for performance and consistency.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {chemicals.map((chemical, index) => (
              <Link key={index} to={`/${chemical.slug}`}>
                <Card className="group border-0 shadow-soft hover:shadow-professional transition-all duration-300 hover:-translate-y-2 bg-white cursor-pointer">
                  <CardHeader className="text-center pb-4">
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{chemical.icon}</div>
                    <CardTitle className="text-xl font-semibold group-hover:text-blue-600 transition-colors">
                      {chemical.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="text-primary">{chemical.description}</CardDescription>
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
