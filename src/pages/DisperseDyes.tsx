import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import FeatureGrid from "@/components/FeatureGrid";
import Reveal from "@/components/Reveal";
import OptimizedImage from "@/components/OptimizedImage";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Star, Award } from "lucide-react";
import { Link } from "react-router-dom";
import textileDyes from "@/assets/textile-dyes.jpg";

const DisperseDyes = () => {
  const products = [
    {
      name: "Disperse Red 60",
      description: "High-strength disperse red dye for polyester with excellent sublimation fastness",
      specifications: ["Sublimation Fastness: 4-5", "Light Fastness: 5-6", "Temperature: 130°C"],
      applications: ["Polyester", "PET", "Synthetic Blends"]
    },
    {
      name: "Disperse Blue 56",
      description: "Brilliant blue disperse dye with superior migration resistance",
      specifications: ["Sublimation Fastness: 4-5", "Light Fastness: 6", "Temperature: 130°C"],
      applications: ["Polyester", "PET", "Nylon"]
    },
    {
      name: "Disperse Yellow 42",
      description: "Bright yellow disperse dye with excellent leveling properties",
      specifications: ["Sublimation Fastness: 4-5", "Light Fastness: 5-6", "Temperature: 130°C"],
      applications: ["Polyester", "PET", "Synthetic Blends"]
    },
    {
      name: "Disperse Black 1",
      description: "Deep black disperse dye with outstanding color depth",
      specifications: ["Sublimation Fastness: 4-5", "Light Fastness: 5-6", "Temperature: 130°C"],
      applications: ["Polyester", "PET", "Nylon"]
    }
  ];

  const features = [
    "Superior sublimation fastness",
    "Excellent migration resistance",
    "High color strength and brightness",
    "Good leveling properties",
    "Wide temperature range compatibility",
    "Environmentally compliant formulation"
  ];

  return (
    <>
      <SEO
        title="Disperse Dyes Supplier in India"
        description="BellChem (A. K. Jain & Co.) supplies premium disperse dyes for polyester and synthetic fibers with superior color strength, migration resistance, and high-temperature performance."
        canonical="https://www.bellchem.in/dispersedyes"
        breadcrumbs={[
          { name: "Home", url: "https://www.bellchem.in/" },
          { name: "Products", url: "https://www.bellchem.in/products" },
          { name: "Disperse Dyes", url: "https://www.bellchem.in/dispersedyes" }
        ]}
      />

      <Header />

      <main className="min-h-screen">
        <div className="bg-card border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Link to="/products">
              <Button variant="ghost" size="sm" className="flex items-center space-x-2 text-muted-foreground hover:text-primary">
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Products</span>
              </Button>
            </Link>
          </div>
        </div>

        <PageHero
          eyebrow="Textile Dyes"
          title="Premium Disperse Dyes"
          description="Premium disperse dyes for polyester and synthetic fibers with superior color strength and migration resistance. Our disperse dyes are engineered for high-temperature applications and excellent performance."
          badges={[
            { icon: <Star className="h-4 w-4 fill-current" />, label: "Premium Quality" },
            { icon: <Award className="h-4 w-4" />, label: "ISO Certified" },
          ]}
          image={
            <div className="rounded-2xl overflow-hidden shadow-professional aspect-[16/10] max-h-[360px] w-full">
              <OptimizedImage
                src={textileDyes}
                alt="Disperse dyes in various colors"
                className="w-full h-full object-cover"
                width={800}
                height={500}
              />
            </div>
          }
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

          <FeatureGrid features={features} />

          {/* PRODUCTS */}
          <div className="mb-16">
            <Reveal>
              <h2 className="text-2xl font-bold mb-8 text-foreground">
                Our Disperse Dye Products
              </h2>
            </Reveal>

            <div className="grid md:grid-cols-2 gap-8">
              {products.map((product, index) => (
                <Reveal key={index} index={index}>
                  <Card className="h-full hover:shadow-elegant transition-shadow duration-300">
                    <CardHeader>
                      <CardTitle>{product.name}</CardTitle>
                      <CardDescription>
                        {product.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Specifications:</h4>
                        <ul className="space-y-1">
                          {product.specifications.map((spec, specIndex) => (
                            <li key={specIndex} className="text-sm text-muted-foreground flex items-center space-x-2">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                              <span>{spec}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Applications:</h4>
                        <div className="flex flex-wrap gap-2">
                          {product.applications.map((app, appIndex) => (
                            <span key={appIndex} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                              {app}
                            </span>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>

          {/* CTA */}
          <Reveal className="bg-gradient-hero rounded-2xl p-10 text-center">
            <h2 className="text-2xl font-bold mb-4 text-white">Need Custom Disperse Dyes?</h2>
            <p className="mb-6 text-white/85 max-w-xl mx-auto">
              Contact our technical team for custom formulations and technical support.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-professional transition-transform hover:scale-[1.03]">
                Contact Us
              </Button>
            </Link>
          </Reveal>

        </div>
      </main>

      <Footer />
    </>
  );
};

export default DisperseDyes;
