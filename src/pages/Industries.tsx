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
        canonical="https://www.bellchem.in/industries"
      />
      <Header />
      <main>
        <Industries />
      </main>
      <Footer />
    </>
  );
};

export default IndustriesPage;



