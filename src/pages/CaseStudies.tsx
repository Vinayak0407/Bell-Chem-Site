import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { caseStudies } from "@/data/caseStudies";

const CaseStudiesPage = () => {
  return (
    <>
      <SEO
        title="Success Stories | How Bell Chem Supports Manufacturers"
        description="How Bell Chem (A. K. Jain & Co.) supports textile dye houses, garment exporters, coatings manufacturers, and leather processors with reliable dye and chemical supply."
        canonical="https://www.bellchem.in/success-stories"
        breadcrumbs={[
          { name: "Home", url: "https://www.bellchem.in/" },
          { name: "Success Stories", url: "https://www.bellchem.in/success-stories" },
        ]}
      />

      <Header />

      <main className="min-h-screen">
        <PageHero
          eyebrow="Success Stories"
          title="How We Help: Common Scenarios"
          description="Representative examples of how manufacturers and processors across industries work with Bell Chem to solve real supply challenges — illustrative of the kind of support we provide, not individual client case files."
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {caseStudies.map((study, i) => (
              <Reveal key={study.slug} index={i} className="h-full">
                <Card className="h-full hover:shadow-elegant transition-shadow duration-300">
                  <CardContent className="p-8 space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{study.icon}</span>
                      <div>
                        <div className="text-sm font-medium text-primary">{study.industry}</div>
                        <h2 className="text-xl font-bold text-foreground">{study.title}</h2>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold text-foreground mb-1">The Challenge</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{study.challenge}</p>
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold text-foreground mb-1">Our Approach</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{study.approach}</p>
                    </div>

                    <div className="pt-2 border-t border-border">
                      <h3 className="text-sm font-semibold text-foreground mb-1">Outcome</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{study.outcome}</p>
                    </div>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>

          <Reveal className="bg-gradient-hero rounded-2xl p-10 text-center">
            <h2 className="text-2xl font-bold mb-4 text-white">
              Have a Similar Requirement?
            </h2>
            <p className="mb-6 text-white/85 max-w-xl mx-auto">
              Tell us about your application and we'll recommend the right products for it.
            </p>
            <Link to="/quote">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-professional transition-transform hover:scale-[1.03]">
                Request a Quote
              </Button>
            </Link>
          </Reveal>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default CaseStudiesPage;
