import Header from "@/components/Header";
import About from "@/components/About";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

export default function AboutPage() {
  return (
    <>
      <SEO
        title="About BellChem | Leading Chemical Manufacturer in India"
        description="Learn about BellChem (A. K. Jain & Co.), a trusted Indian chemical manufacturer and exporter with over 40 years of excellence in industrial dyes, pigments, and specialty chemicals."
        canonical="https://www.bellchem.in/about"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "@id": "https://www.bellchem.in/about#aboutpage",
          "name": "About BellChem",
          "url": "https://www.bellchem.in/about",
          "mainEntity": {
            "@type": "Organization",
            "@id": "https://www.bellchem.in/#organization",
            "name": "A. K. Jain & Co. (BellChem)",
            "foundingDate": "1984",
            "description":
              "BellChem is a leading Indian manufacturer and exporter of industrial dyes, pigments, textile chemicals, and specialty chemicals, serving global B2B markets for over four decades.",
            "areaServed": "Worldwide"
          }
        }}
      />

      <Header />

      <main>
        <About />
      </main>

      <Footer />
    </>
  );
}
