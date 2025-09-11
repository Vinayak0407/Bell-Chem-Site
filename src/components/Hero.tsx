import { Button } from "@/components/ui/button";


const Hero = () => {
  return (
    <section className="pt-24 pb-12 lg:pt-32 lg:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Premium Chemical Solutions &{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Industrial Dyes
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Leading manufacturer of high-quality chemicals and industrial dyes in India. 
              Serving textile, pharmaceutical, and manufacturing industries with reliable, 
              cost-effective solutions since decades.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="shadow-elegant bg-gradient-primary hover:opacity-90 transition-all">
                Request Quote
              </Button>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
                View Catalog
              </Button>
            </div>
          </div>
          
          <div className="relative flex justify-center">
            <div className="relative bg-gradient-primary p-12 rounded-3xl shadow-elegant">
              <img 
                src="/lovable-uploads/20f50eae-d19f-4dcb-949b-a5e4ef9f76aa.png" 
                alt="Bell Chem - Premium Chemical Solutions and Industrial Dyes Manufacturer"
                className="w-64 h-64 object-contain"
              />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-primary rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/20 rounded-full opacity-30 blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;