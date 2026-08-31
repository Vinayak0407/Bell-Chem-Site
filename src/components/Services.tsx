import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import textileDyes from "@/assets/textile-dyes.jpg";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { ShieldCheck } from "lucide-react";

const dyes = [
  { title: "Oil Colors", slug: "oilcolors", description: "High-purity oil-soluble colors formulated for deep and uniform shades.", icon: "🎨" },
  { title: "Pigment Colors", slug: "pigmentdyes", description: "Versatile, high-stability pigments providing superior lightfastness and durability.", icon: "🌈" },
  { title: "Solvent Dyes", slug: "solventdyes", description: "Premium solvent-soluble dyes with excellent transparency and fastness.", icon: "💧" },
  { title: "Direct Dyes", slug: "directdyes", description: "Cost-effective dyes for cellulosic fibers with excellent color yield.", icon: "🎪" },
  { title: "Fluorescent Colors", slug: "fluorescent-dyes", description: "High-visibility fluorescent colors for vibrant glowing shades.", icon: "✨" },
  { title: "Acid Dyes", slug: "aciddyes", description: "High-strength acid dyes suitable for wool, silk, nylon, and industrial uses.", icon: "⚗️" },
  { title: "Reactive Dyes", slug: "reactivedyes", description: "Reactive dyes offering excellent fastness and strong fiber bonding.", icon: "🧪" },
  { title: "Discharge Colors", slug: "dischargedyes", description: "High-purity dyes for clean discharge effects and sharp contrast printing.", icon: "✂️" }
];

const chemicals = [
  { title: "Industrial Chemicals", slug: "industrialchemicals", description: "High-grade chemicals for textile, and manufacturing applications.", icon: "⚗️" },
  { title: "Textile Processing", slug: "textileprocessing", description: "High-performance chemicals for every stage of textile processing.", icon: "🏭" },
  { title: "Specialty Chemicals", slug: "specialtychemicals", description: "Precision-engineered specialty chemicals for high-performance applications.", icon: "🧬" },
  { title: "Textile Auxiliaries", slug: "textileauxiliaries", description: "Auxiliaries that enhance efficiency, compatibility, and process control.", icon: "🔬" }
];

const credentials = [
  "ISO 9001:2015 Certified",
  "REACH Compliant",
  "FDA-Approved Grades Available",
];

const Services = () => {
  return (
    <>
      <PageHero
        title="Our Product Range"
        description="A complete range of dyes and chemicals manufactured to meet international quality standards."
        badges={credentials.map((label) => ({ icon: <ShieldCheck className="h-4 w-4" />, label }))}
        image={
          <div className="relative rounded-2xl overflow-hidden shadow-professional">
            <img src={textileDyes} alt="Vibrant textile dyes and chemicals" className="w-full h-[380px] object-cover" loading="lazy" />
          </div>
        }
      />

      <section id="products" className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Industrial Dyes Section */}
          <div className="mb-20">
            <Reveal className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Industrial Dyes</h2>
              <p className="text-lg text-muted-foreground">
                High-performance dyes for textile and industrial applications.
              </p>
            </Reveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {dyes.map((dye, index) => (
                <Reveal key={index} index={index} className="h-full">
                  <Link to={`/${dye.slug}`}>
                    <Card className="group h-full border-0 shadow-soft hover:shadow-professional transition-all duration-300 hover:-translate-y-2 bg-white cursor-pointer">
                      <CardHeader className="text-center pb-4">
                        <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{dye.icon}</div>
                        <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
                          {dye.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="text-center">
                        <CardDescription className="text-muted-foreground">{dye.description}</CardDescription>
                      </CardContent>
                    </Card>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Industrial Chemicals Section */}
          <div className="mb-12">
            <Reveal className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Industrial Chemicals</h2>
              <p className="text-lg text-muted-foreground">
                Reliable chemicals engineered for performance and consistency.
              </p>
            </Reveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {chemicals.map((chemical, index) => (
                <Reveal key={index} index={index} className="h-full">
                  <Link to={`/${chemical.slug}`}>
                    <Card className="group h-full border-0 shadow-soft hover:shadow-professional transition-all duration-300 hover:-translate-y-2 bg-white cursor-pointer">
                      <CardHeader className="text-center pb-4">
                        <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{chemical.icon}</div>
                        <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
                          {chemical.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="text-center">
                        <CardDescription className="text-muted-foreground">{chemical.description}</CardDescription>
                      </CardContent>
                    </Card>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Services;
