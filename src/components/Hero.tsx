import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="pt-24 pb-12 lg:pt-32 lg:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Transform Your Business with{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Innovation
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              We help forward-thinking companies unlock their potential through cutting-edge 
              solutions and strategic expertise. Let's build something extraordinary together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="shadow-elegant bg-gradient-primary hover:opacity-90 transition-all">
                Start Your Journey
              </Button>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src={heroImage}
              alt="Modern office environment with collaborative team"
              className="rounded-2xl shadow-soft w-full h-auto"
            />
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-primary rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/20 rounded-full opacity-30 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;