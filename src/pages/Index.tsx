import Header from "@/components/Header";
import HomeHero from "@/components/HomeHero";
import HomeOverview from "@/components/HomeOverview";
import HomeTestimonials from "@/components/HomeTestimonials";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <>
      <SEO 
        title="Bell Chem - Premium Chemical Solutions & Industrial Dyes | Leading Manufacturer in India"
        description="Leading manufacturer of high-quality chemicals and industrial dyes in India. Serving textile, pharmaceutical, and manufacturing industries with reliable, cost-effective solutions for over four decades."
      />
      <Header />
      <main>
        <HomeHero />
        <HomeOverview />
        <HomeTestimonials />
      </main>
      <Footer />
    </>
  );
};

export default Index;
