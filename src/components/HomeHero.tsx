import { Button } from "@/components/ui/button";
import OptimizedImage from "@/components/OptimizedImage";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";
import chemicalLab from "@/assets/chemical-lab.jpg";
import { useNavigate } from "react-router-dom";

const stats = [
  { label: "Products", value: "1000+" },
  { label: "Clients", value: "5000+" },
  { label: "Years", value: "40+" },
];

const HomeHero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden">
      {/* Extra scrim directly behind hero text for guaranteed contrast against the swirl */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-background/50 via-background/15 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <Reveal>
              <div className="inline-flex items-center px-4 py-2 bg-background/60 backdrop-blur-md rounded-full text-sm font-medium text-white border border-white/20 shadow-elegant">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
                40+ Years of Excellence
              </div>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white text-shadow-hero">
                Premium Dyes &{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-cyan-200">
                  Chemical Solutions
                </span>
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="text-lg md:text-xl text-white leading-relaxed text-shadow-hero max-w-xl">
                Leading supplier and exporter of high-quality chemicals and industrial dyes in India.
                Serving textile, pharmaceutical, and manufacturing industries with reliable,
                cost-effective solutions for over four decades.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 shadow-professional transition-transform hover:scale-[1.03]"
                  onClick={() => navigate("/quote")}
                >
                  Request Quote
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/60 text-white bg-background/40 hover:bg-background/60 backdrop-blur-md transition-transform hover:scale-[1.03]"
                  onClick={() => navigate("/products")}
                >
                  View Products
                </Button>
              </div>
            </Reveal>

            <Reveal delay={320}>
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/25 bg-background/30 backdrop-blur-sm rounded-xl px-4 -mx-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center py-2">
                    <div className="text-2xl font-bold text-white text-shadow-soft"><CountUp value={stat.value} /></div>
                    <div className="text-sm text-white/90 text-shadow-soft">{stat.label}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right Image Section */}
          <Reveal delay={120} animation="scale" className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-professional">
              <OptimizedImage
                src={chemicalLab}
                alt="Modern chemical laboratory with advanced equipment and colorful solutions"
                className="w-full h-[500px] object-cover"
                width={800}
                height={500}
                priority={true}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
            </div>

            {/* Floating Tag 1 */}
            <div className="absolute -bottom-4 -left-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-elegant animate-float animate-panel-glow">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full" />
                <div className="text-sm font-medium text-gray-900">ISO Certified</div>
              </div>
            </div>

            {/* Floating Tag 2 */}
            <div
              className="absolute -top-4 -right-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-elegant animate-float animate-panel-glow"
              style={{ animationDelay: "1.5s" }}
            >
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-blue-500 rounded-full" />
                <div className="text-sm font-medium text-gray-900">Quality Assured</div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
