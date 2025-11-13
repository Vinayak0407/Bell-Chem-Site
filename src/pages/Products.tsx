import Header from "@/components/Header";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const ProductsPage = () => {
  return (
    <>
      <SEO 
        title="Products - Industrial Dyes & Chemicals | Bell Chem"
        description="Explore our comprehensive range of industrial dyes and chemicals. Premium quality reactive dyes, disperse dyes, acid dyes, and specialty chemicals for various industries."
      />
      <Header />
      <main className="pt-20">
        <Services />
      </main>
      <Footer />  
    </>
  );
};

export default ProductsPage;



