import Header from "@/components/Header";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

export default function ContactPage() {
  return (
    <>
      <SEO
        title="Contact BellChem | Get a Quote for Industrial Dyes & Chemicals"
        description="Contact BellChem (A. K. Jain & Co.) for bulk pricing, export inquiries, and technical consultation on industrial dyes, pigments, and specialty chemicals."
        canonical="https://www.bellchem.in/contact"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "@id": "https://www.bellchem.in/contact#contactpage",
          "name": "Contact BellChem",
          "url": "https://www.bellchem.in/contact",
          "mainEntity": {
            "@type": "Organization",
            "@id": "https://www.bellchem.in/#organization",
            "name": "A. K. Jain & Co. (BellChem)",
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "sales",
              "email": "vinayak@bellchem.in",
              "availableLanguage": ["English"]
            },
            "areaServed": "Worldwide"
          }
        }}
      />

      <Header />

      <main className="pt-20">
        <Contact />
      </main>

      <Footer />
    </>
  );
}
