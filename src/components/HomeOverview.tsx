import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Building2, Award, Phone } from "lucide-react";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";
import SectionIntro from "@/components/SectionIntro";
import OptimizedImage from "@/components/OptimizedImage";
import teamImage from "@/assets/hero-image.jpg";
import textileDyesImage from "@/assets/textile-dyes.jpg";
import facilityImage from "@/assets/manufacturing-facility.jpg";

const overviewSections = [
  {
    title: "About Bell Chem",
    description:
      "Discover our 40+ years of excellence in this industry, our commitment to quality, and our journey from a modest beginning to becoming India's trusted partner in dyes and chemical supply.",
    icon: Building2,
    link: "/about",
    linkText: "Learn More About Us",
    image: teamImage,
    alt: "Bell Chem team in a business meeting discussing strategy",
    stats: [
      { label: "Years Experience", value: "40+" },
      { label: "Products", value: "1000+" },
      { label: "Happy Clients", value: "200+" },
    ],
  },
  {
    title: "Our Products",
    description:
      "Explore our comprehensive range of industrial dyes and chemicals. From reactive dyes to specialty chemicals, we provide solutions for diverse industrial applications.",
    icon: Award,
    link: "/products",
    linkText: "View All Products",
    image: textileDyesImage,
    alt: "Vibrant textile dyes and chemical pigments in various colors",
    stats: [
      { label: "Dye Categories", value: "6+" },
      { label: "Chemical Types", value: "4+" },
      { label: "Industries Served", value: "6+" },
    ],
  },
  {
    title: "Industries We Serve",
    description:
      "We serve leading companies across diverse industries including textile, printing, paint & coatings, and more with tailored solutions built around each sector's requirements.",
    icon: Users,
    link: "/industries",
    linkText: "Explore Industries",
    image: facilityImage,
    alt: "Modern manufacturing facility supplying industrial chemicals",
    stats: [
      { label: "Textile", value: "✓" },
      { label: "Printing", value: "✓" },
      { label: "Coatings", value: "✓" },
    ],
  },
];

const HomeOverview = () => {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionIntro
          title={<>Why Choose <span className="bg-gradient-primary bg-clip-text text-transparent">Bell Chem</span></>}
          description="Four decades of expertise, innovation, and commitment to quality make us the preferred choice across India."
        />

        <div className="space-y-20 lg:space-y-28 mb-20">
          {overviewSections.map((section, index) => {
            const reversed = index % 2 === 1;

            const imageBlock = (
              <Reveal delay={0} animation="scale" className="relative">
                <div className="rounded-3xl overflow-hidden shadow-professional">
                  <OptimizedImage
                    src={section.image}
                    alt={section.alt}
                    className="w-full h-[360px] lg:h-[420px] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    width={800}
                    height={420}
                  />
                </div>
              </Reveal>
            );

            const textBlock = (
              <Reveal
                delay={100}
                className="bg-card border border-border rounded-3xl shadow-elegant p-8 sm:p-10 space-y-6 transition-all duration-500 ease-out group-hover:shadow-professional group-hover:border-primary/40"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                  <section.icon className="w-7 h-7 text-primary" />
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-foreground">{section.title}</h3>

                <p className="text-muted-foreground leading-relaxed text-lg">{section.description}</p>

                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
                  {section.stats.map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="text-lg font-bold text-primary">
                        <CountUp value={stat.value} />
                      </div>
                      <div className="text-xs text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <div className="inline-flex items-center gap-2 font-semibold text-primary">
                  {section.linkText}
                  <ArrowRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1.5" />
                </div>
              </Reveal>
            );

            return (
              <Link
                key={section.title}
                to={section.link}
                className="group block rounded-3xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-background transition-transform duration-500 ease-out hover:-translate-y-1"
              >
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {reversed ? (
                    <>
                      <div className="lg:order-2">{imageBlock}</div>
                      <div className="lg:order-1">{textBlock}</div>
                    </>
                  ) : (
                    <>
                      {imageBlock}
                      {textBlock}
                    </>
                  )}
                </div>
              </Link>
            );
          })}
        </div>

        {/* Call to Action */}
        <Reveal className="text-center bg-card rounded-2xl p-8 shadow-soft border border-border">
          <h3 className="text-2xl font-bold mb-4 text-foreground">Ready to Get Started?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Contact our team today for a consultation and discover how Bell Chem can provide the perfect dyes and chemical solutions for your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-transparent text-primary border-2 border-primary hover:bg-primary hover:text-primary-foreground shadow-elegant transition-all hover:scale-[1.03]">
                <Phone className="w-5 h-5 mr-2" />
                Contact Us Now
              </Button>
            </Link>
            <Link to="/products">
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white transition-all hover:scale-[1.03]">
                View Product Catalog
              </Button>
            </Link>
          </div>
        </Reveal>

      </div>
    </section>
  );
};

export default HomeOverview;
