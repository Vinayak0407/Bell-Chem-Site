import Header from "@/components/Header";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const ProductsPage = () => {
  return (
    <>
      <SEO
        title="Industrial Dyes & Chemicals Manufacturer & Exporter | BellChem"
        description="Explore BellChem’s complete range of industrial dyes and chemicals including reactive dyes, direct dyes, acid dyes, solvent dyes, pigment dyes, textile auxiliaries, and specialty chemicals for bulk and export supply."
        canonical="https://www.bellchem.in/products"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "@id": "https://www.bellchem.in/products#collection",
          "name": "Industrial Dyes & Chemicals Product Range",
          "url": "https://www.bellchem.in/products",
          "mainEntity": {
            "@type": "Organization",
            "@id": "https://www.bellchem.in/#organization",
            "name": "A. K. Jain & Co. (BellChem)"
          },
          "about": [
            "Reactive Dyes",
            "Direct Dyes",
            "Acid Dyes",
            "Disperse Dyes",
            "Pigment Dyes",
            "Solvent Dyes",
            "Discharge Dyes",
            "Textile Auxiliaries",
            "Industrial Chemicals",
            "Specialty Chemicals"
          ]
        }}
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
