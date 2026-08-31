import Header from "@/components/Header";
import HomeHero from "@/components/HomeHero";
import TrustBadges from "@/components/TrustBadges";
import HomeOverview from "@/components/HomeOverview";
import ProcessSteps from "@/components/ProcessSteps";
import HomeTestimonials from "@/components/HomeTestimonials";
import FAQ, { faqStructuredData } from "@/components/FAQ";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import Reveal from "@/components/Reveal";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { caseStudies } from "@/data/caseStudies";

const homeStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.bellchem.in/#organization",
      name: "A. K. Jain & Co. (BellChem)",
      alternateName: ["BellChem", "AK Jain & Co", "Bell Chem India"],
      url: "https://www.bellchem.in",
      logo: "https://www.bellchem.in/logo.png",
      description:
        "B2B supplier and exporter of industrial dyes, pigments, textile auxiliaries, and specialty chemicals for global manufacturing industries.",
      foundingDate: "1984",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Ground Floor, Godown No. 198, Tilak Bazar, Khari Baoli",
        addressLocality: "New Delhi",
        addressRegion: "Delhi",
        postalCode: "110006",
        addressCountry: "IN",
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        email: "vinayak@bellchem.in",
      },
      areaServed: ["India", "Asia", "Middle East", "Africa", "Europe"],
      sameAs: ["https://www.linkedin.com/company/bellchem"],
    },
    faqStructuredData,
  ],
};

const Index = () => {
  return (
    <>
      <SEO
        title="Bell Chem - Premium Chemical Solutions & Industrial Dyes | Leading Manufacturer in India"
        description="Leading manufacturer of high-quality chemicals and industrial dyes in India. Serving textile, pharmaceutical, and manufacturing industries with reliable, cost-effective solutions for over four decades."
        structuredData={homeStructuredData}
      />
      <Header />
      <main>
        <HomeHero />
        <TrustBadges />
        <HomeOverview />
        <ProcessSteps />
        <HomeTestimonials />

        {/* Success Stories teaser */}
        <section className="py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                How We Help
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Representative examples of how we support manufacturers and processors across industries.
              </p>
            </Reveal>

            <div className="grid md:grid-cols-3 gap-8 mb-10">
              {caseStudies.slice(0, 3).map((study, i) => (
                <Reveal key={study.slug} index={i} className="h-full">
                  <Link to="/success-stories">
                    <Card className="group h-full hover:shadow-elegant hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                      <CardContent className="p-6 space-y-3">
                        <span className="text-3xl">{study.icon}</span>
                        <div className="text-sm font-medium text-primary">{study.industry}</div>
                        <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">
                          {study.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{study.outcome}</p>
                      </CardContent>
                    </Card>
                  </Link>
                </Reveal>
              ))}
            </div>

            <Reveal className="text-center">
              <Link to="/success-stories">
                <Button variant="outline" size="lg">
                  View All Success Stories
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </Reveal>
          </div>
        </section>

        <FAQ />
      </main>
      <Footer />
    </>
  );
};

export default Index;
