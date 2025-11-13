import Header from "@/components/Header";
import About from "@/components/About";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const AboutPage = () => {
  return (
    <>
      <SEO 
        title="About Bell Chem - Leading Chemical Manufacturer in India"
        description="Learn about Bell Chem's 40+ years of excellence in chemical manufacturing. Discover our commitment to quality, innovation, and environmental responsibility."
      />
      <Header />
      <main className="pt-20">
        <About />
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;

