import { Button } from "@/components/ui/button";
import chemicalLab from "@/assets/chemical-lab.jpg";


const Hero = () => {
  return (
    <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-95"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-white border border-white/20">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                40+ Years of Excellence
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
                Premium Chemical Solutions &{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-cyan-200">
                  Industrial Dyes
                </span>
              </h1>
            </div>
            
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Leading manufacturer of high-quality chemicals and industrial dyes in India. 
              Serving textile, pharmaceutical, and manufacturing industries with reliable, 
              cost-effective solutions for over four decades.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-professional">
                Request Quote
              </Button>
              <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm">
                View Catalog
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">1000+</div>
                <div className="text-sm text-white/80">Products</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">200+</div>
                <div className="text-sm text-white/80">Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">40+</div>
                <div className="text-sm text-white/80">Years</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-professional">
              <img 
                src={chemicalLab}
                alt="Modern chemical laboratory with advanced equipment and colorful solutions"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent"></div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -bottom-4 -left-4 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-elegant">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <div className="text-sm font-medium text-gray-900">ISO Certified</div>
              </div>
            </div>
            
            <div className="absolute -top-4 -right-4 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-elegant">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <div className="text-sm font-medium text-gray-900">Quality Assured</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;