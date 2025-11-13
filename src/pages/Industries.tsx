import Header from "@/components/Header";
import Industries from "@/components/Industries";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const IndustriesPage = () => {
  return (
    <>
      <SEO 
        title="Industries We Serve - Chemical Solutions | Bell Chem"
        description="Bell Chem serves diverse industries including textile manufacturing, pharmaceutical, paint & coatings, paper & pulp, leather processing, and water treatment."
      />
      <Header />
      <main className="pt-20">
        <Industries />
      </main>
      <Footer />
    </>
  );
};

export default IndustriesPage;



