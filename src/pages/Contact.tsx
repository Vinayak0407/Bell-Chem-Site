import Header from "@/components/Header";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const ContactPage = () => {
  return (
    <>
      <SEO 
        title="Contact Bell Chem - Get Quote | Chemical Manufacturer"
        description="Contact Bell Chem for quotes on industrial dyes and chemicals. Get in touch with our team for consultation and product information."
      />
      <Header />
      <main className="pt-20">
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default ContactPage;






