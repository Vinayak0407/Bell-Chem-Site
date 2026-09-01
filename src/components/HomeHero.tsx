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
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Solid content panel — guaranteed contrast regardless of the swirl behind it */}
          <Reveal className="bg-card border border-border rounded-3xl shadow-professional p-8 sm:p-10 space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
              40+ Years of Excellence
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
              Premium Dyes &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Chemical Solutions
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Leading supplier and exporter of high-quality chemicals and industrial dyes in India.
              Serving textile, pharmaceutical, and manufacturing industries with reliable,
              cost-effective solutions for over four decades.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-hero text-white hover:opacity-90 shadow-professional transition-transform hover:scale-[1.03]"
                onClick={() => navigate("/quote")}
              >
                Request Quote
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="transition-transform hover:scale-[1.03]"
                onClick={() => navigate("/products")}
              >
                View Products
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold text-primary"><CountUp value={stat.value} /></div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </Reveal>

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
            <div className="absolute -bottom-4 -left-4 bg-card border border-border rounded-xl p-4 shadow-elegant">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full" />
                <div className="text-sm font-medium text-foreground">ISO Certified</div>
              </div>
            </div>

            {/* Floating Tag 2 */}
            <div className="absolute -top-4 -right-4 bg-card border border-border rounded-xl p-4 shadow-elegant">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-blue-500 rounded-full" />
                <div className="text-sm font-medium text-foreground">Quality Assured</div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
