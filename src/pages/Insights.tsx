import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Clock } from "lucide-react";
import { insightPosts } from "@/data/insights";

const InsightsPage = () => {
  return (
    <>
      <SEO
        title="Insights | Dye & Chemical Industry Guides by BellChem"
        description="Practical guides on dye chemistry, compliance, and procurement from BellChem (A. K. Jain & Co.) — for textile processors, exporters, and manufacturers."
        canonical="https://www.bellchem.in/insights"
        breadcrumbs={[
          { name: "Home", url: "https://www.bellchem.in/" },
          { name: "Insights", url: "https://www.bellchem.in/insights" },
        ]}
      />

      <Header />

      <main className="min-h-screen">
        <PageHero
          eyebrow="Insights"
          title="Guides for Buyers & Processors"
          description="Practical articles on dye chemistry, compliance, and procurement — written for the people who actually source and apply these products."
        />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 gap-8">
            {insightPosts.map((post, i) => (
              <Reveal key={post.slug} index={i} className="h-full">
                <Link to={`/insights/${post.slug}`}>
                  <Card className="card-shimmer group h-full hover:shadow-elegant hover:-translate-y-1 transition-all duration-300">
                    <CardContent className="p-8 space-y-4">
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
                          {post.category}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3.5 w-3.5" />
                          {post.readTime}
                        </span>
                      </div>

                      <h2 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {post.title}
                      </h2>

                      <p className="text-muted-foreground leading-relaxed">{post.excerpt}</p>

                      <span className="inline-flex items-center text-primary font-medium text-sm">
                        Read more
                        <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default InsightsPage;
