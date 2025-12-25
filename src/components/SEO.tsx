import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  structuredData?: object;
}

const SEO = ({
  title = "Industrial Dyes & Chemical Supplier | BellChem India",
  description = "BellChem (A. K. Jain & Co.) is a leading B2B supplier and exporter of industrial dyes, pigments, textile chemicals, and specialty chemicals. ISO-certified, REACH-compliant, serving global manufacturers since 1984.",
  canonical = "https://www.bellchem.in",
  ogImage = "https://www.bellchem.in/og-image.jpg",
  ogType = "website",
  structuredData
}: SEOProps) => {

  const fullTitle = title.includes("BellChem")
    ? title
    : `${title} | BellChem (A. K. Jain & Co.)`;

  /**
   * 🔥 STRONG DEFAULT ENTITY SCHEMA (B2B SAFE)
   */
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.bellchem.in/#organization",
    "name": "A. K. Jain & Co. (BellChem)",
    "alternateName": [
      "BellChem",
      "AK Jain & Co",
      "Bell Chem India"
    ],
    "url": "https://www.bellchem.in",
    "logo": "https://www.bellchem.in/logo.png",
    "description":
      "B2B supplier and exporter of industrial dyes, pigments, textile auxiliaries, and specialty chemicals for global manufacturing industries.",
    "foundingDate": "1984",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Ground Floor, Godown No. 198, Tilak Bazar, Khari Baoli",
      "addressLocality": "New Delhi",
      "addressRegion": "Delhi",
      "postalCode": "110006",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "sales",
      "email": "vinayak@bellchem.in"
    },
    "areaServed": [
      "India",
      "Asia",
      "Middle East",
      "Africa",
      "Europe"
    ],
    "knowsAbout": [
      "Industrial Dyes",
      "Acid Dyes",
      "Reactive Dyes",
      "Disperse Dyes",
      "Solvent Dyes",
      "Pigment Dyes",
      "Fluorescent Dyes",
      "Textile Chemicals",
      "Industrial Chemicals",
      "Chemical Export",
      "Bulk Chemical Supply"
    ],
    "sameAs": [
      "https://www.linkedin.com/company/bellchem",
      "https://twitter.com/bellchem"
    ]
  };

  return (
    <Helmet>
      {/* CORE */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta
        name="robots"
        content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
      />
      <meta name="author" content="A. K. Jain & Co. (BellChem)" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* CANONICAL */}
      <link rel="canonical" href={canonical} />

      {/* OPEN GRAPH */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="BellChem" />
      <meta property="og:locale" content="en_IN" />

      {/* TWITTER */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* THEME */}
      <meta name="theme-color" content="#1e3a8a" />

      {/* ICONS */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />

      {/* STRUCTURED DATA */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData || defaultStructuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;
