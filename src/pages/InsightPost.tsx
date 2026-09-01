import { useParams, Link, Navigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import Reveal from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock } from "lucide-react";
import { insightPosts } from "@/data/insights";

const InsightPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = insightPosts.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/insights" replace />;
  }

  const canonical = `https://www.bellchem.in/insights/${post.slug}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedDate,
    author: {
      "@type": "Organization",
      name: "A. K. Jain & Co. (BellChem)",
    },
    publisher: {
      "@type": "Organization",
      name: "A. K. Jain & Co. (BellChem)",
      logo: { "@type": "ImageObject", url: "https://www.bellchem.in/logo.png" },
    },
    mainEntityOfPage: canonical,
  };

  return (
    <>
      <SEO
        title={post.title}
        description={post.excerpt}
        canonical={canonical}
        ogType="article"
        structuredData={articleSchema}
        breadcrumbs={[
          { name: "Home", url: "https://www.bellchem.in/" },
          { name: "Insights", url: "https://www.bellchem.in/insights" },
          { name: post.title, url: canonical },
        ]}
      />

      <Header />

      <main className="min-h-screen">
        <div className="bg-card border-b border-border">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Link to="/insights">
              <Button variant="ghost" size="sm" className="flex items-center space-x-2 text-muted-foreground hover:text-primary">
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Insights</span>
              </Button>
            </Link>
          </div>
        </div>

        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Reveal className="bg-card border border-border rounded-3xl shadow-elegant p-8 sm:p-12">
            <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
                {post.category}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" />
                {post.readTime}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-tight mb-8">
              {post.title}
            </h1>

            <div className="space-y-6">
              {post.body.map((paragraph, i) => (
                <p key={i} className="text-lg text-foreground/80 leading-relaxed">{paragraph}</p>
              ))}
            </div>
          </Reveal>

          <Reveal className="mt-16 bg-gradient-hero rounded-2xl p-8 text-center">
            <h2 className="text-xl font-bold mb-3 text-white">Have a Requirement in Mind?</h2>
            <p className="mb-5 text-white/85">Get in touch and our team will help you find the right product.</p>
            <Link to="/quote">
              <Button className="bg-white text-primary hover:bg-white/90 shadow-professional">
                Request a Quote
              </Button>
            </Link>
          </Reveal>
        </article>
      </main>

      <Footer />
    </>
  );
};

export default InsightPostPage;
